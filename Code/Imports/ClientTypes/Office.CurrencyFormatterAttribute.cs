using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace ECNET.Office
{
    public partial class CurrencyFormatterAttribute : CustomFormatterAttribute
    {
        public const string Key = "ECNET.Office.CurrencyFormatter";

        public CurrencyFormatterAttribute()
            : base(Key)
        {
        }

        public String CultureName
        {
            get { return GetOption<String>("cultureName"); }
            set { SetOption("cultureName", value); }
        }

        public String CurrencyName
        {
            get { return GetOption<String>("currencyName"); }
            set { SetOption("currencyName", value); }
        }
    }
}
