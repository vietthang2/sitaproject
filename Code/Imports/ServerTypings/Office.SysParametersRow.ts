namespace ECNET.Office {
    export interface SysParametersRow {
        Id?: number;
        Code?: string;
        Name?: string;
        Value?: string;
        Unit?: string;
        CreatedDate?: string;
        CreatedBy?: string;
        UpdatedDate?: string;
        UpdatedBy?: string;
    }

    export namespace SysParametersRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Code';
        export const localTextPrefix = 'Office.SysParameters';
        export const lookupKey = 'dbo.SysParameters';

        export function getLookup(): Q.Lookup<SysParametersRow> {
            return Q.getLookup<SysParametersRow>('dbo.SysParameters');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id",
            Code = "Code",
            Name = "Name",
            Value = "Value",
            Unit = "Unit",
            CreatedDate = "CreatedDate",
            CreatedBy = "CreatedBy",
            UpdatedDate = "UpdatedDate",
            UpdatedBy = "UpdatedBy"
        }
    }
}
