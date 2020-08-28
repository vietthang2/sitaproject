
namespace ECNET.Office.Entities
{
    using ECNET.Administration;
    using ECNET.Modules.Common.BaseClass;
    using ECNET.Web.Modules.Office.Common;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Office"), TableName("[dbo].[tblApprovalCenter]")]
    [DisplayName("Approval Center"), InstanceName("Approval Center")]
    [ReadPermission(PermissionKeys.Approve.View)]
    [ModifyPermission(PermissionKeys.Approve.Modify)]
    [DeletePermission(PermissionKeys.Approve.Delete)]
    [LookupScript("dbo.tblApprovalCenter", Permission = "*")]//add thêm
    public sealed class TblApprovalCenterRow : Row, IIdRow, INameRow, IAuditLog
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Type"), Size(30), QuickSearch, LookupInclude]
        public TypeApprove? Type
        {
            get { return (TypeApprove?)Fields.Type[this]; }
            set { Fields.Type[this] = (Int32)value; }
        }

        [DisplayName("Client Id"), NotNull,LookupInclude]
        public Int32? ClientId
        {
            get { return Fields.ClientId[this]; }
            set { Fields.ClientId[this] = value; }
        }
        
        [DisplayName("Status"),LookupInclude,QuickFilter(true)]
        public Status? Status
        {
            get { return (Status?)Fields.Status[this]; }
            set { Fields.Status[this] = (Int32)value; }
        }

        [DisplayName("Date")]
        public DateTime? Date
        {
            get { return Fields.Date[this]; }
            set { Fields.Date[this] = value; }
        }

        [DisplayName("Level Approval")]
        public Int32? LevelApproval
        {
            get { return Fields.LevelApproval[this]; }
            set { Fields.LevelApproval[this] = value; }
        }
        [HideOnUpdate]
        [DisplayName("And Or")]
        
        public Boolean? AndOr
        {
            get { return Fields.AndOr[this]; }
            set { Fields.AndOr[this] = value; }
        }

        [DisplayName("Approve By"), Size(30)]
        public String ApproveBy
        {
            get { return Fields.ApproveBy[this]; }
            set { Fields.ApproveBy[this] = value; }
        }

        [DisplayName("Approved Date")]
        public DateTime? ApprovedDate
        {
            get { return Fields.ApprovedDate[this]; }
            set { Fields.ApprovedDate[this] = value; }
        }

        [DisplayName("Times")]
        public Int32? Times
        {
            get { return Fields.Times[this]; }
            set { Fields.Times[this] = value; }
        }
        [HideOnUpdate]
        [DisplayName("Is Send Mail"), Column("isSendMail")]
        public Boolean? IsSendMail
        {
            get { return Fields.IsSendMail[this]; }
            set { Fields.IsSendMail[this] = value; }
        }

        [DisplayName("Code"), Size(30),QuickSearch]
        public String Code
        {
            get { return Fields.Code[this]; }
            set { Fields.Code[this] = value; }
        }

        [DisplayName("Reason Reject"), Size(1000)]
        public String ReasonReject
        {
            get { return Fields.ReasonReject[this]; }
            set { Fields.ReasonReject[this] = value; }
        }
        [HideOnUpdate]
        [DisplayName("Is Sms"), Column("isSms")]
        public Boolean? IsSms
        {
            get { return Fields.IsSms[this]; }
            set { Fields.IsSms[this] = value; }
        }
        [HideOnUpdate]
        [DisplayName("Create By"), Size(30)]
        public String CreateBy
        {
            get { return Fields.CreateBy[this]; }
            set { Fields.CreateBy[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Code; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public TblApprovalCenterRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field Type;
            public Int32Field ClientId;
            public Int32Field Status;
            public DateTimeField Date;
            public Int32Field LevelApproval;
            public BooleanField AndOr;
            public StringField ApproveBy;
            public DateTimeField ApprovedDate;
            public Int32Field Times;
            public BooleanField IsSendMail;
            public StringField Code;
            public StringField ReasonReject;
            public BooleanField IsSms;
            public StringField CreateBy;
        }
    }
}
