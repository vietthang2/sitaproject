
namespace ECNET.Office.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.TblProjectItemRow))]
    public class TblProjectItemController : Controller
    {
        [Route("Office/TblProjectItem")]
        public ActionResult Index()
        {
            return View("~/Modules/Office/TblProjectItem/TblProjectItemIndex.cshtml");
        }
    }
}