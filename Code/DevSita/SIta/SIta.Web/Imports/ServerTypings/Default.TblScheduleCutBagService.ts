namespace Sita.Default {
    export namespace TblScheduleCutBagService {
        export const baseUrl = 'Default/TblScheduleCutBag';

        export declare function Create(request: Serenity.SaveRequest<TblScheduleCutBagRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<TblScheduleCutBagRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TblScheduleCutBagRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TblScheduleCutBagRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Default/TblScheduleCutBag/Create",
            Update = "Default/TblScheduleCutBag/Update",
            Delete = "Default/TblScheduleCutBag/Delete",
            Retrieve = "Default/TblScheduleCutBag/Retrieve",
            List = "Default/TblScheduleCutBag/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>TblScheduleCutBagService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

