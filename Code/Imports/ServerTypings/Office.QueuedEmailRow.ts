namespace ECNET.Office {
    export interface QueuedEmailRow {
        Id?: number;
        PriorityId?: number;
        From?: string;
        FromName?: string;
        To?: string;
        ToName?: string;
        ReplyTo?: string;
        ReplyToName?: string;
        Cc?: string;
        Bcc?: string;
        Subject?: string;
        Body?: string;
        AttachmentFilePath?: string;
        AttachmentFileName?: string;
        AttachedDownloadId?: number;
        CreatedOnUtc?: string;
        SentTries?: number;
        SentOnUtc?: string;
        EmailAccountId?: number;
        DontSendBeforeDateUtc?: string;
        HasError?: boolean;
        Result?: string;
        CreatedDate?: string;
        CreatedBy?: string;
        UpdatedDate?: string;
        UpdatedBy?: string;
        EmailAccountEmail?: string;
        EmailAccountDisplayName?: string;
        EmailAccountHost?: string;
        EmailAccountPort?: number;
        EmailAccountUsername?: string;
        EmailAccountPassword?: string;
        EmailAccountEnableSsl?: boolean;
        EmailAccountUseDefaultCredentials?: boolean;
        EmailAccountCreatedDate?: string;
        EmailAccountCreatedBy?: string;
        EmailAccountUpdatedDate?: string;
        EmailAccountUpdatedBy?: string;
        EmailAccountIsActive?: boolean;
    }

    export namespace QueuedEmailRow {
        export const idProperty = 'Id';
        export const nameProperty = 'From';
        export const localTextPrefix = 'Office.QueuedEmail';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id",
            PriorityId = "PriorityId",
            From = "From",
            FromName = "FromName",
            To = "To",
            ToName = "ToName",
            ReplyTo = "ReplyTo",
            ReplyToName = "ReplyToName",
            Cc = "Cc",
            Bcc = "Bcc",
            Subject = "Subject",
            Body = "Body",
            AttachmentFilePath = "AttachmentFilePath",
            AttachmentFileName = "AttachmentFileName",
            AttachedDownloadId = "AttachedDownloadId",
            CreatedOnUtc = "CreatedOnUtc",
            SentTries = "SentTries",
            SentOnUtc = "SentOnUtc",
            EmailAccountId = "EmailAccountId",
            DontSendBeforeDateUtc = "DontSendBeforeDateUtc",
            HasError = "HasError",
            Result = "Result",
            CreatedDate = "CreatedDate",
            CreatedBy = "CreatedBy",
            UpdatedDate = "UpdatedDate",
            UpdatedBy = "UpdatedBy",
            EmailAccountEmail = "EmailAccountEmail",
            EmailAccountDisplayName = "EmailAccountDisplayName",
            EmailAccountHost = "EmailAccountHost",
            EmailAccountPort = "EmailAccountPort",
            EmailAccountUsername = "EmailAccountUsername",
            EmailAccountPassword = "EmailAccountPassword",
            EmailAccountEnableSsl = "EmailAccountEnableSsl",
            EmailAccountUseDefaultCredentials = "EmailAccountUseDefaultCredentials",
            EmailAccountCreatedDate = "EmailAccountCreatedDate",
            EmailAccountCreatedBy = "EmailAccountCreatedBy",
            EmailAccountUpdatedDate = "EmailAccountUpdatedDate",
            EmailAccountUpdatedBy = "EmailAccountUpdatedBy",
            EmailAccountIsActive = "EmailAccountIsActive"
        }
    }
}
