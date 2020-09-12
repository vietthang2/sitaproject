
namespace Sita.Default {
    export class TblFlightForm extends Serenity.PrefixedContext {
        static formKey = 'Default.TblFlight';
    }

    export interface TblFlightForm {
        Adi: Serenity.StringEditor;
        LineCode: Serenity.StringEditor;
        Number: Serenity.StringEditor;
        ScheduleDate: Serenity.StringEditor;
        SoftReplace: Serenity.StringEditor;
        SiteIata: Serenity.StringEditor;
        DateBoundảy: Serenity.StringEditor;
        Chute: Serenity.IntegerEditor;
        LastChanged: Serenity.DateEditor;
        DateCreated: Serenity.DateEditor;
        UserCreated: Serenity.StringEditor;
        UserUpdate: Serenity.StringEditor;
        DateUpdated: Serenity.DateEditor;
    }

    [,
        ['Adi', () => Serenity.StringEditor],
        ['LineCode', () => Serenity.StringEditor],
        ['Number', () => Serenity.StringEditor],
        ['ScheduleDate', () => Serenity.StringEditor],
        ['SoftReplace', () => Serenity.StringEditor],
        ['SiteIata', () => Serenity.StringEditor],
        ['DateBoundảy', () => Serenity.StringEditor],
        ['Chute', () => Serenity.IntegerEditor],
        ['LastChanged', () => Serenity.DateEditor],
        ['DateCreated', () => Serenity.DateEditor],
        ['UserCreated', () => Serenity.StringEditor],
        ['UserUpdate', () => Serenity.StringEditor],
        ['DateUpdated', () => Serenity.DateEditor]
    ].forEach(x => Object.defineProperty(TblFlightForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}