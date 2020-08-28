namespace ECNET.Web.Modules.Office.Common {
    export enum Status {
        New = 1,
        Approve = 2,
        Reject = 3,
        Canncel = 4,
        Completed = 5
    }
    Serenity.Decorators.registerEnumType(Status, 'ECNET.Web.Modules.Office.Common.Status', 'Ecnet.Status');
}
