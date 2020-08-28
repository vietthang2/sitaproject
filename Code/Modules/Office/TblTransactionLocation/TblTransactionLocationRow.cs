
namespace ECNET.Office.Entities
{
    using ECNET.Modules.Common.BaseClass;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Office"), TableName("[dbo].[tblTransactionLocation]")]
    [DisplayName("Tbl Transaction Location"), InstanceName("Tbl Transaction Location")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("dbo.tblTransactionLocation", Permission = "*")]//add thêm
    public sealed class TblTransactionLocationRow : Row, IIdRow, INameRow, IAuditLog
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Code"), Size(30), NotNull, QuickSearch, LookupInclude]
        public String Code
        {
            get { return Fields.Code[this]; }
            set { Fields.Code[this] = value; }
        }

        [DisplayName("Name"), Size(100), NotNull, LookupInclude, QuickSearch]
        public String Name
        {
            get { return Fields.Name[this]; }
            set { Fields.Name[this] = value; }
        }

        [DisplayName("Area Id")]
        public Int32? AreaId
        {
            get { return Fields.AreaId[this]; }
            set { Fields.AreaId[this] = value; }
        }

        [DisplayName("Employee Manage Id")]
        public Int32? EmployeeManageId
        {
            get { return Fields.EmployeeManageId[this]; }
            set { Fields.EmployeeManageId[this] = value; }
        }

        [DisplayName("Employee Cash Id"), Column("EmployeeCashID")]
        public Int32? EmployeeCashId
        {
            get { return Fields.EmployeeCashId[this]; }
            set { Fields.EmployeeCashId[this] = value; }
        }

        [DisplayName("Place"), ForeignKey("[dbo].[tblPlaceOfBussiness]", "Id"), LeftJoin("jPlace"), TextualField("PlaceCode")]
        public Int32? PlaceId
        {
            get { return Fields.PlaceId[this]; }
            set { Fields.PlaceId[this] = value; }
        }

        [DisplayName("Open From")]
        public TimeSpan? OpenFrom
        {
            get { return Fields.OpenFrom[this]; }
            set { Fields.OpenFrom[this] = value; }
        }

        [DisplayName("Open To")]
        public TimeSpan? OpenTo
        {
            get { return Fields.OpenTo[this]; }
            set { Fields.OpenTo[this] = value; }
        }

        [DisplayName("Opening Time")]
        public TimeSpan? OpeningTime
        {
            get { return Fields.OpeningTime[this]; }
            set { Fields.OpeningTime[this] = value; }
        }

        [DisplayName("Opening Date")]
        public DateTime? OpeningDate
        {
            get { return Fields.OpeningDate[this]; }
            set { Fields.OpeningDate[this] = value; }
        }

        [DisplayName("Created By"), Size(30), NotNull, Hidden]
        public String CreatedBy
        {
            get { return Fields.CreatedBy[this]; }
            set { Fields.CreatedBy[this] = value; }
        }

        [DisplayName("Created Date"), NotNull, Hidden]
        public DateTime? CreatedDate
        {
            get { return Fields.CreatedDate[this]; }
            set { Fields.CreatedDate[this] = value; }
        }

        [DisplayName("Updated By"), Size(30), Hidden]
        public String UpdatedBy
        {
            get { return Fields.UpdatedBy[this]; }
            set { Fields.UpdatedBy[this] = value; }
        }

        [DisplayName("Updated Date"), Hidden]
        public DateTime? UpdatedDate
        {
            get { return Fields.UpdatedDate[this]; }
            set { Fields.UpdatedDate[this] = value; }
        }

        [DisplayName("Status")]
        public Int32? Status
        {
            get { return Fields.Status[this]; }
            set { Fields.Status[this] = value; }
        }

        [DisplayName("Place Code"), Expression("jPlace.[Code]")]
        public String PlaceCode
        {
            get { return Fields.PlaceCode[this]; }
            set { Fields.PlaceCode[this] = value; }
        }

        [DisplayName("Place Width"), Expression("jPlace.[Width]")]
        public String PlaceWidth
        {
            get { return Fields.PlaceWidth[this]; }
            set { Fields.PlaceWidth[this] = value; }
        }

        [DisplayName("Place Length"), Expression("jPlace.[Length]")]
        public String PlaceLength
        {
            get { return Fields.PlaceLength[this]; }
            set { Fields.PlaceLength[this] = value; }
        }

        [DisplayName("Place Total Area"), Expression("jPlace.[TotalArea]")]
        public String PlaceTotalArea
        {
            get { return Fields.PlaceTotalArea[this]; }
            set { Fields.PlaceTotalArea[this] = value; }
        }

        [DisplayName("Place Total Customer"), Expression("jPlace.[TotalCustomer]")]
        public Int32? PlaceTotalCustomer
        {
            get { return Fields.PlaceTotalCustomer[this]; }
            set { Fields.PlaceTotalCustomer[this] = value; }
        }

        [DisplayName("Place Link Google Map"), Expression("jPlace.[LinkGoogleMap]")]
        public String PlaceLinkGoogleMap
        {
            get { return Fields.PlaceLinkGoogleMap[this]; }
            set { Fields.PlaceLinkGoogleMap[this] = value; }
        }

