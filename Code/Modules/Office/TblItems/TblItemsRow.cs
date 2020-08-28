
namespace ECNET.Office.Entities
{
    using ECNET.Web.Modules.Office.Common;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Office"), TableName("[dbo].[tblItems]")]
    [DisplayName("Tbl Items"), InstanceName("Tbl Items")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("dbo.tblItems", Permission = "*")]//add thêm
    public sealed class TblItemsRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Item Name"), Size(200), NotNull, QuickSearch, LookupInclude]
        public String ItemName
        {
            get { return Fields.ItemName[this]; }
            set { Fields.ItemName[this] = value; }
        }

        [DisplayName("Unit"), Size(30),LookupInclude]
        public String Unit
        {
            get { return Fields.Unit[this]; }
            set { Fields.Unit[this] = value; }
        }

        [DisplayName("Item Type"), LookupInclude]
        public TypeOfItem? ItemType
        {
            get { return (TypeOfItem?)Fields.ItemType[this]; }
            set { Fields.ItemType[this] = (Int32)value; }
        }
        [DisplayName("Item Group"),LookupInclude]
        public ItemGroup? ItemGroup
        {
            get { return (ItemGroup?)Fields.ItemGroup[this]; }
            set { Fields.ItemGroup[this] = (Int32)value; }
        }
        [DisplayName("Data type"),NotNull, LookupInclude]
        public DataType? DataType
        {
            get { return (DataType?)Fields.DataType[this]; }
            set { Fields.DataType[this] = (Int32)value; }
        }
        [DisplayName("Code"),Unique, Size(30), NotNull, LookupInclude]
        public String Code
        {
            get { return Fields.Code[this]; }
            set { Fields.Code[this] = value; }
        }

        [DisplayName("Decriptions"), Size(100)]
        public String Decriptions
        {
            get { return Fields.Decriptions[this]; }
            set { Fields.Decriptions[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.ItemName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public TblItemsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField ItemName;
            public StringField Unit;
            public Int32Field ItemType;
            public Int32Field ItemGroup;
            public Int32Field DataType;
            public StringField Code;
            public StringField Decriptions;
        }
    }
}
