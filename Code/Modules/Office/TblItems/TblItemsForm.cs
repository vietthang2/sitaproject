
namespace ECNET.Office.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Office.TblItems")]
    [BasedOnRow(typeof(Entities.TblItemsRow), CheckNames = true)]
    public class TblItemsForm
    {
        [HalfWidth]
        public String Code { get; set; }
        [HalfWidth]
        public String ItemName { get; set; }
        [HalfWidth]
        public String Unit { get; set; }
        [HalfWidth]
        public String DataType { get; set; }
        [HalfWidth]
        public String ItemType { get; set; }
        [HalfWidth]
        public String ItemGroup { get; set; }
        [TextAreaEditor(Rows=3)]
        public String Decriptions { get; set; }
    }
}