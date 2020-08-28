
namespace ECNET.Office.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Office.TblProject")]
    [BasedOnRow(typeof(Entities.TblProjectRow), CheckNames = true)]
    public class TblProjectForm
    {
        [Tab("Thông tin dự án")]
        [Category("Thông tin dự án")]
        [ ReadOnly(true), HalfWidth]
        public String Code { get; set; }
        [HalfWidth]
        public Int32 StatusId { get; set; }
        [HalfWidth]
        public String Name { get; set; }
        [HalfWidth]
        public DateTime InnitiatedDate { get; set; }
        [HalfWidth]
        public DateTime FromDate { get; set; }
        [HalfWidth]
        public DateTime ToDate { get; set; }
        [HalfWidth]
        [LocalTransactionEditor]
        public Int32 TransactionLocationId { get; set; }
        [HalfWidth]
        public String PersonManagement { get; set; }
        [HalfWidth]
        public String PersonManagementPhone { get; set; }
        [Category("Địa điểm thi công")]
        [PlaceProjectEditor]
        public Int32 PlaceId { get; set; }
        [ReadOnly(true)]
        public String PlaceAddress { get; set; }
        
        [OneThirdWidth,ReadOnly(true)]
        public Int32 PlaceCityId { get; set; }
        [OneThirdWidth, ReadOnly(true)]
        public Int32 PlaceDistrictId { get; set; }
        [OneThirdWidth, ReadOnly(true)]
        public Int32 PlaceWardsId { get; set; }

        [Category("Thông tin khác")]

        public String Note { get; set; }
        [Tab("Hạng mục dự án")]
        [ProjectItemsEditor]
        public List<Entities.TblProjectItemRow> ProjectItems { get; set; }

        [Hidden]
        public Boolean? IsNeedApprovalForNew { get; set; }
        [Hidden]
        public Boolean? IsNeedApprovalForEdit { get; set; }
        [Hidden]
        public Int32? LevelApprovalForNew { get; set; }
        [Hidden]
        public Int32? LevelApprovalForEdit { get; set; }
        [Hidden]
        public Int32? RecordStatus { get; set; }

    }
}