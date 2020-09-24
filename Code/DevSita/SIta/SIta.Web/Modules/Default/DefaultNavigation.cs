﻿using Serenity.Navigation;

using MyPages = Sita.Default.Pages;


[assembly: NavigationLink(int.MaxValue, "Default/Bags", typeof(MyPages.TblBagsController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Default/Tbl Field", typeof(MyPages.TblFieldController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Default/Flight", typeof(MyPages.TblFlightController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Default/TBags History", typeof(MyPages.TblBagsHistoryController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Default/Search", typeof(MyPages.SearchController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Default/TAdi Type", typeof(MyPages.TblAdiTypeController), icon: null)]