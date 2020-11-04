
using Serenity.Data;
using Sita.Modules.Default.SearchBagtag;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using GenFu;

namespace Sita.Default.Pages
{

    [RoutePrefix("Default/Search"), Route("{action=index}")]
    public class SearchController : Controller
    {
        // GET: Search
        public ActionResult Index()
        {
            return View();
        }
        [HttpPost]
        [Route("SearchGrid")]
        public ActionResult SearchGrid(RequestSearch req)
        {
            var proName2 = "PR_SEARCH_FLIGHT_AND_BAGTAG";
            var connect = SqlConnections.NewByKey("Default");

            var records = connect.Query<FlightBagModel>(proName2,
                 param: new { Flight = req.Flight, Bagtag = req.Bagtag },
                 commandType: System.Data.CommandType.StoredProcedure).ToList();

            //var modelTesst = new List<FlightBagModel>();
            //modelTesst= A.ListOf<FlightBagModel>();


            if (HttpContext.Request.Headers["X-Requested-With"] == "XMLHttpRequest")
                return PartialView("_SearchGrid", records);// records);
            //return View(records);
            return View(records);

        }
    }
}