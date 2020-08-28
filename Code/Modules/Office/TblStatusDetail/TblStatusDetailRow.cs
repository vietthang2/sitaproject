
namespace ECNET.Office.Entities
{
    using ECNET.Administration;
    using ECNET.Modules.Common.BaseClass;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Office"), TableName("[dbo].[tblStatusDetail]")]
    [DisplayName("Tbl Status Detail"), InstanceName("Tbl Status Detail")]
    [ReadPermission(PermissionKeys.StatusDetail.View)]
    [ModifyPermission(PermissionKeys.StatusDetail.Modify)]
    [LookupScript("dbo.tblStatusDetail", Permission = "*")]//add thêm
    public sealed class TblStatusDetailRow : Row, IIdRow, IAuditLog
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Status"), ForeignKey("[dbo].[tblStatus]", "Id"), LeftJoin("jStatus"), TextualField("StatusName"), LookupInclude]
        public Int32? StatusId
        {
            get { return Fields.StatusId[this]; }
            set { Fields.StatusId[this] = value; }
        }

        [DisplayName("Status Detail Id"), LookupInclude]
        public Int32? StatusDetailId
        {
            get { return Fields.StatusDetailId[this]; }
            set { Fields.StatusDetailId[this] = value; }
        }

        [DisplayName("Status Next Status"), Expression("jStatus.[NextStatus]")]
        public Int32? StatusNextStatus
        {
            get { return Fields.StatusNextStatus[this]; }
            set { Fields.StatusNextStatus[this] = value; }
        }

        [DisplayName("Status Name"), Expression("jStatus.[Name]")]
        public String StatusName
        {
            get { return Fields.StatusName[this]; }
            set { Fields.StatusName[this] = value; }
        }

        [DisplayName("Status Type Id"), Expression("jStatus.[TypeId]")]
        public Int32? StatusTypeId
        {
            get { return Fields.StatusTypeId[this]; }
            set { Fields.StatusTypeId[this] = value; }
        }

        [DisplayName("Status Created By"), Expression("jStatus.[CreatedBy]")]
        public String StatusCreatedBy
        {
            get { return Fields.StatusCreatedBy[this]; }
            set { Fields.StatusCreatedBy[this] = value; }
        }

        [DisplayName("Status Created Date"), Expression("jStatus.[CreatedDate]")]
        public DateTime? StatusCreatedDate
        {
            get { return Fields.StatusCreatedDate[this]; }
            set { Fields.StatusCreatedDate[this] = value; }
        }

        [DisplayName("Status Updated By"), Expression("jStatus.[UpdatedBy]")]
        public String StatusUpdatedBy
        {
            get { return Fields.StatusUpdatedBy[this]; }
            set { Fields.StatusUpdatedBy[this] = value; }
        }

        [DisplayName("Status Updated Date"), Expression("jStatus.[UpdatedDate]")]
        public DateTime? StatusUpdatedDate
        {
            get { return Fields.StatusUpdatedDate[this]; }
            set { Fields.StatusUpdatedDate[this] = value; }
        }

        [DisplayName("Status Allow Status Id"), Expression("jStatus.[AllowStatusId]")]
        public Int32? StatusAllowStatusId
        {
            get { return Fields.StatusAllowStatusId[this]; }
            set { Fields.StatusAllowStatusId[this] = value; }
        }

        [DisplayName("Status Is Read Only"), Expression("jStatus.[IsReadOnly]")]
        public Boolean? StatusIsReadOnly
        {
            get { return Fields.StatusIsReadOnly[this]; }
            set { Fields.StatusIsReadOnly[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public TblStatusDetailRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field StatusId;
            public Int32Field StatusDetailId;

            public Int32Field StatusNextStatus;
            public StringField StatusName;
            public Int32Field StatusTypeId;
            public StringField StatusCreatedBy;
            public DateTimeField StatusCreatedDate;
            public StringField StatusUpdatedBy;
            public DateTimeField StatusUpdatedDate;
            public Int32Field StatusAllowStatusId;
            public BooleanField StatusIsReadOnly;
        }
    }
}
