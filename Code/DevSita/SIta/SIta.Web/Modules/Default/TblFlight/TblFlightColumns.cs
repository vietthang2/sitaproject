
namespace Sita.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.TblFlight")]
    [BasedOnRow(typeof(Entities.TblFlightRow), CheckNames = true)]
    public class TblFlightColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        
        public String Identify { get; set; }
        [QuickFilter(CssClass = "hidden-xs")]
        public String LineCode { get; set; }
        public String Number { get; set; }
        public String Adi { get; set; }
        [QuickFilter(CssClass = "hidden-xs")]
        public String ScheduleDate { get; set; }
        public String SoftReplace { get; set; }
        public String SiteIata { get; set; }
        public String DateBoundary { get; set; }
        public Int32 Chute { get; set; }
        public DateTime LastChanged { get; set; }
        public DateTime DateCreated { get; set; }
        public String UserCreated { get; set; }
        public String UserUpdate { get; set; }
        public DateTime DateUpdated { get; set; }
    }
}