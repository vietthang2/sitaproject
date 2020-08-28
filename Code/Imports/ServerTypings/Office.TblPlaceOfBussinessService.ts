namespace ECNET.Office {
    export namespace TblPlaceOfBussinessService {
        export const baseUrl = 'Office/TblPlaceOfBussiness';

        export declare function Create(request: Serenity.SaveRequest<TblPlaceOfBussinessRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<TblPlaceOfBussinessRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TblPlaceOfBussinessRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TblPlaceOfBussinessRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function GetNextNumber(request: GetNextNumberRequest, onSuccess?: (response: System.String) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function ExcelImport(request: ExcelImportRequest, onSuccess?: (response: ExcelImportResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function GetDashbord(request: GetNextNumberRequest, onSuccess?: (response: System.String) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Office/TblPlaceOfBussiness/Create",
            Update = "Office/TblPlaceOfBussiness/Update",
            Delete = "Office/TblPlaceOfBussiness/Delete",
            Retrieve = "Office/TblPlaceOfBussiness/Retrieve",
            List = "Office/TblPlaceOfBussiness/List",
            GetNextNumber = "Office/TblPlaceOfBussiness/GetNextNumber",
            ExcelImport = "Office/TblPlaceOfBussiness/ExcelImport",
            GetDashbord = "Office/TblPlaceOfBussiness/GetDashbord"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List', 
            'GetNextNumber', 
            'ExcelImport', 
            'GetDashbord'
        ].forEach(x => {
            (<any>TblPlaceOfBussinessService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
