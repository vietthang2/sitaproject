namespace ECNET.Office {
    export namespace TblStatusDetailLevel2Service {
        export const baseUrl = 'Office/TblStatusDetailLevel2';

        export declare function Create(request: Serenity.SaveRequest<TblStatusDetailLevel2Row>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<TblStatusDetailLevel2Row>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TblStatusDetailLevel2Row>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TblStatusDetailLevel2Row>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Office/TblStatusDetailLevel2/Create",
            Update = "Office/TblStatusDetailLevel2/Update",
            Delete = "Office/TblStatusDetailLevel2/Delete",
            Retrieve = "Office/TblStatusDetailLevel2/Retrieve",
            List = "Office/TblStatusDetailLevel2/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>TblStatusDetailLevel2Service)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
