namespace Sita.Default {
    export interface TblBagsHistoryForm {
        BaggageTag: Serenity.StringEditor;
        FlightRef: Serenity.StringEditor;
        Processed: Serenity.BooleanEditor;
        Bsm: Serenity.StringEditor;
        Bpm: Serenity.StringEditor;
        TimeRcvBsm: Serenity.DateEditor;
        TimeRcvBpm: Serenity.DateEditor;
        Ddmm: Serenity.StringEditor;
        Yyyy: Serenity.StringEditor;
        TblBagsId: Serenity.IntegerEditor;
    }

    export class TblBagsHistoryForm extends Serenity.PrefixedContext {
        static formKey = 'Default.TblBagsHistory';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TblBagsHistoryForm.init)  {
                TblBagsHistoryForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.BooleanEditor;
                var w2 = s.DateEditor;
                var w3 = s.IntegerEditor;

                Q.initFormType(TblBagsHistoryForm, [
                    'BaggageTag', w0,
                    'FlightRef', w0,
                    'Processed', w1,
                    'Bsm', w0,
                    'Bpm', w0,
                    'TimeRcvBsm', w2,
                    'TimeRcvBpm', w2,
                    'Ddmm', w0,
                    'Yyyy', w0,
                    'TblBagsId', w3
                ]);
            }
        }
    }
}

