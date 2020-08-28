
namespace ECNET.Office.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.TblItemsRow))]
    public class TblItemsController : Controller
    {
        [Route("Office/TblItems")]
        public ActionResult Index()
        {
            return View("~/Modules/Office/TblItems/TblItemsIndex.cshtml");
        }
    }
}