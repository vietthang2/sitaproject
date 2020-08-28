namespace ECNET.Web.Modules.Office.Common {
    export enum TypeApprove {
        Place = 1,
        Contract = 2,
        Project = 3
    }
    Serenity.Decorators.registerEnumType(TypeApprove, 'ECNET.Web.Modules.Office.Common.TypeApprove', 'Ecnet.TypeApprove');
}
