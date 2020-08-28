namespace ECNET.Office {
    export interface TblCityForm {
        Name: Serenity.StringEditor;
        Code: Serenity.StringEditor;
        EnName: Serenity.StringEditor;
        ECCode: Serenity.StringEditor;
    }

    export class TblCityForm extends Serenity.PrefixedContext {
        static formKey = 'Office.TblCity';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TblCityForm.init)  {
                TblCityForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(TblCityForm, [
                    'Name', w0,
                    'Code', w0,
                    'EnName', w0,
                    'ECCode', w0
                ]);
            }
        }
    }
}
