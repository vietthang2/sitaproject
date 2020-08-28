
namespace ECNET.Office.Entities
{
    using ECNET.Administration;
    using ECNET.Web.Modules.Office.Common;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Office"), TableName("[dbo].[tblContractSchedule]")]
    [DisplayName("Tbl Contract Schedule"), InstanceName("Tbl Contract Schedule")]
    [ReadPermission(PermissionKeys.ContractSchedule.View)]
    [ModifyPermission(PermissionKeys.ContractSchedule.Modify)]
    [LookupScript("dbo.tblContractSchedule", Permission = "*")]//add thêm
    public sealed class TblContractScheduleRow : Row, IIdRow,INameRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Contarct"),  ForeignKey("[dbo].[tblContract]", "Id"), LeftJoin("jContarct"), TextualField("ContarctNameOfOwner")]
        [LookupEditor(typeof(TblContractRow))]
        public Int32? ContractId
        {
            get { return Fields.ContractId[this]; }
            set { Fields.ContractId[this] = value; }
        }

        [DisplayName("Times"), NotNull]
        public Int32? Times
        {
            get { return Fields.Times[this]; }
            set { Fields.Times[this] = value; }
        }

        [DisplayName("Amount"), NotNull, Size(18), Scale(0), CurrencyFormatter(CultureName = "vi-VI", CurrencyName = "VND")]
        public Decimal? Amount
        {
            get { return Fields.Amount[this]; }
            set { Fields.Amount[this] = value; }
        }

        [DisplayName("Date"), NotNull,DisplayFormat(BasicConst.DateFormatShow)]
        public DateTime? Date
        {
            get { return Fields.Date[this]; }
            set { Fields.Date[this] = value; }
        }

        [DisplayName("Contarct Name Of Owner"), Expression("jContarct.[NameOfOwner]")]
        public String ContarctNameOfOwner
        {
            get { return Fields.ContarctNameOfOwner[this]; }
            set { Fields.ContarctNameOfOwner[this] = value; }
        }

        [DisplayName("Contarct Phone Of Owner"), Expression("jContarct.[PhoneOfOwner]")]
        public String ContarctPhoneOfOwner
        {
            get { return Fields.ContarctPhoneOfOwner[this]; }
            set { Fields.ContarctPhoneOfOwner[this] = value; }
        }
        [DisplayName("Contract No"), Expression("jContarct.[No]"), MinSelectLevel(SelectLevel.Always)]
        public String ContractNo
        {
            get { return Fields.ContractNo[this]; }
            set { Fields.ContractNo[this] = value; }
        }

        [DisplayName("Contarct Date Sign"), Expression("jContarct.[DateSign]")]
        public DateTime? ContarctDateSign
        {
            get { return Fields.ContarctDateSign[this]; }
            set { Fields.ContarctDateSign[this] = value; }
        }

        [DisplayName("Contarct Type Id"), Expression("jContarct.[TypeId]")]
        public Int32? ContarctTypeId
        {
            get { return Fields.ContarctTypeId[this]; }
            set { Fields.ContarctTypeId[this] = value; }
        }

        [DisplayName("Contarct File Contract Upload"), Expression("jContarct.[FileContractUpload]")]
        public String ContarctFileContractUpload
        {
            get { return Fields.ContarctFileContractUpload[this]; }
            set { Fields.ContarctFileContractUpload[this] = value; }
        }

        [DisplayName("Contarct File1"), Expression("jContarct.[File1]")]
        public String ContarctFile1
        {
            get { return Fields.ContarctFile1[this]; }
            set { Fields.ContarctFile1[this] = value; }
        }

        [DisplayName("Contarct File2"), Expression("jContarct.[File2]")]
        public String ContarctFile2
        {
            get { return Fields.ContarctFile2[this]; }
            set { Fields.ContarctFile2[this] = value; }
        }

        [DisplayName("Contarct File3"), Expression("jContarct.[File3]")]
        public String ContarctFile3
        {
            get { return Fields.ContarctFile3[this]; }
            set { Fields.ContarctFile3[this] = value; }
        }

        [DisplayName("Contarct File4"), Expression("jContarct.[File4]")]
        public String ContarctFile4
        {
            get { return Fields.ContarctFile4[this]; }
            set { Fields.ContarctFile4[this] = value; }
        }

