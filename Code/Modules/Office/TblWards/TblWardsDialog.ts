
namespace ECNET.Office {

    @Serenity.Decorators.registerClass()
    export class TblWardsDialog extends Serenity.EntityDialog<TblWardsRow, any> {
        protected getFormKey() { return TblWardsForm.formKey; }
        protected getIdProperty() { return TblWardsRow.idProperty; }
        protected getLocalTextPrefix() { return TblWardsRow.localTextPrefix; }
        protected getNameProperty() { return TblWardsRow.nameProperty; }
        protected getService() { return TblWardsService.baseUrl; }
        protected getDeletePermission() { return TblWardsRow.deletePermission; }
        protected getInsertPermission() { return TblWardsRow.insertPermission; }
        protected getUpdatePermission() { return TblWardsRow.updatePermission; }

        protected form = new TblWardsForm(this.idPrefix);

    }
}