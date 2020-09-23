
namespace Sita.Default {
    export interface TblAdiTypeRow {
        Code?: string;
        Name?: string;
    }

    export namespace TblAdiTypeRow {
        export const idProperty = 'Code';
        export const nameProperty = 'Code';
        export const localTextPrefix = 'Default.TblAdiType';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export namespace Fields {
            export declare const Code;
            export declare const Name;
        }

        [
            'Code',
            'Name'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}