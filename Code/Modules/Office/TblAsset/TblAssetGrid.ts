
namespace ECNET.Office {

    @Serenity.Decorators.registerClass()
    export class TblAssetGrid extends Serenity.EntityGrid<TblAssetRow, any> {
        protected getColumnsKey() { return 'Office.TblAsset'; }
        protected getDialogType() { return TblAssetDialog; }
        protected getIdProperty() { return TblAssetRow.idProperty; }
        protected getInsertPermission() { return TblAssetRow.insertPermission; }
        protected getLocalTextPrefix() { return TblAssetRow.localTextPrefix; }
        protected getService() { return TblAssetService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}