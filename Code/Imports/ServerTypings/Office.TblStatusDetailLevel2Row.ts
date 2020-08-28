namespace ECNET.Office {
    export interface TblStatusDetailLevel2Row {
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
        StatusIsNew?: boolean;
    }

    export namespace TblStatusDetailLevel2Row {
        export const idProperty = 'Id';
        export const localTextPrefix = 'Office.TblStatusDetailLevel2';
        export const lookupKey = 'dbo.tblStatusDetailLevel2';

        export function getLookup(): Q.Lookup<TblStatusDetailLevel2Row> {
            return Q.getLookup<TblStatusDetailLevel2Row>('dbo.tblStatusDetailLevel2');
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
            StatusIsReadOnly = "StatusIsReadOnly",
            StatusIsNew = "StatusIsNew"
        }
    }
}
