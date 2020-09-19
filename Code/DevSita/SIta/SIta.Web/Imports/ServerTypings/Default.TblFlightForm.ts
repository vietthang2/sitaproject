namespace Sita.Default {
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

    export class TblFlightForm extends Serenity.PrefixedContext {
        static formKey = 'Default.TblFlight';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TblFlightForm.init)  {
                TblFlightForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.DateEditor;

                Q.initFormType(TblFlightForm, [
                    'Adi', w0,
                    'LineCode', w0,
                    'Number', w0,
                    'ScheduleDate', w0,
                    'SoftReplace', w0,
                    'SiteIata', w0,
                    'DateBoundảy', w0,
                    'Chute', w1,
                    'LastChanged', w2,
                    'DateCreated', w2,
                    'UserCreated', w0,
                    'UserUpdate', w0,
                    'DateUpdated', w2
                ]);
            }
        }
    }
}

