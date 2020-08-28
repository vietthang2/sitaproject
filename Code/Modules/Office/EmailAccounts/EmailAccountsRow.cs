
namespace ECNET.Office.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Office"), TableName("[dbo].[EmailAccounts]")]
    [DisplayName("Email Accounts"), InstanceName("Email Accounts")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("dbo.EmailAccounts", Permission = "*")]//add thêm
    public sealed class EmailAccountsRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Email"), Size(255), QuickSearch]
        public String Email
        {
            get { return Fields.Email[this]; }
            set { Fields.Email[this] = value; }
        }

        [DisplayName("Display Name"), Size(255), NotNull]
        public String DisplayName
        {
            get { return Fields.DisplayName[this]; }
            set { Fields.DisplayName[this] = value; }
        }

        [DisplayName("Host"), Size(255), NotNull]
        public String Host
        {
            get { return Fields.Host[this]; }
            set { Fields.Host[this] = value; }
        }

        [DisplayName("Port"), NotNull]
        public Int32? Port
        {
            get { return Fields.Port[this]; }
            set { Fields.Port[this] = value; }
        }

        [DisplayName("Username"), Size(255), NotNull]
        public String Username
        {
            get { return Fields.Username[this]; }
            set { Fields.Username[this] = value; }
        }

        [DisplayName("Password"), Size(255), NotNull]
        public String Password
        {
            get { return Fields.Password[this]; }
            set { Fields.Password[this] = value; }
        }

        [DisplayName("Enable Ssl")]
        public Boolean? EnableSsl
        {
            get { return Fields.EnableSsl[this]; }
            set { Fields.EnableSsl[this] = value; }
        }

        [DisplayName("Use Default Credentials")]
        public Boolean? UseDefaultCredentials
        {
            get { return Fields.UseDefaultCredentials[this]; }
            set { Fields.UseDefaultCredentials[this] = value; }
        }

        [DisplayName("Created Date")]
        public DateTime? CreatedDate
        {
            get { return Fields.CreatedDate[this]; }
            set { Fields.CreatedDate[this] = value; }
        }

        [DisplayName("Created By"), Size(30)]
        public String CreatedBy
        {
            get { return Fields.CreatedBy[this]; }
            set { Fields.CreatedBy[this] = value; }
        }

        [DisplayName("Updated Date")]
        public DateTime? UpdatedDate
        {
            get { return Fields.UpdatedDate[this]; }
            set { Fields.UpdatedDate[this] = value; }
        }

        [DisplayName("Updated By"), Size(30)]
        public String UpdatedBy
        {
            get { return Fields.UpdatedBy[this]; }
            set { Fields.UpdatedBy[this] = value; }
        }

        [DisplayName("Is Active")]
        public Boolean? IsActive
        {
            get { return Fields.IsActive[this]; }
            set { Fields.IsActive[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Email; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public EmailAccountsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField Email;
            public StringField DisplayName;
            public StringField Host;
            public Int32Field Port;
            public StringField Username;
            public StringField Password;
            public BooleanField EnableSsl;
            public BooleanField UseDefaultCredentials;
            public DateTimeField CreatedDate;
            public StringField CreatedBy;
            public DateTimeField UpdatedDate;
            public StringField UpdatedBy;
            public BooleanField IsActive;
        }
    }
}
