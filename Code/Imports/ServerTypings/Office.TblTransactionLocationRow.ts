namespace ECNET.Office {
    export interface TblTransactionLocationRow {
        Id?: number;
        Code?: string;
        Name?: string;
        AreaId?: number;
        EmployeeManageId?: number;
        EmployeeCashId?: number;
        PlaceId?: number;
        OpenFrom?: string;
        OpenTo?: string;
        OpeningTime?: string;
        OpeningDate?: string;
        CreatedBy?: string;
        CreatedDate?: string;
        UpdatedBy?: string;
        UpdatedDate?: string;
        Status?: number;
        PlaceCode?: string;
        PlaceWidth?: string;
        PlaceLength?: string;
        PlaceTotalArea?: string;
        PlaceTotalCustomer?: number;
        PlaceLinkGoogleMap?: string;
        PlaceAddress?: string;
        PlaceCityId?: number;
        PlaceDistrictId?: number;
        PlaceContractId?: number;
        PlaceCreatedBy?: string;
        PlaceCreatedDate?: string;
        PlaceUpdateDate?: string;
        PlaceUpdatedBy?: string;
        PlaceTimeOpenFrom?: string;
        PlaceTimeOpenTo?: string;
        PlaceTimeOpening?: string;
        PlaceTimeOpeningDate?: string;
        PlaceStatus?: number;
        PlaceWardsId?: number;
    }

    export namespace TblTransactionLocationRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Code';
        export const localTextPrefix = 'Office.TblTransactionLocation';
        export const lookupKey = 'dbo.tblTransactionLocation';

        export function getLookup(): Q.Lookup<TblTransactionLocationRow> {
            return Q.getLookup<TblTransactionLocationRow>('dbo.tblTransactionLocation');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id",
            Code = "Code",
            Name = "Name",
            AreaId = "AreaId",
            EmployeeManageId = "EmployeeManageId",
            EmployeeCashId = "EmployeeCashId",
            PlaceId = "PlaceId",
            OpenFrom = "OpenFrom",
            OpenTo = "OpenTo",
            OpeningTime = "OpeningTime",
            OpeningDate = "OpeningDate",
            CreatedBy = "CreatedBy",
            CreatedDate = "CreatedDate",
            UpdatedBy = "UpdatedBy",
            UpdatedDate = "UpdatedDate",
            Status = "Status",
            PlaceCode = "PlaceCode",
            PlaceWidth = "PlaceWidth",
            PlaceLength = "PlaceLength",
            PlaceTotalArea = "PlaceTotalArea",
            PlaceTotalCustomer = "PlaceTotalCustomer",
            PlaceLinkGoogleMap = "PlaceLinkGoogleMap",
            PlaceAddress = "PlaceAddress",
            PlaceCityId = "PlaceCityId",
            PlaceDistrictId = "PlaceDistrictId",
            PlaceContractId = "PlaceContractId",
            PlaceCreatedBy = "PlaceCreatedBy",
            PlaceCreatedDate = "PlaceCreatedDate",
            PlaceUpdateDate = "PlaceUpdateDate",
            PlaceUpdatedBy = "PlaceUpdatedBy",
            PlaceTimeOpenFrom = "PlaceTimeOpenFrom",
            PlaceTimeOpenTo = "PlaceTimeOpenTo",
            PlaceTimeOpening = "PlaceTimeOpening",
            PlaceTimeOpeningDate = "PlaceTimeOpeningDate",
            PlaceStatus = "PlaceStatus",
            PlaceWardsId = "PlaceWardsId"
        }
    }
}
