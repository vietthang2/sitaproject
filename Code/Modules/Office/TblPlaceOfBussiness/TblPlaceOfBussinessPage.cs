
namespace ECNET.Office.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.TblPlaceOfBussinessRow))]
    public class TblPlaceOfBussinessController : Controller
    {
        [Route("Office/TblPlaceOfBussiness")]
        public ActionResult Index()
        {
            return View("~/Modules/Office/TblPlaceOfBussiness/TblPlaceOfBussinessIndex.cshtml");
        }
    }
}