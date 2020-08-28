
namespace ECNET.Office {

    @Serenity.Decorators.registerClass()
    export class TblContractItemsGrid extends Serenity.EntityGrid<TblContractItemsRow, any> {
        protected getColumnsKey() { return 'Office.TblContractItems'; }
        protected getDialogType() { return TblContractItemsDialog; }
        protected getIdProperty() { return TblContractItemsRow.idProperty; }
        protected getInsertPermission() { return TblContractItemsRow.insertPermission; }
        protected getLocalTextPrefix() { return TblContractItemsRow.localTextPrefix; }
        protected getService() { return TblContractItemsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

    }
}