
namespace Sita.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/TblConfigSyncData"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.TblConfigSyncDataRow))]
    public class TblConfigSyncDataController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/TblConfigSyncData/TblConfigSyncDataIndex.cshtml");
        }
    }
}