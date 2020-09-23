using Serenity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Sita.Modules.MSMQServices
{
    public class ScheduleServices
    {
        public void Run()
        {
            new Exception("StartScheduleThread").Log();
            Sita.Modules.MSMQServices.Schedule.StartScheduleServicesThread();
        }
    }
}