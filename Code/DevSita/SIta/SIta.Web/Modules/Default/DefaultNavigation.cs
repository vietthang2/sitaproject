using Serenity.Navigation;
using MyPages = Sita.Default.Pages;

[assembly: NavigationLink(int.MaxValue, "Default/Tbl Bags", typeof(MyPages.TblBagsController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Default/Tbl Field", typeof(MyPages.TblFieldController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Default/Tbl Flight", typeof(MyPages.TblFlightController), icon: null)]