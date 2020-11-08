using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Xml.Serialization;

namespace Sita.Modules.MSMQServices.DTO
{
    public class DailyModel
    {
        [JsonProperty("connect")]
        [XmlAttribute(AttributeName = "connect")]
        public Connect Connect { get; set; }

    }
    public class DailyModelList
    {
        [JsonProperty("connect")]
        [XmlAttribute(AttributeName = "connect")]
        public ConnectList Connect { get; set; }

    }
    [XmlRoot(ElementName = "field")]
    public class Field
    {
        [XmlAttribute(AttributeName = "name")]
        [JsonProperty("name")]
        public string Name { get; set; }
        [XmlAttribute(AttributeName = "instance")]
        [JsonProperty("instance")]
        public string Instance { get; set; }
        [XmlAttribute(AttributeName = "value")]
        [JsonProperty("value")]
        public string Value { get; set; }
    }
    [XmlRoot(ElementName = "daily")]
    public class Daily
    {
        [XmlAttribute(AttributeName = "action")]
        [JsonProperty("action")]
        public string Action { get; set; }
        [XmlAttribute(AttributeName = "adi")]

        [JsonProperty("adi")]
        public string Adi { get; set; }
        [XmlAttribute(AttributeName = "linecode")]

        [JsonProperty("linecode")]
        public string Linecode { get; set; }
        [XmlAttribute(AttributeName = "number")]

        [JsonProperty("number")]
        public string Number { get; set; }
        [XmlAttribute(AttributeName = "schedule_date")]

        [JsonProperty("schedule_date")]
        public string ScheduleDate { get; set; }
        [XmlAttribute(AttributeName = "softreplace")]

        [JsonProperty("softreplace")]
        public string Softreplace { get; set; }
        [XmlAttribute(AttributeName = "site_iata")]
        [JsonProperty("site_iata")]
        public string SiteIata { get; set; }
        [XmlAttribute(AttributeName = "date_boundary")]

        [JsonProperty("date_boundary")]
        public string DateBoundary { get; set; }
        [XmlElement(ElementName = "field")]

        [JsonProperty("field")]
        public List<Field> Field { get; set; }
    }
    [XmlRoot(ElementName = "connect")]
    public class Connect
    {
        [XmlAttribute(AttributeName = "version")]
        [JsonProperty("version")]
        public string Version { get; set; }
        [XmlAttribute(AttributeName = "name")]

        [JsonProperty("name")]
        public string Name { get; set; }

        [JsonProperty("daily")]
        [XmlElement(ElementName = "daily")]
        public Daily Daily { get; set; }
    }
    public class ConnectList
    {
        [JsonProperty("version")]
        public string Version { get; set; }

        [JsonProperty("name")]
        public string Name { get; set; }

        [JsonProperty("daily")]
        public List<Daily> Daily { get; set; }
    }
    public class Root
    {
        [JsonProperty("connect")]
        public Connect Connect { get; set; }
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