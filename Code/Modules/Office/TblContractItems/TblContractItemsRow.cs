
namespace ECNET.Office.Entities
{
    using ECNET.Administration;
    using ECNET.Web.Modules.Office.Common;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Office"), TableName("[dbo].[tblContractItems]"),TwoLevelCached]
    [DisplayName("Contract Items"), InstanceName("Contract Items")]
    [ReadPermission(PermissionKeys.ContractItems.View)]
    [ModifyPermission(PermissionKeys.ContractItems.Modify)]
    [LookupScript("dbo.tblContractItems", Permission = "*")]//add thêm
    public sealed class TblContractItemsRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int32? DetailID
        {
            get { return Fields.DetailID[this]; }
            set { Fields.DetailID[this] = value; }
        }

        [DisplayName("Contract"),PrimaryKey,  ForeignKey("[dbo].[tblContract]", "Id"), LeftJoin("jContract"), TextualField("ContractNameOfOwner"),LookupInclude, Updatable(false)]
        
        [LookupEditor(typeof(TblContractRow))]//Thêm
        public Int32? ContractId
        {
            get { return Fields.ContractId[this]; }
            set { Fields.ContractId[this] = value; }
        }

        
        [DisplayName("Item"), PrimaryKey, NotNull, ForeignKey("[dbo].[tblItems]", "Id"), LeftJoin("jItem"), TextualField("ItemItemName"), LookupInclude]
        [LookupEditor(typeof(TblItemsRow), FilterField = "ItemGroup", FilterValue = TypeOfItem.Contract, CascadeField = "ItemGroup")]//Thêm
        public Int32? ItemId
        {
            get { return Fields.ItemId[this]; }
            set { Fields.ItemId[this] = value; }
        }

        [DisplayName("Value"), Size(500), QuickSearch]
        public String Value
        {
            get { return Fields.Value[this]; }
            set { Fields.Value[this] = value; }
        }

        [DisplayName("Contract Name Of Owner"), Expression("jContract.[NameOfOwner]")]
        public String ContractNameOfOwner
        {
            get { return Fields.ContractNameOfOwner[this]; }
            set { Fields.ContractNameOfOwner[this] = value; }
        }

        [DisplayName("Contract Phone Of Owner"), Expression("jContract.[PhoneOfOwner]")]
        public String ContractPhoneOfOwner
        {
            get { return Fields.ContractPhoneOfOwner[this]; }
            set { Fields.ContractPhoneOfOwner[this] = value; }
        }

        [DisplayName("Contract Date Sign"), Expression("jContract.[DateSign]")]
        public DateTime? ContractDateSign
        {
            get { return Fields.ContractDateSign[this]; }
            set { Fields.ContractDateSign[this] = value; }
        }

        [DisplayName("Contract Type Id"), Expression("jContract.[TypeId]")]
        public Int32? ContractTypeId
        {
            get { return Fields.ContractTypeId[this]; }
            set { Fields.ContractTypeId[this] = value; }
        }

        [DisplayName("Contract File Contract Upload"), Expression("jContract.[FileContractUpload]")]
        public String ContractFileContractUpload
        {
            get { return Fields.ContractFileContractUpload[this]; }
            set { Fields.ContractFileContractUpload[this] = value; }
        }

        [DisplayName("Contract File1"), Expression("jContract.[File1]")]
        public String ContractFile1
        {
            get { return Fields.ContractFile1[this]; }
            set { Fields.ContractFile1[this] = value; }
        }

        [DisplayName("Contract File2"), Expression("jContract.[File2]")]
        public String ContractFile2
        {
            get { return Fields.ContractFile2[this]; }
            set { Fields.ContractFile2[this] = value; }
        }

        [DisplayName("Contract File3"), Expression("jContract.[File3]")]
        public String ContractFile3
        {
            get { return Fields.ContractFile3[this]; }
            set { Fields.ContractFile3[this] = value; }
        }

        [DisplayName("Contract File4"), Expression("jContract.[File4]")]
        public String ContractFile4
        {
            get { return Fields.ContractFile4[this]; }
            set { Fields.ContractFile4[this] = value; }
        }

        [DisplayName("Contract File5"), Expression("jContract.[File5]")]
        public String ContractFile5
        {
            get { return Fields.ContractFile5[this]; }
            set { Fields.ContractFile5[this] = value; }
        }

