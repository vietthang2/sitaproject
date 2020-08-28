
namespace ECNET.Office.Entities
{
    using ECNET.Administration;
    using ECNET.Modules.Common.BaseClass;
    using ECNET.Web.Modules.Office.Common;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    
    using System.IO;
    [ConnectionKey("Default"), Module("Office"), TableName("[dbo].[tblPlaceOfBussiness]")]
    [DisplayName("Place"), InstanceName("Place")]
    
    [ReadPermission(PermissionKeys.Place.View)]
    [ModifyPermission(PermissionKeys.Place.Modify)]
    [DeletePermission(PermissionKeys.Place.Delete)]
    [LookupScript("dbo.tblPlaceOfBussiness", Permission = "*", Expiration = -1)]//add thêm
    public sealed class TblPlaceOfBussinessRow : Row, IIdRow, INameRow, IAuditLog
    {
        [DisplayName("Id"), Identity, LookupInclude]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Code"), Size(50), NotNull, QuickSearch, LookupInclude, Unique]
        public String Code
        {
            get { return Fields.Code[this]; }
            set { Fields.Code[this] = value; }
        }

        [DisplayName("Width"), Size(18), Scale(2),NotNull, DisplayFormat(BasicConst.NumberFormat2), MaxLength(8), QuickSearch]
        public Decimal? Width
        {
            get { return Fields.Width[this]; }
            set { Fields.Width[this] = value; }
        }

        [DisplayName("Length"), Size(18), Scale(2), DisplayFormat(BasicConst.NumberFormat2), MaxLength(8), QuickSearch]
        public Decimal? Length
        {
            get { return Fields.Length[this]; }
            set { Fields.Length[this] = value; }
        }

        [DisplayName("Total Area"), Size(18), Scale(2), DisplayFormat(BasicConst.NumberFormat2), MaxLength(8), NotNull, LookupInclude, QuickSearch]
        public Decimal? TotalArea
        {
            get { return Fields.TotalArea[this]; }
            set { Fields.TotalArea[this] = value; }
        }

        [DisplayName("Total Customer"), NotNull]
        public TotalCustomer? TotalCustomer
        {
            get { return (TotalCustomer?)Fields.TotalCustomer[this]; }
            set { Fields.TotalCustomer[this] = (Int32)value; }
        }

        [DisplayName("Link Google Map"), Size(200)]
        public String LinkGoogleMap
        {
            get { return Fields.LinkGoogleMap[this]; }
            set { Fields.LinkGoogleMap[this] = value; }
        }

        [DisplayName("Address"), Size(500), NotNull, QuickSearch, LookupInclude]
        public String Address
        {
            get { return Fields.Address[this]; }
            set { Fields.Address[this] = value; }
        }

        [DisplayName("City"), ForeignKey("[dbo].[tblCity]", "Id"), LeftJoin("jCity"), TextualField("CityName"), NotNull, LookupInclude]
        [LookupEditor(typeof(TblCityRow))]//Thêm
        public Int32? CityId
        {
            get { return Fields.CityId[this]; }
            set { Fields.CityId[this] = value; }
        }
        [DisplayName("Area"), ForeignKey("[dbo].[tblArea]", "Id"), LeftJoin("jArea"), TextualField("Name"), LookupInclude]
        [LookupEditor(typeof(TblAreaRow))]//Thêm
        public Int32? AreaIdPic
        {
            get { return Fields.CityId[this]; }
            set { Fields.CityId[this] = value; }
        }
        [DisplayName("District"), ForeignKey("[dbo].[tblDistrict]", "Id"), LeftJoin("jDistrict"), TextualField("DistrictName"), NotNull,LookupInclude]
        public Int32? DistrictId
        {
            get { return Fields.DistrictId[this]; }
            set { Fields.DistrictId[this] = value; }
        }


        [DisplayName("Contract"), ForeignKey("[dbo].[tblContract]", "Id"), LeftJoin("jContract"), TextualField("ContractNameOfOwner"), LookupInclude]
        public Int32? ContractId
        {
            get { return Fields.ContractId[this]; }
            set { Fields.ContractId[this] = value; }
        }

