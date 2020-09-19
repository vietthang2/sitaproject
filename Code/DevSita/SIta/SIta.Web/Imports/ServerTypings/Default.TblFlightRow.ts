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

        export declare const enum Fields {
            Identify = "Identify",
            Adi = "Adi",
            LineCode = "LineCode",
            Number = "Number",
            ScheduleDate = "ScheduleDate",
            SoftReplace = "SoftReplace",
            SiteIata = "SiteIata",
            DateBoundảy = "DateBoundảy",
            Chute = "Chute",
            LastChanged = "LastChanged",
            DateCreated = "DateCreated",
            UserCreated = "UserCreated",
            UserUpdate = "UserUpdate",
            DateUpdated = "DateUpdated"
        }
    }
}

