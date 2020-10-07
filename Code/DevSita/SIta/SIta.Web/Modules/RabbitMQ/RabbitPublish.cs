using Modules.Common;
using Newtonsoft.Json;
using RabbitMQ.Client;
using RabbitMQ.Client.Events;
using Serilog;
using Sita.Modules.Default.TblBags;
using Sita.Modules.RabbitMQ;
using System;
using System.Collections.Generic;
using System.IO;
using System.Text;
using System.Threading;

namespace Sita.Modules.RabbitMQ
{
    public class RabbitPublish
    {
        public static RabbitServerModel ServerConfig = Common.GetRabbitConfig();
        //public static RabbitServer ServerConfigRemote = Common.GetRabbitConfig();
        public static void Publish(string key, string mess)
        {
            //RabbitServer RabbitServer = new RabbitServer();
            var RabbitServer = ServerConfig.RabbitServer;
            var RabbitServerRemote = ServerConfig.RabbitServerRemote;
            string queue = "Sita";
            var factory = new ConnectionFactory() { HostName = RabbitServer.RabbitIp, UserName = RabbitServer.RabbitUsername, Password = RabbitServer.RabbitUsername, RequestedHeartbeat = new TimeSpan(0, 0, 60) };
            try
            {

                
                using (var connection = factory.CreateConnection())
                using (var channel = connection.CreateModel())
                {
                    channel.ExchangeDeclare(exchange: queue, type: ExchangeType.Fanout);
                    channel.QueueDeclare(queue, true, false, true, null);
                    var message = mess;
                    var body = Encoding.UTF8.GetBytes(message);
                    channel.BasicPublish(exchange: queue,
                                         routingKey: key,
                                         basicProperties: null,
                                         body: body);
                  //  Console.WriteLine(" [x] Sent {0} to server {1}", message, RabbitServer.RabbitIp);
                    Logging.Logger.Information(" [x] Sent Rabbit to server {0} Data:  {1}", RabbitServer.RabbitIp,message);
                    connection.Close();

                }
            }
            catch (Exception ex1)
            {

                Log.Error("Publish Rabbit error: " + ex1.Message);
            }
            RabbitPublishRemote rabbitPublishRemote = new RabbitPublishRemote();
            rabbitPublishRemote.Publish(key, mess);
            



        }

    }
    public class RabbitSubscribe
    {
        private static Thread _Subscribe = null;


        public static void StartSubscribeThread()
        {

            if (_Subscribe == null)
            {
                _Subscribe = new Thread(new ThreadStart(SubscribeEvent))
                {
                    Priority = ThreadPriority.Lowest
                };
                _Subscribe.Start();
            }
            else if (_Subscribe.ThreadState == ThreadState.Stopped)
            {

                _Subscribe = new Thread(new ThreadStart(SubscribeEvent));
            }
            else if (_Subscribe.ThreadState == ThreadState.Unstarted)
                _Subscribe.Start();


        }
        public static void EndBSMServicesThread()
        {
            if (_Subscribe != null)
            {
                _Subscribe.Abort();
            }
        }
        public static void SubscribeEvent()
        {
            RabbitEvent rabbitEvent = new RabbitEvent();
            string messRbc = "";
            rabbitEvent.MessageReceived += (sender, msg) => messRbc = msg;
            rabbitEvent.RabbitMQManager();
            Logging.Logger.Information("Rabbit MessageReceived :" + messRbc);

        }



    }
    public class RabbitEvent
    {
        private bool _disposed = false;
        protected virtual void Dispose(bool disposing)
        {
            if (!_disposed)
            {
                if (disposing)
                {
                    _channel?.Dispose();
                    _connection?.Dispose();
                }

                _disposed = true;
            }
        }

        public void Dispose()
        {
            Dispose(true);
        }
        private static IModel _channel;
        private static IConnection _connection;
        public event EventHandler<string> MessageReceived;
        public static RabbitServer ServerConfig = Common.GetRabbitConfig().RabbitServer;
        public static RabbitServer ServerConfigRemote = Common.GetRabbitConfig().RabbitServerRemote;
        public void RabbitMQManager()
        {
            try
            {
                string queue = "Sita";
                var factory = new ConnectionFactory() { HostName = ServerConfig.RabbitIp, UserName = ServerConfig.RabbitUsername, Password = ServerConfig.RabbitUsername, RequestedHeartbeat = new TimeSpan(0, 0, 60) };

                _connection = factory.CreateConnection();
                _channel = _connection.CreateModel();


                _channel.ExchangeDeclare(exchange: queue, type: ExchangeType.Fanout);

                var queueName = _channel.QueueDeclare().QueueName;
                _channel.QueueBind(queue: queueName,
                                      exchange: queue,
                                      routingKey: "Server");



                var consumer = new EventingBasicConsumer(_channel);
                consumer.Received += (model, ea) =>
                {
                    var body = ea.Body.ToArray();
                    var message = Encoding.UTF8.GetString(body);

                    MessageReceived?.Invoke(this, message);
                    Logging.Logger.Information("Rabbit recieve:{0}", message);
                    //Hàm lưu bag sẽ nhận tham số message


                    StoreBag.Save(message);
                };
                _channel.BasicConsume(queue: queueName,
                                         autoAck: true,
                                         consumer: consumer);
            }
            catch (Exception ex)
            {
                Log.Error("RabbitMQManager : " + ex.Message);
                throw;
            }
            

        }
    }
    public static class Common
    {
        public static RabbitServerModel GetRabbitConfig()
        {
            try
            {
                using (var reader = new StreamReader(AppDomain.CurrentDomain.BaseDirectory + "ServerConfig.json"))
                {
                    var appSettings = JsonConvert.DeserializeObject<RabbitServerModel>(reader.ReadToEnd());
                    // var sq = new RabbitServer();
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