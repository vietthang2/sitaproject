namespace Sita
{
    using Administration;
    using Serenity;
    using Serenity.Abstractions;
    using Serenity.Data;
    using Serenity.Services;
    using Serenity.Web;
    using System;
    using System.Configuration;
    using MyRow = Sita.Default.Entities.TblConfigSyncDataRow;
    using MyRepository = Sita.Default.Endpoints.TblConfigSyncDataController;
    using System.Linq;
    using Sita.Modules.SyncData;

    public static partial class SiteInitialization
    {
        
        public static void ApplicationStart()
        {
            try
            {
                SqlSettings.AutoQuotedIdentifiers = true;
                Serenity.Web.CommonInitialization.Run();

                var registrar = Dependency.Resolve<IDependencyRegistrar>();
                registrar.RegisterInstance<IAuthorizationService>(new Administration.AuthorizationService());
                registrar.RegisterInstance<IAuthenticationService>(new Administration.AuthenticationService());
                registrar.RegisterInstance<IPermissionService>(new LogicOperatorPermissionService(new Administration.PermissionService()));
                registrar.RegisterInstance<IUserRetrieveService>(new Administration.UserRetrieveService());
                registrar.RegisterInstance<IAuthorizationService>(new ImpersonatingAuthorizationService(new Administration.AuthorizationService()));
                if (!ConfigurationManager.AppSettings["LDAP"].IsTrimmedEmpty())
                    registrar.RegisterInstance<IDirectoryService>(new LdapDirectoryService());

                if (!ConfigurationManager.AppSettings["ActiveDirectory"].IsTrimmedEmpty())
                    registrar.RegisterInstance<IDirectoryService>(new ActiveDirectoryService());

                InitializeExceptionLog();
            }
            catch (Exception ex)
            {
                ex.Log();
                throw;
            }

            foreach (var databaseKey in databaseKeys)
            {
                EnsureDatabase(databaseKey);
                RunMigrations(databaseKey);
            }
            CheckSyncData();
        }

        public static void ApplicationEnd()
        {
        }
        public static void CheckSyncData()
        {
            
            var connection = SqlConnections.NewFor<MyRow>();
            var request = new ListRequest();

            request.Criteria = new Criteria("Id") == "1";
            ListResponse<MyRow> rows =
            new MyRepository().List(connection, request);
            if (rows.TotalCount == 0)
                return;
            var config = rows.Entities[0];
            if (config.SynchronizeLogWhenReturns == true)
            {
                SyncData.Run();
            }
        }
    }
}