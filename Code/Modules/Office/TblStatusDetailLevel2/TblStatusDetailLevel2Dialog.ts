
namespace ECNET.Office {

    @Serenity.Decorators.registerClass()
    export class TblStatusDetailLevel2Dialog extends Serenity.EntityDialog<TblStatusDetailLevel2Row, any> {
        protected getFormKey() { return TblStatusDetailLevel2Form.formKey; }
        protected getIdProperty() { return TblStatusDetailLevel2Row.idProperty; }
        protected getLocalTextPrefix() { return TblStatusDetailLevel2Row.localTextPrefix; }
        protected getService() { return TblStatusDetailLevel2Service.baseUrl; }
        protected getDeletePermission() { return TblStatusDetailLevel2Row.deletePermission; }
        protected getInsertPermission() { return TblStatusDetailLevel2Row.insertPermission; }
        protected getUpdatePermission() { return TblStatusDetailLevel2Row.updatePermission; }

        protected form = new TblStatusDetailLevel2Form(this.idPrefix);

    }
}