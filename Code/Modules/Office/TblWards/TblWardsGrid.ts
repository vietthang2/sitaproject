
namespace ECNET.Office {

    @Serenity.Decorators.registerClass()
    export class TblWardsGrid extends Serenity.EntityGrid<TblWardsRow, any> {
        protected getColumnsKey() { return 'Office.TblWards'; }
        protected getDialogType() { return TblWardsDialog; }
        protected getIdProperty() { return TblWardsRow.idProperty; }
        protected getInsertPermission() { return TblWardsRow.insertPermission; }
        protected getLocalTextPrefix() { return TblWardsRow.localTextPrefix; }
        protected getService() { return TblWardsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}