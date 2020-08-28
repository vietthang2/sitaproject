
namespace ECNET.Office {

    @Serenity.Decorators.registerClass()
    export class TblAssignCampaingDialog extends Serenity.EntityDialog<TblAssignCampaingRow, any> {
        protected getFormKey() { return TblAssignCampaingForm.formKey; }
        protected getIdProperty() { return TblAssignCampaingRow.idProperty; }
        protected getLocalTextPrefix() { return TblAssignCampaingRow.localTextPrefix; }
        protected getService() { return TblAssignCampaingService.baseUrl; }
        protected getDeletePermission() { return TblAssignCampaingRow.deletePermission; }
        protected getInsertPermission() { return TblAssignCampaingRow.insertPermission; }
        protected getUpdatePermission() { return TblAssignCampaingRow.updatePermission; }

        protected form = new TblAssignCampaingForm(this.idPrefix);

    }
}