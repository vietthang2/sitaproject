
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
        [Tab("Flight")]
        public String Adi { get; set; }
        public String LineCode { get; set; }
        public String Number { get; set; }
        public String ScheduleDate { get; set; }
        public String SoftReplace { get; set; }
        public String SiteIata { get; set; }
        public String DateBoundary { get; set; }
        
        public Int32 Chute { get; set; }
        [DateTimeFormatter]
        [DateTimeEditor(IntervalMinutes = 1)]
        public DateTime LastChanged { get; set; }
        [DateTimeFormatter]
        [DateTimeEditor(IntervalMinutes = 1)]
        public DateTime DateCreated { get; set; }
        public String UserCreated { get; set; }
        public String UserUpdate { get; set; }
        [DateTimeFormatter]
        [DateTimeEditor(IntervalMinutes = 1)]
        public DateTime DateUpdated { get; set; }
        [Tab("Field")]
        [FieldDetailEditor]
        public List<Entities.TblFieldRow> ListField { get; set; }
    }
}