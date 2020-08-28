namespace ECNET.Office {
    export interface TblAssetGroupRow {
        Id?: number;
        Name?: string;
        Description?: string;
    }

    export namespace TblAssetGroupRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Office.TblAssetGroup';
        export const lookupKey = 'dbo.tblAssetGroup';

        export function getLookup(): Q.Lookup<TblAssetGroupRow> {
            return Q.getLookup<TblAssetGroupRow>('dbo.tblAssetGroup');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id",
            Name = "Name",
            Description = "Description"
        }
    }
}
