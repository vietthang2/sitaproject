
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
namespace ECNET.Office {

    @Serenity.Decorators.registerClass()
    export class PlaceDetailsEditor extends Common.GridEditorBase<TblPlaceDetailsRow> {
        protected getColumnsKey() { return "Office.TblPlaceDetails"; }
        protected getDialogType() { return TblPlaceDetailsDialog; }
        protected getLocalTextPrefix() { return TblPlaceDetailsRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }

        
    }
}