namespace ECNET.Office {
    export interface TblPlaceDetailsRow {
        Id?: number;
        PlaceId?: number;
        ItemId?: number;
        Value?: string;
        Unit?: string;
        CreatedBy?: string;
        CreatedDate?: string;
        UpdatedDate?: string;
        UpdatedBy?: string;
        Status?: number;
        Note?: string;
        PlaceCode?: string;
        PlaceWidth?: number;
        PlaceLength?: number;
        PlaceTotalArea?: number;
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
        PlaceType?: number;
        PlaceNote?: string;
        PlaceTotalAreaUse?: number;
        ItemItemName?: string;
        ItemUnit?: string;
        ItemItemType?: number;
        ItemCode?: string;
        ItemDecriptions?: string;
        ItemItemGroup?: number;
        ItemDataType?: Web.Modules.Office.Common.DataType;
    }

    export namespace TblPlaceDetailsRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Value';
        export const localTextPrefix = 'Office.TblPlaceDetails';
        export const lookupKey = 'dbo.tblPlaceDetails';

        export function getLookup(): Q.Lookup<TblPlaceDetailsRow> {
            return Q.getLookup<TblPlaceDetailsRow>('dbo.tblPlaceDetails');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id",
            PlaceId = "PlaceId",
            ItemId = "ItemId",
            Value = "Value",
            Unit = "Unit",
            CreatedBy = "CreatedBy",
            CreatedDate = "CreatedDate",
            UpdatedDate = "UpdatedDate",
            UpdatedBy = "UpdatedBy",
            Status = "Status",
            Note = "Note",
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
            PlaceWardsId = "PlaceWardsId",
            PlaceType = "PlaceType",
            PlaceNote = "PlaceNote",
            PlaceTotalAreaUse = "PlaceTotalAreaUse",
            ItemItemName = "ItemItemName",
            ItemUnit = "ItemUnit",
            ItemItemType = "ItemItemType",
            ItemCode = "ItemCode",
            ItemDecriptions = "ItemDecriptions",
            ItemItemGroup = "ItemItemGroup",
            ItemDataType = "ItemDataType"
        }
    }
}
