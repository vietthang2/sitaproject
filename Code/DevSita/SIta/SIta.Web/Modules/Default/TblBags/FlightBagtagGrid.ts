    namespace Sita.Default {

    @Serenity.Decorators.registerClass()
    export class FlightBagtagGrid extends Serenity.EntityGrid<TblBagsRow, any>
    {
        protected getColumnsKey() { return "Default.TblBags"; }
        protected getIdProperty() { return TblBagsRow.idProperty; }
        protected getLocalTextPrefix() { return TblBagsRow.localTextPrefix; }
        protected getService() { return TblBagsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}