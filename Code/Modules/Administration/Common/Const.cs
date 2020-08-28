using Serenity.ComponentModel;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Threading.Tasks;

namespace ECNET.Web.Modules.Administration.Common
{
    [EnumKey("Ecnet.LevelApproval")]
    public enum LevelApproval
    {
        [Description("Cấp 1")]
        LV1 = 1,
        [Description("Cấp 2")]
        LV2 = 2,
        [Description("Cấp 3")]
        LV3 = 3
    }
}
