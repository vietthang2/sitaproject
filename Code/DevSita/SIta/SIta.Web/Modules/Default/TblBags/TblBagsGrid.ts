﻿
namespace Sita.Default {

    @Serenity.Decorators.registerClass()
    export class TblBagsGrid extends Serenity.EntityGrid<TblBagsRow, any> {
        protected getColumnsKey() { return 'Default.TblBags'; }
        protected getDialogType() { return TblBagsDialog; }
        protected getIdProperty() { return TblBagsRow.idProperty; }
        protected getInsertPermission() { return TblBagsRow.insertPermission; }
        protected getLocalTextPrefix() { return TblBagsRow.localTextPrefix; }
        protected getService() { return TblBagsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
            
        }
        protected  getButtons():Serenity.ToolButton[] {
            var buttons = super.getButtons();
            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "add-button"), 1);

            return buttons;
        }
    }
}