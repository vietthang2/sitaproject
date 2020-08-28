namespace ECNET.Office {
    export interface TblStatusDetailForm {
        StatusId: Serenity.IntegerEditor;
        StatusDetailId: Serenity.IntegerEditor;
    }

    export class TblStatusDetailForm extends Serenity.PrefixedContext {
        static formKey = 'Office.TblStatusDetail';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TblStatusDetailForm.init)  {
                TblStatusDetailForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;

                Q.initFormType(TblStatusDetailForm, [
                    'StatusId', w0,
                    'StatusDetailId', w0
                ]);
            }
        }
    }
}
