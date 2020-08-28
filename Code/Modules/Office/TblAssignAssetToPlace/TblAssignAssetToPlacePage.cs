
namespace ECNET.Office.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.TblAssignAssetToPlaceRow))]
    public class TblAssignAssetToPlaceController : Controller
    {
        [Route("Office/TblAssignAssetToPlace")]
        public ActionResult Index()
        {
            return View("~/Modules/Office/TblAssignAssetToPlace/TblAssignAssetToPlaceIndex.cshtml");
        }
    }
}