
namespace ECNET.Office.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Office.TblTransactionLocation")]
    [BasedOnRow(typeof(Entities.TblTransactionLocationRow), CheckNames = true)]
    public class TblTransactionLocationForm
    {
        public String Code { get; set; }
        public String Name { get; set; }
        public Int32 AreaId { get; set; }
        public Int32 EmployeeManageId { get; set; }
        public Int32 EmployeeCashId { get; set; }
        public Int32 PlaceId { get; set; }
        public TimeSpan OpenFrom { get; set; }
        public TimeSpan OpenTo { get; set; }
        public TimeSpan OpeningTime { get; set; }
        public DateTime OpeningDate { get; set; }
        public String CreatedBy { get; set; }
        public DateTime CreatedDate { get; set; }
        public String UpdatedBy { get; set; }
        public DateTime UpdatedDate { get; set; }
        public Int32 Status { get; set; }
    }
}