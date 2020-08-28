
namespace ECNET.Office {
    import fld = ECNET.Office.TblPlaceOfBussinessRow.Fields;
    @Serenity.Decorators.registerClass()
    export class TblPlaceOfBussinessGrid extends Serenity.EntityGrid<TblPlaceOfBussinessRow, any> {
        protected getColumnsKey() { return 'Office.TblPlaceOfBussiness'; }
        protected getDialogType() { return TblPlaceOfBussinessDialog; }
        protected getIdProperty() { return TblPlaceOfBussinessRow.idProperty; }
        protected getInsertPermission() { return TblPlaceOfBussinessRow.insertPermission; }
        protected getLocalTextPrefix() { return TblPlaceOfBussinessRow.localTextPrefix; }
        protected getService() { return TblPlaceOfBussinessService.baseUrl; }
        batchNo_: string;
       
        constructor(container: JQuery) {
            super(container);
            
        }
        protected addButtonClick() {
            var eq = this.view.params.EqualityFilter;
            this.editItem(<TblPlaceOfBussinessRow>{
                Id: eq ? eq.Id : null
            });
        }
        getButtons() {
            var buttons = super.getButtons();

            buttons.push(ECNET.Common.ExcelExportHelper.createToolButton({
                grid: this,
                title: 'Xuất excel',
                
                onViewSubmit: () => this.onViewSubmit(),
                service: 'Office/TblPlaceOfBussiness/ListExcel',
                separator: true
            }));
            // add our import button
            buttons.push({
                title: 'Nhập Excel',
                cssClass: 'export-xlsx-button',
                onClick: () => {
                    // open import dialog, let it handle rest
                    var dialog = new PlaceExcelImportDialog();
                   
                    dialog.element.on('dialogclose', () => {
                        Serenity.SubDialogHelper.triggerDataChange(this);
                        this.batchNo_ = dialog.BatchNo;
                        
                        
                        this.refresh();
                        this.onViewSubmit();
                        
                        dialog = null;
                        
                    });
                    dialog.dialogOpen();
                }
            }

            );
            buttons.push(
                {
                    title: 'File mẫu import excel',
                    cssClass: 'export-xlsx-button',
                    onClick: () => {
                        Q.postToService({ service: "Office/tblPlaceOfBussiness/FileTemplateDownload", request: null, target: '_blank' });
                      //  window.open("Template_upload_ecnet-V2.xls", '_blank');
                    }
                   
                });

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
                    title: 'Group theo Tỉnh và trạng thái',
                    cssClass: 'expand-all-button',
                    onClick: () => this.view.setGrouping(
                        [{
                            formatter: x => 'Thành phố: ' + x.value + ' (' + x.count + ' items)',
                            getter: 'CityName'
                        }, {
                            //formatter: x => 'Trạng thái: ' + x.value + ' (' + x.count + ' items)',
                            formatter: x => Serenity.EnumFormatter.format(Serenity.EnumTypeRegistry.get("Ecnet.Status"), Q.toId(x.value)),
                            getter: 'Status'
                        }])
                }, {
                title: 'Bỏ group',
                cssClass: 'collapse-all-button',
                onClick: () => this.view.setGrouping([])
            }
            );

            if (!Authorization.hasPermission("Ecnet:dbo.tblPlaceOfBussiness:Modify")) {

                buttons.forEach(e => {
                    e.disabled = true;
                });
            }
            return buttons;
        }
      
        protected getColumns(): Slick.Column[] {
            var columns = super.getColumns();

            columns.unshift({
                field: 'View Details',
                name: 'Hợp đồng',
                format: ctx => '<a class="inline-action view-details" title="Xem hợp đồng"></a>',
                width: 80,
                minWidth: 80,
                maxWidth: 80
            });

            Q.first(columns, x => x.field == fld.ContractNo).format =
                ctx => `<a href="javascript:;" class="contract-link">${Q.htmlEncode(ctx.value)}</a>`;
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
            
            if (item.ContractId) {
                var target = $(e.target);
                if (target.hasClass("view-details")) {
                    e.preventDefault();
                    var dialogContract_ = new ECNET.Office.TblContractDialog();
                    dialogContract_.readOnly = true;
                    dialogContract_.element.find('.printContract').addClass('disabled');
                    dialogContract_.element.find('.addSchedule').addClass('disabled');
                    dialogContract_.loadByIdAndOpenDialog(item.ContractId, true);


                }
                else if (target.hasClass("contract-link")) {
                    e.preventDefault();
                    var dialogContract_ = new ECNET.Office.TblContractDialog();
                    dialogContract_.readOnly = true;
                    dialogContract_.element.find('.printContract').addClass('disabled');
                    dialogContract_.element.find('.addSchedule').addClass('disabled');
                    dialogContract_.loadByIdAndOpenDialog(item.ContractId, true);
                    this.refresh();
                }
            }
            
            //else {
            //    Q.alert("Không tìm thấy hợp đồng");
            //}
            


        }
        protected getQuickFilters(): Serenity.QuickFilter<Serenity.Widget<any>, any>[] {

            // get quick filter list from base class
            let filters = super.getQuickFilters();
            if (this.batchNo_) {
                Q.first(filters, x => x.field == fld.BatchNo).init = w => {
                    // enum editor has a string value, so need to call toString()
                    (w as Serenity.StringEditor).value = this.batchNo_;
                };
            }
            

            return filters;
        }
        
        protected onViewSubmit() {
            if (!super.onViewSubmit()) {
                return false;
            }

            var request = this.view.params as Serenity.ListRequest;
            if (this.batchNo_) {
            request.Criteria = Serenity.Criteria.and(request.Criteria,
                [['BatchNo'], '=', this.batchNo_]);
            }
            return true;
        }
        
       
    }
}