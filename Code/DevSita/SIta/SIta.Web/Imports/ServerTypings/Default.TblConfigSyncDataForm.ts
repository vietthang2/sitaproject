
namespace Sita.Default {
    export class TblConfigSyncDataForm extends Serenity.PrefixedContext {
        static formKey = 'Default.TblConfigSyncData';
    }

    export interface TblConfigSyncDataForm {
        SynchronizeOnlyPeriod: Serenity.BooleanEditor;
        Period: Serenity.IntegerEditor;
        SynchronizeLogWhenReturns: Serenity.BooleanEditor;
    }

    [,
        ['SynchronizeOnlyPeriod', () => Serenity.BooleanEditor],
        ['Period', () => Serenity.IntegerEditor],
        ['SynchronizeLogWhenReturns', () => Serenity.BooleanEditor]
    ].forEach(x => Object.defineProperty(TblConfigSyncDataForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}