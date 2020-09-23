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
using Serenity.Data;
using System.Data;

namespace Sita.Modules.MSMQServices
{
    public static class Schedule
    {
        private static Thread _ScheduleServices = null;

        public static void StartScheduleServicesThread()
        {
            if (_ScheduleServices == null)
            {
                _ScheduleServices = new Thread(new ThreadStart(ScheduleServicesRun));
                _ScheduleServices.Priority = ThreadPriority.Lowest;
                _ScheduleServices.Start();
            }
            else if (_ScheduleServices.ThreadState == ThreadState.Stopped)
            {

                _ScheduleServices = new Thread(new ThreadStart(ScheduleServicesRun));
            }
            //else if (_MSMQServices.ThreadState == ThreadState.Unstarted)
            //    _MSMQServices.Start();


        }
        public static void EndScheduleServicesThread()
        {
            if (_ScheduleServices != null)
            {
                _ScheduleServices.Abort();
            }
        }
        private static void ScheduleServicesRun()
         {

            try
            {
                var connection = SqlConnections.NewByKey("Default");
                UnitOfWork unitOfWork = new UnitOfWork(connection);
                connection.Execute("ST_Schedule_Cut_Bag", CommandType.StoredProcedure);
                unitOfWork.Commit();
            }
            catch (Exception ex)
            {
                Logging.Logger.Error("Schedule Error:" + ex.Message);
            }
        }
        public static string BuildPath()
        {
            ////Doc cau hình MSMQ Server từ file config
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