
namespace ECNET.Office.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Office"), TableName("[dbo].[QueuedEmail]")]
    [DisplayName("Queued Email"), InstanceName("Queued Email")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class QueuedEmailRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Priority Id"), NotNull]
        public Int32? PriorityId
        {
            get { return Fields.PriorityId[this]; }
            set { Fields.PriorityId[this] = value; }
        }

        [DisplayName("From"), Size(500), NotNull, QuickSearch]
        public String From
        {
            get { return Fields.From[this]; }
            set { Fields.From[this] = value; }
        }

        [DisplayName("From Name"), Size(500), NotNull]
        public String FromName
        {
            get { return Fields.FromName[this]; }
            set { Fields.FromName[this] = value; }
        }

        [DisplayName("To"), Size(500), NotNull]
        public String To
        {
            get { return Fields.To[this]; }
            set { Fields.To[this] = value; }
        }

        [DisplayName("To Name"), Size(500)]
        public String ToName
        {
            get { return Fields.ToName[this]; }
            set { Fields.ToName[this] = value; }
        }

        [DisplayName("Reply To"), Size(500)]
        public String ReplyTo
        {
            get { return Fields.ReplyTo[this]; }
            set { Fields.ReplyTo[this] = value; }
        }

        [DisplayName("Reply To Name"), Size(500)]
        public String ReplyToName
        {
            get { return Fields.ReplyToName[this]; }
            set { Fields.ReplyToName[this] = value; }
        }

        [DisplayName("Cc"), Column("CC"), Size(500)]
        public String Cc
        {
            get { return Fields.Cc[this]; }
            set { Fields.Cc[this] = value; }
        }

        [DisplayName("Bcc"), Size(500)]
        public String Bcc
        {
            get { return Fields.Bcc[this]; }
            set { Fields.Bcc[this] = value; }
        }

        [DisplayName("Subject"), Size(500)]
        public String Subject
        {
            get { return Fields.Subject[this]; }
            set { Fields.Subject[this] = value; }
        }

        [DisplayName("Body")]
        public String Body
        {
            get { return Fields.Body[this]; }
            set { Fields.Body[this] = value; }
        }

        [DisplayName("Attachment File Path"), Size(1000)]
        public String AttachmentFilePath
        {
            get { return Fields.AttachmentFilePath[this]; }
            set { Fields.AttachmentFilePath[this] = value; }
        }

        [DisplayName("Attachment File Name"), Size(1000)]
        public String AttachmentFileName
        {
            get { return Fields.AttachmentFileName[this]; }
            set { Fields.AttachmentFileName[this] = value; }
        }

        [DisplayName("Attached Download Id")]
        public Int32? AttachedDownloadId
        {
            get { return Fields.AttachedDownloadId[this]; }
            set { Fields.AttachedDownloadId[this] = value; }
        }

        [DisplayName("Created On Utc"), NotNull]
        public DateTime? CreatedOnUtc
        {
            get { return Fields.CreatedOnUtc[this]; }
            set { Fields.CreatedOnUtc[this] = value; }
        }

        [DisplayName("Sent Tries")]
        public Int32? SentTries
        {
            get { return Fields.SentTries[this]; }
            set { Fields.SentTries[this] = value; }
        }

        [DisplayName("Sent On Utc")]
        public DateTime? SentOnUtc
        {
            get { return Fields.SentOnUtc[this]; }
            set { Fields.SentOnUtc[this] = value; }
        }

        [DisplayName("Email Account"), ForeignKey("[dbo].[EmailAccounts]", "Id"), LeftJoin("jEmailAccount"), TextualField("EmailAccountEmail")]
        [LookupEditor(typeof(EmailAccountsRow))]//Thêm
        public Int32? EmailAccountId
        {
            get { return Fields.EmailAccountId[this]; }
            set { Fields.EmailAccountId[this] = value; }
        }

        [DisplayName("Dont Send Before Date Utc")]
        public DateTime? DontSendBeforeDateUtc
        {
            get { return Fields.DontSendBeforeDateUtc[this]; }
            set { Fields.DontSendBeforeDateUtc[this] = value; }
        }

        [DisplayName("Has Error")]
        public Boolean? HasError
        {
            get { return Fields.HasError[this]; }
            set { Fields.HasError[this] = value; }
        }

        [DisplayName("Result"), Size(1000)]
        public String Result
        {
            get { return Fields.Result[this]; }
            set { Fields.Result[this] = value; }
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

        [DisplayName("Email Account Email"), Expression("jEmailAccount.[Email]")]
        public String EmailAccountEmail
        {
            get { return Fields.EmailAccountEmail[this]; }
            set { Fields.EmailAccountEmail[this] = value; }
        }

        [DisplayName("Email Account Display Name"), Expression("jEmailAccount.[DisplayName]")]
        public String EmailAccountDisplayName
        {
            get { return Fields.EmailAccountDisplayName[this]; }
            set { Fields.EmailAccountDisplayName[this] = value; }
        }

        [DisplayName("Email Account Host"), Expression("jEmailAccount.[Host]")]
        public String EmailAccountHost
        {
            get { return Fields.EmailAccountHost[this]; }
            set { Fields.EmailAccountHost[this] = value; }
        }

        [DisplayName("Email Account Port"), Expression("jEmailAccount.[Port]")]
        public Int32? EmailAccountPort
        {
            get { return Fields.EmailAccountPort[this]; }
            set { Fields.EmailAccountPort[this] = value; }
        }

        [DisplayName("Email Account Username"), Expression("jEmailAccount.[Username]")]
        public String EmailAccountUsername
        {
            get { return Fields.EmailAccountUsername[this]; }
            set { Fields.EmailAccountUsername[this] = value; }
        }

        [DisplayName("Email Account Password"), Expression("jEmailAccount.[Password]")]
        public String EmailAccountPassword
        {
            get { return Fields.EmailAccountPassword[this]; }
            set { Fields.EmailAccountPassword[this] = value; }
        }

        [DisplayName("Email Account Enable Ssl"), Expression("jEmailAccount.[EnableSsl]")]
        public Boolean? EmailAccountEnableSsl
        {
            get { return Fields.EmailAccountEnableSsl[this]; }
            set { Fields.EmailAccountEnableSsl[this] = value; }
        }

        [DisplayName("Email Account Use Default Credentials"), Expression("jEmailAccount.[UseDefaultCredentials]")]
        public Boolean? EmailAccountUseDefaultCredentials
        {
            get { return Fields.EmailAccountUseDefaultCredentials[this]; }
            set { Fields.EmailAccountUseDefaultCredentials[this] = value; }
        }

        [DisplayName("Email Account Created Date"), Expression("jEmailAccount.[CreatedDate]")]
        public DateTime? EmailAccountCreatedDate
        {
            get { return Fields.EmailAccountCreatedDate[this]; }
            set { Fields.EmailAccountCreatedDate[this] = value; }
        }

        [DisplayName("Email Account Created By"), Expression("jEmailAccount.[CreatedBy]")]
        public String EmailAccountCreatedBy
        {
            get { return Fields.EmailAccountCreatedBy[this]; }
            set { Fields.EmailAccountCreatedBy[this] = value; }
        }

        [DisplayName("Email Account Updated Date"), Expression("jEmailAccount.[UpdatedDate]")]
        public DateTime? EmailAccountUpdatedDate
        {
            get { return Fields.EmailAccountUpdatedDate[this]; }
            set { Fields.EmailAccountUpdatedDate[this] = value; }
        }

        [DisplayName("Email Account Updated By"), Expression("jEmailAccount.[UpdatedBy]")]
        public String EmailAccountUpdatedBy
        {
            get { return Fields.EmailAccountUpdatedBy[this]; }
            set { Fields.EmailAccountUpdatedBy[this] = value; }
        }

        [DisplayName("Email Account Is Active"), Expression("jEmailAccount.[IsActive]")]
        public Boolean? EmailAccountIsActive
        {
            get { return Fields.EmailAccountIsActive[this]; }
            set { Fields.EmailAccountIsActive[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.From; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public QueuedEmailRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field PriorityId;
            public StringField From;
            public StringField FromName;
            public StringField To;
            public StringField ToName;
            public StringField ReplyTo;
            public StringField ReplyToName;
            public StringField Cc;
            public StringField Bcc;
            public StringField Subject;
            public StringField Body;
            public StringField AttachmentFilePath;
            public StringField AttachmentFileName;
            public Int32Field AttachedDownloadId;
            public DateTimeField CreatedOnUtc;
            public Int32Field SentTries;
            public DateTimeField SentOnUtc;
            public Int32Field EmailAccountId;
            public DateTimeField DontSendBeforeDateUtc;
            public BooleanField HasError;
            public StringField Result;
            public DateTimeField CreatedDate;
            public StringField CreatedBy;
            public DateTimeField UpdatedDate;
            public StringField UpdatedBy;

            public StringField EmailAccountEmail;
            public StringField EmailAccountDisplayName;
            public StringField EmailAccountHost;
            public Int32Field EmailAccountPort;
            public StringField EmailAccountUsername;
            public StringField EmailAccountPassword;
            public BooleanField EmailAccountEnableSsl;
            public BooleanField EmailAccountUseDefaultCredentials;
            public DateTimeField EmailAccountCreatedDate;
            public StringField EmailAccountCreatedBy;
            public DateTimeField EmailAccountUpdatedDate;
            public StringField EmailAccountUpdatedBy;
            public BooleanField EmailAccountIsActive;
        }
    }
}