        [DisplayName("Created By"), Size(30)]
        [Hidden]
        public String CreatedBy
        {
            get { return Fields.CreatedBy[this]; }
            set { Fields.CreatedBy[this] = value; }
        }

        [DisplayName("Created Date"), DisplayFormat(BasicConst.DateFormatShow)]
        [Hidden]
        public DateTime? CreatedDate
        {
            get { return Fields.CreatedDate[this]; }
            set { Fields.CreatedDate[this] = value; }
        }

        [DisplayName("Update Date"), DisplayFormat(BasicConst.DateFormatShow)]
        [Hidden]
        public DateTime? UpdateDate
        {
            get { return Fields.UpdateDate[this]; }
            set { Fields.UpdateDate[this] = value; }
        }

        [DisplayName("Updated By"), Size(30)]
        [Hidden]
        public String UpdatedBy
        {
            get { return Fields.UpdatedBy[this]; }
            set { Fields.UpdatedBy[this] = value; }
        }

        [DisplayName("Time Open From")]
        public TimeSpan? TimeOpenFrom
        {
            get { return Fields.TimeOpenFrom[this]; }
            set { Fields.TimeOpenFrom[this] = value; }
        }

        [DisplayName("Time Open To")]
        public TimeSpan? TimeOpenTo
        {
            get { return Fields.TimeOpenTo[this]; }
            set { Fields.TimeOpenTo[this] = value; }
        }

        [DisplayName("Time Opening")]
        public TimeSpan? TimeOpening
        {
            get { return Fields.TimeOpening[this]; }
            set { Fields.TimeOpening[this] = value; }
        }

        [DisplayName("Time Opening Date")]
        public DateTime? TimeOpeningDate
        {
            get { return Fields.TimeOpeningDate[this]; }
            set { Fields.TimeOpeningDate[this] = value; }
        }

        [DisplayName("Status"),LookupInclude]
        [HideOnInsert]
        public Status? Status
        {
            get { return (Status?)Fields.Status[this]; }
            set { Fields.Status[this] = (Int32)value; }
        }

        [DisplayName("Wards"), NotNull, ForeignKey("[dbo].[tblWards]", "Id"), LeftJoin("jWards"), TextualField("WardsName"), LookupInclude]
        public Int32? WardsId
        {
            get { return Fields.WardsId[this]; }
            set { Fields.WardsId[this] = value; }
        }

        [DisplayName("Type"), NotNull, LookupInclude]
        public TypeOfPlace? Type
        {
            get { return (TypeOfPlace?)Fields.Type[this]; }
            set { Fields.Type[this] = (Int32?)value; }
        }

        [DisplayName("Note"), Size(500)]
        public String Note
        {
            get { return Fields.Note[this]; }
            set { Fields.Note[this] = value; }
        }

        [DisplayName("Total Area Use"), Size(18), Scale(2), QuickSearch, NotNull, MaxLength(8), DisplayFormat(BasicConst.NumberFormat2), LookupInclude]
        public Decimal? TotalAreaUse
        {
            get { return Fields.TotalAreaUse[this]; }
            set { Fields.TotalAreaUse[this] = value; }
        }

        [DisplayName("Name Of Owner"), Size(50), NotNull]
        public String NameOfOwner
        {
            get { return Fields.NameOfOwner[this]; }
            set { Fields.NameOfOwner[this] = value; }
        }

        [DisplayName("Phone Of Owner"), Size(20)]
        public String PhoneOfOwner
        {
            get { return Fields.PhoneOfOwner[this]; }
            set { Fields.PhoneOfOwner[this] = value; }
        }

        [DisplayName("Description"), Size(100) , NotNull, LookupInclude]
        public String Description
        {
            get { return Fields.Description[this]; }
            set { Fields.Description[this] = value; }
        }

        [DisplayName("Month Rent"), LookupInclude]
        public Int32? MonthRent
        {
            get { return Fields.MonthRent[this]; }
            set { Fields.MonthRent[this] = value; }
        }

