
namespace Sita.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/TblScheduleCutBag"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.TblScheduleCutBagRow))]
    public class TblScheduleCutBagController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/TblScheduleCutBag/TblScheduleCutBagIndex.cshtml");
        }
    }
}