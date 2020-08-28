
namespace ECNET.Office.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.TblContractTypeRow))]
    public class TblContractTypeController : Controller
    {
        [Route("Office/TblContractType")]
        public ActionResult Index()
        {
            return View("~/Modules/Office/TblContractType/TblContractTypeIndex.cshtml");
        }
    }
}