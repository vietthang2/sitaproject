namespace ECNET.Office {
    export interface TblContractTypeForm {
        TypeName: Serenity.StringEditor;
        Type: Serenity.EnumEditor;
        Code: Serenity.StringEditor;
        Description: Serenity.TextAreaEditor;
        PersonSign: Serenity.StringEditor;
        PersonPosition: Serenity.StringEditor;
        PersonAuthorityNo: Serenity.StringEditor;
        Remark1: Serenity.TextAreaEditor;
        Remark2: Serenity.TextAreaEditor;
        Remark3: Serenity.TextAreaEditor;
        Remark4: Serenity.TextAreaEditor;
        Remark5: Serenity.TextAreaEditor;
    }

    export class TblContractTypeForm extends Serenity.PrefixedContext {
        static formKey = 'Office.TblContractType';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TblContractTypeForm.init)  {
                TblContractTypeForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.EnumEditor;
                var w2 = s.TextAreaEditor;

                Q.initFormType(TblContractTypeForm, [
                    'TypeName', w0,
                    'Type', w1,
                    'Code', w0,
                    'Description', w2,
                    'PersonSign', w0,
                    'PersonPosition', w0,
                    'PersonAuthorityNo', w0,
                    'Remark1', w2,
                    'Remark2', w2,
                    'Remark3', w2,
                    'Remark4', w2,
                    'Remark5', w2
                ]);
            }
        }
    }
}
