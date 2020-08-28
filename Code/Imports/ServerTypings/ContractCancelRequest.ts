namespace ECNET {
    export interface ContractCancelRequest extends Serenity.ServiceRequest {
        Reason?: string;
        Id?: string;
    }
}
