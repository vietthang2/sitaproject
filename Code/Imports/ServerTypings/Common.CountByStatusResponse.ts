namespace ECNET.Common {
    export interface CountByStatusResponse extends Serenity.ServiceResponse {
        Values?: { [key: string]: any }[];
        StatusKeys?: string[];
        StatusLabels?: string[];
    }
}
