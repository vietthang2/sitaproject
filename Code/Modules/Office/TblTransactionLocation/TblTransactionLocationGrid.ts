
namespace ECNET.Office {

    @Serenity.Decorators.registerClass()
    export class TblTransactionLocationGrid extends Serenity.EntityGrid<TblTransactionLocationRow, any> {
        protected getColumnsKey() { return 'Office.TblTransactionLocation'; }
        protected getDialogType() { return TblTransactionLocationDialog; }
        protected getIdProperty() { return TblTransactionLocationRow.idProperty; }
        protected getInsertPermission() { return TblTransactionLocationRow.insertPermission; }
        protected getLocalTextPrefix() { return TblTransactionLocationRow.localTextPrefix; }
        protected getService() { return TblTransactionLocationService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}