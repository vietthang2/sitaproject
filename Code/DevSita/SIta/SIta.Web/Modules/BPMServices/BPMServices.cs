using Serenity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Sita.Modules.BPMServices
{
    public class BPMServices
    {
        public void Run()
        {
            new Exception("StartBPMThread").Log();
            Sita.Modules.BPMServices.BPMServiceJob.StartBPMServicesThread();
        }
    }
}