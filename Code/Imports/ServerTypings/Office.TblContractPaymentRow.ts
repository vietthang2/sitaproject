namespace ECNET.Office {
    export interface TblContractPaymentRow {
        Id?: number;
        ContractId?: number;
        InvoiceNo?: string;
        DatePaid?: string;
        Period?: string;
        PaidAmount?: number;
        PaidBy?: string;
        CreatedBy?: string;
        CreatedDate?: string;
        FileInvoice?: string;
        File1?: string;
        File2?: string;
        File3?: string;
        File4?: string;
        File5?: string;
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
    }

    export namespace TblContractPaymentRow {
        export const idProperty = 'Id';
        export const nameProperty = 'InvoiceNo';
        export const localTextPrefix = 'Office.TblContractPayment';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id",
            ContractId = "ContractId",
            InvoiceNo = "InvoiceNo",
            DatePaid = "DatePaid",
            Period = "Period",
            PaidAmount = "PaidAmount",
            PaidBy = "PaidBy",
            CreatedBy = "CreatedBy",
            CreatedDate = "CreatedDate",
            FileInvoice = "FileInvoice",
            File1 = "File1",
            File2 = "File2",
            File3 = "File3",
            File4 = "File4",
            File5 = "File5",
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
            ContractUpdatedDate = "ContractUpdatedDate"
        }
    }
}
