
namespace ECNET.Office.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Office.TblStatus")]
    [BasedOnRow(typeof(Entities.TblStatusRow), CheckNames = true)]
    public class TblStatusColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        public Int32 NextStatus { get; set; }
        [EditLink]
        public String Name { get; set; }
        [Width(100)]
        public Int32 TypeId { get; set; }
        [Width(100)]
        public Boolean IsNew { get; set; }
        [Width(100)]
        public Boolean IsReadOnly { get; set; }
      
    }
}