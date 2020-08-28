
namespace ECNET.Office.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.TblCityRow))]
    public class TblCityController : Controller
    {
        [Route("Office/TblCity")]
        public ActionResult Index()
        {
            return View("~/Modules/Office/TblCity/TblCityIndex.cshtml");
        }
    }
}