        [DisplayName("Price Rent"), Size(18), Scale(0), CurrencyFormatter(CultureName = "vi-VI", CurrencyName = "VND")]
        public Decimal? PriceRent
        {
            get { return Fields.PriceRent[this]; }
            set { Fields.PriceRent[this] = value; }
        }

        [DisplayName("Price Buy"), Size(18), Scale(0), CurrencyFormatter(CultureName = "vi-VI", CurrencyName = "VND"), LookupInclude]
        public Decimal? PriceBuy
        {
            get { return Fields.PriceBuy[this]; }
            set { Fields.PriceBuy[this] = value; }
        }

        [DisplayName("Require Deposit"), NotNull, LookupInclude]
        public YesNo? RequireDeposit
        {
            get { return (YesNo?)Fields.RequireDeposit[this]; }
            set { Fields.RequireDeposit[this] = (Int32)value; }
        }

        [DisplayName("Require Deposit Amt"), Size(18), Scale(0), CurrencyFormatter(CultureName = "vi-VI", CurrencyName = "VND"), LookupInclude]
        public Decimal? RequireDepositAmt
        {
            get { return Fields.RequireDepositAmt[this]; }
            set { Fields.RequireDepositAmt[this] = value; }
        }

        [DisplayName("Require Date Deposit"), DisplayFormat(BasicConst.DateFormatShow)]
        public DateTime? RequireDateDeposit
        {
            get { return Fields.RequireDateDeposit[this]; }
            set { Fields.RequireDateDeposit[this] = value; }
        }

        [DisplayName("Has Deposit"), NotNull, LookupInclude]
        public YesNo? HasDeposit
        {
            get { return (YesNo?)Fields.HasDeposit[this]; }
            set { Fields.HasDeposit[this] = (Int32)value; }
        }

        [DisplayName("Deposit"), CurrencyFormatter(CultureName = "vi-VI", CurrencyName = "VND")]
        public Int32? Deposit
        {
            get { return Fields.Deposit[this]; }
            set { Fields.Deposit[this] = value; }
        }

        [DisplayName("Deposit Amt"), Size(18), Scale(0), CurrencyFormatter(CultureName = "vi-VI", CurrencyName = "VND"), LookupInclude]
        public Decimal? DepositAmt
        {
            get { return Fields.DepositAmt[this]; }
            set { Fields.DepositAmt[this] = value; }
        }

        [DisplayName("Date Deposit"), DisplayFormat(BasicConst.DateFormatShow)]
        public DateTime? DateDeposit
        {
            get { return Fields.DateDeposit[this]; }
            set { Fields.DateDeposit[this] = value; }
        }

        [DisplayName("Employee Pic Name"), Size(100)]
        
        public String EmployeePicName
        {
            get { return Fields.EmployeePicName[this]; }
            set { Fields.EmployeePicName[this] = value; }
        }

        [DisplayName("Employee Pic Code"), Size(30)]
        
        public String EmployeePicCode
        {
            get { return Fields.EmployeePicCode[this]; }
            set { Fields.EmployeePicCode[this] = value; }
        }

        [DisplayName("Employee Pic Email"), Size(100)]
        public String EmployeePicEmail
        {
            get { return Fields.EmployeePicEmail[this]; }
            set { Fields.EmployeePicEmail[this] = value; }
        }

        [DisplayName("Employee Pic Phone"), Size(30)]
        public String EmployeePicPhone
        {
            get { return Fields.EmployeePicPhone[this]; }
            set { Fields.EmployeePicPhone[this] = value; }
        }

        [DisplayName("Employee Pic Wallet No"), Size(30)]

        public String EmployeePicWalletNo
        {
            get { return Fields.EmployeePicWalletNo[this]; }
            set { Fields.EmployeePicWalletNo[this] = value; }
        }
        [DisplayName("BranchId"), ForeignKey("[dbo].[tblBranch]", "Id"), LeftJoin("jBranch"), TextualField("Name"),NotNull]
        [LookupEditor(typeof(TblBranchRow))]//Thêm
        
        public Int32? BranchIdPic
        {
            get { return Fields.BranchIdPic[this]; }
            set { Fields.BranchIdPic[this] = value; }
        }
        [DisplayName("Branch"), Expression("jBranch.[Name]")]
        

