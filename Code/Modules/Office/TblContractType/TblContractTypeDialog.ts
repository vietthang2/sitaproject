
namespace ECNET.Office {

    @Serenity.Decorators.registerClass()
    export class TblContractTypeDialog extends Serenity.EntityDialog<TblContractTypeRow, any> {
        protected getFormKey() { return TblContractTypeForm.formKey; }
        protected getIdProperty() { return TblContractTypeRow.idProperty; }
        protected getLocalTextPrefix() { return TblContractTypeRow.localTextPrefix; }
        protected getNameProperty() { return TblContractTypeRow.nameProperty; }
        protected getService() { return TblContractTypeService.baseUrl; }
        protected getDeletePermission() { return TblContractTypeRow.deletePermission; }
        protected getInsertPermission() { return TblContractTypeRow.insertPermission; }
        protected getUpdatePermission() { return TblContractTypeRow.updatePermission; }

        protected form = new TblContractTypeForm(this.idPrefix);

    }
}