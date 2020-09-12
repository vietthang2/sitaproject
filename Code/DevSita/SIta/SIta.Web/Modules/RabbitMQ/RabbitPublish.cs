using Modules.Common;
using RabbitMQ.Client;
using RabbitMQ.Client.Events;
using Sita.Modules.Default.TblBags;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Web;

namespace Sita.Modules.RabbitMQ
{
    public class RabbitPublish
    {
        public static void Publish(string key, string mess)
        {
            string queue = "Sita";
            var factory = new ConnectionFactory() { HostName = "171.244.18.171", UserName = "admin", Password = "admin" };
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
                Console.WriteLine(" [x] Sent {0}", message);
                Logging.Logger.Information(" [x] Sent Rabbit {0}", message);
                

            }
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
            string messRbc="";
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
        public void RabbitMQManager()
        {
            string queue = "Sita";
            var factory = new ConnectionFactory() { HostName = "171.244.18.171", UserName = "admin", Password = "admin" };
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
    }
}