        [DisplayName("Contarct File5"), Expression("jContarct.[File5]")]
        public String ContarctFile5
        {
            get { return Fields.ContarctFile5[this]; }
            set { Fields.ContarctFile5[this] = value; }
        }

        [DisplayName("Contarct File6"), Expression("jContarct.[File6]")]
        public String ContarctFile6
        {
            get { return Fields.ContarctFile6[this]; }
            set { Fields.ContarctFile6[this] = value; }
        }

        [DisplayName("Contarct File7"), Expression("jContarct.[File7]")]
        public String ContarctFile7
        {
            get { return Fields.ContarctFile7[this]; }
            set { Fields.ContarctFile7[this] = value; }
        }

        [DisplayName("Contarct Created By"), Expression("jContarct.[CreatedBy]")]
        public String ContarctCreatedBy
        {
            get { return Fields.ContarctCreatedBy[this]; }
            set { Fields.ContarctCreatedBy[this] = value; }
        }

        [DisplayName("Contarct Created Date"), Expression("jContarct.[CreatedDate]")]
        public DateTime? ContarctCreatedDate
        {
            get { return Fields.ContarctCreatedDate[this]; }
            set { Fields.ContarctCreatedDate[this] = value; }
        }

        [DisplayName("Contarct Updated By"), Expression("jContarct.[UpdatedBy]")]
        public String ContarctUpdatedBy
        {
            get { return Fields.ContarctUpdatedBy[this]; }
            set { Fields.ContarctUpdatedBy[this] = value; }
        }

        [DisplayName("Contarct Updated Date"), Expression("jContarct.[UpdatedDate]")]
        public DateTime? ContarctUpdatedDate
        {
            get { return Fields.ContarctUpdatedDate[this]; }
            set { Fields.ContarctUpdatedDate[this] = value; }
        }

        [DisplayName("Contarct Place Id"), Expression("jContarct.[PlaceId]")]
        public Int32? ContarctPlaceId
        {
            get { return Fields.ContarctPlaceId[this]; }
            set { Fields.ContarctPlaceId[this] = value; }
        }

        [DisplayName("Contarct Identify No"), Expression("jContarct.[IdentifyNo]")]
        public String ContractIdentifyNo
        {
            get { return Fields.ContractIdentifyNo[this]; }
            set { Fields.ContractIdentifyNo[this] = value; }
        }

        [DisplayName("Contarct Identify Type"), Expression("jContarct.[IdentifyType]")]
        public Int32? ContractIdentifyType
        {
            get { return Fields.ContractIdentifyType[this]; }
            set { Fields.ContractIdentifyType[this] = value; }
        }

        [DisplayName("Contarct Address Of Owner"), Expression("jContarct.[AddressOfOwner]")]
        public String ContarctAddressOfOwner
        {
            get { return Fields.ContarctAddressOfOwner[this]; }
            set { Fields.ContarctAddressOfOwner[this] = value; }
        }

        [DisplayName("Contarct Current Address Of Owner"), Expression("jContarct.[CurrentAddressOfOwner]")]
        public String ContarctCurrentAddressOfOwner
        {
            get { return Fields.ContarctCurrentAddressOfOwner[this]; }
            set { Fields.ContarctCurrentAddressOfOwner[this] = value; }
        }

        [DisplayName("Contarct Email Of Owner"), Expression("jContarct.[EmailOfOwner]")]
        public String ContarctEmailOfOwner
        {
            get { return Fields.ContarctEmailOfOwner[this]; }
            set { Fields.ContarctEmailOfOwner[this] = value; }
        }

        [DisplayName("Contarct Name Of Owner2nd"), Expression("jContarct.[NameOfOwner2nd]")]
        public String ContarctNameOfOwner2nd
        {
            get { return Fields.ContarctNameOfOwner2nd[this]; }
            set { Fields.ContarctNameOfOwner2nd[this] = value; }
        }

        [DisplayName("Contarct Phone Of Owner2nd"), Expression("jContarct.[PhoneOfOwner2nd]")]
        public String ContarctPhoneOfOwner2nd
        {
            get { return Fields.ContarctPhoneOfOwner2nd[this]; }
            set { Fields.ContarctPhoneOfOwner2nd[this] = value; }
        }

