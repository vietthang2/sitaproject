using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ECNET.Web.Modules.Common.DTO.Response
{
    public class PorjectTimelinesResp
    {
    
        public string time { get; set; }
        public string jbody { get; set; }
        public  List<Body> body { get; set; }
        public string header { get; set; }
        public string footer { get; set; }
    }
    public class Body
    {
        public string tag { get; set; }
        public string content { get; set; }
    }
}
