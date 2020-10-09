using Modules.Common;
using Newtonsoft.Json;
using Serenity;
using Serenity.Abstractions;
using Serenity.Web;
using Sita.Modules.MSMQServices.DTO;
using Sita.Modules.RabbitMQ;
using Sita.Modules.MSMQServices.DTO;
using System;
using System.ComponentModel;
using System.IO;
using System.Messaging;
using System.Threading;
using System.Web;
using System.Xml;
using Sita.Modules.Default.TblFlight;

namespace Sita.Modules.MSMQServices
{
    public static class MSMQJob
    {
        private static Thread _MSMQServices = null;

        public static void StartMSMQServicesThread()
        {
            if (_MSMQServices == null)
            {
                _MSMQServices = new Thread(new ThreadStart(MSMQServicesRun));
                _MSMQServices.Priority = ThreadPriority.Lowest;
                _MSMQServices.Start();
            }
            else if (_MSMQServices.ThreadState == ThreadState.Stopped)
            {

                _MSMQServices = new Thread(new ThreadStart(MSMQServicesRun));
            }
            //else if (_MSMQServices.ThreadState == ThreadState.Unstarted)
            //    _MSMQServices.Start();


        }
        public static void EndMSMQServicesThread()
        {
            if (_MSMQServices != null)
            {
                _MSMQServices.Abort();
            }
        }
        private static void MSMQServicesRun()
         {
            bool enableEmailService = true;//Convert.ToBoolean(ConfigurationManager.AppSettings["EnableEmailService"]);
            if (enableEmailService)
            {

                (Dependency.Resolve<IAuthorizationService>() as ImpersonatingAuthorizationService).Impersonate("admin");
                while (true)
                {
                    Thread.Sleep(100000); // 1 min
                    try
                    {
                        var path = BuildPath();
                        Logging.Logger.Information("MSMQ Begin connect to: "+ path);
                        if (MessageQueue.Exists(path) == false)
                        {
                            
                            Logging.Logger.Information("MSMQ Not exist path: " + path);
                            var msgQueue = MessageQueue.Create(path);
                        //    msgQueue.Send("Test ");
                        }
                        else
                        {
                            MessageQueue messageQueue = new MessageQueue(path);
                            System.Messaging.Message[] messages = messageQueue.GetAllMessages();
                            Logging.Logger.Information("MSMQ: Begin Get data  " + path);
                            //Nhận tin nhắn
                            foreach (System.Messaging.Message message in messages)
                            {
                                // chuyển xml về json sau đó chuyển về model
                                message.Formatter = new XmlMessageFormatter(new String[] { "System.String,mscorlib" });
                                Logging.Logger.Information("MSMQ: messages  " + message.Body.ToString());
                                XmlDocument doc = new XmlDocument();
                                doc.LoadXml(message.Body.ToString());
                                //doc.RemoveChild(doc.FirstChild);
                                string json = JsonConvert.SerializeXmlNode(doc.FirstChild.NextSibling);
                                var dailyModel = JsonConvert.DeserializeObject<DailyModel>(json.Replace("@", ""));
                                StoreFlight.Save(dailyModel);
                            }

                            messageQueue.Purge();
                            Logging.Logger.Information("MSMQ: Get all data " + path);
                        }
                        
                       
                    }
                    catch (Exception ex)
                    {
                      //  Logging.Logger.Error("MSMQ Error:" + ex.Message);
                    }

                }
                (Dependency.Resolve<IAuthorizationService>() as ImpersonatingAuthorizationService).UndoImpersonate();
            }
        }
        public static string BuildPath()
        {
            //Doc cau hình MSMQ Server từ file config
            try
            {
                using (var reader = new StreamReader(AppDomain.CurrentDomain.BaseDirectory + "ServerConfig.json"))
                {
                    var appSettings = JsonConvert.DeserializeObject<ServerModel>(reader.ReadToEnd());

                    string path = String.Format("{0}\\Private$\\{1}", appSettings.MsmqServer.Ip, appSettings.MsmqServer.QueueName);
                    appSettings.MsmqServer.QueuePath = path;
                    return path;
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