
namespace ECNET.Office {

    @Serenity.Decorators.registerClass()
    export class TblAssetDialog extends Serenity.EntityDialog<TblAssetRow, any> {
        protected getFormKey() { return TblAssetForm.formKey; }
        protected getIdProperty() { return TblAssetRow.idProperty; }
        protected getLocalTextPrefix() { return TblAssetRow.localTextPrefix; }
        protected getNameProperty() { return TblAssetRow.nameProperty; }
        protected getService() { return TblAssetService.baseUrl; }
        protected getDeletePermission() { return TblAssetRow.deletePermission; }
        protected getInsertPermission() { return TblAssetRow.insertPermission; }
        protected getUpdatePermission() { return TblAssetRow.updatePermission; }

        protected form = new TblAssetForm(this.idPrefix);

    }
}