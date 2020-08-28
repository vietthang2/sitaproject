
namespace ECNET.Office.Entities
{
    using ECNET.Administration;
    using ECNET.Web.Modules.Office.Common;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.IO;
    using ECNET.Web.Modules.Office.TblPlaceOfBussiness;
    using ECNET.Modules.Common.BaseClass;

    [ConnectionKey("Default"), Module("Office"), TableName("[dbo].[tblContract]")]
    [DisplayName("Tbl Contract"), InstanceName("Tbl Contract")]
    
    [ReadPermission(PermissionKeys.Contract.View)]
    [ModifyPermission(PermissionKeys.Contract.Modify)]
    [LookupScript("dbo.tblContract",Permission ="*")]//add thêm
    public sealed class TblContractRow : Row, IIdRow, INameRow,IAuditLog
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Name Of Owner"), Size(50), NotNull, QuickSearch]
        public String NameOfOwner
        {
            get { return Fields.NameOfOwner[this]; }
            set { Fields.NameOfOwner[this] = value; }
        }

        [DisplayName("Phone Of Owner"), Size(20), NotNull]
        public String PhoneOfOwner
        {
            get { return Fields.PhoneOfOwner[this]; }
            set { Fields.PhoneOfOwner[this] = value; }
        }

        [DisplayName("Date Sign"), NotNull]
        public DateTime? DateSign
        {
            get { return Fields.DateSign[this]; }
            set { Fields.DateSign[this] = value; }
        }

        [DisplayName("Type"), NotNull, ForeignKey("[dbo].[tblContractType]", "Id"), LeftJoin("jType"), TextualField("TypeTypeName")]
        [LookupEditor(typeof(TblContractTypeRow),InplaceAddPermission = "General", InplaceAdd = true, DialogType = "ECNET.Office.TblContractTypeDialog")]//Thêm
        public Int32? TypeId
        {
            get { return Fields.TypeId[this]; }
            set { Fields.TypeId[this] = value; }
        }

        [DisplayName("File Contract Upload"), Size(200)]
        //[FileUploadEditor(FilenameFormat = "Contract/|PlaceCode|/~", CopyToHistory = true, DisplayFileName = true)]
        [FileUploadEditor(FilenameFormat = "Contract/|PlaceCode|/{4}",DisplayFileName = true)]
        public String FileContractUpload
        {
            get { return Fields.FileContractUpload[this]; }
            set { Fields.FileContractUpload[this] = value; }
        }

        [DisplayName("File1"), Size(200)]
        [FileUploadEditor(FilenameFormat = "Contract/|PlaceCode|/{4}", DisplayFileName = true)]
        public String File1
        {
            get { return Fields.File1[this]; }
            set { Fields.File1[this] = value; }
        }

        [DisplayName("File2"), Size(200)]
        [FileUploadEditor(FilenameFormat = "Contract/|PlaceCode|/{4}", DisplayFileName = true)]
        public String File2
        {
            get { return Fields.File2[this]; }
            set { Fields.File2[this] = value; }
        }

        [DisplayName("File3"), Size(200)]
        [FileUploadEditor(FilenameFormat = "Contract/|PlaceCode|/{4}", DisplayFileName = true)]
        public String File3
        {
            get { return Fields.File3[this]; }
            set { Fields.File3[this] = value; }
        }

        [DisplayName("File4"), Size(200)]
        [FileUploadEditor(FilenameFormat = "Contract/|PlaceCode|/{4}", DisplayFileName = true)]
        public String File4
        {
            get { return Fields.File4[this]; }
            set { Fields.File4[this] = value; }
        }

        [DisplayName("File5"), Size(200)]
        [FileUploadEditor(FilenameFormat = "Contract/|PlaceCode|/{4}", DisplayFileName = true)]
        public String File5
        {
            get { return Fields.File5[this]; }
            set { Fields.File5[this] = value; }
        }

        [DisplayName("File6"), Size(200)]
        [FileUploadEditor(FilenameFormat = "Contract/|PlaceCode|/{4}", DisplayFileName = true)]
        public String File6
        {
            get { return Fields.File6[this]; }
            set { Fields.File6[this] = value; }
        }

        [DisplayName("File7"), Size(200)]
        [FileUploadEditor(FilenameFormat = "Contract/|PlaceCode|/{4}", DisplayFileName = true)]
        public String File7
        {
            get { return Fields.File7[this]; }
            set { Fields.File7[this] = value; }
        }

        [DisplayName("Created By"), Size(30)]
        public String CreatedBy
        {
            get { return Fields.CreatedBy[this]; }
            set { Fields.CreatedBy[this] = value; }
        }

        [DisplayName("Created Date")]
        public DateTime? CreatedDate
        {
            get { return Fields.CreatedDate[this]; }
            set { Fields.CreatedDate[this] = value; }
        }

        [DisplayName("Updated By"), Size(30)]
        public String UpdatedBy
        {
            get { return Fields.UpdatedBy[this]; }
            set { Fields.UpdatedBy[this] = value; }
        }

        [DisplayName("Updated Date")]
        public DateTime? UpdatedDate
        {
            get { return Fields.UpdatedDate[this]; }
            set { Fields.UpdatedDate[this] = value; }
        }

