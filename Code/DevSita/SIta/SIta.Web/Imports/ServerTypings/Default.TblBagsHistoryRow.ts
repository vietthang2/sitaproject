namespace Sita.Default {
    export interface TblBagsHistoryRow {
        BaggageTag?: string;
        FlightRef?: string;
        Processed?: boolean;
        Bsm?: string;
        Bpm?: string;
        TimeRcvBsm?: string;
        TimeRcvBpm?: string;
        Id?: number;
        Ddmm?: string;
        Yyyy?: string;
        TblBagsId?: number;
    }

    export namespace TblBagsHistoryRow {
        export const idProperty = 'Id';
        export const nameProperty = 'BaggageTag';
        export const localTextPrefix = 'Default.TblBagsHistory';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            BaggageTag = "BaggageTag",
            FlightRef = "FlightRef",
            Processed = "Processed",
            Bsm = "Bsm",
            Bpm = "Bpm",
            TimeRcvBsm = "TimeRcvBsm",
            TimeRcvBpm = "TimeRcvBpm",
            Id = "Id",
            Ddmm = "Ddmm",
            Yyyy = "Yyyy",
            TblBagsId = "TblBagsId"
        }
    }
}

