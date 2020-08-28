/// <reference types="jquery" />
/// <reference types="jqueryui" />
declare namespace ECNET.Administration {
}
declare namespace ECNET.Administration {
    interface LanguageForm {
        LanguageId: Serenity.StringEditor;
        LanguageName: Serenity.StringEditor;
    }
    class LanguageForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace ECNET.Administration {
    interface LanguageRow {
        Id?: number;
        LanguageId?: string;
        LanguageName?: string;
    }
    namespace LanguageRow {
        const idProperty = "Id";
        const nameProperty = "LanguageName";
        const localTextPrefix = "Administration.Language";
        const lookupKey = "Administration.Language";
        function getLookup(): Q.Lookup<LanguageRow>;
        const deletePermission = "Administration:Translation";
        const insertPermission = "Administration:Translation";
        const readPermission = "Administration:Translation";
        const updatePermission = "Administration:Translation";
        const enum Fields {
            Id = "Id",
            LanguageId = "LanguageId",
            LanguageName = "LanguageName"
        }
    }
}
declare namespace ECNET.Administration {
    namespace LanguageService {
        const baseUrl = "Administration/Language";
        function Create(request: Serenity.SaveRequest<LanguageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<LanguageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<LanguageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<LanguageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/Language/Create",
            Update = "Administration/Language/Update",
            Delete = "Administration/Language/Delete",
            Retrieve = "Administration/Language/Retrieve",
            List = "Administration/Language/List"
        }
    }
}
declare namespace ECNET.Administration {
}
declare namespace ECNET.Administration {
}
declare namespace ECNET.Administration {
    interface RoleForm {
        RoleName: Serenity.StringEditor;
        LevelApproval: Serenity.EnumEditor;
    }
    class RoleForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace ECNET.Administration {
    interface RolePermissionListRequest extends Serenity.ServiceRequest {
        RoleID?: number;
        Module?: string;
        Submodule?: string;
    }
}
declare namespace ECNET.Administration {
    interface RolePermissionListResponse extends Serenity.ListResponse<string> {
    }
}
declare namespace ECNET.Administration {
    interface RolePermissionRow {
        RolePermissionId?: number;
        RoleId?: number;
        PermissionKey?: string;
        RoleRoleName?: string;
    }
    namespace RolePermissionRow {
        const idProperty = "RolePermissionId";
        const nameProperty = "PermissionKey";
        const localTextPrefix = "Administration.RolePermission";
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            RolePermissionId = "RolePermissionId",
            RoleId = "RoleId",
            PermissionKey = "PermissionKey",
            RoleRoleName = "RoleRoleName"
        }
    }
}
declare namespace ECNET.Administration {
    namespace RolePermissionService {
        const baseUrl = "Administration/RolePermission";
        function Update(request: RolePermissionUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: RolePermissionListRequest, onSuccess?: (response: RolePermissionListResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/RolePermission/Update",
            List = "Administration/RolePermission/List"
        }
    }
}
declare namespace ECNET.Administration {
    interface RolePermissionUpdateRequest extends Serenity.ServiceRequest {
        RoleID?: number;
        Module?: string;
        Submodule?: string;
        Permissions?: string[];
    }
}
declare namespace ECNET.Administration {
    interface RoleRow {
        RoleId?: number;
        RoleName?: string;
        LevelApproval?: Web.Modules.Administration.Common.LevelApproval;
    }
    namespace RoleRow {
        const idProperty = "RoleId";
        const nameProperty = "RoleName";
        const localTextPrefix = "Administration.Role";
        const lookupKey = "Administration.Role";
        function getLookup(): Q.Lookup<RoleRow>;
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            RoleId = "RoleId",
            RoleName = "RoleName",
            LevelApproval = "LevelApproval"
        }
    }
}
declare namespace ECNET.Administration {
    namespace RoleService {
        const baseUrl = "Administration/Role";
        function Create(request: Serenity.SaveRequest<RoleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<RoleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<RoleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<RoleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/Role/Create",
            Update = "Administration/Role/Update",
            Delete = "Administration/Role/Delete",
            Retrieve = "Administration/Role/Retrieve",
            List = "Administration/Role/List"
        }
    }
}
declare namespace ECNET.Administration {
    interface SergenConnection {
        Key?: string;
    }
}
declare namespace ECNET.Administration {
    interface SergenGenerateOptions {
        Row?: boolean;
        Service?: boolean;
        UI?: boolean;
    }
}
declare namespace ECNET.Administration {
    interface SergenGenerateRequest extends Serenity.ServiceRequest {
        ConnectionKey?: string;
        Table?: SergenTable;
        GenerateOptions?: SergenGenerateOptions;
    }
}
declare namespace ECNET.Administration {
    interface SergenListTablesRequest extends Serenity.ServiceRequest {
        ConnectionKey?: string;
    }
}
declare namespace ECNET.Administration {
    namespace SergenService {
        const baseUrl = "Administration/Sergen";
        function ListConnections(request: Serenity.ServiceRequest, onSuccess?: (response: Serenity.ListResponse<SergenConnection>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListTables(request: SergenListTablesRequest, onSuccess?: (response: Serenity.ListResponse<SergenTable>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Generate(request: SergenGenerateRequest, onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            ListConnections = "Administration/Sergen/ListConnections",
            ListTables = "Administration/Sergen/ListTables",
            Generate = "Administration/Sergen/Generate"
        }
    }
}
declare namespace ECNET.Administration {
    interface SergenTable {
        Tablename?: string;
        Identifier?: string;
        Module?: string;
        PermissionKey?: string;
    }
}
declare namespace ECNET.Administration {
    interface TranslationItem {
        Key?: string;
        SourceText?: string;
        TargetText?: string;
        CustomText?: string;
    }
}
declare namespace ECNET.Administration {
    interface TranslationListRequest extends Serenity.ListRequest {
        SourceLanguageID?: string;
        TargetLanguageID?: string;
    }
}
declare namespace ECNET.Administration {
    namespace TranslationService {
        const baseUrl = "Administration/Translation";
        function List(request: TranslationListRequest, onSuccess?: (response: Serenity.ListResponse<TranslationItem>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: TranslationUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            List = "Administration/Translation/List",
            Update = "Administration/Translation/Update"
        }
    }
}
declare namespace ECNET.Administration {
    interface TranslationUpdateRequest extends Serenity.ServiceRequest {
        TargetLanguageID?: string;
        Translations?: {
            [key: string]: string;
        };
    }
}
declare namespace ECNET.Administration {
}
declare namespace ECNET.Administration {
    interface UserForm {
        Username: Serenity.StringEditor;
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        UserImage: Serenity.ImageUploadEditor;
        Password: Serenity.PasswordEditor;
        PasswordConfirm: Serenity.PasswordEditor;
        Source: Serenity.StringEditor;
    }
    class UserForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace ECNET.Administration {
    interface UserPermissionListRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Module?: string;
        Submodule?: string;
    }
}
declare namespace ECNET.Administration {
    interface UserPermissionRow {
        UserPermissionId?: number;
        UserId?: number;
        PermissionKey?: string;
        Granted?: boolean;
        Username?: string;
        User?: string;
    }
    namespace UserPermissionRow {
        const idProperty = "UserPermissionId";
        const nameProperty = "PermissionKey";
        const localTextPrefix = "Administration.UserPermission";
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            UserPermissionId = "UserPermissionId",
            UserId = "UserId",
            PermissionKey = "PermissionKey",
            Granted = "Granted",
            Username = "Username",
            User = "User"
        }
    }
}
declare namespace ECNET.Administration {
    namespace UserPermissionService {
        const baseUrl = "Administration/UserPermission";
        function Update(request: UserPermissionUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: UserPermissionListRequest, onSuccess?: (response: Serenity.ListResponse<UserPermissionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListRolePermissions(request: UserPermissionListRequest, onSuccess?: (response: Serenity.ListResponse<string>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListPermissionKeys(request: Serenity.ServiceRequest, onSuccess?: (response: Serenity.ListResponse<string>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/UserPermission/Update",
            List = "Administration/UserPermission/List",
            ListRolePermissions = "Administration/UserPermission/ListRolePermissions",
            ListPermissionKeys = "Administration/UserPermission/ListPermissionKeys"
        }
    }
}
declare namespace ECNET.Administration {
    interface UserPermissionUpdateRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Module?: string;
        Submodule?: string;
        Permissions?: UserPermissionRow[];
    }
}
declare namespace ECNET.Administration {
    interface UserRoleListRequest extends Serenity.ServiceRequest {
        UserID?: number;
    }
}
declare namespace ECNET.Administration {
    interface UserRoleListResponse extends Serenity.ListResponse<number> {
    }
}
declare namespace ECNET.Administration {
    interface UserRoleRow {
        UserRoleId?: number;
        UserId?: number;
        RoleId?: number;
        Username?: string;
        User?: string;
    }
    namespace UserRoleRow {
        const idProperty = "UserRoleId";
        const localTextPrefix = "Administration.UserRole";
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            UserRoleId = "UserRoleId",
            UserId = "UserId",
            RoleId = "RoleId",
            Username = "Username",
            User = "User"
        }
    }
}
declare namespace ECNET.Administration {
    namespace UserRoleService {
        const baseUrl = "Administration/UserRole";
        function Update(request: UserRoleUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: UserRoleListRequest, onSuccess?: (response: UserRoleListResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/UserRole/Update",
            List = "Administration/UserRole/List"
        }
    }
}
declare namespace ECNET.Administration {
    interface UserRoleUpdateRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Roles?: number[];
    }
}
declare namespace ECNET.Administration {
    interface UserRow {
        UserId?: number;
        Username?: string;
        Source?: string;
        PasswordHash?: string;
        PasswordSalt?: string;
        DisplayName?: string;
        Email?: string;
        UserImage?: string;
        LastDirectoryUpdate?: string;
        IsActive?: number;
        Password?: string;
        PasswordConfirm?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace UserRow {
        const idProperty = "UserId";
        const isActiveProperty = "IsActive";
        const nameProperty = "Username";
        const localTextPrefix = "Administration.User";
        const lookupKey = "Administration.User";
        function getLookup(): Q.Lookup<UserRow>;
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            UserId = "UserId",
            Username = "Username",
            Source = "Source",
            PasswordHash = "PasswordHash",
            PasswordSalt = "PasswordSalt",
            DisplayName = "DisplayName",
            Email = "Email",
            UserImage = "UserImage",
            LastDirectoryUpdate = "LastDirectoryUpdate",
            IsActive = "IsActive",
            Password = "Password",
            PasswordConfirm = "PasswordConfirm",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace ECNET.Administration {
    namespace UserService {
        const baseUrl = "Administration/User";
        function Create(request: Serenity.SaveRequest<UserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<UserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<UserRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<UserRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/User/Create",
            Update = "Administration/User/Update",
            Delete = "Administration/User/Delete",
            Undelete = "Administration/User/Undelete",
            Retrieve = "Administration/User/Retrieve",
            List = "Administration/User/List"
        }
    }
}
declare namespace ECNET.Common {
    interface CountByStatusRequest extends Serenity.ServiceRequest {
    }
}
declare namespace ECNET.Common {
    interface CountByStatusResponse extends Serenity.ServiceResponse {
        Values?: {
            [key: string]: any;
        }[];
        StatusKeys?: string[];
        StatusLabels?: string[];
    }
}
declare namespace ECNET.Common {
    interface UserPreferenceRetrieveRequest extends Serenity.ServiceRequest {
        PreferenceType?: string;
        Name?: string;
    }
}
declare namespace ECNET.Common {
    interface UserPreferenceRetrieveResponse extends Serenity.ServiceResponse {
        Value?: string;
    }
}
declare namespace ECNET.Common {
    interface UserPreferenceRow {
        UserPreferenceId?: number;
        UserId?: number;
        PreferenceType?: string;
        Name?: string;
        Value?: string;
    }
    namespace UserPreferenceRow {
        const idProperty = "UserPreferenceId";
        const nameProperty = "Name";
        const localTextPrefix = "Common.UserPreference";
        const deletePermission = "";
        const insertPermission = "";
        const readPermission = "";
        const updatePermission = "";
        const enum Fields {
            UserPreferenceId = "UserPreferenceId",
            UserId = "UserId",
            PreferenceType = "PreferenceType",
            Name = "Name",
            Value = "Value"
        }
    }
}
declare namespace ECNET.Common {
    namespace UserPreferenceService {
        const baseUrl = "Common/UserPreference";
        function Update(request: UserPreferenceUpdateRequest, onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: UserPreferenceRetrieveRequest, onSuccess?: (response: UserPreferenceRetrieveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Common/UserPreference/Update",
            Retrieve = "Common/UserPreference/Retrieve"
        }
    }
}
declare namespace ECNET.Common {
    interface UserPreferenceUpdateRequest extends Serenity.ServiceRequest {
        PreferenceType?: string;
        Name?: string;
        Value?: string;
    }
}
declare namespace ECNET {
    interface ContractCancelRequest extends Serenity.ServiceRequest {
        Reason?: string;
        Id?: string;
    }
}
declare namespace ECNET {
    interface ContractCancelResponse extends Serenity.ServiceResponse {
        Inserted?: number;
        Updated?: number;
        BatchNo?: string;
        ErrorList?: string[];
    }
}
declare namespace ECNET {
    interface ExcelImportRequest extends Serenity.ServiceRequest {
        FileName?: string;
    }
}
declare namespace ECNET {
    interface ExcelImportResponse extends Serenity.ServiceResponse {
        Inserted?: number;
        Updated?: number;
        BatchNo?: string;
        ErrorList?: string[];
    }
}
declare namespace ECNET {
    interface GetNextNumberContractRequest extends Serenity.ServiceRequest {
        Length?: number;
        PlaceId?: number;
        PlaceCode?: string;
        ContractTypeId?: number;
    }
}
declare namespace ECNET {
    interface GetNextNumberRequest extends Serenity.ServiceRequest {
        Prefix?: string;
        Length?: number;
    }
}
declare namespace ECNET {
    interface GetNextNumberResponse extends Serenity.ServiceResponse {
        Number?: number;
        Serial?: string;
    }
}
declare namespace ECNET.Membership {
    interface ChangePasswordForm {
        OldPassword: Serenity.PasswordEditor;
        NewPassword: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class ChangePasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace ECNET.Membership {
    interface ChangePasswordRequest extends Serenity.ServiceRequest {
        OldPassword?: string;
        NewPassword?: string;
        ConfirmPassword?: string;
    }
}
declare namespace ECNET.Membership {
    interface ForgotPasswordForm {
        Email: Serenity.EmailEditor;
    }
    class ForgotPasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace ECNET.Membership {
    interface ForgotPasswordRequest extends Serenity.ServiceRequest {
        Email?: string;
    }
}
declare namespace ECNET.Membership {
    interface LoginForm {
        Username: Serenity.StringEditor;
        Password: Serenity.PasswordEditor;
    }
    class LoginForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace ECNET.Membership {
    interface LoginRequest extends Serenity.ServiceRequest {
        Username?: string;
        Password?: string;
    }
}
declare namespace ECNET.Membership {
    interface ResetPasswordForm {
        NewPassword: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class ResetPasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace ECNET.Membership {
    interface ResetPasswordRequest extends Serenity.ServiceRequest {
        Token?: string;
        NewPassword?: string;
        ConfirmPassword?: string;
    }
}
declare namespace ECNET.Membership {
    interface SignUpForm {
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        ConfirmEmail: Serenity.EmailEditor;
        Password: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class SignUpForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace ECNET.Membership {
    interface SignUpRequest extends Serenity.ServiceRequest {
        DisplayName?: string;
        Email?: string;
        Password?: string;
    }
}
declare namespace ECNET.Office {
}
declare namespace ECNET.Office {
    interface AssetTempForm {
        PId: Serenity.IntegerEditor;
        Name: Serenity.StringEditor;
        Code: Serenity.StringEditor;
        Type: Serenity.IntegerEditor;
        HasContract: Serenity.BooleanEditor;
        HasProcessed: Serenity.BooleanEditor;
        CreatedBy: Serenity.StringEditor;
        CreatedDate: Serenity.DateEditor;
        UpdatedBy: Serenity.StringEditor;
        UpdatedDate: Serenity.DateEditor;
    }
    class AssetTempForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace ECNET.Office {
    interface AssetTempRow {
        Id?: number;
        PId?: number;
        Name?: string;
        Code?: string;
        Type?: number;
        HasContract?: boolean;
        HasProcessed?: boolean;
        CreatedBy?: string;
        CreatedDate?: string;
        UpdatedBy?: string;
        UpdatedDate?: string;
    }
    namespace AssetTempRow {
        const idProperty = "Id";
        const nameProperty = "Name";
        const localTextPrefix = "Office.AssetTemp";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            PId = "PId",
            Name = "Name",
            Code = "Code",
            Type = "Type",
            HasContract = "HasContract",
            HasProcessed = "HasProcessed",
            CreatedBy = "CreatedBy",
            CreatedDate = "CreatedDate",
            UpdatedBy = "UpdatedBy",
            UpdatedDate = "UpdatedDate"
        }
    }
}
declare namespace ECNET.Office {
    namespace AssetTempService {
        const baseUrl = "Office/AssetTemp";
        function Create(request: Serenity.SaveRequest<AssetTempRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<AssetTempRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AssetTempRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AssetTempRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Office/AssetTemp/Create",
            Update = "Office/AssetTemp/Update",
            Delete = "Office/AssetTemp/Delete",
            Retrieve = "Office/AssetTemp/Retrieve",
            List = "Office/AssetTemp/List"
        }
    }
}
declare namespace ECNET.Office {
    interface ContractConformCanncelForm {
        Reason: Serenity.TextAreaEditor;
        Id: Serenity.StringEditor;
    }
    class ContractConformCanncelForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace ECNET.Office {
}
declare namespace ECNET.Office {
    interface EmailAccountsForm {
        Email: Serenity.StringEditor;
        DisplayName: Serenity.StringEditor;
        Username: Serenity.StringEditor;
        Password: Serenity.StringEditor;
        Host: Serenity.StringEditor;
        Port: Serenity.IntegerEditor;
        EnableSsl: Serenity.BooleanEditor;
        UseDefaultCredentials: Serenity.BooleanEditor;
        IsActive: Serenity.BooleanEditor;
    }
    class EmailAccountsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace ECNET.Office {
    interface EmailAccountsRow {
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
    namespace EmailAccountsRow {
        const idProperty = "Id";
        const nameProperty = "Email";
        const localTextPrefix = "Office.EmailAccounts";
        const lookupKey = "dbo.EmailAccounts";
        function getLookup(): Q.Lookup<EmailAccountsRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
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
declare namespace ECNET.Office {
    namespace EmailAccountsService {
        const baseUrl = "Office/EmailAccounts";
        function Create(request: Serenity.SaveRequest<EmailAccountsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<EmailAccountsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<EmailAccountsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<EmailAccountsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Office/EmailAccounts/Create",
            Update = "Office/EmailAccounts/Update",
            Delete = "Office/EmailAccounts/Delete",
            Retrieve = "Office/EmailAccounts/Retrieve",
            List = "Office/EmailAccounts/List"
        }
    }
}
declare namespace ECNET.Office {
    interface PlaceExcelImportForm {
        FileName: Serenity.ImageUploadEditor;
    }
    class PlaceExcelImportForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace ECNET.Office {
}
declare namespace ECNET.Office {
    interface QueuedEmailForm {
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
    class QueuedEmailForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace ECNET.Office {
    interface QueuedEmailRow {
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
    namespace QueuedEmailRow {
        const idProperty = "Id";
        const nameProperty = "From";
        const localTextPrefix = "Office.QueuedEmail";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
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
declare namespace ECNET.Office {
    namespace QueuedEmailService {
        const baseUrl = "Office/QueuedEmail";
        function Create(request: Serenity.SaveRequest<QueuedEmailRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<QueuedEmailRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<QueuedEmailRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<QueuedEmailRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Office/QueuedEmail/Create",
            Update = "Office/QueuedEmail/Update",
            Delete = "Office/QueuedEmail/Delete",
            Retrieve = "Office/QueuedEmail/Retrieve",
            List = "Office/QueuedEmail/List"
        }
    }
}
declare namespace ECNET.Office {
}
declare namespace ECNET.Office {
    interface SysParametersForm {
        Code: Serenity.StringEditor;
        Name: Serenity.StringEditor;
        Value: Serenity.StringEditor;
        Unit: Serenity.StringEditor;
    }
    class SysParametersForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace ECNET.Office {
    interface SysParametersRow {
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
    namespace SysParametersRow {
        const idProperty = "Id";
        const nameProperty = "Code";
        const localTextPrefix = "Office.SysParameters";
        const lookupKey = "dbo.SysParameters";
        function getLookup(): Q.Lookup<SysParametersRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
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
declare namespace ECNET.Office {
    namespace SysParametersService {
        const baseUrl = "Office/SysParameters";
        function Create(request: Serenity.SaveRequest<SysParametersRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<SysParametersRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SysParametersRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SysParametersRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Office/SysParameters/Create",
            Update = "Office/SysParameters/Update",
            Delete = "Office/SysParameters/Delete",
            Retrieve = "Office/SysParameters/Retrieve",
            List = "Office/SysParameters/List"
        }
    }
}
declare namespace ECNET.Office {
}
declare namespace ECNET.Office {
    interface TblApprovalCenterForm {
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
    class TblApprovalCenterForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace ECNET.Office {
    interface TblApprovalCenterRow {
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
    namespace TblApprovalCenterRow {
        const idProperty = "Id";
        const nameProperty = "Code";
        const localTextPrefix = "Office.TblApprovalCenter";
        const lookupKey = "dbo.tblApprovalCenter";
        function getLookup(): Q.Lookup<TblApprovalCenterRow>;
        const deletePermission = "Ecnet:dbo.tblApprovalCenter:Delete";
        const insertPermission = "Ecnet:dbo.tblApprovalCenter:Modify";
        const readPermission = "Ecnet:dbo.tblApprovalCenter:View";
        const updatePermission = "Ecnet:dbo.tblApprovalCenter:Modify";
        const enum Fields {
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
declare namespace ECNET.Office {
    namespace TblApprovalCenterService {
        const baseUrl = "Office/TblApprovalCenter";
        function Create(request: Serenity.SaveRequest<TblApprovalCenterRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TblApprovalCenterRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TblApprovalCenterRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TblApprovalCenterRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Office/TblApprovalCenter/Create",
            Update = "Office/TblApprovalCenter/Update",
            Delete = "Office/TblApprovalCenter/Delete",
            Retrieve = "Office/TblApprovalCenter/Retrieve",
            List = "Office/TblApprovalCenter/List"
        }
    }
}
declare namespace ECNET.Office {
}
declare namespace ECNET.Office {
    interface TblAreaForm {
        BranchCode: Serenity.LookupEditor;
        Code: Serenity.StringEditor;
        Name: Serenity.StringEditor;
    }
    class TblAreaForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace ECNET.Office {
    interface TblAreaRow {
        Id?: number;
        Code?: string;
        BranchCode?: string;
        Name?: string;
    }
    namespace TblAreaRow {
        const idProperty = "Id";
        const nameProperty = "Name";
        const localTextPrefix = "Office.TblArea";
        const lookupKey = "dbo.TblAreaRow";
        function getLookup(): Q.Lookup<TblAreaRow>;
        const deletePermission = "Ecnet:dbo.tblArea:Delete";
        const insertPermission = "Ecnet:dbo.tblArea:Modify";
        const readPermission = "Ecnet:dbo.tblArea:View";
        const updatePermission = "Ecnet:dbo.tblArea:Modify";
        const enum Fields {
            Id = "Id",
            Code = "Code",
            BranchCode = "BranchCode",
            Name = "Name"
        }
    }
}
declare namespace ECNET.Office {
    namespace TblAreaService {
        const baseUrl = "Office/TblArea";
        function Create(request: Serenity.SaveRequest<TblAreaRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TblAreaRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TblAreaRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TblAreaRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Office/TblArea/Create",
            Update = "Office/TblArea/Update",
            Delete = "Office/TblArea/Delete",
            Retrieve = "Office/TblArea/Retrieve",
            List = "Office/TblArea/List"
        }
    }
}
declare namespace ECNET.Office {
}
declare namespace ECNET.Office {
    interface TblAssetForm {
        Name: Serenity.StringEditor;
        Code: Serenity.StringEditor;
        GroupId: Serenity.LookupEditor;
    }
    class TblAssetForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace ECNET.Office {
}
declare namespace ECNET.Office {
    interface TblAssetGroupForm {
        Name: Serenity.StringEditor;
        Description: Serenity.StringEditor;
    }
    class TblAssetGroupForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace ECNET.Office {
    interface TblAssetGroupRow {
        Id?: number;
        Name?: string;
        Description?: string;
    }
    namespace TblAssetGroupRow {
        const idProperty = "Id";
        const nameProperty = "Name";
        const localTextPrefix = "Office.TblAssetGroup";
        const lookupKey = "dbo.tblAssetGroup";
        function getLookup(): Q.Lookup<TblAssetGroupRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            Name = "Name",
            Description = "Description"
        }
    }
}
declare namespace ECNET.Office {
    namespace TblAssetGroupService {
        const baseUrl = "Office/TblAssetGroup";
        function Create(request: Serenity.SaveRequest<TblAssetGroupRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TblAssetGroupRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TblAssetGroupRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TblAssetGroupRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Office/TblAssetGroup/Create",
            Update = "Office/TblAssetGroup/Update",
            Delete = "Office/TblAssetGroup/Delete",
            Retrieve = "Office/TblAssetGroup/Retrieve",
            List = "Office/TblAssetGroup/List"
        }
    }
}
declare namespace ECNET.Office {
    interface TblAssetRow {
        Id?: number;
        Name?: string;
        Code?: string;
        GroupId?: number;
        GroupName?: string;
        GroupDescription?: string;
    }
    namespace TblAssetRow {
        const idProperty = "Id";
        const nameProperty = "Name";
        const localTextPrefix = "Office.TblAsset";
        const lookupKey = "dbo.tblAsset";
        function getLookup(): Q.Lookup<TblAssetRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            Name = "Name",
            Code = "Code",
            GroupId = "GroupId",
            GroupName = "GroupName",
            GroupDescription = "GroupDescription"
        }
    }
}
declare namespace ECNET.Office {
    namespace TblAssetService {
        const baseUrl = "Office/TblAsset";
        function Create(request: Serenity.SaveRequest<TblAssetRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TblAssetRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TblAssetRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TblAssetRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Office/TblAsset/Create",
            Update = "Office/TblAsset/Update",
            Delete = "Office/TblAsset/Delete",
            Retrieve = "Office/TblAsset/Retrieve",
            List = "Office/TblAsset/List"
        }
    }
}
declare namespace ECNET.Office {
}
declare namespace ECNET.Office {
    interface TblAssignAssetToPlaceForm {
        PlaceId: Serenity.LookupEditor;
        AssetId: ChangingLookupTextEditor;
        FromDate: Serenity.DateEditor;
        ToDate: Serenity.DateEditor;
    }
    class TblAssignAssetToPlaceForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace ECNET.Office {
    interface TblAssignAssetToPlaceRow {
        Id?: number;
        PlaceId?: number;
        AssetId?: number;
        FromDate?: string;
        ToDate?: string;
        CreatedBy?: string;
        CreatedDate?: string;
        UpdatedDate?: string;
        UpdateBy?: string;
        PlaceCode?: string;
        PlaceWidth?: string;
        PlaceLength?: string;
        PlaceTotalArea?: string;
        PlaceTotalCustomer?: number;
        PlaceLinkGoogleMap?: string;
        PlaceAddress?: string;
        PlaceCityId?: number;
        PlaceDistrictId?: number;
        PlaceContractId?: number;
        PlaceCreatedBy?: string;
        PlaceCreatedDate?: string;
        PlaceUpdateDate?: string;
        PlaceUpdatedBy?: string;
        PlaceTimeOpenFrom?: string;
        PlaceTimeOpenTo?: string;
        PlaceTimeOpening?: string;
        PlaceTimeOpeningDate?: string;
        PlaceStatus?: string;
        AssetName?: string;
        AssetCode?: string;
        AssetGroupId?: number;
    }
    namespace TblAssignAssetToPlaceRow {
        const idProperty = "Id";
        const nameProperty = "CreatedBy";
        const localTextPrefix = "Office.TblAssignAssetToPlace";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            PlaceId = "PlaceId",
            AssetId = "AssetId",
            FromDate = "FromDate",
            ToDate = "ToDate",
            CreatedBy = "CreatedBy",
            CreatedDate = "CreatedDate",
            UpdatedDate = "UpdatedDate",
            UpdateBy = "UpdateBy",
            PlaceCode = "PlaceCode",
            PlaceWidth = "PlaceWidth",
            PlaceLength = "PlaceLength",
            PlaceTotalArea = "PlaceTotalArea",
            PlaceTotalCustomer = "PlaceTotalCustomer",
            PlaceLinkGoogleMap = "PlaceLinkGoogleMap",
            PlaceAddress = "PlaceAddress",
            PlaceCityId = "PlaceCityId",
            PlaceDistrictId = "PlaceDistrictId",
            PlaceContractId = "PlaceContractId",
            PlaceCreatedBy = "PlaceCreatedBy",
            PlaceCreatedDate = "PlaceCreatedDate",
            PlaceUpdateDate = "PlaceUpdateDate",
            PlaceUpdatedBy = "PlaceUpdatedBy",
            PlaceTimeOpenFrom = "PlaceTimeOpenFrom",
            PlaceTimeOpenTo = "PlaceTimeOpenTo",
            PlaceTimeOpening = "PlaceTimeOpening",
            PlaceTimeOpeningDate = "PlaceTimeOpeningDate",
            PlaceStatus = "PlaceStatus",
            AssetName = "AssetName",
            AssetCode = "AssetCode",
            AssetGroupId = "AssetGroupId"
        }
    }
}
declare namespace ECNET.Office {
    namespace TblAssignAssetToPlaceService {
        const baseUrl = "Office/TblAssignAssetToPlace";
        function Create(request: Serenity.SaveRequest<TblAssignAssetToPlaceRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TblAssignAssetToPlaceRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TblAssignAssetToPlaceRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TblAssignAssetToPlaceRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Office/TblAssignAssetToPlace/Create",
            Update = "Office/TblAssignAssetToPlace/Update",
            Delete = "Office/TblAssignAssetToPlace/Delete",
            Retrieve = "Office/TblAssignAssetToPlace/Retrieve",
            List = "Office/TblAssignAssetToPlace/List"
        }
    }
}
declare namespace ECNET.Office {
}
declare namespace ECNET.Office {
    interface TblAssignCampaingForm {
    }
    class TblAssignCampaingForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
}
declare namespace ECNET.Office {
    interface TblAssignCampaingRow {
        Id?: number;
    }
    namespace TblAssignCampaingRow {
        const idProperty = "Id";
        const localTextPrefix = "Office.TblAssignCampaing";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id"
        }
    }
}
declare namespace ECNET.Office {
    namespace TblAssignCampaingService {
        const baseUrl = "Office/TblAssignCampaing";
        function Create(request: Serenity.SaveRequest<TblAssignCampaingRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TblAssignCampaingRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TblAssignCampaingRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TblAssignCampaingRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Office/TblAssignCampaing/Create",
            Update = "Office/TblAssignCampaing/Update",
            Delete = "Office/TblAssignCampaing/Delete",
            Retrieve = "Office/TblAssignCampaing/Retrieve",
            List = "Office/TblAssignCampaing/List"
        }
    }
}
declare namespace ECNET.Office {
}
declare namespace ECNET.Office {
    interface TblBranchForm {
        Code: Serenity.StringEditor;
        Name: Serenity.StringEditor;
    }
    class TblBranchForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace ECNET.Office {
    interface TblBranchRow {
        Id?: number;
        Code?: string;
        Name?: string;
    }
    namespace TblBranchRow {
        const idProperty = "Id";
        const nameProperty = "Name";
        const localTextPrefix = "Office.TblBranch";
        const lookupKey = "[dbo].[tblBranch]";
        function getLookup(): Q.Lookup<TblBranchRow>;
        const deletePermission = "Ecnet:dbo.tblBranch:Delete";
        const insertPermission = "Ecnet:dbo.tblBranch:Modify";
        const readPermission = "Ecnet:dbo.tblBranch:View";
        const updatePermission = "Ecnet:dbo.tblBranch:Modify";
        const enum Fields {
            Id = "Id",
            Code = "Code",
            Name = "Name"
        }
    }
}
declare namespace ECNET.Office {
    namespace TblBranchService {
        const baseUrl = "Office/TblBranch";
        function Create(request: Serenity.SaveRequest<TblBranchRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TblBranchRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TblBranchRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TblBranchRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Office/TblBranch/Create",
            Update = "Office/TblBranch/Update",
            Delete = "Office/TblBranch/Delete",
            Retrieve = "Office/TblBranch/Retrieve",
            List = "Office/TblBranch/List"
        }
    }
}
declare namespace ECNET.Office {
}
declare namespace ECNET.Office {
    interface TblCampaignForm {
    }
    class TblCampaignForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
}
declare namespace ECNET.Office {
    interface TblCampaignRow {
        Id?: number;
    }
    namespace TblCampaignRow {
        const idProperty = "Id";
        const localTextPrefix = "Office.TblCampaign";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id"
        }
    }
}
declare namespace ECNET.Office {
    namespace TblCampaignService {
        const baseUrl = "Office/TblCampaign";
        function Create(request: Serenity.SaveRequest<TblCampaignRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TblCampaignRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TblCampaignRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TblCampaignRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Office/TblCampaign/Create",
            Update = "Office/TblCampaign/Update",
            Delete = "Office/TblCampaign/Delete",
            Retrieve = "Office/TblCampaign/Retrieve",
            List = "Office/TblCampaign/List"
        }
    }
}
declare namespace ECNET.Office {
}
declare namespace ECNET.Office {
    interface TblCampaignTypeForm {
    }
    class TblCampaignTypeForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
}
declare namespace ECNET.Office {
    interface TblCampaignTypeRow {
        Id?: number;
    }
    namespace TblCampaignTypeRow {
        const idProperty = "Id";
        const localTextPrefix = "Office.TblCampaignType";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id"
        }
    }
}
declare namespace ECNET.Office {
    namespace TblCampaignTypeService {
        const baseUrl = "Office/TblCampaignType";
        function Create(request: Serenity.SaveRequest<TblCampaignTypeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TblCampaignTypeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TblCampaignTypeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TblCampaignTypeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Office/TblCampaignType/Create",
            Update = "Office/TblCampaignType/Update",
            Delete = "Office/TblCampaignType/Delete",
            Retrieve = "Office/TblCampaignType/Retrieve",
            List = "Office/TblCampaignType/List"
        }
    }
}
declare namespace ECNET.Office {
}
declare namespace ECNET.Office {
    interface TblCityForm {
        Name: Serenity.StringEditor;
        Code: Serenity.StringEditor;
        EnName: Serenity.StringEditor;
        ECCode: Serenity.StringEditor;
    }
    class TblCityForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace ECNET.Office {
    interface TblCityRow {
        Id?: number;
        Name?: string;
        EnName?: string;
        Code?: string;
        ECCode?: string;
    }
    namespace TblCityRow {
        const idProperty = "Id";
        const nameProperty = "Name";
        const localTextPrefix = "Office.TblCity";
        const lookupKey = "dbo.City";
        function getLookup(): Q.Lookup<TblCityRow>;
        const deletePermission = "Ecnet:dbo.tblCity:Delete";
        const insertPermission = "Ecnet:dbo.tblCity:Modify";
        const readPermission = "Ecnet:dbo.tblCity:View";
        const updatePermission = "Ecnet:dbo.tblCity:Modify";
        const enum Fields {
            Id = "Id",
            Name = "Name",
            EnName = "EnName",
            Code = "Code",
            ECCode = "ECCode"
        }
    }
}
declare namespace ECNET.Office {
    namespace TblCityService {
        const baseUrl = "Office/TblCity";
        function Create(request: Serenity.SaveRequest<TblCityRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TblCityRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TblCityRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TblCityRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Office/TblCity/Create",
            Update = "Office/TblCity/Update",
            Delete = "Office/TblCity/Delete",
            Retrieve = "Office/TblCity/Retrieve",
            List = "Office/TblCity/List"
        }
    }
}
declare namespace ECNET.Office {
}
declare namespace ECNET.Office {
    interface TblContractForm {
        Id: Serenity.IntegerEditor;
        BuyOrRent: Serenity.EnumEditor;
        PlaceId: PlaceContractEditor;
        Status: Serenity.EnumEditor;
        No: Serenity.StringEditor;
        ContractName: Serenity.StringEditor;
        TypeId: Serenity.LookupEditor;
        FromDate: Serenity.DateEditor;
        TotalContractAmt: Serenity.DecimalEditor;
        ToDate: Serenity.DateEditor;
        Paid: Serenity.DecimalEditor;
        DateSign: Serenity.DateEditor;
        RemainAmt: Serenity.DecimalEditor;
        EndDate: Serenity.DateEditor;
        NameOfOwner: Serenity.StringEditor;
        PhoneOfOwner: Serenity.StringEditor;
        EmailOfOwner: Serenity.StringEditor;
        IdentifyType: Serenity.EnumEditor;
        IdentifyNo: Serenity.StringEditor;
        AddressOfOwner: Serenity.TextAreaEditor;
        CurrentAddressOfOwner: Serenity.TextAreaEditor;
        NameOfOwner2nd: Serenity.StringEditor;
        PhoneOfOwner2nd: Serenity.StringEditor;
        IdentifyType2nd: Serenity.EnumEditor;
        IdentifyNo2nd: Serenity.StringEditor;
        AddressOfOwner2nd: Serenity.TextAreaEditor;
        CurrentAddressOfOwner2nd: Serenity.TextAreaEditor;
        ECPayCompanyName: Serenity.StringEditor;
        ECPayAddress: Serenity.StringEditor;
        ECPayPhone: Serenity.StringEditor;
        ECPayBankNo: Serenity.StringEditor;
        ECPayBankName: Serenity.StringEditor;
        ECPayBankNameBranch: Serenity.StringEditor;
        EcPayPerson: Serenity.StringEditor;
        EcPayPosition: Serenity.StringEditor;
        EcPayAuthorityNo: Serenity.StringEditor;
        EcPayAuthorityDate: Serenity.DateEditor;
        PlaceAddress: Serenity.TextAreaEditor;
        PlaceCityId: Serenity.LookupEditor;
        PlaceDistrictId: Serenity.LookupEditor;
        PlaceWardsId: Serenity.LookupEditor;
        CertificateNo: Serenity.StringEditor;
        CertificateDate: Serenity.DateEditor;
        CertificateCity: Serenity.LookupEditor;
        PlaceDescription: Serenity.StringEditor;
        PlaceTotalAreaUse: Serenity.DecimalEditor;
        Month: Serenity.IntegerEditor;
        YearCancel: Serenity.IntegerEditor;
        ReleaseDate: Serenity.DateEditor;
        BeginDate: Serenity.DateEditor;
        PlacePriceRent: Serenity.DecimalEditor;
        PlacePriceBuy: Serenity.DecimalEditor;
        ContractAmt: Serenity.DecimalEditor;
        ContractAmtString: Serenity.StringEditor;
        YearFixPrice: Serenity.IntegerEditor;
        YearBeginRedeal: Serenity.IntegerEditor;
        RecurringPayment: Serenity.IntegerEditor;
        PaymentMethod: Serenity.EnumEditor;
        AccountName: Serenity.StringEditor;
        AccountBankNo: Serenity.StringEditor;
        BankName: Serenity.StringEditor;
        WalletNo: Serenity.StringEditor;
        WalletName: Serenity.StringEditor;
        ListDetail: ItemDetailEditor;
        ListSchedule: ScheduleDetailEditor;
        FileContractUpload: Serenity.ImageUploadEditor;
        File1: Serenity.ImageUploadEditor;
        File2: Serenity.ImageUploadEditor;
        File3: Serenity.ImageUploadEditor;
        File4: Serenity.ImageUploadEditor;
        File5: Serenity.ImageUploadEditor;
        File6: Serenity.ImageUploadEditor;
        File7: Serenity.ImageUploadEditor;
        IsCompleted: Serenity.BooleanEditor;
        Remark1: Serenity.TextAreaEditor;
        Remark2: Serenity.TextAreaEditor;
        Remark3: Serenity.TextAreaEditor;
        Remark4: Serenity.TextAreaEditor;
        Remark5: Serenity.TextAreaEditor;
    }
    class TblContractForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace ECNET.Office {
}
declare namespace ECNET.Office {
    interface TblContractItemsForm {
        ContractId: Serenity.LookupEditor;
        ItemId: Serenity.LookupEditor;
        ItemUnit: Serenity.StringEditor;
        ItemDataType: Serenity.EnumEditor;
        Value: Serenity.StringEditor;
        ItemItemGroup: Serenity.StringEditor;
        ContractTypeId: Serenity.IntegerEditor;
    }
    class TblContractItemsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace ECNET.Office {
    interface TblContractItemsRow {
        DetailID?: number;
        ContractId?: number;
        ItemId?: number;
        Value?: string;
        ContractNameOfOwner?: string;
        ContractPhoneOfOwner?: string;
        ContractDateSign?: string;
        ContractTypeId?: number;
        ContractFileContractUpload?: string;
        ContractFile1?: string;
        ContractFile2?: string;
        ContractFile3?: string;
        ContractFile4?: string;
        ContractFile5?: string;
        ContractFile6?: string;
        ContractFile7?: string;
        ContractCreatedBy?: string;
        ContractCreatedDate?: string;
        ContractUpdatedBy?: string;
        ContractUpdatedDate?: string;
        ItemItemName?: string;
        ItemUnit?: string;
        ItemCode?: string;
        ItemItemType?: number;
        ItemItemGroup?: number;
        ItemDataType?: Web.Modules.Office.Common.DataType;
    }
    namespace TblContractItemsRow {
        const idProperty = "DetailID";
        const nameProperty = "Value";
        const localTextPrefix = "Office.TblContractItems";
        const lookupKey = "dbo.tblContractItems";
        function getLookup(): Q.Lookup<TblContractItemsRow>;
        const deletePermission = "Ecnet:dbo.tblContractItems:Modify";
        const insertPermission = "Ecnet:dbo.tblContractItems:Modify";
        const readPermission = "Ecnet:dbo.tblContractItems:View";
        const updatePermission = "Ecnet:dbo.tblContractItems:Modify";
        const enum Fields {
            DetailID = "DetailID",
            ContractId = "ContractId",
            ItemId = "ItemId",
            Value = "Value",
            ContractNameOfOwner = "ContractNameOfOwner",
            ContractPhoneOfOwner = "ContractPhoneOfOwner",
            ContractDateSign = "ContractDateSign",
            ContractTypeId = "ContractTypeId",
            ContractFileContractUpload = "ContractFileContractUpload",
            ContractFile1 = "ContractFile1",
            ContractFile2 = "ContractFile2",
            ContractFile3 = "ContractFile3",
            ContractFile4 = "ContractFile4",
            ContractFile5 = "ContractFile5",
            ContractFile6 = "ContractFile6",
            ContractFile7 = "ContractFile7",
            ContractCreatedBy = "ContractCreatedBy",
            ContractCreatedDate = "ContractCreatedDate",
            ContractUpdatedBy = "ContractUpdatedBy",
            ContractUpdatedDate = "ContractUpdatedDate",
            ItemItemName = "ItemItemName",
            ItemUnit = "ItemUnit",
            ItemCode = "ItemCode",
            ItemItemType = "ItemItemType",
            ItemItemGroup = "ItemItemGroup",
            ItemDataType = "ItemDataType"
        }
    }
}
declare namespace ECNET.Office {
    namespace TblContractItemsService {
        const baseUrl = "Office/TblContractItems";
        function Create(request: Serenity.SaveRequest<TblContractItemsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TblContractItemsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TblContractItemsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TblContractItemsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Office/TblContractItems/Create",
            Update = "Office/TblContractItems/Update",
            Delete = "Office/TblContractItems/Delete",
            Retrieve = "Office/TblContractItems/Retrieve",
            List = "Office/TblContractItems/List"
        }
    }
}
declare namespace ECNET.Office {
}
declare namespace ECNET.Office {
    interface TblContractPaymentForm {
        ContractId: Serenity.IntegerEditor;
        InvoiceNo: Serenity.StringEditor;
        DatePaid: Serenity.DateEditor;
        Period: Serenity.StringEditor;
        PaidAmount: Serenity.DecimalEditor;
        PaidBy: Serenity.StringEditor;
        CreatedBy: Serenity.StringEditor;
        CreatedDate: Serenity.DateEditor;
        FileInvoice: Serenity.StringEditor;
        File1: Serenity.StringEditor;
        File2: Serenity.StringEditor;
        File3: Serenity.StringEditor;
        File4: Serenity.StringEditor;
        File5: Serenity.StringEditor;
    }
    class TblContractPaymentForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace ECNET.Office {
    interface TblContractPaymentRow {
        Id?: number;
        ContractId?: number;
        InvoiceNo?: string;
        DatePaid?: string;
        Period?: string;
        PaidAmount?: number;
        PaidBy?: string;
        CreatedBy?: string;
        CreatedDate?: string;
        FileInvoice?: string;
        File1?: string;
        File2?: string;
        File3?: string;
        File4?: string;
        File5?: string;
        ContractNameOfOwner?: string;
        ContractPhoneOfOwner?: string;
        ContractDateSign?: string;
        ContractTypeId?: number;
        ContractFileContractUpload?: string;
        ContractFile1?: string;
        ContractFile2?: string;
        ContractFile3?: string;
        ContractFile4?: string;
        ContractFile5?: string;
        ContractFile6?: string;
        ContractFile7?: string;
        ContractCreatedBy?: string;
        ContractCreatedDate?: string;
        ContractUpdatedBy?: string;
        ContractUpdatedDate?: string;
    }
    namespace TblContractPaymentRow {
        const idProperty = "Id";
        const nameProperty = "InvoiceNo";
        const localTextPrefix = "Office.TblContractPayment";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            ContractId = "ContractId",
            InvoiceNo = "InvoiceNo",
            DatePaid = "DatePaid",
            Period = "Period",
            PaidAmount = "PaidAmount",
            PaidBy = "PaidBy",
            CreatedBy = "CreatedBy",
            CreatedDate = "CreatedDate",
            FileInvoice = "FileInvoice",
            File1 = "File1",
            File2 = "File2",
            File3 = "File3",
            File4 = "File4",
            File5 = "File5",
            ContractNameOfOwner = "ContractNameOfOwner",
            ContractPhoneOfOwner = "ContractPhoneOfOwner",
            ContractDateSign = "ContractDateSign",
            ContractTypeId = "ContractTypeId",
            ContractFileContractUpload = "ContractFileContractUpload",
            ContractFile1 = "ContractFile1",
            ContractFile2 = "ContractFile2",
            ContractFile3 = "ContractFile3",
            ContractFile4 = "ContractFile4",
            ContractFile5 = "ContractFile5",
            ContractFile6 = "ContractFile6",
            ContractFile7 = "ContractFile7",
            ContractCreatedBy = "ContractCreatedBy",
            ContractCreatedDate = "ContractCreatedDate",
            ContractUpdatedBy = "ContractUpdatedBy",
            ContractUpdatedDate = "ContractUpdatedDate"
        }
    }
}
declare namespace ECNET.Office {
    namespace TblContractPaymentService {
        const baseUrl = "Office/TblContractPayment";
        function Create(request: Serenity.SaveRequest<TblContractPaymentRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TblContractPaymentRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TblContractPaymentRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TblContractPaymentRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Office/TblContractPayment/Create",
            Update = "Office/TblContractPayment/Update",
            Delete = "Office/TblContractPayment/Delete",
            Retrieve = "Office/TblContractPayment/Retrieve",
            List = "Office/TblContractPayment/List"
        }
    }
}
declare namespace ECNET.Office {
    interface TblContractRow {
        Id?: number;
        NameOfOwner?: string;
        PhoneOfOwner?: string;
        DateSign?: string;
        TypeId?: number;
        FileContractUpload?: string;
        File1?: string;
        File2?: string;
        File3?: string;
        File4?: string;
        File5?: string;
        File6?: string;
        File7?: string;
        CreatedBy?: string;
        CreatedDate?: string;
        UpdatedBy?: string;
        UpdatedDate?: string;
        PlaceId?: number;
        IdentifyNo?: string;
        IdentifyType?: Web.Modules.Office.Common.IdentifyType;
        AddressOfOwner?: string;
        CurrentAddressOfOwner?: string;
        AddressOfOwner2nd?: string;
        CurrentAddressOfOwner2nd?: string;
        EmailOfOwner?: string;
        NameOfOwner2nd?: string;
        PhoneOfOwner2nd?: string;
        IdentifyNo2nd?: string;
        IdentifyType2nd?: Web.Modules.Office.Common.IdentifyType;
        AccountBankNo?: string;
        BankName?: string;
        AccountName?: string;
        WalletNo?: string;
        WalletName?: string;
        No?: string;
        Month?: number;
        Remark1?: string;
        Remark2?: string;
        Remark3?: string;
        Remark4?: string;
        Remark5?: string;
        FromDate?: string;
        ToDate?: string;
        BuyOrRent?: Web.Modules.Office.Common.TypeOfPlace;
        ContractAmt?: number;
        TotalArea?: number;
        ReleaseDate?: string;
        BeginDate?: string;
        PaymentMethod?: Web.Modules.Office.Common.PaymentMethod;
        CityId?: number;
        DistrictId?: number;
        WardsId?: number;
        EcPayPerson?: string;
        EcPayPosition?: string;
        EcPayAuthorityNo?: string;
        EcPayAuthorityDate?: string;
        TypeTypeName?: string;
        TypeDescription?: string;
        TypePersonSign?: string;
        TypePersonPosition?: string;
        TypePersonAuthorityNo?: string;
        TypeRemark1?: string;
        TypeRemark2?: string;
        TypeRemark3?: string;
        TypeRemark4?: string;
        TypeRemark5?: string;
        PlaceCode?: string;
        PlaceWidth?: number;
        PlaceLength?: number;
        PlaceTotalArea?: number;
        PlaceTotalCustomer?: number;
        PlaceLinkGoogleMap?: string;
        PlaceAddress?: string;
        PlaceCityId?: number;
        PlaceDistrictId?: number;
        PlaceContractId?: number;
        PlaceCreatedBy?: string;
        PlaceCreatedDate?: string;
        PlaceUpdateDate?: string;
        PlaceUpdatedBy?: string;
        PlaceTimeOpenFrom?: string;
        PlaceTimeOpenTo?: string;
        PlaceTimeOpening?: string;
        PlaceTimeOpeningDate?: string;
        PlaceStatus?: number;
        PlaceWardsId?: number;
        PlaceType?: number;
        PlaceNote?: string;
        PlaceTotalAreaUse?: number;
        PlaceNameOfOwner?: string;
        PlacePhoneOfOwner?: string;
        PlaceDescription?: string;
        PlaceMonthRent?: number;
        PlacePriceRent?: number;
        PlacePriceBuy?: number;
        PlaceRequireDeposit?: number;
        PlaceRequireDepositAmt?: number;
        PlaceRequireDateDeposit?: string;
        PlaceHasDeposit?: number;
        PlaceDeposit?: number;
        PlaceDepositAmt?: number;
        PlaceDateDeposit?: string;
        PlaceEmployeePicName?: string;
        PlaceEmployeePicCode?: string;
        PlaceEmployeePicEmail?: string;
        PlaceEmployeePicPhone?: string;
        PlaceEmployeePicWalletNo?: string;
        PlaceBranchIdPic?: number;
        PlaceAreaIdPic?: number;
        PlaceBatchNo?: string;
        PlaceImportBy?: string;
        PlaceImportDate?: string;
        CertificateNo?: string;
        CertificateDate?: string;
        CertificateCity?: number;
        ListDetail?: TblContractItemsRow[];
        ListSchedule?: TblContractScheduleRow[];
        Status?: Web.Modules.Office.Common.Status;
        YearCancel?: number;
        YearFixPrice?: number;
        YearBeginRedeal?: number;
        RecurringPayment?: number;
        Paid?: number;
        ECPayCompanyName?: string;
        ECPayAddress?: string;
        ECPayPhone?: string;
        ECPayBankNo?: string;
        ECPayBankName?: string;
        ECPayBankNameBranch?: string;
        ContractName?: string;
        RemainAmt?: number;
        EndDate?: string;
        ContractAmtString?: string;
        TotalContractAmt?: number;
        IsCompleted?: boolean;
    }
    namespace TblContractRow {
        const idProperty = "Id";
        const nameProperty = "No";
        const localTextPrefix = "Office.TblContract";
        const lookupKey = "dbo.tblContract";
        function getLookup(): Q.Lookup<TblContractRow>;
        const deletePermission = "Ecnet:dbo.tblContract:Modify";
        const insertPermission = "Ecnet:dbo.tblContract:Modify";
        const readPermission = "Ecnet:dbo.tblContract:View";
        const updatePermission = "Ecnet:dbo.tblContract:Modify";
        const enum Fields {
            Id = "Id",
            NameOfOwner = "NameOfOwner",
            PhoneOfOwner = "PhoneOfOwner",
            DateSign = "DateSign",
            TypeId = "TypeId",
            FileContractUpload = "FileContractUpload",
            File1 = "File1",
            File2 = "File2",
            File3 = "File3",
            File4 = "File4",
            File5 = "File5",
            File6 = "File6",
            File7 = "File7",
            CreatedBy = "CreatedBy",
            CreatedDate = "CreatedDate",
            UpdatedBy = "UpdatedBy",
            UpdatedDate = "UpdatedDate",
            PlaceId = "PlaceId",
            IdentifyNo = "IdentifyNo",
            IdentifyType = "IdentifyType",
            AddressOfOwner = "AddressOfOwner",
            CurrentAddressOfOwner = "CurrentAddressOfOwner",
            AddressOfOwner2nd = "AddressOfOwner2nd",
            CurrentAddressOfOwner2nd = "CurrentAddressOfOwner2nd",
            EmailOfOwner = "EmailOfOwner",
            NameOfOwner2nd = "NameOfOwner2nd",
            PhoneOfOwner2nd = "PhoneOfOwner2nd",
            IdentifyNo2nd = "IdentifyNo2nd",
            IdentifyType2nd = "IdentifyType2nd",
            AccountBankNo = "AccountBankNo",
            BankName = "BankName",
            AccountName = "AccountName",
            WalletNo = "WalletNo",
            WalletName = "WalletName",
            No = "No",
            Month = "Month",
            Remark1 = "Remark1",
            Remark2 = "Remark2",
            Remark3 = "Remark3",
            Remark4 = "Remark4",
            Remark5 = "Remark5",
            FromDate = "FromDate",
            ToDate = "ToDate",
            BuyOrRent = "BuyOrRent",
            ContractAmt = "ContractAmt",
            TotalArea = "TotalArea",
            ReleaseDate = "ReleaseDate",
            BeginDate = "BeginDate",
            PaymentMethod = "PaymentMethod",
            CityId = "CityId",
            DistrictId = "DistrictId",
            WardsId = "WardsId",
            EcPayPerson = "EcPayPerson",
            EcPayPosition = "EcPayPosition",
            EcPayAuthorityNo = "EcPayAuthorityNo",
            EcPayAuthorityDate = "EcPayAuthorityDate",
            TypeTypeName = "TypeTypeName",
            TypeDescription = "TypeDescription",
            TypePersonSign = "TypePersonSign",
            TypePersonPosition = "TypePersonPosition",
            TypePersonAuthorityNo = "TypePersonAuthorityNo",
            TypeRemark1 = "TypeRemark1",
            TypeRemark2 = "TypeRemark2",
            TypeRemark3 = "TypeRemark3",
            TypeRemark4 = "TypeRemark4",
            TypeRemark5 = "TypeRemark5",
            PlaceCode = "PlaceCode",
            PlaceWidth = "PlaceWidth",
            PlaceLength = "PlaceLength",
            PlaceTotalArea = "PlaceTotalArea",
            PlaceTotalCustomer = "PlaceTotalCustomer",
            PlaceLinkGoogleMap = "PlaceLinkGoogleMap",
            PlaceAddress = "PlaceAddress",
            PlaceCityId = "PlaceCityId",
            PlaceDistrictId = "PlaceDistrictId",
            PlaceContractId = "PlaceContractId",
            PlaceCreatedBy = "PlaceCreatedBy",
            PlaceCreatedDate = "PlaceCreatedDate",
            PlaceUpdateDate = "PlaceUpdateDate",
            PlaceUpdatedBy = "PlaceUpdatedBy",
            PlaceTimeOpenFrom = "PlaceTimeOpenFrom",
            PlaceTimeOpenTo = "PlaceTimeOpenTo",
            PlaceTimeOpening = "PlaceTimeOpening",
            PlaceTimeOpeningDate = "PlaceTimeOpeningDate",
            PlaceStatus = "PlaceStatus",
            PlaceWardsId = "PlaceWardsId",
            PlaceType = "PlaceType",
            PlaceNote = "PlaceNote",
            PlaceTotalAreaUse = "PlaceTotalAreaUse",
            PlaceNameOfOwner = "PlaceNameOfOwner",
            PlacePhoneOfOwner = "PlacePhoneOfOwner",
            PlaceDescription = "PlaceDescription",
            PlaceMonthRent = "PlaceMonthRent",
            PlacePriceRent = "PlacePriceRent",
            PlacePriceBuy = "PlacePriceBuy",
            PlaceRequireDeposit = "PlaceRequireDeposit",
            PlaceRequireDepositAmt = "PlaceRequireDepositAmt",
            PlaceRequireDateDeposit = "PlaceRequireDateDeposit",
            PlaceHasDeposit = "PlaceHasDeposit",
            PlaceDeposit = "PlaceDeposit",
            PlaceDepositAmt = "PlaceDepositAmt",
            PlaceDateDeposit = "PlaceDateDeposit",
            PlaceEmployeePicName = "PlaceEmployeePicName",
            PlaceEmployeePicCode = "PlaceEmployeePicCode",
            PlaceEmployeePicEmail = "PlaceEmployeePicEmail",
            PlaceEmployeePicPhone = "PlaceEmployeePicPhone",
            PlaceEmployeePicWalletNo = "PlaceEmployeePicWalletNo",
            PlaceBranchIdPic = "PlaceBranchIdPic",
            PlaceAreaIdPic = "PlaceAreaIdPic",
            PlaceBatchNo = "PlaceBatchNo",
            PlaceImportBy = "PlaceImportBy",
            PlaceImportDate = "PlaceImportDate",
            CertificateNo = "CertificateNo",
            CertificateDate = "CertificateDate",
            CertificateCity = "CertificateCity",
            ListDetail = "ListDetail",
            ListSchedule = "ListSchedule",
            Status = "Status",
            YearCancel = "YearCancel",
            YearFixPrice = "YearFixPrice",
            YearBeginRedeal = "YearBeginRedeal",
            RecurringPayment = "RecurringPayment",
            Paid = "Paid",
            ECPayCompanyName = "ECPayCompanyName",
            ECPayAddress = "ECPayAddress",
            ECPayPhone = "ECPayPhone",
            ECPayBankNo = "ECPayBankNo",
            ECPayBankName = "ECPayBankName",
            ECPayBankNameBranch = "ECPayBankNameBranch",
            ContractName = "ContractName",
            RemainAmt = "RemainAmt",
            EndDate = "EndDate",
            ContractAmtString = "ContractAmtString",
            TotalContractAmt = "TotalContractAmt",
            IsCompleted = "IsCompleted"
        }
    }
}
declare namespace ECNET.Office {
}
declare namespace ECNET.Office {
    interface TblContractScheduleForm {
        ContractId: Serenity.LookupEditor;
        Times: Serenity.IntegerEditor;
        Amount: Serenity.DecimalEditor;
        Date: Serenity.DateEditor;
    }
    class TblContractScheduleForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace ECNET.Office {
    interface TblContractScheduleRow {
        Id?: number;
        ContractId?: number;
        Times?: number;
        Amount?: number;
        Date?: string;
        ContarctNo?: string;
        ContarctNameOfOwner?: string;
        ContarctPhoneOfOwner?: string;
        ContarctDateSign?: string;
        ContarctTypeId?: number;
        ContarctFileContractUpload?: string;
        ContarctFile1?: string;
        ContarctFile2?: string;
        ContarctFile3?: string;
        ContarctFile4?: string;
        ContarctFile5?: string;
        ContarctFile6?: string;
        ContarctFile7?: string;
        ContarctCreatedBy?: string;
        ContarctCreatedDate?: string;
        ContarctUpdatedBy?: string;
        ContarctUpdatedDate?: string;
        ContarctPlaceId?: number;
        ContractIdentifyNo?: string;
        ContractIdentifyType?: number;
        ContarctAddressOfOwner?: string;
        ContarctCurrentAddressOfOwner?: string;
        ContarctEmailOfOwner?: string;
        ContarctNameOfOwner2nd?: string;
        ContarctPhoneOfOwner2nd?: string;
        ContractIdentifyNo2nd?: string;
        ContractIdentifyType2nd?: number;
        ContarctAccountBankNo?: string;
        ContarctBankName?: string;
        ContarctAccountName?: string;
        ContarctWalletNo?: string;
        ContarctWalletName?: string;
        ContractNo?: string;
        ContarctMonth?: number;
        ContarctRemark1?: string;
        ContarctRemark2?: string;
        ContarctRemark3?: string;
        ContarctRemark4?: string;
        ContarctRemark5?: string;
        ContarctFromDate?: string;
        ContarctToDate?: string;
        ContarctBuyOrRent?: number;
        ContarctContractAmt?: number;
        ContarctTotalArea?: number;
        ContarctReleaseDate?: string;
        ContarctBeginDate?: string;
        ContarctPaymentMethod?: number;
        ContarctCityId?: number;
        ContarctDistrictId?: number;
        ContarctEcPayPerson?: string;
        ContarctEcPayPosition?: string;
        ContarctEcPayAuthorityNo?: string;
        ContarctEcPayAuthorityDate?: string;
        ContarctWardsId?: number;
        ContarctAddressOfOwner2nd?: string;
        ContarctCurrentAddressOfOwner2nd?: string;
        ContarctAddress?: string;
        ContarctCertificateNo?: string;
        ContarctCertificateDate?: string;
        ContarctCertificateCity?: number;
    }
    namespace TblContractScheduleRow {
        const idProperty = "Id";
        const nameProperty = "ContarctNameOfOwner";
        const localTextPrefix = "Office.TblContractSchedule";
        const lookupKey = "dbo.tblContractSchedule";
        function getLookup(): Q.Lookup<TblContractScheduleRow>;
        const deletePermission = "Ecnet:dbo.tblContractSchedule:Modify";
        const insertPermission = "Ecnet:dbo.tblContractSchedule:Modify";
        const readPermission = "Ecnet:dbo.tblContractSchedule:View";
        const updatePermission = "Ecnet:dbo.tblContractSchedule:Modify";
        const enum Fields {
            Id = "Id",
            ContractId = "ContractId",
            Times = "Times",
            Amount = "Amount",
            Date = "Date",
            ContarctNo = "ContarctNo",
            ContarctNameOfOwner = "ContarctNameOfOwner",
            ContarctPhoneOfOwner = "ContarctPhoneOfOwner",
            ContarctDateSign = "ContarctDateSign",
            ContarctTypeId = "ContarctTypeId",
            ContarctFileContractUpload = "ContarctFileContractUpload",
            ContarctFile1 = "ContarctFile1",
            ContarctFile2 = "ContarctFile2",
            ContarctFile3 = "ContarctFile3",
            ContarctFile4 = "ContarctFile4",
            ContarctFile5 = "ContarctFile5",
            ContarctFile6 = "ContarctFile6",
            ContarctFile7 = "ContarctFile7",
            ContarctCreatedBy = "ContarctCreatedBy",
            ContarctCreatedDate = "ContarctCreatedDate",
            ContarctUpdatedBy = "ContarctUpdatedBy",
            ContarctUpdatedDate = "ContarctUpdatedDate",
            ContarctPlaceId = "ContarctPlaceId",
            ContractIdentifyNo = "ContractIdentifyNo",
            ContractIdentifyType = "ContractIdentifyType",
            ContarctAddressOfOwner = "ContarctAddressOfOwner",
            ContarctCurrentAddressOfOwner = "ContarctCurrentAddressOfOwner",
            ContarctEmailOfOwner = "ContarctEmailOfOwner",
            ContarctNameOfOwner2nd = "ContarctNameOfOwner2nd",
            ContarctPhoneOfOwner2nd = "ContarctPhoneOfOwner2nd",
            ContractIdentifyNo2nd = "ContractIdentifyNo2nd",
            ContractIdentifyType2nd = "ContractIdentifyType2nd",
            ContarctAccountBankNo = "ContarctAccountBankNo",
            ContarctBankName = "ContarctBankName",
            ContarctAccountName = "ContarctAccountName",
            ContarctWalletNo = "ContarctWalletNo",
            ContarctWalletName = "ContarctWalletName",
            ContractNo = "ContractNo",
            ContarctMonth = "ContarctMonth",
            ContarctRemark1 = "ContarctRemark1",
            ContarctRemark2 = "ContarctRemark2",
            ContarctRemark3 = "ContarctRemark3",
            ContarctRemark4 = "ContarctRemark4",
            ContarctRemark5 = "ContarctRemark5",
            ContarctFromDate = "ContarctFromDate",
            ContarctToDate = "ContarctToDate",
            ContarctBuyOrRent = "ContarctBuyOrRent",
            ContarctContractAmt = "ContarctContractAmt",
            ContarctTotalArea = "ContarctTotalArea",
            ContarctReleaseDate = "ContarctReleaseDate",
            ContarctBeginDate = "ContarctBeginDate",
            ContarctPaymentMethod = "ContarctPaymentMethod",
            ContarctCityId = "ContarctCityId",
            ContarctDistrictId = "ContarctDistrictId",
            ContarctEcPayPerson = "ContarctEcPayPerson",
            ContarctEcPayPosition = "ContarctEcPayPosition",
            ContarctEcPayAuthorityNo = "ContarctEcPayAuthorityNo",
            ContarctEcPayAuthorityDate = "ContarctEcPayAuthorityDate",
            ContarctWardsId = "ContarctWardsId",
            ContarctAddressOfOwner2nd = "ContarctAddressOfOwner2nd",
            ContarctCurrentAddressOfOwner2nd = "ContarctCurrentAddressOfOwner2nd",
            ContarctAddress = "ContarctAddress",
            ContarctCertificateNo = "ContarctCertificateNo",
            ContarctCertificateDate = "ContarctCertificateDate",
            ContarctCertificateCity = "ContarctCertificateCity"
        }
    }
}
declare namespace ECNET.Office {
    namespace TblContractScheduleService {
        const baseUrl = "Office/TblContractSchedule";
        function Create(request: Serenity.SaveRequest<TblContractScheduleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TblContractScheduleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TblContractScheduleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TblContractScheduleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Office/TblContractSchedule/Create",
            Update = "Office/TblContractSchedule/Update",
            Delete = "Office/TblContractSchedule/Delete",
            Retrieve = "Office/TblContractSchedule/Retrieve",
            List = "Office/TblContractSchedule/List"
        }
    }
}
declare namespace ECNET.Office {
    namespace TblContractService {
        const baseUrl = "Office/TblContract";
        function Create(request: Serenity.SaveRequest<TblContractRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TblContractRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TblContractRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TblContractRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function GetNextNumber(request: GetNextNumberContractRequest, onSuccess?: (response: System.String) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Cancel(request: ContractCancelRequest, onSuccess?: (response: ContractCancelResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Office/TblContract/Create",
            Update = "Office/TblContract/Update",
            Delete = "Office/TblContract/Delete",
            Retrieve = "Office/TblContract/Retrieve",
            List = "Office/TblContract/List",
            GetNextNumber = "Office/TblContract/GetNextNumber",
            Cancel = "Office/TblContract/Cancel"
        }
    }
}
declare namespace ECNET.Office {
}
declare namespace ECNET.Office {
    interface TblContractTypeForm {
        TypeName: Serenity.StringEditor;
        Type: Serenity.EnumEditor;
        Code: Serenity.StringEditor;
        Description: Serenity.TextAreaEditor;
        PersonSign: Serenity.StringEditor;
        PersonPosition: Serenity.StringEditor;
        PersonAuthorityNo: Serenity.StringEditor;
        Remark1: Serenity.TextAreaEditor;
        Remark2: Serenity.TextAreaEditor;
        Remark3: Serenity.TextAreaEditor;
        Remark4: Serenity.TextAreaEditor;
        Remark5: Serenity.TextAreaEditor;
    }
    class TblContractTypeForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace ECNET.Office {
    interface TblContractTypeRow {
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
    namespace TblContractTypeRow {
        const idProperty = "Id";
        const nameProperty = "TypeName";
        const localTextPrefix = "Office.TblContractType";
        const lookupKey = "dbo.tblContractType";
        function getLookup(): Q.Lookup<TblContractTypeRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
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
declare namespace ECNET.Office {
    namespace TblContractTypeService {
        const baseUrl = "Office/TblContractType";
        function Create(request: Serenity.SaveRequest<TblContractTypeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TblContractTypeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TblContractTypeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TblContractTypeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Office/TblContractType/Create",
            Update = "Office/TblContractType/Update",
            Delete = "Office/TblContractType/Delete",
            Retrieve = "Office/TblContractType/Retrieve",
            List = "Office/TblContractType/List"
        }
    }
}
declare namespace ECNET.Office {
}
declare namespace ECNET.Office {
    interface TblDistrictForm {
        CityId: Serenity.LookupEditor;
        Name: Serenity.StringEditor;
        Code: Serenity.StringEditor;
        EnName: Serenity.StringEditor;
    }
    class TblDistrictForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace ECNET.Office {
    interface TblDistrictRow {
        Id?: number;
        CityId?: number;
        Name?: string;
        Code?: string;
        EnName?: string;
        CityName?: string;
    }
    namespace TblDistrictRow {
        const idProperty = "Id";
        const nameProperty = "Name";
        const localTextPrefix = "Office.TblDistrict";
        const lookupKey = "dbo.tblDistrict";
        function getLookup(): Q.Lookup<TblDistrictRow>;
        const deletePermission = "Ecnet:dbo.tblDistrict:Delete";
        const insertPermission = "Ecnet:dbo.tblDistrict:Modify";
        const readPermission = "Ecnet:dbo.tblDistrict:View";
        const updatePermission = "Ecnet:dbo.tblDistrict:Modify";
        const enum Fields {
            Id = "Id",
            CityId = "CityId",
            Name = "Name",
            Code = "Code",
            EnName = "EnName",
            CityName = "CityName"
        }
    }
}
declare namespace ECNET.Office {
    namespace TblDistrictService {
        const baseUrl = "Office/TblDistrict";
        function Create(request: Serenity.SaveRequest<TblDistrictRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TblDistrictRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TblDistrictRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TblDistrictRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Office/TblDistrict/Create",
            Update = "Office/TblDistrict/Update",
            Delete = "Office/TblDistrict/Delete",
            Retrieve = "Office/TblDistrict/Retrieve",
            List = "Office/TblDistrict/List"
        }
    }
}
declare namespace ECNET.Office {
}
declare namespace ECNET.Office {
    interface TblItemsForm {
        Code: Serenity.StringEditor;
        ItemName: Serenity.StringEditor;
        Unit: Serenity.StringEditor;
        DataType: Serenity.EnumEditor;
        ItemType: Serenity.EnumEditor;
        ItemGroup: Serenity.EnumEditor;
        Decriptions: Serenity.TextAreaEditor;
    }
    class TblItemsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace ECNET.Office {
    interface TblItemsRow {
        Id?: number;
        ItemName?: string;
        Unit?: string;
        ItemType?: Web.Modules.Office.Common.TypeOfItem;
        ItemGroup?: Web.Modules.Office.Common.ItemGroup;
        DataType?: Web.Modules.Office.Common.DataType;
        Code?: string;
        Decriptions?: string;
    }
    namespace TblItemsRow {
        const idProperty = "Id";
        const nameProperty = "ItemName";
        const localTextPrefix = "Office.TblItems";
        const lookupKey = "dbo.tblItems";
        function getLookup(): Q.Lookup<TblItemsRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            ItemName = "ItemName",
            Unit = "Unit",
            ItemType = "ItemType",
            ItemGroup = "ItemGroup",
            DataType = "DataType",
            Code = "Code",
            Decriptions = "Decriptions"
        }
    }
}
declare namespace ECNET.Office {
    namespace TblItemsService {
        const baseUrl = "Office/TblItems";
        function Create(request: Serenity.SaveRequest<TblItemsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TblItemsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TblItemsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TblItemsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Office/TblItems/Create",
            Update = "Office/TblItems/Update",
            Delete = "Office/TblItems/Delete",
            Retrieve = "Office/TblItems/Retrieve",
            List = "Office/TblItems/List"
        }
    }
}
declare namespace ECNET.Office {
}
declare namespace ECNET.Office {
    interface TblPlaceDetailsForm {
        PlaceId: Serenity.LookupEditor;
        ItemId: Serenity.LookupEditor;
        Value: Serenity.StringEditor;
        Unit: Serenity.StringEditor;
        PlaceType: Serenity.IntegerEditor;
        ItemDataType: Serenity.EnumEditor;
        Note: Serenity.TextAreaEditor;
    }
    class TblPlaceDetailsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace ECNET.Office {
    interface TblPlaceDetailsRow {
        Id?: number;
        PlaceId?: number;
        ItemId?: number;
        Value?: string;
        Unit?: string;
        CreatedBy?: string;
        CreatedDate?: string;
        UpdatedDate?: string;
        UpdatedBy?: string;
        Status?: number;
        Note?: string;
        PlaceCode?: string;
        PlaceWidth?: number;
        PlaceLength?: number;
        PlaceTotalArea?: number;
        PlaceTotalCustomer?: number;
        PlaceLinkGoogleMap?: string;
        PlaceAddress?: string;
        PlaceCityId?: number;
        PlaceDistrictId?: number;
        PlaceContractId?: number;
        PlaceCreatedBy?: string;
        PlaceCreatedDate?: string;
        PlaceUpdateDate?: string;
        PlaceUpdatedBy?: string;
        PlaceTimeOpenFrom?: string;
        PlaceTimeOpenTo?: string;
        PlaceTimeOpening?: string;
        PlaceTimeOpeningDate?: string;
        PlaceStatus?: number;
        PlaceWardsId?: number;
        PlaceType?: number;
        PlaceNote?: string;
        PlaceTotalAreaUse?: number;
        ItemItemName?: string;
        ItemUnit?: string;
        ItemItemType?: number;
        ItemCode?: string;
        ItemDecriptions?: string;
        ItemItemGroup?: number;
        ItemDataType?: Web.Modules.Office.Common.DataType;
    }
    namespace TblPlaceDetailsRow {
        const idProperty = "Id";
        const nameProperty = "Value";
        const localTextPrefix = "Office.TblPlaceDetails";
        const lookupKey = "dbo.tblPlaceDetails";
        function getLookup(): Q.Lookup<TblPlaceDetailsRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            PlaceId = "PlaceId",
            ItemId = "ItemId",
            Value = "Value",
            Unit = "Unit",
            CreatedBy = "CreatedBy",
            CreatedDate = "CreatedDate",
            UpdatedDate = "UpdatedDate",
            UpdatedBy = "UpdatedBy",
            Status = "Status",
            Note = "Note",
            PlaceCode = "PlaceCode",
            PlaceWidth = "PlaceWidth",
            PlaceLength = "PlaceLength",
            PlaceTotalArea = "PlaceTotalArea",
            PlaceTotalCustomer = "PlaceTotalCustomer",
            PlaceLinkGoogleMap = "PlaceLinkGoogleMap",
            PlaceAddress = "PlaceAddress",
            PlaceCityId = "PlaceCityId",
            PlaceDistrictId = "PlaceDistrictId",
            PlaceContractId = "PlaceContractId",
            PlaceCreatedBy = "PlaceCreatedBy",
            PlaceCreatedDate = "PlaceCreatedDate",
            PlaceUpdateDate = "PlaceUpdateDate",
            PlaceUpdatedBy = "PlaceUpdatedBy",
            PlaceTimeOpenFrom = "PlaceTimeOpenFrom",
            PlaceTimeOpenTo = "PlaceTimeOpenTo",
            PlaceTimeOpening = "PlaceTimeOpening",
            PlaceTimeOpeningDate = "PlaceTimeOpeningDate",
            PlaceStatus = "PlaceStatus",
            PlaceWardsId = "PlaceWardsId",
            PlaceType = "PlaceType",
            PlaceNote = "PlaceNote",
            PlaceTotalAreaUse = "PlaceTotalAreaUse",
            ItemItemName = "ItemItemName",
            ItemUnit = "ItemUnit",
            ItemItemType = "ItemItemType",
            ItemCode = "ItemCode",
            ItemDecriptions = "ItemDecriptions",
            ItemItemGroup = "ItemItemGroup",
            ItemDataType = "ItemDataType"
        }
    }
}
declare namespace ECNET.Office {
    namespace TblPlaceDetailsService {
        const baseUrl = "Office/TblPlaceDetails";
        function Create(request: Serenity.SaveRequest<TblPlaceDetailsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TblPlaceDetailsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TblPlaceDetailsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TblPlaceDetailsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Office/TblPlaceDetails/Create",
            Update = "Office/TblPlaceDetails/Update",
            Delete = "Office/TblPlaceDetails/Delete",
            Retrieve = "Office/TblPlaceDetails/Retrieve",
            List = "Office/TblPlaceDetails/List"
        }
    }
}
declare namespace ECNET.Office {
}
declare namespace ECNET.Office {
    interface TblPlaceOfBussinessForm {
        Code: Serenity.StringEditor;
        Status: Serenity.EnumEditor;
        Address: Serenity.StringEditor;
        CityId: Serenity.LookupEditor;
        DistrictId: Serenity.LookupEditor;
        WardsId: Serenity.LookupEditor;
        LinkGoogleMap: Serenity.TextAreaEditor;
        NameOfOwner: Serenity.StringEditor;
        PhoneOfOwner: Serenity.StringEditor;
        Description: Serenity.TextAreaEditor;
        Width: Serenity.DecimalEditor;
        TotalAreaUse: Serenity.DecimalEditor;
        TotalArea: Serenity.DecimalEditor;
        Door: Serenity.StringEditor;
        Ceiling: Serenity.StringEditor;
        Wall: Serenity.StringEditor;
        Floor: Serenity.StringEditor;
        Type: Serenity.EnumEditor;
        MonthRent: Serenity.IntegerEditor;
        PriceRent: Serenity.DecimalEditor;
        PriceBuy: Serenity.DecimalEditor;
        RequireDeposit: Serenity.EnumEditor;
        MonthDeposit: Serenity.IntegerEditor;
        RequireDepositAmt: Serenity.DecimalEditor;
        RequireDateDeposit: Serenity.DateEditor;
        HasDeposit: Serenity.EnumEditor;
        DepositAmt: Serenity.DecimalEditor;
        DateDeposit: Serenity.DateEditor;
        BranchIdPic: Serenity.LookupEditor;
        EmployeePicName: Serenity.StringEditor;
        EmployeePicCode: Serenity.StringEditor;
        EmployeePicEmail: Serenity.StringEditor;
        EmployeePicPhone: Serenity.StringEditor;
        EmployeePicWalletNo: Serenity.StringEditor;
        TotalCustomer: Serenity.EnumEditor;
        Note: Serenity.TextAreaEditor;
        ContractId: Serenity.IntegerEditor;
        File1: Serenity.ImageUploadEditor;
        File2: Serenity.ImageUploadEditor;
        File3: Serenity.ImageUploadEditor;
        File4: Serenity.ImageUploadEditor;
        File5: Serenity.ImageUploadEditor;
        File6: Serenity.ImageUploadEditor;
        File7: Serenity.ImageUploadEditor;
        File8: Serenity.ImageUploadEditor;
        File9: Serenity.ImageUploadEditor;
        File10: Serenity.ImageUploadEditor;
    }
    class TblPlaceOfBussinessForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace ECNET.Office {
    interface TblPlaceOfBussinessRow {
        Id?: number;
        Code?: string;
        Width?: number;
        Length?: number;
        TotalArea?: number;
        TotalCustomer?: Web.Modules.Office.Common.TotalCustomer;
        LinkGoogleMap?: string;
        Address?: string;
        CityId?: number;
        AreaIdPic?: number;
        DistrictId?: number;
        ContractId?: number;
        CreatedBy?: string;
        CreatedDate?: string;
        UpdateDate?: string;
        UpdatedBy?: string;
        TimeOpenFrom?: string;
        TimeOpenTo?: string;
        TimeOpening?: string;
        TimeOpeningDate?: string;
        Status?: Web.Modules.Office.Common.Status;
        WardsId?: number;
        Type?: Web.Modules.Office.Common.TypeOfPlace;
        Note?: string;
        TotalAreaUse?: number;
        NameOfOwner?: string;
        PhoneOfOwner?: string;
        Description?: string;
        MonthRent?: number;
        PriceRent?: number;
        PriceBuy?: number;
        RequireDeposit?: Web.Modules.Office.Common.YesNo;
        RequireDepositAmt?: number;
        RequireDateDeposit?: string;
        HasDeposit?: Web.Modules.Office.Common.YesNo;
        Deposit?: number;
        DepositAmt?: number;
        DateDeposit?: string;
        EmployeePicName?: string;
        EmployeePicCode?: string;
        EmployeePicEmail?: string;
        EmployeePicPhone?: string;
        EmployeePicWalletNo?: string;
        BranchIdPic?: number;
        CityName?: string;
        CityCode?: string;
        CityEnName?: string;
        CityEcCode?: string;
        DistrictCityId?: number;
        DistrictName?: string;
        DistrictEnName?: string;
        DistrictCode?: string;
        ContractNo?: string;
        ContractNameOfOwner?: string;
        ContractPhoneOfOwner?: string;
        ContractDateSign?: string;
        ContractTypeId?: number;
        ContractFileContractUpload?: string;
        ContractFile1?: string;
        ContractFile2?: string;
        ContractFile3?: string;
        ContractFile4?: string;
        ContractFile5?: string;
        ContractFile6?: string;
        ContractFile7?: string;
        ContractCreatedBy?: string;
        ContractCreatedDate?: string;
        ContractUpdatedBy?: string;
        ContractUpdatedDate?: string;
        ContractPlaceId?: number;
        WardsDistrictId?: number;
        WardsName?: string;
        WardsEnName?: string;
        WardsCode?: string;
        BatchNo?: string;
        ImportBy?: string;
        ImportDate?: string;
        MonthRequireDeposit?: number;
        BranchIdPicName?: string;
        File1?: string;
        File2?: string;
        File3?: string;
        File4?: string;
        File5?: string;
        File6?: string;
        File7?: string;
        File8?: string;
        File9?: string;
        File10?: string;
        MonthDeposit?: number;
        Door?: string;
        Ceiling?: string;
        Wall?: string;
        Floor?: string;
    }
    namespace TblPlaceOfBussinessRow {
        const idProperty = "Id";
        const nameProperty = "Code";
        const localTextPrefix = "Office.TblPlaceOfBussiness";
        const lookupKey = "dbo.tblPlaceOfBussiness";
        function getLookup(): Q.Lookup<TblPlaceOfBussinessRow>;
        const deletePermission = "Ecnet:dbo.tblPlaceOfBussiness:Delete";
        const insertPermission = "Ecnet:dbo.tblPlaceOfBussiness:Modify";
        const readPermission = "Ecnet:dbo.tblPlaceOfBussiness:View";
        const updatePermission = "Ecnet:dbo.tblPlaceOfBussiness:Modify";
        const enum Fields {
            Id = "Id",
            Code = "Code",
            Width = "Width",
            Length = "Length",
            TotalArea = "TotalArea",
            TotalCustomer = "TotalCustomer",
            LinkGoogleMap = "LinkGoogleMap",
            Address = "Address",
            CityId = "CityId",
            AreaIdPic = "AreaIdPic",
            DistrictId = "DistrictId",
            ContractId = "ContractId",
            CreatedBy = "CreatedBy",
            CreatedDate = "CreatedDate",
            UpdateDate = "UpdateDate",
            UpdatedBy = "UpdatedBy",
            TimeOpenFrom = "TimeOpenFrom",
            TimeOpenTo = "TimeOpenTo",
            TimeOpening = "TimeOpening",
            TimeOpeningDate = "TimeOpeningDate",
            Status = "Status",
            WardsId = "WardsId",
            Type = "Type",
            Note = "Note",
            TotalAreaUse = "TotalAreaUse",
            NameOfOwner = "NameOfOwner",
            PhoneOfOwner = "PhoneOfOwner",
            Description = "Description",
            MonthRent = "MonthRent",
            PriceRent = "PriceRent",
            PriceBuy = "PriceBuy",
            RequireDeposit = "RequireDeposit",
            RequireDepositAmt = "RequireDepositAmt",
            RequireDateDeposit = "RequireDateDeposit",
            HasDeposit = "HasDeposit",
            Deposit = "Deposit",
            DepositAmt = "DepositAmt",
            DateDeposit = "DateDeposit",
            EmployeePicName = "EmployeePicName",
            EmployeePicCode = "EmployeePicCode",
            EmployeePicEmail = "EmployeePicEmail",
            EmployeePicPhone = "EmployeePicPhone",
            EmployeePicWalletNo = "EmployeePicWalletNo",
            BranchIdPic = "BranchIdPic",
            CityName = "CityName",
            CityCode = "CityCode",
            CityEnName = "CityEnName",
            CityEcCode = "CityEcCode",
            DistrictCityId = "DistrictCityId",
            DistrictName = "DistrictName",
            DistrictEnName = "DistrictEnName",
            DistrictCode = "DistrictCode",
            ContractNo = "ContractNo",
            ContractNameOfOwner = "ContractNameOfOwner",
            ContractPhoneOfOwner = "ContractPhoneOfOwner",
            ContractDateSign = "ContractDateSign",
            ContractTypeId = "ContractTypeId",
            ContractFileContractUpload = "ContractFileContractUpload",
            ContractFile1 = "ContractFile1",
            ContractFile2 = "ContractFile2",
            ContractFile3 = "ContractFile3",
            ContractFile4 = "ContractFile4",
            ContractFile5 = "ContractFile5",
            ContractFile6 = "ContractFile6",
            ContractFile7 = "ContractFile7",
            ContractCreatedBy = "ContractCreatedBy",
            ContractCreatedDate = "ContractCreatedDate",
            ContractUpdatedBy = "ContractUpdatedBy",
            ContractUpdatedDate = "ContractUpdatedDate",
            ContractPlaceId = "ContractPlaceId",
            WardsDistrictId = "WardsDistrictId",
            WardsName = "WardsName",
            WardsEnName = "WardsEnName",
            WardsCode = "WardsCode",
            BatchNo = "BatchNo",
            ImportBy = "ImportBy",
            ImportDate = "ImportDate",
            MonthRequireDeposit = "MonthRequireDeposit",
            BranchIdPicName = "BranchIdPicName",
            File1 = "File1",
            File2 = "File2",
            File3 = "File3",
            File4 = "File4",
            File5 = "File5",
            File6 = "File6",
            File7 = "File7",
            File8 = "File8",
            File9 = "File9",
            File10 = "File10",
            MonthDeposit = "MonthDeposit",
            Door = "Door",
            Ceiling = "Ceiling",
            Wall = "Wall",
            Floor = "Floor"
        }
    }
}
declare namespace ECNET.Office {
    namespace TblPlaceOfBussinessService {
        const baseUrl = "Office/TblPlaceOfBussiness";
        function Create(request: Serenity.SaveRequest<TblPlaceOfBussinessRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TblPlaceOfBussinessRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TblPlaceOfBussinessRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TblPlaceOfBussinessRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function GetNextNumber(request: GetNextNumberRequest, onSuccess?: (response: System.String) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ExcelImport(request: ExcelImportRequest, onSuccess?: (response: ExcelImportResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function GetDashbord(request: GetNextNumberRequest, onSuccess?: (response: System.String) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Office/TblPlaceOfBussiness/Create",
            Update = "Office/TblPlaceOfBussiness/Update",
            Delete = "Office/TblPlaceOfBussiness/Delete",
            Retrieve = "Office/TblPlaceOfBussiness/Retrieve",
            List = "Office/TblPlaceOfBussiness/List",
            GetNextNumber = "Office/TblPlaceOfBussiness/GetNextNumber",
            ExcelImport = "Office/TblPlaceOfBussiness/ExcelImport",
            GetDashbord = "Office/TblPlaceOfBussiness/GetDashbord"
        }
    }
}
declare namespace ECNET.Office {
}
declare namespace ECNET.Office {
    interface TblProjectForm {
        Code: Serenity.StringEditor;
        StatusId: Serenity.LookupEditor;
        Name: Serenity.StringEditor;
        InnitiatedDate: Serenity.DateEditor;
        FromDate: Serenity.DateEditor;
        ToDate: Serenity.DateEditor;
        TransactionLocationId: LocalTransactionEditor;
        PersonManagement: Serenity.StringEditor;
        PersonManagementPhone: Serenity.StringEditor;
        PlaceId: PlaceProjectEditor;
        PlaceAddress: Serenity.StringEditor;
        PlaceCityId: Serenity.LookupEditor;
        PlaceDistrictId: Serenity.LookupEditor;
        PlaceWardsId: Serenity.LookupEditor;
        Note: Serenity.StringEditor;
        ProjectItems: ProjectItemsEditor;
        IsNeedApprovalForNew: Serenity.BooleanEditor;
        IsNeedApprovalForEdit: Serenity.BooleanEditor;
        LevelApprovalForNew: Serenity.IntegerEditor;
        LevelApprovalForEdit: Serenity.IntegerEditor;
        RecordStatus: Serenity.EnumEditor;
    }
    class TblProjectForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace ECNET.Office {
}
declare namespace ECNET.Office {
    interface TblProjectItemForm {
        ProjectId: Serenity.LookupEditor;
        Status: Serenity.LookupEditor;
        Code: Serenity.StringEditor;
        Name: Serenity.StringEditor;
        Quantity: Serenity.DecimalEditor;
        UnitId: Serenity.LookupEditor;
        FromDate: Serenity.DateEditor;
        ToDate: Serenity.DateEditor;
        Decription: Serenity.StringEditor;
        TotalDays: Serenity.IntegerEditor;
        Note: Serenity.StringEditor;
        ProcessBar: Serenity.IntegerEditor;
    }
    class TblProjectItemForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace ECNET.Office {
    interface TblProjectItemRow {
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
    namespace TblProjectItemRow {
        const idProperty = "Id";
        const nameProperty = "Name";
        const localTextPrefix = "Office.TblProjectItem";
        const lookupKey = "dbo.tblProjectItem";
        function getLookup(): Q.Lookup<TblProjectItemRow>;
        const deletePermission = "Ecnet:dbo.tblProjectItem:Modify";
        const insertPermission = "Ecnet:dbo.tblProjectItem:Modify";
        const readPermission = "Ecnet:dbo.tblProjectItem:View";
        const updatePermission = "Ecnet:dbo.tblProjectItem:Modify";
        const enum Fields {
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
declare namespace ECNET.Office {
    namespace TblProjectItemService {
        const baseUrl = "Office/TblProjectItem";
        function Create(request: Serenity.SaveRequest<TblProjectItemRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TblProjectItemRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TblProjectItemRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TblProjectItemRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Office/TblProjectItem/Create",
            Update = "Office/TblProjectItem/Update",
            Delete = "Office/TblProjectItem/Delete",
            Retrieve = "Office/TblProjectItem/Retrieve",
            List = "Office/TblProjectItem/List"
        }
    }
}
declare namespace ECNET.Office {
    interface TblProjectRow {
        Id?: number;
        Code?: string;
        Name?: string;
        InnitiatedDate?: string;
        FromDate?: string;
        ToDate?: string;
        TransactionLocationId?: number;
        PersonManagement?: string;
        PersonManagementPhone?: string;
        PlaceId?: number;
        Note?: string;
        CreatedBy?: string;
        CreatedDate?: string;
        UpdatedBy?: string;
        UpdatedDate?: string;
        StatusId?: number;
        TransactionLocationCode?: string;
        TransactionLocationName?: string;
        TransactionLocationAreaId?: number;
        TransactionLocationEmployeeManageId?: number;
        TransactionLocationEmployeeCashId?: number;
        TransactionLocationPlaceId?: number;
        TransactionLocationOpenFrom?: string;
        TransactionLocationOpenTo?: string;
        TransactionLocationOpeningTime?: string;
        TransactionLocationOpeningDate?: string;
        TransactionLocationCreatedBy?: string;
        TransactionLocationCreatedDate?: string;
        TransactionLocationUpdatedBy?: string;
        TransactionLocationUpdatedDate?: string;
        TransactionLocationStatus?: number;
        PlaceCode?: string;
        PlaceWidth?: number;
        PlaceLength?: number;
        PlaceTotalArea?: number;
        PlaceTotalCustomer?: number;
        PlaceLinkGoogleMap?: string;
        PlaceAddress?: string;
        PlaceCityId?: number;
        PlaceDistrictId?: number;
        PlaceContractId?: number;
        PlaceCreatedBy?: string;
        PlaceCreatedDate?: string;
        PlaceUpdateDate?: string;
        PlaceUpdatedBy?: string;
        PlaceTimeOpenFrom?: string;
        PlaceTimeOpenTo?: string;
        PlaceTimeOpening?: string;
        PlaceTimeOpeningDate?: string;
        PlaceStatus?: number;
        PlaceWardsId?: number;
        PlaceType?: number;
        PlaceNote?: string;
        PlaceTotalAreaUse?: number;
        PlaceNameOfOwner?: string;
        PlacePhoneOfOwner?: string;
        PlaceDescription?: string;
        PlaceMonthRent?: number;
        PlacePriceRent?: number;
        PlacePriceBuy?: number;
        PlaceRequireDeposit?: number;
        PlaceRequireDepositAmt?: number;
        PlaceRequireDateDeposit?: string;
        PlaceHasDeposit?: number;
        PlaceDeposit?: number;
        PlaceDepositAmt?: number;
        PlaceDateDeposit?: string;
        PlaceEmployeePicName?: string;
        PlaceEmployeePicCode?: string;
        PlaceEmployeePicEmail?: string;
        PlaceEmployeePicPhone?: string;
        PlaceEmployeePicWalletNo?: string;
        PlaceBranchIdPic?: number;
        PlaceAreaIdPic?: number;
        PlaceBatchNo?: string;
        PlaceImportBy?: string;
        PlaceImportDate?: string;
        PlaceMonthRequireDeposit?: number;
        PlaceFile1?: string;
        PlaceFile2?: string;
        PlaceFile3?: string;
        PlaceFile4?: string;
        PlaceFile5?: string;
        PlaceFile6?: string;
        PlaceFile7?: string;
        PlaceFile8?: string;
        PlaceFile9?: string;
        PlaceFile10?: string;
        PlaceMonthDeposit?: number;
        PlaceDoor?: string;
        PlaceCeiling?: string;
        PlaceWall?: string;
        PlaceFloor?: string;
        StatusNextStatus?: number;
        StatusName?: string;
        StatusTypeId?: number;
        StatusCreatedBy?: string;
        StatusCreatedDate?: string;
        StatusUpdatedBy?: string;
        StatusUpdatedDate?: string;
        ProjectItems?: TblProjectItemRow[];
        RecordStatus?: Web.Modules.Office.Common.StatusRecord;
        IsUse?: number;
        IsNeedApprovalForEdit?: boolean;
        IsNeedApprovalForNew?: boolean;
        LevelApprovalForEdit?: number;
        LevelApprovalForNew?: number;
    }
    namespace TblProjectRow {
        const idProperty = "Id";
        const nameProperty = "Code";
        const localTextPrefix = "Office.TblProject";
        const lookupKey = "dbo.TblProject";
        function getLookup(): Q.Lookup<TblProjectRow>;
        const deletePermission = "Ecnet:dbo.tblProject:Modify";
        const insertPermission = "Ecnet:dbo.tblProject:Modify";
        const readPermission = "Ecnet:dbo.tblProject:View";
        const updatePermission = "Ecnet:dbo.tblProject:Modify";
        const enum Fields {
            Id = "Id",
            Code = "Code",
            Name = "Name",
            InnitiatedDate = "InnitiatedDate",
            FromDate = "FromDate",
            ToDate = "ToDate",
            TransactionLocationId = "TransactionLocationId",
            PersonManagement = "PersonManagement",
            PersonManagementPhone = "PersonManagementPhone",
            PlaceId = "PlaceId",
            Note = "Note",
            CreatedBy = "CreatedBy",
            CreatedDate = "CreatedDate",
            UpdatedBy = "UpdatedBy",
            UpdatedDate = "UpdatedDate",
            StatusId = "StatusId",
            TransactionLocationCode = "TransactionLocationCode",
            TransactionLocationName = "TransactionLocationName",
            TransactionLocationAreaId = "TransactionLocationAreaId",
            TransactionLocationEmployeeManageId = "TransactionLocationEmployeeManageId",
            TransactionLocationEmployeeCashId = "TransactionLocationEmployeeCashId",
            TransactionLocationPlaceId = "TransactionLocationPlaceId",
            TransactionLocationOpenFrom = "TransactionLocationOpenFrom",
            TransactionLocationOpenTo = "TransactionLocationOpenTo",
            TransactionLocationOpeningTime = "TransactionLocationOpeningTime",
            TransactionLocationOpeningDate = "TransactionLocationOpeningDate",
            TransactionLocationCreatedBy = "TransactionLocationCreatedBy",
            TransactionLocationCreatedDate = "TransactionLocationCreatedDate",
            TransactionLocationUpdatedBy = "TransactionLocationUpdatedBy",
            TransactionLocationUpdatedDate = "TransactionLocationUpdatedDate",
            TransactionLocationStatus = "TransactionLocationStatus",
            PlaceCode = "PlaceCode",
            PlaceWidth = "PlaceWidth",
            PlaceLength = "PlaceLength",
            PlaceTotalArea = "PlaceTotalArea",
            PlaceTotalCustomer = "PlaceTotalCustomer",
            PlaceLinkGoogleMap = "PlaceLinkGoogleMap",
            PlaceAddress = "PlaceAddress",
            PlaceCityId = "PlaceCityId",
            PlaceDistrictId = "PlaceDistrictId",
            PlaceContractId = "PlaceContractId",
            PlaceCreatedBy = "PlaceCreatedBy",
            PlaceCreatedDate = "PlaceCreatedDate",
            PlaceUpdateDate = "PlaceUpdateDate",
            PlaceUpdatedBy = "PlaceUpdatedBy",
            PlaceTimeOpenFrom = "PlaceTimeOpenFrom",
            PlaceTimeOpenTo = "PlaceTimeOpenTo",
            PlaceTimeOpening = "PlaceTimeOpening",
            PlaceTimeOpeningDate = "PlaceTimeOpeningDate",
            PlaceStatus = "PlaceStatus",
            PlaceWardsId = "PlaceWardsId",
            PlaceType = "PlaceType",
            PlaceNote = "PlaceNote",
            PlaceTotalAreaUse = "PlaceTotalAreaUse",
            PlaceNameOfOwner = "PlaceNameOfOwner",
            PlacePhoneOfOwner = "PlacePhoneOfOwner",
            PlaceDescription = "PlaceDescription",
            PlaceMonthRent = "PlaceMonthRent",
            PlacePriceRent = "PlacePriceRent",
            PlacePriceBuy = "PlacePriceBuy",
            PlaceRequireDeposit = "PlaceRequireDeposit",
            PlaceRequireDepositAmt = "PlaceRequireDepositAmt",
            PlaceRequireDateDeposit = "PlaceRequireDateDeposit",
            PlaceHasDeposit = "PlaceHasDeposit",
            PlaceDeposit = "PlaceDeposit",
            PlaceDepositAmt = "PlaceDepositAmt",
            PlaceDateDeposit = "PlaceDateDeposit",
            PlaceEmployeePicName = "PlaceEmployeePicName",
            PlaceEmployeePicCode = "PlaceEmployeePicCode",
            PlaceEmployeePicEmail = "PlaceEmployeePicEmail",
            PlaceEmployeePicPhone = "PlaceEmployeePicPhone",
            PlaceEmployeePicWalletNo = "PlaceEmployeePicWalletNo",
            PlaceBranchIdPic = "PlaceBranchIdPic",
            PlaceAreaIdPic = "PlaceAreaIdPic",
            PlaceBatchNo = "PlaceBatchNo",
            PlaceImportBy = "PlaceImportBy",
            PlaceImportDate = "PlaceImportDate",
            PlaceMonthRequireDeposit = "PlaceMonthRequireDeposit",
            PlaceFile1 = "PlaceFile1",
            PlaceFile2 = "PlaceFile2",
            PlaceFile3 = "PlaceFile3",
            PlaceFile4 = "PlaceFile4",
            PlaceFile5 = "PlaceFile5",
            PlaceFile6 = "PlaceFile6",
            PlaceFile7 = "PlaceFile7",
            PlaceFile8 = "PlaceFile8",
            PlaceFile9 = "PlaceFile9",
            PlaceFile10 = "PlaceFile10",
            PlaceMonthDeposit = "PlaceMonthDeposit",
            PlaceDoor = "PlaceDoor",
            PlaceCeiling = "PlaceCeiling",
            PlaceWall = "PlaceWall",
            PlaceFloor = "PlaceFloor",
            StatusNextStatus = "StatusNextStatus",
            StatusName = "StatusName",
            StatusTypeId = "StatusTypeId",
            StatusCreatedBy = "StatusCreatedBy",
            StatusCreatedDate = "StatusCreatedDate",
            StatusUpdatedBy = "StatusUpdatedBy",
            StatusUpdatedDate = "StatusUpdatedDate",
            ProjectItems = "ProjectItems",
            RecordStatus = "RecordStatus",
            IsUse = "IsUse",
            IsNeedApprovalForEdit = "IsNeedApprovalForEdit",
            IsNeedApprovalForNew = "IsNeedApprovalForNew",
            LevelApprovalForEdit = "LevelApprovalForEdit",
            LevelApprovalForNew = "LevelApprovalForNew"
        }
    }
}
declare namespace ECNET.Office {
    namespace TblProjectService {
        const baseUrl = "Office/TblProject";
        function Create(request: Serenity.SaveRequest<TblProjectRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TblProjectRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TblProjectRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TblProjectRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function GetProjectCode(request: Serenity.ServiceRequest, onSuccess?: (response: System.String) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Office/TblProject/Create",
            Update = "Office/TblProject/Update",
            Delete = "Office/TblProject/Delete",
            Retrieve = "Office/TblProject/Retrieve",
            List = "Office/TblProject/List",
            GetProjectCode = "Office/TblProject/GetProjectCode"
        }
    }
}
declare namespace ECNET.Office {
}
declare namespace ECNET.Office {
}
declare namespace ECNET.Office {
    interface TblStatusDetailForm {
        StatusId: Serenity.IntegerEditor;
        StatusDetailId: Serenity.IntegerEditor;
    }
    class TblStatusDetailForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace ECNET.Office {
}
declare namespace ECNET.Office {
    interface TblStatusDetailLevel2Form {
        StatusId: Serenity.IntegerEditor;
        StatusDetailId: Serenity.IntegerEditor;
    }
    class TblStatusDetailLevel2Form extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace ECNET.Office {
    interface TblStatusDetailLevel2Row {
        Id?: number;
        StatusId?: number;
        StatusDetailId?: number;
        StatusNextStatus?: number;
        StatusName?: string;
        StatusTypeId?: number;
        StatusCreatedBy?: string;
        StatusCreatedDate?: string;
        StatusUpdatedBy?: string;
        StatusUpdatedDate?: string;
        StatusAllowStatusId?: number;
        StatusIsReadOnly?: boolean;
        StatusIsNew?: boolean;
    }
    namespace TblStatusDetailLevel2Row {
        const idProperty = "Id";
        const localTextPrefix = "Office.TblStatusDetailLevel2";
        const lookupKey = "dbo.tblStatusDetailLevel2";
        function getLookup(): Q.Lookup<TblStatusDetailLevel2Row>;
        const deletePermission = "Ecnet:dbo.tblStatusDetail:Modify";
        const insertPermission = "Ecnet:dbo.tblStatusDetail:Modify";
        const readPermission = "Ecnet:dbo.tblStatusDetail:View";
        const updatePermission = "Ecnet:dbo.tblStatusDetail:Modify";
        const enum Fields {
            Id = "Id",
            StatusId = "StatusId",
            StatusDetailId = "StatusDetailId",
            StatusNextStatus = "StatusNextStatus",
            StatusName = "StatusName",
            StatusTypeId = "StatusTypeId",
            StatusCreatedBy = "StatusCreatedBy",
            StatusCreatedDate = "StatusCreatedDate",
            StatusUpdatedBy = "StatusUpdatedBy",
            StatusUpdatedDate = "StatusUpdatedDate",
            StatusAllowStatusId = "StatusAllowStatusId",
            StatusIsReadOnly = "StatusIsReadOnly",
            StatusIsNew = "StatusIsNew"
        }
    }
}
declare namespace ECNET.Office {
    namespace TblStatusDetailLevel2Service {
        const baseUrl = "Office/TblStatusDetailLevel2";
        function Create(request: Serenity.SaveRequest<TblStatusDetailLevel2Row>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TblStatusDetailLevel2Row>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TblStatusDetailLevel2Row>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TblStatusDetailLevel2Row>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Office/TblStatusDetailLevel2/Create",
            Update = "Office/TblStatusDetailLevel2/Update",
            Delete = "Office/TblStatusDetailLevel2/Delete",
            Retrieve = "Office/TblStatusDetailLevel2/Retrieve",
            List = "Office/TblStatusDetailLevel2/List"
        }
    }
}
declare namespace ECNET.Office {
    interface TblStatusDetailRow {
        Id?: number;
        StatusId?: number;
        StatusDetailId?: number;
        StatusNextStatus?: number;
        StatusName?: string;
        StatusTypeId?: number;
        StatusCreatedBy?: string;
        StatusCreatedDate?: string;
        StatusUpdatedBy?: string;
        StatusUpdatedDate?: string;
        StatusAllowStatusId?: number;
        StatusIsReadOnly?: boolean;
    }
    namespace TblStatusDetailRow {
        const idProperty = "Id";
        const localTextPrefix = "Office.TblStatusDetail";
        const lookupKey = "dbo.tblStatusDetail";
        function getLookup(): Q.Lookup<TblStatusDetailRow>;
        const deletePermission = "Ecnet:dbo.tblStatusDetail:Modify";
        const insertPermission = "Ecnet:dbo.tblStatusDetail:Modify";
        const readPermission = "Ecnet:dbo.tblStatusDetail:View";
        const updatePermission = "Ecnet:dbo.tblStatusDetail:Modify";
        const enum Fields {
            Id = "Id",
            StatusId = "StatusId",
            StatusDetailId = "StatusDetailId",
            StatusNextStatus = "StatusNextStatus",
            StatusName = "StatusName",
            StatusTypeId = "StatusTypeId",
            StatusCreatedBy = "StatusCreatedBy",
            StatusCreatedDate = "StatusCreatedDate",
            StatusUpdatedBy = "StatusUpdatedBy",
            StatusUpdatedDate = "StatusUpdatedDate",
            StatusAllowStatusId = "StatusAllowStatusId",
            StatusIsReadOnly = "StatusIsReadOnly"
        }
    }
}
declare namespace ECNET.Office {
    namespace TblStatusDetailService {
        const baseUrl = "Office/TblStatusDetail";
        function Create(request: Serenity.SaveRequest<TblStatusDetailRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TblStatusDetailRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TblStatusDetailRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TblStatusDetailRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Office/TblStatusDetail/Create",
            Update = "Office/TblStatusDetail/Update",
            Delete = "Office/TblStatusDetail/Delete",
            Retrieve = "Office/TblStatusDetail/Retrieve",
            List = "Office/TblStatusDetail/List"
        }
    }
}
declare namespace ECNET.Office {
    interface TblStatusForm {
        Name: Serenity.StringEditor;
        IsReadOnly: Serenity.BooleanEditor;
        IsNew: Serenity.BooleanEditor;
        TypeId: Serenity.EnumEditor;
        NextStatus: Serenity.LookupEditor;
        AllowList: Serenity.LookupEditor;
        AllowListLevel2: Serenity.LookupEditor;
    }
    class TblStatusForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace ECNET.Office {
    interface TblStatusRow {
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
    namespace TblStatusRow {
        const idProperty = "Id";
        const nameProperty = "Name";
        const localTextPrefix = "Office.TblStatus";
        const lookupKey = "dbo.tblStatus";
        function getLookup(): Q.Lookup<TblStatusRow>;
        const deletePermission = "Ecnet:dbo.tblStatus:Modify";
        const insertPermission = "Ecnet:dbo.tblStatus:Modify";
        const readPermission = "Ecnet:dbo.tblStatus:View";
        const updatePermission = "Ecnet:dbo.tblStatus:Modify";
        const enum Fields {
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
declare namespace ECNET.Office {
    namespace TblStatusService {
        const baseUrl = "Office/TblStatus";
        function Create(request: Serenity.SaveRequest<TblStatusRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TblStatusRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TblStatusRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TblStatusRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Office/TblStatus/Create",
            Update = "Office/TblStatus/Update",
            Delete = "Office/TblStatus/Delete",
            Retrieve = "Office/TblStatus/Retrieve",
            List = "Office/TblStatus/List"
        }
    }
}
declare namespace ECNET.Office {
}
declare namespace ECNET.Office {
    interface TblTransactionLocationForm {
        Code: Serenity.StringEditor;
        Name: Serenity.StringEditor;
        AreaId: Serenity.IntegerEditor;
        EmployeeManageId: Serenity.IntegerEditor;
        EmployeeCashId: Serenity.IntegerEditor;
        PlaceId: Serenity.IntegerEditor;
        OpenFrom: Serenity.StringEditor;
        OpenTo: Serenity.StringEditor;
        OpeningTime: Serenity.StringEditor;
        OpeningDate: Serenity.DateEditor;
        CreatedBy: Serenity.StringEditor;
        CreatedDate: Serenity.DateEditor;
        UpdatedBy: Serenity.StringEditor;
        UpdatedDate: Serenity.DateEditor;
        Status: Serenity.IntegerEditor;
    }
    class TblTransactionLocationForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace ECNET.Office {
    interface TblTransactionLocationRow {
        Id?: number;
        Code?: string;
        Name?: string;
        AreaId?: number;
        EmployeeManageId?: number;
        EmployeeCashId?: number;
        PlaceId?: number;
        OpenFrom?: string;
        OpenTo?: string;
        OpeningTime?: string;
        OpeningDate?: string;
        CreatedBy?: string;
        CreatedDate?: string;
        UpdatedBy?: string;
        UpdatedDate?: string;
        Status?: number;
        PlaceCode?: string;
        PlaceWidth?: string;
        PlaceLength?: string;
        PlaceTotalArea?: string;
        PlaceTotalCustomer?: number;
        PlaceLinkGoogleMap?: string;
        PlaceAddress?: string;
        PlaceCityId?: number;
        PlaceDistrictId?: number;
        PlaceContractId?: number;
        PlaceCreatedBy?: string;
        PlaceCreatedDate?: string;
        PlaceUpdateDate?: string;
        PlaceUpdatedBy?: string;
        PlaceTimeOpenFrom?: string;
        PlaceTimeOpenTo?: string;
        PlaceTimeOpening?: string;
        PlaceTimeOpeningDate?: string;
        PlaceStatus?: number;
        PlaceWardsId?: number;
    }
    namespace TblTransactionLocationRow {
        const idProperty = "Id";
        const nameProperty = "Code";
        const localTextPrefix = "Office.TblTransactionLocation";
        const lookupKey = "dbo.tblTransactionLocation";
        function getLookup(): Q.Lookup<TblTransactionLocationRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            Code = "Code",
            Name = "Name",
            AreaId = "AreaId",
            EmployeeManageId = "EmployeeManageId",
            EmployeeCashId = "EmployeeCashId",
            PlaceId = "PlaceId",
            OpenFrom = "OpenFrom",
            OpenTo = "OpenTo",
            OpeningTime = "OpeningTime",
            OpeningDate = "OpeningDate",
            CreatedBy = "CreatedBy",
            CreatedDate = "CreatedDate",
            UpdatedBy = "UpdatedBy",
            UpdatedDate = "UpdatedDate",
            Status = "Status",
            PlaceCode = "PlaceCode",
            PlaceWidth = "PlaceWidth",
            PlaceLength = "PlaceLength",
            PlaceTotalArea = "PlaceTotalArea",
            PlaceTotalCustomer = "PlaceTotalCustomer",
            PlaceLinkGoogleMap = "PlaceLinkGoogleMap",
            PlaceAddress = "PlaceAddress",
            PlaceCityId = "PlaceCityId",
            PlaceDistrictId = "PlaceDistrictId",
            PlaceContractId = "PlaceContractId",
            PlaceCreatedBy = "PlaceCreatedBy",
            PlaceCreatedDate = "PlaceCreatedDate",
            PlaceUpdateDate = "PlaceUpdateDate",
            PlaceUpdatedBy = "PlaceUpdatedBy",
            PlaceTimeOpenFrom = "PlaceTimeOpenFrom",
            PlaceTimeOpenTo = "PlaceTimeOpenTo",
            PlaceTimeOpening = "PlaceTimeOpening",
            PlaceTimeOpeningDate = "PlaceTimeOpeningDate",
            PlaceStatus = "PlaceStatus",
            PlaceWardsId = "PlaceWardsId"
        }
    }
}
declare namespace ECNET.Office {
    namespace TblTransactionLocationService {
        const baseUrl = "Office/TblTransactionLocation";
        function Create(request: Serenity.SaveRequest<TblTransactionLocationRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TblTransactionLocationRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TblTransactionLocationRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TblTransactionLocationRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Office/TblTransactionLocation/Create",
            Update = "Office/TblTransactionLocation/Update",
            Delete = "Office/TblTransactionLocation/Delete",
            Retrieve = "Office/TblTransactionLocation/Retrieve",
            List = "Office/TblTransactionLocation/List"
        }
    }
}
declare namespace ECNET.Office {
}
declare namespace ECNET.Office {
    interface TblUnitForm {
        Code: Serenity.StringEditor;
        Name: Serenity.StringEditor;
        Decription: Serenity.StringEditor;
        Rate: Serenity.IntegerEditor;
        CreatedBy: Serenity.StringEditor;
        CreatedDate: Serenity.DateEditor;
        UpdatedBy: Serenity.StringEditor;
        UpdatedDate: Serenity.DateEditor;
    }
    class TblUnitForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace ECNET.Office {
    interface TblUnitRow {
        Id?: number;
        Code?: string;
        Name?: string;
        Decription?: string;
        Rate?: number;
        CreatedBy?: string;
        CreatedDate?: string;
        UpdatedBy?: string;
        UpdatedDate?: string;
    }
    namespace TblUnitRow {
        const idProperty = "Id";
        const nameProperty = "Name";
        const localTextPrefix = "Office.TblUnit";
        const lookupKey = "dbo.tblUnit";
        function getLookup(): Q.Lookup<TblUnitRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            Code = "Code",
            Name = "Name",
            Decription = "Decription",
            Rate = "Rate",
            CreatedBy = "CreatedBy",
            CreatedDate = "CreatedDate",
            UpdatedBy = "UpdatedBy",
            UpdatedDate = "UpdatedDate"
        }
    }
}
declare namespace ECNET.Office {
    namespace TblUnitService {
        const baseUrl = "Office/TblUnit";
        function Create(request: Serenity.SaveRequest<TblUnitRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TblUnitRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TblUnitRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TblUnitRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Office/TblUnit/Create",
            Update = "Office/TblUnit/Update",
            Delete = "Office/TblUnit/Delete",
            Retrieve = "Office/TblUnit/Retrieve",
            List = "Office/TblUnit/List"
        }
    }
}
declare namespace ECNET.Office {
}
declare namespace ECNET.Office {
    interface TblWardsForm {
        DistrictId: Serenity.LookupEditor;
        Name: Serenity.StringEditor;
        EnName: Serenity.StringEditor;
    }
    class TblWardsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace ECNET.Office {
    interface TblWardsRow {
        Id?: number;
        DistrictId?: number;
        Name?: string;
        Code?: string;
        EnName?: string;
        DistrictCityId?: number;
        DistrictName?: string;
        DistrictEnName?: string;
    }
    namespace TblWardsRow {
        const idProperty = "Id";
        const nameProperty = "Name";
        const localTextPrefix = "Office.TblWards";
        const lookupKey = "dbo.tblWards";
        function getLookup(): Q.Lookup<TblWardsRow>;
        const deletePermission = "Ecnet:dbo.tblWards:Delete";
        const insertPermission = "Ecnet:dbo.tblWards:Modify";
        const readPermission = "Ecnet:dbo.tblWards:View";
        const updatePermission = "Ecnet:dbo.tblWards:Modify";
        const enum Fields {
            Id = "Id",
            DistrictId = "DistrictId",
            Name = "Name",
            Code = "Code",
            EnName = "EnName",
            DistrictCityId = "DistrictCityId",
            DistrictName = "DistrictName",
            DistrictEnName = "DistrictEnName"
        }
    }
}
declare namespace ECNET.Office {
    namespace TblWardsService {
        const baseUrl = "Office/TblWards";
        function Create(request: Serenity.SaveRequest<TblWardsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TblWardsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TblWardsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TblWardsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Office/TblWards/Create",
            Update = "Office/TblWards/Update",
            Delete = "Office/TblWards/Delete",
            Retrieve = "Office/TblWards/Retrieve",
            List = "Office/TblWards/List"
        }
    }
}
declare namespace ECNET.Office {
}
declare namespace ECNET.Office {
    interface TemplateEmailForm {
        Name: Serenity.StringEditor;
        To: Serenity.StringEditor;
        Bcc: Serenity.StringEditor;
        Cc: Serenity.StringEditor;
    }
    class TemplateEmailForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace ECNET.Office {
    interface TemplateEmailRow {
        Id?: number;
        Name?: string;
        To?: string;
        Bcc?: string;
        Cc?: string;
    }
    namespace TemplateEmailRow {
        const idProperty = "Id";
        const nameProperty = "Name";
        const localTextPrefix = "Office.TemplateEmail";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            Name = "Name",
            To = "To",
            Bcc = "Bcc",
            Cc = "Cc"
        }
    }
}
declare namespace ECNET.Office {
    namespace TemplateEmailService {
        const baseUrl = "Office/TemplateEmail";
        function Create(request: Serenity.SaveRequest<TemplateEmailRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TemplateEmailRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TemplateEmailRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TemplateEmailRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Office/TemplateEmail/Create",
            Update = "Office/TemplateEmail/Update",
            Delete = "Office/TemplateEmail/Delete",
            Retrieve = "Office/TemplateEmail/Retrieve",
            List = "Office/TemplateEmail/List"
        }
    }
}
declare namespace ECNET {
    interface PrintContractRequest extends Serenity.ServiceRequest {
        ContractId?: number;
    }
}
declare namespace ECNET {
    interface ScriptUserDefinition {
        Username?: string;
        DisplayName?: string;
        IsAdmin?: boolean;
        Permissions?: {
            [key: string]: boolean;
        };
    }
}
declare namespace ECNET.Texts {
}
declare namespace ECNET.Web.Modules.Administration.Common {
    enum LevelApproval {
        LV1 = 1,
        LV2 = 2,
        LV3 = 3
    }
}
declare namespace ECNET.Web.Modules.Common.DTO {
    interface ProjectTimelineReq extends Serenity.ServiceRequest {
        UserName?: string;
        Action?: string;
        Body?: string;
        Header?: string;
        Footer?: string;
        ProjectId?: number;
    }
}
declare namespace ECNET.Web.Modules.Office.Common {
    enum DataType {
        Int = 1,
        String = 2,
        Date = 3
    }
}
declare namespace ECNET.Web.Modules.Office.Common {
    enum IdentifyType {
        CMND = 1,
        PASSPORT = 2,
        CCCD = 3
    }
}
declare namespace ECNET.Web.Modules.Office.Common {
    enum ItemGroup {
        Rent = 1,
        Buy = 2
    }
}
declare namespace ECNET.Web.Modules.Office.Common {
    enum PaymentMethod {
        CASH = 1,
        TRANF = 2,
        WALL = 3
    }
}
declare namespace ECNET.Web.Modules.Office.Common {
    enum Status {
        New = 1,
        Approve = 2,
        Reject = 3,
        Canncel = 4,
        Completed = 5
    }
}
declare namespace ECNET.Web.Modules.Office.Common {
    enum StatusRecord {
        NEW = 0,
        APPROVE = 1,
        REJECT = 2,
        RETRY = 3
    }
}
declare namespace ECNET.Web.Modules.Office.Common {
    enum StatusType {
        Place = 1,
        Contract = 2,
        Project = 3,
        ProjectItem = 4
    }
}
declare namespace ECNET.Web.Modules.Office.Common {
    enum TotalCustomer {
        Value1 = 1,
        Value2 = 2,
        Value3 = 3,
        Value4 = 4,
        Value5 = 5,
        Value6 = 6,
        Value7 = 7,
        Value8 = 8,
        Value9 = 9,
        Value10 = 10
    }
}
declare namespace ECNET.Web.Modules.Office.Common {
    enum TypeApprove {
        Place = 1,
        Contract = 2,
        Project = 3
    }
}
declare namespace ECNET.Web.Modules.Office.Common {
    enum TypeOfItem {
        Place = 1,
        Contract = 2
    }
}
declare namespace ECNET.Web.Modules.Office.Common {
    enum TypeOfPlace {
        Rent = 1,
        Buy = 2
    }
}
declare namespace ECNET.Web.Modules.Office.Common {
    enum YesNo {
        Yes = 1,
        No = 2
    }
}
declare namespace ECNET.Web.Modules.Office.Response {
    interface CreateScheduleResp extends Serenity.ServiceResponse {
        result?: boolean;
        ErrorList?: string[];
    }
}
declare namespace ECNET.Web.Modules.Office.TblPlaceOfBussiness {
}
declare namespace ECNET.LanguageList {
    function getValue(): string[][];
}
declare namespace ECNET.ScriptInitialization {
}
declare namespace ECNET.Office {
    class CurrencyFormatter implements Slick.Formatter {
        cultureName: string;
        currencyName: string;
        format(ctx: Slick.FormatterContext): any;
    }
}
declare namespace ECNET.Administration {
    class LanguageDialog extends Serenity.EntityDialog<LanguageRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: LanguageForm;
    }
}
declare namespace ECNET.Administration {
    class LanguageGrid extends Serenity.EntityGrid<LanguageRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof LanguageDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): LanguageRow.Fields[];
    }
}
declare namespace ECNET.Administration {
    class RoleDialog extends Serenity.EntityDialog<RoleRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: RoleForm;
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
    }
}
declare namespace ECNET.Administration {
    class RoleGrid extends Serenity.EntityGrid<RoleRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof RoleDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): RoleRow.Fields[];
    }
}
declare namespace ECNET.Administration {
    class RolePermissionDialog extends Serenity.TemplatedDialog<RolePermissionDialogOptions> {
        private permissions;
        constructor(opt: RolePermissionDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface RolePermissionDialogOptions {
        roleID?: number;
        title?: string;
    }
}
declare var Vue: any;
declare namespace ECNET.Administration {
    class SergenPanel extends Serenity.Widget<any> {
        constructor(container: JQuery);
    }
}
declare namespace ECNET.Administration {
    class TranslationGrid extends Serenity.EntityGrid<TranslationItem, any> {
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        private hasChanges;
        private searchText;
        private sourceLanguage;
        private targetLanguage;
        private targetLanguageKey;
        constructor(container: JQuery);
        protected onClick(e: JQueryEventObject, row: number, cell: number): any;
        protected getColumns(): Slick.Column[];
        protected createToolbarExtensions(): void;
        protected saveChanges(language: string): PromiseLike<any>;
        protected onViewSubmit(): boolean;
        protected getButtons(): Serenity.ToolButton[];
        protected createQuickSearchInput(): void;
        protected onViewFilter(item: TranslationItem): boolean;
        protected usePager(): boolean;
    }
}
declare namespace ECNET.Administration {
    class UserDialog extends Serenity.EntityDialog<UserRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getIsActiveProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: UserForm;
        constructor();
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
        protected afterLoadEntity(): void;
    }
}
declare namespace ECNET.Administration {
    class UserGrid extends Serenity.EntityGrid<UserRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof UserDialog;
        protected getIdProperty(): string;
        protected getIsActiveProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): UserRow.Fields[];
    }
}
declare namespace ECNET.Administration {
    class PermissionCheckEditor extends Serenity.DataGrid<PermissionCheckItem, PermissionCheckEditorOptions> {
        protected getIdProperty(): string;
        private searchText;
        private byParentKey;
        constructor(container: JQuery, opt: PermissionCheckEditorOptions);
        private getItemGrantRevokeClass;
        private roleOrImplicit;
        private getItemEffectiveClass;
        protected getColumns(): Slick.Column[];
        setItems(items: PermissionCheckItem[]): void;
        protected onViewSubmit(): boolean;
        protected onViewFilter(item: PermissionCheckItem): boolean;
        private matchContains;
        private getDescendants;
        protected onClick(e: any, row: any, cell: any): void;
        private getParentKey;
        protected getButtons(): Serenity.ToolButton[];
        protected createToolbarExtensions(): void;
        private getSortedGroupAndPermissionKeys;
        value: UserPermissionRow[];
        private _rolePermissions;
        rolePermissions: string[];
        private _implicitPermissions;
        implicitPermissions: Q.Dictionary<string[]>;
    }
    interface PermissionCheckEditorOptions {
        showRevoke?: boolean;
    }
    interface PermissionCheckItem {
        ParentKey?: string;
        Key?: string;
        Title?: string;
        IsGroup?: boolean;
        GrantRevoke?: boolean;
    }
}
declare namespace ECNET.Administration {
    class UserPermissionDialog extends Serenity.TemplatedDialog<UserPermissionDialogOptions> {
        private permissions;
        constructor(opt: UserPermissionDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface UserPermissionDialogOptions {
        userID?: number;
        username?: string;
    }
}
declare namespace ECNET.Administration {
    class RoleCheckEditor extends Serenity.CheckTreeEditor<Serenity.CheckTreeItem<any>, any> {
        private searchText;
        constructor(div: JQuery);
        protected createToolbarExtensions(): void;
        protected getButtons(): any[];
        protected getTreeItems(): Serenity.CheckTreeItem<any>[];
        protected onViewFilter(item: any): boolean;
    }
}
declare namespace ECNET.Administration {
    class UserRoleDialog extends Serenity.TemplatedDialog<UserRoleDialogOptions> {
        private permissions;
        constructor(opt: UserRoleDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface UserRoleDialogOptions {
        userID: number;
        username: string;
    }
}
declare var Morris: any;
declare var Chart: any;
declare namespace ECNET.Common {
    class DashboardChart extends Serenity.TemplatedWidget<any> {
        private areaChart;
        private barChartData;
        private dounutChartData;
        static initializeChart(): void;
    }
}
declare namespace ECNET {
    class BasicProgressDialog extends Serenity.TemplatedDialog<any> {
        constructor();
        cancelled: boolean;
        max: number;
        value: number;
        title: string;
        cancelTitle: string;
        getDialogOptions(): JQueryUI.DialogOptions;
        initDialog(): void;
        getTemplate(): string;
    }
}
declare namespace ECNET.Common {
    class BulkServiceAction {
        protected keys: string[];
        protected queue: string[];
        protected queueIndex: number;
        protected progressDialog: BasicProgressDialog;
        protected pendingRequests: number;
        protected completedRequests: number;
        protected errorByKey: Q.Dictionary<Serenity.ServiceError>;
        private successCount;
        private errorCount;
        done: () => void;
        protected createProgressDialog(): void;
        protected getConfirmationFormat(): string;
        protected getConfirmationMessage(targetCount: any): string;
        protected confirm(targetCount: any, action: any): void;
        protected getNothingToProcessMessage(): string;
        protected nothingToProcess(): void;
        protected getParallelRequests(): number;
        protected getBatchSize(): number;
        protected startParallelExecution(): void;
        protected serviceCallCleanup(): void;
        protected executeForBatch(batch: string[]): void;
        protected executeNextBatch(): void;
        protected getAllHadErrorsFormat(): string;
        protected showAllHadErrors(): void;
        protected getSomeHadErrorsFormat(): string;
        protected showSomeHadErrors(): void;
        protected getAllSuccessFormat(): string;
        protected showAllSuccess(): void;
        protected showResults(): void;
        execute(keys: string[]): void;
        get_successCount(): any;
        set_successCount(value: number): void;
        get_errorCount(): any;
        set_errorCount(value: number): void;
    }
}
declare namespace ECNET.DialogUtils {
    function pendingChangesConfirmation(element: JQuery, hasPendingChanges: () => boolean): void;
}
declare namespace ECNET.Common {
    class EnumSelectFormatter implements Slick.Formatter {
        constructor();
        format(ctx: Slick.FormatterContext): string;
        enumKey: string;
        allowClear: boolean;
        emptyItemText: string;
    }
}
declare namespace ECNET.Common {
    interface ExcelExportOptions {
        grid: Serenity.DataGrid<any, any>;
        service: string;
        onViewSubmit: () => boolean;
        title?: string;
        hint?: string;
        separator?: boolean;
    }
    namespace ExcelExportHelper {
        function createToolButton(options: ExcelExportOptions): Serenity.ToolButton;
    }
}
declare namespace ECNET.Common {
    class GridEditorBase<TEntity> extends Serenity.EntityGrid<TEntity, any> implements Serenity.IGetEditValue, Serenity.ISetEditValue {
        protected getIdProperty(): string;
        protected nextId: number;
        constructor(container: JQuery);
        protected id(entity: TEntity): any;
        protected getNextId(): string;
        protected setNewId(entity: TEntity): void;
        protected save(opt: Serenity.ServiceOptions<any>, callback: (r: Serenity.ServiceResponse) => void): void;
        protected deleteEntity(id: number): boolean;
        protected validateEntity(row: TEntity, id: number): boolean;
        protected setEntities(items: TEntity[]): void;
        protected getNewEntity(): TEntity;
        protected getButtons(): Serenity.ToolButton[];
        protected editItem(entityOrId: any): void;
        getEditValue(property: any, target: any): void;
        setEditValue(source: any, property: any): void;
        value: TEntity[];
        protected getGridCanLoad(): boolean;
        protected usePager(): boolean;
        protected getInitialTitle(): any;
        protected createQuickSearchInput(): void;
    }
}
declare namespace ECNET.Common {
    class GridEditorDialog<TEntity> extends Serenity.EntityDialog<TEntity, any> {
        protected getIdProperty(): string;
        onSave: (options: Serenity.ServiceOptions<Serenity.SaveResponse>, callback: (response: Serenity.SaveResponse) => void) => void;
        onDelete: (options: Serenity.ServiceOptions<Serenity.DeleteResponse>, callback: (response: Serenity.DeleteResponse) => void) => void;
        destroy(): void;
        protected updateInterface(): void;
        protected saveHandler(options: Serenity.ServiceOptions<Serenity.SaveResponse>, callback: (response: Serenity.SaveResponse) => void): void;
        protected deleteHandler(options: Serenity.ServiceOptions<Serenity.DeleteResponse>, callback: (response: Serenity.DeleteResponse) => void): void;
    }
}
declare namespace ECNET {
    /**
     * This is an editor widget but it only displays a text, not edits it.
     *
     */
    class StaticTextBlock extends Serenity.Widget<StaticTextBlockOptions> implements Serenity.ISetEditValue {
        private value;
        constructor(container: JQuery, options: StaticTextBlockOptions);
        private updateElementContent;
        /**
         * By implementing ISetEditValue interface, we allow this editor to display its field value.
         * But only do this when our text content is not explicitly set in options
         */
        setEditValue(source: any, property: Serenity.PropertyItem): void;
    }
    interface StaticTextBlockOptions {
        text: string;
        isHtml: boolean;
        isLocalText: boolean;
        hideLabel: boolean;
    }
}
declare namespace ECNET.Common {
    class LanguageSelection extends Serenity.Widget<any> {
        constructor(select: JQuery, currentLanguage: string);
    }
}
declare namespace ECNET.Common {
    class SidebarSearch extends Serenity.Widget<any> {
        private menuUL;
        constructor(input: JQuery, menuUL: JQuery);
        protected updateMatchFlags(text: string): void;
    }
}
declare namespace ECNET.Common {
    class ThemeSelection extends Serenity.Widget<any> {
        constructor(select: JQuery);
        protected getCurrentTheme(): string;
    }
}
declare var jsPDF: any;
declare namespace ECNET.Common {
    interface PdfExportOptions {
        grid: Serenity.DataGrid<any, any>;
        onViewSubmit: () => boolean;
        title?: string;
        hint?: string;
        separator?: boolean;
        reportTitle?: string;
        titleTop?: number;
        titleFontSize?: number;
        fileName?: string;
        pageNumbers?: boolean;
        columnTitles?: {
            [key: string]: string;
        };
        tableOptions?: jsPDF.AutoTableOptions;
        output?: string;
        autoPrint?: boolean;
        printDateTimeHeader?: boolean;
    }
    namespace PdfExportHelper {
        function exportToPdf(options: PdfExportOptions): void;
        function createToolButton(options: PdfExportOptions): Serenity.ToolButton;
    }
}
declare var jsPDF: any;
declare namespace ECNET.Common {
    class ReportDialog extends Serenity.TemplatedDialog<ReportDialogOptions> {
        private report;
        private propertyGrid;
        constructor(options: ReportDialogOptions);
        protected getDialogButtons(): any;
        protected createPropertyGrid(): void;
        protected loadReport(reportKey: string): void;
        protected updateInterface(): void;
        executeReport(target: string, ext: string, download: boolean): void;
        getToolbarButtons(): {
            title: string;
            cssClass: string;
            onClick: () => void;
        }[];
    }
    interface ReportDialogOptions {
        reportKey: string;
    }
}
declare namespace ECNET.Common {
    interface ReportExecuteOptions {
        reportKey: string;
        download?: boolean;
        extension?: 'pdf' | 'htm' | 'html' | 'xlsx' | 'docx';
        getParams?: () => any;
        params?: {
            [key: string]: any;
        };
        target?: string;
    }
    interface ReportButtonOptions extends ReportExecuteOptions {
        title?: string;
        cssClass?: string;
        icon?: string;
    }
    namespace ReportHelper {
        function createToolButton(options: ReportButtonOptions): Serenity.ToolButton;
        function execute(options: ReportExecuteOptions): void;
    }
}
declare var jsPDF: any;
declare namespace ECNET.Common {
    class ReportPage extends Serenity.Widget<any> {
        private reportKey;
        private propertyItems;
        private propertyGrid;
        constructor(element: JQuery);
        protected updateMatchFlags(text: string): void;
        protected categoryClick(e: any): void;
        protected reportLinkClick(e: any): void;
    }
}
declare namespace ECNET.Common {
    class UserPreferenceStorage implements Serenity.SettingStorage {
        getItem(key: string): string;
        setItem(key: string, data: string): void;
    }
}
declare namespace ECNET.Office {
    class AssetTempDialog extends Serenity.EntityDialog<AssetTempRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: AssetTempForm;
    }
}
declare namespace ECNET.Office {
    class AssetTempGrid extends Serenity.EntityGrid<AssetTempRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof AssetTempDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace ECNET.Office {
    class EmailAccountsDialog extends Serenity.EntityDialog<EmailAccountsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: EmailAccountsForm;
    }
}
declare namespace ECNET.Office {
    class EmailAccountsGrid extends Serenity.EntityGrid<EmailAccountsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof EmailAccountsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace ECNET.Office {
    class QueuedEmailDialog extends Serenity.EntityDialog<QueuedEmailRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: QueuedEmailForm;
    }
}
declare namespace ECNET.Office {
    class QueuedEmailGrid extends Serenity.EntityGrid<QueuedEmailRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof QueuedEmailDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace ECNET.Office {
    class SysParametersDialog extends Serenity.EntityDialog<SysParametersRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: SysParametersForm;
    }
}
declare namespace ECNET.Office {
    class SysParametersGrid extends Serenity.EntityGrid<SysParametersRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof SysParametersDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace ECNET.Office {
    class TblApprovalCenterDialog extends Serenity.EntityDialog<TblApprovalCenterRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: TblApprovalCenterForm;
        constructor();
        loadEntity(entity: TblApprovalCenterRow): void;
        afterLoadEntity(): void;
    }
}
declare namespace ECNET.Office {
    class TblApprovalCenterGrid extends Serenity.EntityGrid<TblApprovalCenterRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TblApprovalCenterDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
        protected getButtons(): Serenity.ToolButton[];
        protected getQuickFilters(): Serenity.QuickFilter<Serenity.Widget<any>, any>[];
    }
}
declare namespace ECNET.Office {
    class TblAreaDialog extends Serenity.EntityDialog<TblAreaRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: TblAreaForm;
    }
}
declare namespace ECNET.Office {
    class TblAreaGrid extends Serenity.EntityGrid<TblAreaRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TblAreaDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace ECNET.Office {
    class TblAssetDialog extends Serenity.EntityDialog<TblAssetRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: TblAssetForm;
    }
}
declare namespace ECNET.Office {
    class TblAssetGrid extends Serenity.EntityGrid<TblAssetRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TblAssetDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace ECNET.Office {
    class TblAssetGroupDialog extends Serenity.EntityDialog<TblAssetGroupRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: TblAssetGroupForm;
    }
}
declare namespace ECNET.Office {
    class TblAssetGroupGrid extends Serenity.EntityGrid<TblAssetGroupRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TblAssetGroupDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace ECNET.Office {
    class AssetToPlaceDialog extends Serenity.EntityDialog<TblAssignAssetToPlaceRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: TblAssignAssetToPlaceForm;
        constructor();
        updateInterface(): void;
    }
}
declare namespace ECNET.Office {
    class AssetToPlaceGrid extends Serenity.EntityGrid<TblAssignAssetToPlaceRow, any> {
        protected getColumnsKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getGridCanLoad(): boolean;
        private _placeID;
        placeID: number;
        protected addButtonClick(): void;
    }
}
declare namespace ECNET.Office {
    /**
       * Our custom product editor type
       */
    class ChangingLookupTextEditor extends Serenity.LookupEditorBase<Serenity.LookupEditorOptions, Office.TblAssetRow> {
        constructor(container: JQuery, options: Serenity.LookupEditorOptions);
        protected getLookupKey(): string;
        protected getItemText(item: Office.TblAssetRow, lookup: Q.Lookup<Office.TblAssetRow>): string;
    }
}
declare namespace ECNET.Office {
    class TblAssignAssetToPlaceDialog extends Serenity.EntityDialog<TblAssignAssetToPlaceRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: TblAssignAssetToPlaceForm;
    }
}
declare namespace ECNET.Office {
    class TblAssignAssetToPlaceGrid extends Serenity.EntityGrid<TblAssignAssetToPlaceRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TblAssignAssetToPlaceDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace ECNET.Office {
    class TblAssignCampaingDialog extends Serenity.EntityDialog<TblAssignCampaingRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: TblAssignCampaingForm;
    }
}
declare namespace ECNET.Office {
    class TblAssignCampaingGrid extends Serenity.EntityGrid<TblAssignCampaingRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TblAssignCampaingDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace ECNET.Office {
    class TblBranchDialog extends Serenity.EntityDialog<TblBranchRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: TblBranchForm;
    }
}
declare namespace ECNET.Office {
    class TblBranchGrid extends Serenity.EntityGrid<TblBranchRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TblBranchDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace ECNET.Office {
    class TblCampaignDialog extends Serenity.EntityDialog<TblCampaignRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: TblCampaignForm;
    }
}
declare namespace ECNET.Office {
    class TblCampaignGrid extends Serenity.EntityGrid<TblCampaignRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TblCampaignDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace ECNET.Office {
    class TblCampaignTypeDialog extends Serenity.EntityDialog<TblCampaignTypeRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: TblCampaignTypeForm;
    }
}
declare namespace ECNET.Office {
    class TblCampaignTypeGrid extends Serenity.EntityGrid<TblCampaignTypeRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TblCampaignTypeDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace ECNET.Office {
    class TblCityDialog extends Serenity.EntityDialog<TblCityRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: TblCityForm;
    }
}
declare namespace ECNET.Office {
    class TblCityGrid extends Serenity.EntityGrid<TblCityRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TblCityDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace ECNET.Office {
    class ContractConformCanncelDialog extends Serenity.PropertyDialog<any, any> {
        private form;
        Id: number;
        constructor();
        protected getDialogTitle(): string;
        protected getDialogButtons(): Serenity.DialogButton[];
    }
}
declare namespace ECNET.Office {
    namespace ContractConformCanncelFormService {
        const baseUrl = "Office/tblContract";
        function Cancel(request: ContractCancelRequest, onSuccess?: (response: ContractCancelResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Cancel = "Office/tblContract/Cancel"
        }
    }
}
declare namespace ECNET.Office {
    class ContractAssignItemsGrid extends Serenity.EntityGrid<TblContractItemsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TblContractItemsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getGridCanLoad(): boolean;
        private _contractID;
        contractID: number;
        protected addButtonClick(): void;
    }
}
declare namespace ECNET.Office {
    /**
     * This is our category editor that will show only categories of Produce and
     * Seafood. We are subclassing LookupEditorBase which also LookupEditor
     * derives from.
     *
     * After compiling and transforming templates, this editor type will be
     * available in server side to use in our LookupFilterByMultipleForm,
     * which is a version of ProductForm that uses our custom editor.
     */
    class PlaceContractEditor extends Serenity.LookupEditorBase<Serenity.LookupEditorOptions, Office.TblPlaceOfBussinessRow> {
        myId: number;
        constructor(container: JQuery, opt: Serenity.LookupEditorOptions);
        /**
         * Normally LookupEditor requires a lookup key to determine which set of
         * lookup data to show in editor. As our editor will only show category
         * data, we lock it to category lookup key.
         */
        protected getLookupKey(): string;
        /**
         * Here we are filtering by category name but you could filter by any field.
         * Just make sure the fields you filter on has [LookupInclude] attribute on them,
         * otherwise their value will be null in client side as they are not sent back
         * from server in lookup script.
         */
        protected getItems(lookup: Q.Lookup<Office.TblPlaceOfBussinessRow>): TblPlaceOfBussinessRow[];
    }
}
declare namespace ECNET.Office {
    class TblContractDialog extends Serenity.EntityDialog<TblContractRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: TblContractForm;
        isManualEdit: boolean;
        constructor();
        loadEntity(entity: TblContractRow): void;
        protected afterLoadEntity(): void;
        protected getToolbarButtons(): Serenity.ToolButton[];
        private ValidateData;
    }
}
declare namespace ECNET.Office {
    class TblContractGrid extends Serenity.EntityGrid<TblContractRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TblContractDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
        getButtons(): Serenity.ToolButton[];
    }
}
declare namespace ECNET.Office {
    class ItemDetailEditor extends Common.GridEditorBase<TblContractItemsRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ItemDetailEditorDialog;
        protected getLocalTextPrefix(): string;
        contractId: number;
        typeContract: number;
        constructor(container: JQuery);
        protected initEntityDialog(itemType: string, dialog: Serenity.Widget<any>): void;
        protected validateEntity(row: TblContractItemsRow, id: number): boolean;
        protected getAddButtonCaption(): string;
    }
}
declare namespace ECNET.Office {
    class ItemDetailEditorDialog extends Common.GridEditorDialog<TblContractItemsRow> {
        protected getFormKey(): string;
        protected getNameProperty(): string;
        protected getLocalTextPrefix(): string;
        contractId: number;
        typeContract: number;
        protected form: TblContractItemsForm;
        constructor();
        loadEntity(entity: TblContractItemsRow): void;
    }
}
declare namespace ECNET.Office {
    class TblContractItemsDialog extends Serenity.EntityDialog<TblContractItemsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        contractId: number;
        typeContract: number;
        protected form: TblContractItemsForm;
        constructor();
        updateInterface(): void;
        loadEntity(entity: TblContractItemsRow): void;
    }
}
declare namespace ECNET.Office {
    class TblContractItemsGrid extends Serenity.EntityGrid<TblContractItemsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TblContractItemsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace ECNET.Office {
    class TblContractPaymentDialog extends Serenity.EntityDialog<TblContractPaymentRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: TblContractPaymentForm;
    }
}
declare namespace ECNET.Office {
    class TblContractPaymentGrid extends Serenity.EntityGrid<TblContractPaymentRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TblContractPaymentDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace ECNET.Office {
    class ScheduleDetailEditor extends Common.GridEditorBase<TblContractScheduleRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ScheduleDetailEditorDialog;
        protected getLocalTextPrefix(): string;
        contractId: number;
        typeContract: number;
        formDate: string;
        toDate: string;
        amount: number;
        isRent: boolean;
        monthRent: number;
        scheduleMonth: number;
        contractNo: string;
        isReadOnly: boolean;
        ListSource: Office.TblContractScheduleRow[];
        constructor(container: JQuery);
        protected initEntityDialog(itemType: string, dialog: Serenity.Widget<any>): void;
        protected getAddButtonCaption(): string;
        protected getButtons(): Serenity.ToolButton[];
        addDays(date: Date, months: number): Date;
        formatDate(date: Date): string;
    }
}
declare namespace ECNET.Office {
    class ScheduleDetailEditorDialog extends Common.GridEditorDialog<TblContractScheduleRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        contractId: number;
        typeContract: number;
        protected form: TblContractScheduleForm;
        constructor();
        loadEntity(entity: TblContractScheduleRow): void;
    }
}
declare namespace ECNET.Office {
    class TblContractScheduleDialog extends Serenity.EntityDialog<TblContractScheduleRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        contractId: number;
        protected form: TblContractScheduleForm;
        loadEntity(entity: TblContractScheduleRow): void;
    }
}
declare namespace ECNET.Office {
    class TblContractScheduleGrid extends Serenity.EntityGrid<TblContractScheduleRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TblContractScheduleDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace ECNET.Office {
    class TblContractTypeDialog extends Serenity.EntityDialog<TblContractTypeRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: TblContractTypeForm;
    }
}
declare namespace ECNET.Office {
    class TblContractTypeGrid extends Serenity.EntityGrid<TblContractTypeRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TblContractTypeDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace ECNET.Office {
    class TblDistrictDialog extends Serenity.EntityDialog<TblDistrictRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: TblDistrictForm;
    }
}
declare namespace ECNET.Office {
    class TblDistrictGrid extends Serenity.EntityGrid<TblDistrictRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TblDistrictDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace ECNET.Office {
    class TblItemsDialog extends Serenity.EntityDialog<TblItemsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: TblItemsForm;
    }
}
declare namespace ECNET.Office {
    class TblItemsGrid extends Serenity.EntityGrid<TblItemsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TblItemsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace ECNET.Office {
    class AssetToDetailGrid extends Serenity.EntityGrid<TblPlaceDetailsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TblPlaceDetailsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getGridCanLoad(): boolean;
        private _placeID;
        private _placeType;
        placeID: number;
        placeType: number;
        protected addButtonClick(): void;
    }
}
declare namespace ECNET.Office {
    /**
       * Our custom product editor type
       */
    class FilterLookupItemEditor extends Serenity.LookupEditorBase<Serenity.LookupEditorOptions, Office.TblItemsRow> {
        constructor(container: JQuery, options: Serenity.LookupEditorOptions);
        protected getLookupKey(): string;
        protected getItems(lookup: Q.Lookup<Office.TblItemsRow>): TblItemsRow[];
        protected getItemText(item: Office.TblItemsRow, lookup: Q.Lookup<Office.TblItemsRow>): string;
    }
}
declare namespace ECNET.Office {
    class PlaceDetailsEditor extends Common.GridEditorBase<TblPlaceDetailsRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TblPlaceDetailsDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
    }
}
declare namespace ECNET.Office {
    class TblPlaceDetailsDialog extends Serenity.EntityDialog<TblPlaceDetailsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: TblPlaceDetailsForm;
        isExist: boolean;
        constructor();
        updateInterface(): void;
        loadEntity(entity: TblPlaceDetailsRow): void;
    }
}
declare namespace ECNET.Office {
    class TblPlaceDetailsGrid extends Serenity.EntityGrid<TblPlaceDetailsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TblPlaceDetailsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace ECNET.Office {
    class PlaceExcelImportDialog extends Serenity.PropertyDialog<any, any> {
        private form;
        BatchNo: string;
        constructor();
        protected getDialogTitle(): string;
        protected getDialogButtons(): Serenity.DialogButton[];
    }
}
declare namespace ECNET.Office {
    namespace PlaceExcelImportService {
        const baseUrl = "Office/tblPlaceOfBussiness";
        function ExcelImport(request: ExcelImportRequest, onSuccess?: (response: ExcelImportResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            ExcelImport = "Office/tblPlaceOfBussiness/ExcelImport"
        }
    }
}
declare namespace ECNET.Office {
    class TblPlaceOfBussinessDialog extends Serenity.EntityDialog<TblPlaceOfBussinessRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: TblPlaceOfBussinessForm;
        contract: ECNET.Office.TblContractRow;
        constructor();
        updateInterface(): void;
        loadEntity(entity: TblPlaceOfBussinessRow): void;
        protected getToolbarButtons(): Serenity.ToolButton[];
        private confirmBeforeSave;
        private ValidateData;
        private ValidateType;
        private ValidateSpecial;
    }
}
declare namespace ECNET.Office {
    class TblPlaceOfBussinessGrid extends Serenity.EntityGrid<TblPlaceOfBussinessRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TblPlaceOfBussinessDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        batchNo_: string;
        constructor(container: JQuery);
        protected addButtonClick(): void;
        getButtons(): Serenity.ToolButton[];
        protected getColumns(): Slick.Column[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
        protected getQuickFilters(): Serenity.QuickFilter<Serenity.Widget<any>, any>[];
        protected onViewSubmit(): boolean;
    }
}
declare namespace ECNET.Office {
    /**
     * This is our category editor that will show only categories of Produce and
     * Seafood. We are subclassing LookupEditorBase which also LookupEditor
     * derives from.
     *
     * After compiling and transforming templates, this editor type will be
     * available in server side to use in our LookupFilterByMultipleForm,
     * which is a version of ProductForm that uses our custom editor.
     */
    class LocalTransactionEditor extends Serenity.LookupEditorBase<Serenity.LookupEditorOptions, Office.TblTransactionLocationRow> {
        myId: number;
        constructor(container: JQuery, opt: Serenity.LookupEditorOptions);
        /**
         * Normally LookupEditor requires a lookup key to determine which set of
         * lookup data to show in editor. As our editor will only show category
         * data, we lock it to category lookup key.
         */
        protected getLookupKey(): string;
        /**
         * Here we are filtering by category name but you could filter by any field.
         * Just make sure the fields you filter on has [LookupInclude] attribute on them,
         * otherwise their value will be null in client side as they are not sent back
         * from server in lookup script.
         */
        protected getItemText(item: ECNET.Office.TblTransactionLocationRow, lookup: Q.Lookup<Office.TblTransactionLocationRow>): string;
    }
}
declare namespace ECNET.Office {
    /**
     * This is our category editor that will show only categories of Produce and
     * Seafood. We are subclassing LookupEditorBase which also LookupEditor
     * derives from.
     *
     * After compiling and transforming templates, this editor type will be
     * available in server side to use in our LookupFilterByMultipleForm,
     * which is a version of ProductForm that uses our custom editor.
     */
    class PlaceProjectEditor extends Serenity.LookupEditorBase<Serenity.LookupEditorOptions, Office.TblPlaceOfBussinessRow> {
        myId: number;
        constructor(container: JQuery, opt: Serenity.LookupEditorOptions);
        /**
         * Normally LookupEditor requires a lookup key to determine which set of
         * lookup data to show in editor. As our editor will only show category
         * data, we lock it to category lookup key.
         */
        protected getLookupKey(): string;
        /**
         * Here we are filtering by category name but you could filter by any field.
         * Just make sure the fields you filter on has [LookupInclude] attribute on them,
         * otherwise their value will be null in client side as they are not sent back
         * from server in lookup script.
         */
        protected getItems(lookup: Q.Lookup<Office.TblPlaceOfBussinessRow>): TblPlaceOfBussinessRow[];
    }
}
declare namespace ECNET.Office {
    class ProjectTimelinesDialog extends Serenity.TemplatedDialog<any> {
        private areaChart;
        projectId: number;
        static initializePage(): void;
        protected onDialogOpen(): void;
        protected arrange(): void;
        protected getTemplate(): string;
    }
}
declare namespace ECNET.Office {
    class TblProjectDialog extends Serenity.EntityDialog<TblProjectRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        statusOld: number;
        editFrom: number;
        protected form: TblProjectForm;
        constructor();
        protected afterLoadEntity(): void;
        loadEntity(entity: TblProjectRow): void;
        protected getToolbarButtons(): Serenity.ToolButton[];
    }
}
declare namespace ECNET.Office {
    class TblProjectGrid extends Serenity.EntityGrid<TblProjectRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TblProjectDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        getButtons(): Serenity.ToolButton[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
        protected getColumns(): Slick.Column[];
    }
}
declare namespace ECNET.Office {
    class ProjectItemsEditor extends Common.GridEditorBase<TblProjectItemRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ProjectItemsEditorDialog;
        protected getLocalTextPrefix(): string;
        projectId: number;
        viewMode: boolean;
        editFrom: number;
        constructor(container: JQuery);
        protected initEntityDialog(itemType: string, dialog: Serenity.Widget<any>): void;
        protected getAddButtonCaption(): string;
        protected getQuickFilters(): Serenity.QuickFilter<Serenity.Widget<any>, any>[];
    }
}
declare namespace ECNET.Office {
    class ProjectItemsEditorDialog extends Common.GridEditorDialog<TblProjectItemRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        projetcId: number;
        statusOld: number;
        viewMode: boolean;
        editFrom: number;
        protected form: TblProjectItemForm;
        constructor();
        loadEntity(entity: TblContractScheduleRow): void;
        afterLoadEntity(): void;
    }
}
declare namespace ECNET.Office {
    class TblProjectItemDialog extends Serenity.EntityDialog<TblProjectItemRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        statusOld: number;
        editFrom: number;
        protected form: TblProjectItemForm;
        constructor();
        loadEntity(entity: TblProjectRow): void;
        protected afterLoadEntity(): void;
    }
}
declare namespace ECNET.Office {
    class TblProjectItemGrid extends Serenity.EntityGrid<TblProjectItemRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TblProjectItemDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        viewMode: boolean;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
        protected getQuickFilters(): Serenity.QuickFilter<Serenity.Widget<any>, any>[];
        protected getColumns(): Slick.Column[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
    }
}
declare namespace ECNET.Office {
    class TblStatusDialog extends Serenity.EntityDialog<TblStatusRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: TblStatusForm;
        constructor();
        protected afterLoadEntity(): void;
    }
}
declare namespace ECNET.Office {
    class TblStatusGrid extends Serenity.EntityGrid<TblStatusRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TblStatusDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace ECNET.Office {
    class TblStatusDetailDialog extends Serenity.EntityDialog<TblStatusDetailRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: TblStatusDetailForm;
    }
}
declare namespace ECNET.Office {
    class TblStatusDetailGrid extends Serenity.EntityGrid<TblStatusDetailRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TblStatusDetailDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace ECNET.Office {
    class TblStatusDetailLevel2Dialog extends Serenity.EntityDialog<TblStatusDetailLevel2Row, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: TblStatusDetailLevel2Form;
    }
}
declare namespace ECNET.Office {
    class TblStatusDetailLevel2Grid extends Serenity.EntityGrid<TblStatusDetailLevel2Row, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TblStatusDetailLevel2Dialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace ECNET.Office {
    class TblTransactionLocationDialog extends Serenity.EntityDialog<TblTransactionLocationRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: TblTransactionLocationForm;
    }
}
declare namespace ECNET.Office {
    class TblTransactionLocationGrid extends Serenity.EntityGrid<TblTransactionLocationRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TblTransactionLocationDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace ECNET.Office {
    class TblUnitDialog extends Serenity.EntityDialog<TblUnitRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: TblUnitForm;
    }
}
declare namespace ECNET.Office {
    class TblUnitGrid extends Serenity.EntityGrid<TblUnitRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TblUnitDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace ECNET.Office {
    class TblWardsDialog extends Serenity.EntityDialog<TblWardsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: TblWardsForm;
    }
}
declare namespace ECNET.Office {
    class TblWardsGrid extends Serenity.EntityGrid<TblWardsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TblWardsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace ECNET.Office {
    class TemplateEmailDialog extends Serenity.EntityDialog<TemplateEmailRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: TemplateEmailForm;
    }
}
declare namespace ECNET.Office {
    class TemplateEmailGrid extends Serenity.EntityGrid<TemplateEmailRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TemplateEmailDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace ECNET.Authorization {
    let userDefinition: ScriptUserDefinition;
    function hasPermission(permissionKey: string): boolean;
}
declare namespace ECNET.Membership {
    class ChangePasswordPanel extends Serenity.PropertyPanel<ChangePasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace ECNET.Membership {
    class ForgotPasswordPanel extends Serenity.PropertyPanel<ForgotPasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace ECNET.Membership {
    class ResetPasswordPanel extends Serenity.PropertyPanel<ResetPasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace ECNET.Membership {
    class SignUpPanel extends Serenity.PropertyPanel<SignUpRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
