using Serenity.Data;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Threading;
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

        static string sScope = "MainScope";
        //Get Data From Client Provision
        public static void ProvisionClient()
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
            tables.Add("tblField");
            tables.Add("tblFlight");
            tables.Add("tblBags");
            tables.Add("Users");
            tables.Add("Roles");
            tables.Add("RolePermissions");
            tables.Add("UserPermissions");


            var scopeDesc = new DbSyncScopeDescription("MainScope");
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
            clientProvision.SetCreateProceduresForAdditionalScopeDefault(DbSyncCreationOption.Create);


            clientProvision.Apply();
        }
        //Set Data To Server Provision
        public static void ProvisionServer()
        {

            SqlConnection serverConn = new SqlConnection(sServerConnection);

            string cmdText = @"IF EXISTS(SELECT * FROM INFORMATION_SCHEMA.TABLES 
                   WHERE TABLE_NAME='scope_info') DROP table scope_info";
            serverConn.Open();
            SqlCommand cmd = new SqlCommand(cmdText, serverConn);
            cmd.ExecuteScalar();
            serverConn.Close();

            List<string> tables = new List<string>();
            tables.Add("tblField");
            tables.Add("tblFlight");
            tables.Add("tblBags");
            tables.Add("Users");
            tables.Add("Roles");
            tables.Add("RolePermissions");
            tables.Add("UserPermissions");
            




        var scopeDesc = new DbSyncScopeDescription("MainScope");
            foreach (var tbl in tables)
            {
                scopeDesc.Tables.Add(SqlSyncDescriptionBuilder.GetDescriptionForTable(tbl, serverConn));
            }

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
        public static void Sync()

        {
            isPorcess = true;
            SqlConnection serverConn = new SqlConnection(sServerConnection);

            SqlConnection clientConn = new SqlConnection(sClientConnection);

            SyncOrchestrator syncOrchestrator = new SyncOrchestrator();

            syncOrchestrator.LocalProvider = new SqlSyncProvider(sScope, clientConn);

            syncOrchestrator.RemoteProvider = new SqlSyncProvider(sScope, serverConn);

            syncOrchestrator.Direction = SyncDirectionOrder.Upload;

            ((SqlSyncProvider)syncOrchestrator.LocalProvider).ApplyChangeFailed += new EventHandler<DbApplyChangeFailedEventArgs>(Program_ApplyChangeFailed);

            SyncOperationStatistics syncStats = syncOrchestrator.Synchronize();

            Logging.Logger.Information("SyncData: Start Time: " + syncStats.SyncStartTime);

            Logging.Logger.Information("SyncData: Total Changes Uploaded: " + syncStats.UploadChangesTotal);

            //Console.WriteLine("Total Changes Downloaded: " + syncStats.DownloadChangesTotal);

            Logging.Logger.Information("SyncData: Complete Time: " + syncStats.SyncEndTime);

            isPorcess = false;




        }
        static void Program_ApplyChangeFailed(object sender, DbApplyChangeFailedEventArgs e)

        {

            Console.WriteLine(e.Conflict.Type);

            Console.WriteLine(e.Error);

        }
        public static void Run()
        {
            Logging.Logger.Information("SyncData: Begining.....: ");
            ProvisionClient();
            ProvisionServer();
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
                throw;
            }
        }
    }

}