
namespace ECNET.Office.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.TblStatusDetailLevel2Row))]
    public class TblStatusDetailLevel2Controller : Controller
    {
        [Route("Office/TblStatusDetailLevel2")]
        public ActionResult Index()
        {
            return View("~/Modules/Office/TblStatusDetailLevel2/TblStatusDetailLevel2Index.cshtml");
        }
    }
}