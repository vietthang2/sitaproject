namespace ECNET.Office {
    export interface TblStatusDetailLevel2Form {
        StatusId: Serenity.IntegerEditor;
        StatusDetailId: Serenity.IntegerEditor;
    }

    export class TblStatusDetailLevel2Form extends Serenity.PrefixedContext {
        static formKey = 'Office.TblStatusDetailLevel2';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TblStatusDetailLevel2Form.init)  {
                TblStatusDetailLevel2Form.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;

                Q.initFormType(TblStatusDetailLevel2Form, [
                    'StatusId', w0,
                    'StatusDetailId', w0
                ]);
            }
        }
    }
}
