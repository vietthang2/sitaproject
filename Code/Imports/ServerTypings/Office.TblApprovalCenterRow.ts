namespace ECNET.Office {
    export interface TblApprovalCenterRow {
        Id?: number;
        Type?: Web.Modules.Office.Common.TypeApprove;
        ClientId?: number;
        Status?: Web.Modules.Office.Common.Status;
        Date?: string;
        LevelApproval?: number;
        AndOr?: boolean;
        ApproveBy?: string;
        ApprovedDate?: string;
        Times?: number;
        IsSendMail?: boolean;
        Code?: string;
        ReasonReject?: string;
        IsSms?: boolean;
        CreateBy?: string;
    }

    export namespace TblApprovalCenterRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Code';
        export const localTextPrefix = 'Office.TblApprovalCenter';
        export const lookupKey = 'dbo.tblApprovalCenter';

        export function getLookup(): Q.Lookup<TblApprovalCenterRow> {
            return Q.getLookup<TblApprovalCenterRow>('dbo.tblApprovalCenter');
        }
        export const deletePermission = 'Ecnet:dbo.tblApprovalCenter:Delete';
        export const insertPermission = 'Ecnet:dbo.tblApprovalCenter:Modify';
        export const readPermission = 'Ecnet:dbo.tblApprovalCenter:View';
        export const updatePermission = 'Ecnet:dbo.tblApprovalCenter:Modify';

        export declare const enum Fields {
            Id = "Id",
            Type = "Type",
            ClientId = "ClientId",
            Status = "Status",
            Date = "Date",
            LevelApproval = "LevelApproval",
            AndOr = "AndOr",
            ApproveBy = "ApproveBy",
            ApprovedDate = "ApprovedDate",
            Times = "Times",
            IsSendMail = "IsSendMail",
            Code = "Code",
            ReasonReject = "ReasonReject",
            IsSms = "IsSms",
            CreateBy = "CreateBy"
        }
    }
}
