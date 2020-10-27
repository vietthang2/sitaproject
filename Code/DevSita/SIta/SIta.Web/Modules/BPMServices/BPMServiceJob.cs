using Newtonsoft.Json;
using Serenity;
using Serenity.Abstractions;
using Serenity.Web;
using Sita.Modules.BPMServices;
using Sita.Modules.BPMServices.DTO;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Messaging;
using System.Threading;
using System.Web;

namespace Sita.Modules.BPMServices
{
    public static class BPMServiceJob
    {
        private static Thread _BPMServices = null;

        public static void StartBPMServicesThread()
        {
            try
            {
                if (_BPMServices == null)
                {
                    _BPMServices = new Thread(new ThreadStart(BPMServicesRun));
                    _BPMServices.Priority = ThreadPriority.Lowest;
                    _BPMServices.Start();
                }
                else if (_BPMServices.ThreadState == ThreadState.Stopped)
                {

                    _BPMServices = new Thread(new ThreadStart(BPMServicesRun));
                    _BPMServices.Start();
                }
                else if (_BPMServices.ThreadState == ThreadState.Unstarted)
                    _BPMServices.Start();

            }
            catch (Exception)
            {
                _BPMServices.DisableComObjectEagerCleanup();
                StartBPMServicesThread();

            }

        }
        public static void EndBPMServicesThread()
        {
            if (_BPMServices != null)
            {
                _BPMServices.Abort();
            }
        }
        private static void BPMServicesRun()
        {
            bool enableEmailService = true;//Convert.ToBoolean(ConfigurationManager.AppSettings["EnableEmailService"]);
            if (enableEmailService)
            {

                //(Dependency.Resolve<IAuthorizationService>() as ImpersonatingAuthorizationService).Impersonate("admin");
                bool isConnected = false;

                //Thread.Sleep(1000); // 10 sec
                //BpmDriver driver = new BpmDriver();
                //var bpmServer = BPMServer();
                //driver.IP = bpmServer.BPMServer.Ip;
                //driver.Port = bpmServer.BPMServer.Port;
                //driver.ClientPort = bpmServer.BPMServer.ClientPort;

                //driver.StartListening(ref isConnected);

            }
        }
        public static BPMServerModel BPMServer()
        {
            //Doc cau hình MSMQ Server từ file config
            try
            {
                using (var reader = new StreamReader(AppDomain.CurrentDomain.BaseDirectory + "ServerConfig.json"))
                {
                    var appSettings = JsonConvert.DeserializeObject<BPMServerModel>(reader.ReadToEnd());
                    return appSettings;


                }
            }
            catch (Exception ex)
            {
                Log.Error(ex.Message);
                return null;
                
            }
        }

    }
}