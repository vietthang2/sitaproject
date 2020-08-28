
namespace ECNET.Office.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Office.TblUnit")]
    [BasedOnRow(typeof(Entities.TblUnitRow), CheckNames = true)]
    public class TblUnitForm
    {
        [HalfWidth]
        public String Code { get; set; }
        [HalfWidth]
        public String Name { get; set; }
        
        public String Decription { get; set; }
        public Int32 Rate { get; set; }
        [Hidden]
        public String CreatedBy { get; set; }
        [Hidden]
        public DateTime CreatedDate { get; set; }
        [Hidden]
        public String UpdatedBy { get; set; }
        [Hidden]
        public DateTime UpdatedDate { get; set; }
    }
}