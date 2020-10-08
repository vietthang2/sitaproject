
namespace Sita.Default {

    @Serenity.Decorators.registerClass()
    export class TblScheduleCutBagGrid extends Serenity.EntityGrid<TblScheduleCutBagRow, any> {
        protected getColumnsKey() { return 'Default.TblScheduleCutBag'; }
        protected getDialogType() { return TblScheduleCutBagDialog; }
        protected getIdProperty() { return TblScheduleCutBagRow.idProperty; }
        protected getInsertPermission() { return TblScheduleCutBagRow.insertPermission; }
        protected getLocalTextPrefix() { return TblScheduleCutBagRow.localTextPrefix; }
        protected getService() { return TblScheduleCutBagService.baseUrl; }

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