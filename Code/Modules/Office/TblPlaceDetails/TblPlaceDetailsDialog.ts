
namespace ECNET.Office {

    @Serenity.Decorators.registerClass()
    export class TblPlaceDetailsDialog extends Serenity.EntityDialog<TblPlaceDetailsRow, any> {
        protected getFormKey() { return TblPlaceDetailsForm.formKey; }
        protected getIdProperty() { return TblPlaceDetailsRow.idProperty; }
        protected getLocalTextPrefix() { return TblPlaceDetailsRow.localTextPrefix; }
        protected getNameProperty() { return TblPlaceDetailsRow.nameProperty; }
        protected getService() { return TblPlaceDetailsService.baseUrl; }
        protected getDeletePermission() { return TblPlaceDetailsRow.deletePermission; }
        protected getInsertPermission() { return TblPlaceDetailsRow.insertPermission; }
        protected getUpdatePermission() { return TblPlaceDetailsRow.updatePermission; }

        protected form = new TblPlaceDetailsForm(this.idPrefix);
        // protected form: TblPlaceDetailsForm;
        isExist = false;
        constructor() {
            super();

            this.form = new TblPlaceDetailsForm(this.idPrefix);


            this.form.ItemId.change(e => {
                var lookup = Q.getLookup<TblItemsRow>(TblItemsRow.lookupKey);
                this.form.ItemId.filterField = "ItemGroup";
                this.form.ItemId.filterValue = this.form.PlaceType.value;
            });

            this.form.ItemId.changeSelect2(e => {
                var ItemId = Q.toId(this.form.ItemId.value);
                if (ItemId != null) {

                    this.form.Unit.value = Office.TblItemsRow.getLookup().itemById[ItemId].Unit;
                    this.form.ItemDataType.value = Office.TblItemsRow.getLookup().itemById[ItemId].DataType.toString();
                }
            });
            //this.form.ItemId.addValidationRule(this.uniqueName, e => {
            //    //check exist
            //    if (this.form.Id.value) {
            //        var itemExist = Office.TblPlaceDetailsRow.getLookup().items.filter(e => e.ItemId === parseInt(this.form.ItemId.value) && e.PlaceId === parseInt(this.form.PlaceId.value) &&
            //            e.Status === 1
            //        )
            //        if (itemExist.length > 0)
            //            return "Item này đã được gán";
            //    }

            //});
            this.form.Value.addValidationRule(this.uniqueName, e => {
                //check exist
                if (this.form.ItemDataType.value == "1") {
                    try {
                        var rs = parseInt(this.form.Value.value);
                    } catch (e) {
                        this.form.Value.element.focus();
                        return "Vui lòng nhập số";
                    }
                }
                else if (this.form.ItemDataType.value == "3") {
                    try {
                        var rs = Date.parse(this.form.Value.value);
                    } catch (e) {
                        this.form.Value.element.focus();
                        return "Vui lòng nhập ngày tháng";
                    }
                }
            });
        }
        updateInterface() {
            super.updateInterface();

            Serenity.EditorUtils.setReadOnly(this.form.PlaceId, true);

        }

        loadEntity(entity: TblPlaceDetailsRow) {
            super.loadEntity(entity);

            Serenity.EditorUtils.setReadOnly(this.form.Unit, true);
            Serenity.EditorUtils.setReadOnly(this.form.ItemDataType, true);

            this.form.ItemId.cascadeValue = this.form.PlaceType.value;
            if (entity.ItemId)
                this.form.ItemId.value = entity.ItemId.toString();
        }
    }
}