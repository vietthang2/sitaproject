
namespace ECNET.Office.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Office.TblCity")]
    [BasedOnRow(typeof(Entities.TblCityRow), CheckNames = true)]
    public class TblCityColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        [EditLink]
        public String Name { get; set; }
        
        public String Code { get; set; }
        public String EnName { get; set; }
        public String ECCode { get; set; }
    }
}