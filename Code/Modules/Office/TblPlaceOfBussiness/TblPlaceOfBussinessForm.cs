
namespace ECNET.Office.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using ECNET.Web.Modules.Office.Common;

    [FormScript("Office.TblPlaceOfBussiness")]
    [BasedOnRow(typeof(Entities.TblPlaceOfBussinessRow), CheckNames = true)]
    public class TblPlaceOfBussinessForm
    {
        [Tab("Thông tin")]
        [Category("Vị trí mặt bằng")]
        
        [HideOnInsert,ReadOnly(true), HalfWidth]
        public String Code { get; set; }
        [HalfWidth]
        [HideOnInsert,ReadOnly(true)]
        public Status Status { get; set; }
        public String Address { get; set; }
        [OneThirdWidth]
        public Int32 CityId { get; set; }
        [OneThirdWidth]
        [LookupEditor(typeof(Entities.TblDistrictRow),
        CascadeFrom = "CityId", CascadeField = "CityId")]
        public Int32 DistrictId { get; set; }

        [OneThirdWidth]
        [LookupEditor(typeof(Entities.TblWardsRow),
        CascadeFrom = "DistrictId", CascadeField = "DistrictId")]
        public Int32 WardsId { get; set; }
        [TextAreaEditor(Rows =2)]
        public String LinkGoogleMap { get; set; }
       
       
       
        
       
        [Category("Chủ sở hữu")]
        [HalfWidth]
        public String NameOfOwner { get; set; }
        [HalfWidth]
        public String PhoneOfOwner { get; set; }
        [Category("Hiện trạng mặt bằng")]
        [TextAreaEditor(Rows =2), Placeholder("Nhà 3 tầng, cao 20m")]
        public String Description { get; set; }
        [OneThirdWidth]
        public Decimal? Width { get; set; }
        [OneThirdWidth]
        public Decimal? TotalAreaUse { get; set; }
        [OneThirdWidth]
        public Decimal? TotalArea { get; set; }

        [OneThirdWidth]
        public String Door { get; set; }

        [OneThirdWidth]
        public String Ceiling { get; set; }
        [OneThirdWidth]
        public String Wall { get; set; }
        [OneThirdWidth]
        public String Floor { get; set; }



        [Category("Thông tin thuê mua")]
        [OneThirdWidth]
        public String Type { get; set; }
        [OneThirdWidth]
        public Int32? MonthRent { get; set; }
        [OneThirdWidth]
        public Decimal? PriceRent { get; set; }
        [OneThirdWidth]
        public Decimal? PriceBuy { get; set; }

        [OneThirdWidth]
        public Int32 RequireDeposit { get; set; }
        [OneThirdWidth]
        public Int32? MonthDeposit { get; set; }
        [OneThirdWidth]
        public Decimal RequireDepositAmt { get; set; }
        [OneThirdWidth]
        public DateTime RequireDateDeposit { get; set; }

        [OneThirdWidth]
        public Int32 HasDeposit { get; set; }
       
        [OneThirdWidth]
        public Decimal DepositAmt { get; set; }
        [OneThirdWidth]
        public DateTime DateDeposit { get; set; }

        [Category("Thông tin nhân sự phụ trách")]
        [OneThirdWidth]
        public Int32 BranchIdPic { get; set; }
        [OneThirdWidth]
        public String EmployeePicName { get; set; }
        [OneThirdWidth]
        public String EmployeePicCode { get; set; }
        [OneThirdWidth]
        public String EmployeePicEmail { get; set; }
      
        [OneThirdWidth]
        public String EmployeePicPhone { get; set; }
        [OneThirdWidth]
        public String EmployeePicWalletNo { get; set; }
        [Category("Thông tin khác")]
       
        
        public Int32 TotalCustomer { get; set; }
        
        [TextAreaEditor(Rows = 3)]
        public String Note { get; set; }
      
        [Visible(false)]
        public Int32 ContractId { get; set; }
        [Tab("File hồ sơ")]
        [HalfWidth]
        public String File1 { get; set; }
        [HalfWidth]
        public String File2 { get; set; }
        [HalfWidth]
        public String File3 { get; set; }
        [HalfWidth]
        public String File4 { get; set; }
        [HalfWidth]
        public String File5 { get; set; }
        [HalfWidth]
        public String File6 { get; set; }
        [HalfWidth]
        public String File7 { get; set; }
        [HalfWidth]
        public String File8 { get; set; }
        [HalfWidth]
        public String File9 { get; set; }
        [HalfWidth]
        public String File10 { get; set; }
        

    }
}