
namespace ECNET.Office.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.AssetTempRow))]
    public class AssetTempController : Controller
    {
        [Route("Office/AssetTemp")]
        public ActionResult Index()
        {
            return View("~/Modules/Office/AssetTemp/AssetTempIndex.cshtml");
        }
    }
}