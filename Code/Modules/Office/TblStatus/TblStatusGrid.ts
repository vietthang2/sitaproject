
namespace ECNET.Office {

    @Serenity.Decorators.registerClass()
    export class TblStatusGrid extends Serenity.EntityGrid<TblStatusRow, any> {
        protected getColumnsKey() { return 'Office.TblStatus'; }
        protected getDialogType() { return TblStatusDialog; }
        protected getIdProperty() { return TblStatusRow.idProperty; }
        protected getInsertPermission() { return TblStatusRow.insertPermission; }
        protected getLocalTextPrefix() { return TblStatusRow.localTextPrefix; }
        protected getService() { return TblStatusService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}