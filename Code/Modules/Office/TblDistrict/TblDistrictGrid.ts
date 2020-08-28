
namespace ECNET.Office {

    @Serenity.Decorators.registerClass()
    export class TblDistrictGrid extends Serenity.EntityGrid<TblDistrictRow, any> {
        protected getColumnsKey() { return 'Office.TblDistrict'; }
        protected getDialogType() { return TblDistrictDialog; }
        protected getIdProperty() { return TblDistrictRow.idProperty; }
        protected getInsertPermission() { return TblDistrictRow.insertPermission; }
        protected getLocalTextPrefix() { return TblDistrictRow.localTextPrefix; }
        protected getService() { return TblDistrictService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}