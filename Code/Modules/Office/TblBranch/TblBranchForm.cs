
namespace ECNET.Office.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Office.TblBranch")]
    [BasedOnRow(typeof(Entities.TblBranchRow), CheckNames = true)]
    public class TblBranchForm
    {
        
        public String Code { get; set; }
        public String Name { get; set; }
    }
}