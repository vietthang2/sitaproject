
namespace ECNET.Office.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Office.TblArea")]
    [BasedOnRow(typeof(Entities.TblAreaRow), CheckNames = true)]
    public class TblAreaColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        [EditLink]
        public String Code { get; set; }
        public String BranchCode { get; set; }
        public String Name { get; set; }
    }
}