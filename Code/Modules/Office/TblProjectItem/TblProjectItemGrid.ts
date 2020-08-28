
namespace ECNET.Office {
    import fld = TblProjectItemRow.Fields;
    @Serenity.Decorators.registerClass()
    export class TblProjectItemGrid extends Serenity.EntityGrid<TblProjectItemRow, any> {
        protected getColumnsKey() { return 'Office.TblProjectItem'; }
        protected getDialogType() { return TblProjectItemDialog; }
        protected getIdProperty() { return TblProjectItemRow.idProperty; }
        protected getInsertPermission() { return TblProjectItemRow.insertPermission; }
        protected getLocalTextPrefix() { return TblProjectItemRow.localTextPrefix; }
        protected getService() { return TblProjectItemService.baseUrl; }
        public viewMode: boolean;
        constructor(container: JQuery) {
            super(container);
           
        }
        protected getButtons(): Serenity.ToolButton[] {

            // call base method to get list of buttons
            // by default, base entity grid adds a few buttons, 
            // add, refresh, column selection in order.
            var buttons = super.getButtons();
            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "add-button"), 1);
            return buttons;
        }
        protected getQuickFilters(): Serenity.QuickFilter<Serenity.Widget<any>, any>[] {

            // get quick filter list from base class
            let filters = super.getQuickFilters();
            if (this.viewMode) {
                let filterprojectCode = Q.tryFirst(filters, x => x.field == fld.ProjectCode);
                
            }
            
            return filters;
        }
        protected getColumns(): Slick.Column[] {
            var columns = super.getColumns();


            //Q.first(columns, x => x.field == fld.Code).format =
            //    ctx => `<a href="javascript:;" class="customer-link">${Q.htmlEncode(ctx.value)}</a>`;
            columns.unshift({
                field: 'Cập nhật tiến độ',
                name: '',
                format: ctx => '<div class="inline update-status btn btn-success btn-sm active" type="button">Cập nhật tiến độ</div>',
                width: 140,
                minWidth: 140,
                maxWidth: 140

            });
            Q.first(columns, x => x.field == fld.ProjectCode).format =
                ctx => `<a href="javascript:;" class="project-link">${Q.htmlEncode(ctx.value)}</a>`;

            

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
                    var dialog_ = new ECNET.Office.TblProjectItemDialog();
                    dialog_.editFrom = 1;
                    dialog_.loadByIdAndOpenDialog(item.Id, false);
                    Serenity.SubDialogHelper.bindToDataChange(dialog_, this, (e, dci) => {
                        this.refresh();
                    }, true);
                }
                else
                    if (target.hasClass("project-link")) {
                        e.preventDefault();
                        var dialogContract_ = new ECNET.Office.TblProjectDialog();
                        //dialogContract_.readOnly = true;
                        //dialogContract_.element.find('.printContract').addClass('disabled');
                        //dialogContract_.element.find('.addSchedule').addClass('disabled');
                        dialogContract_.loadByIdAndOpenDialog(item.ProjectId, true);
                        this.refresh();
                    }
                {
                    super.onClick(e, row, cell);
                }

            }
        }
    }
}