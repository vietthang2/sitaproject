
namespace ECNET.Office.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Office.TblArea")]
    [BasedOnRow(typeof(Entities.TblAreaRow), CheckNames = true)]
    public class TblAreaForm
    {
        public String BranchCode { get; set; }
        public String Code { get; set; }
        public String Name { get; set; }
    }
}