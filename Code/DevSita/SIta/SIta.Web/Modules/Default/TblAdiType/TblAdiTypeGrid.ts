
namespace Sita.Default {

    @Serenity.Decorators.registerClass()
    export class TblAdiTypeGrid extends Serenity.EntityGrid<TblAdiTypeRow, any> {
        protected getColumnsKey() { return 'Default.TblAdiType'; }
        protected getDialogType() { return TblAdiTypeDialog; }
        protected getIdProperty() { return TblAdiTypeRow.idProperty; }
        protected getInsertPermission() { return TblAdiTypeRow.insertPermission; }
        protected getLocalTextPrefix() { return TblAdiTypeRow.localTextPrefix; }
        protected getService() { return TblAdiTypeService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}