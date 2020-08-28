namespace ECNET.Web.Modules.Office.Common {
    export enum StatusType {
        Place = 1,
        Contract = 2,
        Project = 3,
        ProjectItem = 4
    }
    Serenity.Decorators.registerEnumType(StatusType, 'ECNET.Web.Modules.Office.Common.StatusType', 'Ecnet.StatusType');
}
