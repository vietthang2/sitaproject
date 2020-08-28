namespace ECNET.Office {
    export namespace TblContractService {
        export const baseUrl = 'Office/TblContract';

        export declare function Create(request: Serenity.SaveRequest<TblContractRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<TblContractRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TblContractRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TblContractRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function GetNextNumber(request: GetNextNumberContractRequest, onSuccess?: (response: System.String) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Cancel(request: ContractCancelRequest, onSuccess?: (response: ContractCancelResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Office/TblContract/Create",
            Update = "Office/TblContract/Update",
            Delete = "Office/TblContract/Delete",
            Retrieve = "Office/TblContract/Retrieve",
            List = "Office/TblContract/List",
            GetNextNumber = "Office/TblContract/GetNextNumber",
            Cancel = "Office/TblContract/Cancel"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List', 
            'GetNextNumber', 
            'Cancel'
        ].forEach(x => {
            (<any>TblContractService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
