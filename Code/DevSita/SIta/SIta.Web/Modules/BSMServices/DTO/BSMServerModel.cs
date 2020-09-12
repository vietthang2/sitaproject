using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Sita.Modules.BSMServices.DTO
{
    public class BSMServerModel
    {
        public BSMServer BSMServer { get; set; }

    }
    public class BSMServer
    {
        public string Ip { get; set; }
        public int Port { get; set; }
       

    }
}