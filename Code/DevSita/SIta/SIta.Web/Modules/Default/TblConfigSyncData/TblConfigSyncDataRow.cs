
namespace Sita.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using Sita.Administration;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[tblConfigSyncData]")]
    [DisplayName("Config Sync Data"), InstanceName("Config Sync Data")]
    [ReadPermission(PermissionKeys.SyncData.View)]
    [ModifyPermission(PermissionKeys.SyncData.Modify)]
    public sealed class TblConfigSyncDataRow : Row, IIdRow
    {
        [DisplayName("Id"), PrimaryKey]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Synchronize Only Period")]
        public Boolean? SynchronizeOnlyPeriod
        {
            get { return Fields.SynchronizeOnlyPeriod[this]; }
            set { Fields.SynchronizeOnlyPeriod[this] = value; }
        }

        [DisplayName("Period")]
        public Int32? Period
        {
            get { return Fields.Period[this]; }
            set { Fields.Period[this] = value; }
        }

        [DisplayName("Synchronize Log When Returns")]
        public Boolean? SynchronizeLogWhenReturns
        {
            get { return Fields.SynchronizeLogWhenReturns[this]; }
            set { Fields.SynchronizeLogWhenReturns[this] = value; }
        }
        [DisplayName("Last Sync Date")]
        public DateTime? LastSyncDate
        {
            get { return Fields.LastSyncDate[this]; }
            set { Fields.LastSyncDate[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public TblConfigSyncDataRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public BooleanField SynchronizeOnlyPeriod;
            public Int32Field Period;
            public BooleanField SynchronizeLogWhenReturns;
            public DateTimeField LastSyncDate;
        }
    }
}
