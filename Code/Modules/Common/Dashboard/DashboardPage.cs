
namespace ECNET.Common.Pages
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Web;
    using System;
    using Microsoft.AspNetCore.Mvc;
    using ECNET.Office.Entities;
    using System.Data;
    using ECNET.Web.Modules.Office.Common;
    using System.Linq;
    using System.Collections.Generic;
    using Serenity.Caching;
    
using Microsoft.Extensions.Caching.Memory;

    [Route("Dashboard/[action]")]
    public class DashboardController : Controller
    {
        IMemoryCache memoryCache;
        
        public DashboardController(IMemoryCache memoryCache)
        {
            this.memoryCache = memoryCache;
            
        }
        [PageAuthorize, HttpGet, Route("~/")]
        public ActionResult Index()
        {
            //GetData(connection);
            //var resp = new DashboardPageModel();
            var resp = GetData();
            resp.ListDashBoard2 = GetDataDashboard2();
            return View(MVC.Views.Common.Dashboard.DashboardIndex, resp);
        }
        public DashboardPageModel GetData()
        {
            var cacheKey = "Dashboard1";
            DashboardPageModel data = new DashboardPageModel();
            if (memoryCache.TryGetValue(cacheKey, out data))
            {
                return data;
            }
            else
            {
                data = DistributedCache.Get<DashboardPageModel>(cacheKey);
                if(data != null)
                {
                    return data;
                }
                else
                {
                    try
                    {
                        var proName = "PR_GET_DASHBORD";

                        var connect = SqlConnections.NewByKey("Default");
                        data = connect.Query<DashboardPageModel>(proName,
                             param: null,
                             commandType: System.Data.CommandType.StoredProcedure).FirstOrDefault();
                        memoryCache.Set<DashboardPageModel>(cacheKey, data);
                        DistributedCache.Set<DashboardPageModel>(cacheKey, data, TimeSpan.FromMinutes(5));
                        return data;

                    }
                    catch (Exception a)
                    {
                        Log.Error(a.Message);
                        return new DashboardPageModel();
                    }
                }
                
            }
            
        }
        
        public  List<Dashboard2> GetDataDashboard2()
        {
            var cacheKey = "Dashboard2";
            var data = new List<Dashboard2>();
            if (memoryCache.TryGetValue(cacheKey, out data))
            {
                return data;
            }
            try
            {
                
                var proName2 = "PR_GET_DASHBORD_2";
                var connect = SqlConnections.NewByKey("Default");
               
                data = connect.Query<Dashboard2>(proName2,
                     param: null,
                     commandType: System.Data.CommandType.StoredProcedure).ToList();
                memoryCache.Set<List<Dashboard2>>(cacheKey, data, TimeSpan.FromMinutes(5));

                return data;

            }
            catch (Exception a)
            {
                Log.Error(a.Message);
                return new List<Dashboard2>();
            }
        }
        public List<Dashboard2> GetDataDashboard5()
        {
            var cacheKey = "Dashboard5";
            var data = new List<Dashboard2>();
            if (memoryCache.TryGetValue(cacheKey, out data))
            {
                return data;
            }
            try
            {

                var proName5 = "PR_GET_DASHBORD_5";
                var connect = SqlConnections.NewByKey("Default");

                 data = connect.Query<Dashboard2>(proName5,
                     param: null,
                     commandType: System.Data.CommandType.StoredProcedure).ToList();
                memoryCache.Set<List<Dashboard2>>(cacheKey, data, TimeSpan.FromMinutes(5));

                return data;

            }
            catch (Exception a)
            {
                Log.Error(a.Message);
                return new List<Dashboard2>();
            }
        }
        public List<Dashboard4> GetDataDashboard4()
        {
            var cacheKey = "Dashboard4";
            var data = new List<Dashboard4>();
            if (memoryCache.TryGetValue(cacheKey, out data))
            {
                return data;
            }
            try
            {

                var proName4 = "PR_GET_DASHBORD_4";
                var connect = SqlConnections.NewByKey("Default");

                 data = connect.Query<Dashboard4>(proName4,
                     param: null,
                     commandType: System.Data.CommandType.StoredProcedure).ToList();
                memoryCache.Set<List<Dashboard4>>(cacheKey, data);

                return data;

            }
            catch (Exception a)
            {
                Log.Error(a.Message);
                return new List<Dashboard4>();
            }
        }
        [PageAuthorize, HttpGet]
        public ActionResult GetDataDashboardDonutChart()
        {
            var resp= GetDataDashboard5();
            List<DonutChart> donutCharts = new List<DonutChart>();
            foreach (var item in resp)
            {
                donutCharts.Add(new DonutChart { label = item.BrachName, value = item.Count });
            }
            return Json(donutCharts);
        }
        [PageAuthorize, HttpGet]
        public ActionResult CountByBranch()
        {
            var response = new CountByStatusResponse();
            var cacheKey = "CountByBranch";
            var data = new CountByStatusResponse();
            if (memoryCache.TryGetValue(cacheKey, out data))
            {
                return Json(data);
            }
            try
            {
                var fld = TblContractRow.Fields;
                var year = DateTime.Today.Year;
                var startOfMonth = new DateTime(year-1, DateTime.Today.Month , 1);
                var startingFrom = startOfMonth.ToString("yyyyMM");
                var connect = SqlConnections.NewByKey("Default");
                
                var statusList = connect.List<TblBranchRow>(q => q.SelectTableFields().OrderBy(TblBranchRow.Fields.Code));
                
                response.StatusKeys = statusList.Select(x => "s" + x.Id).ToList();
                response.StatusLabels = statusList.Select(x => x.Name).ToList();

                var monthExpr = "DATEPART(MONTH, " + fld.FromDate.Expression + ")";

                var proName3 = "PR_GET_DASHBORD_3";


                var byMonth = connect.Query<Dashboard3>(proName3,
                     param: null,
                     commandType: System.Data.CommandType.StoredProcedure).ToDictionary(x => new Tuple<int, int>((int)x.Month, x.BrachId), x => (int)x.Count);





                response.Values = new List<Dictionary<string, object>>();
                int month = int.Parse(startingFrom);
                int mc;
                for (var i = 0; i < 12; i++)
                {
                    var d = new Dictionary<string, object>();
                    d["Month"] = startOfMonth.AddMonths(i).ToString("yyyy MM");

                    foreach (var p in statusList)
                        d["s" + p.Id] = byMonth.TryGetValue(
                        new Tuple<int, int>(int.Parse(startOfMonth.AddMonths(i).ToString("yyyyMM")), p.Id.Value), out mc) ? mc : 0;
                    //new Tuple<int, int>(month, p.Id.Value), out mc) ? mc : 0;

                    response.Values.Add(d);

                 
                }
                memoryCache.Set<CountByStatusResponse>(cacheKey, data, TimeSpan.FromMinutes(5));
                
                return Json(response);
            }
            catch (Exception e)
            {

                return null;
            }
        }
        [PageAuthorize, HttpGet]
        public ActionResult SumScheduleByBranch()
        {
            var response = new CountByStatusResponse();
            var cacheKey = "SumScheduleByBranch";
            var data = new CountByStatusResponse();
            if (memoryCache.TryGetValue(cacheKey, out data))
            {
                return Json(data);
            }
            try
            {
                var fld = TblContractRow.Fields;
                var year = DateTime.Today.Year;
                var startOfMonth = new DateTime(year, DateTime.Today.Month-3, 1);
                var startingFrom = startOfMonth.ToString("yyyyMM");
                var connect = SqlConnections.NewByKey("Default");
                
                var statusList = connect.List<TblBranchRow>(q => q.SelectTableFields().OrderBy(TblBranchRow.Fields.Code));

                response.StatusKeys = statusList.Select(x => "s" + x.Id).ToList();
                response.StatusLabels = statusList.Select(x => x.Name).ToList();

                var monthExpr = "DATEPART(MONTH, " + fld.FromDate.Expression + ")";

                var proName4 = "PR_GET_DASHBORD_4";


                var byMonth = connect.Query<Dashboard4>(proName4,
                     param: null,
                     commandType: System.Data.CommandType.StoredProcedure).ToDictionary(x => new Tuple<int, int>((int)x.MonthYear, x.BranchId), x => (decimal)x.TotalAmount);





                response.Values = new List<Dictionary<string, object>>();
                var EndMonth = int.Parse(startOfMonth.AddMonths(12).ToString("yyyyMM"));
                decimal mc;
                int month = int.Parse(startingFrom);
                for (var i = 0; i < 12; i++)
                {
                    var d = new Dictionary<string, object>();
                    d["Month"] = startOfMonth.AddMonths(i).ToString("yyyy MM");

                    foreach (var p in statusList)
                        d["s" + p.Id] = byMonth.TryGetValue(
                        new Tuple<int, int>(int.Parse(startOfMonth.AddMonths(i).ToString("yyyyMM")), p.Id.Value), out mc) ? mc : 0;
                    //new Tuple<int, int>(month, p.Id.Value), out mc) ? mc : 0;

                   response.Values.Add(d);

                    
                }
                memoryCache.Set<CountByStatusResponse>(cacheKey, response, TimeSpan.FromMinutes(5));
                return Json(response);
            }
            catch (Exception e)
            {

                return Json(response); 
            }
        }
    }
}
