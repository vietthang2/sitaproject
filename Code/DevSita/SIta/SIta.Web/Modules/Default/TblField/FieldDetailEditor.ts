 ///<reference path="../../Common/Helpers/GridEditorBase.ts" />

    namespace Sita.Default {
    @Serenity.Decorators.registerClass()
    export class FieldDetailEditor extends Common.GridEditorBase<TblFieldRow> {
        protected getColumnsKey() { return 'Default.TblField'; }
        //protected getDialogType() { return TblContractItemsDialog; }
        protected getDialogType() { return TblFieldDialog; }
        protected getLocalTextPrefix() { return TblFieldRow.localTextPrefix; }

        public ListSource: Default.TblFieldRow[];

        constructor(container: JQuery) {
            super(container);
            
        }
        getButtons(){
            var buttons = super.getButtons();
            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "add-button"), 1);

            return buttons;
        }
    }
}