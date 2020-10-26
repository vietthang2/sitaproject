namespace Sita.Default {
    export interface TblScheduleCutBagRow {
        Id?: number;
        ScheduleCutDate?: number;
    }

    export namespace TblScheduleCutBagRow {
        export const idProperty = 'Id';
        export const localTextPrefix = 'Default.TblScheduleCutBag';
        export const deletePermission = 'Sita:dbo.TblScheduleCutBag:Modify';
        export const insertPermission = 'Sita:dbo.TblScheduleCutBag:Modify';
        export const readPermission = 'Sita:dbo.TblScheduleCutBag:View';
        export const updatePermission = 'Sita:dbo.TblScheduleCutBag:Modify';

        export declare const enum Fields {
            Id = "Id",
            ScheduleCutDate = "ScheduleCutDate"
        }
    }
}

