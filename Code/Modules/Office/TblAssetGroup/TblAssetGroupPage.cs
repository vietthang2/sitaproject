
namespace ECNET.Office.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.TblAssetGroupRow))]
    public class TblAssetGroupController : Controller
    {
        [Route("Office/TblAssetGroup")]
        public ActionResult Index()
        {
            return View("~/Modules/Office/TblAssetGroup/TblAssetGroupIndex.cshtml");
        }
    }
}