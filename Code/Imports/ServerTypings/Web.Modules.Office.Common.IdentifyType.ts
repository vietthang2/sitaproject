namespace ECNET.Web.Modules.Office.Common {
    export enum IdentifyType {
        CMND = 1,
        PASSPORT = 2,
        CCCD = 3
    }
    Serenity.Decorators.registerEnumType(IdentifyType, 'ECNET.Web.Modules.Office.Common.IdentifyType', 'Ecnet.IdentifyType');
}
