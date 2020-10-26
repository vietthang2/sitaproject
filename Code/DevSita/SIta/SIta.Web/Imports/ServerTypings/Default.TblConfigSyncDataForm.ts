namespace Sita.Default {
    export interface TblConfigSyncDataForm {
        SynchronizeOnlyPeriod: Serenity.BooleanEditor;
        Period: Serenity.IntegerEditor;
        SynchronizeLogWhenReturns: Serenity.BooleanEditor;
    }

    export class TblConfigSyncDataForm extends Serenity.PrefixedContext {
        static formKey = 'Default.TblConfigSyncData';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TblConfigSyncDataForm.init)  {
                TblConfigSyncDataForm.init = true;

                var s = Serenity;
                var w0 = s.BooleanEditor;
                var w1 = s.IntegerEditor;

                Q.initFormType(TblConfigSyncDataForm, [
                    'SynchronizeOnlyPeriod', w0,
                    'Period', w1,
                    'SynchronizeLogWhenReturns', w0
                ]);
            }
        }
    }
}

