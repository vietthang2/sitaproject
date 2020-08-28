
namespace ECNET.Office.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.TblContractPaymentRow))]
    public class TblContractPaymentController : Controller
    {
        [Route("Office/TblContractPayment")]
        public ActionResult Index()
        {
            return View("~/Modules/Office/TblContractPayment/TblContractPaymentIndex.cshtml");
        }
    }
}