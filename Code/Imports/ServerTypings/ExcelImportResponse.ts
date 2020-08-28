namespace ECNET {
    export interface ExcelImportResponse extends Serenity.ServiceResponse {
        Inserted?: number;
        Updated?: number;
        BatchNo?: string;
        ErrorList?: string[];
    }
}
