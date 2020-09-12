
namespace Sita.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/TblBags"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.TblBagsRow))]
    public class TblBagsController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/TblBags/TblBagsIndex.cshtml");
        }
    }
}