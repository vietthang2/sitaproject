namespace Sita.Default {
    export interface TblConfigSyncDataRow {
        Id?: number;
        SynchronizeOnlyPeriod?: boolean;
        Period?: number;
        SynchronizeLogWhenReturns?: boolean;
        LastSyncDate?: string;
    }

    export namespace TblConfigSyncDataRow {
        export const idProperty = 'Id';
        export const localTextPrefix = 'Default.TblConfigSyncData';
        export const deletePermission = 'Sita:dbo.tblConfigSyncData:Modify';
        export const insertPermission = 'Sita:dbo.tblConfigSyncData:Modify';
        export const readPermission = 'Sita:dbo.tblConfigSyncData:View';
        export const updatePermission = 'Sita:dbo.tblConfigSyncData:Modify';

        export declare const enum Fields {
            Id = "Id",
            SynchronizeOnlyPeriod = "SynchronizeOnlyPeriod",
            Period = "Period",
            SynchronizeLogWhenReturns = "SynchronizeLogWhenReturns",
            LastSyncDate = "LastSyncDate"
        }
    }
}

