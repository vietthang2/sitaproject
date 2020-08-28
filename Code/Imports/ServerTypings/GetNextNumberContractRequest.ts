namespace ECNET {
    export interface GetNextNumberContractRequest extends Serenity.ServiceRequest {
        Length?: number;
        PlaceId?: number;
        PlaceCode?: string;
        ContractTypeId?: number;
    }
}
