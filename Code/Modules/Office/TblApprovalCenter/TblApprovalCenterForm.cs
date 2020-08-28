
namespace ECNET.Office.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Office.TblApprovalCenter")]
    [BasedOnRow(typeof(Entities.TblApprovalCenterRow), CheckNames = true)]
    public class TblApprovalCenterForm
    {
        [ReadOnly(true)]
        [HalfWidth]
        public String Type { get; set; }
        [HalfWidth]
        public Int32 Status { get; set; }
        [ReadOnly(true)]
        [HalfWidth]
        public String Code { get; set; }
        [ReadOnly(true), Hidden]
        [HalfWidth]
        public Int32 ClientId { get; set; }
        [TextAreaEditor(Rows =2)]
        public String ReasonReject { get; set; }
       
      
       
        public DateTime Date { get; set; }
        [ReadOnly(true)]
        //[HalfWidth]
        //public Int32 LevelApproval { get; set; }
        //[ReadOnly(true)]
        //public Boolean AndOr { get; set; }
        [HalfWidth]
        public String ApproveBy { get; set; }
        [ReadOnly(true)]
        [HalfWidth]
        public DateTime ApprovedDate { get; set; }
        //[ReadOnly(true)]
        //public Int32 Times { get; set; }
        [ReadOnly(true)]
        [HalfWidth]
        public Boolean IsSendMail { get; set; }
      
     
        [ReadOnly(true)]
        [HalfWidth]
        public Boolean IsSms { get; set; }
        [ReadOnly(true)]
        [HalfWidth]
        public String CreateBy { get; set; }
    }
}