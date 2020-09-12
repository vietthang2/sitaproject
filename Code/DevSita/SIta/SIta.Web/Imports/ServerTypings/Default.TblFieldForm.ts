
namespace Sita.Default {
    export class TblFieldForm extends Serenity.PrefixedContext {
        static formKey = 'Default.TblField';
    }

    export interface TblFieldForm {
        Name: Serenity.StringEditor;
        Instance: Serenity.StringEditor;
        Value: Serenity.StringEditor;
        FlightRef: Serenity.StringEditor;
    }

    [,
        ['Name', () => Serenity.StringEditor],
        ['Instance', () => Serenity.StringEditor],
        ['Value', () => Serenity.StringEditor],
        ['FlightRef', () => Serenity.StringEditor]
    ].forEach(x => Object.defineProperty(TblFieldForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}