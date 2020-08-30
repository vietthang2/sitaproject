using Serenity;
using Serenity.Abstractions;
using Serenity.Web;
using System;
using System.ComponentModel;
using System.Messaging;
using System.Threading;

namespace Sita.MSMQServices
{
    public static class MSMQServices
    {
        private static Thread _SendEmailThread = null;

        public static void StartMSMQServicesThread()
        {
            if (_SendEmailThread == null)
            {
                _SendEmailThread = new Thread(new ThreadStart(MSMQServicesRun));
                _SendEmailThread.Priority = ThreadPriority.Lowest;
                _SendEmailThread.Start();
            }
            else if (_SendEmailThread.ThreadState == ThreadState.Stopped)
            {

                _SendEmailThread = new Thread(new ThreadStart(MSMQServicesRun));
            }
            else if (_SendEmailThread.ThreadState == ThreadState.Unstarted)
                _SendEmailThread.Start();


        }
        public static void EndMSMQServicesThread()
        {
            if (_SendEmailThread != null)
            {
                _SendEmailThread.Abort();
            }
        }
        private static void MSMQServicesRun()
        {
            bool enableEmailService = true;//Convert.ToBoolean(ConfigurationManager.AppSettings["EnableEmailService"]);
            if (enableEmailService)
            {

                //(Dependency.Resolve<IAuthorizationService>() as ImpersonatingAuthorizationService).Impersonate("admin");
                while (true)
                {
                    Thread.Sleep(6000); // 10 sec
                    MessageQueue messageQueue = new MessageQueue(@".\Private$\SomeTestName");
                   // System.Messaging.Message[] messages = messageQueue.GetAllMessages();

                    //foreach (System.Messaging.Message message in messages)
                    //{
                    //    //Do something with the message.
                    //}
                    // after all processing, delete all the messages
                    messageQueue.Purge();
                    // new Exception("Hello Serenity from Hangfire!").Log();

                }
                //(Dependency.Resolve<IAuthorizationService>() as ImpersonatingAuthorizationService).UndoImpersonate();
            }
        }
        
    }
}