namespace ECNET.Office {
    export interface TblBranchRow {
        Id?: number;
        Code?: string;
        Name?: string;
    }

    export namespace TblBranchRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Office.TblBranch';
        export const lookupKey = '[dbo].[tblBranch]';

        export function getLookup(): Q.Lookup<TblBranchRow> {
            return Q.getLookup<TblBranchRow>('[dbo].[tblBranch]');
        }
        export const deletePermission = 'Ecnet:dbo.tblBranch:Delete';
        export const insertPermission = 'Ecnet:dbo.tblBranch:Modify';
        export const readPermission = 'Ecnet:dbo.tblBranch:View';
        export const updatePermission = 'Ecnet:dbo.tblBranch:Modify';

        export declare const enum Fields {
            Id = "Id",
            Code = "Code",
            Name = "Name"
        }
    }
}
