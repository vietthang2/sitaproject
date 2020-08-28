
namespace ECNET.Office.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Office.TblStatus")]
    [BasedOnRow(typeof(Entities.TblStatusRow), CheckNames = true)]
    public class TblStatusForm
    {
        [HalfWidth]
        public String Name { get; set; }
        [HalfWidth]
        public Boolean IsReadOnly { get; set; }
        [HalfWidth]
        public Boolean IsNew { get; set; }
        [HalfWidth]
        public Int32 TypeId { get; set; }
        [HalfWidth]
        public Int32 NextStatus { get; set; }
        public List<Int32> AllowList { get; set; }
        public List<Int32> AllowListLevel2 { get; set; }

    }
}