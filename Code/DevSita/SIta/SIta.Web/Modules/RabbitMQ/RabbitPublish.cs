using Modules.Common;
using RabbitMQ.Client;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Web;

namespace SIta.Modules.RabbitMQ
{
    public class RabbitPublish
    {
        public static void Run(string mess)
        {
            var factory = new ConnectionFactory() { HostName = "localhost" };
            using (var connection = factory.CreateConnection())
            using (var channel = connection.CreateModel())
            {
                channel.ExchangeDeclare(exchange: "logs", type: ExchangeType.Fanout);

                var message = "Hello World!";//GetMessage(mess);
                var body = Encoding.UTF8.GetBytes(message);
                channel.BasicPublish(exchange: "logs",
                                     routingKey: "123",
                                     basicProperties: null,
                                     body: body);
                Console.WriteLine(" [x] Sent {0}", message);
                Logging.Logger.Information(" [x] Sent {0}", message);
            }
        }
        
    }
}