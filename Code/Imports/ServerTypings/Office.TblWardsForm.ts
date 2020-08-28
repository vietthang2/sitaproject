namespace ECNET.Office {
    export interface TblWardsForm {
        DistrictId: Serenity.LookupEditor;
        Name: Serenity.StringEditor;
        EnName: Serenity.StringEditor;
    }

    export class TblWardsForm extends Serenity.PrefixedContext {
        static formKey = 'Office.TblWards';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TblWardsForm.init)  {
                TblWardsForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.StringEditor;

                Q.initFormType(TblWardsForm, [
                    'DistrictId', w0,
                    'Name', w1,
                    'EnName', w1
                ]);
            }
        }
    }
}
