
namespace ECNET.Office.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Office.TblPlaceDetails")]
    [BasedOnRow(typeof(Entities.TblPlaceDetailsRow), CheckNames = true)]
    public class TblPlaceDetailsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        public String PlaceCode { get; set; }
        public String ItemItemName { get; set; }
        [EditLink]
        public String Value { get; set; }
        public String Unit { get; set; }
        //public String CreatedBy { get; set; }
        //public DateTime CreatedDate { get; set; }
        //public DateTime UpdatedDate { get; set; }
        //public String UpdatedBy { get; set; }
        //public Int32 Status { get; set; }
        public String Note { get; set; }
    }
}