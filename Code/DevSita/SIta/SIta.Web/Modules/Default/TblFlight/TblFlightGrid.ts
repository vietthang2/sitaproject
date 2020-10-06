
namespace Sita.Default {
    import fld = Sita.Default.TblFlightRow.Fields;
    @Serenity.Decorators.registerClass()
    export class TblFlightGrid extends Serenity.EntityGrid<TblFlightRow, any> {
        protected getColumnsKey() { return 'Default.TblFlight'; }
        protected getDialogType() { return TblFlightDialog; }
        protected getIdProperty() { return TblFlightRow.idProperty; }
        protected getInsertPermission() { return TblFlightRow.insertPermission; }
        protected getLocalTextPrefix() { return TblFlightRow.localTextPrefix; }
        protected getService() { return TblFlightService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
        protected getButtons(): Serenity.ToolButton[] {
            var buttons = super.getButtons();
            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "add-button"), 1);

            return buttons;
        }
        //protected getColumns(): Slick.Column[] {
        //    var columns = super.getColumns();

        //    columns.unshift({
        //        field: 'Bag Tag',
        //        name: '',
        //        format: ctx => '<div class="inline update-status btn btn-success btn-sm active" type="button">Bag Tag</div>',
        //        width: 140,
        //        minWidth: 140,
        //        maxWidth: 140

        //    });
        //    return columns;
        //}
        protected getQuickFilters(): Serenity.QuickFilter<Serenity.Widget<any>, any>[] {

            // get quick filter list from base class, e.g. columns
            let filters = super.getQuickFilters();
            let filter = Q.first(filters, x => x.field == fld.ScheduleDate);
            filter.title = "Schedule Date";
            filter.type = Serenity.DateEditor;
            filter.handler = h => {
                if (h.active) {
                    h.request.Criteria = Serenity.Criteria.and(h.request.Criteria,
                        [[fld.ScheduleDate], '=', h.value]);
                }
            };
            return filters;
        }
    }
}