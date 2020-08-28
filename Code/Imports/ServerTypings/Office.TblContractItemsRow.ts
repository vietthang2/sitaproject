namespace ECNET.Office {
    export interface TblContractItemsRow {
        DetailID?: number;
        ContractId?: number;
        ItemId?: number;
        Value?: string;
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
        ItemItemName?: string;
        ItemUnit?: string;
        ItemCode?: string;
        ItemItemType?: number;
        ItemItemGroup?: number;
        ItemDataType?: Web.Modules.Office.Common.DataType;
    }

    export namespace TblContractItemsRow {
        export const idProperty = 'DetailID';
        export const nameProperty = 'Value';
        export const localTextPrefix = 'Office.TblContractItems';
        export const lookupKey = 'dbo.tblContractItems';

        export function getLookup(): Q.Lookup<TblContractItemsRow> {
            return Q.getLookup<TblContractItemsRow>('dbo.tblContractItems');
        }
        export const deletePermission = 'Ecnet:dbo.tblContractItems:Modify';
        export const insertPermission = 'Ecnet:dbo.tblContractItems:Modify';
        export const readPermission = 'Ecnet:dbo.tblContractItems:View';
        export const updatePermission = 'Ecnet:dbo.tblContractItems:Modify';

        export declare const enum Fields {
            DetailID = "DetailID",
            ContractId = "ContractId",
            ItemId = "ItemId",
            Value = "Value",
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
            ItemItemName = "ItemItemName",
            ItemUnit = "ItemUnit",
            ItemCode = "ItemCode",
            ItemItemType = "ItemItemType",
            ItemItemGroup = "ItemItemGroup",
            ItemDataType = "ItemDataType"
        }
    }
}
