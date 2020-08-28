
namespace ECNET.Office.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Office.TblContractSchedule")]
    [BasedOnRow(typeof(Entities.TblContractScheduleRow), CheckNames = true)]
    public class TblContractScheduleForm
    {
        
        public Int32 ContractId { get; set; }
        public Int32 Times { get; set; }
        public Decimal Amount { get; set; }
        
        public DateTime Date { get; set; }
    }
}