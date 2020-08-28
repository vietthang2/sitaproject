using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace ECNET.Office
{
    public partial class ScheduleDetailEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "ECNET.Office.ScheduleDetailEditor";

        public ScheduleDetailEditorAttribute()
            : base(Key)
        {
        }
    }
}
