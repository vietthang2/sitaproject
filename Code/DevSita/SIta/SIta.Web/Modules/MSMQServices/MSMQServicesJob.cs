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
                    Thread.Sleep(10000); // 10 sec
                    try
                    {
                        var path = BuildPath();
                        Logging.Logger.Information("Begin connect to: "+ path);
                        MessageQueue messageQueue = new MessageQueue(path);
                        System.Messaging.Message[] messages = messageQueue.GetAllMessages();
                        //                        var mes= @"<?xml version = '1.0' encoding='utf-8'?>
                        //<connect version = '1.0' name='AMS'>
                        //<daily action = 'Replace' adi='A' linecode='VN' number='2122' schedule_date='2016-10-26' softreplace='true' site_iata='DEN' date_boundary='0'>
                        //<field name = 'schedule' instance='1' value='2016-10-26T10:18:00' />
                        //<field name = 'estimated' instance='1' value='2016-10-26T10:18:00' />
                        //<field name = 'actual' instance='1' value='2016-10-26T10:18:00' />
                        //<field name = 'domesticintcode' instance='1' value='I' />
                        //<field name = 'aircrafttype' instance='1' value='73H' />
                        //<field name = 'aircrafttypeicao' instance='1' value='B738' />
                        //<field name = 'allparkingbays' instance='1' value='' />
                        //<field name = 'gate' instance='1' value='' />
                        //<field name = 'claim' instance='1' value='' />
                        //<field name = 'displayfltno' instance='11' value='' />
                        //<field name = 'status' instance='1' value='ON' />
                        //<field name = 'totpax' instance='1' value='156' />
                        //<field name = 'mtow' instance='1' value='79016' />
                        //<field name = 'city' instance='1' value='CVG' />
                        //</daily>
                        //</connect>";
                        //XmlDocument doc = new XmlDocument();
                        //doc.LoadXml(mes.ToString());
                        ////doc.RemoveChild(doc.FirstChild);
                        //string json = JsonConvert.SerializeXmlNode(doc.FirstChild.NextSibling);
                        //var dailyModel = JsonConvert.DeserializeObject<DailyModel>(json.Replace("@", ""));
                        //StoreFlight.Save(dailyModel);
                        //Nhận tin nhắn
                        foreach (System.Messaging.Message message in messages)
                        {
                            // chuyển xml về json sau đó chuyển về model
                            XmlDocument doc = new XmlDocument();
                            doc.LoadXml(message.ToString());
                            //doc.RemoveChild(doc.FirstChild);
                            string json = JsonConvert.SerializeXmlNode(doc.FirstChild.NextSibling);
                            var dailyModel = JsonConvert.DeserializeObject<DailyModel>(json.Replace("@", ""));
                            StoreFlight.Save(dailyModel);
                        }

                        messageQueue.Purge();
                       
                    }
                    catch (Exception ex)
                    {
                        Logging.Logger.Error("MSMQ Error:" + ex.Message);
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

                    string path = String.Format("FormatName:Direct = TCP:{0}\\private$\\{1}", appSettings.MsmqServer.Ip, appSettings.MsmqServer.QueueName);
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