
namespace Sita.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/TblFlight"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.TblFlightRow))]
    public class TblFlightController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/TblFlight/TblFlightIndex.cshtml");
        }
    }
}