namespace ECNET.Office {
    export interface TemplateEmailRow {
        Id?: number;
        Name?: string;
        To?: string;
        Bcc?: string;
        Cc?: string;
    }

    export namespace TemplateEmailRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Office.TemplateEmail';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id",
            Name = "Name",
            To = "To",
            Bcc = "Bcc",
            Cc = "Cc"
        }
    }
}
