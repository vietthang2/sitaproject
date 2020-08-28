namespace ECNET.Office {
    export interface EmailAccountsForm {
        Email: Serenity.StringEditor;
        DisplayName: Serenity.StringEditor;
        Username: Serenity.StringEditor;
        Password: Serenity.StringEditor;
        Host: Serenity.StringEditor;
        Port: Serenity.IntegerEditor;
        EnableSsl: Serenity.BooleanEditor;
        UseDefaultCredentials: Serenity.BooleanEditor;
        IsActive: Serenity.BooleanEditor;
    }

    export class EmailAccountsForm extends Serenity.PrefixedContext {
        static formKey = 'Office.EmailAccounts';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!EmailAccountsForm.init)  {
                EmailAccountsForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.BooleanEditor;

                Q.initFormType(EmailAccountsForm, [
                    'Email', w0,
                    'DisplayName', w0,
                    'Username', w0,
                    'Password', w0,
                    'Host', w0,
                    'Port', w1,
                    'EnableSsl', w2,
                    'UseDefaultCredentials', w2,
                    'IsActive', w2
                ]);
            }
        }
    }
}
