
namespace ECNET.Office.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Office.TblApprovalCenter")]
    [BasedOnRow(typeof(Entities.TblApprovalCenterRow), CheckNames = true)]
    public class TblApprovalCenterColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        [Hidden]
        public Int32 Id { get; set; }
        [EditLink]
        [QuickFilter(CssClass = "hidden-xs")]
        public String Code { get; set; }
        [QuickFilter(CssClass = "hidden-xs"),Width(100)]
        public String Type { get; set; }
        [Hidden]
        public Int32 ClientId { get; set; }
        [QuickFilter(CssClass = "hidden-xs"), Width(100)]
        public Int32 Status { get; set; }
        [QuickFilter(CssClass = "hidden-xs"), Width(100)]
        public DateTime Date { get; set; }
        [Hidden]
        public Int32 LevelApproval { get; set; }
        [Hidden]
        public Boolean AndOr { get; set; }
        public String ApproveBy { get; set; }
        public DateTime ApprovedDate { get; set; }
        [Hidden]
        public Int32 Times { get; set; }
        [Hidden]
        public Boolean IsSendMail { get; set; }
        [ Width(200)]
        public String ReasonReject { get; set; }
        [Hidden]
        public Boolean IsSms { get; set; }
        public String CreateBy { get; set; }
    }
}