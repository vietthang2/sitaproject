using Serenity.Navigation;

using MyPages = Sita.Default.Pages;

[assembly: NavigationMenu(9000, "Default",icon: "fa fa-plane")]
[assembly: NavigationLink(int.MaxValue, "Default/Bags", typeof(MyPages.TblBagsController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Default/Field", typeof(MyPages.TblFieldController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Default/Flight", typeof(MyPages.TblFlightController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Default/Bags History", typeof(MyPages.TblBagsHistoryController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Default/Search", typeof(MyPages.SearchController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Default/Master Data/Adi Type", typeof(MyPages.TblAdiTypeController), icon: null)]