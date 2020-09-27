namespace Sita.Default {
    export interface TblFlightForm {
        Adi: Serenity.LookupEditor;
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
        ListField: Serenity.StringEditor;
    }

    export class TblFlightForm extends Serenity.PrefixedContext {
        static formKey = 'Default.TblFlight';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TblFlightForm.init)  {
                TblFlightForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.StringEditor;
                var w2 = s.IntegerEditor;
                var w3 = s.DateEditor;

                Q.initFormType(TblFlightForm, [
                    'Adi', w0,
                    'LineCode', w1,
                    'Number', w1,
                    'ScheduleDate', w1,
                    'SoftReplace', w1,
                    'SiteIata', w1,
                    'DateBoundảy', w1,
                    'Chute', w2,
                    'LastChanged', w3,
                    'DateCreated', w3,
                    'UserCreated', w1,
                    'UserUpdate', w1,
                    'DateUpdated', w3,
                    'ListField', w1
                ]);
            }
        }
    }
}

