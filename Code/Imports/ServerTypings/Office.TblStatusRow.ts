namespace ECNET.Office {
    export interface TblStatusRow {
        Id?: number;
        NextStatus?: number;
        Name?: string;
        TypeId?: Web.Modules.Office.Common.StatusType;
        CreatedBy?: string;
        CreatedDate?: string;
        UpdatedBy?: string;
        UpdatedDate?: string;
        IsReadOnly?: boolean;
        IsNew?: boolean;
        AllowList?: number[];
        AllowListLevel2?: number[];
    }

    export namespace TblStatusRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Office.TblStatus';
        export const lookupKey = 'dbo.tblStatus';

        export function getLookup(): Q.Lookup<TblStatusRow> {
            return Q.getLookup<TblStatusRow>('dbo.tblStatus');
        }
        export const deletePermission = 'Ecnet:dbo.tblStatus:Modify';
        export const insertPermission = 'Ecnet:dbo.tblStatus:Modify';
        export const readPermission = 'Ecnet:dbo.tblStatus:View';
        export const updatePermission = 'Ecnet:dbo.tblStatus:Modify';

        export declare const enum Fields {
            Id = "Id",
            NextStatus = "NextStatus",
            Name = "Name",
            TypeId = "TypeId",
            CreatedBy = "CreatedBy",
            CreatedDate = "CreatedDate",
            UpdatedBy = "UpdatedBy",
            UpdatedDate = "UpdatedDate",
            IsReadOnly = "IsReadOnly",
            IsNew = "IsNew",
            AllowList = "AllowList",
            AllowListLevel2 = "AllowListLevel2"
        }
    }
}
