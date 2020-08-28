
namespace ECNET.Office.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Office.TblWards")]
    [BasedOnRow(typeof(Entities.TblWardsRow), CheckNames = true)]
    public class TblWardsForm
    {
        public Int32 DistrictId { get; set; }
        public String Name { get; set; }
        public String EnName { get; set; }
    }
}