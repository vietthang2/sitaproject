
namespace ECNET.Office.Entities
{
    using ECNET.Administration;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Office"), TableName("[dbo].[tblCity]")]
    [DisplayName("City"), InstanceName("City")]
    [ReadPermission(PermissionKeys.City.View)]
    [ModifyPermission(PermissionKeys.City.Modify)]
    [DeletePermission(PermissionKeys.City.Delete)]
    [LookupScript("dbo.City",Permission ="*")]//add thêm
    public sealed class TblCityRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }
        [DisplayName("Code"), Size(30), QuickSearch, NotNull, Unique]
        public String Code
        {
            get { return Fields.Code[this]; }
            set { Fields.Code[this] = value; }
        }
        [DisplayName("Name"), Size(100), QuickSearch]
        public String Name
        {
            get { return Fields.Name[this]; }
            set { Fields.Name[this] = value; }
        }
        [DisplayName("EnName"), Size(100), QuickSearch]
        public String EnName
        {
            get { return Fields.Name[this]; }
            set { Fields.Name[this] = value; }
        }
        
        [DisplayName("ECCode"), Size(100), QuickSearch]
        public String ECCode
        {
            get { return Fields.ECCode[this]; }
            set { Fields.ECCode[this] = value; }
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

        public TblCityRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField Name;
            public StringField EnName;
            public StringField Code;
            public StringField ECCode;
        }
    }
}
