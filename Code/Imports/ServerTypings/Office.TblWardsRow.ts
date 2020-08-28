namespace ECNET.Office {
    export interface TblWardsRow {
        Id?: number;
        DistrictId?: number;
        Name?: string;
        Code?: string;
        EnName?: string;
        DistrictCityId?: number;
        DistrictName?: string;
        DistrictEnName?: string;
    }

    export namespace TblWardsRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Office.TblWards';
        export const lookupKey = 'dbo.tblWards';

        export function getLookup(): Q.Lookup<TblWardsRow> {
            return Q.getLookup<TblWardsRow>('dbo.tblWards');
        }
        export const deletePermission = 'Ecnet:dbo.tblWards:Delete';
        export const insertPermission = 'Ecnet:dbo.tblWards:Modify';
        export const readPermission = 'Ecnet:dbo.tblWards:View';
        export const updatePermission = 'Ecnet:dbo.tblWards:Modify';

        export declare const enum Fields {
            Id = "Id",
            DistrictId = "DistrictId",
            Name = "Name",
            Code = "Code",
            EnName = "EnName",
            DistrictCityId = "DistrictCityId",
            DistrictName = "DistrictName",
            DistrictEnName = "DistrictEnName"
        }
    }
}
