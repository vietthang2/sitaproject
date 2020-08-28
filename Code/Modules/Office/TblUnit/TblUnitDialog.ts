
namespace ECNET.Office {

    @Serenity.Decorators.registerClass()
    export class TblUnitDialog extends Serenity.EntityDialog<TblUnitRow, any> {
        protected getFormKey() { return TblUnitForm.formKey; }
        protected getIdProperty() { return TblUnitRow.idProperty; }
        protected getLocalTextPrefix() { return TblUnitRow.localTextPrefix; }
        protected getNameProperty() { return TblUnitRow.nameProperty; }
        protected getService() { return TblUnitService.baseUrl; }
        protected getDeletePermission() { return TblUnitRow.deletePermission; }
        protected getInsertPermission() { return TblUnitRow.insertPermission; }
        protected getUpdatePermission() { return TblUnitRow.updatePermission; }

        protected form = new TblUnitForm(this.idPrefix);

    }
}