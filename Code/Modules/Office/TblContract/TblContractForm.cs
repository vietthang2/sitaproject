
namespace ECNET.Office.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using ECNET.Office.Entities;

    [FormScript("Office.TblContract")]
    [BasedOnRow(typeof(Entities.TblContractRow), CheckNames = true)]
    public class TblContractForm
    {
      
        [Tab("Thông tin chung")]
        [Category("Thông tin chung")]
        [Hidden]
        public Int32 Id { get; set; }
        [Hidden]
        public Int32 BuyOrRent { get; set; }

        [HalfWidth]
        [PlaceContractEditor]
        public Int32 PlaceId { get; set; }
        [HalfWidth]
        //[ReadOnly(true)]
        public Int32 Status { get; set; }
        [HalfWidth]
        [ReadOnly(true)]
        public String No { get; set; }

        [HalfWidth]
        public String ContractName { get; set; }
        [HalfWidth]
        public Int32 TypeId { get; set; }
        [HalfWidth]
        public DateTime? FromDate { get; set; }
        [HalfWidth]
        public Decimal? TotalContractAmt { get; set; }
        //public Decimal? ContractAmt { get; set; }
        [HalfWidth]
        public DateTime? ToDate { get; set; }
        [HalfWidth]
        public Decimal? Paid { get; set; }
        [HalfWidth, Hidden]
        public DateTime DateSign { get; set; }
        [HalfWidth]
        public Decimal RemainAmt { get; set; }
        [HalfWidth,Hidden]
        public DateTime? EndDate { get; set; }

        [Tab("Pháp nhân đại diện")]
        [Category("Bên cho thuê/mua")]

        [HalfWidth]
        public String NameOfOwner { get; set; }
        [HalfWidth]
        public String PhoneOfOwner { get; set; }

        public String EmailOfOwner { get; set; }
        [HalfWidth]
        public Int32 IdentifyType { get; set; }
        [HalfWidth]
        public String IdentifyNo { get; set; }
        [TextAreaEditor(Rows = 2)]
        public String AddressOfOwner { get; set; }
        [TextAreaEditor(Rows = 2)]
        public String CurrentAddressOfOwner { get; set; }
        [Category("Thông tin đồng sở hữu")]
        [HalfWidth]
        public String NameOfOwner2nd { get; set; }
        [HalfWidth]
        public String PhoneOfOwner2nd { get; set; }
        [HalfWidth]
        public Int32 IdentifyType2nd { get; set; }

        [HalfWidth]
        public String IdentifyNo2nd { get; set; }
        [TextAreaEditor(Rows = 2)]
        public String AddressOfOwner2nd { get; set; }
        [TextAreaEditor(Rows = 2)]
        public String CurrentAddressOfOwner2nd { get; set; }
        [Category("Bên thuê mua")]
        public String ECPayCompanyName { get; set; }
        public String ECPayAddress { get; set; }
        [HalfWidth]
        public String ECPayPhone { get; set; }
        [HalfWidth]
        public String ECPayBankNo { get; set; }
        [HalfWidth]
        public String ECPayBankName { get; set; }
        [HalfWidth]
        public String ECPayBankNameBranch { get; set; }

        [HalfWidth]
        public String EcPayPerson { get; set; }
        [HalfWidth]
        public String EcPayPosition { get; set; }
        [HalfWidth]
        public String EcPayAuthorityNo { get; set; }
        [HalfWidth]
        public DateTime? EcPayAuthorityDate { get; set; }

        [Tab("Thông tin mặt bằng")]
        [Category("Điều 1: Nội dung hợp đồng")]
       
        [ReadOnly(true),TextAreaEditor(Rows =2)]
        public String PlaceAddress { get; set; }
        [OneThirdWidth, ReadOnly(true)]
        public Int32? PlaceCityId { get; set; }
        [OneThirdWidth, ReadOnly(true)]
        public Int32? PlaceDistrictId { get; set; }
        [OneThirdWidth, ReadOnly(true)]
        public Int32? PlaceWardsId { get; set; }
        [OneThirdWidth]
        public String CertificateNo { get; set; }
        [OneThirdWidth]
        public DateTime? CertificateDate { get; set; }
        [OneThirdWidth]
        public Int32? CertificateCity { get; set; }

        [ReadOnly(true)]
        public String PlaceDescription { get; set; }
        [OneThirdWidth, ReadOnly(true)]
        public decimal? PlaceTotalAreaUse { get; set; }
        [Category("Điều 2: Thời hạn thuê, chấm dứt trước hạn và gia hạn")]
        [HalfWidth]
        public Int32 Month { get; set; }
        [HalfWidth]
        public Int32 YearCancel { get; set; }
        [HalfWidth]
        public DateTime ReleaseDate { get; set; }

        [HalfWidth]
        public DateTime BeginDate { get; set; }
        [Category("Điều 3: Tiền thuê và chi phí khác")]
        
        [OneThirdWidth, Hidden]
        public Decimal? PlacePriceRent { get; set; }
        [OneThirdWidth, Hidden]
        public Decimal? PlacePriceBuy { get; set; }
        [HalfWidth]
        //public Decimal? TotalContractAmt { get; set; }
        public Decimal? ContractAmt { get; set; }
        [HalfWidth,ReadOnly(true)]
        public String ContractAmtString { get; set; }
        [HalfWidth]
        public Int32 YearFixPrice    { get; set; }
        [HalfWidth]
        public Int32 YearBeginRedeal { get; set; }
        [Category("Thông tin thanh toán")]
        [HalfWidth]
        public Int32 RecurringPayment { get; set; }
        [HalfWidth]
        public Int32? PaymentMethod { get; set; }

        [HalfWidth]
        public String AccountName { get; set; }
        [HalfWidth]
        public String AccountBankNo { get; set; }
        public String BankName { get; set; }
        [HalfWidth]
        public String WalletNo { get; set; }
        [HalfWidth]
        public String WalletName { get; set; }

        
        
        [Tab("Các điều khoản khác")]
        [ItemDetailEditor]
        public List<Entities.TblContractItemsRow> ListDetail { get; set; }
        [Tab("Lịch thanh toán")]
        [ScheduleDetailEditor]
        public List<Entities.TblContractScheduleRow> ListSchedule { get; set; }
        [Tab("Upload hồ sơ")]
        [Category("File upload")]
        [HalfWidth]
        public String FileContractUpload { get; set; }
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
        public Boolean? IsCompleted { get; set; }



        [Category("Ghi chú")]
        [TextAreaEditor(Rows = 2)]
        public String Remark1 { get; set; }
        [TextAreaEditor(Rows = 2)]
        public String Remark2 { get; set; }
        [TextAreaEditor(Rows = 2)]
        public String Remark3 { get; set; }
        [TextAreaEditor(Rows = 2)]
        public String Remark4 { get; set; }
        [TextAreaEditor(Rows = 2)]
        public String Remark5 { get; set; }

    }
}