using Serenity.Navigation;
using MyPages = ECNET.Office.Pages;

[assembly: NavigationMenu(9000, "Ecnet", icon: "fa-street-view")]
[assembly: NavigationLink(int.MaxValue, "Ecnet/Mặt bằng", typeof(MyPages.TblPlaceOfBussinessController), icon: "fa-university")]
[assembly: NavigationLink(int.MaxValue, "Ecnet/Mặt bằng/Danh sách mặt bằng", typeof(MyPages.TblPlaceOfBussinessController), icon: "fa-university")]

[assembly: NavigationLink(int.MaxValue, "Ecnet/Hợp đồng", typeof(MyPages.TblContractController), icon: "fa-compress")]
[assembly: NavigationLink(int.MaxValue, "Ecnet/Hợp đồng/Danh sách hợp đồng", typeof(MyPages.TblContractController), icon: "fa-compress")]
[assembly: NavigationLink(int.MaxValue, "Ecnet/Hợp đồng/Danh mục con", typeof(MyPages.TblContractItemsController), icon: "fa-cubes")]
[assembly: NavigationLink(int.MaxValue, "Ecnet/Hợp đồng/Lịch thanh toán hợp đồng", typeof(MyPages.TblContractScheduleController), icon: "fa-line-chart")]
[assembly: NavigationLink(int.MaxValue, "Ecnet/Hợp đồng/Thanh toán hợp đồng", typeof(MyPages.TblContractPaymentController), icon: "fa-money")]
[assembly: NavigationLink(int.MaxValue, "Ecnet/Hợp đồng/Loại hợp đồng", typeof(MyPages.TblContractTypeController), icon: null)]

[assembly: NavigationLink(int.MaxValue, "Ecnet/Phòng giao dịch", typeof(MyPages.TblTransactionLocationController), icon: "fa-industry")]
[assembly: NavigationLink(int.MaxValue, "Ecnet/Phòng giao dịch/Danh sách phòng giao dịch", typeof(MyPages.TblTransactionLocationController), icon: "fa-sitemap")]
[assembly: NavigationLink(int.MaxValue, "Ecnet/Phòng giao dịch/Quản lý tài sản", typeof(MyPages.TblAssignAssetToPlaceController), icon: "fa-bars")]
[assembly: NavigationLink(int.MaxValue, "Ecnet/Phòng giao dịch/Tài sản", typeof(MyPages.TblAssetController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Ecnet/Phòng giao dịch/Nhóm tài sản", typeof(MyPages.TblAssetGroupController), icon: null)]
//ver 2.0
[assembly: NavigationLink(int.MaxValue, "Ecnet/Quản lý tiến độ", typeof(MyPages.TblUnitController), icon: "fa-tasks")]
[assembly: NavigationLink(int.MaxValue, "Ecnet/Quản lý tiến độ/Dự án", typeof(MyPages.TblProjectController), icon: null)]


[assembly: NavigationLink(int.MaxValue, "Ecnet/Quản lý tiến độ/Cập nhật tiến độ", typeof(MyPages.TblProjectItemController), icon: null)]
//End ver 2.0
[assembly: NavigationLink(int.MaxValue, "Ecnet/Phê duyệt", typeof(MyPages.TblApprovalCenterController), icon: "fa-thumbs-up")]
[assembly: NavigationLink(int.MaxValue, "Ecnet/Chi nhánh", typeof(MyPages.TblBranchController), icon: "fa-sliders")]
[assembly: NavigationLink(int.MaxValue, "Ecnet/Địa bàn", typeof(MyPages.TblAreaController), icon: "fa-map-marker")]
[assembly: NavigationLink(int.MaxValue, "Ecnet/Danh mục", typeof(MyPages.TblCityController), icon: "fa-list")]
[assembly: NavigationLink(int.MaxValue, "Ecnet/Danh mục/Tỉnh", typeof(MyPages.TblCityController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Ecnet/Danh mục/Quận-Huyện", typeof(MyPages.TblDistrictController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Ecnet/Danh mục/Phường xã", typeof(MyPages.TblWardsController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Ecnet/Danh mục/Items", typeof(MyPages.TblItemsController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Ecnet/Danh mục/Tham số hệ thống", typeof(MyPages.SysParametersController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Ecnet/Danh mục/Đơn vị tính", typeof(MyPages.TblUnitController), icon: null)]
//ver 2.0
[assembly: NavigationLink(int.MaxValue, "Ecnet/Danh mục/Trạng thái", typeof(MyPages.TblStatusController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Ecnet/Email", typeof(MyPages.EmailAccountsController), icon: "fa-envelope")]
[assembly: NavigationLink(int.MaxValue, "Ecnet/Email/Email Accounts", typeof(MyPages.EmailAccountsController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Ecnet/Email/Queued Email", typeof(MyPages.QueuedEmailController), icon: null)]

[assembly: NavigationLink(int.MaxValue, "Ecnet/Email/Template Email", typeof(MyPages.TemplateEmailController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Ecnet/Tbl Status Detail Level2", typeof(MyPages.TblStatusDetailLevel2Controller), icon: null)]