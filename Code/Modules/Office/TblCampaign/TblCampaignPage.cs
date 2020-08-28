
namespace ECNET.Office.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.TblCampaignRow))]
    public class TblCampaignController : Controller
    {
        [Route("Office/TblCampaign")]
        public ActionResult Index()
        {
            return View("~/Modules/Office/TblCampaign/TblCampaignIndex.cshtml");
        }
    }
}