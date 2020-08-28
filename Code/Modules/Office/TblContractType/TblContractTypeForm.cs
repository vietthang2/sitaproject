
namespace ECNET.Office.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using ECNET.Web.Modules.Office.Common;

    [FormScript("Office.TblContractType")]
    [BasedOnRow(typeof(Entities.TblContractTypeRow), CheckNames = true)]
    public class TblContractTypeForm
    {
        public String TypeName { get; set; }
        public TypeOfPlace? Type { get; set; }
        public String Code { get; set; }
        [TextAreaEditor(Rows =2)]
        public String Description { get; set; }
        [OneThirdWidth]
        public String PersonSign { get; set; }
        [OneThirdWidth]
        public String PersonPosition { get; set; }
        [OneThirdWidth]
        public String PersonAuthorityNo { get; set; }
        [TextAreaEditor(Rows = 2)]
        public String Remark1 { get; set; }
        [TextAreaEditor(Rows = 2)]
        public String Remark2 { get; set; }
        [TextAreaEditor(Rows = 2)]
        public String Remark3 { get; set; }
        [TextAreaEditor(Rows = 2)]
        public String Remark4 { get; set; }
        [TextAreaEditor(Rows = 2)]
        public String Remark5 { get; set; }
    }
}