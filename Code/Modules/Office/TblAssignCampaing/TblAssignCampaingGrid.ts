
namespace ECNET.Office {

    @Serenity.Decorators.registerClass()
    export class TblAssignCampaingGrid extends Serenity.EntityGrid<TblAssignCampaingRow, any> {
        protected getColumnsKey() { return 'Office.TblAssignCampaing'; }
        protected getDialogType() { return TblAssignCampaingDialog; }
        protected getIdProperty() { return TblAssignCampaingRow.idProperty; }
        protected getInsertPermission() { return TblAssignCampaingRow.insertPermission; }
        protected getLocalTextPrefix() { return TblAssignCampaingRow.localTextPrefix; }
        protected getService() { return TblAssignCampaingService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}