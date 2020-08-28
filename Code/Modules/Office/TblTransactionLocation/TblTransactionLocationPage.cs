
namespace ECNET.Office.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.TblTransactionLocationRow))]
    public class TblTransactionLocationController : Controller
    {
        [Route("Office/TblTransactionLocation")]
        public ActionResult Index()
        {
            return View("~/Modules/Office/TblTransactionLocation/TblTransactionLocationIndex.cshtml");
        }
    }
}