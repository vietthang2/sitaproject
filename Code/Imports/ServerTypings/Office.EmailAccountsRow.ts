namespace ECNET.Office {
    export interface EmailAccountsRow {
        Id?: number;
        Email?: string;
        DisplayName?: string;
        Host?: string;
        Port?: number;
        Username?: string;
        Password?: string;
        EnableSsl?: boolean;
        UseDefaultCredentials?: boolean;
        CreatedDate?: string;
        CreatedBy?: string;
        UpdatedDate?: string;
        UpdatedBy?: string;
        IsActive?: boolean;
    }

    export namespace EmailAccountsRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Email';
        export const localTextPrefix = 'Office.EmailAccounts';
        export const lookupKey = 'dbo.EmailAccounts';

        export function getLookup(): Q.Lookup<EmailAccountsRow> {
            return Q.getLookup<EmailAccountsRow>('dbo.EmailAccounts');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id",
            Email = "Email",
            DisplayName = "DisplayName",
            Host = "Host",
            Port = "Port",
            Username = "Username",
            Password = "Password",
            EnableSsl = "EnableSsl",
            UseDefaultCredentials = "UseDefaultCredentials",
            CreatedDate = "CreatedDate",
            CreatedBy = "CreatedBy",
            UpdatedDate = "UpdatedDate",
            UpdatedBy = "UpdatedBy",
            IsActive = "IsActive"
        }
    }
}
