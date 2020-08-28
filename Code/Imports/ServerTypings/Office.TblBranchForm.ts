namespace ECNET.Office {
    export interface TblBranchForm {
        Code: Serenity.StringEditor;
        Name: Serenity.StringEditor;
    }

    export class TblBranchForm extends Serenity.PrefixedContext {
        static formKey = 'Office.TblBranch';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TblBranchForm.init)  {
                TblBranchForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(TblBranchForm, [
                    'Code', w0,
                    'Name', w0
                ]);
            }
        }
    }
}
