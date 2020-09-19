
namespace Sita.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.TblBags")]
    [BasedOnRow(typeof(Entities.TblBagsRow), CheckNames = true)]
    public class TblBagsForm
    {
        public String BaggageTag { get; set; }
        public String FlightRef { get; set; }
        public Boolean Processed { get; set; }
        public String Bsm { get; set; }
        public String Bpm { get; set; }
        public DateTime TimeRcvBsm { get; set; }
        public DateTime TimeRcvBpm { get; set; }
        public String DDMM { get; set; }
        public String YYYY { get; set; }
    }
}