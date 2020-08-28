
namespace ECNET.Office.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Office.AssetTemp")]
    [BasedOnRow(typeof(Entities.AssetTempRow), CheckNames = true)]
    public class AssetTempColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        public Int32 PId { get; set; }
        [EditLink]
        public String Name { get; set; }
        public String Code { get; set; }
        public Int32 Type { get; set; }
        public Boolean HasContract { get; set; }
        public Boolean HasProcessed { get; set; }
        public String CreatedBy { get; set; }
        public DateTime CreatedDate { get; set; }
        public String UpdatedBy { get; set; }
        public DateTime UpdatedDate { get; set; }
    }
}