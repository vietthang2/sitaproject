namespace Sita.Default {
    export interface TblAdiTypeRow {
        Code?: string;
        Name?: string;
    }

    export namespace TblAdiTypeRow {
        export const idProperty = 'Code';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Default.TblAdiType';
        export const lookupKey = 'dbo.tblType';

        export function getLookup(): Q.Lookup<TblAdiTypeRow> {
            return Q.getLookup<TblAdiTypeRow>('dbo.tblType');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Code = "Code",
            Name = "Name"
        }
    }
}

