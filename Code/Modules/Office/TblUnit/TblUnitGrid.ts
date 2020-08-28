
namespace ECNET.Office {

    @Serenity.Decorators.registerClass()
    export class TblUnitGrid extends Serenity.EntityGrid<TblUnitRow, any> {
        protected getColumnsKey() { return 'Office.TblUnit'; }
        protected getDialogType() { return TblUnitDialog; }
        protected getIdProperty() { return TblUnitRow.idProperty; }
        protected getInsertPermission() { return TblUnitRow.insertPermission; }
        protected getLocalTextPrefix() { return TblUnitRow.localTextPrefix; }
        protected getService() { return TblUnitService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}