        [DisplayName("Place"), NotNull, ForeignKey(typeof(TblPlaceOfBussinessRow), "Id"), LeftJoin("jPlace"), TextualField("PlaceCode"), LookupInclude]
        [LookupEditor(typeof(TblPlaceOfBussinessRow), InplaceAdd =true, InplaceAddPermission = "General", DialogType = "ECNET.Office.TblPlaceOfBussinessDialog")]//Thêm
        public Int32? PlaceId
        {
            get { return Fields.PlaceId[this]; }
            set { Fields.PlaceId[this] = value; }
        }
        //[DisplayName("Place"), NotNull, ForeignKey("[dbo].[tblPlaceOfBussiness]", "Id"), LeftJoin("jPlace"), TextualField("PlaceCode"), LookupInclude]
        //[LookupEditor(typeof(TblPlaceOfBussinessRow))]//Thêm
        //public Int32? AssetTempId
        //{
        //    get { return Fields.PlaceId[this]; }
        //    set { Fields.PlaceId[this] = value; }
        //}

        [DisplayName("Identify No"), Size(12), NotNull]
        public String IdentifyNo
        {
            get { return Fields.IdentifyNo[this]; }
            set { Fields.IdentifyNo[this] = value; }
        }

        [DisplayName("Identify Type")]
        public IdentifyType? IdentifyType
        {
            get { return (IdentifyType?)Fields.IdentifyType[this]; }
            set { Fields.IdentifyType[this] = (Int32)value; }
        }

        [DisplayName("Address Of Owner"), Size(1000), NotNull]
        public String AddressOfOwner
        {
            get { return Fields.AddressOfOwner[this]; }
            set { Fields.AddressOfOwner[this] = value; }
        }

        [DisplayName("Current Address Of Owner"), Size(1000)]
        public String CurrentAddressOfOwner
        {
            get { return Fields.CurrentAddressOfOwner[this]; }
            set { Fields.CurrentAddressOfOwner[this] = value; }
        }

        [DisplayName("Email Of Owner"), Size(100)]
        public String EmailOfOwner
        {
            get { return Fields.EmailOfOwner[this]; }
            set { Fields.EmailOfOwner[this] = value; }
        }

        [DisplayName("Name Of Owner2nd"), Size(50)]
        public String NameOfOwner2nd
        {
            get { return Fields.NameOfOwner2nd[this]; }
            set { Fields.NameOfOwner2nd[this] = value; }
        }

        [DisplayName("Phone Of Owner2nd"), Size(20)]
        public String PhoneOfOwner2nd
        {
            get { return Fields.PhoneOfOwner2nd[this]; }
            set { Fields.PhoneOfOwner2nd[this] = value; }
        }

        [DisplayName("Identify No2nd"), Size(20)]
        public String IdentifyNo2nd
        {
            get { return Fields.IdentifyNo2nd[this]; }
            set { Fields.IdentifyNo2nd[this] = value; }
        }

        [DisplayName("Identify Type2nd")]
        public IdentifyType? IdentifyType2nd
        {
            get { return (IdentifyType?)Fields.IdentifyType2nd[this]; }
            set { Fields.IdentifyType2nd[this] = (Int32)value; }
        }
        [DisplayName("Address Of Owner 2nd"), Size(1000)]
        public String AddressOfOwner2nd
        {
            get { return Fields.AddressOfOwner2nd[this]; }
            set { Fields.AddressOfOwner2nd[this] = value; }
        }

        [DisplayName("Current Address Of Owner 2nd"), Size(1000)]
        public String CurrentAddressOfOwner2nd
        {
            get { return Fields.CurrentAddressOfOwner2nd[this]; }
            set { Fields.CurrentAddressOfOwner2nd[this] = value; }
        }
        [DisplayName("Account Bank No"), Size(50)]
        public String AccountBankNo
        {
            get { return Fields.AccountBankNo[this]; }
            set { Fields.AccountBankNo[this] = value; }
        }

        [DisplayName("Bank Name"), Size(200)]
        public String BankName
        {
            get { return Fields.BankName[this]; }
            set { Fields.BankName[this] = value; }
        }

        [DisplayName("Account Name"), Size(100)]
        public String AccountName
        {
            get { return Fields.AccountName[this]; }
            set { Fields.AccountName[this] = value; }
        }

        [DisplayName("Wallet No"), Size(50)]
        public String WalletNo
        {
            get { return Fields.WalletNo[this]; }
            set { Fields.WalletNo[this] = value; }
        }

        [DisplayName("Wallet Name"), Size(100)]
        public String WalletName
        {
            get { return Fields.WalletName[this]; }
            set { Fields.WalletName[this] = value; }
        }

        [DisplayName("No"), Size(30), QuickSearch]
        public String No
        {
            get { return Fields.No[this]; }
            set { Fields.No[this] = value; }
        }

        [DisplayName("Month")]
        public Int32? Month
        {
            get { return Fields.Month[this]; }
            set { Fields.Month[this] = value; }
        }

        [DisplayName("Remark1"), Size(200)]
        public String Remark1
        {
            get { return Fields.Remark1[this]; }
            set { Fields.Remark1[this] = value; }
        }

        [DisplayName("Remark2"), Size(200)]
        public String Remark2
        {
            get { return Fields.Remark2[this]; }
            set { Fields.Remark2[this] = value; }
        }

