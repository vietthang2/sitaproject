
namespace Sita.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[tblBags]")]
    [DisplayName("Tbl Bags"), InstanceName("Tbl Bags")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class TblBagsRow : Row, IIdRow, INameRow
    {
        [DisplayName("Baggage Tag"), Column("Baggage_Tag"), Size(50), NotNull, QuickSearch, Unique(CheckBeforeSave =true,ErrorMessage ="Bagtag đã tồn tại")]
        public String BaggageTag
        {
            get { return Fields.BaggageTag[this]; }
            set { Fields.BaggageTag[this] = value; }
        }

        [DisplayName("Flight Ref"), Size(200)]
        public String FlightRef
        {
            get { return Fields.FlightRef[this]; }
            set { Fields.FlightRef[this] = value; }
        }

        [DisplayName("Processed")]
        public Boolean? Processed
        {
            get { return Fields.Processed[this]; }
            set { Fields.Processed[this] = value; }
        }

        [DisplayName("Bsm"), Column("BSM")]
        public String Bsm
        {
            get { return Fields.Bsm[this]; }
            set { Fields.Bsm[this] = value; }
        }

        [DisplayName("Bpm"), Column("BPM")]
        public String Bpm
        {
            get { return Fields.Bpm[this]; }
            set { Fields.Bpm[this] = value; }
        }

        [DisplayName("Time Rcv Bsm"), Column("TimeRcvBSM")]
        public DateTime? TimeRcvBsm
        {
            get { return Fields.TimeRcvBsm[this]; }
            set { Fields.TimeRcvBsm[this] = value; }
        }

        [DisplayName("Time Rcv Bpm"), Column("TimeRcvBPM")]
        public DateTime? TimeRcvBpm
        {
            get { return Fields.TimeRcvBpm[this]; }
            set { Fields.TimeRcvBpm[this] = value; }
        }

        [DisplayName("Id"), PrimaryKey,Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.BaggageTag; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public TblBagsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public StringField BaggageTag;
            public StringField FlightRef;
            public BooleanField Processed;
            public StringField Bsm;
            public StringField Bpm;
            public DateTimeField TimeRcvBsm;
            public DateTimeField TimeRcvBpm;
            public Int32Field Id;
        }
    }
}
