
namespace ECNET.Office.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Office.TblStatusDetailLevel2")]
    [BasedOnRow(typeof(Entities.TblStatusDetailLevel2Row), CheckNames = true)]
    public class TblStatusDetailLevel2Form
    {
        public Int32 StatusId { get; set; }
        public Int32 StatusDetailId { get; set; }
    }
}