
namespace Sita.Default {

    @Serenity.Decorators.registerClass()
    export class TblAdiTypeDialog extends Serenity.EntityDialog<TblAdiTypeRow, any> {
        protected getFormKey() { return TblAdiTypeForm.formKey; }
        protected getIdProperty() { return TblAdiTypeRow.idProperty; }
        protected getLocalTextPrefix() { return TblAdiTypeRow.localTextPrefix; }
        protected getNameProperty() { return TblAdiTypeRow.nameProperty; }
        protected getService() { return TblAdiTypeService.baseUrl; }
        protected getDeletePermission() { return TblAdiTypeRow.deletePermission; }
        protected getInsertPermission() { return TblAdiTypeRow.insertPermission; }
        protected getUpdatePermission() { return TblAdiTypeRow.updatePermission; }

        protected form = new TblAdiTypeForm(this.idPrefix);

    }
}