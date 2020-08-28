
namespace ECNET.Office.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using ECNET.Web.Modules.Office.Common;

    [ColumnsScript("Office.TblContractType")]
    [BasedOnRow(typeof(Entities.TblContractTypeRow), CheckNames = true)]
    public class TblContractTypeColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        [EditLink]
        public TypeOfPlace? Type { get; set; }
        public String TypeName { get; set; }
        public String Code { get; set; }
        public String Description { get; set; }
        public String PersonSign { get; set; }
        public String PersonPosition { get; set; }
        public String PersonAuthorityNo { get; set; }
        public String Remark1 { get; set; }
        public String Remark2 { get; set; }
        public String Remark3 { get; set; }
        public String Remark4 { get; set; }
        public String Remark5 { get; set; }
    }
}