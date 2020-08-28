
namespace ECNET.Office.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Office.TblPlaceDetails")]
    [BasedOnRow(typeof(Entities.TblPlaceDetailsRow), CheckNames = true)]
    public class TblPlaceDetailsForm
    {
        [Hidden]
        public Int32 PlaceId { get; set; }
        public Int32 ItemId { get; set; }
        
        public String Value { get; set; }
        [HalfWidth]
        public String Unit { get; set; }
        [Hidden]
        public Int32 PlaceType { get; set; }
        [HalfWidth]
        public String ItemDataType { get; set; }
        
        [TextAreaEditor(Rows=2)]
        public String Note { get; set; }
    }
}