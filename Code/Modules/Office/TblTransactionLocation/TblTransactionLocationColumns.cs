
namespace ECNET.Office.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Office.TblTransactionLocation")]
    [BasedOnRow(typeof(Entities.TblTransactionLocationRow), CheckNames = true)]
    public class TblTransactionLocationColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        [EditLink]
        public String Code { get; set; }
        public String Name { get; set; }
        public Int32 AreaId { get; set; }
        public Int32 EmployeeManageId { get; set; }
        public Int32 EmployeeCashId { get; set; }
        public String PlaceCode { get; set; }
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