        [DisplayName("Remark3"), Size(200)]
        public String Remark3
        {
            get { return Fields.Remark3[this]; }
            set { Fields.Remark3[this] = value; }
        }

        [DisplayName("Remark4"), Size(200)]
        public String Remark4
        {
            get { return Fields.Remark4[this]; }
            set { Fields.Remark4[this] = value; }
        }

        [DisplayName("Remark5"), Size(200)]
        public String Remark5
        {
            get { return Fields.Remark5[this]; }
            set { Fields.Remark5[this] = value; }
        }

        [DisplayName("From Date"),DisplayFormat(BasicConst.DateFormatShow)]
        public DateTime? FromDate
        {
            get { return Fields.FromDate[this]; }
            set { Fields.FromDate[this] = value; }
        }

        [DisplayName("To Date"), DisplayFormat(BasicConst.DateFormatShow)]
        public DateTime? ToDate
        {
            get { return Fields.ToDate[this]; }
            set { Fields.ToDate[this] = value; }
        }

        [DisplayName("BuyOrRent"), NotNull]
        public TypeOfPlace? BuyOrRent
        {
            get { return (TypeOfPlace?)Fields.BuyOrRent[this]; }
            set { Fields.BuyOrRent[this] = (Int32)value; }
        }

        [DisplayName("Contract Amt"), Size(18), Scale(0), CurrencyFormatter(CultureName = "vi-VI", CurrencyName = "VND")]
        public Decimal? ContractAmt
        {
            get { return Fields.ContractAmt[this]; }
            set { Fields.ContractAmt[this] = value; }
        }
        [DisplayName("Total Contract Amt"), Size(18), Scale(0), CurrencyFormatter(CultureName = "vi-VI", CurrencyName = "VND")]
        public Decimal? TotalContractAmt
        {
            get { return Fields.TotalContractAmt[this]; }
            set { Fields.TotalContractAmt[this] = value; }
        }

        [DisplayName("Total Area"), Size(18), Scale(0), DisplayFormat(BasicConst.NumberFormat)]
        public Decimal? TotalArea
        {
            get { return Fields.TotalArea[this]; }
            set { Fields.TotalArea[this] = value; }
        }

        [DisplayName("Release Date"), DisplayFormat(BasicConst.DateFormatShow)]
        public DateTime? ReleaseDate
        {
            get { return Fields.ReleaseDate[this]; }
            set { Fields.ReleaseDate[this] = value; }
        }

        [DisplayName("Begin Date"), DisplayFormat(BasicConst.DateFormatShow)]
        public DateTime? BeginDate
        {
            get { return Fields.BeginDate[this]; }
            set { Fields.BeginDate[this] = value; }
        }

        [DisplayName("Payment Method")]
        public PaymentMethod? PaymentMethod
        {
            get { return (PaymentMethod?)Fields.PaymentMethod[this]; }
            set { Fields.PaymentMethod[this] = (Int32)value; }
        }

        [DisplayName("City"), ForeignKey("[dbo].[tblCity]", "Id"), LeftJoin("jCity"), TextualField("CityName"), NotNull]
        [LookupEditor(typeof(TblCityRow))]//Thêm
        public Int32? CityId
        {
            get { return Fields.CityId[this]; }
            set { Fields.CityId[this] = value; }
        }

        [DisplayName("District"), ForeignKey("[dbo].[tblDistrict]", "Id"), LeftJoin("jDistrict"), TextualField("DistrictName"), NotNull]
        public Int32? DistrictId
        {
            get { return Fields.DistrictId[this]; }
            set { Fields.DistrictId[this] = value; }
        }

        [DisplayName("Wards"), NotNull, ForeignKey("[dbo].[tblWards]", "Id"), LeftJoin("jWards"), TextualField("WardsName")]
        public Int32? WardsId
        {
            get { return Fields.WardsId[this]; }
            set { Fields.WardsId[this] = value; }
        }


        [DisplayName("Ec Pay Person"), Column("ECPayPerson"), Size(100), NotNull]
        public String EcPayPerson
        {
            get { return Fields.EcPayPerson[this]; }
            set { Fields.EcPayPerson[this] = value; }
        }

        [DisplayName("Ec Pay Position"), Column("ECPayPosition"), Size(100), NotNull]
        public String EcPayPosition
        {
            get { return Fields.EcPayPosition[this]; }
            set { Fields.EcPayPosition[this] = value; }
        }

        [DisplayName("Ec Pay Authority No"), Column("ECPayAuthorityNo"), Size(100)]
        public String EcPayAuthorityNo
        {
            get { return Fields.EcPayAuthorityNo[this]; }
            set { Fields.EcPayAuthorityNo[this] = value; }
        }

        [DisplayName("Ec Pay Authority Date"), Column("ECPayAuthorityDate")]
        public DateTime? EcPayAuthorityDate
        {
            get { return Fields.EcPayAuthorityDate[this]; }
            set { Fields.EcPayAuthorityDate[this] = value; }
        }

        [DisplayName("Type Type Name"), Expression("jType.[TypeName]")]
        public String TypeTypeName
        {
            get { return Fields.TypeTypeName[this]; }
            set { Fields.TypeTypeName[this] = value; }
        }

