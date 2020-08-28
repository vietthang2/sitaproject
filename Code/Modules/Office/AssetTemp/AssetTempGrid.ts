
namespace ECNET.Office {

    @Serenity.Decorators.registerClass()
    export class AssetTempGrid extends Serenity.EntityGrid<AssetTempRow, any> {
        protected getColumnsKey() { return 'Office.AssetTemp'; }
        protected getDialogType() { return AssetTempDialog; }
        protected getIdProperty() { return AssetTempRow.idProperty; }
        protected getInsertPermission() { return AssetTempRow.insertPermission; }
        protected getLocalTextPrefix() { return AssetTempRow.localTextPrefix; }
        protected getService() { return AssetTempService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}