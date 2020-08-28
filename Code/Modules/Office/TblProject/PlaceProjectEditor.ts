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
    export class PlaceProjectEditor extends
        Serenity.LookupEditorBase<Serenity.LookupEditorOptions, Office.TblPlaceOfBussinessRow> {
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
            return Office.TblPlaceOfBussinessRow.lookupKey;
        }

        /**
         * Here we are filtering by category name but you could filter by any field.
         * Just make sure the fields you filter on has [LookupInclude] attribute on them,
         * otherwise their value will be null in client side as they are not sent back
         * from server in lookup script.
         */
        protected getItems(lookup: Q.Lookup<Office.TblPlaceOfBussinessRow>) {
            var project = TblProjectRow.getLookup().items;
            if (this.myId === 1)
                if (project.length > 0) {
                    return super.getItems(lookup).filter(x =>
                        x.Status === 5 && (x.ContractId == null ? 0 : x.ContractId) > 0 && project.filter(k => k.PlaceId === x.Id).length <= 0);
                }
                else
                    return super.getItems(lookup).filter(x =>
                        x.Status === 5 && (x.ContractId == null ? 0 : x.ContractId) > 0);
                
            else {
                return super.getItems(lookup).filter(x =>
                    x.Status === 5 && (x.ContractId == null ? 0 : x.ContractId) > 0);
            }
                

        }
       //protected getItemText(item: ECNET.Office.TblPlaceOfBussinessRow, lookup: Q.Lookup<Office.TblPlaceOfBussinessRow>) {
       //     return super.getItemText(item, lookup) +
       //         ' ( Trạng thái mặt bằng: ' + Serenity.EnumFormatter.format(Serenity.EnumTypeRegistry.get("Ecnet.Status"), Q.toId(item.Status)) + ' )';


       // }
    }
}