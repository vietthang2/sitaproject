
namespace ECNET.Office.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Office.TblContractSchedule")]
    [BasedOnRow(typeof(Entities.TblContractScheduleRow), CheckNames = true)]
    public class TblContractScheduleColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight,Hidden]

        public Int32 Id { get; set; }

        [Width(120), EditLink]
        public String ContarctNo { get; set; }
        [Width(120), EditLink]
        public Int32 Times { get; set; }
        [Width(120)]
        public Decimal Amount { get; set; }
        [Width(120)]
        public DateTime Date { get; set; }
    }
}