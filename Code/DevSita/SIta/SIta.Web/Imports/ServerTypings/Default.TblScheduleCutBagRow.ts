
namespace Sita.Default {
    export interface TblScheduleCutBagRow {
        Id?: number;
        ScheduleCutDate?: number;
    }

    export namespace TblScheduleCutBagRow {
        export const idProperty = 'Id';
        export const localTextPrefix = 'Default.TblScheduleCutBag';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export namespace Fields {
            export declare const Id;
            export declare const ScheduleCutDate;
        }

        [
            'Id',
            'ScheduleCutDate'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}