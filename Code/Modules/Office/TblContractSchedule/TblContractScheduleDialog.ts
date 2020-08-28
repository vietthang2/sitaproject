
namespace ECNET.Office {

    @Serenity.Decorators.registerClass()
    export class TblContractScheduleDialog extends Serenity.EntityDialog<TblContractScheduleRow, any> {
        protected getFormKey() { return TblContractScheduleForm.formKey; }
        protected getIdProperty() { return TblContractScheduleRow.idProperty; }
        protected getLocalTextPrefix() { return TblContractScheduleRow.localTextPrefix; }
        protected getService() { return TblContractScheduleService.baseUrl; }
        protected getDeletePermission() { return TblContractScheduleRow.deletePermission; }
        protected getInsertPermission() { return TblContractScheduleRow.insertPermission; }
        protected getUpdatePermission() { return TblContractScheduleRow.updatePermission; }
        public contractId: number;
        protected form = new TblContractScheduleForm(this.idPrefix);
        loadEntity(entity: TblContractScheduleRow) {
            super.loadEntity(entity);
            this.form.ContractId.value = this.contractId ? this.contractId.toString() : entity.ContractId.toString();
            if (entity.ContractId)
                this.form.ContractId.readOnly = true;
            //this.form.ContractTypeId.value = this.typeContract;

            //Serenity.EditorUtils.setReadOnly(this.form.ItemUnit, true);
            //Serenity.EditorUtils.setReadOnly(this.form.ItemDataType, true);

            //this.form.ItemId.cascadeValue = this.form.ContractTypeId.value;
            //if (entity.ItemId)
            //    this.form.ItemId.value = entity.ItemId.toString();
        }
    }
}