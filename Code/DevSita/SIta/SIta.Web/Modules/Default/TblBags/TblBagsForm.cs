
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
        [HalfWidth, ReadOnly(true)]
        public String BaggageTag { get; set; }
        [HalfWidth, ReadOnly(true)]
        public String FlightRef { get; set; }
        public Boolean Processed { get; set; }
        [TextAreaEditor(Rows=5)  ]
        public String Bsm { get; set; }
        [TextAreaEditor(Rows = 5)]
        public String Bpm { get; set; }
        [HalfWidth, ReadOnly(true)]
        public DateTime TimeRcvBsm { get; set; }
        [HalfWidth, ReadOnly(true)]
        public DateTime TimeRcvBpm { get; set; }
        [HalfWidth, ReadOnly(true)]
        public String DDMM { get; set; }
        [HalfWidth, ReadOnly(true)]
        public String YYYY { get; set; }
    }
}