        [DisplayName("Contarct Identify No2nd"), Expression("jContarct.[IdentifyNo2nd]")]
        public String ContractIdentifyNo2nd
        {
            get { return Fields.ContractIdentifyNo2nd[this]; }
            set { Fields.ContractIdentifyNo2nd[this] = value; }
        }

        [DisplayName("Contarct Identify Type2nd"), Expression("jContarct.[IdentifyType2nd]")]
        public Int32? ContractIdentifyType2nd
        {
            get { return Fields.ContractIdentifyType2nd[this]; }
            set { Fields.ContractIdentifyType2nd[this] = value; }
        }

        [DisplayName("Contarct Account Bank No"), Expression("jContarct.[AccountBankNo]")]
        public String ContarctAccountBankNo
        {
            get { return Fields.ContarctAccountBankNo[this]; }
            set { Fields.ContarctAccountBankNo[this] = value; }
        }

        [DisplayName("Contarct Bank Name"), Expression("jContarct.[BankName]")]
        public String ContarctBankName
        {
            get { return Fields.ContarctBankName[this]; }
            set { Fields.ContarctBankName[this] = value; }
        }

        [DisplayName("Contarct Account Name"), Expression("jContarct.[AccountName]")]
        public String ContarctAccountName
        {
            get { return Fields.ContarctAccountName[this]; }
            set { Fields.ContarctAccountName[this] = value; }
        }

        [DisplayName("Contarct Wallet No"), Expression("jContarct.[WalletNo]")]
        public String ContarctWalletNo
        {
            get { return Fields.ContarctWalletNo[this]; }
            set { Fields.ContarctWalletNo[this] = value; }
        }

        [DisplayName("Contarct Wallet Name"), Expression("jContarct.[WalletName]")]
        public String ContarctWalletName
        {
            get { return Fields.ContarctWalletName[this]; }
            set { Fields.ContarctWalletName[this] = value; }
        }

        [DisplayName("Contarct No"), Expression("jContarct.[No]"), QuickSearch, LookupInclude]
        public String ContarctNo
        {
            get { return Fields.ContarctNo[this]; }
            set { Fields.ContarctNo[this] = value; }
        }

        [DisplayName("Contarct Month"), Expression("jContarct.[Month]")]
        public Int32? ContarctMonth
        {
            get { return Fields.ContarctMonth[this]; }
            set { Fields.ContarctMonth[this] = value; }
        }

        [DisplayName("Contarct Remark1"), Expression("jContarct.[Remark1]")]
        public String ContarctRemark1
        {
            get { return Fields.ContarctRemark1[this]; }
            set { Fields.ContarctRemark1[this] = value; }
        }

        [DisplayName("Contarct Remark2"), Expression("jContarct.[Remark2]")]
        public String ContarctRemark2
        {
            get { return Fields.ContarctRemark2[this]; }
            set { Fields.ContarctRemark2[this] = value; }
        }

        [DisplayName("Contarct Remark3"), Expression("jContarct.[Remark3]")]
        public String ContarctRemark3
        {
            get { return Fields.ContarctRemark3[this]; }
            set { Fields.ContarctRemark3[this] = value; }
        }

        [DisplayName("Contarct Remark4"), Expression("jContarct.[Remark4]")]
        public String ContarctRemark4
        {
            get { return Fields.ContarctRemark4[this]; }
            set { Fields.ContarctRemark4[this] = value; }
        }

        [DisplayName("Contarct Remark5"), Expression("jContarct.[Remark5]")]
        public String ContarctRemark5
        {
            get { return Fields.ContarctRemark5[this]; }
            set { Fields.ContarctRemark5[this] = value; }
        }

        [DisplayName("Contarct From Date"), Expression("jContarct.[FromDate]")]
        public DateTime? ContarctFromDate
        {
            get { return Fields.ContarctFromDate[this]; }
            set { Fields.ContarctFromDate[this] = value; }
        }

        [DisplayName("Contarct To Date"), Expression("jContarct.[ToDate]")]
        public DateTime? ContarctToDate
        {
            get { return Fields.ContarctToDate[this]; }
            set { Fields.ContarctToDate[this] = value; }
        }

