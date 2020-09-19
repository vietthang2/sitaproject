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

        export declare const enum Fields {
            Id = "Id",
            Name = "Name",
            Instance = "Instance",
            Value = "Value",
            FlightRef = "FlightRef"
        }
    }
}

