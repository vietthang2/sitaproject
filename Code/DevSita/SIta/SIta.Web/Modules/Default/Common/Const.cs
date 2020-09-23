using Serenity.ComponentModel;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Web;

namespace Sita.Modules.Default.Common
{

    [EnumKey("Sita.Adi")]
    public enum EnumAdi
    {
        [Description("Arrival")]
        A =0,
        [Description("Departure")]
        D = 1
    }
}