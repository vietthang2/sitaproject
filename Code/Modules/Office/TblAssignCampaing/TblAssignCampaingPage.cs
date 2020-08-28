
namespace ECNET.Office.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.TblAssignCampaingRow))]
    public class TblAssignCampaingController : Controller
    {
        [Route("Office/TblAssignCampaing")]
        public ActionResult Index()
        {
            return View("~/Modules/Office/TblAssignCampaing/TblAssignCampaingIndex.cshtml");
        }
    }
}