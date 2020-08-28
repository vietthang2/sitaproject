using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace ECNET.Office
{
    public partial class PlaceContractEditorAttribute : LookupEditorBaseAttribute
    {
        public const string Key = "ECNET.Office.PlaceContractEditor";

        public PlaceContractEditorAttribute()
            : base(Key)
        {
        }
    }
}
