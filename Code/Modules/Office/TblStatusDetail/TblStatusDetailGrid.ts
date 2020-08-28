
namespace ECNET.Office {

    @Serenity.Decorators.registerClass()
    export class TblStatusDetailGrid extends Serenity.EntityGrid<TblStatusDetailRow, any> {
        protected getColumnsKey() { return 'Office.TblStatusDetail'; }
        protected getDialogType() { return TblStatusDetailDialog; }
        protected getIdProperty() { return TblStatusDetailRow.idProperty; }
        protected getInsertPermission() { return TblStatusDetailRow.insertPermission; }
        protected getLocalTextPrefix() { return TblStatusDetailRow.localTextPrefix; }
        protected getService() { return TblStatusDetailService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}