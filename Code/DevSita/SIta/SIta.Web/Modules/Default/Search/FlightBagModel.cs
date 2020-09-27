using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Sita.Modules.Default.SearchBagtag
{
    public class FlightBagModel
    {
        public String Identify { get; set; }
        public String Adi { get; set; }
        public String LineCode { get; set; }
        public String Number { get; set; }
        public String ScheduleDate { get; set; }
        public String SoftReplace { get; set; }
        public String SiteIata { get; set; }
        public String DateBounday { get; set; }
        public Int32 Chute { get; set; }
        public DateTime LastChanged { get; set; }
        public DateTime DateCreated { get; set; }
        public String UserCreated { get; set; }
        public String UserUpdate { get; set; }
        public DateTime DateUpdated { get; set; }
        //Bagtag

        public String BaggageTag { get; set; }

        public String FlightRef { get; set; }
        public Boolean Processed { get; set; }
        public String Bsm { get; set; }
        public String Bpm { get; set; }

        public DateTime TimeRcvBsm { get; set; }

        public DateTime TimeRcvBpm { get; set; }

        public Int32 Id { get; set; }
        public String DDMM { get; set; }
        public String YYYY { get; set; }
    }
    public class RequestSearch{
        public String flight { get; set; }
        public String bagtag { get; set; }
    }
}