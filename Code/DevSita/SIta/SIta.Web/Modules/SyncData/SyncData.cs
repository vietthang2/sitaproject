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

namespace Sita.Modules.SyncData
{

    public class SyncData
    {
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
    }

}