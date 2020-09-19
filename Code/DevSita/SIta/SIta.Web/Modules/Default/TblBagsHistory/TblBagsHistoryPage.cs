
namespace SIta.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/TblBagsHistory"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.TblBagsHistoryRow))]
    public class TblBagsHistoryController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/TblBagsHistory/TblBagsHistoryIndex.cshtml");
        }
    }
}