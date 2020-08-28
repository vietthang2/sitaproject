/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace ECNET.Office {

    @Serenity.Decorators.registerClass()
    export class ScheduleDetailEditor extends Common.GridEditorBase<TblContractScheduleRow> {
        protected getColumnsKey() { return 'Office.TblContractSchedule'; }
        //protected getDialogType() { return TblContractItemsDialog; }
        protected getDialogType() { return ScheduleDetailEditorDialog; }
        protected getLocalTextPrefix() { return TblContractScheduleRow.localTextPrefix; }
        public contractId: number;
        public typeContract: number;

        public formDate: string;
        public toDate: string;
        public amount: number;
        public isRent: boolean;
        public monthRent: number;
        public scheduleMonth: number;
        public contractNo: string;
        public isReadOnly: boolean;
        public ListSource: Office.TblContractScheduleRow[];

        constructor(container: JQuery) {
            super(container);
            
        }
        protected initEntityDialog(itemType: string, dialog: Serenity.Widget<any>) {
            super.initEntityDialog(itemType, dialog);

            // passing codeComite from grid editor to detail dialog
            (dialog as ScheduleDetailEditorDialog).contractId = this.contractId;
            
        }

        //protected validateEntity(row: TblContractItemsRow, id: number) {
        //    if (!super.validateEntity(row, id))
        //        return false;

        //    row.ItemItemName = TblItemsRow.getLookup()
        //        .itemById[row.ItemId].ItemName;

        //    return true;
        //}   
        protected getAddButtonCaption() {
            return "Thêm mới";
        }
        
        protected getButtons(): Serenity.ToolButton[] {
            var buttons = super.getButtons();
            buttons.push({
                title: 'Tạo lịch tự động',
                cssClass: 'addScheduleAuto',
                icon: 'fa-calendar-check-o',
                onClick: () => {
                    if (this.isReadOnly) {
                        Q.alert('Trạng thái không tạo được lịch');
                        return;
                    }
                    Q.confirm("Bạn có muốn tạo lịch tự động, dữ liệu hiện tại sẽ được xóa và tạo mới?",  () => {
                        if(this.isRent==false){
                            Q.alert('Chức năng này chỉ áp dụng cho loại mặt bằng thuê');
                            return;
                        }
                        if(this.monthRent==null || this.monthRent<=0){
                            Q.alert('Vui lòng nhập tháng thuê');
                            return;
                        }
                        if(this.scheduleMonth==null || this.scheduleMonth<=0){
                            Q.alert('Vui lòng nhập tháng định kỳ thanh toán');
                            return;
                        }
                        if(this.formDate==null ){
                            Q.alert('Vui lòng nhập ngày bắt đầu');
                            return;
                        }
                        if (this.toDate == null) {
                            Q.alert('Vui lòng nhập ngày kết thúc');
                            return;
                        }
                        if (this.amount == null) {
                            Q.alert('Vui lòng nhập giá trị hợp đồng');
                            return;
                        }
                        this.view.setItems([], true);
                        var firstDate = Q.parseDate(this.formDate);
                        var secondDate = Q.parseDate(this.toDate);
//                        var months = //Math.round(this.monthRent/this.scheduleMonth);//Math.abs(Math.round((secondDate - firstDate) / 86400000 / 30));
                        var months = Math.abs(Math.ceil((secondDate - firstDate) / 86400000 / 30 / this.scheduleMonth));                      
                        var amount = this.amount;
                        var totalAmount = 0;
                        for (var i = 1; i <= months; i++) {
                            var newDate = this.addDays(firstDate, i==1?0:this.scheduleMonth);
                            var sDate = this.formatDate(newDate);
                            var amountSchedule = amount * this.scheduleMonth;
                            if (i == months) {
                                amountSchedule = (this.amount * this.monthRent) - totalAmount;
                            }
                            totalAmount = totalAmount+amountSchedule;
                           
                            let ent: TblContractScheduleRow = { '__id': this.getNextId(), Amount: amountSchedule, Times: i, Date: sDate, ContractId: this.contractId, ContractNo: this.contractNo };
                            this.view.addItem(ent);
                            //this.ListSource. (ent);
                            
                        }
                        //this.setItems(this.ListSource);
                        Q.notifySuccess('Tạo lịch thành công')  ;

                    })
                }
            }
                
            );
            buttons.push(
                {
                    title: 'Xóa',
                    cssClass: 'delScheduleAuto',
                    icon: 'fa-calendar-check-o',
                    onClick: () => {
                        if (this.isReadOnly) {
                            Q.alert('Trạng thái dữ liệu không xóa được lịch');
                            return;
                        }
                        Q.confirm("Bạn có muốn xóa lịch?", () => {
                            this.view.setItems([], true);

                        });
                            }
                }
            );
            
            return buttons;
        }
       

        addDays(date: Date, months: number): Date {
            //date.setMonth(date.getMonth() == 0 ? 1 : date.getMonth() + months);
            //if (date.getDate() != d) {
            //    date.setDate(0);
            //}
            //return date;
            var date2 = date;
            var d = date2.getDate();
            date2.setMonth(date2.getMonth() + months);
            if (date2.getDate() != d) {
                date2.setDate(0);
            }
            return date2;
            
        }
        formatDate(date: Date): string {
            
            var month = '' + (date.getMonth() + 1);
            var day = '' + date.getDate();
            var year = date.getFullYear();

        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;

        return [year, month, day].join('-');
    }

       
        
    }

}