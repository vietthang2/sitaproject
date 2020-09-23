
namespace Sita.Default {
    export class TblAdiTypeForm extends Serenity.PrefixedContext {
        static formKey = 'Default.TblAdiType';
    }

    export interface TblAdiTypeForm {
        Name: Serenity.StringEditor;
    }

    [,
        ['Name', () => Serenity.StringEditor]
    ].forEach(x => Object.defineProperty(TblAdiTypeForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}