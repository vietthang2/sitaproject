
namespace ECNET.Office.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Office.EmailAccounts")]
    [BasedOnRow(typeof(Entities.EmailAccountsRow), CheckNames = true)]
    public class EmailAccountsForm
    {
        [HalfWidth]
        public String Email { get; set; }
        [HalfWidth]
        public String DisplayName { get; set; }
        [HalfWidth]
        public String Username { get; set; }
        [HalfWidth]
        public String Password { get; set; }
        [HalfWidth]
        public String Host { get; set; }
        [HalfWidth]
        public Int32 Port { get; set; }
       
        [HalfWidth]
        public Boolean EnableSsl { get; set; }
        [HalfWidth]
        public Boolean UseDefaultCredentials { get; set; }
       
        public Boolean IsActive { get; set; }
    }
}