
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
    }

    export namespace TblBagsRow {
        export const idProperty = 'Id';
        export const nameProperty = 'BaggageTag';
        export const localTextPrefix = 'Default.TblBags';
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
        }

        [
            'BaggageTag',
            'FlightRef',
            'Processed',
            'Bsm',
            'Bpm',
            'TimeRcvBsm',
            'TimeRcvBpm',
            'Id'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}