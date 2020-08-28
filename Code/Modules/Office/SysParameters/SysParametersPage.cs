
namespace ECNET.Office.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.SysParametersRow))]
    public class SysParametersController : Controller
    {
        [Route("Office/SysParameters")]
        public ActionResult Index()
        {
            return View("~/Modules/Office/SysParameters/SysParametersIndex.cshtml");
        }
    }
}