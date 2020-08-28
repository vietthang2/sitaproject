using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace ECNET.Office
{
    public partial class PlaceDetailsEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "ECNET.Office.PlaceDetailsEditor";

        public PlaceDetailsEditorAttribute()
            : base(Key)
        {
        }
    }
}
