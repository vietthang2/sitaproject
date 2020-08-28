
namespace ECNET.Office.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Office.TblAsset")]
    
    [BasedOnRow(typeof(Entities.TblAssetRow), CheckNames = true)]
    
    public class TblAssetForm
    {
        
        public String Name { get; set; }
        public String Code { get; set; }
        public Int32 GroupId { get; set; }
    }
}