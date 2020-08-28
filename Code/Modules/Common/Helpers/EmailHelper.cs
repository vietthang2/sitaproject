using System.Web.Hosting;
using System.IO;
using Serenity.ComponentModel;
using Serenity;
using Microsoft.AspNetCore.Hosting;
using System;
using ECNET.Office.Entities;
using Serenity.Data;
using System.Net.Mail;
//#if COREFX
//using MailKit.Net.Smtp;
//using MimeKit;
//using MailKit.Security;
//#else
//using System.Net.Mail;
//#endif

namespace ECNET.Common
{

#if COREFX
    [SettingScope("Application"), SettingKey("MailSettings")]
    public class MailSettings
    {
        public string Host { get; set; }
        public int Port { get; set; }
        public bool UseSsl { get; set; }
        public string From { get; set; }
    }
#endif

    public class EmailHelper
    {
        public static void Send(string subject, string body, string address, string displayName = "")
        {
#if COREFX
            var connection = SqlConnections.NewFor<EmailAccountsRow>();
            EmailAccountsRow emailAccount = connection.TryFirst<EmailAccountsRow>(EmailAccountsRow.Fields.Id == 1);

            MailMessage message = new MailMessage();
            var config = Config.Get<MailSettings>();
            message.From = new MailAddress(emailAccount.Email, emailAccount.Email);
            message.To.Add(new MailAddress(address,displayName));
            //message.To.Add(new MailboxAddress(displayName, address));
            message.Subject = subject;
            //var bodyBuilder = new BodyBuilder();
            //bodyBuilder.HtmlBody = body;
            message.Body = body;
            message.IsBodyHtml = true;
            //SmtpClient smtp = new SmtpClient
            //{ 
            //    Host = emailAccount.Host,
            //    Port = (int)emailAccount.Port,
            //    EnableSsl = (bool)emailAccount.EnableSsl,
            //    DeliveryMethod = SmtpDeliveryMethod.Network,
            //    Credentials = new System.Net.NetworkCredential(emailAccount.Username, emailAccount.Password),
            //    Timeout = 30000,
            //};
            if (emailAccount!=null)
            {
                SmtpClient smtp = new SmtpClient
                {
                    Host = emailAccount.Host,
                    Port = (int)emailAccount.Port,
                    EnableSsl = (bool)emailAccount.EnableSsl,
                    DeliveryMethod = SmtpDeliveryMethod.Network,
                    Credentials = new System.Net.NetworkCredential(emailAccount.Username, emailAccount.Password),
                    Timeout = 30000,
                };
                smtp.Send(message);
            }
            else
            {
                //var pickupPath = Path.Combine(Dependency.Resolve<IHostingEnvironment>().ContentRootPath, "App_Data");
                //pickupPath = Path.Combine(pickupPath, "Mail");
                //Directory.CreateDirectory(pickupPath);
                ////message.WriteTo(Path.Combine(pickupPath, DateTime.Now.ToString("yyyyMMdd_HHmmss_fff") + ".eml"));
            }
#else
            var message = new MailMessage();
            message.To.Add(new MailAddress(address, ""));
            message.Subject = subject;
            message.Body = body;
            message.IsBodyHtml = true;

            var client = new SmtpClient();

            if (client.DeliveryMethod == SmtpDeliveryMethod.SpecifiedPickupDirectory &&
                string.IsNullOrEmpty(client.PickupDirectoryLocation))
            {
                var pickupPath = HostingEnvironment.MapPath("~/App_Data");
                pickupPath = Path.Combine(pickupPath, "Mail");
                Directory.CreateDirectory(pickupPath);
                client.PickupDirectoryLocation = pickupPath;
            }

            client.Send(message);
#endif
        }

#if !COREFX

#endif

    }
}