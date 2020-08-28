
namespace ECNET.Office.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Office.TblAssignAssetToPlace")]
    [BasedOnRow(typeof(Entities.TblAssignAssetToPlaceRow), CheckNames = true)]
    public class TblAssignAssetToPlaceColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        public String PlaceCode { get; set; }
        public String AssetName { get; set; }
        public DateTime FromDate { get; set; }
        public DateTime ToDate { get; set; }
        //[EditLink]
        //public String CreatedBy { get; set; }
        //public DateTime CreatedDate { get; set; }
        //public DateTime UpdatedDate { get; set; }
        //public String UpdateBy { get; set; }
    }
}