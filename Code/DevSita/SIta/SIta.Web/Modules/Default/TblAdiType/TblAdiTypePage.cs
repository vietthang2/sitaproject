
namespace Sita.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/TblAdiType"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.TblAdiTypeRow))]
    public class TblAdiTypeController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/TblAdiType/TblAdiTypeIndex.cshtml");
        }
    }
}