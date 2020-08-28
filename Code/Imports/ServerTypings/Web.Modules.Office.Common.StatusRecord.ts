namespace ECNET.Web.Modules.Office.Common {
    export enum StatusRecord {
        NEW = 0,
        APPROVE = 1,
        REJECT = 2,
        RETRY = 3
    }
    Serenity.Decorators.registerEnumType(StatusRecord, 'ECNET.Web.Modules.Office.Common.StatusRecord', 'Ecnet.StatusRecord');
}
