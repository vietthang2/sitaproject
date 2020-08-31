using Serenity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Sita.Modules.MSMQServices
{
    public class MSMQServices
    {
        public void Run()
        {
            new Exception("StartMSMQThread").Log();
            Sita.Modules.MSMQServices.MSMQJob.StartMSMQServicesThread();
        }
    }
}