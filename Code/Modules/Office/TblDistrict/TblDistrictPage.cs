
namespace ECNET.Office.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.TblDistrictRow))]
    public class TblDistrictController : Controller
    {
        [Route("Office/TblDistrict")]
        public ActionResult Index()
        {
            return View("~/Modules/Office/TblDistrict/TblDistrictIndex.cshtml");
        }
    }
}