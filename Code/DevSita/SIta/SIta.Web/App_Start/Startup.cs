using Hangfire;
using Hangfire.SqlServer;
using Microsoft.Owin;
using Modules.Common;
using Owin;
using Serenity;
using Serenity.Data;
using Sita.Modules.BSMServices;
using Sita.Modules.MSMQServices;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Web;


[assembly: OwinStartup(typeof(Sita.Startup))]

namespace Sita
{
    public class Startup
    {
        private IEnumerable<IDisposable> GetHangfireServers()
        {
            GlobalConfiguration.Configuration
                .SetDataCompatibilityLevel(CompatibilityLevel.Version_170)
                .UseSimpleAssemblyNameTypeSerializer()
                .UseRecommendedSerializerSettings()
                // Reference the Default connection. If you want to add a new connection to 
                // Hangfire's database then remember to add this connection in your Web.config
                .UseSqlServerStorage(SqlConnections.GetConnectionString("Default").ConnectionString,
                    new SqlServerStorageOptions
                    {
                        CommandBatchMaxTimeout = TimeSpan.FromMinutes(5),
                        SlidingInvisibilityTimeout = TimeSpan.FromMinutes(5),
                        QueuePollInterval = TimeSpan.Zero,
                        UseRecommendedIsolationLevel = true,
                        UsePageLocksOnDequeue = true,
                        DisableGlobalLocks = true
                    });
            

            yield return new BackgroundJobServer();
        }

        public void Configuration(IAppBuilder app)
        {
            var options = new DashboardOptions
            {
                // You can add your own rules here, feedback welcome
                Authorization = new[] {
                    new AuthorizationFilter() {
                        Users = "admin"
                    }
                },
                AppPath = VirtualPathUtility.ToAbsolute("~")
            };

            app.UseHangfireAspNet(GetHangfireServers);
            app.UseHangfireDashboard("/jobs", options);
            Logging.InitLogging();
            // Setting up some example jobs
            BackgroundJob.Enqueue<MSMQServices>(job => job.Run());
            RecurringJob.AddOrUpdate<MSMQServices>(job => job.Run(), Cron.Minutely);
            //RecurringJob.AddOrUpdate<MSMQServices>(job => job.Run(), "0 * * * *");

            BackgroundJob.Enqueue<BSMServices>(job => job.Run());
            RecurringJob.AddOrUpdate<BSMServices>(job => job.Run(), Cron.Minutely);
            //RecurringJob.AddOrUpdate<BSMServices>(job => job.Run(), "0 * * * *");
            
            Sita.Modules.RabbitMQ.RabbitSubscribe.StartSubscribeThread();

        }
    }
}