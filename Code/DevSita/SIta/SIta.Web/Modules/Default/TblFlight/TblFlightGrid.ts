
namespace Sita.Default {

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
        
    }
}