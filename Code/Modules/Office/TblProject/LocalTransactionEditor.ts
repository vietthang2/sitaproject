namespace ECNET.Office {

    /**
     * This is our category editor that will show only categories of Produce and
     * Seafood. We are subclassing LookupEditorBase which also LookupEditor
     * derives from.
     *
     * After compiling and transforming templates, this editor type will be
     * available in server side to use in our LookupFilterByMultipleForm,
     * which is a version of ProductForm that uses our custom editor.
     */
    @Serenity.Decorators.registerEditor()
    export class LocalTransactionEditor extends
        Serenity.LookupEditorBase<Serenity.LookupEditorOptions, Office.TblTransactionLocationRow> {
        public myId: number;
        constructor(container: JQuery, opt: Serenity.LookupEditorOptions) {
            super(container, opt);
        }

        /**
         * Normally LookupEditor requires a lookup key to determine which set of
         * lookup data to show in editor. As our editor will only show category
         * data, we lock it to category lookup key.
         */
        protected getLookupKey() {
            return Office.TblTransactionLocationRow.lookupKey;
        }

        /**
         * Here we are filtering by category name but you could filter by any field.
         * Just make sure the fields you filter on has [LookupInclude] attribute on them,
         * otherwise their value will be null in client side as they are not sent back
         * from server in lookup script.
         */
        
        protected getItemText(item: ECNET.Office.TblTransactionLocationRow, lookup: Q.Lookup<Office.TblTransactionLocationRow>) {
            return super.getItemText(item, lookup) +
                item.Code + '-' + item.Name;


         }
    }
}