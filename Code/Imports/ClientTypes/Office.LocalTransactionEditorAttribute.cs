using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace ECNET.Office
{
    public partial class LocalTransactionEditorAttribute : LookupEditorBaseAttribute
    {
        public const string Key = "ECNET.Office.LocalTransactionEditor";

        public LocalTransactionEditorAttribute()
            : base(Key)
        {
        }
    }
}
