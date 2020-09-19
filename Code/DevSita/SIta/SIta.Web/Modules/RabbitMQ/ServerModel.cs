using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Sita.Modules.RabbitMQ
{
    public class RabbitServerModel
    {
        public RabbitServer RabbitServer { get; set; }
        


    }
    public class RabbitServer
    {
        public string RabbitIp { get; set; }

        public string RabbitUsername { get; set; }
        public string RabbitPassword { get; set; }


    }
}