using Modules.Common;
using RabbitMQ.Client;
using RabbitMQ.Client.Events;
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
        public static void Publish(string mess)
        {
            var factory = new ConnectionFactory() { HostName = "171.244.18.171", UserName="admin",Password="admin" };
            using (var connection = factory.CreateConnection())
            using (var channel = connection.CreateModel())
            {
                channel.ExchangeDeclare(exchange: "BagMessage", type: ExchangeType.Fanout);
                channel.QueueDeclare("logs", true, false, true, null);
                var message = mess;
                var body = Encoding.UTF8.GetBytes(message);
                channel.BasicPublish(exchange: "BagMessage",
                                     routingKey: "Server",
                                     basicProperties: null,
                                     body: body);
                Console.WriteLine(" [x] Sent {0}", message);
                Logging.Logger.Information(" [x] Sent {0}", message);
                
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
                _Subscribe = new Thread(new ThreadStart(Subscribe));
                _Subscribe.Priority = ThreadPriority.Lowest;
                _Subscribe.Start();
            }
            else if (_Subscribe.ThreadState == ThreadState.Stopped)
            {

                _Subscribe = new Thread(new ThreadStart(Subscribe));
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
        public static void Subscribe()
        {
            var factory = new ConnectionFactory() { HostName = "171.244.18.171", UserName = "admin", Password = "admin" };
            using (var connection = factory.CreateConnection())
            using (var channel = connection.CreateModel())
            {
                channel.ExchangeDeclare(exchange: "BagMessage", type: ExchangeType.Fanout);

                var queueName = channel.QueueDeclare().QueueName;
                channel.QueueBind(queue: queueName,
                                  exchange: "BagMessage",
                                  routingKey: "Server");

                Console.WriteLine(" [*] Waiting for logs.");

                var consumer = new EventingBasicConsumer(channel);
                consumer.Received += (model, ea) =>
                {
                    var body = ea.Body.ToArray();
                    var message = Encoding.UTF8.GetString(body);
                    Console.WriteLine(" [x] {0}", message);
                    Logging.Logger.Information("Rabbit recieve:{0}", message);
                };
                channel.BasicConsume(queue: queueName,
                                     autoAck: true,
                                     consumer: consumer);

                Console.WriteLine(" Press [enter] to exit.");
                Console.ReadLine();
            }
        }
    }
}