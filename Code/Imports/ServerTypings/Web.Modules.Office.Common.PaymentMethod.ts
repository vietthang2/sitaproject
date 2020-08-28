namespace ECNET.Web.Modules.Office.Common {
    export enum PaymentMethod {
        CASH = 1,
        TRANF = 2,
        WALL = 3
    }
    Serenity.Decorators.registerEnumType(PaymentMethod, 'ECNET.Web.Modules.Office.Common.PaymentMethod', 'Ecnet.PaymentMethod');
}
