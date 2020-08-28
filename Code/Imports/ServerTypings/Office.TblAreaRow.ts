namespace ECNET.Office {
    export interface TblAreaRow {
        Id?: number;
        Code?: string;
        BranchCode?: string;
        Name?: string;
    }

    export namespace TblAreaRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Office.TblArea';
        export const lookupKey = 'dbo.TblAreaRow';

        export function getLookup(): Q.Lookup<TblAreaRow> {
            return Q.getLookup<TblAreaRow>('dbo.TblAreaRow');
        }
        export const deletePermission = 'Ecnet:dbo.tblArea:Delete';
        export const insertPermission = 'Ecnet:dbo.tblArea:Modify';
        export const readPermission = 'Ecnet:dbo.tblArea:View';
        export const updatePermission = 'Ecnet:dbo.tblArea:Modify';

        export declare const enum Fields {
            Id = "Id",
            Code = "Code",
            BranchCode = "BranchCode",
            Name = "Name"
        }
    }
}
