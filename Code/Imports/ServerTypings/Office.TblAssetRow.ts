namespace ECNET.Office {
    export interface TblAssetRow {
        Id?: number;
        Name?: string;
        Code?: string;
        GroupId?: number;
        GroupName?: string;
        GroupDescription?: string;
    }

    export namespace TblAssetRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Office.TblAsset';
        export const lookupKey = 'dbo.tblAsset';

        export function getLookup(): Q.Lookup<TblAssetRow> {
            return Q.getLookup<TblAssetRow>('dbo.tblAsset');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id",
            Name = "Name",
            Code = "Code",
            GroupId = "GroupId",
            GroupName = "GroupName",
            GroupDescription = "GroupDescription"
        }
    }
}
