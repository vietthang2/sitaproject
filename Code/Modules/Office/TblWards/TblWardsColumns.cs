
namespace ECNET.Office.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Office.TblWards")]
    [BasedOnRow(typeof(Entities.TblWardsRow), CheckNames = true)]
    public class TblWardsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        public String DistrictName { get; set; }
        [EditLink]
        public String Name { get; set; }
        public String EnName { get; set; }
    }
}