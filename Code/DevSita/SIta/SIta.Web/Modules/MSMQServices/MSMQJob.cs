using Serenity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Sita.Modules.MSMQServices
{
    public class MSMQJob
    {
        public void Run()
        {
            new Exception("StartMSMQThread").Log();
            Sita.MSMQServices.MSMQServices.StartMSMQServicesThread();
        }
    }
}