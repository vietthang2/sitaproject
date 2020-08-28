
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

    [ConnectionKey("Default"), Module("Office"), TableName("[dbo].[tblContractType]")]
    [DisplayName("Tbl Contract Type"), InstanceName("Tbl Contract Type")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("dbo.tblContractType",Permission ="*")]//add thêm
    public sealed class TblContractTypeRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }
        [DisplayName("Type"),LookupInclude]
        public TypeOfPlace? Type
        {
            get { return (TypeOfPlace?)Fields.Type[this]; }
            set { Fields.Type[this] = (Int32)value; }
        }

        [DisplayName("Type Name"), Size(50), NotNull, QuickSearch]
        public String TypeName
        {
            get { return Fields.TypeName[this]; }
            set { Fields.TypeName[this] = value; }
        }
        [DisplayName("Code"), Size(50), NotNull, QuickSearch, Placeholder("Mã loại hợp đồng. Được sử dụng để tạo mã hợp đồng")]
        public String Code
        {
            get { return Fields.Code[this]; }
            set { Fields.Code[this] = value; }
        }
        [DisplayName("Description"), Size(500)]
        public String Description
        {
            get { return Fields.Description[this]; }
            set { Fields.Description[this] = value; }
        }

        [DisplayName("Person Sign"), Size(100)]
        public String PersonSign
        {
            get { return Fields.PersonSign[this]; }
            set { Fields.PersonSign[this] = value; }
        }

        [DisplayName("Person Position"), Size(100)]
        public String PersonPosition
        {
            get { return Fields.PersonPosition[this]; }
            set { Fields.PersonPosition[this] = value; }
        }

        [DisplayName("Person Authority No"), Size(100)]
        public String PersonAuthorityNo
        {
            get { return Fields.PersonAuthorityNo[this]; }
            set { Fields.PersonAuthorityNo[this] = value; }
        }

        [DisplayName("Remark1"), Size(200)]
        public String Remark1
        {
            get { return Fields.Remark1[this]; }
            set { Fields.Remark1[this] = value; }
        }

        [DisplayName("Remark2"), Size(200)]
        public String Remark2
        {
            get { return Fields.Remark2[this]; }
            set { Fields.Remark2[this] = value; }
        }

        [DisplayName("Remark3"), Size(200)]
        public String Remark3
        {
            get { return Fields.Remark3[this]; }
            set { Fields.Remark3[this] = value; }
        }

        [DisplayName("Remark4"), Size(200)]
        public String Remark4
        {
            get { return Fields.Remark4[this]; }
            set { Fields.Remark4[this] = value; }
        }

        [DisplayName("Remark5"), Size(200)]
        public String Remark5
        {
            get { return Fields.Remark5[this]; }
            set { Fields.Remark5[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.TypeName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public TblContractTypeRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField TypeName;
            public StringField Code; 
            public StringField Description;
            public StringField PersonSign;
            public StringField PersonPosition;
            public StringField PersonAuthorityNo;
            public StringField Remark1;
            public StringField Remark2;
            public StringField Remark3;
            public StringField Remark4;
            public StringField Remark5;
            public Int32Field Type;
        }
    }
}
