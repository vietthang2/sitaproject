
namespace ECNET.Office.Forms
{
    using Serenity.ComponentModel;
    using Serenity.Web;
    using System;

    [FormScript("Office.PlaceExcelImport")]
    public class PlaceExcelImportForm
    {
        [FileUploadEditor, Required]
        public String FileName { get; set; }
    }
}
