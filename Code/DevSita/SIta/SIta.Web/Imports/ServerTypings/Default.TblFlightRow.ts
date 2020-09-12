
namespace Sita.Default {
    export interface TblFlightRow {
        Identify?: string;
        Adi?: string;
        LineCode?: string;
        Number?: string;
        ScheduleDate?: string;
        SoftReplace?: string;
        SiteIata?: string;
        DateBoundảy?: string;
        Chute?: number;
        LastChanged?: string;
        DateCreated?: string;
        UserCreated?: string;
        UserUpdate?: string;
        DateUpdated?: string;
    }

    export namespace TblFlightRow {
        export const idProperty = 'Identify';
        export const nameProperty = 'Identify';
        export const localTextPrefix = 'Default.TblFlight';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export namespace Fields {
            export declare const Identify;
            export declare const Adi;
            export declare const LineCode;
            export declare const Number;
            export declare const ScheduleDate;
            export declare const SoftReplace;
            export declare const SiteIata;
            export declare const DateBoundảy;
            export declare const Chute;
            export declare const LastChanged;
            export declare const DateCreated;
            export declare const UserCreated;
            export declare const UserUpdate;
            export declare const DateUpdated;
        }

        [
            'Identify',
            'Adi',
            'LineCode',
            'Number',
            'ScheduleDate',
            'SoftReplace',
            'SiteIata',
            'DateBoundảy',
            'Chute',
            'LastChanged',
            'DateCreated',
            'UserCreated',
            'UserUpdate',
            'DateUpdated'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}