
namespace ECNET.Office {

    @Serenity.Decorators.registerClass()
    export class TblProjectGrid extends Serenity.EntityGrid<TblProjectRow, any> {
        protected getColumnsKey() { return 'Office.TblProject'; }
        protected getDialogType() { return TblProjectDialog; }
        protected getIdProperty() { return TblProjectRow.idProperty; }
        protected getInsertPermission() { return TblProjectRow.insertPermission; }
        protected getLocalTextPrefix() { return TblProjectRow.localTextPrefix; }
        protected getService() { return TblProjectService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
            this.refresh();
        }
       
        getButtons() {
            var buttons = super.getButtons();
            
            buttons.push(
                {
                    title: 'Group theo trạng thái',
                    cssClass: 'expand-all-button',
                    onClick: () => this.view.setGrouping(
                        [{
                            formatter: x => 'Trạng thái: ' + x.value + ' (' + x.count + ' items)',
                            getter: 'StatusName'
                        }])
                },
                {
                    title: 'Group theo PGD',
                    cssClass: 'expand-all-button',
                    onClick: () => this.view.setGrouping(
                        [{
                            formatter: x => 'Phòng giao dịch: ' + x.value + ' (' + x.count + ' items)',
                            getter: 'TransactionLocationName'
                        }])
                }
                , {
                title: 'Bỏ group',
                cssClass: 'collapse-all-button',
                onClick: () => this.view.setGrouping([])
            }
            );
            buttons.push(ECNET.Common.ExcelExportHelper.createToolButton({
                grid: this,
                title: 'Xuất excel',

                onViewSubmit: () => this.onViewSubmit(),
                service: 'Office/tblProject/ListExcel',
                separator: true
            }));
            //if (!Authorization.hasPermission("Ecnet:dbo.TblProject:Modify")) {

            //    buttons.forEach(e => {
            //        e.disabled = true;
            //    });
            //}
            return buttons;
        }
        protected onClick(e: JQueryEventObject, row: number, cell: number): void {

            // let base grid handle clicks for its edit links
            

            // if base grid already handled, we shouldn"t handle it again
            if (e.isDefaultPrevented()) {
                return;
            }

            // get reference to current item
            if (row>=0) {
                var item = this.itemAt(row);
                var target = $(e.target);

                if (target.hasClass("inline")) {
                    e.preventDefault();
                    var dialog_ = new ECNET.Office.TblProjectDialog();
                    dialog_.editFrom = 1;
                    dialog_.loadByIdAndOpenDialog(item.Id, true);
                    Serenity.SubDialogHelper.bindToDataChange(dialog_, this, (e, dci) => {
                        this.refresh();
                    }, true);
                }
                else if (target.hasClass("view-timeline")) {
                    e.preventDefault();
                    var dialogTimeline = new ECNET.Office.ProjectTimelinesDialog();
                    dialogTimeline.projectId = item.Id;
                    dialogTimeline.dialogOpen(true);
                   
                }
                {
                    super.onClick(e, row, cell);
                }

            }
        } 

        //    // get reference to clicked element
        protected getColumns(): Slick.Column[] {
            var columns = super.getColumns();


            //Q.first(columns, x => x.field == fld.Code).format =
            //    ctx => `<a href="javascript:;" class="customer-link">${Q.htmlEncode(ctx.value)}</a>`;
            columns.unshift({
                field: 'Cập nhật tiến độ',
                name: '',
                format: ctx => '<div class="inline update-status btn btn-warning btn-xs">Cập nhật tiến độ</div>',
                width: 140,
                minWidth: 140,
                maxWidth: 140
                
            });
            columns.unshift({
                field: 'Time line',
                name: '',
                format: ctx => '<div class="view-timeline btn btn-primary btn-xs">Time line</div>',
                width: 80,
                minWidth: 80,
                maxWidth: 100

            });
          

            return columns;
        }
        


        //}
    }
}