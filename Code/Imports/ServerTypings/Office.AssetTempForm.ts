namespace ECNET.Office {
    export interface AssetTempForm {
        PId: Serenity.IntegerEditor;
        Name: Serenity.StringEditor;
        Code: Serenity.StringEditor;
        Type: Serenity.IntegerEditor;
        HasContract: Serenity.BooleanEditor;
        HasProcessed: Serenity.BooleanEditor;
        CreatedBy: Serenity.StringEditor;
        CreatedDate: Serenity.DateEditor;
        UpdatedBy: Serenity.StringEditor;
        UpdatedDate: Serenity.DateEditor;
    }

    export class AssetTempForm extends Serenity.PrefixedContext {
        static formKey = 'Office.AssetTemp';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!AssetTempForm.init)  {
                AssetTempForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.StringEditor;
                var w2 = s.BooleanEditor;
                var w3 = s.DateEditor;

                Q.initFormType(AssetTempForm, [
                    'PId', w0,
                    'Name', w1,
                    'Code', w1,
                    'Type', w0,
                    'HasContract', w2,
                    'HasProcessed', w2,
                    'CreatedBy', w1,
                    'CreatedDate', w3,
                    'UpdatedBy', w1,
                    'UpdatedDate', w3
                ]);
            }
        }
    }
}
