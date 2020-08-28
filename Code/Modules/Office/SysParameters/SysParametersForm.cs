
namespace ECNET.Office.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Office.SysParameters")]
    [BasedOnRow(typeof(Entities.SysParametersRow), CheckNames = true)]
    public class SysParametersForm
    {
        [HalfWidth]
        public String Code { get; set; }
        [HalfWidth]
        public String Name { get; set; }
        [HalfWidth]
        public String Value { get; set; }
        [HalfWidth] 
        public String Unit { get; set; }
       
    }
}