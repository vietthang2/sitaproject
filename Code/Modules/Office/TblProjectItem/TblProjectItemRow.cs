
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

    [ConnectionKey("Default"), Module("Office"), TableName("[dbo].[tblProjectItem]")]
    [DisplayName("Tbl Project Item"), InstanceName("Tbl Project Item")]
    [ReadPermission(PermissionKeys.ProjectItem.View)]
    [ModifyPermission(PermissionKeys.ProjectItem.Modify)]
    [LookupScript("dbo.tblProjectItem", Permission = "*")]//add thêm
    public sealed class TblProjectItemRow : Row, IIdRow, INameRow, IAuditLog
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Project"), ForeignKey("[dbo].[TblProject]", "Id"), LeftJoin("jProject"), TextualField("ProjectCode"), MinSelectLevel(SelectLevel.Always)]
        [LookupEditor(typeof(TblProjectRow)), LookupInclude, QuickSearch]//Thêm
        public Int32? ProjectId
        {
            get { return Fields.ProjectId[this]; }
            set { Fields.ProjectId[this] = value; }
        }

        [DisplayName("Name"), Size(256), NotNull, QuickSearch]
        public String Name
        {
            get { return Fields.Name[this]; }
            set { Fields.Name[this] = value; }
        }
        [DisplayName("Code"), Size(256),  QuickSearch]
        public String Code
        {
            get { return Fields.Code[this]; }
            set { Fields.Code[this] = value; }
        }

        [DisplayName("Status"), ForeignKey("[dbo].[tblStatus]", "Id"), LeftJoin("jStatus"), TextualField("StatusName"), MinSelectLevel(SelectLevel.Auto), LookupInclude]
        [LookupEditor(typeof(TblStatusRow), FilterField ="TypeId", FilterValue = StatusType.ProjectItem)]//Thêm
        public Int32? Status
        {
            get { return Fields.Status[this]; }
            set { Fields.Status[this] = value; }
        }

        [DisplayName("Decription"), Size(256), QuickSearch]
        public String Decription
        {
            get { return Fields.Decription[this]; }
            set { Fields.Decription[this] = value; }
        }

        [DisplayName("From Date"), MinSelectLevel(SelectLevel.Auto), DisplayFormat(BasicConst.DateFormatShow), NotNull]
        public DateTime? FromDate
        {
            get { return Fields.FromDate[this]; }
            set { Fields.FromDate[this] = value; }
        }

        [DisplayName("To Date"), MinSelectLevel(SelectLevel.Auto), DisplayFormat(BasicConst.DateFormatShow)]
        public DateTime? ToDate
        {
            get { return Fields.ToDate[this]; }
            set { Fields.ToDate[this] = value; }
        }

        [DisplayName("Total Days"), MinSelectLevel(SelectLevel.Auto)]
        public Int32? TotalDays
        {
            get { return Fields.TotalDays[this]; }
            set { Fields.TotalDays[this] = value; }
        }

        [DisplayName("Note"), Size(1000), MinSelectLevel(SelectLevel.Auto)]
        public String Note
        {
            get { return Fields.Note[this]; }
            set { Fields.Note[this] = value; }
        }

        [DisplayName("Process Bar")]
        public Int32? ProcessBar
        {
            get { return Fields.ProcessBar[this]; }
            set { Fields.ProcessBar[this] = value; }
        }
        [DisplayName("Quantity"), NotNull, Size(18), Scale(0), MaxLength(8), DisplayFormat(BasicConst.NumberFormat)]
        public Decimal? Quantity
        {
            get { return Fields.Quantity[this]; }
            set { Fields.Quantity[this] = value; }
        }

        [DisplayName("Created By"), Size(30)]
        public String CreatedBy
        {
            get { return Fields.CreatedBy[this]; }
            set { Fields.CreatedBy[this] = value; }
        }

        [DisplayName("Created Date")]
        public DateTime? CreatedDate
        {
            get { return Fields.CreatedDate[this]; }
            set { Fields.CreatedDate[this] = value; }
        }

        [DisplayName("Updated By"), Size(30)]
        public String UpdatedBy
        {
            get { return Fields.UpdatedBy[this]; }
            set { Fields.UpdatedBy[this] = value; }
        }

        [DisplayName("Updated Date")]
        public DateTime? UpdatedDate
        {
            get { return Fields.UpdatedDate[this]; }
            set { Fields.UpdatedDate[this] = value; }
        }

        [DisplayName("Unit"), ForeignKey("[dbo].[tblUnit]", "Id"), LeftJoin("jUnit"), TextualField("UnitCode"), MinSelectLevel(SelectLevel.Always), NotNull]
        [LookupEditor(typeof(TblUnitRow))]//Thêm
        public Int32? UnitId
        {
            get { return Fields.UnitId[this]; }
            set { Fields.UnitId[this] = value; }
        }

        [DisplayName("Project Code"), Expression("jProject.[Code]"), MinSelectLevel(SelectLevel.Always)]
        public String ProjectCode
        {
            get { return Fields.ProjectCode[this]; }
            set { Fields.ProjectCode[this] = value; }
        }

        [DisplayName("Project Name"), Expression("jProject.[Name]"), MinSelectLevel(SelectLevel.Auto)]
        public String ProjectName
        {
            get { return Fields.ProjectName[this]; }
            set { Fields.ProjectName[this] = value; }
        }

        [DisplayName("Project Innitiated Date"), Expression("jProject.[InnitiatedDate]")]
        public DateTime? ProjectInnitiatedDate
        {
            get { return Fields.ProjectInnitiatedDate[this]; }
            set { Fields.ProjectInnitiatedDate[this] = value; }
        }

        [DisplayName("Project From Date"), Expression("jProject.[FromDate]")]
        public DateTime? ProjectFromDate
        {
            get { return Fields.ProjectFromDate[this]; }
            set { Fields.ProjectFromDate[this] = value; }
        }

        [DisplayName("Project To Date"), Expression("jProject.[ToDate]")]
        public DateTime? ProjectToDate
        {
            get { return Fields.ProjectToDate[this]; }
            set { Fields.ProjectToDate[this] = value; }
        }

        [DisplayName("Project Transaction Location Id"), Expression("jProject.[TransactionLocationId]")]
        public Int32? ProjectTransactionLocationId
        {
            get { return Fields.ProjectTransactionLocationId[this]; }
            set { Fields.ProjectTransactionLocationId[this] = value; }
        }

        [DisplayName("Project Person Management"), Expression("jProject.[PersonManagement]")]
        public String ProjectPersonManagement
        {
            get { return Fields.ProjectPersonManagement[this]; }
            set { Fields.ProjectPersonManagement[this] = value; }
        }

        [DisplayName("Project Person Management Phone"), Expression("jProject.[PersonManagementPhone]")]
        public String ProjectPersonManagementPhone
        {
            get { return Fields.ProjectPersonManagementPhone[this]; }
            set { Fields.ProjectPersonManagementPhone[this] = value; }
        }

        [DisplayName("Project Place Id"), Expression("jProject.[PlaceId]")]
        public Int32? ProjectPlaceId
        {
            get { return Fields.ProjectPlaceId[this]; }
            set { Fields.ProjectPlaceId[this] = value; }
        }

        [DisplayName("Project Note"), Expression("jProject.[Note]")]
        public String ProjectNote
        {
            get { return Fields.ProjectNote[this]; }
            set { Fields.ProjectNote[this] = value; }
        }

        [DisplayName("Project Created By"), Expression("jProject.[CreatedBy]")]
        public String ProjectCreatedBy
        {
            get { return Fields.ProjectCreatedBy[this]; }
            set { Fields.ProjectCreatedBy[this] = value; }
        }

        [DisplayName("Project Created Date"), Expression("jProject.[CreatedDate]")]
        public DateTime? ProjectCreatedDate
        {
            get { return Fields.ProjectCreatedDate[this]; }
            set { Fields.ProjectCreatedDate[this] = value; }
        }

        [DisplayName("Project Updated By"), Expression("jProject.[UpdatedBy]")]
        public String ProjectUpdatedBy
        {
            get { return Fields.ProjectUpdatedBy[this]; }
            set { Fields.ProjectUpdatedBy[this] = value; }
        }

        [DisplayName("Project Updated Date"), Expression("jProject.[UpdatedDate]")]
        public DateTime? ProjectUpdatedDate
        {
            get { return Fields.ProjectUpdatedDate[this]; }
            set { Fields.ProjectUpdatedDate[this] = value; }
        }

        [DisplayName("Project Status Id"), Expression("jProject.[StatusId]")]
        public Int32? ProjectStatusId
        {
            get { return Fields.ProjectStatusId[this]; }
            set { Fields.ProjectStatusId[this] = value; }
        }

        [DisplayName("Status Next Status"), Expression("jStatus.[NextStatus]")]
        public Int32? StatusNextStatus
        {
            get { return Fields.StatusNextStatus[this]; }
            set { Fields.StatusNextStatus[this] = value; }
        }

        [DisplayName("Status Name"), Expression("jStatus.[Name]"), MinSelectLevel(SelectLevel.Always)]
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

        [DisplayName("Unit Code"), Expression("jUnit.[Code]"), MinSelectLevel(SelectLevel.Always)]
        public String UnitCode
        {
            get { return Fields.UnitCode[this]; }
            set { Fields.UnitCode[this] = value; }
        }

        [DisplayName("Unit Name"), Expression("jUnit.[Name]"), MinSelectLevel(SelectLevel.Always)]
        public String UnitName
        {
            get { return Fields.UnitName[this]; }
            set { Fields.UnitName[this] = value; }
        }

        [DisplayName("Unit Decription"), Expression("jUnit.[Decription]")]
        public String UnitDecription
        {
            get { return Fields.UnitDecription[this]; }
            set { Fields.UnitDecription[this] = value; }
        }

        [DisplayName("Unit Rate"), Expression("jUnit.[Rate]")]
        public Int32? UnitRate
        {
            get { return Fields.UnitRate[this]; }
            set { Fields.UnitRate[this] = value; }
        }

        [DisplayName("Unit Created By"), Expression("jUnit.[CreatedBy]")]
        public String UnitCreatedBy
        {
            get { return Fields.UnitCreatedBy[this]; }
            set { Fields.UnitCreatedBy[this] = value; }
        }

        [DisplayName("Unit Created Date"), Expression("jUnit.[CreatedDate]")]
        public DateTime? UnitCreatedDate
        {
            get { return Fields.UnitCreatedDate[this]; }
            set { Fields.UnitCreatedDate[this] = value; }
        }

        [DisplayName("Unit Updated By"), Expression("jUnit.[UpdatedBy]")]
        public String UnitUpdatedBy
        {
            get { return Fields.UnitUpdatedBy[this]; }
            set { Fields.UnitUpdatedBy[this] = value; }
        }

        [DisplayName("Unit Updated Date"), Expression("jUnit.[UpdatedDate]")]
        public DateTime? UnitUpdatedDate
        {
            get { return Fields.UnitUpdatedDate[this]; }
            set { Fields.UnitUpdatedDate[this] = value; }
        }
        [DisplayName("Record Status")]
        public StatusRecord? RecordStatus
        {
            get { return (StatusRecord?)Fields.RecordStatus[this]; }
            set { Fields.RecordStatus[this] = (Int32)value; }
        }
        [DisplayName("Is Use")]
        public Int32? IsUse
        {
            get { return Fields.IsUse[this]; }
            set { Fields.IsUse[this] = value; }
        }
        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Name; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public TblProjectItemRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field ProjectId;
            public StringField Name;
            public StringField Code;
            public Int32Field Status;
            public StringField Decription;
            public DateTimeField FromDate;
            public DateTimeField ToDate;
            public Int32Field TotalDays;
            public StringField Note;
            public Int32Field ProcessBar;
            public StringField CreatedBy;
            public DateTimeField CreatedDate;
            public StringField UpdatedBy;
            public DateTimeField UpdatedDate;
            public Int32Field UnitId;

            public StringField ProjectCode;
            public StringField ProjectName;
            public DateTimeField ProjectInnitiatedDate;
            public DateTimeField ProjectFromDate;
            public DateTimeField ProjectToDate;
            public Int32Field ProjectTransactionLocationId;
            public StringField ProjectPersonManagement;
            public StringField ProjectPersonManagementPhone;
            public Int32Field ProjectPlaceId;
            public StringField ProjectNote;
            public StringField ProjectCreatedBy;
            public DateTimeField ProjectCreatedDate;
            public StringField ProjectUpdatedBy;
            public DateTimeField ProjectUpdatedDate;
            public Int32Field ProjectStatusId;

            public Int32Field StatusNextStatus;
            public StringField StatusName;
            public Int32Field StatusTypeId;
            public StringField StatusCreatedBy;
            public DateTimeField StatusCreatedDate;
            public StringField StatusUpdatedBy;
            public DateTimeField StatusUpdatedDate;

            public StringField UnitCode;
            public StringField UnitName;
            public StringField UnitDecription;
            public Int32Field UnitRate;
            public StringField UnitCreatedBy;
            public DateTimeField UnitCreatedDate;
            public StringField UnitUpdatedBy;
            public DateTimeField UnitUpdatedDate;

            public DecimalField Quantity;
            public Int32Field RecordStatus;
            public Int32Field IsUse;
        }
    }
}
