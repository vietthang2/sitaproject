
namespace ECNET.Office.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Office.TblStatusDetail")]
    [BasedOnRow(typeof(Entities.TblStatusDetailRow), CheckNames = true)]
    public class TblStatusDetailForm
    {
        public Int32 StatusId { get; set; }
        public Int32 StatusDetailId { get; set; }
    }
}