
using Serenity.Extensibility;
using System.ComponentModel;

namespace Sita.Administration
{
    [NestedPermissionKeys]
    [DisplayName("Administration")]
    public class PermissionKeys
    {
        [Description("User, Role Management and Permissions")]
        public const string Security = "Administration:Security";

        [Description("Languages and Translations")]
        public const string Translation = "Administration:Translation";
        [DisplayName("Bags")]
        public class Bags
        {
            [ImplicitPermission(General), ImplicitPermission(View)]
            public const string Delete = "Sita:dbo.tblBags:Delete";
            [Description("Create/Update"), ImplicitPermission(General), ImplicitPermission(View)]
            public const string Modify = "Sita:dbo.tblBags:Modify";
            public const string View = "Sita:dbo.tblBags:View";

        }
        [DisplayName("Flight")]
        public class Flight
        {
            [ImplicitPermission(General), ImplicitPermission(View)]
            public const string Delete = "Sita:dbo.tblFlight:Delete";
            [Description("Create/Update"), ImplicitPermission(General), ImplicitPermission(View)]
            public const string Modify = "Sita:dbo.tblFlight:Modify";
            public const string View = "Sita:dbo.tblFlight:View";

        }
        [DisplayName("BagsHistory")]
        public class BagsHistory
        {
            [ImplicitPermission(General), ImplicitPermission(View)]
            public const string Delete = "Sita:dbo.tblBagsHistory:Delete";
            [Description("Create/Update"), ImplicitPermission(General), ImplicitPermission(View)]
            public const string Modify = "Sita:dbo.tblBagsHistory:Modify";
            public const string View = "Sita:dbo.tblBagsHistory:View";

        }
        [DisplayName("Field")]
        public class Field
        {
            [ImplicitPermission(General), ImplicitPermission(View)]
            public const string Delete = "Sita:dbo.tblField:Delete";
            [Description("Create/Update"), ImplicitPermission(General), ImplicitPermission(View)]
            public const string Modify = "Sita:dbo.tblField:Modify";
            public const string View = "Sita:dbo.tblField:View";

        }
        [Description("[General]")]
        public const string General = "Sita:General";
    }
}
