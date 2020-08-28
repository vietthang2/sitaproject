namespace ECNET.Office {
    export interface TblAssetGroupForm {
        Name: Serenity.StringEditor;
        Description: Serenity.StringEditor;
    }

    export class TblAssetGroupForm extends Serenity.PrefixedContext {
        static formKey = 'Office.TblAssetGroup';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TblAssetGroupForm.init)  {
                TblAssetGroupForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(TblAssetGroupForm, [
                    'Name', w0,
                    'Description', w0
                ]);
            }
        }
    }
}
