
namespace ECNET.Office {

    @Serenity.Decorators.registerClass()
    export class TblContractPaymentGrid extends Serenity.EntityGrid<TblContractPaymentRow, any> {
        protected getColumnsKey() { return 'Office.TblContractPayment'; }
        protected getDialogType() { return TblContractPaymentDialog; }
        protected getIdProperty() { return TblContractPaymentRow.idProperty; }
        protected getInsertPermission() { return TblContractPaymentRow.insertPermission; }
        protected getLocalTextPrefix() { return TblContractPaymentRow.localTextPrefix; }
        protected getService() { return TblContractPaymentService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}