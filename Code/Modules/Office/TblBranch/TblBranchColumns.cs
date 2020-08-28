
namespace ECNET.Office.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Office.TblBranch")]
    [BasedOnRow(typeof(Entities.TblBranchRow), CheckNames = true)]
    public class TblBranchColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        [EditLink]
        
        public String Code { get; set; }
        public String Name { get; set; }
    }
}