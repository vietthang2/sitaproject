namespace ECNET.Office {
    export interface TblAssetForm {
        Name: Serenity.StringEditor;
        Code: Serenity.StringEditor;
        GroupId: Serenity.LookupEditor;
    }

    export class TblAssetForm extends Serenity.PrefixedContext {
        static formKey = 'Office.TblAsset';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TblAssetForm.init)  {
                TblAssetForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.LookupEditor;

                Q.initFormType(TblAssetForm, [
                    'Name', w0,
                    'Code', w0,
                    'GroupId', w1
                ]);
            }
        }
    }
}
