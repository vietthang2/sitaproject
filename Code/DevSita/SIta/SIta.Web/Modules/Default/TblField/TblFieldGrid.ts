﻿
namespace Sita.Default {

    @Serenity.Decorators.registerClass()
    export class TblFieldGrid extends Serenity.EntityGrid<TblFieldRow, any> {
        protected getColumnsKey() { return 'Default.TblField'; }
        protected getDialogType() { return TblFieldDialog; }
        protected getIdProperty() { return TblFieldRow.idProperty; }
        protected getInsertPermission() { return TblFieldRow.insertPermission; }
        protected getLocalTextPrefix() { return TblFieldRow.localTextPrefix; }
        protected getService() { return TblFieldService.baseUrl; }

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