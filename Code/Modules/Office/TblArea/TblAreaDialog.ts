
namespace ECNET.Office {

    @Serenity.Decorators.registerClass()
    export class TblAreaDialog extends Serenity.EntityDialog<TblAreaRow, any> {
        protected getFormKey() { return TblAreaForm.formKey; }
        protected getIdProperty() { return TblAreaRow.idProperty; }
        protected getLocalTextPrefix() { return TblAreaRow.localTextPrefix; }
        protected getNameProperty() { return TblAreaRow.nameProperty; }
        protected getService() { return TblAreaService.baseUrl; }
        protected getDeletePermission() { return TblAreaRow.deletePermission; }
        protected getInsertPermission() { return TblAreaRow.insertPermission; }
        protected getUpdatePermission() { return TblAreaRow.updatePermission; }

        protected form = new TblAreaForm(this.idPrefix);

    }
}