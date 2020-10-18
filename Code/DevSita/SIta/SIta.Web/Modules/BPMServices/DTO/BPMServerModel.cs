using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Sita.Modules.BPMServices.DTO
{
    public class BPMServerModel
    {
        public BPMServer BPMServer { get; set; }

    }
    public class BPMServer
    {
        public string Ip { get; set; }
        public int Port { get; set; }
        public int ClientPort { get; set; }
        public string Application { get; set; }
        public ushort Version { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public ushort Msg_id { get; set; }

    }
}