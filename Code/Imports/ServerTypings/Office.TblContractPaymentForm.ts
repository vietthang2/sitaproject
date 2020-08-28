namespace ECNET.Office {
    export interface TblContractPaymentForm {
        ContractId: Serenity.IntegerEditor;
        InvoiceNo: Serenity.StringEditor;
        DatePaid: Serenity.DateEditor;
        Period: Serenity.StringEditor;
        PaidAmount: Serenity.DecimalEditor;
        PaidBy: Serenity.StringEditor;
        CreatedBy: Serenity.StringEditor;
        CreatedDate: Serenity.DateEditor;
        FileInvoice: Serenity.StringEditor;
        File1: Serenity.StringEditor;
        File2: Serenity.StringEditor;
        File3: Serenity.StringEditor;
        File4: Serenity.StringEditor;
        File5: Serenity.StringEditor;
    }

    export class TblContractPaymentForm extends Serenity.PrefixedContext {
        static formKey = 'Office.TblContractPayment';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TblContractPaymentForm.init)  {
                TblContractPaymentForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.StringEditor;
                var w2 = s.DateEditor;
                var w3 = s.DecimalEditor;

                Q.initFormType(TblContractPaymentForm, [
                    'ContractId', w0,
                    'InvoiceNo', w1,
                    'DatePaid', w2,
                    'Period', w1,
                    'PaidAmount', w3,
                    'PaidBy', w1,
                    'CreatedBy', w1,
                    'CreatedDate', w2,
                    'FileInvoice', w1,
                    'File1', w1,
                    'File2', w1,
                    'File3', w1,
                    'File4', w1,
                    'File5', w1
                ]);
            }
        }
    }
}
