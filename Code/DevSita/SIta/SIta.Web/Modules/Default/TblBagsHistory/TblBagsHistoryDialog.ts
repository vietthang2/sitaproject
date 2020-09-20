
namespace Sita.Default {

    @Serenity.Decorators.panel()
    export class TblBagsHistoryDialog extends Serenity.EntityDialog<TblBagsHistoryRow, any> {
        protected getFormKey() { return TblBagsHistoryForm.formKey; }
        protected getIdProperty() { return TblBagsHistoryRow.idProperty; }
        protected getLocalTextPrefix() { return TblBagsHistoryRow.localTextPrefix; }
        protected getNameProperty() { return TblBagsHistoryRow.nameProperty; }
        protected getService() { return TblBagsHistoryService.baseUrl; }
        protected getDeletePermission() { return TblBagsHistoryRow.deletePermission; }
        protected getInsertPermission() { return TblBagsHistoryRow.insertPermission; }
        protected getUpdatePermission() { return TblBagsHistoryRow.updatePermission; }

        protected form = new TblBagsHistoryForm(this.idPrefix);

    }
}