namespace ECNET.Office {
    export namespace PlaceExcelImportService {
        export const baseUrl = 'Office/tblPlaceOfBussiness';

        export declare function ExcelImport(request: ExcelImportRequest, onSuccess?: (response: ExcelImportResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            ExcelImport = "Office/tblPlaceOfBussiness/ExcelImport"
        }

        [
            'ExcelImport'
        ].forEach(x => {
            (<any>PlaceExcelImportService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

