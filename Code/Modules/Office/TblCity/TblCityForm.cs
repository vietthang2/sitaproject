
namespace ECNET.Office.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Office.TblCity")]
    [BasedOnRow(typeof(Entities.TblCityRow), CheckNames = true)]
    public class TblCityForm
    {
        public String Name { get; set; }
        public String Code { get; set; }
        public String EnName { get; set; }
        public String ECCode { get; set; }
    }
}