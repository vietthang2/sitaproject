namespace ECNET.Office {
    export interface TblAssignCampaingRow {
        Id?: number;
    }

    export namespace TblAssignCampaingRow {
        export const idProperty = 'Id';
        export const localTextPrefix = 'Office.TblAssignCampaing';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id"
        }
    }
}
