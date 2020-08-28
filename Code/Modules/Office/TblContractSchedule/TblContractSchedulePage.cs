
namespace ECNET.Office.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.TblContractScheduleRow))]
    public class TblContractScheduleController : Controller
    {
        [Route("Office/TblContractSchedule")]
        public ActionResult Index()
        {
            return View("~/Modules/Office/TblContractSchedule/TblContractScheduleIndex.cshtml");
        }
    }
}