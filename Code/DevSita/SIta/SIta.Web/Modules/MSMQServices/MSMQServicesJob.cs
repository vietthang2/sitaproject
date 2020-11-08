using Modules.Common;
using Newtonsoft.Json;
using Serenity;
using Serenity.Abstractions;
using Serenity.Web;
using Sita.Modules.MSMQServices.DTO;
using System;
using System.IO;
using System.Messaging;
using System.Threading;
using System.Xml;
using Sita.Modules.Default.TblFlight;
using System.Text;
using System.Xml.Serialization;

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
                          

                            System.Messaging.Message[] messages = messageQueue.GetAllMessages();
                            Logging.Logger.Information("MSMQ: Begin get data, number:  " + messages.Length);
                            //Nhận tin nhắn
                            var isCheckAll = true;
                            foreach (System.Messaging.Message message in messages)
                            {
                                
                                
                                try
                                {
                                    // chuyển xml về json sau đó chuyển về model
                                    message.Formatter = new System.Messaging.XmlMessageFormatter(new Type[] { typeof(string) });
                                    Connect dailyModel = new Connect();
                                    StreamReader reader = new StreamReader(message.BodyStream);
                                   // using (XmlReader reader = XmlReader.Create()
                                   // {
                                        //xmlDoc.Load(reader);
                                        
                                        try
                                        {
                                            Logging.Logger.Information("MSMQ: step 1  " );
                                            XmlSerializer serial = new XmlSerializer(typeof(Connect));
                                            dailyModel = (Connect)serial.Deserialize(reader);
                                        } 
                                        catch (Exception e1)
                                        {
                                            Logging.Logger.Information("MSMQ: step 1.2  "+e1.ToString());
                                            xmlDoc.Load(message.BodyStream);
                                            Logging.Logger.Information("MSMQ: out xml  " + xmlDoc.OuterXml);
                                            string json = JsonConvert.SerializeXmlNode(xmlDoc);
                                            Logging.Logger.Information("MSMQ: messages  " + json);
                                            dailyModel = JsonConvert.DeserializeObject<Connect>(json.Replace("@", ""));
                                        }
                                        
                                    //}
                                    
                                    Logging.Logger.Information("MSMQ: messages  " + dailyModel.ToJson());
                                    
                                    StoreFlight.Save(dailyModel.Daily);
                                    messageQueue.ReceiveById(message.Id);
                                }
                                catch (Exception ex)
                                {
                                    Logging.Logger.Error("MSMQ: can not parse and save mess: "+ ex.ToString());
                                    try
                                    {
                                        //try convert list
                                        xmlDoc.Load(message.BodyStream);
                                        Logging.Logger.Information("MSMQ: try out xml  " + xmlDoc.OuterXml);
                                        var mess = xmlDoc.ToString();
                                        
                                        string json = JsonConvert.SerializeXmlNode(xmlDoc);//.FirstChild.NextSibling);
                                        //Logging.Logger.Information("MSMQ: messages  " + json);
                                        Logging.Logger.Information("MSMQ: messages  " + json.Replace("@", ""));
                                        var dailyModel = JsonConvert.DeserializeObject<DailyModelList>(json.Replace("@", ""));
                                        foreach (var item in dailyModel.Connect.Daily)
                                        {

                                            StoreFlight.Save(item);
                                        }

                                        messageQueue.ReceiveById(message.Id);
                                        //end try
                                    }
                                    catch (Exception ex1)
                                    {
                                        Logging.Logger.Error("MSMQ: can not try parse and save mess " + ex1.Message);
                                        isCheckAll = false;
                                    }
                                    
                                    
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