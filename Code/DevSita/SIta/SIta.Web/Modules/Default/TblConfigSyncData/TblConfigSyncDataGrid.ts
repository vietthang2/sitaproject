
namespace Sita.Default {

    @Serenity.Decorators.registerClass()
    export class TblConfigSyncDataGrid extends Serenity.EntityGrid<TblConfigSyncDataRow, any> {
        protected getColumnsKey() { return 'Default.TblConfigSyncData'; }
        protected getDialogType() { return TblConfigSyncDataDialog; }
        protected getIdProperty() { return TblConfigSyncDataRow.idProperty; }
        protected getInsertPermission() { return TblConfigSyncDataRow.insertPermission; }
        protected getLocalTextPrefix() { return TblConfigSyncDataRow.localTextPrefix; }
        protected getService() { return TblConfigSyncDataService.baseUrl; }

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