        public String BranchIdPicName
        {
            get { return Fields.BranchIdPicName[this]; }
            set { Fields.BranchIdPicName[this] = value; }
        }
        [DisplayName("City Name"), Expression("jCity.[Name]")]
        public String CityName
        {
            get { return Fields.CityName[this]; }
            set { Fields.CityName[this] = value; }
        }

        [DisplayName("City Code"), Expression("jCity.[Code]")]
        public String CityCode
        {
            get { return Fields.CityCode[this]; }
            set { Fields.CityCode[this] = value; }
        }

        [DisplayName("City En Name"), Expression("jCity.[EnName]")]
        public String CityEnName
        {
            get { return Fields.CityEnName[this]; }
            set { Fields.CityEnName[this] = value; }
        }

        [DisplayName("City Ec Code"), Expression("jCity.[ECCode]")]
        public String CityEcCode
        {
            get { return Fields.CityEcCode[this]; }
            set { Fields.CityEcCode[this] = value; }
        }

        [DisplayName("District City Id"), Expression("jDistrict.[CityId]")]
        public Int32? DistrictCityId
        {
            get { return Fields.DistrictCityId[this]; }
            set { Fields.DistrictCityId[this] = value; }
        }

        [DisplayName("District Name"), Expression("jDistrict.[Name]")]
        public String DistrictName
        {
            get { return Fields.DistrictName[this]; }
            set { Fields.DistrictName[this] = value; }
        }

        [DisplayName("District En Name"), Expression("jDistrict.[EnName]")]
        public String DistrictEnName
        {
            get { return Fields.DistrictEnName[this]; }
            set { Fields.DistrictEnName[this] = value; }
        }

        [DisplayName("District Code"), Expression("jDistrict.[Code]")]
        public String DistrictCode
        {
            get { return Fields.DistrictCode[this]; }
            set { Fields.DistrictCode[this] = value; }
        }

        [DisplayName("Contract Name Of Owner"), Expression("jContract.[NameOfOwner]")]
        public String ContractNameOfOwner
        {
            get { return Fields.ContractNameOfOwner[this]; }
            set { Fields.ContractNameOfOwner[this] = value; }
        }

        [DisplayName("Contract Phone Of Owner"), Expression("jContract.[PhoneOfOwner]")]
        public String ContractPhoneOfOwner
        {
            get { return Fields.ContractPhoneOfOwner[this]; }
            set { Fields.ContractPhoneOfOwner[this] = value; }
        }

        [DisplayName("Contract Date Sign"), Expression("jContract.[DateSign]")]
        public DateTime? ContractDateSign
        {
            get { return Fields.ContractDateSign[this]; }
            set { Fields.ContractDateSign[this] = value; }
        }

        [DisplayName("Contract Type Id"), Expression("jContract.[TypeId]")]
        public Int32? ContractTypeId
        {
            get { return Fields.ContractTypeId[this]; }
            set { Fields.ContractTypeId[this] = value; }
        }

        [DisplayName("Contract File Contract Upload"), Expression("jContract.[FileContractUpload]")]
        public String ContractFileContractUpload
        {
            get { return Fields.ContractFileContractUpload[this]; }
            set { Fields.ContractFileContractUpload[this] = value; }
        }

        [DisplayName("Contract File1"), Expression("jContract.[File1]")]
        public String ContractFile1
        {
            get { return Fields.ContractFile1[this]; }
            set { Fields.ContractFile1[this] = value; }
        }

        [DisplayName("Contract File2"), Expression("jContract.[File2]")]
        public String ContractFile2
        {
            get { return Fields.ContractFile2[this]; }
            set { Fields.ContractFile2[this] = value; }
        }

        [DisplayName("Contract File3"), Expression("jContract.[File3]")]
        public String ContractFile3
        {
            get { return Fields.ContractFile3[this]; }
            set { Fields.ContractFile3[this] = value; }
        }

        [DisplayName("Contract File4"), Expression("jContract.[File4]")]
        public String ContractFile4
        {
            get { return Fields.ContractFile4[this]; }
            set { Fields.ContractFile4[this] = value; }
        }

