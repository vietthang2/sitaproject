/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace ECNET.Office {

    @Serenity.Decorators.registerClass()
    export class ScheduleDetailEditorDialog extends Common.GridEditorDialog<TblContractScheduleRow> {
        protected getFormKey() { return TblContractScheduleForm.formKey; }
      //  protected getNameProperty() { return TblContractScheduleRow.nameProperty; }
        protected getLocalTextPrefix() { return TblContractScheduleRow.localTextPrefix; }
        public contractId: number;
        public typeContract: number;
        protected form: TblContractScheduleForm;

        constructor() {
            super();
            this.form = new TblContractScheduleForm(this.idPrefix);


        }
        loadEntity(entity: TblContractScheduleRow) {
            super.loadEntity(entity);
            this.form.ContractId.value = this.contractId ? this.contractId.toString() : null;
            this.form.ContractId.readOnly = true;
            

        }
    }
}