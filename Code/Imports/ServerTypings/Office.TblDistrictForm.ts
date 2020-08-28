namespace ECNET.Office {
    export interface TblDistrictForm {
        CityId: Serenity.LookupEditor;
        Name: Serenity.StringEditor;
        Code: Serenity.StringEditor;
        EnName: Serenity.StringEditor;
    }

    export class TblDistrictForm extends Serenity.PrefixedContext {
        static formKey = 'Office.TblDistrict';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TblDistrictForm.init)  {
                TblDistrictForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.StringEditor;

                Q.initFormType(TblDistrictForm, [
                    'CityId', w0,
                    'Name', w1,
                    'Code', w1,
                    'EnName', w1
                ]);
            }
        }
    }
}
