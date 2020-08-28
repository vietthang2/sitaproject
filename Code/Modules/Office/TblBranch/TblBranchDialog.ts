
namespace ECNET.Office {

    @Serenity.Decorators.registerClass()
    export class TblBranchDialog extends Serenity.EntityDialog<TblBranchRow, any> {
        protected getFormKey() { return TblBranchForm.formKey; }
        protected getIdProperty() { return TblBranchRow.idProperty; }
        protected getLocalTextPrefix() { return TblBranchRow.localTextPrefix; }
        protected getNameProperty() { return TblBranchRow.nameProperty; }
        protected getService() { return TblBranchService.baseUrl; }
        protected getDeletePermission() { return TblBranchRow.deletePermission; }
        protected getInsertPermission() { return TblBranchRow.insertPermission; }
        protected getUpdatePermission() { return TblBranchRow.updatePermission; }

        protected form = new TblBranchForm(this.idPrefix);

    }
}