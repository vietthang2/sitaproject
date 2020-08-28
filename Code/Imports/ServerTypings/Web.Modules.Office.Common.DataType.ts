namespace ECNET.Web.Modules.Office.Common {
    export enum DataType {
        Int = 1,
        String = 2,
        Date = 3
    }
    Serenity.Decorators.registerEnumType(DataType, 'ECNET.Web.Modules.Office.Common.DataType', 'Ecnet.DataType');
}
