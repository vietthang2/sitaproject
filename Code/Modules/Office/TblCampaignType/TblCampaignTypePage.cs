
namespace ECNET.Office.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.TblCampaignTypeRow))]
    public class TblCampaignTypeController : Controller
    {
        [Route("Office/TblCampaignType")]
        public ActionResult Index()
        {
            return View("~/Modules/Office/TblCampaignType/TblCampaignTypeIndex.cshtml");
        }
    }
}