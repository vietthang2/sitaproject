using Hangfire;
using Hangfire.SqlServer;
using Microsoft.Owin;
using Modules.Common;
using Owin;
using Serenity;
using Serenity.Data;
using Sita.Modules.BPMServices;
using Sita.Modules.BSMServices;
using Sita.Modules.MSMQServices;
using Sita.Modules.SyncData;
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
            
            Sita.Modules.RabbitMQ.RabbitSubscribe.StartSubscribeThread();

            // Sita.Modules.RabbitMQ.RabbitRemoteSubscribe.StartSubscribeThread();
            // Setting up some example jobs
            BackgroundJob.Enqueue<MSMQServices>(job => job.Run());
            RecurringJob.AddOrUpdate<MSMQServices>(job => job.Run(), Cron.Hourly);
            RecurringJob.AddOrUpdate<BSMServices>(job => job.Run(), "*/3 * * * *");

            BackgroundJob.Enqueue<BSMServices>(job => job.Run());
            RecurringJob.AddOrUpdate<BSMServices>(job => job.Run(), Cron.Minutely);
            RecurringJob.AddOrUpdate<BSMServices>(job => job.Run(), "*/1 * * * *");

            BackgroundJob.Enqueue<BPMServices>(job => job.Run());
            RecurringJob.AddOrUpdate<BPMServices>(job => job.Run(), Cron.Minutely);
            RecurringJob.AddOrUpdate<BPMServices>(job => job.Run(), "*/1 * * * *");

            BackgroundJob.Enqueue<ScheduleServices>(job => job.Run());
            RecurringJob.AddOrUpdate<ScheduleServices>(job => job.Run(), Cron.Daily);
            RecurringJob.AddOrUpdate<ScheduleServices>(job => job.Run(), "0 0 * * *");
            //Sync Data
            //BackgroundJob.Enqueue<SyncData>(job => job.RunSchedule());
            //RecurringJob.AddOrUpdate<SyncData>(job => job.RunSchedule(), "0 1-2 * * *");




        }
    }
}