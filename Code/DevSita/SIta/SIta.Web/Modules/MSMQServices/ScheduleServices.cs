using Serenity;
using System;

namespace Sita.Modules.MSMQServices
{
    public class ScheduleServices
    {
        public void Run()
        {
            new Exception("StartScheduleThread").Log();
            Sita.Modules.MSMQServices.Schedule.StartScheduleServicesThread();
        }
        public void RunMerge()
        {
            new Exception("RunMerge").Log();
            Sita.Modules.MSMQServices.Schedule.StartMergeTableManualThread();
        }
    }
}