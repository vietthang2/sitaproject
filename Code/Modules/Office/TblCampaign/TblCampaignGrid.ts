
namespace ECNET.Office {

    @Serenity.Decorators.registerClass()
    export class TblCampaignGrid extends Serenity.EntityGrid<TblCampaignRow, any> {
        protected getColumnsKey() { return 'Office.TblCampaign'; }
        protected getDialogType() { return TblCampaignDialog; }
        protected getIdProperty() { return TblCampaignRow.idProperty; }
        protected getInsertPermission() { return TblCampaignRow.insertPermission; }
        protected getLocalTextPrefix() { return TblCampaignRow.localTextPrefix; }
        protected getService() { return TblCampaignService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}