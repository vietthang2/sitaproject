
namespace ECNET.Office.Endpoints
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System.Data;
    using Microsoft.AspNetCore.Mvc;
    using MyRepository = Repositories.QueuedEmailRepository;
    using MyRow = Entities.QueuedEmailRow;
    using System.Threading;
    using System;
    using System.Net.Mail;
    using ECNET.Office.Entities;
    using Microsoft.AspNetCore.Authorization;
    using Serenity.Web;

    [Route("Services/Office/QueuedEmail/[action]")]
    [ConnectionKey(typeof(MyRow))]
    public class QueuedEmailController : ServiceEndpoint
    {
        [HttpPost, AuthorizeCreate(typeof(MyRow))]
        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            request.Entity.CreatedBy = ((UserDefinition)Serenity.Authorization.UserDefinition).Username;
            request.Entity.CreatedDate = DateTime.Now;
            return new MyRepository().Create(uow, request);
        }

        [HttpPost, AuthorizeUpdate(typeof(MyRow))]
        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            request.Entity.UpdatedBy = ((UserDefinition)Serenity.Authorization.UserDefinition).Username;
            request.Entity.UpdatedDate = DateTime.Now;
            return new MyRepository().Update(uow, request);
        }
 
        [HttpPost, AuthorizeDelete(typeof(MyRow))]
        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request)
        {
            return new MyRepository().Delete(uow, request);
        }

        [HttpPost]
        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            return new MyRepository().Retrieve(connection, request);
        }

        [HttpPost]
        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            return new MyRepository().List(connection, request);
        }
        //public static class EmailThread
        //{
        //    private static Thread _SendEmailThread = null;
        //    public static void StartEmailThread()
        //    {
        //        if (_SendEmailThread == null)
        //        {
        //            _SendEmailThread = new Thread(new ThreadStart(SendEmails));
        //            _SendEmailThread.Priority = ThreadPriority.Lowest;
        //            _SendEmailThread.Start();
        //        }
        //    }
        //    public static void EndEmailThread()
        //    {
        //        if (_SendEmailThread != null)
        //        {
        //            _SendEmailThread.Abort();
        //        }
        //    }

        //    private static void SendEmails()
        //    {
        //        bool enableEmailService = true;// Convert.ToBoolean(ConfigurationManager.AppSettings["EnableEmailService"]);
        //        if (enableEmailService)
        //        {

        //            while (true)
        //            {
        //                Thread.Sleep(60000); // 10 sec
        //                var connection = SqlConnections.NewFor<MyRow>();
        //                var request = new ListRequest();
        //                ListResponse<MyRow> rows =
        //                new MyRepository().List(connection, request);
        //                if (rows.TotalCount == 0)
        //                    break;

        //                foreach (MyRow row in rows.Entities)
        //                {
        //                    try
        //                    {
        //                        MailMessage mailMessage = new MailMessage();
        //                        mailMessage.From = new MailAddress(row.From, row.FromName);
        //                        foreach (var to in row.To.Split(','))
        //                            mailMessage.To.Add(new MailAddress(to));
        //                        if (!string.IsNullOrEmpty(row.Cc))
        //                            foreach (var cc in row.Cc.Split(','))
        //                                mailMessage.CC.Add(new MailAddress(cc));
        //                        if (!string.IsNullOrEmpty(row.Bcc))
        //                            foreach (var bcc in row.Bcc.Split(','))
        //                                mailMessage.Bcc.Add(new MailAddress(bcc));
        //                        mailMessage.Subject = row.Subject;
        //                        mailMessage.Body = row.Body;
        //                        mailMessage.IsBodyHtml = true;
        //                        EmailAccountsRow emailAccount = connection.TryFirst<EmailAccountsRow>(EmailAccountsRow.Fields.Id == (int)row.EmailAccountId.Value);
        //                        SmtpClient smtp = new SmtpClient
        //                        {
        //                            Host = emailAccount.Host,
        //                            Port = (int)emailAccount.Port,
        //                            EnableSsl = (bool)emailAccount.EnableSsl,
        //                            DeliveryMethod = SmtpDeliveryMethod.Network,
        //                            Credentials = new System.Net.NetworkCredential(emailAccount.Username, emailAccount.Password),
        //                            Timeout = 30000,
        //                        };
        //                        smtp.Send(mailMessage);
        //                        row.HasError = false;
        //                        row.SentTries = 1;
        //                        row.SentOnUtc = DateTime.UtcNow;
        //                    }
        //                    catch (Exception ex)
        //                    {
        //                        row.HasError = true;
        //                        row.Result = ex.Message;
        //                        row.SentTries = 1;
        //                    }
        //                    connection.UpdateById<MyRow>(row);
        //                }
        //            }
        //            (Dependency.Resolve<IAuthorizationService>() as ImpersonatingAuthorizationService).UndoImpersonate();
        //        }
        //    }
        //}
    }
}
