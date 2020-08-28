
namespace ECNET.Office.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.QueuedEmailRow))]
    public class QueuedEmailController : Controller
    {
        [Route("Office/QueuedEmail")]
        public ActionResult Index()
        {
            return View("~/Modules/Office/QueuedEmail/QueuedEmailIndex.cshtml");
        }
    }
}