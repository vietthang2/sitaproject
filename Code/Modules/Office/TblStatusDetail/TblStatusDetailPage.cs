
namespace ECNET.Office.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.TblStatusDetailRow))]
    public class TblStatusDetailController : Controller
    {
        [Route("Office/TblStatusDetail")]
        public ActionResult Index()
        {
            return View("~/Modules/Office/TblStatusDetail/TblStatusDetailIndex.cshtml");
        }
    }
}