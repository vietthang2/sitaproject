using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SIta.Modules.MSMQServices.DTO
{
    public class DailyModel
    {
        [JsonProperty("connect")]
        public Connect Connect { get; set; }

    }
    public class Field
    {
        [JsonProperty("name")]
        public string Name { get; set; }

        [JsonProperty("instance")]
        public string Instance { get; set; }

        [JsonProperty("value")]
        public object Value { get; set; }
    }

    public class Daily
    {
        [JsonProperty("action")]
        public string Action { get; set; }

        [JsonProperty("adi")]
        public string Adi { get; set; }

        [JsonProperty("linecode")]
        public string Linecode { get; set; }

        [JsonProperty("number")]
        public string Number { get; set; }

        [JsonProperty("schedule_date")]
        public string ScheduleDate { get; set; }

        [JsonProperty("softreplace")]
        public string Softreplace { get; set; }

        [JsonProperty("site_iata")]
        public string SiteIata { get; set; }

        [JsonProperty("date_boundary")]
        public string DateBoundary { get; set; }

        [JsonProperty("field")]
        public List<Field> Field { get; set; }
    }

    public class Connect
    {
        [JsonProperty("version")]
        public string Version { get; set; }

        [JsonProperty("name")]
        public string Name { get; set; }

        [JsonProperty("daily")]
        public Daily Daily { get; set; }
    }

    public class Root
    {
        //[JsonProperty("connect")]
        //public Connect Connect { get; set; }
    }
}
//sample
//<?xml version = "1.0" encoding="utf-8"?>
//<connect version = "1.0" name="AMS">
//<daily action = "replace" adi="A" linecode="DL" number="1397" schedule_date="2016-10-26" softreplace="true" site_iata="DEN" date_boundary="0">
//<field name = "schedule" instance="1" value="2016-10-26T10:18:00" />
//<field name = "estimated" instance="1" value="2016-10-26T10:18:00" />
//<field name = "actual" instance="1" value="2016-10-26T10:18:00" />
//<field name = "domesticintcode" instance="1" value="I" />
//<field name = "aircrafttype" instance="1" value="73H" />
//<field name = "aircrafttypeicao" instance="1" value="B738" />
//<field name = "allparkingbays" instance="1" value="" />
//<field name = "gate" instance="1" value="" />
//<field name = "claim" instance="1" value="" />
//<field name = "displayfltno" instance="11" value="" />
//<field name = "status" instance="1" value="ON" />
//<field name = "totpax" instance="1" value="156" />
//<field name = "mtow" instance="1" value="79016" />
//<field name = "city" instance="1" value="CVG" />
//</daily>
//</connect>
//