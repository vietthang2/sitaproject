
namespace ECNET.Office.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Office"), TableName("[dbo].[TemplateEmail]")]
    [DisplayName("Template Email"), InstanceName("Template Email")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class TemplateEmailRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Name"), Size(200), NotNull, QuickSearch]
        public String Name
        {
            get { return Fields.Name[this]; }
            set { Fields.Name[this] = value; }
        }

        [DisplayName("To"), Size(255), NotNull]
        public String To
        {
            get { return Fields.To[this]; }
            set { Fields.To[this] = value; }
        }

        [DisplayName("Bcc")]
        public String Bcc
        {
            get { return Fields.Bcc[this]; }
            set { Fields.Bcc[this] = value; }
        }

        [DisplayName("Cc")]
        public String Cc
        {
            get { return Fields.Cc[this]; }
            set { Fields.Cc[this] = value; }
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

        public TemplateEmailRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField Name;
            public StringField To;
            public StringField Bcc;
            public StringField Cc;
        }
    }
}
