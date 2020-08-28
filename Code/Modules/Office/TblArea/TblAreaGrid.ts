
namespace ECNET.Office {

    @Serenity.Decorators.registerClass()
    export class TblAreaGrid extends Serenity.EntityGrid<TblAreaRow, any> {
        protected getColumnsKey() { return 'Office.TblArea'; }
        protected getDialogType() { return TblAreaDialog; }
        protected getIdProperty() { return TblAreaRow.idProperty; }
        protected getInsertPermission() { return TblAreaRow.insertPermission; }
        protected getLocalTextPrefix() { return TblAreaRow.localTextPrefix; }
        protected getService() { return TblAreaService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}