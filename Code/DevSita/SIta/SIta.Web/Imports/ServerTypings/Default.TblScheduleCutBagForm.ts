
namespace Sita.Default {
    export class TblScheduleCutBagForm extends Serenity.PrefixedContext {
        static formKey = 'Default.TblScheduleCutBag';
    }

    export interface TblScheduleCutBagForm {
        ScheduleCutDate: Serenity.IntegerEditor;
    }

    [,
        ['ScheduleCutDate', () => Serenity.IntegerEditor]
    ].forEach(x => Object.defineProperty(TblScheduleCutBagForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}