namespace ECNET.Office {
    export interface TblUnitRow {
        Id?: number;
        Code?: string;
        Name?: string;
        Decription?: string;
        Rate?: number;
        CreatedBy?: string;
        CreatedDate?: string;
        UpdatedBy?: string;
        UpdatedDate?: string;
    }

    export namespace TblUnitRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Office.TblUnit';
        export const lookupKey = 'dbo.tblUnit';

        export function getLookup(): Q.Lookup<TblUnitRow> {
            return Q.getLookup<TblUnitRow>('dbo.tblUnit');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id",
            Code = "Code",
            Name = "Name",
            Decription = "Decription",
            Rate = "Rate",
            CreatedBy = "CreatedBy",
            CreatedDate = "CreatedDate",
            UpdatedBy = "UpdatedBy",
            UpdatedDate = "UpdatedDate"
        }
    }
}
