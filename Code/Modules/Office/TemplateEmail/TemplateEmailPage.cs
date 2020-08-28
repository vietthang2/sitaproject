
namespace ECNET.Office.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.TemplateEmailRow))]
    public class TemplateEmailController : Controller
    {
        [Route("Office/TemplateEmail")]
        public ActionResult Index()
        {
            return View("~/Modules/Office/TemplateEmail/TemplateEmailIndex.cshtml");
        }
    }
}