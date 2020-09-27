
namespace Sita.Default {

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
        protected getButtons(): Serenity.ToolButton[] {
            var buttons = super.getButtons();
            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "add-button"), 1);

            return buttons;
        }
    }
}