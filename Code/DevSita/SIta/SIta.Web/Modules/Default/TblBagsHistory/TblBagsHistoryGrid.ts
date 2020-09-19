
namespace SIta.Default {

    @Serenity.Decorators.registerClass()
    export class TblBagsHistoryGrid extends Serenity.EntityGrid<TblBagsHistoryRow, any> {
        protected getColumnsKey() { return 'Default.TblBagsHistory'; }
        protected getDialogType() { return TblBagsHistoryDialog; }
        protected getIdProperty() { return TblBagsHistoryRow.idProperty; }
        protected getInsertPermission() { return TblBagsHistoryRow.insertPermission; }
        protected getLocalTextPrefix() { return TblBagsHistoryRow.localTextPrefix; }
        protected getService() { return TblBagsHistoryService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}