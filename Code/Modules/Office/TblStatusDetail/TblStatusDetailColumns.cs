
namespace ECNET.Office.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Office.TblStatusDetail")]
    [BasedOnRow(typeof(Entities.TblStatusDetailRow), CheckNames = true)]
    public class TblStatusDetailColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        public String StatusName { get; set; }
        public Int32 StatusDetailId { get; set; }
    }
}