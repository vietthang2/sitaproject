
namespace ECNET.Office.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.TblStatusRow))]
    public class TblStatusController : Controller
    {
        [Route("Office/TblStatus")]
        public ActionResult Index()
        {
            return View("~/Modules/Office/TblStatus/TblStatusIndex.cshtml");
        }
    }
}