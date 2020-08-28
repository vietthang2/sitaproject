/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace ECNET.Office {
    import fld = TblStatusRow.Fields;
    @Serenity.Decorators.registerClass()
    export class ProjectItemsEditor extends Common.GridEditorBase<TblProjectItemRow> {
        protected getColumnsKey() { return 'Office.TblProjectItem'; }
        //protected getDialogType() { return TblContractItemsDialog; }
        protected getDialogType() { return ProjectItemsEditorDialog; }
        protected getLocalTextPrefix() { return TblProjectItemRow.localTextPrefix; }
        public projectId: number;
        public viewMode: boolean;
        public editFrom: number;

        constructor(container: JQuery) {
            super(container);

        }
        protected initEntityDialog(itemType: string, dialog: Serenity.Widget<any>) {
            super.initEntityDialog(itemType, dialog);

            // passing codeComite from grid editor to detail dialog
            (dialog as ProjectItemsEditorDialog).projetcId = this.projectId;
            (dialog as ProjectItemsEditorDialog).viewMode = this.viewMode;
            (dialog as ProjectItemsEditorDialog).editFrom = this.editFrom;

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
        protected getQuickFilters(): Serenity.QuickFilter<Serenity.Widget<any>, any>[] {

            // get quick filter list from base class
            let filters = super.getQuickFilters();
            filters.splice(0, 1);
            let filterStatus = Q.first(filters, x => x.field == "Status");
           
            return filters;
        }

    }

}