
namespace Sita.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.TblBags")]
    [BasedOnRow(typeof(Entities.TblBagsRow), CheckNames = true)]
    public class TblBagsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        [EditLink]
        [QuickFilter(CssClass = "hidden-xs")]
        public String BaggageTag { get; set; }
        [QuickFilter(CssClass = "hidden-xs")]
        public String FlightRef { get; set; }
        public Boolean Processed { get; set; }
        public String Bsm { get; set; }
        public String Bpm { get; set; }
        [QuickFilter(CssClass = "hidden-xs")]
        public DateTime TimeRcvBsm { get; set; }
        [QuickFilter(CssClass = "hidden-xs")]
        public DateTime TimeRcvBpm { get; set; }
        
        public String DDMM { get; set; }
        public String YYYY { get; set; }
    }
}