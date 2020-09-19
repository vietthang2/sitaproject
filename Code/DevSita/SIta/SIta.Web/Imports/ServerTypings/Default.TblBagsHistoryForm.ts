
namespace SIta.Default {
    export class TblBagsHistoryForm extends Serenity.PrefixedContext {
        static formKey = 'Default.TblBagsHistory';
    }

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

    [
        ['BaggageTag', () => Serenity.StringEditor],
        ['FlightRef', () => Serenity.StringEditor],
        ['Processed', () => Serenity.BooleanEditor],
        ['Bsm', () => Serenity.StringEditor],
        ['Bpm', () => Serenity.StringEditor],
        ['TimeRcvBsm', () => Serenity.DateEditor],
        ['TimeRcvBpm', () => Serenity.DateEditor],
        ['Ddmm', () => Serenity.StringEditor],
        ['Yyyy', () => Serenity.StringEditor],
        ['TblBagsId', () => Serenity.IntegerEditor]
    ].forEach(x => Object.defineProperty(TblBagsHistoryForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}