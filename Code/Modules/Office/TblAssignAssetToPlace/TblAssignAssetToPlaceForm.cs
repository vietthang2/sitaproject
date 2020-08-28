
namespace ECNET.Office.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    //[FormScript("Office.TblAssignAssetToPlace")]
    [FormScript("ECNET.Office.ChangingLookupTextEditort")]
    [BasedOnRow(typeof(Entities.TblAssignAssetToPlaceRow), CheckNames = true)]
    public class TblAssignAssetToPlaceForm
    {
        public Int32 PlaceId { get; set; }
        [ChangingLookupTextEditor]
        public Int32 AssetId { get; set; }
        [HalfWidth]
        public DateTime FromDate { get; set; }
        [HalfWidth]
        public DateTime ToDate { get; set; }
        //public String CreatedBy { get; set; }
        //public DateTime CreatedDate { get; set; }
        //public DateTime UpdatedDate { get; set; }
        //public String UpdateBy { get; set; }
    }
}