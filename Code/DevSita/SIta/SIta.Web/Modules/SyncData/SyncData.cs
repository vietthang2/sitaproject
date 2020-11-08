using Serenity.Data;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using Microsoft.Synchronization;
using Microsoft.Synchronization.Data;
using Microsoft.Synchronization.Data.SqlServer;
using Serenity;
using Modules.Common;
using Serenity.Abstractions;
using Serenity.Services;
using Serenity.Web;
using MyRow = Sita.Default.Entities.TblConfigSyncDataRow;
using MyRepository = Sita.Default.Endpoints.TblConfigSyncDataController;

namespace Sita.Modules.SyncData
{

    public class SyncData
    {
        public static bool isPorcess = false;
        static string sServerConnection = SqlConnections.NewByKey("Default").ConnectionString;

        static string sClientConnection = SqlConnections.NewByKey("Client").ConnectionString;

        static string sScope = "MainScope2";
        //Get Data From Client Provision
        public static void ProvisionClient()
        {
            try
            {
                SqlConnection serverConn = new SqlConnection(sServerConnection);
                SqlConnection clientConn = new SqlConnection(sClientConnection);

                //Drop scope_Info Table
                string cmdText = @"IF EXISTS(SELECT * FROM INFORMATION_SCHEMA.TABLES 
                   WHERE TABLE_NAME='scope_info') DROP table scope_info";
                clientConn.Open();
                SqlCommand cmd = new SqlCommand(cmdText, clientConn);
                cmd.ExecuteScalar();
                clientConn.Close();


                List<string> tables = new List<string>();
                //tables.Add("tblField");
                tables.Add("tblFlight");
                //tables.Add("tblBags");
                //tables.Add("Users");
                //tables.Add("Roles");
                //tables.Add("RolePermissions");



                var scopeDesc = new DbSyncScopeDescription("MainScope2");
                foreach (var tbl in tables) //Add Tables in Scope
                {
                    scopeDesc.Tables.Add(SqlSyncDescriptionBuilder.GetDescriptionForTable(tbl, clientConn));
                }

                SqlSyncScopeProvisioning clientProvision = new SqlSyncScopeProvisioning(clientConn, scopeDesc); //Provisioning

                //skip creating the user tables
                clientProvision.SetCreateTableDefault(DbSyncCreationOption.Skip);


                //skip creating the change tracking tables
                clientProvision.SetCreateTrackingTableDefault(DbSyncCreationOption.CreateOrUseExisting);

                //skip creating the change tracking triggers
                clientProvision.SetCreateTriggersDefault(DbSyncCreationOption.Skip);

                //skip creating the insert/update/delete/selectrow SPs including those for metadata
                clientProvision.SetCreateProceduresDefault(DbSyncCreationOption.CreateOrUseExisting);

                //create new SelectChanges SPs for selecting changes for the new scope
                //the new SelectChanges SPs will have a guid suffix
                clientProvision.SetCreateProceduresForAdditionalScopeDefault(DbSyncCreationOption.CreateOrUseExisting);


                clientProvision.Apply();
            }
            catch (Exception ex)
            {

                Log.Error(ex.Message);
            }
        }
        //Set Data To Server Provision
        public static void ProvisionServer()
        {
            try
            {

                SqlConnection serverConn = new SqlConnection(sServerConnection);
                List<string> tables = new List<string>();
                //tables.Add("tblBags");
                tables.Add("tblFlight");
                //tables.Add("tblField");
                
                //tables.Add("Users");
                //tables.Add("Roles");
                //tables.Add("RolePermissions");
                var scopeDesc = new DbSyncScopeDescription("MainScope2");
                foreach (var tbl in tables)
                {
                    scopeDesc.Tables.Add(SqlSyncDescriptionBuilder.GetDescriptionForTable(tbl, serverConn));
                }
                //RemoveScope(serverConn, scopeDesc);

                string cmdText = @"IF EXISTS(SELECT * FROM INFORMATION_SCHEMA.TABLES 
                   WHERE TABLE_NAME='scope_info') DROP table scope_info";
                serverConn.Open();
                SqlCommand cmd = new SqlCommand(cmdText, serverConn);
                cmd.ExecuteScalar();
                serverConn.Close();


                SqlSyncScopeProvisioning serverProvision = new SqlSyncScopeProvisioning(serverConn, scopeDesc); // Create Provision From All Tables

                //skip creating the user tables
                serverProvision.SetCreateTableDefault(DbSyncCreationOption.Skip);

                //skip creating the change tracking tables
                serverProvision.SetCreateTrackingTableDefault(DbSyncCreationOption.CreateOrUseExisting);

                //skip creating the change tracking triggers
                serverProvision.SetCreateTriggersDefault(DbSyncCreationOption.Skip);

                //skip creating the insert/update/delete/selectrow SPs including those for metadata
                serverProvision.SetCreateProceduresDefault(DbSyncCreationOption.CreateOrUseExisting);

                serverProvision.Apply();

            }
            catch (Exception ex)
            {
                Log.Error(ex.Message);
            }

        }
        public static void Sync()

        {
            isPorcess = true;
            try
            {
                SqlConnection serverConn = new SqlConnection(sServerConnection);

                SqlConnection clientConn = new SqlConnection(sClientConnection);

                SyncOrchestrator syncOrchestrator = new SyncOrchestrator();

                SqlSyncProvider LocalProvider = new SqlSyncProvider(sScope, serverConn);

                SqlSyncProvider RemoteProvider = new SqlSyncProvider(sScope, clientConn);

                LocalProvider.MemoryDataCacheSize = 100000;
                RemoteProvider.MemoryDataCacheSize = 100000;

                //Set application transaction size on destination provider.
                RemoteProvider.ApplicationTransactionSize = 50000;
                syncOrchestrator.LocalProvider = LocalProvider;
                syncOrchestrator.RemoteProvider = RemoteProvider;
                //Count transactions



                syncOrchestrator.Direction = SyncDirectionOrder.DownloadAndUpload;

                ((SqlSyncProvider)syncOrchestrator.LocalProvider).ApplyChangeFailed += new EventHandler<DbApplyChangeFailedEventArgs>(Program_ApplyChangeFailed);

                SyncOperationStatistics syncStats = syncOrchestrator.Synchronize();

                Logging.Logger.Information("SyncData: Start Time: " + syncStats.SyncStartTime);

                Logging.Logger.Information("SyncData: Total Changes Uploaded: " + syncStats.UploadChangesApplied);
                Logging.Logger.Information("SyncData: Total Changes Download: " + syncStats.DownloadChangesApplied);
                Logging.Logger.Information("SyncData: Total Changes fail: " + syncStats.DownloadChangesFailed);

                //Console.WriteLine("Total Changes Downloaded: " + syncStats.DownloadChangesTotal);

                Logging.Logger.Information("SyncData: Complete Time: " + syncStats.SyncEndTime);

                isPorcess = false;
            }
            catch (Exception ex)
            {

                isPorcess = false;
            }




        }
        static void Program_ApplyChangeFailed(object sender, DbApplyChangeFailedEventArgs e)

        {

            Console.WriteLine(e.Conflict.Type);

            
            Logging.Logger.Information("SyncData: Error " + e.Error);
            isPorcess = false;
        }
        public static void Run()
        {
            Logging.Logger.Information("SyncData: Begining.....: ");
            ProvisionServer();
            ProvisionClient();
            
            Sync();
        }
        public  void RunSchedule()
        {
            try
            {
                Logging.Logger.Information("SyncData: Check Period.....: ");
                (Dependency.Resolve<IAuthorizationService>() as ImpersonatingAuthorizationService).Impersonate("admin");

                var connection = SqlConnections.NewFor<MyRow>();
                var request = new ListRequest();

                request.Criteria = new Criteria("Id") == "1";
                ListResponse<MyRow> rows =
                new MyRepository().List(connection, request);
                if (rows.TotalCount == 0)
                    return;
                var config = rows.Entities[0];
                 if (SyncData.isPorcess == true) 
                    return;
                if (config.SynchronizeOnlyPeriod == true)
                {
                    var days = config.Period.Value;
                    var lastSyncDate = config.LastSyncDate==null? DateTime.Now: config.LastSyncDate.Value;
                    if (lastSyncDate.AddDays(days) >= DateTime.Now)
                    {
                        SyncData.Run();
                        config.LastSyncDate = DateTime.Now;
                        connection.UpdateById<MyRow>(config);
                    }
                    else
                        Logging.Logger.Information("SyncData: Next sync date time: " + lastSyncDate.AddDays(days));

                }
                (Dependency.Resolve<IAuthorizationService>() as ImpersonatingAuthorizationService).UndoImpersonate();
            }
            catch (Exception ex)
            {
                Logging.Logger.Error("SyncData: Error when run RunSchedule: " + ex.Message);
                
            }
        }
        public static void RemoveScope(SqlConnection Conn, DbSyncScopeDescription scope)
        {
            Conn.Open();
            foreach (var table in scope.Tables)
            {
                SqlCommand dropTracking = new SqlCommand(@"
            IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[" + table.UnquotedLocalName + @"_tracking]') AND type in (N'U'))
            DROP TABLE [dbo].[" + table.UnquotedLocalName + "_tracking]", Conn);
                dropTracking.ExecuteNonQuery();

                SqlCommand dropTriggers = new SqlCommand(@"
            IF  EXISTS (SELECT * FROM sys.triggers WHERE object_id = OBJECT_ID(N'[dbo].[" + table.UnquotedLocalName + @"_delete_trigger]'))
            DROP TRIGGER [dbo].[" + table.UnquotedLocalName + @"_delete_trigger];

            IF  EXISTS (SELECT * FROM sys.triggers WHERE object_id = OBJECT_ID(N'[dbo].[" + table.UnquotedLocalName + @"_insert_trigger]'))
            DROP TRIGGER [dbo].[" + table.UnquotedLocalName + @"_insert_trigger];

            IF  EXISTS (SELECT * FROM sys.triggers WHERE object_id = OBJECT_ID(N'[dbo].[" + table.UnquotedLocalName + @"_update_trigger]'))
            DROP TRIGGER [dbo].[" + table.UnquotedLocalName + @"_update_trigger];
        ", Conn);
                dropTriggers.ExecuteNonQuery();

                SqlCommand dropStoredProc = new SqlCommand(@"
            IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[" + table.UnquotedLocalName + @"_delete]') AND type in (N'P', N'PC'))
            DROP PROCEDURE [dbo].[" + table.UnquotedLocalName + @"_delete];

            IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[" + table.UnquotedLocalName + @"_deletemetadata]') AND type in (N'P', N'PC'))
            DROP PROCEDURE [dbo].[" + table.UnquotedLocalName + @"_deletemetadata];

            IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[" + table.UnquotedLocalName + @"_insert]') AND type in (N'P', N'PC'))
            DROP PROCEDURE [dbo].[" + table.UnquotedLocalName + @"_insert];

            IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[" + table.UnquotedLocalName + @"_insertmetadata]') AND type in (N'P', N'PC'))
            DROP PROCEDURE [dbo].[" + table.UnquotedLocalName + @"_insertmetadata];

            IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[" + table.UnquotedLocalName + @"_selectchanges]') AND type in (N'P', N'PC'))
            DROP PROCEDURE [dbo].[" + table.UnquotedLocalName + @"_selectchanges];

            IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[" + table.UnquotedLocalName + @"_selectrow]') AND type in (N'P', N'PC'))
            DROP PROCEDURE [dbo].[" + table.UnquotedLocalName + @"_selectrow];

            IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[" + table.UnquotedLocalName + @"_update]') AND type in (N'P', N'PC'))
            DROP PROCEDURE [dbo].[" + table.UnquotedLocalName + @"_update];

            IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[" + table.UnquotedLocalName + @"_updatemetadata]') AND type in (N'P', N'PC'))
            DROP PROCEDURE [dbo].[" + table.UnquotedLocalName + @"_updatemetadata];
        ", Conn);
                dropStoredProc.ExecuteNonQuery();
            }

            //SqlCommand getScopeGuid = new SqlCommand(@"
            //USE [" + Conn.Database + @"]
            //SELECT scope_config_id FROM scope_info WHERE scope_name = '" + scope.ScopeName + "'", Conn);
            //try
            //{
            //    var reader = getScopeGuid.ExecuteReader();

            //    if (reader.HasRows)
            //    {
            //        reader.Read();

            //        var id = reader.GetGuid(0);

            //        reader.Close();

            //        SqlCommand deleteScope = new SqlCommand(@"
            //    DELETE FROM scope_info WHERE scope_config_id = '" + id + @"';
            //    DELETE FROM scope_config WHERE config_id = '" + id + @"';
            //", Conn);
            //        deleteScope.ExecuteNonQuery();
            //    }

            //}
            //catch (Exception)
            //{

                
            //}
            
            Conn.Close();
        }
        
    }

}