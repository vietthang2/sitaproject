namespace ECNET.Office {
    export interface TblContractItemsForm {
        ContractId: Serenity.LookupEditor;
        ItemId: Serenity.LookupEditor;
        ItemUnit: Serenity.StringEditor;
        ItemDataType: Serenity.EnumEditor;
        Value: Serenity.StringEditor;
        ItemItemGroup: Serenity.StringEditor;
        ContractTypeId: Serenity.IntegerEditor;
    }

    export class TblContractItemsForm extends Serenity.PrefixedContext {
        static formKey = 'Office.TblContractItems';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TblContractItemsForm.init)  {
                TblContractItemsForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.StringEditor;
                var w2 = s.EnumEditor;
                var w3 = s.IntegerEditor;

                Q.initFormType(TblContractItemsForm, [
                    'ContractId', w0,
                    'ItemId', w0,
                    'ItemUnit', w1,
                    'ItemDataType', w2,
                    'Value', w1,
                    'ItemItemGroup', w1,
                    'ContractTypeId', w3
                ]);
            }
        }
    }
}
