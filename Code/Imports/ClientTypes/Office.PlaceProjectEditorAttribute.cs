using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace ECNET.Office
{
    public partial class PlaceProjectEditorAttribute : LookupEditorBaseAttribute
    {
        public const string Key = "ECNET.Office.PlaceProjectEditor";

        public PlaceProjectEditorAttribute()
            : base(Key)
        {
        }
    }
}
