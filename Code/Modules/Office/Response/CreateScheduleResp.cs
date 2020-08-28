using Serenity.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ECNET.Web.Modules.Office.Response
{
    public class CreateScheduleResp: ServiceResponse
    {
        public bool result { get; set; }
      
        public List<string> ErrorList { get; set; }
    }
   
}
