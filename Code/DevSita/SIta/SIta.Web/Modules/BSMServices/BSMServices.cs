using Serenity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Sita.Modules.BSMServices
{
    public class BSMServices
    {
        public void Run()
        {
            new Exception("StartBSMThread").Log();
            Sita.Modules.BSMServices.BSMServiceJob.StartBSMServicesThread();
        }
    }
}