namespace Sita.Default {
    export interface TblBagsRow {
        BaggageTag?: string;
        FlightRef?: string;
        Processed?: boolean;
        Bsm?: string;
        Bpm?: string;
        TimeRcvBsm?: string;
        TimeRcvBpm?: string;
        Id?: number;
        DDMM?: string;
        YYYY?: string;
    }

    export namespace TblBagsRow {
        export const idProperty = 'Id';
        export const nameProperty = 'BaggageTag';
        export const localTextPrefix = 'Default.TblBags';
        export const deletePermission = 'Sita:dbo.tblBags:Modify';
        export const insertPermission = 'Sita:dbo.tblBags:Modify';
        export const readPermission = 'Sita:dbo.tblBags:View';
        export const updatePermission = 'Sita:dbo.tblBags:Modify';

        export declare const enum Fields {
            BaggageTag = "BaggageTag",
            FlightRef = "FlightRef",
            Processed = "Processed",
            Bsm = "Bsm",
            Bpm = "Bpm",
            TimeRcvBsm = "TimeRcvBsm",
            TimeRcvBpm = "TimeRcvBpm",
            Id = "Id",
            DDMM = "DDMM",
            YYYY = "YYYY"
        }
    }
}

