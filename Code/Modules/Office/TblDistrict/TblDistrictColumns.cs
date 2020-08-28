
namespace ECNET.Office.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Office.TblDistrict")]
    [BasedOnRow(typeof(Entities.TblDistrictRow), CheckNames = true)]
    public class TblDistrictColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        public String CityName { get; set; }
        [EditLink]
        public String Name { get; set; }
        public String EnName { get; set; }
    }
}