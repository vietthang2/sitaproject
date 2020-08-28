
namespace ECNET.Office {

    @Serenity.Decorators.registerClass()
    export class TblCampaignDialog extends Serenity.EntityDialog<TblCampaignRow, any> {
        protected getFormKey() { return TblCampaignForm.formKey; }
        protected getIdProperty() { return TblCampaignRow.idProperty; }
        protected getLocalTextPrefix() { return TblCampaignRow.localTextPrefix; }
        protected getService() { return TblCampaignService.baseUrl; }
        protected getDeletePermission() { return TblCampaignRow.deletePermission; }
        protected getInsertPermission() { return TblCampaignRow.insertPermission; }
        protected getUpdatePermission() { return TblCampaignRow.updatePermission; }

        protected form = new TblCampaignForm(this.idPrefix);

    }
}