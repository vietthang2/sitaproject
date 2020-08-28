
namespace ECNET.Office.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Office"), TableName("[dbo].[tblAssignAssetToPlace]")]
    [DisplayName("Assign Asset"), InstanceName("Assign Asset")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class TblAssignAssetToPlaceRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Place"), NotNull, ForeignKey("[dbo].[tblPlaceOfBussiness]", "Id"), LeftJoin("jPlace"), TextualField("PlaceCode")]
        [LookupEditor(typeof(TblPlaceOfBussinessRow))]//Thêm
        public Int32? PlaceId
        {
            get { return Fields.PlaceId[this]; }
            set { Fields.PlaceId[this] = value; }
        }

        [DisplayName("Asset"), NotNull, ForeignKey("[dbo].[tblAsset]", "Id"), LeftJoin("jAsset"), TextualField("AssetName")]
        //[LookupEditor(typeof(TblAssetRow))]//Thêm
        
        public Int32? AssetId
        {
            get { return Fields.AssetId[this]; }
            set { Fields.AssetId[this] = value; }
        }

        [DisplayName("From Date")]
        public DateTime? FromDate
        {
            get { return Fields.FromDate[this]; }
            set { Fields.FromDate[this] = value; }
        }

        [DisplayName("To Date")]
        public DateTime? ToDate
        {
            get { return Fields.ToDate[this]; }
            set { Fields.ToDate[this] = value; }
        }

        [DisplayName("Created By"), Size(30), QuickSearch]
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

        [DisplayName("Update By"), Size(30)]
        public String UpdateBy
        {
            get { return Fields.UpdateBy[this]; }
            set { Fields.UpdateBy[this] = value; }
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
        public String PlaceStatus
        {
            get { return Fields.PlaceStatus[this]; }
            set { Fields.PlaceStatus[this] = value; }
        }

        [DisplayName("Asset Name"), Expression("jAsset.[Name]")]
        public String AssetName
        {
            get { return Fields.AssetName[this]; }
            set { Fields.AssetName[this] = value; }
        }

        [DisplayName("Asset Code"), Expression("jAsset.[Code]")]
        public String AssetCode
        {
            get { return Fields.AssetCode[this]; }
            set { Fields.AssetCode[this] = value; }
        }

        [DisplayName("Asset Group Id"), Expression("jAsset.[GroupId]")]
        public Int32? AssetGroupId
        {
            get { return Fields.AssetGroupId[this]; }
            set { Fields.AssetGroupId[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.CreatedBy; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public TblAssignAssetToPlaceRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field PlaceId;
            public Int32Field AssetId;
            public DateTimeField FromDate;
            public DateTimeField ToDate;
            public StringField CreatedBy;
            public DateTimeField CreatedDate;
            public DateTimeField UpdatedDate;
            public StringField UpdateBy;

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
            public StringField PlaceStatus;

            public StringField AssetName;
            public StringField AssetCode;
            public Int32Field AssetGroupId;
        }
    }
}
