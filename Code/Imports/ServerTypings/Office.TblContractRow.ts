namespace ECNET.Office {
    export interface TblContractRow {
        Id?: number;
        NameOfOwner?: string;
        PhoneOfOwner?: string;
        DateSign?: string;
        TypeId?: number;
        FileContractUpload?: string;
        File1?: string;
        File2?: string;
        File3?: string;
        File4?: string;
        File5?: string;
        File6?: string;
        File7?: string;
        CreatedBy?: string;
        CreatedDate?: string;
        UpdatedBy?: string;
        UpdatedDate?: string;
        PlaceId?: number;
        IdentifyNo?: string;
        IdentifyType?: Web.Modules.Office.Common.IdentifyType;
        AddressOfOwner?: string;
        CurrentAddressOfOwner?: string;
        AddressOfOwner2nd?: string;
        CurrentAddressOfOwner2nd?: string;
        EmailOfOwner?: string;
        NameOfOwner2nd?: string;
        PhoneOfOwner2nd?: string;
        IdentifyNo2nd?: string;
        IdentifyType2nd?: Web.Modules.Office.Common.IdentifyType;
        AccountBankNo?: string;
        BankName?: string;
        AccountName?: string;
        WalletNo?: string;
        WalletName?: string;
        No?: string;
        Month?: number;
        Remark1?: string;
        Remark2?: string;
        Remark3?: string;
        Remark4?: string;
        Remark5?: string;
        FromDate?: string;
        ToDate?: string;
        BuyOrRent?: Web.Modules.Office.Common.TypeOfPlace;
        ContractAmt?: number;
        TotalArea?: number;
        ReleaseDate?: string;
        BeginDate?: string;
        PaymentMethod?: Web.Modules.Office.Common.PaymentMethod;
        CityId?: number;
        DistrictId?: number;
        WardsId?: number;
        EcPayPerson?: string;
        EcPayPosition?: string;
        EcPayAuthorityNo?: string;
        EcPayAuthorityDate?: string;
        TypeTypeName?: string;
        TypeDescription?: string;
        TypePersonSign?: string;
        TypePersonPosition?: string;
        TypePersonAuthorityNo?: string;
        TypeRemark1?: string;
        TypeRemark2?: string;
        TypeRemark3?: string;
        TypeRemark4?: string;
        TypeRemark5?: string;
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
        CertificateNo?: string;
        CertificateDate?: string;
        CertificateCity?: number;
        ListDetail?: TblContractItemsRow[];
        ListSchedule?: TblContractScheduleRow[];
        Status?: Web.Modules.Office.Common.Status;
        YearCancel?: number;
        YearFixPrice?: number;
        YearBeginRedeal?: number;
        RecurringPayment?: number;
        Paid?: number;
        ECPayCompanyName?: string;
        ECPayAddress?: string;
        ECPayPhone?: string;
        ECPayBankNo?: string;
        ECPayBankName?: string;
        ECPayBankNameBranch?: string;
        ContractName?: string;
        RemainAmt?: number;
        EndDate?: string;
        ContractAmtString?: string;
        TotalContractAmt?: number;
        IsCompleted?: boolean;
    }

    export namespace TblContractRow {
        export const idProperty = 'Id';
        export const nameProperty = 'No';
        export const localTextPrefix = 'Office.TblContract';
        export const lookupKey = 'dbo.tblContract';

        export function getLookup(): Q.Lookup<TblContractRow> {
            return Q.getLookup<TblContractRow>('dbo.tblContract');
        }
        export const deletePermission = 'Ecnet:dbo.tblContract:Modify';
        export const insertPermission = 'Ecnet:dbo.tblContract:Modify';
        export const readPermission = 'Ecnet:dbo.tblContract:View';
        export const updatePermission = 'Ecnet:dbo.tblContract:Modify';

        export declare const enum Fields {
            Id = "Id",
            NameOfOwner = "NameOfOwner",
            PhoneOfOwner = "PhoneOfOwner",
            DateSign = "DateSign",
            TypeId = "TypeId",
            FileContractUpload = "FileContractUpload",
            File1 = "File1",
            File2 = "File2",
            File3 = "File3",
            File4 = "File4",
            File5 = "File5",
            File6 = "File6",
            File7 = "File7",
            CreatedBy = "CreatedBy",
            CreatedDate = "CreatedDate",
            UpdatedBy = "UpdatedBy",
            UpdatedDate = "UpdatedDate",
            PlaceId = "PlaceId",
            IdentifyNo = "IdentifyNo",
            IdentifyType = "IdentifyType",
            AddressOfOwner = "AddressOfOwner",
            CurrentAddressOfOwner = "CurrentAddressOfOwner",
            AddressOfOwner2nd = "AddressOfOwner2nd",
            CurrentAddressOfOwner2nd = "CurrentAddressOfOwner2nd",
            EmailOfOwner = "EmailOfOwner",
            NameOfOwner2nd = "NameOfOwner2nd",
            PhoneOfOwner2nd = "PhoneOfOwner2nd",
            IdentifyNo2nd = "IdentifyNo2nd",
            IdentifyType2nd = "IdentifyType2nd",
            AccountBankNo = "AccountBankNo",
            BankName = "BankName",
            AccountName = "AccountName",
            WalletNo = "WalletNo",
            WalletName = "WalletName",
            No = "No",
            Month = "Month",
            Remark1 = "Remark1",
            Remark2 = "Remark2",
            Remark3 = "Remark3",
            Remark4 = "Remark4",
            Remark5 = "Remark5",
            FromDate = "FromDate",
            ToDate = "ToDate",
            BuyOrRent = "BuyOrRent",
            ContractAmt = "ContractAmt",
            TotalArea = "TotalArea",
            ReleaseDate = "ReleaseDate",
            BeginDate = "BeginDate",
            PaymentMethod = "PaymentMethod",
            CityId = "CityId",
            DistrictId = "DistrictId",
            WardsId = "WardsId",
            EcPayPerson = "EcPayPerson",
            EcPayPosition = "EcPayPosition",
            EcPayAuthorityNo = "EcPayAuthorityNo",
            EcPayAuthorityDate = "EcPayAuthorityDate",
            TypeTypeName = "TypeTypeName",
            TypeDescription = "TypeDescription",
            TypePersonSign = "TypePersonSign",
            TypePersonPosition = "TypePersonPosition",
            TypePersonAuthorityNo = "TypePersonAuthorityNo",
            TypeRemark1 = "TypeRemark1",
            TypeRemark2 = "TypeRemark2",
            TypeRemark3 = "TypeRemark3",
            TypeRemark4 = "TypeRemark4",
            TypeRemark5 = "TypeRemark5",
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
            CertificateNo = "CertificateNo",
            CertificateDate = "CertificateDate",
            CertificateCity = "CertificateCity",
            ListDetail = "ListDetail",
            ListSchedule = "ListSchedule",
            Status = "Status",
            YearCancel = "YearCancel",
            YearFixPrice = "YearFixPrice",
            YearBeginRedeal = "YearBeginRedeal",
            RecurringPayment = "RecurringPayment",
            Paid = "Paid",
            ECPayCompanyName = "ECPayCompanyName",
            ECPayAddress = "ECPayAddress",
            ECPayPhone = "ECPayPhone",
            ECPayBankNo = "ECPayBankNo",
            ECPayBankName = "ECPayBankName",
            ECPayBankNameBranch = "ECPayBankNameBranch",
            ContractName = "ContractName",
            RemainAmt = "RemainAmt",
            EndDate = "EndDate",
            ContractAmtString = "ContractAmtString",
            TotalContractAmt = "TotalContractAmt",
            IsCompleted = "IsCompleted"
        }
    }
}
