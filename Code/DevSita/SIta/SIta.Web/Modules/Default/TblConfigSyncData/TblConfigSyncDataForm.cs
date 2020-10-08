
namespace Sita.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.TblConfigSyncData")]
    [BasedOnRow(typeof(Entities.TblConfigSyncDataRow), CheckNames = true)]
    public class TblConfigSyncDataForm
    {
        public Boolean SynchronizeOnlyPeriod { get; set; }
        public Int32 Period { get; set; }
        public Boolean SynchronizeLogWhenReturns { get; set; }
    }
}