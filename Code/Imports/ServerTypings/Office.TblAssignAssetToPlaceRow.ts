namespace ECNET.Office {
    export interface TblAssignAssetToPlaceRow {
        Id?: number;
        PlaceId?: number;
        AssetId?: number;
        FromDate?: string;
        ToDate?: string;
        CreatedBy?: string;
        CreatedDate?: string;
        UpdatedDate?: string;
        UpdateBy?: string;
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
        PlaceStatus?: string;
        AssetName?: string;
        AssetCode?: string;
        AssetGroupId?: number;
    }

    export namespace TblAssignAssetToPlaceRow {
        export const idProperty = 'Id';
        export const nameProperty = 'CreatedBy';
        export const localTextPrefix = 'Office.TblAssignAssetToPlace';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id",
            PlaceId = "PlaceId",
            AssetId = "AssetId",
            FromDate = "FromDate",
            ToDate = "ToDate",
            CreatedBy = "CreatedBy",
            CreatedDate = "CreatedDate",
            UpdatedDate = "UpdatedDate",
            UpdateBy = "UpdateBy",
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
            AssetName = "AssetName",
            AssetCode = "AssetCode",
            AssetGroupId = "AssetGroupId"
        }
    }
}
