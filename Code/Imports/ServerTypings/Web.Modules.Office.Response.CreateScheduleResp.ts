namespace ECNET.Web.Modules.Office.Response {
    export interface CreateScheduleResp extends Serenity.ServiceResponse {
        result?: boolean;
        ErrorList?: string[];
    }
}
