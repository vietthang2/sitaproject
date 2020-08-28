
namespace ECNET.Office.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Office.TblContractPayment")]
    [BasedOnRow(typeof(Entities.TblContractPaymentRow), CheckNames = true)]
    public class TblContractPaymentForm
    {
        public Int32 ContractId { get; set; }
        public String InvoiceNo { get; set; }
        public DateTime DatePaid { get; set; }
        public String Period { get; set; }
        public Decimal PaidAmount { get; set; }
        public String PaidBy { get; set; }
        public String CreatedBy { get; set; }
        public DateTime CreatedDate { get; set; }
        public String FileInvoice { get; set; }
        public String File1 { get; set; }
        public String File2 { get; set; }
        public String File3 { get; set; }
        public String File4 { get; set; }
        public String File5 { get; set; }
    }
}