/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace ECNET.Office {

    @Serenity.Decorators.registerClass()
    export class ItemDetailEditor extends Common.GridEditorBase<TblContractItemsRow> {
        protected getColumnsKey() { return 'Office.TblContractItems'; }
        //protected getDialogType() { return TblContractItemsDialog; }
        protected getDialogType() { return ItemDetailEditorDialog; }
        protected getLocalTextPrefix() { return TblContractItemsRow.localTextPrefix; }
        public contractId: number;
        public typeContract: number;
        constructor(container: JQuery) {
            super(container);
            
        }
        protected initEntityDialog(itemType: string, dialog: Serenity.Widget<any>) {
            super.initEntityDialog(itemType, dialog);

            // passing codeComite from grid editor to detail dialog
            (dialog as TblContractItemsDialog).contractId = this.contractId;
            (dialog as TblContractItemsDialog).typeContract = this.typeContract;
        }

        protected validateEntity(row: TblContractItemsRow, id: number) {
            if (!super.validateEntity(row, id))
                return false;

            row.ItemItemName = TblItemsRow.getLookup()
                .itemById[row.ItemId].ItemName;

            return true;
        }   
        protected getAddButtonCaption() {
            return "Thêm mới";
        }

        
    }
}