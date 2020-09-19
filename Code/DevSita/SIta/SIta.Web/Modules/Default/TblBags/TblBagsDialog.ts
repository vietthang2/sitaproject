
namespace Sita.Default {

    @Serenity.Decorators.panel()
    export class TblBagsDialog extends Serenity.EntityDialog<TblBagsRow, any> {
        protected getFormKey() { return TblBagsForm.formKey; }
        protected getIdProperty() { return TblBagsRow.idProperty; }
        protected getLocalTextPrefix() { return TblBagsRow.localTextPrefix; }
        protected getNameProperty() { return TblBagsRow.nameProperty; }
        protected getService() { return TblBagsService.baseUrl; }
        protected getDeletePermission() { return TblBagsRow.deletePermission; }
        protected getInsertPermission() { return TblBagsRow.insertPermission; }
        protected getUpdatePermission() { return TblBagsRow.updatePermission; }

        protected form = new TblBagsForm(this.idPrefix);

    }
}