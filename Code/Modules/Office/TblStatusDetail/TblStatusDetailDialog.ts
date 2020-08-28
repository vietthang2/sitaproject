
namespace ECNET.Office {

    @Serenity.Decorators.registerClass()
    export class TblStatusDetailDialog extends Serenity.EntityDialog<TblStatusDetailRow, any> {
        protected getFormKey() { return TblStatusDetailForm.formKey; }
        protected getIdProperty() { return TblStatusDetailRow.idProperty; }
        protected getLocalTextPrefix() { return TblStatusDetailRow.localTextPrefix; }
        protected getService() { return TblStatusDetailService.baseUrl; }
        protected getDeletePermission() { return TblStatusDetailRow.deletePermission; }
        protected getInsertPermission() { return TblStatusDetailRow.insertPermission; }
        protected getUpdatePermission() { return TblStatusDetailRow.updatePermission; }

        protected form = new TblStatusDetailForm(this.idPrefix);

    }
}