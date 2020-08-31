using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Sita.Modules.MSMQServices.DTO
{
    public class ServerModel
    {
        public MsmqServer MsmqServer { get; set; }

    }
    public class MsmqServer
    {
        public string Ip { get; set; }
        public int Port { get; set; }
        public string QueuePath { get; set; }
        public string QueueName { get; set; }
        public string Type { get; set; }

    }


}