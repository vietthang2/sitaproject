
namespace ECNET.Office {

    @Serenity.Decorators.registerClass()
    export class TblDistrictDialog extends Serenity.EntityDialog<TblDistrictRow, any> {
        protected getFormKey() { return TblDistrictForm.formKey; }
        protected getIdProperty() { return TblDistrictRow.idProperty; }
        protected getLocalTextPrefix() { return TblDistrictRow.localTextPrefix; }
        protected getNameProperty() { return TblDistrictRow.nameProperty; }
        protected getService() { return TblDistrictService.baseUrl; }
        protected getDeletePermission() { return TblDistrictRow.deletePermission; }
        protected getInsertPermission() { return TblDistrictRow.insertPermission; }
        protected getUpdatePermission() { return TblDistrictRow.updatePermission; }

        protected form = new TblDistrictForm(this.idPrefix);

    }
}