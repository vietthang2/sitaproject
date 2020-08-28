
namespace ECNET.Office {
    /**
       * Our custom product editor type
       */
    @Serenity.Decorators.registerEditor()
    export class ChangingLookupTextEditor extends Serenity.LookupEditorBase<Serenity.LookupEditorOptions, Office.TblAssetRow> {

        constructor(container: JQuery, options: Serenity.LookupEditorOptions) {
            super(container, options);
        }

        protected getLookupKey() {
            return Office.TblAssetRow.lookupKey;
        }

        protected getItemText(item: Office.TblAssetRow, lookup: Q.Lookup<Office.TblAssetRow>) {
            return item.Code+"-" + super.getItemText(item, lookup);
        }
    }
}