        [DisplayName("Contract File5"), Expression("jContract.[File5]")]
        public String ContractFile5
        {
            get { return Fields.ContractFile5[this]; }
            set { Fields.ContractFile5[this] = value; }
        }

        [DisplayName("Contract File6"), Expression("jContract.[File6]")]
        public String ContractFile6
        {
            get { return Fields.ContractFile6[this]; }
            set { Fields.ContractFile6[this] = value; }
        }

        [DisplayName("Contract File7"), Expression("jContract.[File7]")]
        public String ContractFile7
        {
            get { return Fields.ContractFile7[this]; }
            set { Fields.ContractFile7[this] = value; }
        }
        [DisplayName("Contract No"), Expression("jContract.[No]")]
        public String ContractNo
        {
            get { return Fields.ContractNo[this]; }
            set { Fields.ContractNo[this] = value; }
        }


        [DisplayName("Contract Created By"), Expression("jContract.[CreatedBy]")]
        public String ContractCreatedBy
        {
            get { return Fields.ContractCreatedBy[this]; }
            set { Fields.ContractCreatedBy[this] = value; }
        }

        [DisplayName("Contract Created Date"), Expression("jContract.[CreatedDate]")]
        public DateTime? ContractCreatedDate
        {
            get { return Fields.ContractCreatedDate[this]; }
            set { Fields.ContractCreatedDate[this] = value; }
        }

        [DisplayName("Contract Updated By"), Expression("jContract.[UpdatedBy]")]
        public String ContractUpdatedBy
        {
            get { return Fields.ContractUpdatedBy[this]; }
            set { Fields.ContractUpdatedBy[this] = value; }
        }

        [DisplayName("Contract Updated Date"), Expression("jContract.[UpdatedDate]")]
        public DateTime? ContractUpdatedDate
        {
            get { return Fields.ContractUpdatedDate[this]; }
            set { Fields.ContractUpdatedDate[this] = value; }
        }

        [DisplayName("Contract Place Id"), Expression("jContract.[PlaceId]")]
        public Int32? ContractPlaceId
        {
            get { return Fields.ContractPlaceId[this]; }
            set { Fields.ContractPlaceId[this] = value; }
        }

        [DisplayName("Wards District Id"), Expression("jWards.[DistrictId]")]
        public Int32? WardsDistrictId
        {
            get { return Fields.WardsDistrictId[this]; }
            set { Fields.WardsDistrictId[this] = value; }
        }

        [DisplayName("Wards Name"), Expression("jWards.[Name]")]
        public String WardsName
        {
            get { return Fields.WardsName[this]; }
            set { Fields.WardsName[this] = value; }
        }

        [DisplayName("Wards En Name"), Expression("jWards.[EnName]")]
        public String WardsEnName
        {
            get { return Fields.WardsEnName[this]; }
            set { Fields.WardsEnName[this] = value; }
        }

        [DisplayName("Wards Code"), Expression("jWards.[Code]")]
        public String WardsCode
        {
            get { return Fields.WardsCode[this]; }
            set { Fields.WardsCode[this] = value; }
        }
        [DisplayName("BatchNo"), Size(30)]
        public String BatchNo
        {
            get { return Fields.BatchNo[this]; }
            set { Fields.BatchNo[this] = value; }
        }
        [DisplayName("ImportBy"), Size(30)]
        public String ImportBy
        {
            get { return Fields.ImportBy[this]; }
            set { Fields.ImportBy[this] = value; }
        }
        [DisplayName("ImportDate"), DisplayFormat(BasicConst.DateFormatShow)]
        public DateTime? ImportDate
        {
            get { return Fields.ImportDate[this]; }
            set { Fields.ImportDate[this] = value; }
        }

        [DisplayName("MonthRequireDeposit")]
        public int? MonthRequireDeposit
        {
            get { return Fields.MonthRequireDeposit[this]; }
            set { Fields.MonthRequireDeposit[this] = value; }
        }

