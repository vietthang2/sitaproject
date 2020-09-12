
namespace Sita.Default {

    @Serenity.Decorators.registerClass()
    export class TblFieldDialog extends Serenity.EntityDialog<TblFieldRow, any> {
        protected getFormKey() { return TblFieldForm.formKey; }
        protected getIdProperty() { return TblFieldRow.idProperty; }
        protected getLocalTextPrefix() { return TblFieldRow.localTextPrefix; }
        protected getNameProperty() { return TblFieldRow.nameProperty; }
        protected getService() { return TblFieldService.baseUrl; }
        protected getDeletePermission() { return TblFieldRow.deletePermission; }
        protected getInsertPermission() { return TblFieldRow.insertPermission; }
        protected getUpdatePermission() { return TblFieldRow.updatePermission; }

        protected form = new TblFieldForm(this.idPrefix);

    }
}