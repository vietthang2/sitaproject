
namespace ECNET.Office.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Office.SysParameters")]
    [BasedOnRow(typeof(Entities.SysParametersRow), CheckNames = true)]
    public class SysParametersColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        [EditLink]
        public String Code { get; set; }
        public String Name { get; set; }
        public String Value { get; set; }
        public String Unit { get; set; }
        public DateTime CreatedDate { get; set; }
        public String CreatedBy { get; set; }
        public DateTime UpdatedDate { get; set; }
        public String UpdatedBy { get; set; }
    }
}