        [DisplayName("File 1"), Size(100)]
        //[FileUploadEditor(FilenameFormat = "Place/City/|CityId|/~", CopyToHistory = true, DisplayFileName = true)]
        [FileUploadEditor(FilenameFormat = "Place/|PlaceCode|/{4}", DisplayFileName = true)]
        public String File1
        {
            get { return Fields.File1[this]; }
            set { Fields.File1[this] = value; }
        }
        //[FileUploadEditor(FilenameFormat = "Place/City/|CityId|/~", CopyToHistory = true, DisplayFileName = true)]
        [FileUploadEditor(FilenameFormat = "Place/|PlaceCode|/{4}", DisplayFileName = true)]
        [DisplayName("File 2"), Size(100)]

        public String File2
        {
            get { return Fields.File2[this]; }
            set { Fields.File2[this] = value; }
        }
        //[FileUploadEditor(FilenameFormat = "Place/City/|CityId|/~", CopyToHistory = true, DisplayFileName = true)]
        [FileUploadEditor(FilenameFormat = "Place/|PlaceCode|/{4}", DisplayFileName = true)]
        [DisplayName("File 3"), Size(100)]

        public String File3
        {
            get { return Fields.File3[this]; }
            set { Fields.File3[this] = value; }
        }
        //[FileUploadEditor(FilenameFormat = "Place/City/|CityId|/~", CopyToHistory = true, DisplayFileName = true)]
        [FileUploadEditor(FilenameFormat = "Place/|PlaceCode|/{4}", DisplayFileName = true)]
        [DisplayName("File 4"), Size(100)]

        public String File4
        {
            get { return Fields.File4[this]; }
            set { Fields.File4[this] = value; }
        }
        //[FileUploadEditor(FilenameFormat = "Place/City/|CityId|/~", CopyToHistory = true, DisplayFileName = true)]
        [FileUploadEditor(FilenameFormat = "Place/|PlaceCode|/{4}", DisplayFileName = true)]
        [DisplayName("File 5"), Size(100)]

        public String File5
        {
            get { return Fields.File5[this]; }
            set { Fields.File5[this] = value; }
        }
        //[FileUploadEditor(FilenameFormat = "Place/City/|CityId|/~", CopyToHistory = true, DisplayFileName = true)]
        [FileUploadEditor(FilenameFormat = "Place/|PlaceCode|/{4}", DisplayFileName = true)]
        [DisplayName("File 6"), Size(100)]

        public String File6
        {
            get { return Fields.File6[this]; }
            set { Fields.File6[this] = value; }
        }
        //[FileUploadEditor(FilenameFormat = "Place/City/|CityId|/~", CopyToHistory = true, DisplayFileName = true)]
        [FileUploadEditor(FilenameFormat = "Place/|PlaceCode|/{4}", DisplayFileName = true)]
        [DisplayName("File 7"), Size(100)]

        public String File7
        {
            get { return Fields.File7[this]; }
            set { Fields.File7[this] = value; }
        }
        //[FileUploadEditor(FilenameFormat = "Place/City/|CityId|/~", CopyToHistory = true, DisplayFileName = true)]
        [FileUploadEditor(FilenameFormat = "Place/|PlaceCode|/{4}", DisplayFileName = true)]
        [DisplayName("File 8"), Size(100)]

        public String File8
        {
            get { return Fields.File1[this]; }
            set { Fields.File1[this] = value; }
        }
        //[FileUploadEditor(FilenameFormat = "Place/City/|CityId|/~", CopyToHistory = true, DisplayFileName = true)]
        [FileUploadEditor(FilenameFormat = "Place/|PlaceCode|/{4}", DisplayFileName = true)]
        [DisplayName("File 9"), Size(100)]

        public String File9
        {
            get { return Fields.File9[this]; }
            set { Fields.File9[this] = value; }
        }
        //[FileUploadEditor(FilenameFormat = "Place/City/|CityId|/~", CopyToHistory = true, DisplayFileName = true)]
        [FileUploadEditor(FilenameFormat = "Place/|PlaceCode|/{4}", DisplayFileName = true)]
        [DisplayName("File 10"), Size(100)]

