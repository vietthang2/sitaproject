
namespace ECNET.Office {

    @Serenity.Decorators.registerClass()
    export class TblItemsGrid extends Serenity.EntityGrid<TblItemsRow, any> {
        protected getColumnsKey() { return 'Office.TblItems'; }
        protected getDialogType() { return TblItemsDialog; }
        protected getIdProperty() { return TblItemsRow.idProperty; }
        protected getInsertPermission() { return TblItemsRow.insertPermission; }
        protected getLocalTextPrefix() { return TblItemsRow.localTextPrefix; }
        protected getService() { return TblItemsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}