
namespace ECNET.Office.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Office.TemplateEmail")]
    [BasedOnRow(typeof(Entities.TemplateEmailRow), CheckNames = true)]
    public class TemplateEmailColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        [EditLink]
        public String Name { get; set; }
        public String To { get; set; }
        public String Bcc { get; set; }
        public String Cc { get; set; }
    }
}