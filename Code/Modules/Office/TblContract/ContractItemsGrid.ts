
namespace ECNET.Office {

    @Serenity.Decorators.registerClass()
    export class ContractAssignItemsGrid extends Serenity.EntityGrid<TblContractItemsRow, any> {
        protected getColumnsKey() { return 'Office.TblContractItems'; }
        protected getDialogType() { return TblContractItemsDialog; }
        protected getIdProperty() { return TblContractItemsRow.idProperty; }
        protected getInsertPermission() { return TblContractItemsRow.insertPermission; }
        protected getLocalTextPrefix() { return TblContractItemsRow.localTextPrefix; }
        protected getService() { return TblContractItemsService.baseUrl; }
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
            return this._contractID != null;
        }

        private _contractID: number;

        get contractID() {
            return this._contractID;
        }

        set contractID(value: number) {
            if (this._contractID != value) {
                this._contractID = value;
                //this.setEquality(TblAssignAssetToPlaceRow.Fields.PlaceId, value);
                this.setEquality("ContractId", value);
                this.refresh();
            }
        }
        protected addButtonClick() {
            var eq = this.view.params.EqualityFilter;
            this.editItem(<TblContractItemsRow>{
                ContractId: eq ? eq.ContractId : null
            });
        }
    }
}