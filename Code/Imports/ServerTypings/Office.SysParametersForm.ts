namespace ECNET.Office {
    export interface SysParametersForm {
        Code: Serenity.StringEditor;
        Name: Serenity.StringEditor;
        Value: Serenity.StringEditor;
        Unit: Serenity.StringEditor;
    }

    export class SysParametersForm extends Serenity.PrefixedContext {
        static formKey = 'Office.SysParameters';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!SysParametersForm.init)  {
                SysParametersForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(SysParametersForm, [
                    'Code', w0,
                    'Name', w0,
                    'Value', w0,
                    'Unit', w0
                ]);
            }
        }
    }
}
