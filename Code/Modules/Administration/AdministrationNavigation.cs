using Serenity.Navigation;
using Administration = ECNET.Administration.Pages;

[assembly: NavigationMenu(9000, "Administration", icon: "fa-desktop")]
//[assembly: NavigationLink(9000, "Administration/Languages", typeof(Administration.LanguageController), icon: "fa-comments")]
[assembly: NavigationLink(9000, "Administration/Translations", typeof(Administration.TranslationController), icon: "fa-comment-o")]
[assembly: NavigationLink(9000, "Administration/Sergen", typeof(Administration.SergenController), icon: "fa-magic")]
[assembly: NavigationLink(9000, "Administration/Roles", typeof(Administration.RoleController), icon: "fa-lock")]
[assembly: NavigationLink(9000, "Administration/User Management", typeof(Administration.UserController), icon: "fa-users")]
[assembly: NavigationLink(9000, "Administration/Background Jobs", url: "~/jobs", permission: ECNET.Administration.PermissionKeys.Security, icon: "fa-refresh")]