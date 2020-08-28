
namespace ECNET.Office {

    @Serenity.Decorators.registerClass()
    export class TblItemsDialog extends Serenity.EntityDialog<TblItemsRow, any> {
        protected getFormKey() { return TblItemsForm.formKey; }
        protected getIdProperty() { return TblItemsRow.idProperty; }
        protected getLocalTextPrefix() { return TblItemsRow.localTextPrefix; }
        protected getNameProperty() { return TblItemsRow.nameProperty; }
        protected getService() { return TblItemsService.baseUrl; }
        protected getDeletePermission() { return TblItemsRow.deletePermission; }
        protected getInsertPermission() { return TblItemsRow.insertPermission; }
        protected getUpdatePermission() { return TblItemsRow.updatePermission; }

        protected form = new TblItemsForm(this.idPrefix);

    }
}