
namespace ECNET.Office.Entities
{
    using ECNET.Modules.Common.BaseClass;
    using ECNET.Web.Modules.Office.Common;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Office"), TableName("[dbo].[tblPlaceDetails]")]
    [DisplayName("Tbl Place Details"), InstanceName("Tbl Place Details")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("dbo.tblPlaceDetails", Permission = "*")]//add thêm
    [UniqueConstraint("PlaceId", "ItemId", "Status", CheckBeforeSave = true, ErrorMessage = "Mã này đã được sử dụng")]
    public sealed class TblPlaceDetailsRow : Row, IIdRow, INameRow, IAuditLog
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Place"), NotNull, ForeignKey("[dbo].[tblPlaceOfBussiness]", "Id"), LeftJoin("jPlace"), TextualField("PlaceCode"), LookupInclude]
        [LookupEditor(typeof(TblPlaceOfBussinessRow))]//Thêm
        public Int32? PlaceId
        {
            get { return Fields.PlaceId[this]; }
            set { Fields.PlaceId[this] = value; }
        }

        [DisplayName("Item"), NotNull, ForeignKey("[dbo].[tblItems]", "Id"), LeftJoin("jItem"), TextualField("ItemItemName"), LookupInclude]
        [LookupEditor(typeof(TblItemsRow), FilterField = "ItemGroup", FilterValue = TypeOfItem.Place, CascadeField = "ItemGroup")]//Thêm
        public Int32? ItemId
        {
            get { return Fields.ItemId[this]; }
            set { Fields.ItemId[this] = value; }
        }

        [DisplayName("Value"), Size(100), NotNull, QuickSearch]
        public String Value
        {
            get { return Fields.Value[this]; }
            set { Fields.Value[this] = value; }
        }

        [DisplayName("Unit"), Size(50), NotNull]
        public String Unit
        {
            get { return Fields.Unit[this]; }
            set { Fields.Unit[this] = value; }
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

        [DisplayName("Status"), NotNull]
        public Int32? Status
        {
            get { return Fields.Status[this]; }
            set { Fields.Status[this] = value; }
        }

        [DisplayName("Note"), Size(256)]
        public String Note
        {
            get { return Fields.Note[this]; }
            set { Fields.Note[this] = value; }
        }

        [DisplayName("Place Code"), Expression("jPlace.[Code]")]
        public String PlaceCode
        {
            get { return Fields.PlaceCode[this]; }
            set { Fields.PlaceCode[this] = value; }
        }

        [DisplayName("Place Width"), Expression("jPlace.[Width]")]
        public Decimal? PlaceWidth
        {
            get { return Fields.PlaceWidth[this]; }
            set { Fields.PlaceWidth[this] = value; }
        }

        [DisplayName("Place Length"), Expression("jPlace.[Length]")]
        public Decimal? PlaceLength
        {
            get { return Fields.PlaceLength[this]; }
            set { Fields.PlaceLength[this] = value; }
        }

        [DisplayName("Place Total Area"), Expression("jPlace.[TotalArea]")]
        public Decimal? PlaceTotalArea
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

        [DisplayName("Place Type"), Expression("jPlace.[Type]")]
        public Int32? PlaceType
        {
            get { return Fields.PlaceType[this]; }
            set { Fields.PlaceType[this] = value; }
        }

        [DisplayName("Place Note"), Expression("jPlace.[Note]")]
        public String PlaceNote
        {
            get { return Fields.PlaceNote[this]; }
            set { Fields.PlaceNote[this] = value; }
        }

        [DisplayName("Place Total Area Use"), Expression("jPlace.[TotalAreaUse]")]
        public Decimal? PlaceTotalAreaUse
        {
            get { return Fields.PlaceTotalAreaUse[this]; }
            set { Fields.PlaceTotalAreaUse[this] = value; }
        }

        [DisplayName("Item Item Name"), Expression("jItem.[ItemName]")]
        public String ItemItemName
        {
            get { return Fields.ItemItemName[this]; }
            set { Fields.ItemItemName[this] = value; }
        }

        [DisplayName("Item Unit"), Expression("jItem.[Unit]")]
        public String ItemUnit
        {
            get { return Fields.ItemUnit[this]; }
            set { Fields.ItemUnit[this] = value; }
        }

        [DisplayName("Item Item Type"), Expression("jItem.[ItemType]")]
        public Int32? ItemItemType
        {
            get { return Fields.ItemItemType[this]; }
            set { Fields.ItemItemType[this] = value; }
        }

        [DisplayName("Item Code"), Expression("jItem.[Code]")]
        public String ItemCode
        {
            get { return Fields.ItemCode[this]; }
            set { Fields.ItemCode[this] = value; }
        }

        [DisplayName("Item Decriptions"), Expression("jItem.[Decriptions]")]
        public String ItemDecriptions
        {
            get { return Fields.ItemDecriptions[this]; }
            set { Fields.ItemDecriptions[this] = value; }
        }

        [DisplayName("Item Item Group"), Expression("jItem.[ItemGroup]")]
        public Int32? ItemItemGroup
        {
            get { return Fields.ItemItemGroup[this]; }
            set { Fields.ItemItemGroup[this] = value; }
        }

        [DisplayName("Item Data Type"), Expression("jItem.[DataType]"),LookupInclude]
        public DataType? ItemDataType
        {
            get { return (DataType?)Fields.ItemDataType[this]; }
            set { Fields.ItemDataType[this] = (Int32)value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Value; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public TblPlaceDetailsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field PlaceId;
            public Int32Field ItemId;
            public StringField Value;
            public StringField Unit;
            public StringField CreatedBy;
            public DateTimeField CreatedDate;
            public DateTimeField UpdatedDate;
            public StringField UpdatedBy;
            public Int32Field Status;
            public StringField Note;

            public StringField PlaceCode;
            public DecimalField PlaceWidth;
            public DecimalField PlaceLength;
            public DecimalField PlaceTotalArea;
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
            public Int32Field PlaceType;
            public StringField PlaceNote;
            public DecimalField PlaceTotalAreaUse;

            public StringField ItemItemName;
            public StringField ItemUnit;
            public Int32Field ItemItemType;
            public StringField ItemCode;
            public StringField ItemDecriptions;
            public Int32Field ItemItemGroup;
            public Int32Field ItemDataType;
        }
    }
}
