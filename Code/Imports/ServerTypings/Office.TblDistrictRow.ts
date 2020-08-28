namespace ECNET.Office {
    export interface TblDistrictRow {
        Id?: number;
        CityId?: number;
        Name?: string;
        Code?: string;
        EnName?: string;
        CityName?: string;
    }

    export namespace TblDistrictRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Office.TblDistrict';
        export const lookupKey = 'dbo.tblDistrict';

        export function getLookup(): Q.Lookup<TblDistrictRow> {
            return Q.getLookup<TblDistrictRow>('dbo.tblDistrict');
        }
        export const deletePermission = 'Ecnet:dbo.tblDistrict:Delete';
        export const insertPermission = 'Ecnet:dbo.tblDistrict:Modify';
        export const readPermission = 'Ecnet:dbo.tblDistrict:View';
        export const updatePermission = 'Ecnet:dbo.tblDistrict:Modify';

        export declare const enum Fields {
            Id = "Id",
            CityId = "CityId",
            Name = "Name",
            Code = "Code",
            EnName = "EnName",
            CityName = "CityName"
        }
    }
}
