
namespace ECNET.Office.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.TblUnitRow))]
    public class TblUnitController : Controller
    {
        [Route("Office/TblUnit")]
        public ActionResult Index()
        {
            return View("~/Modules/Office/TblUnit/TblUnitIndex.cshtml");
        }
    }
}