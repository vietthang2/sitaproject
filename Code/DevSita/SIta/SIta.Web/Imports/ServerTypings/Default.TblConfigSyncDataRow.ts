
namespace Sita.Default {
    export interface TblConfigSyncDataRow {
        Id?: number;
        SynchronizeOnlyPeriod?: boolean;
        Period?: number;
        SynchronizeLogWhenReturns?: boolean;
    }

    export namespace TblConfigSyncDataRow {
        export const idProperty = 'Id';
        export const localTextPrefix = 'Default.TblConfigSyncData';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export namespace Fields {
            export declare const Id;
            export declare const SynchronizeOnlyPeriod;
            export declare const Period;
            export declare const SynchronizeLogWhenReturns;
        }

        [
            'Id',
            'SynchronizeOnlyPeriod',
            'Period',
            'SynchronizeLogWhenReturns'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}