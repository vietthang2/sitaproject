using Serenity.Data;
using Sita.Modules.Default.SearchBagtag;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Sita.Default.Pages
{

    [RoutePrefix("Default/SearchBags"), Route("{action=index}")]
    public class SearchController : Controller
    {
        // GET: Search
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult Index(string flight, string bagtag)
        {
            var proName2 = "PR_SEARCH_FLIGHT_BAGTAG";
            var connect = SqlConnections.NewByKey("Default");

            var records = connect.Query<FlightBagModel>(proName2,
                 param: new {Flight= flight,Bagtag= bagtag },
                 commandType: System.Data.CommandType.StoredProcedure).ToList();


            
            if (HttpContext.Request.Headers["X-Requested-With"] == "XMLHttpRequest")
                return PartialView("_SearchGrid", records);
            return View(records);

        }
    }
}