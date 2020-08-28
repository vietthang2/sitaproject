
namespace ECNET.Office.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.TblContractItemsRow))]
    public class TblContractItemsController : Controller
    {
        [Route("Office/TblContractItems")]
        public ActionResult Index()
        {
            return View("~/Modules/Office/TblContractItems/TblContractItemsIndex.cshtml");
        }
    }
}