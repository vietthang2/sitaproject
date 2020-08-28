
namespace ECNET.Office.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.TblApprovalCenterRow))]
    public class TblApprovalCenterController : Controller
    {
        [Route("Office/TblApprovalCenter")]
        public ActionResult Index()
        {
            return View("~/Modules/Office/TblApprovalCenter/TblApprovalCenterIndex.cshtml");
        }
    }
}