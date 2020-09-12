
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
        [EditLink]
        public String BaggageTag { get; set; }
        public String FlightRef { get; set; }
        public Boolean Processed { get; set; }
        public String Bsm { get; set; }
        public String Bpm { get; set; }
        public DateTime TimeRcvBsm { get; set; }
        public DateTime TimeRcvBpm { get; set; }
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
    }
}