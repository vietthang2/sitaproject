
namespace ECNET.Office.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.TblContractRow))]
    public class TblContractController : Controller
    {
        [Route("Office/TblContract")]
        public ActionResult Index()
        {
            return View("~/Modules/Office/TblContract/TblContractIndex.cshtml");
        }
    }
}