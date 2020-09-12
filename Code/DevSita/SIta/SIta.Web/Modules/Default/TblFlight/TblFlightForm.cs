
namespace Sita.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.TblFlight")]
    [BasedOnRow(typeof(Entities.TblFlightRow), CheckNames = true)]
    public class TblFlightForm
    {
        public String Adi { get; set; }
        public String LineCode { get; set; }
        public String Number { get; set; }
        public String ScheduleDate { get; set; }
        public String SoftReplace { get; set; }
        public String SiteIata { get; set; }
        public String DateBoundảy { get; set; }
        public Int32 Chute { get; set; }
        public DateTime LastChanged { get; set; }
        public DateTime DateCreated { get; set; }
        public String UserCreated { get; set; }
        public String UserUpdate { get; set; }
        public DateTime DateUpdated { get; set; }
    }
}