        [DisplayName("Type Description"), Expression("jType.[Description]")]
        public String TypeDescription
        {
            get { return Fields.TypeDescription[this]; }
            set { Fields.TypeDescription[this] = value; }
        }

        [DisplayName("Type Person Sign"), Expression("jType.[PersonSign]")]
        public String TypePersonSign
        {
            get { return Fields.TypePersonSign[this]; }
            set { Fields.TypePersonSign[this] = value; }
        }

        [DisplayName("Type Person Position"), Expression("jType.[PersonPosition]")]
        public String TypePersonPosition
        {
            get { return Fields.TypePersonPosition[this]; }
            set { Fields.TypePersonPosition[this] = value; }
        }

        [DisplayName("Type Person Authority No"), Expression("jType.[PersonAuthorityNo]")]
        public String TypePersonAuthorityNo
        {
            get { return Fields.TypePersonAuthorityNo[this]; }
            set { Fields.TypePersonAuthorityNo[this] = value; }
        }

        [DisplayName("Type Remark1"), Expression("jType.[Remark1]")]
        public String TypeRemark1
        {
            get { return Fields.TypeRemark1[this]; }
            set { Fields.TypeRemark1[this] = value; }
        }

        [DisplayName("Type Remark2"), Expression("jType.[Remark2]")]
        public String TypeRemark2
        {
            get { return Fields.TypeRemark2[this]; }
            set { Fields.TypeRemark2[this] = value; }
        }

        [DisplayName("Type Remark3"), Expression("jType.[Remark3]")]
        public String TypeRemark3
        {
            get { return Fields.TypeRemark3[this]; }
            set { Fields.TypeRemark3[this] = value; }
        }

        [DisplayName("Type Remark4"), Expression("jType.[Remark4]")]
        public String TypeRemark4
        {
            get { return Fields.TypeRemark4[this]; }
            set { Fields.TypeRemark4[this] = value; }
        }

        [DisplayName("Type Remark5"), Expression("jType.[Remark5]")]
        public String TypeRemark5
        {
            get { return Fields.TypeRemark5[this]; }
            set { Fields.TypeRemark5[this] = value; }
        }

        [DisplayName("Place Code"), Expression("jPlace.[Code]"), QuickSearch]
        public String PlaceCode
        {
            get { return Fields.PlaceCode[this]; }
            set { Fields.PlaceCode[this] = value; }
        }

        [DisplayName("Place Width"), Expression("jPlace.[Width]")]
        public Decimal? PlaceWidth
        {
            get { return Fields.PlaceWidth[this]; }
            set { Fields.PlaceWidth[this] = value; }
        }

        [DisplayName("Place Length"), Expression("jPlace.[Length]")]
        public Decimal? PlaceLength
        {
            get { return Fields.PlaceLength[this]; }
            set { Fields.PlaceLength[this] = value; }
        }

        [DisplayName("Place Total Area"), Expression("jPlace.[TotalArea]")]
        public Decimal? PlaceTotalArea
        {
            get { return Fields.PlaceTotalArea[this]; }
            set { Fields.PlaceTotalArea[this] = value; }
        }

        [DisplayName("Place Total Customer"), Expression("jPlace.[TotalCustomer]")]
        public Int32? PlaceTotalCustomer
        {
            get { return Fields.PlaceTotalCustomer[this]; }
            set { Fields.PlaceTotalCustomer[this] = value; }
        }

        [DisplayName("Place Link Google Map"), Expression("jPlace.[LinkGoogleMap]")]
        public String PlaceLinkGoogleMap
        {
            get { return Fields.PlaceLinkGoogleMap[this]; }
            set { Fields.PlaceLinkGoogleMap[this] = value; }
        }

        [DisplayName("Place Address"), Expression("jPlace.[Address]")]
        public String PlaceAddress
        {
            get { return Fields.PlaceAddress[this]; }
            set { Fields.PlaceAddress[this] = value; }
        }

        [DisplayName("Place City Id"), Expression("jPlace.[CityId]")]
        [LookupEditor(typeof(TblCityRow), InplaceAdd = true, InplaceAddPermission = "General", DialogType = "ECNET.Office.TblCityDialog")]//Thêm
        public Int32? PlaceCityId
        {
            get { return Fields.PlaceCityId[this]; }
            set { Fields.PlaceCityId[this] = value; }
        }

        [DisplayName("Place District Id"), Expression("jPlace.[DistrictId]")]
        [LookupEditor(typeof(TblDistrictRow), InplaceAdd = true, InplaceAddPermission = "General", DialogType = "ECNET.Office.TblDistrictDialog")]//Thêm
        public Int32? PlaceDistrictId
        {
            get { return Fields.PlaceDistrictId[this]; }
            set { Fields.PlaceDistrictId[this] = value; }
        }

        [DisplayName("Place Contract Id"), Expression("jPlace.[ContractId]")]
        public Int32? PlaceContractId
        {
            get { return Fields.PlaceContractId[this]; }
            set { Fields.PlaceContractId[this] = value; }
        }

        [DisplayName("Place Created By"), Expression("jPlace.[CreatedBy]")]
        public String PlaceCreatedBy
        {
            get { return Fields.PlaceCreatedBy[this]; }
            set { Fields.PlaceCreatedBy[this] = value; }
        }

