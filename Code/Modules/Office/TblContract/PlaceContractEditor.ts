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
    export class PlaceContractEditor extends
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
            // Lấy danh sách các hợp đồng với status: hủy

            var ContractList = TblContractRow.getLookup().items.filter(k => k.Status === 4);

            if(this.myId===2)
                return super.getItems(lookup).filter(x =>
                    (x.Status === 2 || x.Status === 5) && ((x.ContractId == null ? 0 : x.ContractId) === 0 
                    //Đã có hợp đồng nhưng ở status hủy
                    || ContractList.filter(k => k.Id === x.ContractId).length >0)
                    );
            else
                return super.getItems(lookup).filter(x =>
                    x.Status === 2 || x.Status === 5 );
            
        }
        //protected getItemText(item: ECNET.Office.TblPlaceOfBussinessRow, lookup: Q.Lookup<Office.TblPlaceOfBussinessRow>) {
        //    // Lấy danh sách các hợp đồng với status: hủy

           

        //    return super.getItemText(item, lookup) +
        //        ' ( Trạng thái mặt bằng: ' + Serenity.EnumFormatter.format(Serenity.EnumTypeRegistry.get("Ecnet.Status"), Q.toId(item.Status)) + ' )';
                

        //}
    }
}