
namespace ECNET.Office.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Office.TblStatusDetailLevel2")]
    [BasedOnRow(typeof(Entities.TblStatusDetailLevel2Row), CheckNames = true)]
    public class TblStatusDetailLevel2Columns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        public String StatusName { get; set; }
        public Int32 StatusDetailId { get; set; }
    }
}