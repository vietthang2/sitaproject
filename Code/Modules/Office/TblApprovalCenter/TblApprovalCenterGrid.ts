
namespace ECNET.Office {
    import fld = ECNET.Office.TblApprovalCenterRow.Fields;
    @Serenity.Decorators.registerClass()
    export class TblApprovalCenterGrid extends Serenity.EntityGrid<TblApprovalCenterRow, any> {
        protected getColumnsKey() { return 'Office.TblApprovalCenter'; }
        protected getDialogType() { return TblApprovalCenterDialog; }
        protected getIdProperty() { return TblApprovalCenterRow.idProperty; }
        protected getInsertPermission() { return TblApprovalCenterRow.insertPermission; }
        protected getLocalTextPrefix() { return TblApprovalCenterRow.localTextPrefix; }
        protected getService() { return TblApprovalCenterService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
        protected getColumns(): Slick.Column[] {
            var columns = super.getColumns();


            //Q.first(columns, x => x.field == fld.Code).format =
            //    ctx => `<a href="javascript:;" class="customer-link">${Q.htmlEncode(ctx.value)}</a>`;
            columns.unshift({
                field: 'View Details',
                name: '',
                format: ctx => '<a class="inline-action view-details" title="view details"></a>',
                width: 24,
                minWidth: 24,
                maxWidth: 24
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

                if (item.Type === 1) {
                    var customer = Q.first(ECNET.Office.TblPlaceOfBussinessRow.getLookup().items,
                        x => x.Code == item.Code);

                    var dialog_ = new ECNET.Office.TblPlaceOfBussinessDialog();
                    dialog_.readOnly = true;
                    dialog_.element.find('.addContract').addClass('disabled');
                    dialog_.loadByIdAndOpenDialog(customer.Id, true);
                }
                else if (item.Type === 2) {
                    //var contract = Q.first(ECNET.Office.TblContractRow.getLookup().items,
                    //    x => x.Id == item.ClientId);

                    var dialogContract_ = new ECNET.Office.TblContractDialog();
                    dialogContract_.readOnly = true;
                    dialogContract_.element.find('.printContract').addClass('disabled');
                    dialogContract_.element.find('.addSchedule').addClass('disabled');
                    dialogContract_.loadByIdAndOpenDialog(item.ClientId, true);
                }
                else if (item.Type === 3) {
                 
                    var dialogProject_ = new ECNET.Office.TblProjectDialog();
                    dialogProject_.readOnly = true;
                    //dialogContract_.element.find('.printContract').addClass('disabled');
                    //dialogContract_.element.find('.addSchedule').addClass('disabled');
                    dialogProject_.loadByIdAndOpenDialog(item.ClientId, true);
                }


            }


        }
        protected getButtons(): Serenity.ToolButton[] {

            // call base method to get list of buttons
            // by default, base entity grid adds a few buttons, 
            // add, refresh, column selection in order.
            var buttons = super.getButtons();

            // here is several methods to remove add button
            // only one is enabled, others are commented

            // METHOD 1
            // we would be able to simply return an empty button list,
            // but this would also remove all other buttons
            // return [];

            // METHOD 2
            // remove by splicing (something like delete by index)
            // here we hard code add button index (not nice!)
            // buttons.splice(0, 1);

            // METHOD 3 - recommended
            // remove by splicing, but this time find button index
            // by its css class. it is the best and safer method
            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "add-button"), 1);
            buttons.push(
                {
                    title: 'Group theo trạng thái',
                    cssClass: 'expand-all-button',
                    onClick: () => this.view.setGrouping(
                        [{
                            formatter: x => Serenity.EnumFormatter.format(Serenity.EnumTypeRegistry.get("Ecnet.Status"), Q.toId(x.value)),
                            getter: 'Status'
                        }])
                },
                {
                    title: 'Group theo loại',
                    cssClass: 'expand-all-button',
                    onClick: () => this.view.setGrouping(
                        [{
                            formatter: x => Serenity.EnumFormatter.format(Serenity.EnumTypeRegistry.get("Ecnet.TypeApprove"), Q.toId(x.value)),
                            getter: 'Type'
                        }])
                }, {
                title: 'Bỏ group',
                cssClass: 'collapse-all-button',
                onClick: () => this.view.setGrouping([])
            }
            );


            return buttons;
        }
        //protected createQuickFilters(): void {

        //    // let base class to create quick filters first
        //    super.createQuickFilters();

        //    // find a quick filter widget by its field name
        //    this.findQuickFilter(Serenity.LookupEditor, fld.Status).values = ["1"];
        //}
        protected getQuickFilters(): Serenity.QuickFilter<Serenity.Widget<any>, any>[] {

            // get quick filter list from base class
            let filters = super.getQuickFilters();

            var filter=Q.first(filters, x => x.field == fld.Status).init = w => {
                // enum editor has a string value, so need to call toString()
                (w as Serenity.EnumEditor).value = "1";//tạo mới
                
                Serenity.EditorUtils.setReadOnly(w, true)
            };
            
            //filters.splice(0, 1);
            return filters;
        }


    }
}