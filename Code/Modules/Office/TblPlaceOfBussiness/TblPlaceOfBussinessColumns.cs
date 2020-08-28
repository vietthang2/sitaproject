
namespace ECNET.Office.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using ECNET.Office.Entities;
    using ECNET.Web.Modules.Office.Common;

    [ColumnsScript("Office.TblPlaceOfBussiness")]
    [BasedOnRow(typeof(Entities.TblPlaceOfBussinessRow), CheckNames = true)]
    public class TblPlaceOfBussinessColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight,Hidden]
        public Int32 Id { get; set; }
        [EditLink]
        [Width(120)]
        public String Code { get; set; }
        [QuickFilter(CssClass = "hidden-xs")]
        [Width(120)]
        public String ContractNo { get; set; }


        [QuickFilter(CssClass = "hidden-xs")]
        [Width(100)]
        public String Status { get; set; }
        
        [Width(120)]
        public String Description { get; set; }
        [Width(80), DisplayFormat(BasicConst.NumberFormat2)]
        public Decimal? Width { get; set; }
        //[Width(80)]
        //public String Length { get; set; }
        [Width(120),DisplayFormat(BasicConst.NumberFormat2)]
        public Decimal? TotalAreaUse { get; set; }
        [Width(120), DisplayFormat(BasicConst.NumberFormat2)]
        public Decimal? TotalArea { get; set; }
        [QuickFilter(CssClass = "hidden-xs"), Width(200)]
        public Int32 TotalCustomer { get; set; }
        public String LinkGoogleMap { get; set; }
        public String Address { get; set; }
        [QuickFilter(CssClass = "hidden-xs")]
        public String CityName { get; set; }
        [LookupEditor(typeof(TblDistrictRow))]
        [QuickFilter(CssClass = "hidden-xs"), QuickFilterOption("cascadeFrom", "CityId")]
        public String DistrictName { get; set; }
        [LookupEditor(typeof(TblWardsRow))]
       // [QuickFilter(CssClass = "hidden-xs"), QuickFilterOption("cascadeFrom", "DistrictId")]
        public String WardsName { get; set; }

       
        [Width(100)]
        [QuickFilter(CssClass = "hidden-xs")]
        
        public String Type { get; set; }
        [QuickFilter(CssClass = "hidden-xs")]
        public Int32? MonthRent { get; set; }
        public Decimal? PriceRent { get; set; }
        public Int32 PriceBuy { get; set; }
        [QuickFilter(CssClass = "hidden-xs")]
        public Int32 RequireDeposit { get; set; }
        [QuickFilter(CssClass = "hidden-xs")]
        public Decimal RequireDepositAmt { get; set; }
        public DateTime RequireDateDeposit { get; set; }
        [QuickFilter(CssClass = "hidden-xs")]
        public Int32 HasDeposit { get; set; }
        public Decimal DepositAmt { get; set; }
        public DateTime DateDeposit { get; set; }
        public String EmployeePicName { get; set; }
        public String EmployeePicCode { get; set; }
        public String EmployeePicEmail { get; set; }
        public String BranchIdPicName { get; set; }
        public Int32 EmployeePicPhone { get; set; }
        public Int32 EmployeePicWalletNo { get; set; }
        public String Note { get; set; }
        [QuickFilter(CssClass = "hidden-xs")]
        public String BatchNo { get; set; }
        public String ImportBy { get; set; }
        public String ImportDate { get; set; }


    }
}