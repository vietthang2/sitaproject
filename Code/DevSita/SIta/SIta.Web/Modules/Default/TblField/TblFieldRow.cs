
namespace Sita.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[tblField]")]
    [DisplayName("Tbl Field"), InstanceName("Tbl Field")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class TblFieldRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), NotNull]
        public Guid? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Name"), Size(50), QuickSearch]
        public String Name
        {
            get { return Fields.Name[this]; }
            set { Fields.Name[this] = value; }
        }

        [DisplayName("Instance"), Size(50)]
        public String Instance
        {
            get { return Fields.Instance[this]; }
            set { Fields.Instance[this] = value; }
        }

        [DisplayName("Value"), Size(50)]
        public String Value
        {
            get { return Fields.Value[this]; }
            set { Fields.Value[this] = value; }
        }

        [DisplayName("Flight Ref"), Size(200)]
        public String FlightRef
        {
            get { return Fields.FlightRef[this]; }
            set { Fields.FlightRef[this] = value; }
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

        public TblFieldRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public GuidField Id;
            public StringField Name;
            public StringField Instance;
            public StringField Value;
            public StringField FlightRef;
        }
    }
}