        [DisplayName("Contarct Buy Or Rent"), Expression("jContarct.[BuyOrRent]")]
        public Int32? ContarctBuyOrRent
        {
            get { return Fields.ContarctBuyOrRent[this]; }
            set { Fields.ContarctBuyOrRent[this] = value; }
        }

        [DisplayName("Contarct Contract Amt"), Expression("jContarct.[ContractAmt]")]
        public Decimal? ContarctContractAmt
        {
            get { return Fields.ContarctContractAmt[this]; }
            set { Fields.ContarctContractAmt[this] = value; }
        }

        [DisplayName("Contarct Total Area"), Expression("jContarct.[TotalArea]")]
        public Decimal? ContarctTotalArea
        {
            get { return Fields.ContarctTotalArea[this]; }
            set { Fields.ContarctTotalArea[this] = value; }
        }

        [DisplayName("Contarct Release Date"), Expression("jContarct.[ReleaseDate]")]
        public DateTime? ContarctReleaseDate
        {
            get { return Fields.ContarctReleaseDate[this]; }
            set { Fields.ContarctReleaseDate[this] = value; }
        }

        [DisplayName("Contarct Begin Date"), Expression("jContarct.[BeginDate]")]
        public DateTime? ContarctBeginDate
        {
            get { return Fields.ContarctBeginDate[this]; }
            set { Fields.ContarctBeginDate[this] = value; }
        }

        [DisplayName("Contarct Payment Method"), Expression("jContarct.[PaymentMethod]")]
        public Int32? ContarctPaymentMethod
        {
            get { return Fields.ContarctPaymentMethod[this]; }
            set { Fields.ContarctPaymentMethod[this] = value; }
        }

        [DisplayName("Contarct City Id"), Expression("jContarct.[CityId]")]
        public Int32? ContarctCityId
        {
            get { return Fields.ContarctCityId[this]; }
            set { Fields.ContarctCityId[this] = value; }
        }

        [DisplayName("Contarct District Id"), Expression("jContarct.[DistrictId]")]
        public Int32? ContarctDistrictId
        {
            get { return Fields.ContarctDistrictId[this]; }
            set { Fields.ContarctDistrictId[this] = value; }
        }

        [DisplayName("Contarct Ec Pay Person"), Expression("jContarct.[ECPayPerson]")]
        public String ContarctEcPayPerson
        {
            get { return Fields.ContarctEcPayPerson[this]; }
            set { Fields.ContarctEcPayPerson[this] = value; }
        }

        [DisplayName("Contarct Ec Pay Position"), Expression("jContarct.[ECPayPosition]")]
        public String ContarctEcPayPosition
        {
            get { return Fields.ContarctEcPayPosition[this]; }
            set { Fields.ContarctEcPayPosition[this] = value; }
        }

        [DisplayName("Contarct Ec Pay Authority No"), Expression("jContarct.[ECPayAuthorityNo]")]
        public String ContarctEcPayAuthorityNo
        {
            get { return Fields.ContarctEcPayAuthorityNo[this]; }
            set { Fields.ContarctEcPayAuthorityNo[this] = value; }
        }

        [DisplayName("Contarct Ec Pay Authority Date"), Expression("jContarct.[ECPayAuthorityDate]")]
        public DateTime? ContarctEcPayAuthorityDate
        {
            get { return Fields.ContarctEcPayAuthorityDate[this]; }
            set { Fields.ContarctEcPayAuthorityDate[this] = value; }
        }

        [DisplayName("Contarct Wards Id"), Expression("jContarct.[WardsId]")]
        public Int32? ContarctWardsId
        {
            get { return Fields.ContarctWardsId[this]; }
            set { Fields.ContarctWardsId[this] = value; }
        }

        [DisplayName("Contarct Address Of Owner2nd"), Expression("jContarct.[AddressOfOwner2nd]")]
        public String ContarctAddressOfOwner2nd
        {
            get { return Fields.ContarctAddressOfOwner2nd[this]; }
            set { Fields.ContarctAddressOfOwner2nd[this] = value; }
        }

