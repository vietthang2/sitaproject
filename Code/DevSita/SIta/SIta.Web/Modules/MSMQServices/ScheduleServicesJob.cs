using Modules.Common;
using System;
using System.Threading;
using Serenity.Data;
using System.Data;

namespace Sita.Modules.MSMQServices
{
    public static class Schedule
    {
        private static Thread _ScheduleServices = null;
        private static Thread _MergeServices = null;

        public static void StartScheduleServicesThread()
        {
            try
            {
                if (_ScheduleServices == null)
                {
                    _ScheduleServices = new Thread(new ThreadStart(ScheduleServicesRun));
                    _ScheduleServices.Priority = ThreadPriority.Lowest;
                    _ScheduleServices.Start();
                }
                else if (_ScheduleServices.ThreadState == ThreadState.Stopped)
                {

                    _ScheduleServices = new Thread(new ThreadStart(ScheduleServicesRun));
                }
                else if (_ScheduleServices.ThreadState == ThreadState.Unstarted)
                    _ScheduleServices.Start();
            }
            catch (Exception)
            {
                _ScheduleServices.DisableComObjectEagerCleanup();
                StartScheduleServicesThread();
            }


        }
        public static void EndScheduleServicesThread()
        {
            if (_ScheduleServices != null)
            {
                _ScheduleServices.Abort();
            }
        }
        private static void ScheduleServicesRun()
         {

            try
            {
                var connection = SqlConnections.NewByKey("Default");
                UnitOfWork unitOfWork = new UnitOfWork(connection);
                connection.Execute("ST_Schedule_Cut_Bag", CommandType.StoredProcedure);
                unitOfWork.Commit();
            }
            catch (Exception ex)
            {
                Logging.Logger.Error("Schedule Error:" + ex.Message);
            }
        }
        public static void StartMergeTableManualThread()
        {
            try
            {
                if (_MergeServices == null)
                {
                    _MergeServices = new Thread(new ThreadStart(MergeTableManual));
                    _MergeServices.Priority = ThreadPriority.Lowest;
                    _MergeServices.Start();
                }
                else if (_MergeServices.ThreadState == ThreadState.Stopped)
                {

                    _MergeServices = new Thread(new ThreadStart(MergeTableManual));
                }
                else if (_MergeServices.ThreadState == ThreadState.Unstarted)
                    _MergeServices.Start();
            }
            catch (Exception)
            {
                _MergeServices.DisableComObjectEagerCleanup();
                StartMergeTableManualThread();
            }


        }
        private static void MergeTableManual()
        {

            try
            {
                var connection = SqlConnections.NewByKey("Default");
                UnitOfWork unitOfWork = new UnitOfWork(connection);
                connection.Execute("ST_MERGE_DATA", CommandType.StoredProcedure);
                unitOfWork.Commit();
            }
            catch (Exception ex)
            {
                Logging.Logger.Error("Merge table Error:" + ex.Message);
            }
        }

    }
}