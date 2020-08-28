
namespace ECNET.Office {

    @Serenity.Decorators.registerClass()
    export class TblTransactionLocationDialog extends Serenity.EntityDialog<TblTransactionLocationRow, any> {
        protected getFormKey() { return TblTransactionLocationForm.formKey; }
        protected getIdProperty() { return TblTransactionLocationRow.idProperty; }
        protected getLocalTextPrefix() { return TblTransactionLocationRow.localTextPrefix; }
        protected getNameProperty() { return TblTransactionLocationRow.nameProperty; }
        protected getService() { return TblTransactionLocationService.baseUrl; }
        protected getDeletePermission() { return TblTransactionLocationRow.deletePermission; }
        protected getInsertPermission() { return TblTransactionLocationRow.insertPermission; }
        protected getUpdatePermission() { return TblTransactionLocationRow.updatePermission; }

        protected form = new TblTransactionLocationForm(this.idPrefix);

    }
}