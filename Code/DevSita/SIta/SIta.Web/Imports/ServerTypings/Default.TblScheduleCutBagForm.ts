namespace Sita.Default {
    export interface TblScheduleCutBagForm {
        ScheduleCutDate: Serenity.IntegerEditor;
    }

    export class TblScheduleCutBagForm extends Serenity.PrefixedContext {
        static formKey = 'Default.TblScheduleCutBag';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TblScheduleCutBagForm.init)  {
                TblScheduleCutBagForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;

                Q.initFormType(TblScheduleCutBagForm, [
                    'ScheduleCutDate', w0
                ]);
            }
        }
    }
}

