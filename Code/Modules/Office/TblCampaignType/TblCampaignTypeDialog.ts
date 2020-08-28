
namespace ECNET.Office {

    @Serenity.Decorators.registerClass()
    export class TblCampaignTypeDialog extends Serenity.EntityDialog<TblCampaignTypeRow, any> {
        protected getFormKey() { return TblCampaignTypeForm.formKey; }
        protected getIdProperty() { return TblCampaignTypeRow.idProperty; }
        protected getLocalTextPrefix() { return TblCampaignTypeRow.localTextPrefix; }
        protected getService() { return TblCampaignTypeService.baseUrl; }
        protected getDeletePermission() { return TblCampaignTypeRow.deletePermission; }
        protected getInsertPermission() { return TblCampaignTypeRow.insertPermission; }
        protected getUpdatePermission() { return TblCampaignTypeRow.updatePermission; }

        protected form = new TblCampaignTypeForm(this.idPrefix);

    }
}