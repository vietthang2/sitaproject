namespace Sita.Default {
    export interface TblFieldForm {
        Name: Serenity.StringEditor;
        Instance: Serenity.StringEditor;
        Value: Serenity.StringEditor;
        FlightRef: Serenity.StringEditor;
    }

    export class TblFieldForm extends Serenity.PrefixedContext {
        static formKey = 'Default.TblField';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TblFieldForm.init)  {
                TblFieldForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(TblFieldForm, [
                    'Name', w0,
                    'Instance', w0,
                    'Value', w0,
                    'FlightRef', w0
                ]);
            }
        }
    }
}

