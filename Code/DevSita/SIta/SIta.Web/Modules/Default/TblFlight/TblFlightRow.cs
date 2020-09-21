
namespace Sita.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[tblFlight]")]
    [DisplayName("Tbl Flight"), InstanceName("Tbl Flight")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class TblFlightRow : Row, IIdRow, INameRow
    {
        [DisplayName("Identify"), Size(100), PrimaryKey, QuickSearch]
        public String Identify
        {
            get { return Fields.Identify[this]; }
            set { Fields.Identify[this] = value; }
        }

        [DisplayName("Adi"), Size(50)]
        public String Adi
        {
            get { return Fields.Adi[this]; }
            set { Fields.Adi[this] = value; }
        }

        [DisplayName("Line Code"), Size(50)]
        public String LineCode
        {
            get { return Fields.LineCode[this]; }
            set { Fields.LineCode[this] = value; }
        }

        [DisplayName("Number"), Size(50)]
        public String Number
        {
            get { return Fields.Number[this]; }
            set { Fields.Number[this] = value; }
        }

        [DisplayName("Schedule Date"), Column("Schedule_Date"), Size(50)]
        public String ScheduleDate
        {
            get { return Fields.ScheduleDate[this]; }
            set { Fields.ScheduleDate[this] = value; }
        }

        [DisplayName("Soft Replace"), Size(50)]
        public String SoftReplace
        {
            get { return Fields.SoftReplace[this]; }
            set { Fields.SoftReplace[this] = value; }
        }

        [DisplayName("Site Iata"), Column("Site_iata"), Size(50)]
        public String SiteIata
        {
            get { return Fields.SiteIata[this]; }
            set { Fields.SiteIata[this] = value; }
        }

        [DisplayName("Date Boundảy"), Column("Date_Boundảy"), Size(50)]
        public String DateBoundảy
        {
            get { return Fields.DateBoundảy[this]; }
            set { Fields.DateBoundảy[this] = value; }
        }

        [DisplayName("Chute")]
        public Int32? Chute
        {
            get { return Fields.Chute[this]; }
            set { Fields.Chute[this] = value; }
        }

        [DisplayName("Last Changed")]
        public DateTime? LastChanged
        {
            get { return Fields.LastChanged[this]; }
            set { Fields.LastChanged[this] = value; }
        }

        [DisplayName("Date Created")]
        public DateTime? DateCreated
        {
            get { return Fields.DateCreated[this]; }
            set { Fields.DateCreated[this] = value; }
        }

        [DisplayName("User Created"), Size(50)]
        public String UserCreated
        {
            get { return Fields.UserCreated[this]; }
            set { Fields.UserCreated[this] = value; }
        }

        [DisplayName("User Update"), Size(50)]
        public String UserUpdate
        {
            get { return Fields.UserUpdate[this]; }
            set { Fields.UserUpdate[this] = value; }
        }

        [DisplayName("Date Updated")]
        public DateTime? DateUpdated
        {
            get { return Fields.DateUpdated[this]; }
            set { Fields.DateUpdated[this] = value; }
        }


        [DisplayName("DDMM"), Column("DDMM")]
        public String DDMM
        {
            get { return Fields.DDMM[this]; }
            set { Fields.DDMM[this] = value; }
        }

        [DisplayName("YYYY"), Column("YYYY")]
        public String YYYY
        {
            get { return Fields.YYYY[this]; }
            set { Fields.YYYY[this] = value; }
        }
        IIdField IIdRow.IdField
        {
            get { return Fields.Identify; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Identify; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public TblFlightRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public StringField Identify;
            public StringField Adi;
            public StringField LineCode;
            public StringField Number;
            public StringField ScheduleDate;
            public StringField SoftReplace;
            public StringField SiteIata;
            public StringField DateBoundảy;
            public Int32Field Chute;
            public DateTimeField LastChanged;
            public DateTimeField DateCreated;
            public StringField UserCreated;
            public StringField UserUpdate;
            public DateTimeField DateUpdated;
            public StringField DDMM;
            public StringField YYYY;
        }
    }
}
