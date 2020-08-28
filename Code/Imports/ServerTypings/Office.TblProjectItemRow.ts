namespace ECNET.Office {
    export interface TblProjectItemRow {
        Id?: number;
        ProjectId?: number;
        Name?: string;
        Code?: string;
        Status?: number;
        Decription?: string;
        FromDate?: string;
        ToDate?: string;
        TotalDays?: number;
        Note?: string;
        ProcessBar?: number;
        CreatedBy?: string;
        CreatedDate?: string;
        UpdatedBy?: string;
        UpdatedDate?: string;
        UnitId?: number;
        ProjectCode?: string;
        ProjectName?: string;
        ProjectInnitiatedDate?: string;
        ProjectFromDate?: string;
        ProjectToDate?: string;
        ProjectTransactionLocationId?: number;
        ProjectPersonManagement?: string;
        ProjectPersonManagementPhone?: string;
        ProjectPlaceId?: number;
        ProjectNote?: string;
        ProjectCreatedBy?: string;
        ProjectCreatedDate?: string;
        ProjectUpdatedBy?: string;
        ProjectUpdatedDate?: string;
        ProjectStatusId?: number;
        StatusNextStatus?: number;
        StatusName?: string;
        StatusTypeId?: number;
        StatusCreatedBy?: string;
        StatusCreatedDate?: string;
        StatusUpdatedBy?: string;
        StatusUpdatedDate?: string;
        UnitCode?: string;
        UnitName?: string;
        UnitDecription?: string;
        UnitRate?: number;
        UnitCreatedBy?: string;
        UnitCreatedDate?: string;
        UnitUpdatedBy?: string;
        UnitUpdatedDate?: string;
        Quantity?: number;
        RecordStatus?: Web.Modules.Office.Common.StatusRecord;
        IsUse?: number;
    }

    export namespace TblProjectItemRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Office.TblProjectItem';
        export const lookupKey = 'dbo.tblProjectItem';

        export function getLookup(): Q.Lookup<TblProjectItemRow> {
            return Q.getLookup<TblProjectItemRow>('dbo.tblProjectItem');
        }
        export const deletePermission = 'Ecnet:dbo.tblProjectItem:Modify';
        export const insertPermission = 'Ecnet:dbo.tblProjectItem:Modify';
        export const readPermission = 'Ecnet:dbo.tblProjectItem:View';
        export const updatePermission = 'Ecnet:dbo.tblProjectItem:Modify';

        export declare const enum Fields {
            Id = "Id",
            ProjectId = "ProjectId",
            Name = "Name",
            Code = "Code",
            Status = "Status",
            Decription = "Decription",
            FromDate = "FromDate",
            ToDate = "ToDate",
            TotalDays = "TotalDays",
            Note = "Note",
            ProcessBar = "ProcessBar",
            CreatedBy = "CreatedBy",
            CreatedDate = "CreatedDate",
            UpdatedBy = "UpdatedBy",
            UpdatedDate = "UpdatedDate",
            UnitId = "UnitId",
            ProjectCode = "ProjectCode",
            ProjectName = "ProjectName",
            ProjectInnitiatedDate = "ProjectInnitiatedDate",
            ProjectFromDate = "ProjectFromDate",
            ProjectToDate = "ProjectToDate",
            ProjectTransactionLocationId = "ProjectTransactionLocationId",
            ProjectPersonManagement = "ProjectPersonManagement",
            ProjectPersonManagementPhone = "ProjectPersonManagementPhone",
            ProjectPlaceId = "ProjectPlaceId",
            ProjectNote = "ProjectNote",
            ProjectCreatedBy = "ProjectCreatedBy",
            ProjectCreatedDate = "ProjectCreatedDate",
            ProjectUpdatedBy = "ProjectUpdatedBy",
            ProjectUpdatedDate = "ProjectUpdatedDate",
            ProjectStatusId = "ProjectStatusId",
            StatusNextStatus = "StatusNextStatus",
            StatusName = "StatusName",
            StatusTypeId = "StatusTypeId",
            StatusCreatedBy = "StatusCreatedBy",
            StatusCreatedDate = "StatusCreatedDate",
            StatusUpdatedBy = "StatusUpdatedBy",
            StatusUpdatedDate = "StatusUpdatedDate",
            UnitCode = "UnitCode",
            UnitName = "UnitName",
            UnitDecription = "UnitDecription",
            UnitRate = "UnitRate",
            UnitCreatedBy = "UnitCreatedBy",
            UnitCreatedDate = "UnitCreatedDate",
            UnitUpdatedBy = "UnitUpdatedBy",
            UnitUpdatedDate = "UnitUpdatedDate",
            Quantity = "Quantity",
            RecordStatus = "RecordStatus",
            IsUse = "IsUse"
        }
    }
}
