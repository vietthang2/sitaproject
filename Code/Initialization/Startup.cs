using Microsoft.AspNetCore.Antiforgery;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json.Serialization;
using ECNET.AppServices;
using Serenity;
using Serenity.Abstractions;
using Serenity.Data;
using Serenity.Extensions.DependencyInjection;
using Serenity.Localization;
using Serenity.Services;
using Serenity.Web.Middleware;
using System.Data.SqlClient;
using System.IO;
using System;
using Serenity.Web;
using Hangfire;
using Hangfire.SqlServer;
using Hangfire.Dashboard;
using Hangfire.Annotations;

namespace ECNET
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddAntiforgery(options =>
            {
                options.HeaderName = "X-CSRF-TOKEN";
            });

            services.AddMvc(options =>
            {
                options.Filters.Add(new AutoValidateAntiforgeryTokenAttribute());
                options.Filters.Add(typeof(AntiforgeryCookieResultFilterAttribute));
                options.ModelBinderProviders.Insert(0, new ServiceEndpointModelBinderProvider());
                options.Conventions.Add(new ServiceEndpointActionModelConvention());
            })
            .AddJsonOptions(options =>
            {
                options.SerializerSettings.ContractResolver = new DefaultContractResolver();
            });

            services.AddAuthentication(o =>
            {
                o.DefaultScheme = CookieAuthenticationDefaults.AuthenticationScheme;
                o.DefaultAuthenticateScheme = CookieAuthenticationDefaults.AuthenticationScheme;
                o.DefaultChallengeScheme = CookieAuthenticationDefaults.AuthenticationScheme;
            }).AddCookie(o =>
            {
                o.Cookie.Name = ".AspNetAuth";
                o.LoginPath = new PathString("/Account/Login/");
                o.AccessDeniedPath = new PathString("/Account/AccessDenied");
                o.ExpireTimeSpan = TimeSpan.FromMinutes(30);
                o.SlidingExpiration = true;
            });

            services.AddLogging(loggingBuilder =>
            {
                loggingBuilder.AddSeq(Configuration.GetSection("Seq"));
                loggingBuilder.AddConfiguration(Configuration.GetSection("Logging"));
                loggingBuilder.AddConsole();
                loggingBuilder.AddDebug();
                
                //loggingBuilder.AddSeq();
            });

            services.AddSingleton<IHttpContextAccessor, HttpContextAccessor>();
            services.AddConfig(Configuration);
            services.AddCaching();
            services.AddTextRegistry();
            services.AddFileLogging();
            services.AddSingleton<IAuthenticationService, Administration.AuthenticationService>();
            services.AddSingleton<IAuthorizationService, Administration.AuthorizationService>();
            services.AddSingleton<IUserRetrieveService, Administration.UserRetrieveService>();
            services.AddSingleton<IPermissionService, Administration.PermissionService>();
            //var registrar = Dependency.Resolve<IDependencyRegistrar>();
            services.AddSingleton<IRequestContext, Serenity.Web.RequestContext>();
            services.AddSingleton<IAuthorizationService>(new ImpersonatingAuthorizationService(new Administration.AuthorizationService()));
            services.AddHangfire(configuration => configuration
                .SetDataCompatibilityLevel(CompatibilityLevel.Version_170)
                .UseSimpleAssemblyNameTypeSerializer()
                .UseRecommendedSerializerSettings()
                // Reference the Default connection. If you want to add a new connection to 
                // Hangfire's database then remember to add this connection in your appsettings.json                
                .UseSqlServerStorage(Configuration.GetValue<string>("Data:Default:ConnectionString"), new SqlServerStorageOptions
                {
                    CommandBatchMaxTimeout = TimeSpan.FromMinutes(5),
                    SlidingInvisibilityTimeout = TimeSpan.FromMinutes(5),
                    QueuePollInterval = TimeSpan.Zero,
                    UseRecommendedIsolationLevel = true,
                    UsePageLocksOnDequeue = true,
                    DisableGlobalLocks = true
                })
            );

            // Add the processing server as IHostedService
            services.AddHangfireServer();

        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory, IAntiforgery antiforgery)
        {
            Serenity.Extensibility.ExtensibilityHelper.SelfAssemblies = new System.Reflection.Assembly[]
            {
                typeof(LocalTextRegistry).Assembly,
                typeof(SqlConnections).Assembly,
                typeof(Row).Assembly,
                typeof(SaveRequestHandler<>).Assembly,
                typeof(WebSecurityHelper).Assembly,
                typeof(Startup).Assembly
            };

            SqlSettings.AutoQuotedIdentifiers = true;
            RegisterDataProviders();

            Dependency.SetResolver(new AppServices.DependencyResolver(app.ApplicationServices));
            

            var textRegistry = app.ApplicationServices.GetRequiredService<ILocalTextRegistry>();
            textRegistry.AddNestedTexts();
            textRegistry.AddNestedPermissions();
            textRegistry.AddEnumTexts();
            textRegistry.AddRowTexts();
            var contentRoot = env.ContentRootPath;
            textRegistry.AddJsonTexts(System.IO.Path.Combine(env.WebRootPath, "Scripts/serenity/texts".Replace('/', Path.DirectorySeparatorChar)));
            textRegistry.AddJsonTexts(System.IO.Path.Combine(env.WebRootPath, "Scripts/site/texts".Replace('/', Path.DirectorySeparatorChar)));
            textRegistry.AddJsonTexts(System.IO.Path.Combine(env.ContentRootPath, "App_Data/texts".Replace('/', Path.DirectorySeparatorChar)));

            var reqLocOpt = new RequestLocalizationOptions();
            reqLocOpt.SupportedUICultures = UserCultureProvider.SupportedCultures;
            reqLocOpt.SupportedCultures = UserCultureProvider.SupportedCultures;
            reqLocOpt.RequestCultureProviders.Clear();
            reqLocOpt.RequestCultureProviders.Add(new UserCultureProvider());
            app.UseRequestLocalization(reqLocOpt);

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.UseStaticFiles();
            app.UseAuthentication();

            app.UseDynamicScripts();
            app.UseMvc(routes =>
            {
            });
            app.UseHangfireDashboard("/jobs", new DashboardOptions()
            {
                Authorization = new[] { new CustomAuthorizeFilter() }
            });
            BackgroundJob.Enqueue<ECNET.Web.Modules.Common.Jobs.EmailScan>(job => job.Run());
            RecurringJob.AddOrUpdate<ECNET.Web.Modules.Common.Jobs.EmailScan>(job => job.Run(), Cron.Daily());
         //   RecurringJob.AddOrUpdate<ECNET.Web.Modules.Common.Jobs.EmailScan>(job => job.Run(), "0 00 01 ? * *");
            BackgroundJob.Enqueue<ECNET.Web.Modules.Common.Jobs.ScheduleScan>(job => job.Run());
            RecurringJob.AddOrUpdate<ECNET.Web.Modules.Common.Jobs.ScheduleScan>(job => job.Run(), Cron.Daily());
            RecurringJob.AddOrUpdate<ECNET.Web.Modules.Common.Jobs.ScheduleScan>(job => job.Run(), "0 00 01 ? * *");
            DataMigrations.Initialize();
        }

        public static void RegisterDataProviders()
        {
#if COREFX
            DbProviderFactories.RegisterFactory("System.Data.SqlClient", SqlClientFactory.Instance);
            DbProviderFactories.RegisterFactory("Microsoft.Data.Sqlite", Microsoft.Data.Sqlite.SqliteFactory.Instance);

            // to enable FIREBIRD: add FirebirdSql.Data.FirebirdClient reference, set connections, and uncomment line below
            // DbProviderFactories.RegisterFactory("FirebirdSql.Data.FirebirdClient", FirebirdSql.Data.FirebirdClient.FirebirdClientFactory.Instance);

            // to enable MYSQL: add MySql.Data reference, set connections, and uncomment line below
            // DbProviderFactories.RegisterFactory("MySql.Data.MySqlClient", MySql.Data.MySqlClient.MySqlClientFactory.Instance);

            // to enable POSTGRES: add Npgsql reference, set connections, and uncomment line below
            // DbProviderFactories.RegisterFactory("Npgsql", Npgsql.NpgsqlFactory.Instance);
#endif
        }
        public class CustomAuthorizeFilter : IDashboardAuthorizationFilter
        {
            public bool Authorize([NotNull] DashboardContext context)
            {
                return Authorization.HasPermission(Administration.PermissionKeys.Security);
            }
        }
    }
}
