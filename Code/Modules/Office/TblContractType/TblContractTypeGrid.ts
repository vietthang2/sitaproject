
namespace ECNET.Office {

    @Serenity.Decorators.registerClass()
    export class TblContractTypeGrid extends Serenity.EntityGrid<TblContractTypeRow, any> {
        protected getColumnsKey() { return 'Office.TblContractType'; }
        protected getDialogType() { return TblContractTypeDialog; }
        protected getIdProperty() { return TblContractTypeRow.idProperty; }
        protected getInsertPermission() { return TblContractTypeRow.insertPermission; }
        protected getLocalTextPrefix() { return TblContractTypeRow.localTextPrefix; }
        protected getService() { return TblContractTypeService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}