        [DisplayName("Place Created Date"), Expression("jPlace.[CreatedDate]")]
        public DateTime? PlaceCreatedDate
        {
            get { return Fields.PlaceCreatedDate[this]; }
            set { Fields.PlaceCreatedDate[this] = value; }
        }

        [DisplayName("Place Update Date"), Expression("jPlace.[UpdateDate]")]
        public DateTime? PlaceUpdateDate
        {
            get { return Fields.PlaceUpdateDate[this]; }
            set { Fields.PlaceUpdateDate[this] = value; }
        }

        [DisplayName("Place Updated By"), Expression("jPlace.[UpdatedBy]")]
        public String PlaceUpdatedBy
        {
            get { return Fields.PlaceUpdatedBy[this]; }
            set { Fields.PlaceUpdatedBy[this] = value; }
        }

        [DisplayName("Place Time Open From"), Expression("jPlace.[TimeOpenFrom]")]
        public TimeSpan? PlaceTimeOpenFrom
        {
            get { return Fields.PlaceTimeOpenFrom[this]; }
            set { Fields.PlaceTimeOpenFrom[this] = value; }
        }

        [DisplayName("Place Time Open To"), Expression("jPlace.[TimeOpenTo]")]
        public TimeSpan? PlaceTimeOpenTo
        {
            get { return Fields.PlaceTimeOpenTo[this]; }
            set { Fields.PlaceTimeOpenTo[this] = value; }
        }

        [DisplayName("Place Time Opening"), Expression("jPlace.[TimeOpening]")]
        public TimeSpan? PlaceTimeOpening
        {
            get { return Fields.PlaceTimeOpening[this]; }
            set { Fields.PlaceTimeOpening[this] = value; }
        }

        [DisplayName("Place Time Opening Date"), Expression("jPlace.[TimeOpeningDate]")]
        public DateTime? PlaceTimeOpeningDate
        {
            get { return Fields.PlaceTimeOpeningDate[this]; }
            set { Fields.PlaceTimeOpeningDate[this] = value; }
        }

        [DisplayName("Place Status"), Expression("jPlace.[Status]")]
        public Int32? PlaceStatus
        {
            get { return Fields.PlaceStatus[this]; }
            set { Fields.PlaceStatus[this] = value; }
        }

        [DisplayName("Place Wards Id"), Expression("jPlace.[WardsId]")]
        [LookupEditor(typeof(TblWardsRow),InplaceAdd =true, InplaceAddPermission = "General", DialogType = "ECNET.Office.TblWardsDialog")]//Thêm
        public Int32? PlaceWardsId
        {
            get { return Fields.PlaceWardsId[this]; }
            set { Fields.PlaceWardsId[this] = value; }
        }

        [DisplayName("Place Type"), Expression("jPlace.[Type]")]
        public Int32? PlaceType
        {
            get { return Fields.PlaceType[this]; }
            set { Fields.PlaceType[this] = value; }
        }

        [DisplayName("Place Note"), Expression("jPlace.[Note]")]
        public String PlaceNote
        {
            get { return Fields.PlaceNote[this]; }
            set { Fields.PlaceNote[this] = value; }
        }

        [DisplayName("Place Total Area Use"), Expression("jPlace.[TotalAreaUse]")]
        public Decimal? PlaceTotalAreaUse
        {
            get { return Fields.PlaceTotalAreaUse[this]; }
            set { Fields.PlaceTotalAreaUse[this] = value; }
        }

        [DisplayName("Place Name Of Owner"), Expression("jPlace.[NameOfOwner]")]
        public String PlaceNameOfOwner
        {
            get { return Fields.PlaceNameOfOwner[this]; }
            set { Fields.PlaceNameOfOwner[this] = value; }
        }

        [DisplayName("Place Phone Of Owner"), Expression("jPlace.[PhoneOfOwner]")]
        public String PlacePhoneOfOwner
        {
            get { return Fields.PlacePhoneOfOwner[this]; }
            set { Fields.PlacePhoneOfOwner[this] = value; }
        }

        [DisplayName("Place Description"), Expression("jPlace.[Description]")]
        public String PlaceDescription
        {
            get { return Fields.PlaceDescription[this]; }
            set { Fields.PlaceDescription[this] = value; }
        }

        [DisplayName("Place Month Rent"), Expression("jPlace.[MonthRent]")]
        public Int32? PlaceMonthRent
        {
            get { return Fields.PlaceMonthRent[this]; }
            set { Fields.PlaceMonthRent[this] = value; }
        }

        [DisplayName("Place Price Rent"), Expression("jPlace.[PriceRent]")]
        public Decimal? PlacePriceRent
        {
            get { return Fields.PlacePriceRent[this]; }
            set { Fields.PlacePriceRent[this] = value; }
        }

        [DisplayName("Place Price Buy"), Expression("jPlace.[PriceBuy]")]
        public Decimal? PlacePriceBuy
        {
            get { return Fields.PlacePriceBuy[this]; }
            set { Fields.PlacePriceBuy[this] = value; }
        }

        [DisplayName("Place Require Deposit"), Expression("jPlace.[RequireDeposit]")]
        public Int32? PlaceRequireDeposit
        {
            get { return Fields.PlaceRequireDeposit[this]; }
            set { Fields.PlaceRequireDeposit[this] = value; }
        }

