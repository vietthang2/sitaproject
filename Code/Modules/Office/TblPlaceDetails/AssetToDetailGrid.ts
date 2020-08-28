
namespace ECNET.Office {

    @Serenity.Decorators.registerClass()
    export class AssetToDetailGrid extends Serenity.EntityGrid<TblPlaceDetailsRow, any> {
        protected getColumnsKey() { return 'Office.TblPlaceDetails'; }
         protected getDialogType() { return TblPlaceDetailsDialog; }
        protected getIdProperty() { return TblPlaceDetailsRow.idProperty; }
        protected getInsertPermission() { return TblPlaceDetailsRow.insertPermission; }
        protected getLocalTextPrefix() { return TblPlaceDetailsRow.localTextPrefix; }
        protected getService() { return TblPlaceDetailsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
        

        protected getGridCanLoad() {
            return this.placeID != null;
        }

        private _placeID: number;
        private _placeType: number;

        get placeID() {
            return this._placeID;
        }
        get placeType() {
            return this._placeType;
        }

        set placeID(value: number) {
            if (this._placeID != value) {
                this._placeID = value;
                //this.setEquality(TblAssignAssetToPlaceRow.Fields.PlaceId, value);
                this.setEquality("PlaceId", value);
                this.refresh();
            }
        }
        set placeType(value: number) {
            if (this._placeType != value) {
                this._placeType = value;
                //this.setEquality(TblAssignAssetToPlaceRow.Fields.PlaceId, value);
                this.setEquality("PlaceType", value);
                this.refresh();
            }
        }
        protected addButtonClick() {
            var eq = this.view.params.EqualityFilter;
            this.editItem(<TblPlaceDetailsRow>{
                PlaceId: eq ? eq.PlaceId : null,
                PlaceType:eq? eq.PlaceType: null
            });
           
        }
       
    }
}