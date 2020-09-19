
namespace SIta.Default {
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

        export namespace Fields {
            export declare const BaggageTag;
            export declare const FlightRef;
            export declare const Processed;
            export declare const Bsm;
            export declare const Bpm;
            export declare const TimeRcvBsm;
            export declare const TimeRcvBpm;
            export declare const Id;
            export declare const Ddmm;
            export declare const Yyyy;
            export declare const TblBagsId;
        }

        [
            'BaggageTag',
            'FlightRef',
            'Processed',
            'Bsm',
            'Bpm',
            'TimeRcvBsm',
            'TimeRcvBpm',
            'Id',
            'Ddmm',
            'Yyyy',
            'TblBagsId'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}