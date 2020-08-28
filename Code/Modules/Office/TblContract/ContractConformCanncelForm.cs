
namespace ECNET.Office.Forms
{
    using Serenity.ComponentModel;
    using Serenity.Web;
    using System;

    [FormScript("Office.ContractConformCanncel")]
    public class ContractConformCanncelForm
    {
        [Required]
        [TextAreaEditor(Rows =2)]
        public String Reason { get; set; }
        [Hidden]
        public String Id { get; set; }
    }
}
