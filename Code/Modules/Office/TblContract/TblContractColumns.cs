
namespace ECNET.Office.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Office.TblContract")]
    [BasedOnRow(typeof(Entities.TblContractRow), CheckNames = true)]
    public class TblContractColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        [EditLink]
        public String TypeTypeName { get; set; }
        public String No { get; set; }
        [QuickFilter(CssClass = "hidden-xs")]
        public String PlaceCode { get; set; }
        [QuickFilter(CssClass = "hidden-xs")]
        public Int32 Status { get; set; }
        [QuickFilter(CssClass = "hidden-xs")]
        public DateTime? FromDate { get; set; }
        [QuickFilter(CssClass = "hidden-xs")]
        public DateTime? ToDate { get; set; }
        public String NameOfOwner { get; set; }
        public String PhoneOfOwner { get; set; }
        [QuickFilter(CssClass = "hidden-xs")]
        public DateTime DateSign { get; set; }
     
        public Decimal? ContractAmt { get; set; }

        //public String FileContractUpload { get; set; }
        //public String File1 { get; set; }
        //public String File2 { get; set; }
        //public String File3 { get; set; }
        //public String File4 { get; set; }
        //public String File5 { get; set; }
        //public String File6 { get; set; }
        //public String File7 { get; set; }
        public String CreatedBy { get; set; }
        public DateTime CreatedDate { get; set; }
        public String UpdatedBy { get; set; }
        public DateTime UpdatedDate { get; set; }
        [QuickFilter(CssClass = "hidden-xs")]
        public String IdentifyNo { get; set; }
        public Int32 IdentifyType { get; set; }
        public String AddressOfOwner { get; set; }
        public String CurrentAddressOfOwner { get; set; }
        public String EmailOfOwner { get; set; }
        public String NameOfOwner2nd { get; set; }
        //public String PhoneOfOwner2nd { get; set; }
        //public String IdentifyNo2nd { get; set; }
        //public Int32 IdentifyType2nd { get; set; }
        public String AccountBankNo { get; set; }
        public String BankName { get; set; }
        public String AccountName { get; set; }
        public String WalletNo { get; set; }
        public String WalletName { get; set; }
        
        public Int32 Month { get; set; }
        public Boolean? IsCompleted { get; set; }
        //public String Remark1 { get; set; }
        //public String Remark2 { get; set; }
        //public String Remark3 { get; set; }
        //public String Remark4 { get; set; }
        //public String Remark5 { get; set; }
    }
}