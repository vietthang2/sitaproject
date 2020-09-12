
namespace Sita.Default {
    export interface TblFieldRow {
        Id?: string;
        Name?: string;
        Instance?: string;
        Value?: string;
        FlightRef?: string;
    }

    export namespace TblFieldRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Default.TblField';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export namespace Fields {
            export declare const Id;
            export declare const Name;
            export declare const Instance;
            export declare const Value;
            export declare const FlightRef;
        }

        [
            'Id',
            'Name',
            'Instance',
            'Value',
            'FlightRef'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}