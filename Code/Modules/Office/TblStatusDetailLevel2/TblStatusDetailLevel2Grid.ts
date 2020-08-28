
namespace ECNET.Office {

    @Serenity.Decorators.registerClass()
    export class TblStatusDetailLevel2Grid extends Serenity.EntityGrid<TblStatusDetailLevel2Row, any> {
        protected getColumnsKey() { return 'Office.TblStatusDetailLevel2'; }
        protected getDialogType() { return TblStatusDetailLevel2Dialog; }
        protected getIdProperty() { return TblStatusDetailLevel2Row.idProperty; }
        protected getInsertPermission() { return TblStatusDetailLevel2Row.insertPermission; }
        protected getLocalTextPrefix() { return TblStatusDetailLevel2Row.localTextPrefix; }
        protected getService() { return TblStatusDetailLevel2Service.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}