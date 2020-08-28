
namespace ECNET.Office.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Office"), TableName("[dbo].[SysParameters]")]
    [DisplayName("Sys Parameters"), InstanceName("Sys Parameters")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("dbo.SysParameters", Permission = "*")]//add thêm
    public sealed class SysParametersRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Code"), Size(50), NotNull, QuickSearch, LookupInclude]
        public String Code
        {
            get { return Fields.Code[this]; }
            set { Fields.Code[this] = value; }
        }

        [DisplayName("Name"), Size(500), NotNull]
        public String Name
        {
            get { return Fields.Name[this]; }
            set { Fields.Name[this] = value; }
        }

        [DisplayName("Value"), Size(500), NotNull, LookupInclude]
        public String Value
        {
            get { return Fields.Value[this]; }
            set { Fields.Value[this] = value; }
        }

        [DisplayName("Unit"), Size(500), NotNull]
        public String Unit
        {
            get { return Fields.Unit[this]; }
            set { Fields.Unit[this] = value; }
        }

        [DisplayName("Created Date")]
        public DateTime? CreatedDate
        {
            get { return Fields.CreatedDate[this]; }
            set { Fields.CreatedDate[this] = value; }
        }

        [DisplayName("Created By"), Size(30)]
        public String CreatedBy
        {
            get { return Fields.CreatedBy[this]; }
            set { Fields.CreatedBy[this] = value; }
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

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Code; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public SysParametersRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField Code;
            public StringField Name;
            public StringField Value;
            public StringField Unit;
            public DateTimeField CreatedDate;
            public StringField CreatedBy;
            public DateTimeField UpdatedDate;
            public StringField UpdatedBy;
        }
    }
}
