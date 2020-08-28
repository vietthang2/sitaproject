
namespace ECNET.Office {

    @Serenity.Decorators.registerClass()
    export class TblCampaignTypeGrid extends Serenity.EntityGrid<TblCampaignTypeRow, any> {
        protected getColumnsKey() { return 'Office.TblCampaignType'; }
        protected getDialogType() { return TblCampaignTypeDialog; }
        protected getIdProperty() { return TblCampaignTypeRow.idProperty; }
        protected getInsertPermission() { return TblCampaignTypeRow.insertPermission; }
        protected getLocalTextPrefix() { return TblCampaignTypeRow.localTextPrefix; }
        protected getService() { return TblCampaignTypeService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}