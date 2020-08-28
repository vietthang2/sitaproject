namespace ECNET.Office {
    export namespace TblAssignAssetToPlaceService {
        export const baseUrl = 'Office/TblAssignAssetToPlace';

        export declare function Create(request: Serenity.SaveRequest<TblAssignAssetToPlaceRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<TblAssignAssetToPlaceRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TblAssignAssetToPlaceRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TblAssignAssetToPlaceRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Office/TblAssignAssetToPlace/Create",
            Update = "Office/TblAssignAssetToPlace/Update",
            Delete = "Office/TblAssignAssetToPlace/Delete",
            Retrieve = "Office/TblAssignAssetToPlace/Retrieve",
            List = "Office/TblAssignAssetToPlace/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>TblAssignAssetToPlaceService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
