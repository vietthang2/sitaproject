
namespace ECNET.Office.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Office.TblItems")]
    [BasedOnRow(typeof(Entities.TblItemsRow), CheckNames = true)]
    public class TblItemsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        [EditLink]
        public String ItemName { get; set; }
        public String Unit { get; set; }
        public String ItemType { get; set; }
        public String Code { get; set; }
        public String Decriptions { get; set; }
    }
}