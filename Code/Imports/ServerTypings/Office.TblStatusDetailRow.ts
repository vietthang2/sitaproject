namespace ECNET.Office {
    export interface TblStatusDetailRow {
        Id?: number;
        StatusId?: number;
        StatusDetailId?: number;
        StatusNextStatus?: number;
        StatusName?: string;
        StatusTypeId?: number;
        StatusCreatedBy?: string;
        StatusCreatedDate?: string;
        StatusUpdatedBy?: string;
        StatusUpdatedDate?: string;
        StatusAllowStatusId?: number;
        StatusIsReadOnly?: boolean;
    }

    export namespace TblStatusDetailRow {
        export const idProperty = 'Id';
        export const localTextPrefix = 'Office.TblStatusDetail';
        export const lookupKey = 'dbo.tblStatusDetail';

        export function getLookup(): Q.Lookup<TblStatusDetailRow> {
            return Q.getLookup<TblStatusDetailRow>('dbo.tblStatusDetail');
        }
        export const deletePermission = 'Ecnet:dbo.tblStatusDetail:Modify';
        export const insertPermission = 'Ecnet:dbo.tblStatusDetail:Modify';
        export const readPermission = 'Ecnet:dbo.tblStatusDetail:View';
        export const updatePermission = 'Ecnet:dbo.tblStatusDetail:Modify';

        export declare const enum Fields {
            Id = "Id",
            StatusId = "StatusId",
            StatusDetailId = "StatusDetailId",
            StatusNextStatus = "StatusNextStatus",
            StatusName = "StatusName",
            StatusTypeId = "StatusTypeId",
            StatusCreatedBy = "StatusCreatedBy",
            StatusCreatedDate = "StatusCreatedDate",
            StatusUpdatedBy = "StatusUpdatedBy",
            StatusUpdatedDate = "StatusUpdatedDate",
            StatusAllowStatusId = "StatusAllowStatusId",
            StatusIsReadOnly = "StatusIsReadOnly"
        }
    }
}
