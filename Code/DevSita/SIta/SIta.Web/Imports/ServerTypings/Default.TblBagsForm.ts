namespace Sita.Default {
    export interface TblBagsForm {
        BaggageTag: Serenity.StringEditor;
        FlightRef: Serenity.StringEditor;
        Processed: Serenity.BooleanEditor;
        Bsm: Serenity.StringEditor;
        Bpm: Serenity.StringEditor;
        TimeRcvBsm: Serenity.DateEditor;
        TimeRcvBpm: Serenity.DateEditor;
        DDMM: Serenity.StringEditor;
        YYYY: Serenity.StringEditor;
    }

    export class TblBagsForm extends Serenity.PrefixedContext {
        static formKey = 'Default.TblBags';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TblBagsForm.init)  {
                TblBagsForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.BooleanEditor;
                var w2 = s.DateEditor;

                Q.initFormType(TblBagsForm, [
                    'BaggageTag', w0,
                    'FlightRef', w0,
                    'Processed', w1,
                    'Bsm', w0,
                    'Bpm', w0,
                    'TimeRcvBsm', w2,
                    'TimeRcvBpm', w2,
                    'DDMM', w0,
                    'YYYY', w0
                ]);
            }
        }
    }
}

