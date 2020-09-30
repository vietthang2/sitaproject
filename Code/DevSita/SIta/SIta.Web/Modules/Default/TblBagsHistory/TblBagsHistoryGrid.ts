
namespace Sita.Default {

    @Serenity.Decorators.registerClass()
    export class TblBagsHistoryGrid extends Serenity.EntityGrid<TblBagsHistoryRow, any> {
        protected getColumnsKey() { return 'Default.TblBagsHistory'; }
        protected getDialogType() { return TblBagsHistoryDialog; }
        protected getIdProperty() { return TblBagsHistoryRow.idProperty; }
        protected getInsertPermission() { return TblBagsHistoryRow.insertPermission; }
        protected getLocalTextPrefix() { return TblBagsHistoryRow.localTextPrefix; }
        protected getService() { return TblBagsHistoryService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
        protected getButtons(): Serenity.ToolButton[] {
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
    }
}