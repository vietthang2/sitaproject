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
using System.Text;


namespace Sita.Modules.MSMQServices
{
    public static class MSMQJob
    {
        private static Thread _MSMQServices = null;

        public static void StartMSMQServicesThread()
        {
            try
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
                    _MSMQServices.Start();
                }
                else if (_MSMQServices.ThreadState == ThreadState.Unstarted)
                    _MSMQServices.Start();
            }
            catch (Exception)
            {
                _MSMQServices.DisableComObjectEagerCleanup();
                StartMSMQServicesThread();
            }


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
                    
                    try
                    {
                        var path = BuildPath();
                        System.Xml.XmlDocument xmlDoc = new XmlDocument();
                        Logging.Logger.Information("MSMQ Begin connect to: "+ path);
                        if (MessageQueue.Exists(path) == false)
                        {
                            
                            Logging.Logger.Information("MSMQ Not exist path: " + path);
                            //var msgQueue = MessageQueue.Create(path);
                            //msgQueue.Send("Test ");
                        }
                        else
                        {
                            MessageQueue messageQueue = new MessageQueue(path);
                           // messageQueue.Send("MSMQ: Test data send","Test");
                           // Logging.Logger.Information("MSMQ: Test data send");

                            System.Messaging.Message[] messages = messageQueue.GetAllMessages();
                            Logging.Logger.Information("MSMQ: Begin get data, number:  " + messages.Length);
                            //Nhận tin nhắn
                            var isCheckAll = true;
                            foreach (System.Messaging.Message message in messages)
                            {
                                // chuyển xml về json sau đó chuyển về model
                                message.Formatter = new System.Messaging.XmlMessageFormatter(new Type[] { typeof(string) });
                                
                                xmlDoc.Load(message.BodyStream);
                                var mess = xmlDoc.ToString();
                                
                                try
                                {
                                    string json = JsonConvert.SerializeXmlNode(xmlDoc.FirstChild.NextSibling);
                                    var dailyModel = JsonConvert.DeserializeObject<DailyModel>(json.Replace("@", ""));
                                    Logging.Logger.Information("MSMQ: messages  " + json.Replace("@", ""));
                                    StoreFlight.Save(dailyModel);
                                }
                                catch (Exception ex)
                                {
                                    Logging.Logger.Error("MSMQ: can not parse and save mess");
                                    isCheckAll = false;
                                }
                            }
                            if(isCheckAll)
                                messageQueue.Purge();
                            Logging.Logger.Information("MSMQ: Get all data " + path);
                            messageQueue.Close();
                        }
                        
                       
                    }
                    catch (Exception ex)
                    {
                        Logging.Logger.Error("MSMQ Error:" + ex.Message);
                    }
                    Thread.Sleep(100000); // 1 min

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

                    string path = String.Format("{0}\\private$\\{1}", appSettings.MsmqServer.Ip, appSettings.MsmqServer.QueueName);
                    appSettings.MsmqServer.QueuePath = path;
                    return path;
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