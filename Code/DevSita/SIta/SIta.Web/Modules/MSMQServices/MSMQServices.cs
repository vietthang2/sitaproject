using Serenity;
using System;

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