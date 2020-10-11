
namespace Sita.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.TblScheduleCutBag")]
    [BasedOnRow(typeof(Entities.TblScheduleCutBagRow), CheckNames = true)]
    public class TblScheduleCutBagColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        [Width(300)]
        public Int32 ScheduleCutDate { get; set; }
    }
}