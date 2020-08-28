namespace ECNET.Office {
    export namespace ContractConformCanncelFormService {
        export const baseUrl = 'Office/tblContract';

        export declare function Cancel(request: ContractCancelRequest, onSuccess?: (response: ContractCancelResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Cancel = "Office/tblContract/Cancel"
        }

        [
            'Cancel'
        ].forEach(x => {
            (<any>ContractConformCanncelFormService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

