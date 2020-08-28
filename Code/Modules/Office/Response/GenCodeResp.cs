using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ECNET.Web.Modules.Office.Response
{
    public class GenCodeResp
    {
        public string MaxNum { get; set; }
        public string Code { get; set; }
    }
    public class GenContractCodeResp
    {
        public string MaxNum { get; set; }
        public string Code { get; set; }
        public string ContractCode { get; set; }
    }
    public class GenScheduleResp
    {
        public int result { get; set; }
       
    }
    public class GenProjectCodeResp
    {
       
        public string Code { get; set; }
      

    }
}
