
namespace Sita.Default {

    @Serenity.Decorators.registerClass()
    export class TblConfigSyncDataDialog extends Serenity.EntityDialog<TblConfigSyncDataRow, any> {
        protected getFormKey() { return TblConfigSyncDataForm.formKey; }
        protected getIdProperty() { return TblConfigSyncDataRow.idProperty; }
        protected getLocalTextPrefix() { return TblConfigSyncDataRow.localTextPrefix; }
        protected getService() { return TblConfigSyncDataService.baseUrl; }
        protected getDeletePermission() { return TblConfigSyncDataRow.deletePermission; }
        protected getInsertPermission() { return TblConfigSyncDataRow.insertPermission; }
        protected getUpdatePermission() { return TblConfigSyncDataRow.updatePermission; }

        protected form = new TblConfigSyncDataForm(this.idPrefix);
        constructor() {
            super();
        }
        afterLoadEntity() {
            super.afterLoadEntity();
            this.deleteButton.addClass('disabled');
        }
    }
}