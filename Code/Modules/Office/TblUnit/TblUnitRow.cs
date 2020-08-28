
namespace ECNET.Office.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Office"), TableName("[dbo].[tblUnit]")]
    [DisplayName("Tbl Unit"), InstanceName("Tbl Unit")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("dbo.tblUnit", Permission = "*")]//add thêm
    public sealed class TblUnitRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Code"), Size(50),NotNull,LookupInclude, QuickSearch]
        public String Code
        {
            get { return Fields.Code[this]; }
            set { Fields.Code[this] = value; }
        }

        [DisplayName("Name"), Size(256), NotNull, LookupInclude]
        public String Name
        {
            get { return Fields.Name[this]; }
            set { Fields.Name[this] = value; }
        }

        [DisplayName("Decription"), Size(256)]
        public String Decription
        {
            get { return Fields.Decription[this]; }
            set { Fields.Decription[this] = value; }
        }

        [DisplayName("Rate"), Hidden]
        public Int32? Rate
        {
            get { return Fields.Rate[this]; }
            set { Fields.Rate[this] = value; }
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

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Name; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public TblUnitRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField Code;
            public StringField Name;
            public StringField Decription;
            public Int32Field Rate;
            public StringField CreatedBy;
            public DateTimeField CreatedDate;
            public StringField UpdatedBy;
            public DateTimeField UpdatedDate;
        }
    }
}
