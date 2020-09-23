
namespace Sita.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.TblAdiType")]
    [BasedOnRow(typeof(Entities.TblAdiTypeRow), CheckNames = true)]
    public class TblAdiTypeForm
    {
        public String Code { get; set; }
        public String Name { get; set; }
    }
}