
namespace Sita.Default {

    @Serenity.Decorators.registerClass()
    export class TblBagsGrid extends Serenity.EntityGrid<TblBagsRow, any> {
        protected getColumnsKey() { return 'Default.TblBags'; }
        protected getDialogType() { return TblBagsDialog; }
        protected getIdProperty() { return TblBagsRow.idProperty; }
        protected getInsertPermission() { return TblBagsRow.insertPermission; }
        protected getLocalTextPrefix() { return TblBagsRow.localTextPrefix; }
        protected getService() { return TblBagsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
            
        }
        protected  getButtons():Serenity.ToolButton[] {
            var buttons = super.getButtons();
            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "add-button"), 1);
            buttons.push(
                {
                    title: 'Group by Flight',
                    cssClass: 'expand-all-button',
                    onClick: () => this.view.setGrouping(
                        [{
                            formatter: x => 'Flight: ' + x.value + ' (' + x.count + ' items)',
                            getter: 'FlightRef'
                        }])
                },
                {
                    title: 'Group by DDMM',
                    cssClass: 'expand-all-button',
                    onClick: () => this.view.setGrouping(
                        [{
                            formatter: x => 'DDMM: ' + x.value + ' (' + x.count + ' items)',
                            getter: 'DDMM'
                        }])
                }
                , {
                    title: 'Bỏ group',
                    cssClass: 'collapse-all-button',
                    onClick: () => this.view.setGrouping([])
                }
            );
            return buttons;
        }
        protected getColumns(): Slick.Column[] {
            var columns = super.getColumns();
            columns.unshift({
                field: 'FlightRef',
                name: '',
                format: ctx => '<div class="inline update-status btn btn-success btn-sm active" type="button">View Flight</div>',
                width: 140,
                minWidth: 140,
                maxWidth: 140

            });
            return columns;
        }
        protected onClick(e: JQueryEventObject, row: number, cell: number): void {

            // let base grid handle clicks for its edit links


            // if base grid already handled, we shouldn"t handle it again
            if (e.isDefaultPrevented()) {
                return;
            }

            // get reference to current item
            if (row >= 0) {
                var item = this.itemAt(row);
                var target = $(e.target);

                if (target.hasClass("inline")) {
                    e.preventDefault();
                    var dialog_ = new Default.TblFlightDialog();
                    //Tìm kiếm chuyến bay
                    var fligth = TblFlightRow.getLookup().items.filter(k => k.DDMM === item.DDMM && k.YYYY === item.YYYY && (k.LineCode + k.Number) === item.FlightRef);
                    if (fligth.length === 0) {
                        Q.alert('Not found flight');
                        return
                    }
                    //End
                    dialog_.loadEntityAndOpenDialog(fligth[0]);
                    Serenity.SubDialogHelper.bindToDataChange(dialog_, this, (e, dci) => {
                        this.refresh();
                    }, true);
                }
                else {
                    super.onClick(e, row, cell);
                }

            }
        } 
    }
}