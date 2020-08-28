
namespace ECNET.Office {

    @Serenity.Decorators.registerClass()
    export class TblContractGrid extends Serenity.EntityGrid<TblContractRow, any> {
        protected getColumnsKey() { return 'Office.TblContract'; }
        protected getDialogType() { return TblContractDialog; }
        protected getIdProperty() { return TblContractRow.idProperty; }
        protected getInsertPermission() { return TblContractRow.insertPermission; }
        protected getLocalTextPrefix() { return TblContractRow.localTextPrefix; }
        protected getService() { return TblContractService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
        protected getColumns(): Slick.Column[] {
            var columns = super.getColumns();

            columns.unshift({
                field: 'View Details',
                name: 'Mặt bằng',
                format: ctx => '<a class="inline-action view-details" title="Mặt bằng"></a>',
                width: 80,
                minWidth: 80,
                maxWidth: 80
            });
            //columns.unshift( {
            //    field: 'View Details',
            //    name: '',
            //    format: ctx => `<a href="javascript:;" class="inline-action customer-link">${Q.htmlEncode(ctx.value)}</a>`,
            //    width: 24,
            //    minWidth: 24,
            //    maxWidth: 24
            //});

            return columns;
        }
        protected onClick(e: JQueryEventObject, row: number, cell: number): void {

            // let base grid handle clicks for its edit links
            super.onClick(e, row, cell);

            // if base grid already handled, we shouldn"t handle it again
            if (e.isDefaultPrevented()) {
                return;
            }

            // get reference to current item
            var item = this.itemAt(row);

            // get reference to clicked element
            var target = $(e.target);

            if (target.hasClass("view-details")) {
                e.preventDefault();
                var dialog_ = new ECNET.Office.TblPlaceOfBussinessDialog();
                dialog_.readOnly = true;
                dialog_.element.find('.addContract').addClass('disabled');
                
                dialog_.loadByIdAndOpenDialog(item.PlaceId, true);


            }


        }
        getButtons() {
            var buttons = super.getButtons();
            buttons.push(ECNET.Common.ExcelExportHelper.createToolButton({
                grid: this,
                title: 'Xuất excel',

                onViewSubmit: () => this.onViewSubmit(),
                service: 'Office/TblContract/ListExcel',
                separator: true
            }));
            if (!Authorization.hasPermission("Ecnet:dbo.tblContract:Modify")) {

                buttons.forEach(e => {
                    e.disabled = true;
                });
            }
            return buttons;
        }
    }
    
}