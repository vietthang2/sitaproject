
namespace ECNET.Office {
    /**
       * Our custom product editor type
       */
    @Serenity.Decorators.registerEditor()
    export class FilterLookupItemEditor extends Serenity.LookupEditorBase<Serenity.LookupEditorOptions, Office.TblItemsRow> {

        constructor(container: JQuery, options: Serenity.LookupEditorOptions) {
            super(container, options);
        }

        protected getLookupKey() {
            return Office.TblItemsRow.lookupKey;
        }
        protected getItems(lookup: Q.Lookup<Office.TblItemsRow>) {
            return super.getItems(lookup).filter(x =>
                x.ItemType === 1 );
        }
        protected getItemText(item: Office.TblItemsRow, lookup: Q.Lookup<Office.TblItemsRow>) {
            return item.Code + "-" + super.getItemText(item, lookup);
        }
    }
}