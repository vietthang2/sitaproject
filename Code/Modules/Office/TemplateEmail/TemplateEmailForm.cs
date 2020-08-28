
namespace ECNET.Office.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Office.TemplateEmail")]
    [BasedOnRow(typeof(Entities.TemplateEmailRow), CheckNames = true)]
    public class TemplateEmailForm
    {
        public String Name { get; set; }
        public String To { get; set; }
        public String Bcc { get; set; }
        public String Cc { get; set; }
    }
}