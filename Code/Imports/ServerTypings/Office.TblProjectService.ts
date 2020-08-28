namespace ECNET.Office {
    export namespace TblProjectService {
        export const baseUrl = 'Office/TblProject';

        export declare function Create(request: Serenity.SaveRequest<TblProjectRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<TblProjectRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TblProjectRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TblProjectRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function GetProjectCode(request: Serenity.ServiceRequest, onSuccess?: (response: System.String) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Office/TblProject/Create",
            Update = "Office/TblProject/Update",
            Delete = "Office/TblProject/Delete",
            Retrieve = "Office/TblProject/Retrieve",
            List = "Office/TblProject/List",
            GetProjectCode = "Office/TblProject/GetProjectCode"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List', 
            'GetProjectCode'
        ].forEach(x => {
            (<any>TblProjectService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
