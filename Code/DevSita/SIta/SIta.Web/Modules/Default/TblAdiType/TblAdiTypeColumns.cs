
namespace Sita.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.TblAdiType")]
    [BasedOnRow(typeof(Entities.TblAdiTypeRow), CheckNames = true)]
    public class TblAdiTypeColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public String Code { get; set; }
        public String Name { get; set; }
    }
}