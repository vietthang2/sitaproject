
namespace ECNET.Office {

    @Serenity.Decorators.registerClass()
    export class TblCityGrid extends Serenity.EntityGrid<TblCityRow, any> {
        protected getColumnsKey() { return 'Office.TblCity'; }
        protected getDialogType() { return TblCityDialog; }
        protected getIdProperty() { return TblCityRow.idProperty; }
        protected getInsertPermission() { return TblCityRow.insertPermission; }
        protected getLocalTextPrefix() { return TblCityRow.localTextPrefix; }
        protected getService() { return TblCityService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}