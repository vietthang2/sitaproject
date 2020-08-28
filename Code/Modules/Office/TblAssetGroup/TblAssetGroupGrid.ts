
namespace ECNET.Office {

    @Serenity.Decorators.registerClass()
    export class TblAssetGroupGrid extends Serenity.EntityGrid<TblAssetGroupRow, any> {
        protected getColumnsKey() { return 'Office.TblAssetGroup'; }
        protected getDialogType() { return TblAssetGroupDialog; }
        protected getIdProperty() { return TblAssetGroupRow.idProperty; }
        protected getInsertPermission() { return TblAssetGroupRow.insertPermission; }
        protected getLocalTextPrefix() { return TblAssetGroupRow.localTextPrefix; }
        protected getService() { return TblAssetGroupService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}