
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
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Office"), TableName("[dbo].[TblProject]")]
    [DisplayName("Tbl Project"), InstanceName("Tbl Project")]
    [ReadPermission(PermissionKeys.Project.View)]
    [ModifyPermission(PermissionKeys.Project.Modify)]
    [LookupScript("dbo.TblProject", Permission = "*", Expiration = -1)]//add thêm
    public sealed class TblProjectRow : Row, IIdRow, INameRow, IAuditLog
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Code"), Size(50), QuickSearch]
        public String Code
        {
            get { return Fields.Code[this]; }
            set { Fields.Code[this] = value; }
        }

        [DisplayName("Name"), Size(256), NotNull, QuickSearch]
        public String Name
        {
            get { return Fields.Name[this]; }
            set { Fields.Name[this] = value; }
        }

        [DisplayName("Innitiated Date"), DisplayFormat(BasicConst.DateFormatShow)]
        public DateTime? InnitiatedDate
        {
            get { return Fields.InnitiatedDate[this]; }
            set { Fields.InnitiatedDate[this] = value; }
        }

        [DisplayName("From Date"), DisplayFormat(BasicConst.DateFormatShow),NotNull]
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

        [DisplayName("Transaction Location"), NotNull, ForeignKey("[dbo].[tblTransactionLocation]", "Id"), LeftJoin("jTransactionLocation"), TextualField("TransactionLocationCode")]
        [LookupEditor(typeof(TblTransactionLocationRow))]//Thêm
        public Int32? TransactionLocationId
        {
            get { return Fields.TransactionLocationId[this]; }
            set { Fields.TransactionLocationId[this] = value; }
        }

        [DisplayName("Person Management"),NotNull, Size(256)]
        public String PersonManagement
        {
            get { return Fields.PersonManagement[this]; }
            set { Fields.PersonManagement[this] = value; }
        }

        [DisplayName("Person Management Phone"), Size(20)]
        public String PersonManagementPhone
        {
            get { return Fields.PersonManagementPhone[this]; }
            set { Fields.PersonManagementPhone[this] = value; }
        }

        [DisplayName("Place"), NotNull, ForeignKey("[dbo].[tblPlaceOfBussiness]", "Id"), LeftJoin("jPlace"), TextualField("PlaceCode"), LookupInclude]
        [LookupEditor(typeof(TblPlaceOfBussinessRow))]//Thêm
        public Int32? PlaceId
        {
            get { return Fields.PlaceId[this]; }
            set { Fields.PlaceId[this] = value; }
        }

        [DisplayName("Note"), Size(1000)]
        public String Note
        {
            get { return Fields.Note[this]; }
            set { Fields.Note[this] = value; }
        }

        [DisplayName("Created By"), Size(30), IgnoreAuditLog]
        public String CreatedBy
        {
            get { return Fields.CreatedBy[this]; }
            set { Fields.CreatedBy[this] = value; }
        }

        [DisplayName("Created Date"), IgnoreAuditLog]
        public DateTime? CreatedDate
        {
            get { return Fields.CreatedDate[this]; }
            set { Fields.CreatedDate[this] = value; }
        }

        [DisplayName("Updated By"), Size(30), IgnoreAuditLog]
        public String UpdatedBy
        {
            get { return Fields.UpdatedBy[this]; }
            set { Fields.UpdatedBy[this] = value; }
        }

        [DisplayName("Updated Date"), IgnoreAuditLog]
        public DateTime? UpdatedDate
        {
            get { return Fields.UpdatedDate[this]; }
            set { Fields.UpdatedDate[this] = value; }
        }

        [DisplayName("Status"), ForeignKey("[dbo].[tblStatus]", "Id"), LeftJoin("jStatus"), TextualField("StatusName")]
        [LookupEditor(typeof(TblStatusRow), FilterField = "TypeId", FilterValue = StatusType.Project), LookupInclude]//Thêm
        public Int32? StatusId
        {
            get { return Fields.StatusId[this]; }
            set { Fields.StatusId[this] = value; }
        }

        [DisplayName("Transaction Location Code"), Expression("jTransactionLocation.[Code] ")]
        public String TransactionLocationCode
        {
            get { return Fields.TransactionLocationCode[this]; }
            set { Fields.TransactionLocationCode[this] = value; }
        }

        [DisplayName("Transaction Location Name"), Expression("jTransactionLocation.[Name]")]
        public String TransactionLocationName
        {
            get { return Fields.TransactionLocationName[this]; }
            set { Fields.TransactionLocationName[this] = value; }
        }

        [DisplayName("Transaction Location Area Id"), Expression("jTransactionLocation.[AreaId]")]
        public Int32? TransactionLocationAreaId
        {
            get { return Fields.TransactionLocationAreaId[this]; }
            set { Fields.TransactionLocationAreaId[this] = value; }
        }

        [DisplayName("Transaction Location Employee Manage Id"), Expression("jTransactionLocation.[EmployeeManageId]")]
        public Int32? TransactionLocationEmployeeManageId
        {
            get { return Fields.TransactionLocationEmployeeManageId[this]; }
            set { Fields.TransactionLocationEmployeeManageId[this] = value; }
        }

        [DisplayName("Transaction Location Employee Cash Id"), Expression("jTransactionLocation.[EmployeeCashID]")]
        public Int32? TransactionLocationEmployeeCashId
        {
            get { return Fields.TransactionLocationEmployeeCashId[this]; }
            set { Fields.TransactionLocationEmployeeCashId[this] = value; }
        }

        [DisplayName("Transaction Location Place Id"), Expression("jTransactionLocation.[PlaceId]")]
        public Int32? TransactionLocationPlaceId
        {
            get { return Fields.TransactionLocationPlaceId[this]; }
            set { Fields.TransactionLocationPlaceId[this] = value; }
        }

        [DisplayName("Transaction Location Open From"), Expression("jTransactionLocation.[OpenFrom]")]
        public TimeSpan? TransactionLocationOpenFrom
        {
            get { return Fields.TransactionLocationOpenFrom[this]; }
            set { Fields.TransactionLocationOpenFrom[this] = value; }
        }

        [DisplayName("Transaction Location Open To"), Expression("jTransactionLocation.[OpenTo]")]
        public TimeSpan? TransactionLocationOpenTo
        {
            get { return Fields.TransactionLocationOpenTo[this]; }
            set { Fields.TransactionLocationOpenTo[this] = value; }
        }

        [DisplayName("Transaction Location Opening Time"), Expression("jTransactionLocation.[OpeningTime]")]
        public TimeSpan? TransactionLocationOpeningTime
        {
            get { return Fields.TransactionLocationOpeningTime[this]; }
            set { Fields.TransactionLocationOpeningTime[this] = value; }
        }

        [DisplayName("Transaction Location Opening Date"), Expression("jTransactionLocation.[OpeningDate]")]
        public DateTime? TransactionLocationOpeningDate
        {
            get { return Fields.TransactionLocationOpeningDate[this]; }
            set { Fields.TransactionLocationOpeningDate[this] = value; }
        }

        [DisplayName("Transaction Location Created By"), Expression("jTransactionLocation.[CreatedBy]")]
        public String TransactionLocationCreatedBy
        {
            get { return Fields.TransactionLocationCreatedBy[this]; }
            set { Fields.TransactionLocationCreatedBy[this] = value; }
        }

        [DisplayName("Transaction Location Created Date"), Expression("jTransactionLocation.[CreatedDate]")]
        public DateTime? TransactionLocationCreatedDate
        {
            get { return Fields.TransactionLocationCreatedDate[this]; }
            set { Fields.TransactionLocationCreatedDate[this] = value; }
        }

        [DisplayName("Transaction Location Updated By"), Expression("jTransactionLocation.[UpdatedBy]")]
        public String TransactionLocationUpdatedBy
        {
            get { return Fields.TransactionLocationUpdatedBy[this]; }
            set { Fields.TransactionLocationUpdatedBy[this] = value; }
        }

        [DisplayName("Transaction Location Updated Date"), Expression("jTransactionLocation.[UpdatedDate]")]
        public DateTime? TransactionLocationUpdatedDate
        {
            get { return Fields.TransactionLocationUpdatedDate[this]; }
            set { Fields.TransactionLocationUpdatedDate[this] = value; }
        }

        [DisplayName("Transaction Location Status"), Expression("jTransactionLocation.[Status]")]
        public Int32? TransactionLocationStatus
        {
            get { return Fields.TransactionLocationStatus[this]; }
            set { Fields.TransactionLocationStatus[this] = value; }
        }

        [DisplayName("Place Code"), Expression("jPlace.[Code]")]
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
        [LookupEditor(typeof(TblCityRow))]//Thêm
        public Int32? PlaceCityId
        {
            get { return Fields.PlaceCityId[this]; }
            set { Fields.PlaceCityId[this] = value; }
        }

        [DisplayName("Place District Id"), Expression("jPlace.[DistrictId]")]
        [LookupEditor(typeof(TblDistrictRow))]//Thêm
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

        [DisplayName("Place Status"), Expression("jPlace.[Status]"), LookupInclude]
        public Int32? PlaceStatus
        {
            get { return Fields.PlaceStatus[this]; }
            set { Fields.PlaceStatus[this] = value; }
        }

        [DisplayName("Place Wards Id"), Expression("jPlace.[WardsId]")]
        [LookupEditor(typeof(TblWardsRow))]//Thêm
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

        [DisplayName("Place Total Area Use"), Expression("jPlace.[TotalAreaUse]"), Size(18), Scale(2), DisplayFormat(BasicConst.NumberFormat2)]
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

        [DisplayName("Place Month Require Deposit"), Expression("jPlace.[MonthRequireDeposit]")]
        public Int32? PlaceMonthRequireDeposit
        {
            get { return Fields.PlaceMonthRequireDeposit[this]; }
            set { Fields.PlaceMonthRequireDeposit[this] = value; }
        }

        [DisplayName("Place File1"), Expression("jPlace.[File1]")]
        public String PlaceFile1
        {
            get { return Fields.PlaceFile1[this]; }
            set { Fields.PlaceFile1[this] = value; }
        }

        [DisplayName("Place File2"), Expression("jPlace.[File2]")]
        public String PlaceFile2
        {
            get { return Fields.PlaceFile2[this]; }
            set { Fields.PlaceFile2[this] = value; }
        }

        [DisplayName("Place File3"), Expression("jPlace.[File3]")]
        public String PlaceFile3
        {
            get { return Fields.PlaceFile3[this]; }
            set { Fields.PlaceFile3[this] = value; }
        }

        [DisplayName("Place File4"), Expression("jPlace.[File4]")]
        public String PlaceFile4
        {
            get { return Fields.PlaceFile4[this]; }
            set { Fields.PlaceFile4[this] = value; }
        }

        [DisplayName("Place File5"), Expression("jPlace.[File5]")]
        public String PlaceFile5
        {
            get { return Fields.PlaceFile5[this]; }
            set { Fields.PlaceFile5[this] = value; }
        }

        [DisplayName("Place File6"), Expression("jPlace.[File6]")]
        public String PlaceFile6
        {
            get { return Fields.PlaceFile6[this]; }
            set { Fields.PlaceFile6[this] = value; }
        }

        [DisplayName("Place File7"), Expression("jPlace.[File7]")]
        public String PlaceFile7
        {
            get { return Fields.PlaceFile7[this]; }
            set { Fields.PlaceFile7[this] = value; }
        }

        [DisplayName("Place File8"), Expression("jPlace.[File8]")]
        public String PlaceFile8
        {
            get { return Fields.PlaceFile8[this]; }
            set { Fields.PlaceFile8[this] = value; }
        }

        [DisplayName("Place File9"), Expression("jPlace.[File9]")]
        public String PlaceFile9
        {
            get { return Fields.PlaceFile9[this]; }
            set { Fields.PlaceFile9[this] = value; }
        }

        [DisplayName("Place File10"), Expression("jPlace.[File10]")]
        public String PlaceFile10
        {
            get { return Fields.PlaceFile10[this]; }
            set { Fields.PlaceFile10[this] = value; }
        }

        [DisplayName("Place Month Deposit"), Expression("jPlace.[MonthDeposit]")]
        public Int32? PlaceMonthDeposit
        {
            get { return Fields.PlaceMonthDeposit[this]; }
            set { Fields.PlaceMonthDeposit[this] = value; }
        }

        [DisplayName("Place Door"), Expression("jPlace.[Door]")]
        public String PlaceDoor
        {
            get { return Fields.PlaceDoor[this]; }
            set { Fields.PlaceDoor[this] = value; }
        }

        [DisplayName("Place Ceiling"), Expression("jPlace.[Ceiling]")]
        public String PlaceCeiling
        {
            get { return Fields.PlaceCeiling[this]; }
            set { Fields.PlaceCeiling[this] = value; }
        }

        [DisplayName("Place Wall"), Expression("jPlace.[Wall]")]
        public String PlaceWall
        {
            get { return Fields.PlaceWall[this]; }
            set { Fields.PlaceWall[this] = value; }
        }

        [DisplayName("Place Floor"), Expression("jPlace.[Floor]")]
        public String PlaceFloor
        {
            get { return Fields.PlaceFloor[this]; }
            set { Fields.PlaceFloor[this] = value; }
        }

        [DisplayName("Status Next Status"), Expression("jStatus.[NextStatus]")]
        public Int32? StatusNextStatus
        {
            get { return Fields.StatusNextStatus[this]; }
            set { Fields.StatusNextStatus[this] = value; }
        }

        [DisplayName("Status Name"), Expression("jStatus.[Name]")]
        public String StatusName
        {
            get { return Fields.StatusName[this]; }
            set { Fields.StatusName[this] = value; }
        }

        [DisplayName("Status Type Id"), Expression("jStatus.[TypeId]")]
        public Int32? StatusTypeId
        {
            get { return Fields.StatusTypeId[this]; }
            set { Fields.StatusTypeId[this] = value; }
        }

        [DisplayName("Status Created By"), Expression("jStatus.[CreatedBy]")]
        public String StatusCreatedBy
        {
            get { return Fields.StatusCreatedBy[this]; }
            set { Fields.StatusCreatedBy[this] = value; }
        }

        [DisplayName("Status Created Date"), Expression("jStatus.[CreatedDate]")]
        public DateTime? StatusCreatedDate
        {
            get { return Fields.StatusCreatedDate[this]; }
            set { Fields.StatusCreatedDate[this] = value; }
        }

        [DisplayName("Status Updated By"), Expression("jStatus.[UpdatedBy]")]
        public String StatusUpdatedBy
        {
            get { return Fields.StatusUpdatedBy[this]; }
            set { Fields.StatusUpdatedBy[this] = value; }
        }

        [DisplayName("Status Updated Date"), Expression("jStatus.[UpdatedDate]")]
        public DateTime? StatusUpdatedDate
        {
            get { return Fields.StatusUpdatedDate[this]; }
            set { Fields.StatusUpdatedDate[this] = value; }
        }
        [DisplayName("Project Items"), MasterDetailRelation(foreignKey: "ProjectId",FilterField ="IsUse", FilterValue ="1"), NotMapped]
        public List<TblProjectItemRow> ProjectItems
        {
            get { return Fields.ProjectItems[this]; }
            set { Fields.ProjectItems[this] = value; }
        }
        [DisplayName("Record Status")]
        public StatusRecord? RecordStatus
        {
            get { return (StatusRecord?)Fields.RecordStatus[this]; }
            set { Fields.RecordStatus[this] = (Int32)value; }
        }
        [DisplayName("Is Use")]
        public Int32? IsUse
        {
            get { return Fields.IsUse[this]; }
            set { Fields.IsUse[this] = value; }
        }
        [DisplayName("Is Need Approval For new")]
        public Boolean? IsNeedApprovalForNew
        {
            get { return Fields.IsNeedApprovalForNew[this]; }
            set { Fields.IsNeedApprovalForNew[this] = value; }
        }
        [DisplayName("Is Need Approval For Edit")]
        public Boolean? IsNeedApprovalForEdit
        {
            get { return Fields.IsNeedApprovalForEdit[this]; }
            set { Fields.IsNeedApprovalForEdit[this] = value; }
        }
        [DisplayName("Level Approval for edit")]
        public Int32? LevelApprovalForEdit
        {
            get { return Fields.LevelApprovalForEdit[this]; }
            set { Fields.LevelApprovalForEdit[this] = value; }
        }
        [DisplayName("Level Approval for new")]
        public Int32? LevelApprovalForNew
        {
            get { return Fields.LevelApprovalForNew[this]; }
            set { Fields.LevelApprovalForNew[this] = value; }
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

        public TblProjectRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField Code;
            public StringField Name;
            public DateTimeField InnitiatedDate;
            public DateTimeField FromDate;
            public DateTimeField ToDate;
            public Int32Field TransactionLocationId;
            public StringField PersonManagement;
            public StringField PersonManagementPhone;
            public Int32Field PlaceId;
            public StringField Note;
            public StringField CreatedBy;
            public DateTimeField CreatedDate;
            public StringField UpdatedBy;
            public DateTimeField UpdatedDate;
            public Int32Field StatusId;

            public StringField TransactionLocationCode;
            public StringField TransactionLocationName;
            public Int32Field TransactionLocationAreaId;
            public Int32Field TransactionLocationEmployeeManageId;
            public Int32Field TransactionLocationEmployeeCashId;
            public Int32Field TransactionLocationPlaceId;
            public TimeSpanField TransactionLocationOpenFrom;
            public TimeSpanField TransactionLocationOpenTo;
            public TimeSpanField TransactionLocationOpeningTime;
            public DateTimeField TransactionLocationOpeningDate;
            public StringField TransactionLocationCreatedBy;
            public DateTimeField TransactionLocationCreatedDate;
            public StringField TransactionLocationUpdatedBy;
            public DateTimeField TransactionLocationUpdatedDate;
            public Int32Field TransactionLocationStatus;

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
            public Int32Field PlaceMonthRequireDeposit;
            public StringField PlaceFile1;
            public StringField PlaceFile2;
            public StringField PlaceFile3;
            public StringField PlaceFile4;
            public StringField PlaceFile5;
            public StringField PlaceFile6;
            public StringField PlaceFile7;
            public StringField PlaceFile8;
            public StringField PlaceFile9;
            public StringField PlaceFile10;
            public Int32Field PlaceMonthDeposit;
            public StringField PlaceDoor;
            public StringField PlaceCeiling;
            public StringField PlaceWall;
            public StringField PlaceFloor;

            public Int32Field StatusNextStatus;
            public StringField StatusName;
            public Int32Field StatusTypeId;
            public StringField StatusCreatedBy;
            public DateTimeField StatusCreatedDate;
            public StringField StatusUpdatedBy;
            public DateTimeField StatusUpdatedDate;
            public readonly RowListField<TblProjectItemRow> ProjectItems;
            public Int32Field RecordStatus;
            public Int32Field IsUse;
            public BooleanField IsNeedApprovalForEdit;
            public BooleanField IsNeedApprovalForNew;
            public Int32Field LevelApprovalForEdit;
            public Int32Field LevelApprovalForNew;
        }
    }
}