        [DisplayName("Place Require Deposit Amt"), Expression("jPlace.[RequireDepositAmt]")]
        public Decimal? PlaceRequireDepositAmt
        {
            get { return Fields.PlaceRequireDepositAmt[this]; }
            set { Fields.PlaceRequireDepositAmt[this] = value; }
        }

        [DisplayName("Place Require Date Deposit"), Expression("jPlace.[RequireDateDeposit]")]
        public DateTime? PlaceRequireDateDeposit
        {
            get { return Fields.PlaceRequireDateDeposit[this]; }
            set { Fields.PlaceRequireDateDeposit[this] = value; }
        }

        [DisplayName("Place Has Deposit"), Expression("jPlace.[HasDeposit]")]
        public Int32? PlaceHasDeposit
        {
            get { return Fields.PlaceHasDeposit[this]; }
            set { Fields.PlaceHasDeposit[this] = value; }
        }

        [DisplayName("Place Deposit"), Expression("jPlace.[Deposit]")]
        public Int32? PlaceDeposit
        {
            get { return Fields.PlaceDeposit[this]; }
            set { Fields.PlaceDeposit[this] = value; }
        }

        [DisplayName("Place Deposit Amt"), Expression("jPlace.[DepositAmt]")]
        public Decimal? PlaceDepositAmt
        {
            get { return Fields.PlaceDepositAmt[this]; }
            set { Fields.PlaceDepositAmt[this] = value; }
        }

        [DisplayName("Place Date Deposit"), Expression("jPlace.[DateDeposit]")]
        public DateTime? PlaceDateDeposit
        {
            get { return Fields.PlaceDateDeposit[this]; }
            set { Fields.PlaceDateDeposit[this] = value; }
        }

        [DisplayName("Place Employee Pic Name"), Expression("jPlace.[EmployeePicName]")]
        public String PlaceEmployeePicName
        {
            get { return Fields.PlaceEmployeePicName[this]; }
            set { Fields.PlaceEmployeePicName[this] = value; }
        }

        [DisplayName("Place Employee Pic Code"), Expression("jPlace.[EmployeePicCode]")]
        public String PlaceEmployeePicCode
        {
            get { return Fields.PlaceEmployeePicCode[this]; }
            set { Fields.PlaceEmployeePicCode[this] = value; }
        }

        [DisplayName("Place Employee Pic Email"), Expression("jPlace.[EmployeePicEmail]")]
        public String PlaceEmployeePicEmail
        {
            get { return Fields.PlaceEmployeePicEmail[this]; }
            set { Fields.PlaceEmployeePicEmail[this] = value; }
        }

        [DisplayName("Place Employee Pic Phone"), Expression("jPlace.[EmployeePicPhone]")]
        public String PlaceEmployeePicPhone
        {
            get { return Fields.PlaceEmployeePicPhone[this]; }
            set { Fields.PlaceEmployeePicPhone[this] = value; }
        }

        [DisplayName("Place Employee Pic Wallet No"), Expression("jPlace.[EmployeePicWalletNo]")]
        public String PlaceEmployeePicWalletNo
        {
            get { return Fields.PlaceEmployeePicWalletNo[this]; }
            set { Fields.PlaceEmployeePicWalletNo[this] = value; }
        }

        [DisplayName("Place Branch Id Pic"), Expression("jPlace.[BranchIdPic]")]
        public Int32? PlaceBranchIdPic
        {
            get { return Fields.PlaceBranchIdPic[this]; }
            set { Fields.PlaceBranchIdPic[this] = value; }
        }

        [DisplayName("Place Area Id Pic"), Expression("jPlace.[AreaIdPic]")]
        public Int32? PlaceAreaIdPic
        {
            get { return Fields.PlaceAreaIdPic[this]; }
            set { Fields.PlaceAreaIdPic[this] = value; }
        }

        [DisplayName("Place Batch No"), Expression("jPlace.[BatchNo]")]
        public String PlaceBatchNo
        {
            get { return Fields.PlaceBatchNo[this]; }
            set { Fields.PlaceBatchNo[this] = value; }
        }

        [DisplayName("Place Import By"), Expression("jPlace.[ImportBy]")]
        public String PlaceImportBy
        {
            get { return Fields.PlaceImportBy[this]; }
            set { Fields.PlaceImportBy[this] = value; }
        }

        [DisplayName("Place Import Date"), Expression("jPlace.[ImportDate]")]
        public DateTime? PlaceImportDate
        {
            get { return Fields.PlaceImportDate[this]; }
            set { Fields.PlaceImportDate[this] = value; }
        }

        [DisplayName("CertificateNo"), NotNull]
        public String CertificateNo
        {
            get { return Fields.CertificateNo[this]; }
            set { Fields.CertificateNo[this] = value; }
        }
        [DisplayName("Certificate Date"),DisplayFormat(BasicConst.DateFormatShow)]
        public DateTime? CertificateDate
        {
            get { return Fields.CertificateDate[this]; }
            set { Fields.CertificateDate[this] = value; }
        }
        [DisplayName("Certificate City"), ForeignKey("[dbo].[tblCity]", "Id"), LeftJoin("cCity"), TextualField("CityName")]
        [LookupEditor(typeof(TblCityRow), InplaceAdd = true, InplaceAddPermission = "General", DialogType = "ECNET.Office.TblCityDialog")]//Thêm
        public Int32? CertificateCity
        {
            get { return Fields.CertificateCity[this]; }
            set { Fields.CertificateCity[this] = value; }
        }
        [DisplayName("Items"), MasterDetailRelation(foreignKey: "ContractId"), NotMapped]
        public List<TblContractItemsRow> ListDetail
        {
            get { return Fields.ListDetail[this]; }
            set { Fields.ListDetail[this] = value; }
        }
        [DisplayName("Schedule"), MasterDetailRelation(foreignKey: "ContractId"), NotMapped]
        public List<TblContractScheduleRow> ListSchedule
        {
            get { return Fields.ListSchedule[this]; }
            set { Fields.ListSchedule[this] = value; }
        }

