
namespace ECNET.Office {

    @Serenity.Decorators.registerClass()
    export class TblAssignAssetToPlaceGrid extends Serenity.EntityGrid<TblAssignAssetToPlaceRow, any> {
        protected getColumnsKey() { return 'Office.TblAssignAssetToPlace'; }
        protected getDialogType() { return TblAssignAssetToPlaceDialog; }
        protected getIdProperty() { return TblAssignAssetToPlaceRow.idProperty; }
        protected getInsertPermission() { return TblAssignAssetToPlaceRow.insertPermission; }
        protected getLocalTextPrefix() { return TblAssignAssetToPlaceRow.localTextPrefix; }
        protected getService() { return TblAssignAssetToPlaceService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}