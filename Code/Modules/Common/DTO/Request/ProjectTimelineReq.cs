using Serenity.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ECNET.Web.Modules.Common.DTO
{
    public class ProjectTimelineReq : ServiceRequest
    {
        public string UserName { get; set; }
        public string Action { get; set; }
        public string Body { get; set; }
        public string Header { get; set; }
        public string Footer { get; set; }
        public int ProjectId { get; set; }

    }
}
