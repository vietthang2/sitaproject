
namespace ECNET.Office {

    @Serenity.Decorators.registerClass()
    export class TblPlaceDetailsGrid extends Serenity.EntityGrid<TblPlaceDetailsRow, any> {
        protected getColumnsKey() { return 'Office.TblPlaceDetails'; }
        protected getDialogType() { return TblPlaceDetailsDialog; }
        protected getIdProperty() { return TblPlaceDetailsRow.idProperty; }
        protected getInsertPermission() { return TblPlaceDetailsRow.insertPermission; }
        protected getLocalTextPrefix() { return TblPlaceDetailsRow.localTextPrefix; }
        protected getService() { return TblPlaceDetailsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}