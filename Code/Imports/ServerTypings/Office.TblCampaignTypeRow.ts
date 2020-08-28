namespace ECNET.Office {
    export interface TblCampaignTypeRow {
        Id?: number;
    }

    export namespace TblCampaignTypeRow {
        export const idProperty = 'Id';
        export const localTextPrefix = 'Office.TblCampaignType';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id"
        }
    }
}
