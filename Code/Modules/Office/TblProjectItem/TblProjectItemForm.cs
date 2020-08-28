
namespace ECNET.Office.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using ECNET.Web.Modules.Office.Common;

    [FormScript("Office.TblProjectItem")]
    [BasedOnRow(typeof(Entities.TblProjectItemRow), CheckNames = true)]
    public class TblProjectItemForm
    {
        [ReadOnly(true),  Hidden]
        public Int32 ProjectId { get; set; }
        [HalfWidth, HideOnInsert]
        public Int32 Status { get; set; }
        [HalfWidth, HideOnInsert, ReadOnly(true)]
        public String Code { get; set; }
        
        public String Name { get; set; }
        [HalfWidth]
        public Decimal? Quantity { get; set; }
        [HalfWidth]
        public Int32 UnitId { get; set; }
      
       
        [HalfWidth]
        public DateTime FromDate { get; set; }
        [HalfWidth]
        public DateTime ToDate { get; set; }
        
        public String Decription { get; set; }
        [HalfWidth, ReadOnly(true)]
        public Int32 TotalDays { get; set; }
        [HalfWidth]
        public String Note { get; set; }
        [HalfWidth, Hidden]
        public Int32 ProcessBar { get; set; }
       
    }
}