using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace Sita.Default
{
    public partial class FieldDetailEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "Sita.Default.FieldDetailEditor";

        public FieldDetailEditorAttribute()
            : base(Key)
        {
        }
    }
}

