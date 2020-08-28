
namespace ECNET.Office {

    @Serenity.Decorators.registerClass()
    export class TblBranchGrid extends Serenity.EntityGrid<TblBranchRow, any> {
        protected getColumnsKey() { return 'Office.TblBranch'; }
        protected getDialogType() { return TblBranchDialog; }
        protected getIdProperty() { return TblBranchRow.idProperty; }
        protected getInsertPermission() { return TblBranchRow.insertPermission; }
        protected getLocalTextPrefix() { return TblBranchRow.localTextPrefix; }
        protected getService() { return TblBranchService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}