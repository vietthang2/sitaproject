
namespace ECNET.Office.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.EmailAccountsRow))]
    public class EmailAccountsController : Controller
    {
        [Route("Office/EmailAccounts")]
        public ActionResult Index()
        {
            return View("~/Modules/Office/EmailAccounts/EmailAccountsIndex.cshtml");
        }
    }
}