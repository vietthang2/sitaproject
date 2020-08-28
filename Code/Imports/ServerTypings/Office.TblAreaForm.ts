namespace ECNET.Office {
    export interface TblAreaForm {
        BranchCode: Serenity.LookupEditor;
        Code: Serenity.StringEditor;
        Name: Serenity.StringEditor;
    }

    export class TblAreaForm extends Serenity.PrefixedContext {
        static formKey = 'Office.TblArea';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TblAreaForm.init)  {
                TblAreaForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.StringEditor;

                Q.initFormType(TblAreaForm, [
                    'BranchCode', w0,
                    'Code', w1,
                    'Name', w1
                ]);
            }
        }
    }
}
