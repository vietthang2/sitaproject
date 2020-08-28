
namespace ECNET.Office.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Office.TblDistrict")]
    [BasedOnRow(typeof(Entities.TblDistrictRow), CheckNames = true)]
    public class TblDistrictForm
    {
        public Int32 CityId { get; set; }
        public String Name { get; set; }
        public String Code { get; set; }
        public String EnName { get; set; }
    }
}