namespace ECNET.Office {
    export interface TblItemsRow {
        Id?: number;
        ItemName?: string;
        Unit?: string;
        ItemType?: Web.Modules.Office.Common.TypeOfItem;
        ItemGroup?: Web.Modules.Office.Common.ItemGroup;
        DataType?: Web.Modules.Office.Common.DataType;
        Code?: string;
        Decriptions?: string;
    }

    export namespace TblItemsRow {
        export const idProperty = 'Id';
        export const nameProperty = 'ItemName';
        export const localTextPrefix = 'Office.TblItems';
        export const lookupKey = 'dbo.tblItems';

        export function getLookup(): Q.Lookup<TblItemsRow> {
            return Q.getLookup<TblItemsRow>('dbo.tblItems');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id",
            ItemName = "ItemName",
            Unit = "Unit",
            ItemType = "ItemType",
            ItemGroup = "ItemGroup",
            DataType = "DataType",
            Code = "Code",
            Decriptions = "Decriptions"
        }
    }
}
