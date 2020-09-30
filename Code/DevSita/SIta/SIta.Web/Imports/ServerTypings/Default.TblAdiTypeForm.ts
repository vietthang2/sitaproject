namespace Sita.Default {
    export interface TblAdiTypeForm {
        Code: Serenity.StringEditor;
        Name: Serenity.StringEditor;
    }

    export class TblAdiTypeForm extends Serenity.PrefixedContext {
        static formKey = 'Default.TblAdiType';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TblAdiTypeForm.init)  {
                TblAdiTypeForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(TblAdiTypeForm, [
                    'Code', w0,
                    'Name', w0
                ]);
            }
        }
    }
}

