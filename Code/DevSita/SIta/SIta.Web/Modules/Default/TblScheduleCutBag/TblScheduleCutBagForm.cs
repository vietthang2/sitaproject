
namespace Sita.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.TblScheduleCutBag")]
    [BasedOnRow(typeof(Entities.TblScheduleCutBagRow), CheckNames = true)]
    public class TblScheduleCutBagForm
    {
        public Int32 ScheduleCutDate { get; set; }
    }
}