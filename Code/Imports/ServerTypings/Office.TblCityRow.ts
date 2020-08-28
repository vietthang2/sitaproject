namespace ECNET.Office {
    export interface TblCityRow {
        Id?: number;
        Name?: string;
        EnName?: string;
        Code?: string;
        ECCode?: string;
    }

    export namespace TblCityRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Office.TblCity';
        export const lookupKey = 'dbo.City';

        export function getLookup(): Q.Lookup<TblCityRow> {
            return Q.getLookup<TblCityRow>('dbo.City');
        }
        export const deletePermission = 'Ecnet:dbo.tblCity:Delete';
        export const insertPermission = 'Ecnet:dbo.tblCity:Modify';
        export const readPermission = 'Ecnet:dbo.tblCity:View';
        export const updatePermission = 'Ecnet:dbo.tblCity:Modify';

        export declare const enum Fields {
            Id = "Id",
            Name = "Name",
            EnName = "EnName",
            Code = "Code",
            ECCode = "ECCode"
        }
    }
}
