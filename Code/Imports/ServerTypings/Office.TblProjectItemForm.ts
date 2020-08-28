namespace ECNET.Office {
    export interface TblProjectItemForm {
        ProjectId: Serenity.LookupEditor;
        Status: Serenity.LookupEditor;
        Code: Serenity.StringEditor;
        Name: Serenity.StringEditor;
        Quantity: Serenity.DecimalEditor;
        UnitId: Serenity.LookupEditor;
        FromDate: Serenity.DateEditor;
        ToDate: Serenity.DateEditor;
        Decription: Serenity.StringEditor;
        TotalDays: Serenity.IntegerEditor;
        Note: Serenity.StringEditor;
        ProcessBar: Serenity.IntegerEditor;
    }

    export class TblProjectItemForm extends Serenity.PrefixedContext {
        static formKey = 'Office.TblProjectItem';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TblProjectItemForm.init)  {
                TblProjectItemForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.StringEditor;
                var w2 = s.DecimalEditor;
                var w3 = s.DateEditor;
                var w4 = s.IntegerEditor;

                Q.initFormType(TblProjectItemForm, [
                    'ProjectId', w0,
                    'Status', w0,
                    'Code', w1,
                    'Name', w1,
                    'Quantity', w2,
                    'UnitId', w0,
                    'FromDate', w3,
                    'ToDate', w3,
                    'Decription', w1,
                    'TotalDays', w4,
                    'Note', w1,
                    'ProcessBar', w4
                ]);
            }
        }
    }
}
