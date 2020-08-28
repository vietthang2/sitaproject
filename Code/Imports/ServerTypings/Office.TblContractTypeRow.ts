namespace ECNET.Office {
    export interface TblContractTypeRow {
        Id?: number;
        TypeName?: string;
        Code?: string;
        Description?: string;
        PersonSign?: string;
        PersonPosition?: string;
        PersonAuthorityNo?: string;
        Remark1?: string;
        Remark2?: string;
        Remark3?: string;
        Remark4?: string;
        Remark5?: string;
        Type?: Web.Modules.Office.Common.TypeOfPlace;
    }

    export namespace TblContractTypeRow {
        export const idProperty = 'Id';
        export const nameProperty = 'TypeName';
        export const localTextPrefix = 'Office.TblContractType';
        export const lookupKey = 'dbo.tblContractType';

        export function getLookup(): Q.Lookup<TblContractTypeRow> {
            return Q.getLookup<TblContractTypeRow>('dbo.tblContractType');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id",
            TypeName = "TypeName",
            Code = "Code",
            Description = "Description",
            PersonSign = "PersonSign",
            PersonPosition = "PersonPosition",
            PersonAuthorityNo = "PersonAuthorityNo",
            Remark1 = "Remark1",
            Remark2 = "Remark2",
            Remark3 = "Remark3",
            Remark4 = "Remark4",
            Remark5 = "Remark5",
            Type = "Type"
        }
    }
}
