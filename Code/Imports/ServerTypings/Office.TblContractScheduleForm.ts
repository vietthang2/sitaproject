namespace ECNET.Office {
    export interface TblContractScheduleForm {
        ContractId: Serenity.LookupEditor;
        Times: Serenity.IntegerEditor;
        Amount: Serenity.DecimalEditor;
        Date: Serenity.DateEditor;
    }

    export class TblContractScheduleForm extends Serenity.PrefixedContext {
        static formKey = 'Office.TblContractSchedule';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TblContractScheduleForm.init)  {
                TblContractScheduleForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.DecimalEditor;
                var w3 = s.DateEditor;

                Q.initFormType(TblContractScheduleForm, [
                    'ContractId', w0,
                    'Times', w1,
                    'Amount', w2,
                    'Date', w3
                ]);
            }
        }
    }
}
