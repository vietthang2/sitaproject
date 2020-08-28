namespace ECNET.Office {
    export interface TblUnitForm {
        Code: Serenity.StringEditor;
        Name: Serenity.StringEditor;
        Decription: Serenity.StringEditor;
        Rate: Serenity.IntegerEditor;
        CreatedBy: Serenity.StringEditor;
        CreatedDate: Serenity.DateEditor;
        UpdatedBy: Serenity.StringEditor;
        UpdatedDate: Serenity.DateEditor;
    }

    export class TblUnitForm extends Serenity.PrefixedContext {
        static formKey = 'Office.TblUnit';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TblUnitForm.init)  {
                TblUnitForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.DateEditor;

                Q.initFormType(TblUnitForm, [
                    'Code', w0,
                    'Name', w0,
                    'Decription', w0,
                    'Rate', w1,
                    'CreatedBy', w0,
                    'CreatedDate', w2,
                    'UpdatedBy', w0,
                    'UpdatedDate', w2
                ]);
            }
        }
    }
}
