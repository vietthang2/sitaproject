
namespace ECNET.Office.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.TblAssetRow))]
    public class TblAssetController : Controller
    {
        [Route("Office/TblAsset")]
        public ActionResult Index()
        {
            return View("~/Modules/Office/TblAsset/TblAssetIndex.cshtml");
        }
    }
}