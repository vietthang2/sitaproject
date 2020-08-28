
namespace ECNET.Office.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Office.EmailAccounts")]
    [BasedOnRow(typeof(Entities.EmailAccountsRow), CheckNames = true)]
    public class EmailAccountsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        [EditLink]
        public String Email { get; set; }
        public String DisplayName { get; set; }
        public String Host { get; set; }
        public Int32 Port { get; set; }
        public String Username { get; set; }
        public String Password { get; set; }
        public Boolean EnableSsl { get; set; }
        public Boolean UseDefaultCredentials { get; set; }
        public DateTime CreatedDate { get; set; }
        public String CreatedBy { get; set; }
        public DateTime UpdatedDate { get; set; }
        public String UpdatedBy { get; set; }
        public Boolean IsActive { get; set; }
    }
}