
namespace Sita.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.TblConfigSyncData")]
    [BasedOnRow(typeof(Entities.TblConfigSyncDataRow), CheckNames = true)]
    public class TblConfigSyncDataColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        [Width(100)]
        public Boolean SynchronizeOnlyPeriod { get; set; }
        [Width(40)]
        public Int32 Period { get; set; }
        [Width(100)]
        public Boolean SynchronizeLogWhenReturns { get; set; }
    }
}