namespace ECNET.Office {
    export interface TblItemsForm {
        Code: Serenity.StringEditor;
        ItemName: Serenity.StringEditor;
        Unit: Serenity.StringEditor;
        DataType: Serenity.EnumEditor;
        ItemType: Serenity.EnumEditor;
        ItemGroup: Serenity.EnumEditor;
        Decriptions: Serenity.TextAreaEditor;
    }

    export class TblItemsForm extends Serenity.PrefixedContext {
        static formKey = 'Office.TblItems';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TblItemsForm.init)  {
                TblItemsForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.EnumEditor;
                var w2 = s.TextAreaEditor;

                Q.initFormType(TblItemsForm, [
                    'Code', w0,
                    'ItemName', w0,
                    'Unit', w0,
                    'DataType', w1,
                    'ItemType', w1,
                    'ItemGroup', w1,
                    'Decriptions', w2
                ]);
            }
        }
    }
}