        [DisplayName("ECPayCompanyName"), Size(256), NotNull, DefaultValue("CÔNG TY CỔ PHẦN GIẢI PHÁP THANH TOÁN ĐIỆN LỰC VÀ VIỄN THÔNG")]
        public String ECPayCompanyName
        {
            get { return Fields.ECPayCompanyName[this]; }
            set { Fields.ECPayCompanyName[this] = value; }
        }
        [DisplayName("ECPayAddress"), Size(1000), NotNull, DefaultValue("Tầng 6, tòa nhà ANNA, Công viên phần mềm Quang Trung, Phường Tân Chánh Hiệp, Quận 12, Thành phố Hồ Chí Minh, Việt Nam")]
        public String ECPayAddress
        {
            get { return Fields.ECPayAddress[this]; }
            set { Fields.ECPayAddress[this] = value; }
        }
        [DisplayName("ECPayPhone"), Size(11),DefaultValue("02822234433")]
        public String ECPayPhone
        {
            get { return Fields.ECPayPhone[this]; }
            set { Fields.ECPayPhone[this] = value; }
        }
        [DisplayName("ECPayBankNo"), Size(50),DefaultValue("2221 0000 936 865")]
        public String ECPayBankNo
        {
            get { return Fields.ECPayBankNo[this]; }
            set { Fields.ECPayBankNo[this] = value; }
        }
        [DisplayName("ECPayBankName"), Size(256),DefaultValue("Ngân hàng TMCP Đầu tư và phát triển Việt Nam, (BIDV) - CN Thanh Xuân - Hà Nội")]
        public String ECPayBankName
        {
            get { return Fields.ECPayBankName[this]; }
            set { Fields.ECPayBankName[this] = value; }
        }
        [DisplayName("ECPayBankNameBranch"), Size(256)]
        public String ECPayBankNameBranch
        {
            get { return Fields.ECPayBankNameBranch[this]; }
            set { Fields.ECPayBankNameBranch[this] = value; }
        }
        [DisplayName("ContractName"), Size(128), NotNull]
        public String ContractName
        {
            get { return Fields.ContractName[this]; }
            set { Fields.ContractName[this] = value; }
        }

        [DisplayName("Status"), LookupInclude]
        public Status? Status
        {
            get { return (Status?)Fields.Status[this]; }
            set { Fields.Status[this] =(Int32) value; }
        }

        [DisplayName("Paid"), Size(18), Scale(0), CurrencyFormatter(CultureName = "vi-VI", CurrencyName = "VND")]
        public Decimal? Paid
        {
            get { return Fields.Paid[this]; }
            set { Fields.Paid[this] = value; }
        }
        [DisplayName("RemainAmt"), Expression("(t0.[TotalContractAmt] - t0.[Paid])")]
        [AlignRight, Size(18), Scale(0), CurrencyFormatter(CultureName = "vi-VI", CurrencyName = "VND"), MinSelectLevel(SelectLevel.List)]
        public Decimal? RemainAmt
        {
            get { return Fields.RemainAmt[this]; }
            set { Fields.RemainAmt[this] = value; }
        }
        [DisplayName("YearCancel")]
        public Int32? YearCancel
        {
            get { return Fields.YearCancel[this]; }
            set { Fields.YearCancel[this] = value; }
        }

        [DisplayName("YearFixPrice")]
        public Int32? YearFixPrice
        {
            get { return Fields.YearFixPrice[this]; }
            set { Fields.YearFixPrice[this] = value; }
        }

        [DisplayName("YearBeginRedeal")]
        public Int32? YearBeginRedeal
        {
            get { return Fields.YearBeginRedeal[this]; }
            set { Fields.YearBeginRedeal[this] = value; }
        }

