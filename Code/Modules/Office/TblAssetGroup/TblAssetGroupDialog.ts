
namespace ECNET.Office {

    @Serenity.Decorators.registerClass()
    export class TblAssetGroupDialog extends Serenity.EntityDialog<TblAssetGroupRow, any> {
        protected getFormKey() { return TblAssetGroupForm.formKey; }
        protected getIdProperty() { return TblAssetGroupRow.idProperty; }
        protected getLocalTextPrefix() { return TblAssetGroupRow.localTextPrefix; }
        protected getNameProperty() { return TblAssetGroupRow.nameProperty; }
        protected getService() { return TblAssetGroupService.baseUrl; }
        protected getDeletePermission() { return TblAssetGroupRow.deletePermission; }
        protected getInsertPermission() { return TblAssetGroupRow.insertPermission; }
        protected getUpdatePermission() { return TblAssetGroupRow.updatePermission; }

        protected form = new TblAssetGroupForm(this.idPrefix);

    }
}