        [DisplayName("Contract File6"), Expression("jContract.[File6]")]
        public String ContractFile6
        {
            get { return Fields.ContractFile6[this]; }
            set { Fields.ContractFile6[this] = value; }
        }

        [DisplayName("Contract File7"), Expression("jContract.[File7]")]
        public String ContractFile7
        {
            get { return Fields.ContractFile7[this]; }
            set { Fields.ContractFile7[this] = value; }
        }

        [DisplayName("Contract Created By"), Expression("jContract.[CreatedBy]")]
        public String ContractCreatedBy
        {
            get { return Fields.ContractCreatedBy[this]; }
            set { Fields.ContractCreatedBy[this] = value; }
        }

        [DisplayName("Contract Created Date"), Expression("jContract.[CreatedDate]")]
        public DateTime? ContractCreatedDate
        {
            get { return Fields.ContractCreatedDate[this]; }
            set { Fields.ContractCreatedDate[this] = value; }
        }

        [DisplayName("Contract Updated By"), Expression("jContract.[UpdatedBy]")]
        public String ContractUpdatedBy
        {
            get { return Fields.ContractUpdatedBy[this]; }
            set { Fields.ContractUpdatedBy[this] = value; }
        }

        [DisplayName("Contract Updated Date"), Expression("jContract.[UpdatedDate]")]
        public DateTime? ContractUpdatedDate
        {
            get { return Fields.ContractUpdatedDate[this]; }
            set { Fields.ContractUpdatedDate[this] = value; }
        }

        [DisplayName("Item Item Name"), Expression("jItem.[ItemName]"), LookupInclude, MinSelectLevel(SelectLevel.Lookup)]
        public String ItemItemName
        {
            get { return Fields.ItemItemName[this]; }
            set { Fields.ItemItemName[this] = value; }
        }

      

        [DisplayName("Item Item Type"), Expression("jItem.[ItemType]"), LookupInclude]
        public Int32? ItemItemType
        {
            get { return Fields.ItemItemType[this]; }
            set { Fields.ItemItemType[this] = value; }
        }
        [DisplayName("Item Item Group"), Expression("jItem.[ItemGroup]"),LookupInclude]
        public Int32? ItemItemGroup
        {
            get { return Fields.ItemItemGroup[this]; }
            set { Fields.ItemItemGroup[this] = value; }
        }
        [DisplayName("Item Unit"), Expression("jItem.[Unit]"), MinSelectLevel(SelectLevel.List),LookupInclude]
        
        public String ItemUnit
        {
            get { return Fields.ItemUnit[this]; }
            set { Fields.ItemUnit[this] = value; }
        }
        [DisplayName("Item Code"), Expression("jItem.[Code]"), MinSelectLevel(SelectLevel.Always), LookupInclude]

        public String ItemCode
        {
            get { return Fields.ItemCode[this]; }
            set { Fields.ItemCode[this] = value; }
        }
        [DisplayName("Item Data Type"), Expression("jItem.[DataType]"), LookupInclude]
        public DataType? ItemDataType
        {
            get { return (DataType?)Fields.ItemDataType[this]; }
            set { Fields.ItemDataType[this] = (Int32)value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.DetailID; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Value; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public TblContractItemsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field DetailID;
            public Int32Field ContractId;
            public Int32Field ItemId;
            public StringField Value;

            public StringField ContractNameOfOwner;
            public StringField ContractPhoneOfOwner;
            public DateTimeField ContractDateSign;
            public Int32Field ContractTypeId;
            public StringField ContractFileContractUpload;
            public StringField ContractFile1;
            public StringField ContractFile2;
            public StringField ContractFile3;
            public StringField ContractFile4;
            public StringField ContractFile5;
            public StringField ContractFile6;
            public StringField ContractFile7;
            public StringField ContractCreatedBy;
            public DateTimeField ContractCreatedDate;
            public StringField ContractUpdatedBy;
            public DateTimeField ContractUpdatedDate;

            public StringField ItemItemName;
            public StringField ItemUnit;
            public StringField ItemCode;
            public Int32Field ItemItemType;
            public Int32Field ItemItemGroup;
            public Int32Field ItemDataType; 

        }
    }
}
