namespace Sita.Default {
    export interface TblFieldRow {
        Id?: string;
        Name?: string;
        Instance?: string;
        Value?: string;
        FlightRef?: string;
        FlightIndentify?: string;
    }

    export namespace TblFieldRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Default.TblField';
        export const deletePermission = 'Sita:dbo.tblField:Modify';
        export const insertPermission = 'Sita:dbo.tblField:Modify';
        export const readPermission = 'Sita:dbo.tblField:View';
        export const updatePermission = 'Sita:dbo.tblField:Modify';

        export declare const enum Fields {
            Id = "Id",
            Name = "Name",
            Instance = "Instance",
            Value = "Value",
            FlightRef = "FlightRef",
            FlightIndentify = "FlightIndentify"
        }
    }
}