        public String File10
        {
            get { return Fields.File10[this]; }
            set { Fields.File10[this] = value; }
        }
        [DisplayName("Door"), Size(128)]
        public String Door
        {
            get { return Fields.Door[this]; }
            set { Fields.Door[this] = value; }
        }
        [DisplayName("Ceiling"), Size(128)]
        public String Ceiling
        {
            get { return Fields.Ceiling[this]; }
            set { Fields.Ceiling[this] = value; }
        }
        [DisplayName("Wall"), Size(128)]
        public String Wall
        {
            get { return Fields.Wall[this]; }
            set { Fields.Wall[this] = value; }
        }
        [DisplayName("Floor"), Size(128)]
        public String Floor
        {
            get { return Fields.Floor[this]; }
            set { Fields.Floor[this] = value; }
        }
        [DisplayName("MonthDeposit")]
        public Int32? MonthDeposit
        {
            get { return Fields.MonthDeposit[this]; }
            set { Fields.MonthDeposit[this] = value; }
        }


        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Code; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public TblPlaceOfBussinessRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField Code;
            public DecimalField Width;
            public DecimalField Length;
            public DecimalField TotalArea;
            public Int32Field TotalCustomer;
            public StringField LinkGoogleMap;
            public StringField Address;
            public Int32Field CityId;
            public Int32Field AreaIdPic;
            
            public Int32Field DistrictId;
            public Int32Field ContractId;
            public StringField CreatedBy;
            public DateTimeField CreatedDate;
            public DateTimeField UpdateDate;
            public StringField UpdatedBy;
            public TimeSpanField TimeOpenFrom;
            public TimeSpanField TimeOpenTo;
            public TimeSpanField TimeOpening;
            public DateTimeField TimeOpeningDate;
            public Int32Field Status;
            public Int32Field WardsId;
            public Int32Field Type;
            public StringField Note;
            public DecimalField TotalAreaUse;
            public StringField NameOfOwner;
            public StringField PhoneOfOwner;
            public StringField Description;
            public Int32Field MonthRent;
            public DecimalField PriceRent;
            public DecimalField PriceBuy;
            public Int32Field RequireDeposit;
            public DecimalField RequireDepositAmt;
            public DateTimeField RequireDateDeposit;
            public Int32Field HasDeposit;
            public Int32Field Deposit;
            public DecimalField DepositAmt;
            public DateTimeField DateDeposit;
            public StringField EmployeePicName;
            public StringField EmployeePicCode;
            public StringField EmployeePicEmail;
            public StringField EmployeePicPhone;
            public StringField EmployeePicWalletNo;
            public Int32Field BranchIdPic;

            public StringField CityName;
            public StringField CityCode;
            public StringField CityEnName;
            public StringField CityEcCode;

            public Int32Field DistrictCityId;
            public StringField DistrictName;
            public StringField DistrictEnName;
            public StringField DistrictCode;

            public StringField ContractNo;
            public StringField ContractNameOfOwner;
            public StringField ContractPhoneOfOwner;
            public DateTimeField ContractDateSign;
            public Int32Field ContractTypeId;
            public StringField ContractFileContractUpload;
            public StringField ContractFile1;
            public StringField ContractFile2;
            public StringField ContractFile3;
            public StringField ContractFile4;
            public StringField ContractFile5;
            public StringField ContractFile6;
            public StringField ContractFile7;
            public StringField ContractCreatedBy;
            public DateTimeField ContractCreatedDate;
            public StringField ContractUpdatedBy;
            public DateTimeField ContractUpdatedDate;
            public Int32Field ContractPlaceId;

            public Int32Field WardsDistrictId;
            public StringField WardsName;
            public StringField WardsEnName;
            public StringField WardsCode;
            public StringField BatchNo;
            public StringField ImportBy;
            public DateTimeField ImportDate;
            public Int32Field MonthRequireDeposit;

            public StringField BranchIdPicName;
            public StringField File1;
            public StringField File2;
            public StringField File3;
            public StringField File4;
            public StringField File5;
            public StringField File6;
            public StringField File7;
            public StringField File8;
            public StringField File9;
            public StringField File10;

            public Int32Field MonthDeposit;
            public StringField Door;
            public StringField Ceiling;
            public StringField Wall;
            public StringField Floor;
         
        }
    }
}
