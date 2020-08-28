using Serenity.ComponentModel;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Threading.Tasks;

namespace ECNET.Web.Modules.Office.Common
{
    [EnumKey("Ecnet.Status")]
    public enum Status
    {
        [Description("Tạo mới")]
        New = 1,
        [Description("Đồng ý")]
        Approve = 2,
        [Description("Từ chối")]
        Reject = 3,
        [Description("Hủy")]
        Canncel = 4,
        [Description("Hoàn tất")]
        Completed = 5
    }
    [EnumKey("Ecnet.TypeOfPlace")]
    public enum TypeOfPlace
    {
        [Description("Thuê")]
        Rent = 1,
        [Description("Mua")]
        Buy = 2,
       
    }
    [EnumKey("Ecnet.TotalCustomer")]
    public enum TotalCustomer
    {
        [Description("<1000")]
        Value1 = 1,
        [Description("1000-1500")]
        Value2 = 2,
        [Description("1500-2000")]
        Value3 = 3,
        [Description("2000-2500")]
        Value4 = 4,
        [Description("2500-3000")]
        Value5 = 5,
        [Description("3000-3500")]
        Value6 = 6,
        [Description("3500-4000")]
        Value7 = 7,
        [Description("4000-4500")]
        Value8 = 8,
        [Description("4500-5000")]
        Value9 = 9,
        [Description(">5000")]
        Value10 = 10,
    }
    [EnumKey("Ecnet.TypeOfItem")]
    public enum TypeOfItem
    {
        [Description("Mặt bằng")]
        Place = 1,
        [Description("Hợp đông")]
        Contract = 2,
       
    }
    [EnumKey("Ecnet.ItemGroup")]
    public enum ItemGroup
    {
        [Description("Thuê")]
        Rent = 1,
        [Description("Mua")]
        Buy = 2,

    }
    [EnumKey("Ecnet.DataType")]
    public enum DataType
    {
        [Description("Sô")]
        Int = 1,
        [Description("Chuổi")]
        String = 2,
        [Description("Ngày tháng")]
        Date = 3,
        

    }
    [EnumKey("Ecnet.YesNo")]
    public enum YesNo
    {
        [Description("Có")]
        Yes = 1,
        [Description("Không")]
        No = 2,
        

    }
    [EnumKey("Ecnet.TypeApprove")]
    public enum TypeApprove
    {
        [Description("Mặt bằng")]
        Place = 1,
        [Description("Hợp đồng")]
        Contract = 2,
        [Description("Dự án")]
        Project = 3,
        //[Description("Hạng mục dự án")]
        //ProjectItem = 4,

    }
    [EnumKey("Ecnet.StatusType")]
    public enum StatusType
    {
        [Description("Mặt bằng")]
        Place = 1,
        [Description("Hợp đồng")]
        Contract = 2,
        [Description("Dự án")]
        Project = 3,
        [Description("Hạng mục dự án")]
        ProjectItem = 4,

    }
    [EnumKey("Ecnet.IdentifyType")]
    public enum IdentifyType
    {
        [Description("CMND")]
        CMND = 1,
        [Description("Passport")]
        PASSPORT = 2,
        [Description("CCCD")]
        CCCD = 3,

    }
    [EnumKey("Ecnet.PaymentMethod")]
    public enum PaymentMethod
    {
        [Description("Tiền mặt")]
        CASH = 1,
        [Description("Chuyển khoản")]
        TRANF = 2,
        [Description("Edong")]
        WALL = 3,
    }
    [EnumKey("Ecnet.StatusRecord")]
    public enum StatusRecord
    {
        [Description("Chờ duyệt")]
        NEW = 0,
        [Description("Đã phê duyệt")]
        APPROVE = 1,
        [Description("Từ chối")]
        REJECT = 2,
        [Description("Gửi phê duyệt lại")]
        RETRY = 3,
    }
}
