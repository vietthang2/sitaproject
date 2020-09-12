
namespace Sita.Default {
    export class TblBagsForm extends Serenity.PrefixedContext {
        static formKey = 'Default.TblBags';
    }

    export interface TblBagsForm {
        BaggageTag: Serenity.StringEditor;
        FlightRef: Serenity.StringEditor;
        Processed: Serenity.BooleanEditor;
        Bsm: Serenity.StringEditor;
        Bpm: Serenity.StringEditor;
        TimeRcvBsm: Serenity.DateEditor;
        TimeRcvBpm: Serenity.DateEditor;
    }

    [
        ['BaggageTag', () => Serenity.StringEditor],
        ['FlightRef', () => Serenity.StringEditor],
        ['Processed', () => Serenity.BooleanEditor],
        ['Bsm', () => Serenity.StringEditor],
        ['Bpm', () => Serenity.StringEditor],
        ['TimeRcvBsm', () => Serenity.DateEditor],
        ['TimeRcvBpm', () => Serenity.DateEditor]
    ].forEach(x => Object.defineProperty(TblBagsForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}