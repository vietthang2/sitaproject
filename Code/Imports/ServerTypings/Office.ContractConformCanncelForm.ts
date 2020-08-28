namespace ECNET.Office {
    export interface ContractConformCanncelForm {
        Reason: Serenity.TextAreaEditor;
        Id: Serenity.StringEditor;
    }

    export class ContractConformCanncelForm extends Serenity.PrefixedContext {
        static formKey = 'Office.ContractConformCanncel';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ContractConformCanncelForm.init)  {
                ContractConformCanncelForm.init = true;

                var s = Serenity;
                var w0 = s.TextAreaEditor;
                var w1 = s.StringEditor;

                Q.initFormType(ContractConformCanncelForm, [
                    'Reason', w0,
                    'Id', w1
                ]);
            }
        }
    }
}
