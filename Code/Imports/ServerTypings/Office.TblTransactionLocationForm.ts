namespace ECNET.Office {
    export interface TblTransactionLocationForm {
        Code: Serenity.StringEditor;
        Name: Serenity.StringEditor;
        AreaId: Serenity.IntegerEditor;
        EmployeeManageId: Serenity.IntegerEditor;
        EmployeeCashId: Serenity.IntegerEditor;
        PlaceId: Serenity.IntegerEditor;
        OpenFrom: Serenity.StringEditor;
        OpenTo: Serenity.StringEditor;
        OpeningTime: Serenity.StringEditor;
        OpeningDate: Serenity.DateEditor;
        CreatedBy: Serenity.StringEditor;
        CreatedDate: Serenity.DateEditor;
        UpdatedBy: Serenity.StringEditor;
        UpdatedDate: Serenity.DateEditor;
        Status: Serenity.IntegerEditor;
    }

    export class TblTransactionLocationForm extends Serenity.PrefixedContext {
        static formKey = 'Office.TblTransactionLocation';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TblTransactionLocationForm.init)  {
                TblTransactionLocationForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.DateEditor;

                Q.initFormType(TblTransactionLocationForm, [
                    'Code', w0,
                    'Name', w0,
                    'AreaId', w1,
                    'EmployeeManageId', w1,
                    'EmployeeCashId', w1,
                    'PlaceId', w1,
                    'OpenFrom', w0,
                    'OpenTo', w0,
                    'OpeningTime', w0,
                    'OpeningDate', w2,
                    'CreatedBy', w0,
                    'CreatedDate', w2,
                    'UpdatedBy', w0,
                    'UpdatedDate', w2,
                    'Status', w1
                ]);
            }
        }
    }
}