        [DisplayName("Contarct Current Address Of Owner2nd"), Expression("jContarct.[CurrentAddressOfOwner2nd]")]
        public String ContarctCurrentAddressOfOwner2nd
        {
            get { return Fields.ContarctCurrentAddressOfOwner2nd[this]; }
            set { Fields.ContarctCurrentAddressOfOwner2nd[this] = value; }
        }

        [DisplayName("Contarct Address"), Expression("jContarct.[Address]")]
        public String ContarctAddress
        {
            get { return Fields.ContarctAddress[this]; }
            set { Fields.ContarctAddress[this] = value; }
        }

        [DisplayName("Contarct Certificate No"), Expression("jContarct.[CertificateNo]")]
        public String ContarctCertificateNo
        {
            get { return Fields.ContarctCertificateNo[this]; }
            set { Fields.ContarctCertificateNo[this] = value; }
        }

        [DisplayName("Contarct Certificate Date"), Expression("jContarct.[CertificateDate]")]
        public DateTime? ContarctCertificateDate
        {
            get { return Fields.ContarctCertificateDate[this]; }
            set { Fields.ContarctCertificateDate[this] = value; }
        }

        [DisplayName("Contarct Certificate City"), Expression("jContarct.[CertificateCity]")]
        public Int32? ContarctCertificateCity
        {
            get { return Fields.ContarctCertificateCity[this]; }
            set { Fields.ContarctCertificateCity[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }
        StringField INameRow.NameField
        {
            get { return Fields.ContarctNameOfOwner; }
        }
        public static readonly RowFields Fields = new RowFields().Init();

        public TblContractScheduleRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field ContractId;
            public Int32Field Times;
            public DecimalField Amount;
            public DateTimeField Date;

            public StringField ContarctNo;
            public StringField ContarctNameOfOwner;
            public StringField ContarctPhoneOfOwner;
            public DateTimeField ContarctDateSign;
            public Int32Field ContarctTypeId;
            public StringField ContarctFileContractUpload;
            public StringField ContarctFile1;
            public StringField ContarctFile2;
            public StringField ContarctFile3;
            public StringField ContarctFile4;
            public StringField ContarctFile5;
            public StringField ContarctFile6;
            public StringField ContarctFile7;
            public StringField ContarctCreatedBy;
            public DateTimeField ContarctCreatedDate;
            public StringField ContarctUpdatedBy;
            public DateTimeField ContarctUpdatedDate;
            public Int32Field ContarctPlaceId;
            public StringField ContractIdentifyNo;
            public Int32Field ContractIdentifyType;
            public StringField ContarctAddressOfOwner;
            public StringField ContarctCurrentAddressOfOwner;
            public StringField ContarctEmailOfOwner;
            public StringField ContarctNameOfOwner2nd;
            public StringField ContarctPhoneOfOwner2nd;
            public StringField ContractIdentifyNo2nd;
            public Int32Field ContractIdentifyType2nd;
            public StringField ContarctAccountBankNo;
            public StringField ContarctBankName;
            public StringField ContarctAccountName;
            public StringField ContarctWalletNo;
            public StringField ContarctWalletName;
            public StringField ContractNo;
            public Int32Field ContarctMonth;
            public StringField ContarctRemark1;
            public StringField ContarctRemark2;
            public StringField ContarctRemark3;
            public StringField ContarctRemark4;
            public StringField ContarctRemark5;
            public DateTimeField ContarctFromDate;
            public DateTimeField ContarctToDate;
            public Int32Field ContarctBuyOrRent;
            public DecimalField ContarctContractAmt;
            public DecimalField ContarctTotalArea;
            public DateTimeField ContarctReleaseDate;
            public DateTimeField ContarctBeginDate;
            public Int32Field ContarctPaymentMethod;
            public Int32Field ContarctCityId;
            public Int32Field ContarctDistrictId;
            public StringField ContarctEcPayPerson;
            public StringField ContarctEcPayPosition;
            public StringField ContarctEcPayAuthorityNo;
            public DateTimeField ContarctEcPayAuthorityDate;
            public Int32Field ContarctWardsId;
            public StringField ContarctAddressOfOwner2nd;
            public StringField ContarctCurrentAddressOfOwner2nd;
            public StringField ContarctAddress;
            public StringField ContarctCertificateNo;
            public DateTimeField ContarctCertificateDate;
            public Int32Field ContarctCertificateCity;
        }
    }
}
