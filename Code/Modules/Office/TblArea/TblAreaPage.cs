
namespace ECNET.Office.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.TblAreaRow))]
    public class TblAreaController : Controller
    {
        [Route("Office/TblArea")]
        public ActionResult Index()
        {
            return View("~/Modules/Office/TblArea/TblAreaIndex.cshtml");
        }
    }
}