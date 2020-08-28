namespace ECNET.Office {
    export interface TblCampaignRow {
        Id?: number;
    }

    export namespace TblCampaignRow {
        export const idProperty = 'Id';
        export const localTextPrefix = 'Office.TblCampaign';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id"
        }
    }
}
