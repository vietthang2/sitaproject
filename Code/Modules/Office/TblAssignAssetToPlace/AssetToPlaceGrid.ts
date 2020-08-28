
namespace ECNET.Office {

    @Serenity.Decorators.registerClass()
    export class AssetToPlaceGrid extends Serenity.EntityGrid<TblAssignAssetToPlaceRow, any> {
        protected getColumnsKey() { return 'Office.TblAssignAssetToPlace'; }
      //  protected getDialogType() { return TblAssignAssetToPlaceDialog; }
        protected getIdProperty() { return TblAssignAssetToPlaceRow.idProperty; }
      //  protected getInsertPermission() { return TblAssignAssetToPlaceRow.insertPermission; }
        protected getLocalTextPrefix() { return TblAssignAssetToPlaceRow.localTextPrefix; }
        protected getService() { return TblAssignAssetToPlaceService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
        //protected getButtons() {
        //    return null;
        //}

        //protected getInitialTitle() {
        //    return null;
        //}

        //protected usePager() {
        //    return false;
        //}

        protected getGridCanLoad() {
            return this.placeID != null;
        }

        private _placeID: number;

        get placeID() {
            return this._placeID;
        }

        set placeID(value: number) {
            if (this._placeID != value) {
                this._placeID = value;
                //this.setEquality(TblAssignAssetToPlaceRow.Fields.PlaceId, value);
                this.setEquality("PlaceId", value);
                this.refresh();
            }
        }
        protected addButtonClick() {
            var eq = this.view.params.EqualityFilter;
            this.editItem(<TblAssignAssetToPlaceRow>{
                PlaceId: eq ? eq.PlaceId : null
            });
        }
    }
}