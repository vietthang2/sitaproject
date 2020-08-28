namespace ECNET.Office {
    export interface QueuedEmailForm {
        PriorityId: Serenity.IntegerEditor;
        From: Serenity.StringEditor;
        FromName: Serenity.StringEditor;
        To: Serenity.StringEditor;
        ToName: Serenity.StringEditor;
        ReplyTo: Serenity.StringEditor;
        ReplyToName: Serenity.StringEditor;
        Cc: Serenity.StringEditor;
        Bcc: Serenity.StringEditor;
        Subject: Serenity.StringEditor;
        Body: Serenity.StringEditor;
        AttachmentFilePath: Serenity.StringEditor;
        AttachmentFileName: Serenity.StringEditor;
        AttachedDownloadId: Serenity.IntegerEditor;
        CreatedOnUtc: Serenity.DateEditor;
        SentTries: Serenity.IntegerEditor;
        SentOnUtc: Serenity.DateEditor;
        EmailAccountId: Serenity.LookupEditor;
        DontSendBeforeDateUtc: Serenity.DateEditor;
        HasError: Serenity.BooleanEditor;
        Result: Serenity.StringEditor;
        CreatedDate: Serenity.DateEditor;
        CreatedBy: Serenity.StringEditor;
        UpdatedDate: Serenity.DateEditor;
        UpdatedBy: Serenity.StringEditor;
    }

    export class QueuedEmailForm extends Serenity.PrefixedContext {
        static formKey = 'Office.QueuedEmail';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!QueuedEmailForm.init)  {
                QueuedEmailForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.StringEditor;
                var w2 = s.DateEditor;
                var w3 = s.LookupEditor;
                var w4 = s.BooleanEditor;

                Q.initFormType(QueuedEmailForm, [
                    'PriorityId', w0,
                    'From', w1,
                    'FromName', w1,
                    'To', w1,
                    'ToName', w1,
                    'ReplyTo', w1,
                    'ReplyToName', w1,
                    'Cc', w1,
                    'Bcc', w1,
                    'Subject', w1,
                    'Body', w1,
                    'AttachmentFilePath', w1,
                    'AttachmentFileName', w1,
                    'AttachedDownloadId', w0,
                    'CreatedOnUtc', w2,
                    'SentTries', w0,
                    'SentOnUtc', w2,
                    'EmailAccountId', w3,
                    'DontSendBeforeDateUtc', w2,
                    'HasError', w4,
                    'Result', w1,
                    'CreatedDate', w2,
                    'CreatedBy', w1,
                    'UpdatedDate', w2,
                    'UpdatedBy', w1
                ]);
            }
        }
    }
}
