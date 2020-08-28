/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace ECNET.Office {

    @Serenity.Decorators.registerClass()
    export class ItemDetailEditorDialog extends Common.GridEditorDialog<TblContractItemsRow> {
        protected getFormKey() { return TblContractItemsForm.formKey; }
        protected getNameProperty() { return TblContractItemsRow.nameProperty; }
        protected getLocalTextPrefix() { return TblContractItemsRow.localTextPrefix; }
        public contractId: number;
        public typeContract: number;
        protected form: TblContractItemsForm;

        constructor() {
            super();
            this.form = new TblContractItemsForm(this.idPrefix);

            this.form.ItemId.change(e => {
                var lookup = Q.getLookup<TblItemsRow>(TblItemsRow.lookupKey);
                this.form.ItemId.filterField = "ItemGroup";
                this.form.ItemId.filterValue = this.form.ItemItemGroup.value;
            });

            this.form.ItemId.changeSelect2(e => {
                var ItemId = Q.toId(this.form.ItemId.value);
                if (ItemId != null) {

                    this.form.ItemUnit.value = Office.TblItemsRow.getLookup().itemById[ItemId].Unit;
                    this.form.ItemDataType.value = Office.TblItemsRow.getLookup().itemById[ItemId].DataType.toString();
                }
            });
            this.form.ItemId.addValidationRule(this.uniqueName, e => {
                //check exist
                if (this.isNewOrDeleted) {
                    var itemExist = Office.TblContractItemsRow.getLookup().items.filter(e => e.ItemId === parseInt(this.form.ItemId.value) && e.ContractId === parseInt(this.form.ContractId.value));
                    if (itemExist.length > 0) {
                        // return false;
                        this.form.ItemId.element.focus();
                        return "Item này đã được gán";
                    }


                }


            });
            this.form.Value.addValidationRule(this.uniqueName, e => {
                //check exist
                if (this.form.ItemDataType.value == "1") {
                    try {
                        if (isNaN(e.val())) {
                            this.form.Value.element.focus();
                            return "Vui lòng nhập số";
                        }

                    }
                    catch (e) {
                        this.form.Value.element.focus();
                        return "Vui lòng nhập số";
                    }
                }
                else if (this.form.ItemDataType.value == "3") {
                    try {
                        var rs = Date.parse(e.val());

                    } catch (e) {
                        this.form.Value.element.focus();
                        return "Vui lòng nhập ngày tháng";
                    }
                }
            });

        }
        loadEntity(entity: TblContractItemsRow) {
            super.loadEntity(entity);
            this.form.ContractId.value = this.contractId ? this.contractId.toString() : null;
            this.form.ContractTypeId.value = this.typeContract;

            Serenity.EditorUtils.setReadOnly(this.form.ItemUnit, true);
            Serenity.EditorUtils.setReadOnly(this.form.ItemDataType, true);

            this.form.ItemId.cascadeValue = this.form.ContractTypeId.value;
            if (entity.ItemId)
                this.form.ItemId.value = entity.ItemId.toString();
        }
    }
}