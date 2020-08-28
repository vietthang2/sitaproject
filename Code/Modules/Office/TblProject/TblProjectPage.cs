
namespace ECNET.Office.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.TblProjectRow))]
    public class TblProjectController : Controller
    {
        [Route("Office/TblProject")]
        public ActionResult Index()
        {
            return View("~/Modules/Office/TblProject/TblProjectIndex.cshtml");
        }
        [Route("Office/TblProjectEdit")]
        public ActionResult Edit()
        {
            return View("~/Modules/Office/TblProject/TblProjectIndexEdit.cshtml");
        }
    }
}