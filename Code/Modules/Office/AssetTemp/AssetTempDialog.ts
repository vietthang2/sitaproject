
namespace ECNET.Office {

    @Serenity.Decorators.registerClass()
    export class AssetTempDialog extends Serenity.EntityDialog<AssetTempRow, any> {
        protected getFormKey() { return AssetTempForm.formKey; }
        protected getIdProperty() { return AssetTempRow.idProperty; }
        protected getLocalTextPrefix() { return AssetTempRow.localTextPrefix; }
        protected getNameProperty() { return AssetTempRow.nameProperty; }
        protected getService() { return AssetTempService.baseUrl; }
        protected getDeletePermission() { return AssetTempRow.deletePermission; }
        protected getInsertPermission() { return AssetTempRow.insertPermission; }
        protected getUpdatePermission() { return AssetTempRow.updatePermission; }

        protected form = new AssetTempForm(this.idPrefix);

    }
}