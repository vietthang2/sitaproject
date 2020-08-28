
namespace ECNET.Office.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.TblPlaceDetailsRow))]
    public class TblPlaceDetailsController : Controller
    {
        [Route("Office/TblPlaceDetails")]
        public ActionResult Index()
        {
            return View("~/Modules/Office/TblPlaceDetails/TblPlaceDetailsIndex.cshtml");
        }
    }
}