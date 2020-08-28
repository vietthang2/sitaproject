
using Serenity.Data;
using Serenity.Services;
using System.Collections.Generic;

namespace ECNET.Common
{
    [ConnectionKey("Default")]
    public class DashboardPageModel
    {
        public int TotalPlace { get; set; }
        public int TotalPlaceNew { get; set; }
        public int TotalPlaceApproval { get; set; }
        public int TotalPlaceHasContract { get; set; }
        public int TotalContractNew { get; set; }
        public int TotalContract { get; set; }
        public int TotalContractApproval { get; set; }
        public int TotalContractCompleted { get; set; }
        public List<Dashboard2> ListDashBoard2 { get; set; }

    }
    public class Dashboard2
    {
        public decimal TotalContract { get; set; }
        public int Count { get; set; }
        public string BrachName { get; set; }
    }
    public class Dashboard3
    {
        public int Count { get; set; }
        public int Month { get; set; }
        public string BrachName { get; set; }
        public int BrachId { get; set; }
    }
    public class Dashboard4
    {
        public decimal TotalAmount { get; set; }
        public int BranchId { get; set; }
        public string BrachName { get; set; }
        public int MonthYear { get; set; }
    }
    public class CountByStatusRequest : ServiceRequest
    {
    }

    public class CountByStatusResponse : ServiceResponse
    {
        public List<Dictionary<string, object>> Values { get; set; }
        public List<string> StatusKeys { get; set; }
        public List<string> StatusLabels { get; set; }
    }
    public class DonutChart
    {
        public string label { get; set; }
        public int value { get; set; }
    }
}