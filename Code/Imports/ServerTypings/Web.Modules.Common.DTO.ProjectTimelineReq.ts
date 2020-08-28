namespace ECNET.Web.Modules.Common.DTO {
    export interface ProjectTimelineReq extends Serenity.ServiceRequest {
        UserName?: string;
        Action?: string;
        Body?: string;
        Header?: string;
        Footer?: string;
        ProjectId?: number;
    }
}
