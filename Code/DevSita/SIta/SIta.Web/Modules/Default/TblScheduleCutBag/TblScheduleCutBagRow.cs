
namespace Sita.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[TblScheduleCutBag]")]
    [DisplayName("Tbl Schedule Cut Bag"), InstanceName("Tbl Schedule Cut Bag")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class TblScheduleCutBagRow : Row, IIdRow
    {
        [DisplayName("Id"), Column("ID"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Schedule Cut Date"), Column("Schedule_Cut_Date")]
        public Int32? ScheduleCutDate
        {
            get { return Fields.ScheduleCutDate[this]; }
            set { Fields.ScheduleCutDate[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public TblScheduleCutBagRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field ScheduleCutDate;
        }
    }
}