        [DisplayName("RecurringPayment")]
        public Int32? RecurringPayment
        {
            get { return Fields.RecurringPayment[this]; }
            set { Fields.RecurringPayment[this] = value; }
        }
        [DisplayName("EndDate"), DefaultValue("now")]
        public DateTime? EndDate
        {
            get { return Fields.EndDate[this]; }
            set { Fields.EndDate[this] = value; }
        }
        [DisplayName("ContractAmtString"), Size(300)]
        public String ContractAmtString
        {
            get { return Fields.ContractAmtString[this]; }
            set { Fields.ContractAmtString[this] = value; }
        }
        [DisplayName("Is Completed")]
        public Boolean? IsCompleted
        {
            get { return Fields.IsCompleted[this]; }
            set { Fields.IsCompleted[this] = value; }
        }
        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.No; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public TblContractRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField NameOfOwner;
            public StringField PhoneOfOwner;
            public DateTimeField DateSign;
            public Int32Field TypeId;
            public StringField FileContractUpload;
            public StringField File1;
            public StringField File2;
            public StringField File3;
            public StringField File4;
            public StringField File5;
            public StringField File6;
            public StringField File7;
            public StringField CreatedBy;
            public DateTimeField CreatedDate;
            public StringField UpdatedBy;
            public DateTimeField UpdatedDate;
            public Int32Field PlaceId;
            public StringField IdentifyNo;
            public Int32Field IdentifyType;
            public StringField AddressOfOwner;
            public StringField CurrentAddressOfOwner;
            public StringField AddressOfOwner2nd;
            public StringField CurrentAddressOfOwner2nd;
            public StringField EmailOfOwner;
            public StringField NameOfOwner2nd;
            public StringField PhoneOfOwner2nd;
            public StringField IdentifyNo2nd;
            public Int32Field IdentifyType2nd;
            public StringField AccountBankNo;
            public StringField BankName;
            public StringField AccountName;
            public StringField WalletNo;
            public StringField WalletName;
            public StringField No;
            public Int32Field Month;
            public StringField Remark1;
            public StringField Remark2;
            public StringField Remark3;
            public StringField Remark4;
            public StringField Remark5;
            public DateTimeField FromDate;
            public DateTimeField ToDate;
            public Int32Field BuyOrRent;
            public DecimalField ContractAmt;
            public DecimalField TotalArea;
            public DateTimeField ReleaseDate;
            public DateTimeField BeginDate;
            public Int32Field PaymentMethod;
            public Int32Field CityId;
            public Int32Field DistrictId;
            public Int32Field WardsId;
            public StringField EcPayPerson;
            public StringField EcPayPosition;
            public StringField EcPayAuthorityNo;
            public DateTimeField EcPayAuthorityDate;


            

            public StringField TypeTypeName;
            public StringField TypeDescription;
            public StringField TypePersonSign;
            public StringField TypePersonPosition;
            public StringField TypePersonAuthorityNo;
            public StringField TypeRemark1;
            public StringField TypeRemark2;
            public StringField TypeRemark3;
            public StringField TypeRemark4;
            public StringField TypeRemark5;

            public StringField PlaceCode;
            public DecimalField PlaceWidth;
            public DecimalField PlaceLength;
            public DecimalField PlaceTotalArea;
            public Int32Field PlaceTotalCustomer;
            public StringField PlaceLinkGoogleMap;
            public StringField PlaceAddress;
            public Int32Field PlaceCityId;
            public Int32Field PlaceDistrictId;
            public Int32Field PlaceContractId;
            public StringField PlaceCreatedBy;
            public DateTimeField PlaceCreatedDate;
            public DateTimeField PlaceUpdateDate;
            public StringField PlaceUpdatedBy;
            public TimeSpanField PlaceTimeOpenFrom;
            public TimeSpanField PlaceTimeOpenTo;
            public TimeSpanField PlaceTimeOpening;
            public DateTimeField PlaceTimeOpeningDate;
            public Int32Field PlaceStatus;
            public Int32Field PlaceWardsId;
            public Int32Field PlaceType;
            public StringField PlaceNote;
            public DecimalField PlaceTotalAreaUse;
            public StringField PlaceNameOfOwner;
            public StringField PlacePhoneOfOwner;
            public StringField PlaceDescription;
            public Int32Field PlaceMonthRent;
            public DecimalField PlacePriceRent;
            public DecimalField PlacePriceBuy;
            public Int32Field PlaceRequireDeposit;
            public DecimalField PlaceRequireDepositAmt;
            public DateTimeField PlaceRequireDateDeposit;
            public Int32Field PlaceHasDeposit;
            public Int32Field PlaceDeposit;
            public DecimalField PlaceDepositAmt;
            public DateTimeField PlaceDateDeposit;
            public StringField PlaceEmployeePicName;
            public StringField PlaceEmployeePicCode;
            public StringField PlaceEmployeePicEmail;
            public StringField PlaceEmployeePicPhone;
            public StringField PlaceEmployeePicWalletNo;
            public Int32Field PlaceBranchIdPic;
            public Int32Field PlaceAreaIdPic;
            public StringField PlaceBatchNo;
            public StringField PlaceImportBy;
            public DateTimeField PlaceImportDate;



            public StringField CertificateNo;
            public DateTimeField CertificateDate;
            public Int32Field CertificateCity;
            public readonly RowListField<TblContractItemsRow> ListDetail;
            public readonly RowListField<TblContractScheduleRow> ListSchedule;

            public Int32Field Status;
            public Int32Field YearCancel;
            public Int32Field YearFixPrice;
            public Int32Field YearBeginRedeal;
            public Int32Field RecurringPayment;
            public DecimalField Paid;
            public StringField ECPayCompanyName;
            public StringField ECPayAddress;
            public StringField ECPayPhone;
            public StringField ECPayBankNo;
            public StringField ECPayBankName;
            public StringField ECPayBankNameBranch; 
            public StringField ContractName;
            public DecimalField RemainAmt;
            public DateTimeField EndDate;
            public StringField ContractAmtString;
            public DecimalField TotalContractAmt;
            public BooleanField IsCompleted;

        }
    }
}
