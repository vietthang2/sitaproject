
namespace ECNET.Office.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.TblWardsRow))]
    public class TblWardsController : Controller
    {
        [Route("Office/TblWards")]
        public ActionResult Index()
        {
            return View("~/Modules/Office/TblWards/TblWardsIndex.cshtml");
        }
    }
}