namespace ECNET {
    export interface ContractCancelResponse extends Serenity.ServiceResponse {
        Inserted?: number;
        Updated?: number;
        BatchNo?: string;
        ErrorList?: string[];
    }
}
