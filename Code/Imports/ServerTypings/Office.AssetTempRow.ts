namespace ECNET.Office {
    export interface AssetTempRow {
        Id?: number;
        PId?: number;
        Name?: string;
        Code?: string;
        Type?: number;
        HasContract?: boolean;
        HasProcessed?: boolean;
        CreatedBy?: string;
        CreatedDate?: string;
        UpdatedBy?: string;
        UpdatedDate?: string;
    }

    export namespace AssetTempRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Office.AssetTemp';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id",
            PId = "PId",
            Name = "Name",
            Code = "Code",
            Type = "Type",
            HasContract = "HasContract",
            HasProcessed = "HasProcessed",
            CreatedBy = "CreatedBy",
            CreatedDate = "CreatedDate",
            UpdatedBy = "UpdatedBy",
            UpdatedDate = "UpdatedDate"
        }
    }
}
