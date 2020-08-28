namespace ECNET.Office {
    export interface TblContractScheduleRow {
        Id?: number;
        ContractId?: number;
        Times?: number;
        Amount?: number;
        Date?: string;
        ContarctNo?: string;
        ContarctNameOfOwner?: string;
        ContarctPhoneOfOwner?: string;
        ContarctDateSign?: string;
        ContarctTypeId?: number;
        ContarctFileContractUpload?: string;
        ContarctFile1?: string;
        ContarctFile2?: string;
        ContarctFile3?: string;
        ContarctFile4?: string;
        ContarctFile5?: string;
        ContarctFile6?: string;
        ContarctFile7?: string;
        ContarctCreatedBy?: string;
        ContarctCreatedDate?: string;
        ContarctUpdatedBy?: string;
        ContarctUpdatedDate?: string;
        ContarctPlaceId?: number;
        ContractIdentifyNo?: string;
        ContractIdentifyType?: number;
        ContarctAddressOfOwner?: string;
        ContarctCurrentAddressOfOwner?: string;
        ContarctEmailOfOwner?: string;
        ContarctNameOfOwner2nd?: string;
        ContarctPhoneOfOwner2nd?: string;
        ContractIdentifyNo2nd?: string;
        ContractIdentifyType2nd?: number;
        ContarctAccountBankNo?: string;
        ContarctBankName?: string;
        ContarctAccountName?: string;
        ContarctWalletNo?: string;
        ContarctWalletName?: string;
        ContractNo?: string;
        ContarctMonth?: number;
        ContarctRemark1?: string;
        ContarctRemark2?: string;
        ContarctRemark3?: string;
        ContarctRemark4?: string;
        ContarctRemark5?: string;
        ContarctFromDate?: string;
        ContarctToDate?: string;
        ContarctBuyOrRent?: number;
        ContarctContractAmt?: number;
        ContarctTotalArea?: number;
        ContarctReleaseDate?: string;
        ContarctBeginDate?: string;
        ContarctPaymentMethod?: number;
        ContarctCityId?: number;
        ContarctDistrictId?: number;
        ContarctEcPayPerson?: string;
        ContarctEcPayPosition?: string;
        ContarctEcPayAuthorityNo?: string;
        ContarctEcPayAuthorityDate?: string;
        ContarctWardsId?: number;
        ContarctAddressOfOwner2nd?: string;
        ContarctCurrentAddressOfOwner2nd?: string;
        ContarctAddress?: string;
        ContarctCertificateNo?: string;
        ContarctCertificateDate?: string;
        ContarctCertificateCity?: number;
    }

    export namespace TblContractScheduleRow {
        export const idProperty = 'Id';
        export const nameProperty = 'ContarctNameOfOwner';
        export const localTextPrefix = 'Office.TblContractSchedule';
        export const lookupKey = 'dbo.tblContractSchedule';

        export function getLookup(): Q.Lookup<TblContractScheduleRow> {
            return Q.getLookup<TblContractScheduleRow>('dbo.tblContractSchedule');
        }
        export const deletePermission = 'Ecnet:dbo.tblContractSchedule:Modify';
        export const insertPermission = 'Ecnet:dbo.tblContractSchedule:Modify';
        export const readPermission = 'Ecnet:dbo.tblContractSchedule:View';
        export const updatePermission = 'Ecnet:dbo.tblContractSchedule:Modify';

        export declare const enum Fields {
            Id = "Id",
            ContractId = "ContractId",
            Times = "Times",
            Amount = "Amount",
            Date = "Date",
            ContarctNo = "ContarctNo",
            ContarctNameOfOwner = "ContarctNameOfOwner",
            ContarctPhoneOfOwner = "ContarctPhoneOfOwner",
            ContarctDateSign = "ContarctDateSign",
            ContarctTypeId = "ContarctTypeId",
            ContarctFileContractUpload = "ContarctFileContractUpload",
            ContarctFile1 = "ContarctFile1",
            ContarctFile2 = "ContarctFile2",
            ContarctFile3 = "ContarctFile3",
            ContarctFile4 = "ContarctFile4",
            ContarctFile5 = "ContarctFile5",
            ContarctFile6 = "ContarctFile6",
            ContarctFile7 = "ContarctFile7",
            ContarctCreatedBy = "ContarctCreatedBy",
            ContarctCreatedDate = "ContarctCreatedDate",
            ContarctUpdatedBy = "ContarctUpdatedBy",
            ContarctUpdatedDate = "ContarctUpdatedDate",
            ContarctPlaceId = "ContarctPlaceId",
            ContractIdentifyNo = "ContractIdentifyNo",
            ContractIdentifyType = "ContractIdentifyType",
            ContarctAddressOfOwner = "ContarctAddressOfOwner",
            ContarctCurrentAddressOfOwner = "ContarctCurrentAddressOfOwner",
            ContarctEmailOfOwner = "ContarctEmailOfOwner",
            ContarctNameOfOwner2nd = "ContarctNameOfOwner2nd",
            ContarctPhoneOfOwner2nd = "ContarctPhoneOfOwner2nd",
            ContractIdentifyNo2nd = "ContractIdentifyNo2nd",
            ContractIdentifyType2nd = "ContractIdentifyType2nd",
            ContarctAccountBankNo = "ContarctAccountBankNo",
            ContarctBankName = "ContarctBankName",
            ContarctAccountName = "ContarctAccountName",
            ContarctWalletNo = "ContarctWalletNo",
            ContarctWalletName = "ContarctWalletName",
            ContractNo = "ContractNo",
            ContarctMonth = "ContarctMonth",
            ContarctRemark1 = "ContarctRemark1",
            ContarctRemark2 = "ContarctRemark2",
            ContarctRemark3 = "ContarctRemark3",
            ContarctRemark4 = "ContarctRemark4",
            ContarctRemark5 = "ContarctRemark5",
            ContarctFromDate = "ContarctFromDate",
            ContarctToDate = "ContarctToDate",
            ContarctBuyOrRent = "ContarctBuyOrRent",
            ContarctContractAmt = "ContarctContractAmt",
            ContarctTotalArea = "ContarctTotalArea",
            ContarctReleaseDate = "ContarctReleaseDate",
            ContarctBeginDate = "ContarctBeginDate",
            ContarctPaymentMethod = "ContarctPaymentMethod",
            ContarctCityId = "ContarctCityId",
            ContarctDistrictId = "ContarctDistrictId",
            ContarctEcPayPerson = "ContarctEcPayPerson",
            ContarctEcPayPosition = "ContarctEcPayPosition",
            ContarctEcPayAuthorityNo = "ContarctEcPayAuthorityNo",
            ContarctEcPayAuthorityDate = "ContarctEcPayAuthorityDate",
            ContarctWardsId = "ContarctWardsId",
            ContarctAddressOfOwner2nd = "ContarctAddressOfOwner2nd",
            ContarctCurrentAddressOfOwner2nd = "ContarctCurrentAddressOfOwner2nd",
            ContarctAddress = "ContarctAddress",
            ContarctCertificateNo = "ContarctCertificateNo",
            ContarctCertificateDate = "ContarctCertificateDate",
            ContarctCertificateCity = "ContarctCertificateCity"
        }
    }
}
