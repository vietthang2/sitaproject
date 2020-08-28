
namespace ECNET.Office.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using ECNET.Office.Entities;
    using ECNET.Web.Modules.Office.Common;

    [ColumnsScript("Office.TblProjectItem")]
    [BasedOnRow(typeof(Entities.TblProjectItemRow), CheckNames = true)]
    public class TblProjectItemColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight, Hidden]
        public Int32 Id { get; set; }
        [Width(100)]
        [QuickFilter(CssClass = "hidden-xs")]
        public String ProjectCode { get; set; }
      
        [EditLink]
        [QuickFilter(CssClass = "hidden-xs")]
        [Width(120)]
        public String Code { get; set; }
        [QuickFilter(CssClass = "hidden-xs")]
        [Width(150)]
        public String Name { get; set; }
        [QuickFilter(CssClass = "hidden-xs")]
        [LookupEditor(typeof(TblStatusRow), FilterField = "TypeId", FilterValue = StatusType.ProjectItem)]//Thêm
        public String StatusName { get; set; }
        public String Decription { get; set; }
        
        [Width(100)]
        public DateTime FromDate { get; set; }
        
        [Width(100)]
        public DateTime ToDate { get; set; }
        [Width(100)]
        public Int32 TotalDays { get; set; }
        public String Note { get; set; }
        [Hidden]
        public Int32 ProcessBar { get; set; }
        [Width(100)]
        public Int32 Quantity { get; set; }
        [Width(100)]
        public String UnitCode { get; set; }
        [Width(100)]
        public String UnitName { get; set; }
    }
}