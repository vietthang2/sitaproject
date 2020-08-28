
namespace ECNET.Office.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Office.TblAssetGroup")]
    [BasedOnRow(typeof(Entities.TblAssetGroupRow), CheckNames = true)]
    public class TblAssetGroupForm
    {
        public String Name { get; set; }
        public String Description { get; set; }
    }
}