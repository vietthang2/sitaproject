
namespace Sita.Default {

    @Serenity.Decorators.registerClass()
    export class TblScheduleCutBagDialog extends Serenity.EntityDialog<TblScheduleCutBagRow, any> {
        protected getFormKey() { return TblScheduleCutBagForm.formKey; }
        protected getIdProperty() { return TblScheduleCutBagRow.idProperty; }
        protected getLocalTextPrefix() { return TblScheduleCutBagRow.localTextPrefix; }
        protected getService() { return TblScheduleCutBagService.baseUrl; }
        protected getDeletePermission() { return TblScheduleCutBagRow.deletePermission; }
        protected getInsertPermission() { return TblScheduleCutBagRow.insertPermission; }
        protected getUpdatePermission() { return TblScheduleCutBagRow.updatePermission; }

        protected form = new TblScheduleCutBagForm(this.idPrefix);
        constructor() {
            super();
        }
        afterLoadEntity() {
            super.afterLoadEntity();
            this.deleteButton.addClass('disabled');
        }
    }
}