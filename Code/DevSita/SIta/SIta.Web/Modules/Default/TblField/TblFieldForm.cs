
namespace Sita.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.TblField")]
    [BasedOnRow(typeof(Entities.TblFieldRow), CheckNames = true)]
    public class TblFieldForm
    {
        public String Name { get; set; }
        public String Instance { get; set; }
        public String Value { get; set; }
        public String FlightRef { get; set; }
    }
}