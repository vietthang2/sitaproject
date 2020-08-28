
namespace ECNET.Office {

    @Serenity.Decorators.registerClass()
    export class TblCityDialog extends Serenity.EntityDialog<TblCityRow, any> {
        protected getFormKey() { return TblCityForm.formKey; }
        protected getIdProperty() { return TblCityRow.idProperty; }
        protected getLocalTextPrefix() { return TblCityRow.localTextPrefix; }
        protected getNameProperty() { return TblCityRow.nameProperty; }
        protected getService() { return TblCityService.baseUrl; }
        protected getDeletePermission() { return TblCityRow.deletePermission; }
        protected getInsertPermission() { return TblCityRow.insertPermission; }
        protected getUpdatePermission() { return TblCityRow.updatePermission; }

        protected form = new TblCityForm(this.idPrefix);

    }
}