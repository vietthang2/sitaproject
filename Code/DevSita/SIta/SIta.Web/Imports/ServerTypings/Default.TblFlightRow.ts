namespace Sita.Default {
    export interface TblFlightRow {
        Identify?: string;
        Adi?: string;
        LineCode?: string;
        Number?: string;
        ScheduleDate?: string;
        SoftReplace?: string;
        SiteIata?: string;
        DateBoundary?: string;
        Chute?: number;
        LastChanged?: string;
        DateCreated?: string;
        UserCreated?: string;
        UserUpdate?: string;
        DateUpdated?: string;
        DDMM?: string;
        YYYY?: string;
        ListField?: TblFieldRow[];
    }

    export namespace TblFlightRow {
        export const idProperty = 'Identify';
        export const nameProperty = 'Identify';
        export const localTextPrefix = 'Default.TblFlight';
        export const lookupKey = 'dbo.tblFlight';

        export function getLookup(): Q.Lookup<TblFlightRow> {
            return Q.getLookup<TblFlightRow>('dbo.tblFlight');
        }
        export const deletePermission = 'Sita:dbo.tblFlight:Modify';
        export const insertPermission = 'Sita:dbo.tblFlight:Modify';
        export const readPermission = 'Sita:dbo.tblFlight:View';
        export const updatePermission = 'Sita:dbo.tblFlight:Modify';

        export declare const enum Fields {
            Identify = "Identify",
            Adi = "Adi",
            LineCode = "LineCode",
            Number = "Number",
            ScheduleDate = "ScheduleDate",
            SoftReplace = "SoftReplace",
            SiteIata = "SiteIata",
            DateBoundary = "DateBoundary",
            Chute = "Chute",
            LastChanged = "LastChanged",
            DateCreated = "DateCreated",
            UserCreated = "UserCreated",
            UserUpdate = "UserUpdate",
            DateUpdated = "DateUpdated",
            DDMM = "DDMM",
            YYYY = "YYYY",
            ListField = "ListField"
        }
    }
}

