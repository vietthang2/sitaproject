using Serenity.ComponentModel;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Threading.Tasks;

namespace ECNET.Web.Modules.Office.TblPlaceOfBussiness
{
    [ColumnsScript("Office.TblAssignAssetToPlace")]
    [BasedOnRow(typeof(ECNET.Office.Entities.TblAssignAssetToPlaceRow), CheckNames = true)]
    public class AssetToPlaceColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        public String PlaceCode { get; set; }
        public String AssetName { get; set; }
        public DateTime FromDate { get; set; }
        public DateTime ToDate { get; set; }
        
    }
}
