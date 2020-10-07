using Newtonsoft.Json;
using Serenity;
using Serenity.Abstractions;
using Serenity.Web;
using Sita.Modules.BSMServices;
using Sita.Modules.BSMServices.DTO;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Messaging;
using System.Threading;
using System.Web;

namespace Sita.Modules.BSMServices
{
    public static class BSMServiceJob
    {
        private static Thread _BSMServices = null;

        public static void StartBSMServicesThread()
        {
            if (_BSMServices == null)
            {
                _BSMServices = new Thread(new ThreadStart(BSMServicesRun));
                _BSMServices.Priority = ThreadPriority.Lowest;
                _BSMServices.Start();
            }
            else if (_BSMServices.ThreadState == ThreadState.Stopped)
            {

                _BSMServices = new Thread(new ThreadStart(BSMServicesRun));
            }
            //else if (_BSMServices.ThreadState == ThreadState.Unstarted)
            //    _BSMServices.Start();


        }
        public static void EndBSMServicesThread()
        {
            if (_BSMServices != null)
            {
                _BSMServices.Abort();
            }
        }
        private static void BSMServicesRun()
        {
            bool enableEmailService = true;//Convert.ToBoolean(ConfigurationManager.AppSettings["EnableEmailService"]);
            if (enableEmailService)
            {

                //(Dependency.Resolve<IAuthorizationService>() as ImpersonatingAuthorizationService).Impersonate("admin");
                bool isConnected = false;
                BsmDriver driver = new BsmDriver();
                var bsmServer = BSMServer();
                driver.IP = bsmServer.BSMServer.Ip;
                driver.Port = bsmServer.BSMServer.Port;
                driver.ClientPort = bsmServer.BSMServer.ClientPort;
                while (true && !isConnected)
                {
                   
                        Thread.Sleep(5000); // 10 sec
                       
                        driver.StartListening(ref isConnected);
                    
                    
                    


                }
                //(Dependency.Resolve<IAuthorizationService>() as ImpersonatingAuthorizationService).UndoImpersonate();
            }
        }
        public static BSMServerModel BSMServer()
        {
            //Doc cau hình MSMQ Server từ file config
            try
            {
                using (var reader = new StreamReader(AppDomain.CurrentDomain.BaseDirectory + "ServerConfig.json"))
                {
                    var appSettings = JsonConvert.DeserializeObject<BSMServerModel>(reader.ReadToEnd());
                    return appSettings;


                }
            }
            catch (Exception ex)
            {
                Log.Error(ex.Message);
                throw;
            }
        }

    }
}