
namespace ECNET.Office {

    @Serenity.Decorators.registerClass()
    export class TblContractScheduleGrid extends Serenity.EntityGrid<TblContractScheduleRow, any> {
        protected getColumnsKey() { return 'Office.TblContractSchedule'; }
        protected getDialogType() { return TblContractScheduleDialog; }
        protected getIdProperty() { return TblContractScheduleRow.idProperty; }
        protected getInsertPermission() { return TblContractScheduleRow.insertPermission; }
        protected getLocalTextPrefix() { return TblContractScheduleRow.localTextPrefix; }
        protected getService() { return TblContractScheduleService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}