
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

    [ColumnsScript("Office.TblProject")]
    [BasedOnRow(typeof(Entities.TblProjectRow), CheckNames = true)]
    public class TblProjectColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        [EditLink]
        
        public String Code { get; set; }
        
        public String Name { get; set; }
        [QuickFilter(CssClass = "hidden-xs")]
        [LookupEditor(typeof(TblStatusRow), FilterField = "TypeId", FilterValue = StatusType.Project)]//Thêm
        public String StatusName { get; set; }
        [Width(120)]
        public string RecordStatus { get; set; }
        public DateTime InnitiatedDate { get; set; }
        [QuickFilter(CssClass = "hidden-xs")]
        public DateTime FromDate { get; set; }
        [QuickFilter(CssClass = "hidden-xs")]
        public DateTime ToDate { get; set; }
        [QuickFilter(CssClass = "hidden-xs")]
        public String TransactionLocationCode { get; set; }
        public String TransactionLocationName { get; set; }
        public String PersonManagement { get; set; }
        public String PersonManagementPhone { get; set; }
        [QuickFilter(CssClass = "hidden-xs")]
        public String PlaceCode { get; set; }
        public String Note { get; set; }
        public String CreatedBy { get; set; }
        public DateTime CreatedDate { get; set; }
        public String UpdatedBy { get; set; }
        public DateTime UpdatedDate { get; set; }
      
    }
}