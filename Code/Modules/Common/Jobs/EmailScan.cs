using Serenity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ECNET.Web.Modules.Office.QueuedEmail;

namespace ECNET.Web.Modules.Common.Jobs
{
    public class EmailScan
    {
        public void Run()
        {
            new Exception("StartEmailThread").Log();
            EmailThread.StartEmailThread();
        }
    }

}