        [DisplayName("Place Address"), Expression("jPlace.[Address]")]
        public String PlaceAddress
        {
            get { return Fields.PlaceAddress[this]; }
            set { Fields.PlaceAddress[this] = value; }
        }

        [DisplayName("Place City Id"), Expression("jPlace.[CityId]")]
        public Int32? PlaceCityId
        {
            get { return Fields.PlaceCityId[this]; }
            set { Fields.PlaceCityId[this] = value; }
        }

        [DisplayName("Place District Id"), Expression("jPlace.[DistrictId]")]
        public Int32? PlaceDistrictId
        {
            get { return Fields.PlaceDistrictId[this]; }
            set { Fields.PlaceDistrictId[this] = value; }
        }

        [DisplayName("Place Contract Id"), Expression("jPlace.[ContractId]")]
        public Int32? PlaceContractId
        {
            get { return Fields.PlaceContractId[this]; }
            set { Fields.PlaceContractId[this] = value; }
        }

        [DisplayName("Place Created By"), Expression("jPlace.[CreatedBy]")]
        public String PlaceCreatedBy
        {
            get { return Fields.PlaceCreatedBy[this]; }
            set { Fields.PlaceCreatedBy[this] = value; }
        }

        [DisplayName("Place Created Date"), Expression("jPlace.[CreatedDate]")]
        public DateTime? PlaceCreatedDate
        {
            get { return Fields.PlaceCreatedDate[this]; }
            set { Fields.PlaceCreatedDate[this] = value; }
        }

        [DisplayName("Place Update Date"), Expression("jPlace.[UpdateDate]")]
        public DateTime? PlaceUpdateDate
        {
            get { return Fields.PlaceUpdateDate[this]; }
            set { Fields.PlaceUpdateDate[this] = value; }
        }

        [DisplayName("Place Updated By"), Expression("jPlace.[UpdatedBy]")]
        public String PlaceUpdatedBy
        {
            get { return Fields.PlaceUpdatedBy[this]; }
            set { Fields.PlaceUpdatedBy[this] = value; }
        }

        [DisplayName("Place Time Open From"), Expression("jPlace.[TimeOpenFrom]")]
        public TimeSpan? PlaceTimeOpenFrom
        {
            get { return Fields.PlaceTimeOpenFrom[this]; }
            set { Fields.PlaceTimeOpenFrom[this] = value; }
        }

        [DisplayName("Place Time Open To"), Expression("jPlace.[TimeOpenTo]")]
        public TimeSpan? PlaceTimeOpenTo
        {
            get { return Fields.PlaceTimeOpenTo[this]; }
            set { Fields.PlaceTimeOpenTo[this] = value; }
        }

        [DisplayName("Place Time Opening"), Expression("jPlace.[TimeOpening]")]
        public TimeSpan? PlaceTimeOpening
        {
            get { return Fields.PlaceTimeOpening[this]; }
            set { Fields.PlaceTimeOpening[this] = value; }
        }

        [DisplayName("Place Time Opening Date"), Expression("jPlace.[TimeOpeningDate]")]
        public DateTime? PlaceTimeOpeningDate
        {
            get { return Fields.PlaceTimeOpeningDate[this]; }
            set { Fields.PlaceTimeOpeningDate[this] = value; }
        }

        [DisplayName("Place Status"), Expression("jPlace.[Status]")]
        public Int32? PlaceStatus
        {
            get { return Fields.PlaceStatus[this]; }
            set { Fields.PlaceStatus[this] = value; }
        }

        [DisplayName("Place Wards Id"), Expression("jPlace.[WardsId]")]
        public Int32? PlaceWardsId
        {
            get { return Fields.PlaceWardsId[this]; }
            set { Fields.PlaceWardsId[this] = value; }
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

        public TblTransactionLocationRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField Code;
            public StringField Name;
            public Int32Field AreaId;
            public Int32Field EmployeeManageId;
            public Int32Field EmployeeCashId;
            public Int32Field PlaceId;
            public TimeSpanField OpenFrom;
            public TimeSpanField OpenTo;
            public TimeSpanField OpeningTime;
            public DateTimeField OpeningDate;
            public StringField CreatedBy;
            public DateTimeField CreatedDate;
            public StringField UpdatedBy;
            public DateTimeField UpdatedDate;
            public Int32Field Status;

            public StringField PlaceCode;
            public StringField PlaceWidth;
            public StringField PlaceLength;
            public StringField PlaceTotalArea;
            public Int32Field PlaceTotalCustomer;
            public StringField PlaceLinkGoogleMap;
            public StringField PlaceAddress;
            public Int32Field PlaceCityId;
            public Int32Field PlaceDistrictId;
            public Int32Field PlaceContractId;
            public StringField PlaceCreatedBy;
            public DateTimeField PlaceCreatedDate;
            public DateTimeField PlaceUpdateDate;
            public StringField PlaceUpdatedBy;
            public TimeSpanField PlaceTimeOpenFrom;
            public TimeSpanField PlaceTimeOpenTo;
            public TimeSpanField PlaceTimeOpening;
            public DateTimeField PlaceTimeOpeningDate;
            public Int32Field PlaceStatus;
            public Int32Field PlaceWardsId;
        }
    }
}
