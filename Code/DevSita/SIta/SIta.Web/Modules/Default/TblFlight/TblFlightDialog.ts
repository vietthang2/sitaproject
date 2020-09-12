
namespace Sita.Default {

    @Serenity.Decorators.registerClass()
    export class TblFlightDialog extends Serenity.EntityDialog<TblFlightRow, any> {
        protected getFormKey() { return TblFlightForm.formKey; }
        protected getIdProperty() { return TblFlightRow.idProperty; }
        protected getLocalTextPrefix() { return TblFlightRow.localTextPrefix; }
        protected getNameProperty() { return TblFlightRow.nameProperty; }
        protected getService() { return TblFlightService.baseUrl; }
        protected getDeletePermission() { return TblFlightRow.deletePermission; }
        protected getInsertPermission() { return TblFlightRow.insertPermission; }
        protected getUpdatePermission() { return TblFlightRow.updatePermission; }

        protected form = new TblFlightForm(this.idPrefix);

    }
}