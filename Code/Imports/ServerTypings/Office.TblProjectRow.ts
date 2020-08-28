namespace ECNET.Office {
    export interface TblProjectRow {
        Id?: number;
        Code?: string;
        Name?: string;
        InnitiatedDate?: string;
        FromDate?: string;
        ToDate?: string;
        TransactionLocationId?: number;
        PersonManagement?: string;
        PersonManagementPhone?: string;
        PlaceId?: number;
        Note?: string;
        CreatedBy?: string;
        CreatedDate?: string;
        UpdatedBy?: string;
        UpdatedDate?: string;
        StatusId?: number;
        TransactionLocationCode?: string;
        TransactionLocationName?: string;
        TransactionLocationAreaId?: number;
        TransactionLocationEmployeeManageId?: number;
        TransactionLocationEmployeeCashId?: number;
        TransactionLocationPlaceId?: number;
        TransactionLocationOpenFrom?: string;
        TransactionLocationOpenTo?: string;
        TransactionLocationOpeningTime?: string;
        TransactionLocationOpeningDate?: string;
        TransactionLocationCreatedBy?: string;
        TransactionLocationCreatedDate?: string;
        TransactionLocationUpdatedBy?: string;
        TransactionLocationUpdatedDate?: string;
        TransactionLocationStatus?: number;
        PlaceCode?: string;
        PlaceWidth?: number;
        PlaceLength?: number;
        PlaceTotalArea?: number;
        PlaceTotalCustomer?: number;
        PlaceLinkGoogleMap?: string;
        PlaceAddress?: string;
        PlaceCityId?: number;
        PlaceDistrictId?: number;
        PlaceContractId?: number;
        PlaceCreatedBy?: string;
        PlaceCreatedDate?: string;
        PlaceUpdateDate?: string;
        PlaceUpdatedBy?: string;
        PlaceTimeOpenFrom?: string;
        PlaceTimeOpenTo?: string;
        PlaceTimeOpening?: string;
        PlaceTimeOpeningDate?: string;
        PlaceStatus?: number;
        PlaceWardsId?: number;
        PlaceType?: number;
        PlaceNote?: string;
        PlaceTotalAreaUse?: number;
        PlaceNameOfOwner?: string;
        PlacePhoneOfOwner?: string;
        PlaceDescription?: string;
        PlaceMonthRent?: number;
        PlacePriceRent?: number;
        PlacePriceBuy?: number;
        PlaceRequireDeposit?: number;
        PlaceRequireDepositAmt?: number;
        PlaceRequireDateDeposit?: string;
        PlaceHasDeposit?: number;
        PlaceDeposit?: number;
        PlaceDepositAmt?: number;
        PlaceDateDeposit?: string;
        PlaceEmployeePicName?: string;
        PlaceEmployeePicCode?: string;
        PlaceEmployeePicEmail?: string;
        PlaceEmployeePicPhone?: string;
        PlaceEmployeePicWalletNo?: string;
        PlaceBranchIdPic?: number;
        PlaceAreaIdPic?: number;
        PlaceBatchNo?: string;
        PlaceImportBy?: string;
        PlaceImportDate?: string;
        PlaceMonthRequireDeposit?: number;
        PlaceFile1?: string;
        PlaceFile2?: string;
        PlaceFile3?: string;
        PlaceFile4?: string;
        PlaceFile5?: string;
        PlaceFile6?: string;
        PlaceFile7?: string;
        PlaceFile8?: string;
        PlaceFile9?: string;
        PlaceFile10?: string;
        PlaceMonthDeposit?: number;
        PlaceDoor?: string;
        PlaceCeiling?: string;
        PlaceWall?: string;
        PlaceFloor?: string;
        StatusNextStatus?: number;
        StatusName?: string;
        StatusTypeId?: number;
        StatusCreatedBy?: string;
        StatusCreatedDate?: string;
        StatusUpdatedBy?: string;
        StatusUpdatedDate?: string;
        ProjectItems?: TblProjectItemRow[];
        RecordStatus?: Web.Modules.Office.Common.StatusRecord;
        IsUse?: number;
        IsNeedApprovalForEdit?: boolean;
        IsNeedApprovalForNew?: boolean;
        LevelApprovalForEdit?: number;
        LevelApprovalForNew?: number;
    }

    export namespace TblProjectRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Code';
        export const localTextPrefix = 'Office.TblProject';
        export const lookupKey = 'dbo.TblProject';

        export function getLookup(): Q.Lookup<TblProjectRow> {
            return Q.getLookup<TblProjectRow>('dbo.TblProject');
        }
        export const deletePermission = 'Ecnet:dbo.tblProject:Modify';
        export const insertPermission = 'Ecnet:dbo.tblProject:Modify';
        export const readPermission = 'Ecnet:dbo.tblProject:View';
        export const updatePermission = 'Ecnet:dbo.tblProject:Modify';

        export declare const enum Fields {
            Id = "Id",
            Code = "Code",
            Name = "Name",
            InnitiatedDate = "InnitiatedDate",
            FromDate = "FromDate",
            ToDate = "ToDate",
            TransactionLocationId = "TransactionLocationId",
            PersonManagement = "PersonManagement",
            PersonManagementPhone = "PersonManagementPhone",
            PlaceId = "PlaceId",
            Note = "Note",
            CreatedBy = "CreatedBy",
            CreatedDate = "CreatedDate",
            UpdatedBy = "UpdatedBy",
            UpdatedDate = "UpdatedDate",
            StatusId = "StatusId",
            TransactionLocationCode = "TransactionLocationCode",
            TransactionLocationName = "TransactionLocationName",
            TransactionLocationAreaId = "TransactionLocationAreaId",
            TransactionLocationEmployeeManageId = "TransactionLocationEmployeeManageId",
            TransactionLocationEmployeeCashId = "TransactionLocationEmployeeCashId",
            TransactionLocationPlaceId = "TransactionLocationPlaceId",
            TransactionLocationOpenFrom = "TransactionLocationOpenFrom",
            TransactionLocationOpenTo = "TransactionLocationOpenTo",
            TransactionLocationOpeningTime = "TransactionLocationOpeningTime",
            TransactionLocationOpeningDate = "TransactionLocationOpeningDate",
            TransactionLocationCreatedBy = "TransactionLocationCreatedBy",
            TransactionLocationCreatedDate = "TransactionLocationCreatedDate",
            TransactionLocationUpdatedBy = "TransactionLocationUpdatedBy",
            TransactionLocationUpdatedDate = "TransactionLocationUpdatedDate",
            TransactionLocationStatus = "TransactionLocationStatus",
            PlaceCode = "PlaceCode",
            PlaceWidth = "PlaceWidth",
            PlaceLength = "PlaceLength",
            PlaceTotalArea = "PlaceTotalArea",
            PlaceTotalCustomer = "PlaceTotalCustomer",
            PlaceLinkGoogleMap = "PlaceLinkGoogleMap",
            PlaceAddress = "PlaceAddress",
            PlaceCityId = "PlaceCityId",
            PlaceDistrictId = "PlaceDistrictId",
            PlaceContractId = "PlaceContractId",
            PlaceCreatedBy = "PlaceCreatedBy",
            PlaceCreatedDate = "PlaceCreatedDate",
            PlaceUpdateDate = "PlaceUpdateDate",
            PlaceUpdatedBy = "PlaceUpdatedBy",
            PlaceTimeOpenFrom = "PlaceTimeOpenFrom",
            PlaceTimeOpenTo = "PlaceTimeOpenTo",
            PlaceTimeOpening = "PlaceTimeOpening",
            PlaceTimeOpeningDate = "PlaceTimeOpeningDate",
            PlaceStatus = "PlaceStatus",
            PlaceWardsId = "PlaceWardsId",
            PlaceType = "PlaceType",
            PlaceNote = "PlaceNote",
            PlaceTotalAreaUse = "PlaceTotalAreaUse",
            PlaceNameOfOwner = "PlaceNameOfOwner",
            PlacePhoneOfOwner = "PlacePhoneOfOwner",
            PlaceDescription = "PlaceDescription",
            PlaceMonthRent = "PlaceMonthRent",
            PlacePriceRent = "PlacePriceRent",
            PlacePriceBuy = "PlacePriceBuy",
            PlaceRequireDeposit = "PlaceRequireDeposit",
            PlaceRequireDepositAmt = "PlaceRequireDepositAmt",
            PlaceRequireDateDeposit = "PlaceRequireDateDeposit",
            PlaceHasDeposit = "PlaceHasDeposit",
            PlaceDeposit = "PlaceDeposit",
            PlaceDepositAmt = "PlaceDepositAmt",
            PlaceDateDeposit = "PlaceDateDeposit",
            PlaceEmployeePicName = "PlaceEmployeePicName",
            PlaceEmployeePicCode = "PlaceEmployeePicCode",
            PlaceEmployeePicEmail = "PlaceEmployeePicEmail",
            PlaceEmployeePicPhone = "PlaceEmployeePicPhone",
            PlaceEmployeePicWalletNo = "PlaceEmployeePicWalletNo",
            PlaceBranchIdPic = "PlaceBranchIdPic",
            PlaceAreaIdPic = "PlaceAreaIdPic",
            PlaceBatchNo = "PlaceBatchNo",
            PlaceImportBy = "PlaceImportBy",
            PlaceImportDate = "PlaceImportDate",
            PlaceMonthRequireDeposit = "PlaceMonthRequireDeposit",
            PlaceFile1 = "PlaceFile1",
            PlaceFile2 = "PlaceFile2",
            PlaceFile3 = "PlaceFile3",
            PlaceFile4 = "PlaceFile4",
            PlaceFile5 = "PlaceFile5",
            PlaceFile6 = "PlaceFile6",
            PlaceFile7 = "PlaceFile7",
            PlaceFile8 = "PlaceFile8",
            PlaceFile9 = "PlaceFile9",
            PlaceFile10 = "PlaceFile10",
            PlaceMonthDeposit = "PlaceMonthDeposit",
            PlaceDoor = "PlaceDoor",
            PlaceCeiling = "PlaceCeiling",
            PlaceWall = "PlaceWall",
            PlaceFloor = "PlaceFloor",
            StatusNextStatus = "StatusNextStatus",
            StatusName = "StatusName",
            StatusTypeId = "StatusTypeId",
            StatusCreatedBy = "StatusCreatedBy",
            StatusCreatedDate = "StatusCreatedDate",
            StatusUpdatedBy = "StatusUpdatedBy",
            StatusUpdatedDate = "StatusUpdatedDate",
            ProjectItems = "ProjectItems",
            RecordStatus = "RecordStatus",
            IsUse = "IsUse",
            IsNeedApprovalForEdit = "IsNeedApprovalForEdit",
            IsNeedApprovalForNew = "IsNeedApprovalForNew",
            LevelApprovalForEdit = "LevelApprovalForEdit",
            LevelApprovalForNew = "LevelApprovalForNew"
        }
    }
}
