namespace ECNET.Office {
    export interface TemplateEmailForm {
        Name: Serenity.StringEditor;
        To: Serenity.StringEditor;
        Bcc: Serenity.StringEditor;
        Cc: Serenity.StringEditor;
    }

    export class TemplateEmailForm extends Serenity.PrefixedContext {
        static formKey = 'Office.TemplateEmail';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TemplateEmailForm.init)  {
                TemplateEmailForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(TemplateEmailForm, [
                    'Name', w0,
                    'To', w0,
                    'Bcc', w0,
                    'Cc', w0
                ]);
            }
        }
    }
}
