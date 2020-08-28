
namespace ECNET.Office {

    @Serenity.Decorators.registerClass()
    export class TblContractPaymentDialog extends Serenity.EntityDialog<TblContractPaymentRow, any> {
        protected getFormKey() { return TblContractPaymentForm.formKey; }
        protected getIdProperty() { return TblContractPaymentRow.idProperty; }
        protected getLocalTextPrefix() { return TblContractPaymentRow.localTextPrefix; }
        protected getNameProperty() { return TblContractPaymentRow.nameProperty; }
        protected getService() { return TblContractPaymentService.baseUrl; }
        protected getDeletePermission() { return TblContractPaymentRow.deletePermission; }
        protected getInsertPermission() { return TblContractPaymentRow.insertPermission; }
        protected getUpdatePermission() { return TblContractPaymentRow.updatePermission; }

        protected form = new TblContractPaymentForm(this.idPrefix);

    }
}