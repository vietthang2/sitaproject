namespace ECNET.Office {
    export interface TblPlaceOfBussinessRow {
        Id?: number;
        Code?: string;
        Width?: number;
        Length?: number;
        TotalArea?: number;
        TotalCustomer?: Web.Modules.Office.Common.TotalCustomer;
        LinkGoogleMap?: string;
        Address?: string;
        CityId?: number;
        AreaIdPic?: number;
        DistrictId?: number;
        ContractId?: number;
        CreatedBy?: string;
        CreatedDate?: string;
        UpdateDate?: string;
        UpdatedBy?: string;
        TimeOpenFrom?: string;
        TimeOpenTo?: string;
        TimeOpening?: string;
        TimeOpeningDate?: string;
        Status?: Web.Modules.Office.Common.Status;
        WardsId?: number;
        Type?: Web.Modules.Office.Common.TypeOfPlace;
        Note?: string;
        TotalAreaUse?: number;
        NameOfOwner?: string;
        PhoneOfOwner?: string;
        Description?: string;
        MonthRent?: number;
        PriceRent?: number;
        PriceBuy?: number;
        RequireDeposit?: Web.Modules.Office.Common.YesNo;
        RequireDepositAmt?: number;
        RequireDateDeposit?: string;
        HasDeposit?: Web.Modules.Office.Common.YesNo;
        Deposit?: number;
        DepositAmt?: number;
        DateDeposit?: string;
        EmployeePicName?: string;
        EmployeePicCode?: string;
        EmployeePicEmail?: string;
        EmployeePicPhone?: string;
        EmployeePicWalletNo?: string;
        BranchIdPic?: number;
        CityName?: string;
        CityCode?: string;
        CityEnName?: string;
        CityEcCode?: string;
        DistrictCityId?: number;
        DistrictName?: string;
        DistrictEnName?: string;
        DistrictCode?: string;
        ContractNo?: string;
        ContractNameOfOwner?: string;
        ContractPhoneOfOwner?: string;
        ContractDateSign?: string;
        ContractTypeId?: number;
        ContractFileContractUpload?: string;
        ContractFile1?: string;
        ContractFile2?: string;
        ContractFile3?: string;
        ContractFile4?: string;
        ContractFile5?: string;
        ContractFile6?: string;
        ContractFile7?: string;
        ContractCreatedBy?: string;
        ContractCreatedDate?: string;
        ContractUpdatedBy?: string;
        ContractUpdatedDate?: string;
        ContractPlaceId?: number;
        WardsDistrictId?: number;
        WardsName?: string;
        WardsEnName?: string;
        WardsCode?: string;
        BatchNo?: string;
        ImportBy?: string;
        ImportDate?: string;
        MonthRequireDeposit?: number;
        BranchIdPicName?: string;
        File1?: string;
        File2?: string;
        File3?: string;
        File4?: string;
        File5?: string;
        File6?: string;
        File7?: string;
        File8?: string;
        File9?: string;
        File10?: string;
        MonthDeposit?: number;
        Door?: string;
        Ceiling?: string;
        Wall?: string;
        Floor?: string;
    }

    export namespace TblPlaceOfBussinessRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Code';
        export const localTextPrefix = 'Office.TblPlaceOfBussiness';
        export const lookupKey = 'dbo.tblPlaceOfBussiness';

        export function getLookup(): Q.Lookup<TblPlaceOfBussinessRow> {
            return Q.getLookup<TblPlaceOfBussinessRow>('dbo.tblPlaceOfBussiness');
        }
        export const deletePermission = 'Ecnet:dbo.tblPlaceOfBussiness:Delete';
        export const insertPermission = 'Ecnet:dbo.tblPlaceOfBussiness:Modify';
        export const readPermission = 'Ecnet:dbo.tblPlaceOfBussiness:View';
        export const updatePermission = 'Ecnet:dbo.tblPlaceOfBussiness:Modify';

        export declare const enum Fields {
            Id = "Id",
            Code = "Code",
            Width = "Width",
            Length = "Length",
            TotalArea = "TotalArea",
            TotalCustomer = "TotalCustomer",
            LinkGoogleMap = "LinkGoogleMap",
            Address = "Address",
            CityId = "CityId",
            AreaIdPic = "AreaIdPic",
            DistrictId = "DistrictId",
            ContractId = "ContractId",
            CreatedBy = "CreatedBy",
            CreatedDate = "CreatedDate",
            UpdateDate = "UpdateDate",
            UpdatedBy = "UpdatedBy",
            TimeOpenFrom = "TimeOpenFrom",
            TimeOpenTo = "TimeOpenTo",
            TimeOpening = "TimeOpening",
            TimeOpeningDate = "TimeOpeningDate",
            Status = "Status",
            WardsId = "WardsId",
            Type = "Type",
            Note = "Note",
            TotalAreaUse = "TotalAreaUse",
            NameOfOwner = "NameOfOwner",
            PhoneOfOwner = "PhoneOfOwner",
            Description = "Description",
            MonthRent = "MonthRent",
            PriceRent = "PriceRent",
            PriceBuy = "PriceBuy",
            RequireDeposit = "RequireDeposit",
            RequireDepositAmt = "RequireDepositAmt",
            RequireDateDeposit = "RequireDateDeposit",
            HasDeposit = "HasDeposit",
            Deposit = "Deposit",
            DepositAmt = "DepositAmt",
            DateDeposit = "DateDeposit",
            EmployeePicName = "EmployeePicName",
            EmployeePicCode = "EmployeePicCode",
            EmployeePicEmail = "EmployeePicEmail",
            EmployeePicPhone = "EmployeePicPhone",
            EmployeePicWalletNo = "EmployeePicWalletNo",
            BranchIdPic = "BranchIdPic",
            CityName = "CityName",
            CityCode = "CityCode",
            CityEnName = "CityEnName",
            CityEcCode = "CityEcCode",
            DistrictCityId = "DistrictCityId",
            DistrictName = "DistrictName",
            DistrictEnName = "DistrictEnName",
            DistrictCode = "DistrictCode",
            ContractNo = "ContractNo",
            ContractNameOfOwner = "ContractNameOfOwner",
            ContractPhoneOfOwner = "ContractPhoneOfOwner",
            ContractDateSign = "ContractDateSign",
            ContractTypeId = "ContractTypeId",
            ContractFileContractUpload = "ContractFileContractUpload",
            ContractFile1 = "ContractFile1",
            ContractFile2 = "ContractFile2",
            ContractFile3 = "ContractFile3",
            ContractFile4 = "ContractFile4",
            ContractFile5 = "ContractFile5",
            ContractFile6 = "ContractFile6",
            ContractFile7 = "ContractFile7",
            ContractCreatedBy = "ContractCreatedBy",
            ContractCreatedDate = "ContractCreatedDate",
            ContractUpdatedBy = "ContractUpdatedBy",
            ContractUpdatedDate = "ContractUpdatedDate",
            ContractPlaceId = "ContractPlaceId",
            WardsDistrictId = "WardsDistrictId",
            WardsName = "WardsName",
            WardsEnName = "WardsEnName",
            WardsCode = "WardsCode",
            BatchNo = "BatchNo",
            ImportBy = "ImportBy",
            ImportDate = "ImportDate",
            MonthRequireDeposit = "MonthRequireDeposit",
            BranchIdPicName = "BranchIdPicName",
            File1 = "File1",
            File2 = "File2",
            File3 = "File3",
            File4 = "File4",
            File5 = "File5",
            File6 = "File6",
            File7 = "File7",
            File8 = "File8",
            File9 = "File9",
            File10 = "File10",
            MonthDeposit = "MonthDeposit",
            Door = "Door",
            Ceiling = "Ceiling",
            Wall = "Wall",
            Floor = "Floor"
        }
    }
}
