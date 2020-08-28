namespace ECNET.Office {
    export interface TblApprovalCenterForm {
        Type: Serenity.EnumEditor;
        Status: Serenity.EnumEditor;
        Code: Serenity.StringEditor;
        ClientId: Serenity.IntegerEditor;
        ReasonReject: Serenity.TextAreaEditor;
        Date: Serenity.DateEditor;
        ApproveBy: Serenity.StringEditor;
        ApprovedDate: Serenity.DateEditor;
        IsSendMail: Serenity.BooleanEditor;
        IsSms: Serenity.BooleanEditor;
        CreateBy: Serenity.StringEditor;
    }

    export class TblApprovalCenterForm extends Serenity.PrefixedContext {
        static formKey = 'Office.TblApprovalCenter';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TblApprovalCenterForm.init)  {
                TblApprovalCenterForm.init = true;

                var s = Serenity;
                var w0 = s.EnumEditor;
                var w1 = s.StringEditor;
                var w2 = s.IntegerEditor;
                var w3 = s.TextAreaEditor;
                var w4 = s.DateEditor;
                var w5 = s.BooleanEditor;

                Q.initFormType(TblApprovalCenterForm, [
                    'Type', w0,
                    'Status', w0,
                    'Code', w1,
                    'ClientId', w2,
                    'ReasonReject', w3,
                    'Date', w4,
                    'ApproveBy', w1,
                    'ApprovedDate', w4,
                    'IsSendMail', w5,
                    'IsSms', w5,
                    'CreateBy', w1
                ]);
            }
        }
    }
}
