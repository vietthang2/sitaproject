using ECNET.Office.Entities;
using ECNET.Web.Modules.Office.Response;
using Serenity;
using Serenity.Abstractions;
using Serenity.Data;
using Serenity.Services;
using Serenity.Web;
using System;
using System.IO;
using System.Linq;
using System.Net.Mail;
using System.Net.Mime;
using System.Threading;

using MyRepository = ECNET.Office.Endpoints.QueuedEmailController;
using MyRow = ECNET.Office.Entities.QueuedEmailRow;

namespace ECNET.Web.Modules.Office.QueuedEmail
{
    public static class EmailThread
    {
        private static Thread _SendEmailThread = null;

        public static void StartEmailThread()
        {
            if (_SendEmailThread == null)
            {
                _SendEmailThread = new Thread(new ThreadStart(SendEmails));
                _SendEmailThread.Priority = ThreadPriority.Lowest;
                _SendEmailThread.Start();
            }
            else if (_SendEmailThread.ThreadState == ThreadState.Stopped)
            {

                _SendEmailThread = new Thread(new ThreadStart(SendEmails));
            }
            else if (_SendEmailThread.ThreadState == ThreadState.Unstarted)
                _SendEmailThread.Start();


        }
        public static void EndEmailThread()
        {
            if (_SendEmailThread != null)
            {
                _SendEmailThread.Abort();
            }
        }

        private static void SendEmails()
        {
            //bool enableEmailService = true;//Convert.ToBoolean(ConfigurationManager.AppSettings["EnableEmailService"]);
            //if (enableEmailService)
            //{
               
            //    (Dependency.Resolve<IAuthorizationService>() as ImpersonatingAuthorizationService).Impersonate("admin");
            //    while (true)
            //    {
            //        Thread.Sleep(6000); // 10 sec
            //        var connection = SqlConnections.NewFor<MyRow>();
            //        var request = new ListRequest();
                    
            //        request.Criteria = new Criteria("Result").IsNull();
            //        ListResponse<MyRow> rows =
            //        new MyRepository().List(connection, request);
            //        if (rows.TotalCount == 0)
            //            break;

            //        foreach (MyRow row in rows.Entities)
            //        {
            //            try
            //            {
            //                MailMessage mailMessage = new MailMessage();
            //                mailMessage.From = new MailAddress(row.From, row.FromName);
            //                foreach (var to in row.To.Split(','))
            //                    mailMessage.To.Add(new MailAddress(to));
            //                if (!string.IsNullOrEmpty(row.Cc))
            //                    foreach (var cc in row.Cc.Split(','))
            //                        mailMessage.CC.Add(new MailAddress(cc));
            //                if (!string.IsNullOrEmpty(row.Bcc))
            //                    foreach (var bcc in row.Bcc.Split(','))
            //                        mailMessage.Bcc.Add(new MailAddress(bcc));
            //                mailMessage.Subject = row.Subject;
                            
            //                string mailbody = row.Body;
            //                AlternateView AlternateView_Html = AlternateView.CreateAlternateViewFromString(mailbody, null, MediaTypeNames.Text.Html);
            //                // Create a LinkedResource object and set Image location path and Type      
            //                LinkedResource Picture1 = new LinkedResource(Directory.GetCurrentDirectory()+ "\\Template\\Emailsignature.jpg", MediaTypeNames.Image.Jpeg);
            //                Picture1.ContentId = "sign@localhost";
            //                AlternateView_Html.LinkedResources.Add(Picture1);
            //                mailMessage.AlternateViews.Add(AlternateView_Html);
            //                mailMessage.Body = mailbody;// row.Body;
            //                mailMessage.IsBodyHtml = true;
            //                EmailAccountsRow emailAccount = connection.TryFirst<EmailAccountsRow>(EmailAccountsRow.Fields.Id == (int)row.EmailAccountId.Value);
            //                SmtpClient smtp = new SmtpClient
            //                {
            //                    Host = emailAccount.Host,
            //                    Port = (int)emailAccount.Port,
            //                    EnableSsl = (bool)emailAccount.EnableSsl,
            //                    DeliveryMethod = SmtpDeliveryMethod.Network,
            //                    Credentials = new System.Net.NetworkCredential(emailAccount.Username, emailAccount.Password),
            //                    Timeout = 30000,
            //                };
            //                smtp.Send(mailMessage);
            //                row.HasError = false;
            //                row.SentTries = row.SentTries==null?1: row.SentTries+1;
            //                row.SentOnUtc = DateTime.UtcNow;
            //                row.Result = "OK";
            //            }
            //            catch (Exception ex)
            //            {
            //                row.HasError = true;
            //                row.Result = ex.Message;
            //                row.SentTries = row.SentTries == null ? 1 : row.SentTries + 1;
            //            }
            //            connection.UpdateById<MyRow>(row);
            //        }
                    
            //    }
            //    (Dependency.Resolve<IAuthorizationService>() as ImpersonatingAuthorizationService).UndoImpersonate();
            //}
        }
        public static void ScanChedule()
        {
           //var proName = "PR_GET_CONTRACT_SHEDULE_PAYMENT";
           //var connection=SqlConnections.NewFor<MyRow>();
           //var data = connection.Query<MyRow>(proName,
           //     param: null,
           //     commandType: System.Data.CommandType.StoredProcedure).FirstOrDefault();

        }
        
    }
    
}
