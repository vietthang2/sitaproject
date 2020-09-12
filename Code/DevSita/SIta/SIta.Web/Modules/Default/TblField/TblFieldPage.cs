
namespace Sita.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/TblField"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.TblFieldRow))]
    public class TblFieldController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/TblField/TblFieldIndex.cshtml");
        }
    }
}