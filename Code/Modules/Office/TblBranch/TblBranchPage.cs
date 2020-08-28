
namespace ECNET.Office.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.TblBranchRow))]
    public class TblBranchController : Controller
    {
        [Route("Office/TblBranch")]
        public ActionResult Index()
        {
            return View("~/Modules/Office/TblBranch/TblBranchIndex.cshtml");
        }
    }
}