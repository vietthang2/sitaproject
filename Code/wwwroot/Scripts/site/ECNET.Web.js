var ECNET;
(function (ECNET) {
    var Administration;
    (function (Administration) {
        var LanguageForm = /** @class */ (function (_super) {
            __extends(LanguageForm, _super);
            function LanguageForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!LanguageForm.init) {
                    LanguageForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(LanguageForm, [
                        'LanguageId', w0,
                        'LanguageName', w0
                    ]);
                }
                return _this;
            }
            LanguageForm.formKey = 'Administration.Language';
            return LanguageForm;
        }(Serenity.PrefixedContext));
        Administration.LanguageForm = LanguageForm;
    })(Administration = ECNET.Administration || (ECNET.Administration = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Administration;
    (function (Administration) {
        var LanguageRow;
        (function (LanguageRow) {
            LanguageRow.idProperty = 'Id';
            LanguageRow.nameProperty = 'LanguageName';
            LanguageRow.localTextPrefix = 'Administration.Language';
            LanguageRow.lookupKey = 'Administration.Language';
            function getLookup() {
                return Q.getLookup('Administration.Language');
            }
            LanguageRow.getLookup = getLookup;
            LanguageRow.deletePermission = 'Administration:Translation';
            LanguageRow.insertPermission = 'Administration:Translation';
            LanguageRow.readPermission = 'Administration:Translation';
            LanguageRow.updatePermission = 'Administration:Translation';
        })(LanguageRow = Administration.LanguageRow || (Administration.LanguageRow = {}));
    })(Administration = ECNET.Administration || (ECNET.Administration = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Administration;
    (function (Administration) {
        var LanguageService;
        (function (LanguageService) {
            LanguageService.baseUrl = 'Administration/Language';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                LanguageService[x] = function (r, s, o) {
                    return Q.serviceRequest(LanguageService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(LanguageService = Administration.LanguageService || (Administration.LanguageService = {}));
    })(Administration = ECNET.Administration || (ECNET.Administration = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Administration;
    (function (Administration) {
    })(Administration = ECNET.Administration || (ECNET.Administration = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Administration;
    (function (Administration) {
        var RoleForm = /** @class */ (function (_super) {
            __extends(RoleForm, _super);
            function RoleForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!RoleForm.init) {
                    RoleForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.EnumEditor;
                    Q.initFormType(RoleForm, [
                        'RoleName', w0,
                        'LevelApproval', w1
                    ]);
                }
                return _this;
            }
            RoleForm.formKey = 'Administration.Role';
            return RoleForm;
        }(Serenity.PrefixedContext));
        Administration.RoleForm = RoleForm;
    })(Administration = ECNET.Administration || (ECNET.Administration = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Administration;
    (function (Administration) {
        var RolePermissionRow;
        (function (RolePermissionRow) {
            RolePermissionRow.idProperty = 'RolePermissionId';
            RolePermissionRow.nameProperty = 'PermissionKey';
            RolePermissionRow.localTextPrefix = 'Administration.RolePermission';
            RolePermissionRow.deletePermission = 'Administration:Security';
            RolePermissionRow.insertPermission = 'Administration:Security';
            RolePermissionRow.readPermission = 'Administration:Security';
            RolePermissionRow.updatePermission = 'Administration:Security';
        })(RolePermissionRow = Administration.RolePermissionRow || (Administration.RolePermissionRow = {}));
    })(Administration = ECNET.Administration || (ECNET.Administration = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Administration;
    (function (Administration) {
        var RolePermissionService;
        (function (RolePermissionService) {
            RolePermissionService.baseUrl = 'Administration/RolePermission';
            [
                'Update',
                'List'
            ].forEach(function (x) {
                RolePermissionService[x] = function (r, s, o) {
                    return Q.serviceRequest(RolePermissionService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(RolePermissionService = Administration.RolePermissionService || (Administration.RolePermissionService = {}));
    })(Administration = ECNET.Administration || (ECNET.Administration = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Administration;
    (function (Administration) {
        var RoleRow;
        (function (RoleRow) {
            RoleRow.idProperty = 'RoleId';
            RoleRow.nameProperty = 'RoleName';
            RoleRow.localTextPrefix = 'Administration.Role';
            RoleRow.lookupKey = 'Administration.Role';
            function getLookup() {
                return Q.getLookup('Administration.Role');
            }
            RoleRow.getLookup = getLookup;
            RoleRow.deletePermission = 'Administration:Security';
            RoleRow.insertPermission = 'Administration:Security';
            RoleRow.readPermission = 'Administration:Security';
            RoleRow.updatePermission = 'Administration:Security';
        })(RoleRow = Administration.RoleRow || (Administration.RoleRow = {}));
    })(Administration = ECNET.Administration || (ECNET.Administration = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Administration;
    (function (Administration) {
        var RoleService;
        (function (RoleService) {
            RoleService.baseUrl = 'Administration/Role';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                RoleService[x] = function (r, s, o) {
                    return Q.serviceRequest(RoleService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(RoleService = Administration.RoleService || (Administration.RoleService = {}));
    })(Administration = ECNET.Administration || (ECNET.Administration = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Administration;
    (function (Administration) {
        var SergenService;
        (function (SergenService) {
            SergenService.baseUrl = 'Administration/Sergen';
            [
                'ListConnections',
                'ListTables',
                'Generate'
            ].forEach(function (x) {
                SergenService[x] = function (r, s, o) {
                    return Q.serviceRequest(SergenService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(SergenService = Administration.SergenService || (Administration.SergenService = {}));
    })(Administration = ECNET.Administration || (ECNET.Administration = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Administration;
    (function (Administration) {
        var TranslationService;
        (function (TranslationService) {
            TranslationService.baseUrl = 'Administration/Translation';
            [
                'List',
                'Update'
            ].forEach(function (x) {
                TranslationService[x] = function (r, s, o) {
                    return Q.serviceRequest(TranslationService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TranslationService = Administration.TranslationService || (Administration.TranslationService = {}));
    })(Administration = ECNET.Administration || (ECNET.Administration = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Administration;
    (function (Administration) {
        var UserForm = /** @class */ (function (_super) {
            __extends(UserForm, _super);
            function UserForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!UserForm.init) {
                    UserForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.EmailEditor;
                    var w2 = s.ImageUploadEditor;
                    var w3 = s.PasswordEditor;
                    Q.initFormType(UserForm, [
                        'Username', w0,
                        'DisplayName', w0,
                        'Email', w1,
                        'UserImage', w2,
                        'Password', w3,
                        'PasswordConfirm', w3,
                        'Source', w0
                    ]);
                }
                return _this;
            }
            UserForm.formKey = 'Administration.User';
            return UserForm;
        }(Serenity.PrefixedContext));
        Administration.UserForm = UserForm;
    })(Administration = ECNET.Administration || (ECNET.Administration = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Administration;
    (function (Administration) {
        var UserPermissionRow;
        (function (UserPermissionRow) {
            UserPermissionRow.idProperty = 'UserPermissionId';
            UserPermissionRow.nameProperty = 'PermissionKey';
            UserPermissionRow.localTextPrefix = 'Administration.UserPermission';
            UserPermissionRow.deletePermission = 'Administration:Security';
            UserPermissionRow.insertPermission = 'Administration:Security';
            UserPermissionRow.readPermission = 'Administration:Security';
            UserPermissionRow.updatePermission = 'Administration:Security';
        })(UserPermissionRow = Administration.UserPermissionRow || (Administration.UserPermissionRow = {}));
    })(Administration = ECNET.Administration || (ECNET.Administration = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Administration;
    (function (Administration) {
        var UserPermissionService;
        (function (UserPermissionService) {
            UserPermissionService.baseUrl = 'Administration/UserPermission';
            [
                'Update',
                'List',
                'ListRolePermissions',
                'ListPermissionKeys'
            ].forEach(function (x) {
                UserPermissionService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserPermissionService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserPermissionService = Administration.UserPermissionService || (Administration.UserPermissionService = {}));
    })(Administration = ECNET.Administration || (ECNET.Administration = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Administration;
    (function (Administration) {
        var UserRoleRow;
        (function (UserRoleRow) {
            UserRoleRow.idProperty = 'UserRoleId';
            UserRoleRow.localTextPrefix = 'Administration.UserRole';
            UserRoleRow.deletePermission = 'Administration:Security';
            UserRoleRow.insertPermission = 'Administration:Security';
            UserRoleRow.readPermission = 'Administration:Security';
            UserRoleRow.updatePermission = 'Administration:Security';
        })(UserRoleRow = Administration.UserRoleRow || (Administration.UserRoleRow = {}));
    })(Administration = ECNET.Administration || (ECNET.Administration = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Administration;
    (function (Administration) {
        var UserRoleService;
        (function (UserRoleService) {
            UserRoleService.baseUrl = 'Administration/UserRole';
            [
                'Update',
                'List'
            ].forEach(function (x) {
                UserRoleService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserRoleService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserRoleService = Administration.UserRoleService || (Administration.UserRoleService = {}));
    })(Administration = ECNET.Administration || (ECNET.Administration = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Administration;
    (function (Administration) {
        var UserRow;
        (function (UserRow) {
            UserRow.idProperty = 'UserId';
            UserRow.isActiveProperty = 'IsActive';
            UserRow.nameProperty = 'Username';
            UserRow.localTextPrefix = 'Administration.User';
            UserRow.lookupKey = 'Administration.User';
            function getLookup() {
                return Q.getLookup('Administration.User');
            }
            UserRow.getLookup = getLookup;
            UserRow.deletePermission = 'Administration:Security';
            UserRow.insertPermission = 'Administration:Security';
            UserRow.readPermission = 'Administration:Security';
            UserRow.updatePermission = 'Administration:Security';
        })(UserRow = Administration.UserRow || (Administration.UserRow = {}));
    })(Administration = ECNET.Administration || (ECNET.Administration = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Administration;
    (function (Administration) {
        var UserService;
        (function (UserService) {
            UserService.baseUrl = 'Administration/User';
            [
                'Create',
                'Update',
                'Delete',
                'Undelete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                UserService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserService = Administration.UserService || (Administration.UserService = {}));
    })(Administration = ECNET.Administration || (ECNET.Administration = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Common;
    (function (Common) {
        var UserPreferenceRow;
        (function (UserPreferenceRow) {
            UserPreferenceRow.idProperty = 'UserPreferenceId';
            UserPreferenceRow.nameProperty = 'Name';
            UserPreferenceRow.localTextPrefix = 'Common.UserPreference';
            UserPreferenceRow.deletePermission = '';
            UserPreferenceRow.insertPermission = '';
            UserPreferenceRow.readPermission = '';
            UserPreferenceRow.updatePermission = '';
        })(UserPreferenceRow = Common.UserPreferenceRow || (Common.UserPreferenceRow = {}));
    })(Common = ECNET.Common || (ECNET.Common = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Common;
    (function (Common) {
        var UserPreferenceService;
        (function (UserPreferenceService) {
            UserPreferenceService.baseUrl = 'Common/UserPreference';
            [
                'Update',
                'Retrieve'
            ].forEach(function (x) {
                UserPreferenceService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserPreferenceService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserPreferenceService = Common.UserPreferenceService || (Common.UserPreferenceService = {}));
    })(Common = ECNET.Common || (ECNET.Common = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Membership;
    (function (Membership) {
        var ChangePasswordForm = /** @class */ (function (_super) {
            __extends(ChangePasswordForm, _super);
            function ChangePasswordForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ChangePasswordForm.init) {
                    ChangePasswordForm.init = true;
                    var s = Serenity;
                    var w0 = s.PasswordEditor;
                    Q.initFormType(ChangePasswordForm, [
                        'OldPassword', w0,
                        'NewPassword', w0,
                        'ConfirmPassword', w0
                    ]);
                }
                return _this;
            }
            ChangePasswordForm.formKey = 'Membership.ChangePassword';
            return ChangePasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ChangePasswordForm = ChangePasswordForm;
    })(Membership = ECNET.Membership || (ECNET.Membership = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Membership;
    (function (Membership) {
        var ForgotPasswordForm = /** @class */ (function (_super) {
            __extends(ForgotPasswordForm, _super);
            function ForgotPasswordForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ForgotPasswordForm.init) {
                    ForgotPasswordForm.init = true;
                    var s = Serenity;
                    var w0 = s.EmailEditor;
                    Q.initFormType(ForgotPasswordForm, [
                        'Email', w0
                    ]);
                }
                return _this;
            }
            ForgotPasswordForm.formKey = 'Membership.ForgotPassword';
            return ForgotPasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ForgotPasswordForm = ForgotPasswordForm;
    })(Membership = ECNET.Membership || (ECNET.Membership = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Membership;
    (function (Membership) {
        var LoginForm = /** @class */ (function (_super) {
            __extends(LoginForm, _super);
            function LoginForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!LoginForm.init) {
                    LoginForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.PasswordEditor;
                    Q.initFormType(LoginForm, [
                        'Username', w0,
                        'Password', w1
                    ]);
                }
                return _this;
            }
            LoginForm.formKey = 'Membership.Login';
            return LoginForm;
        }(Serenity.PrefixedContext));
        Membership.LoginForm = LoginForm;
    })(Membership = ECNET.Membership || (ECNET.Membership = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Membership;
    (function (Membership) {
        var ResetPasswordForm = /** @class */ (function (_super) {
            __extends(ResetPasswordForm, _super);
            function ResetPasswordForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ResetPasswordForm.init) {
                    ResetPasswordForm.init = true;
                    var s = Serenity;
                    var w0 = s.PasswordEditor;
                    Q.initFormType(ResetPasswordForm, [
                        'NewPassword', w0,
                        'ConfirmPassword', w0
                    ]);
                }
                return _this;
            }
            ResetPasswordForm.formKey = 'Membership.ResetPassword';
            return ResetPasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ResetPasswordForm = ResetPasswordForm;
    })(Membership = ECNET.Membership || (ECNET.Membership = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Membership;
    (function (Membership) {
        var SignUpForm = /** @class */ (function (_super) {
            __extends(SignUpForm, _super);
            function SignUpForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!SignUpForm.init) {
                    SignUpForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.EmailEditor;
                    var w2 = s.PasswordEditor;
                    Q.initFormType(SignUpForm, [
                        'DisplayName', w0,
                        'Email', w1,
                        'ConfirmEmail', w1,
                        'Password', w2,
                        'ConfirmPassword', w2
                    ]);
                }
                return _this;
            }
            SignUpForm.formKey = 'Membership.SignUp';
            return SignUpForm;
        }(Serenity.PrefixedContext));
        Membership.SignUpForm = SignUpForm;
    })(Membership = ECNET.Membership || (ECNET.Membership = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var AssetTempForm = /** @class */ (function (_super) {
            __extends(AssetTempForm, _super);
            function AssetTempForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!AssetTempForm.init) {
                    AssetTempForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.BooleanEditor;
                    var w3 = s.DateEditor;
                    Q.initFormType(AssetTempForm, [
                        'PId', w0,
                        'Name', w1,
                        'Code', w1,
                        'Type', w0,
                        'HasContract', w2,
                        'HasProcessed', w2,
                        'CreatedBy', w1,
                        'CreatedDate', w3,
                        'UpdatedBy', w1,
                        'UpdatedDate', w3
                    ]);
                }
                return _this;
            }
            AssetTempForm.formKey = 'Office.AssetTemp';
            return AssetTempForm;
        }(Serenity.PrefixedContext));
        Office.AssetTempForm = AssetTempForm;
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var AssetTempRow;
        (function (AssetTempRow) {
            AssetTempRow.idProperty = 'Id';
            AssetTempRow.nameProperty = 'Name';
            AssetTempRow.localTextPrefix = 'Office.AssetTemp';
            AssetTempRow.deletePermission = 'Administration:General';
            AssetTempRow.insertPermission = 'Administration:General';
            AssetTempRow.readPermission = 'Administration:General';
            AssetTempRow.updatePermission = 'Administration:General';
        })(AssetTempRow = Office.AssetTempRow || (Office.AssetTempRow = {}));
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var AssetTempService;
        (function (AssetTempService) {
            AssetTempService.baseUrl = 'Office/AssetTemp';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                AssetTempService[x] = function (r, s, o) {
                    return Q.serviceRequest(AssetTempService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(AssetTempService = Office.AssetTempService || (Office.AssetTempService = {}));
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var ContractConformCanncelForm = /** @class */ (function (_super) {
            __extends(ContractConformCanncelForm, _super);
            function ContractConformCanncelForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ContractConformCanncelForm.init) {
                    ContractConformCanncelForm.init = true;
                    var s = Serenity;
                    var w0 = s.TextAreaEditor;
                    var w1 = s.StringEditor;
                    Q.initFormType(ContractConformCanncelForm, [
                        'Reason', w0,
                        'Id', w1
                    ]);
                }
                return _this;
            }
            ContractConformCanncelForm.formKey = 'Office.ContractConformCanncel';
            return ContractConformCanncelForm;
        }(Serenity.PrefixedContext));
        Office.ContractConformCanncelForm = ContractConformCanncelForm;
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var EmailAccountsForm = /** @class */ (function (_super) {
            __extends(EmailAccountsForm, _super);
            function EmailAccountsForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!EmailAccountsForm.init) {
                    EmailAccountsForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.IntegerEditor;
                    var w2 = s.BooleanEditor;
                    Q.initFormType(EmailAccountsForm, [
                        'Email', w0,
                        'DisplayName', w0,
                        'Username', w0,
                        'Password', w0,
                        'Host', w0,
                        'Port', w1,
                        'EnableSsl', w2,
                        'UseDefaultCredentials', w2,
                        'IsActive', w2
                    ]);
                }
                return _this;
            }
            EmailAccountsForm.formKey = 'Office.EmailAccounts';
            return EmailAccountsForm;
        }(Serenity.PrefixedContext));
        Office.EmailAccountsForm = EmailAccountsForm;
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var EmailAccountsRow;
        (function (EmailAccountsRow) {
            EmailAccountsRow.idProperty = 'Id';
            EmailAccountsRow.nameProperty = 'Email';
            EmailAccountsRow.localTextPrefix = 'Office.EmailAccounts';
            EmailAccountsRow.lookupKey = 'dbo.EmailAccounts';
            function getLookup() {
                return Q.getLookup('dbo.EmailAccounts');
            }
            EmailAccountsRow.getLookup = getLookup;
            EmailAccountsRow.deletePermission = 'Administration:General';
            EmailAccountsRow.insertPermission = 'Administration:General';
            EmailAccountsRow.readPermission = 'Administration:General';
            EmailAccountsRow.updatePermission = 'Administration:General';
        })(EmailAccountsRow = Office.EmailAccountsRow || (Office.EmailAccountsRow = {}));
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var EmailAccountsService;
        (function (EmailAccountsService) {
            EmailAccountsService.baseUrl = 'Office/EmailAccounts';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                EmailAccountsService[x] = function (r, s, o) {
                    return Q.serviceRequest(EmailAccountsService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(EmailAccountsService = Office.EmailAccountsService || (Office.EmailAccountsService = {}));
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var PlaceExcelImportForm = /** @class */ (function (_super) {
            __extends(PlaceExcelImportForm, _super);
            function PlaceExcelImportForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!PlaceExcelImportForm.init) {
                    PlaceExcelImportForm.init = true;
                    var s = Serenity;
                    var w0 = s.ImageUploadEditor;
                    Q.initFormType(PlaceExcelImportForm, [
                        'FileName', w0
                    ]);
                }
                return _this;
            }
            PlaceExcelImportForm.formKey = 'Office.PlaceExcelImport';
            return PlaceExcelImportForm;
        }(Serenity.PrefixedContext));
        Office.PlaceExcelImportForm = PlaceExcelImportForm;
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var QueuedEmailForm = /** @class */ (function (_super) {
            __extends(QueuedEmailForm, _super);
            function QueuedEmailForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!QueuedEmailForm.init) {
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
                return _this;
            }
            QueuedEmailForm.formKey = 'Office.QueuedEmail';
            return QueuedEmailForm;
        }(Serenity.PrefixedContext));
        Office.QueuedEmailForm = QueuedEmailForm;
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var QueuedEmailRow;
        (function (QueuedEmailRow) {
            QueuedEmailRow.idProperty = 'Id';
            QueuedEmailRow.nameProperty = 'From';
            QueuedEmailRow.localTextPrefix = 'Office.QueuedEmail';
            QueuedEmailRow.deletePermission = 'Administration:General';
            QueuedEmailRow.insertPermission = 'Administration:General';
            QueuedEmailRow.readPermission = 'Administration:General';
            QueuedEmailRow.updatePermission = 'Administration:General';
        })(QueuedEmailRow = Office.QueuedEmailRow || (Office.QueuedEmailRow = {}));
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var QueuedEmailService;
        (function (QueuedEmailService) {
            QueuedEmailService.baseUrl = 'Office/QueuedEmail';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                QueuedEmailService[x] = function (r, s, o) {
                    return Q.serviceRequest(QueuedEmailService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(QueuedEmailService = Office.QueuedEmailService || (Office.QueuedEmailService = {}));
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var SysParametersForm = /** @class */ (function (_super) {
            __extends(SysParametersForm, _super);
            function SysParametersForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!SysParametersForm.init) {
                    SysParametersForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(SysParametersForm, [
                        'Code', w0,
                        'Name', w0,
                        'Value', w0,
                        'Unit', w0
                    ]);
                }
                return _this;
            }
            SysParametersForm.formKey = 'Office.SysParameters';
            return SysParametersForm;
        }(Serenity.PrefixedContext));
        Office.SysParametersForm = SysParametersForm;
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var SysParametersRow;
        (function (SysParametersRow) {
            SysParametersRow.idProperty = 'Id';
            SysParametersRow.nameProperty = 'Code';
            SysParametersRow.localTextPrefix = 'Office.SysParameters';
            SysParametersRow.lookupKey = 'dbo.SysParameters';
            function getLookup() {
                return Q.getLookup('dbo.SysParameters');
            }
            SysParametersRow.getLookup = getLookup;
            SysParametersRow.deletePermission = 'Administration:General';
            SysParametersRow.insertPermission = 'Administration:General';
            SysParametersRow.readPermission = 'Administration:General';
            SysParametersRow.updatePermission = 'Administration:General';
        })(SysParametersRow = Office.SysParametersRow || (Office.SysParametersRow = {}));
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var SysParametersService;
        (function (SysParametersService) {
            SysParametersService.baseUrl = 'Office/SysParameters';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                SysParametersService[x] = function (r, s, o) {
                    return Q.serviceRequest(SysParametersService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(SysParametersService = Office.SysParametersService || (Office.SysParametersService = {}));
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var TblApprovalCenterForm = /** @class */ (function (_super) {
            __extends(TblApprovalCenterForm, _super);
            function TblApprovalCenterForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!TblApprovalCenterForm.init) {
                    TblApprovalCenterForm.init = true;
                    var s = Serenity;
                    var w0 = s.EnumEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.IntegerEditor;
                    var w3 = s.TextAreaEditor;
                    var w4 = s.DateEditor;
                    var w5 = s.BooleanEditor;
                    Q.initFormType(TblApprovalCenterForm, [
                        'Type', w0,
                        'Status', w0,
                        'Code', w1,
                        'ClientId', w2,
                        'ReasonReject', w3,
                        'Date', w4,
                        'ApproveBy', w1,
                        'ApprovedDate', w4,
                        'IsSendMail', w5,
                        'IsSms', w5,
                        'CreateBy', w1
                    ]);
                }
                return _this;
            }
            TblApprovalCenterForm.formKey = 'Office.TblApprovalCenter';
            return TblApprovalCenterForm;
        }(Serenity.PrefixedContext));
        Office.TblApprovalCenterForm = TblApprovalCenterForm;
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var TblApprovalCenterRow;
        (function (TblApprovalCenterRow) {
            TblApprovalCenterRow.idProperty = 'Id';
            TblApprovalCenterRow.nameProperty = 'Code';
            TblApprovalCenterRow.localTextPrefix = 'Office.TblApprovalCenter';
            TblApprovalCenterRow.lookupKey = 'dbo.tblApprovalCenter';
            function getLookup() {
                return Q.getLookup('dbo.tblApprovalCenter');
            }
            TblApprovalCenterRow.getLookup = getLookup;
            TblApprovalCenterRow.deletePermission = 'Ecnet:dbo.tblApprovalCenter:Delete';
            TblApprovalCenterRow.insertPermission = 'Ecnet:dbo.tblApprovalCenter:Modify';
            TblApprovalCenterRow.readPermission = 'Ecnet:dbo.tblApprovalCenter:View';
            TblApprovalCenterRow.updatePermission = 'Ecnet:dbo.tblApprovalCenter:Modify';
        })(TblApprovalCenterRow = Office.TblApprovalCenterRow || (Office.TblApprovalCenterRow = {}));
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var TblApprovalCenterService;
        (function (TblApprovalCenterService) {
            TblApprovalCenterService.baseUrl = 'Office/TblApprovalCenter';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                TblApprovalCenterService[x] = function (r, s, o) {
                    return Q.serviceRequest(TblApprovalCenterService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TblApprovalCenterService = Office.TblApprovalCenterService || (Office.TblApprovalCenterService = {}));
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var TblAreaForm = /** @class */ (function (_super) {
            __extends(TblAreaForm, _super);
            function TblAreaForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!TblAreaForm.init) {
                    TblAreaForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.StringEditor;
                    Q.initFormType(TblAreaForm, [
                        'BranchCode', w0,
                        'Code', w1,
                        'Name', w1
                    ]);
                }
                return _this;
            }
            TblAreaForm.formKey = 'Office.TblArea';
            return TblAreaForm;
        }(Serenity.PrefixedContext));
        Office.TblAreaForm = TblAreaForm;
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var TblAreaRow;
        (function (TblAreaRow) {
            TblAreaRow.idProperty = 'Id';
            TblAreaRow.nameProperty = 'Name';
            TblAreaRow.localTextPrefix = 'Office.TblArea';
            TblAreaRow.lookupKey = 'dbo.TblAreaRow';
            function getLookup() {
                return Q.getLookup('dbo.TblAreaRow');
            }
            TblAreaRow.getLookup = getLookup;
            TblAreaRow.deletePermission = 'Ecnet:dbo.tblArea:Delete';
            TblAreaRow.insertPermission = 'Ecnet:dbo.tblArea:Modify';
            TblAreaRow.readPermission = 'Ecnet:dbo.tblArea:View';
            TblAreaRow.updatePermission = 'Ecnet:dbo.tblArea:Modify';
        })(TblAreaRow = Office.TblAreaRow || (Office.TblAreaRow = {}));
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var TblAreaService;
        (function (TblAreaService) {
            TblAreaService.baseUrl = 'Office/TblArea';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                TblAreaService[x] = function (r, s, o) {
                    return Q.serviceRequest(TblAreaService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TblAreaService = Office.TblAreaService || (Office.TblAreaService = {}));
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var TblAssetForm = /** @class */ (function (_super) {
            __extends(TblAssetForm, _super);
            function TblAssetForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!TblAssetForm.init) {
                    TblAssetForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.LookupEditor;
                    Q.initFormType(TblAssetForm, [
                        'Name', w0,
                        'Code', w0,
                        'GroupId', w1
                    ]);
                }
                return _this;
            }
            TblAssetForm.formKey = 'Office.TblAsset';
            return TblAssetForm;
        }(Serenity.PrefixedContext));
        Office.TblAssetForm = TblAssetForm;
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var TblAssetGroupForm = /** @class */ (function (_super) {
            __extends(TblAssetGroupForm, _super);
            function TblAssetGroupForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!TblAssetGroupForm.init) {
                    TblAssetGroupForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(TblAssetGroupForm, [
                        'Name', w0,
                        'Description', w0
                    ]);
                }
                return _this;
            }
            TblAssetGroupForm.formKey = 'Office.TblAssetGroup';
            return TblAssetGroupForm;
        }(Serenity.PrefixedContext));
        Office.TblAssetGroupForm = TblAssetGroupForm;
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var TblAssetGroupRow;
        (function (TblAssetGroupRow) {
            TblAssetGroupRow.idProperty = 'Id';
            TblAssetGroupRow.nameProperty = 'Name';
            TblAssetGroupRow.localTextPrefix = 'Office.TblAssetGroup';
            TblAssetGroupRow.lookupKey = 'dbo.tblAssetGroup';
            function getLookup() {
                return Q.getLookup('dbo.tblAssetGroup');
            }
            TblAssetGroupRow.getLookup = getLookup;
            TblAssetGroupRow.deletePermission = 'Administration:General';
            TblAssetGroupRow.insertPermission = 'Administration:General';
            TblAssetGroupRow.readPermission = 'Administration:General';
            TblAssetGroupRow.updatePermission = 'Administration:General';
        })(TblAssetGroupRow = Office.TblAssetGroupRow || (Office.TblAssetGroupRow = {}));
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var TblAssetGroupService;
        (function (TblAssetGroupService) {
            TblAssetGroupService.baseUrl = 'Office/TblAssetGroup';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                TblAssetGroupService[x] = function (r, s, o) {
                    return Q.serviceRequest(TblAssetGroupService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TblAssetGroupService = Office.TblAssetGroupService || (Office.TblAssetGroupService = {}));
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var TblAssetRow;
        (function (TblAssetRow) {
            TblAssetRow.idProperty = 'Id';
            TblAssetRow.nameProperty = 'Name';
            TblAssetRow.localTextPrefix = 'Office.TblAsset';
            TblAssetRow.lookupKey = 'dbo.tblAsset';
            function getLookup() {
                return Q.getLookup('dbo.tblAsset');
            }
            TblAssetRow.getLookup = getLookup;
            TblAssetRow.deletePermission = 'Administration:General';
            TblAssetRow.insertPermission = 'Administration:General';
            TblAssetRow.readPermission = 'Administration:General';
            TblAssetRow.updatePermission = 'Administration:General';
        })(TblAssetRow = Office.TblAssetRow || (Office.TblAssetRow = {}));
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var TblAssetService;
        (function (TblAssetService) {
            TblAssetService.baseUrl = 'Office/TblAsset';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                TblAssetService[x] = function (r, s, o) {
                    return Q.serviceRequest(TblAssetService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TblAssetService = Office.TblAssetService || (Office.TblAssetService = {}));
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var TblAssignAssetToPlaceForm = /** @class */ (function (_super) {
            __extends(TblAssignAssetToPlaceForm, _super);
            function TblAssignAssetToPlaceForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!TblAssignAssetToPlaceForm.init) {
                    TblAssignAssetToPlaceForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = Office.ChangingLookupTextEditor;
                    var w2 = s.DateEditor;
                    Q.initFormType(TblAssignAssetToPlaceForm, [
                        'PlaceId', w0,
                        'AssetId', w1,
                        'FromDate', w2,
                        'ToDate', w2
                    ]);
                }
                return _this;
            }
            TblAssignAssetToPlaceForm.formKey = 'ECNET.Office.ChangingLookupTextEditort';
            return TblAssignAssetToPlaceForm;
        }(Serenity.PrefixedContext));
        Office.TblAssignAssetToPlaceForm = TblAssignAssetToPlaceForm;
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var TblAssignAssetToPlaceRow;
        (function (TblAssignAssetToPlaceRow) {
            TblAssignAssetToPlaceRow.idProperty = 'Id';
            TblAssignAssetToPlaceRow.nameProperty = 'CreatedBy';
            TblAssignAssetToPlaceRow.localTextPrefix = 'Office.TblAssignAssetToPlace';
            TblAssignAssetToPlaceRow.deletePermission = 'Administration:General';
            TblAssignAssetToPlaceRow.insertPermission = 'Administration:General';
            TblAssignAssetToPlaceRow.readPermission = 'Administration:General';
            TblAssignAssetToPlaceRow.updatePermission = 'Administration:General';
        })(TblAssignAssetToPlaceRow = Office.TblAssignAssetToPlaceRow || (Office.TblAssignAssetToPlaceRow = {}));
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var TblAssignAssetToPlaceService;
        (function (TblAssignAssetToPlaceService) {
            TblAssignAssetToPlaceService.baseUrl = 'Office/TblAssignAssetToPlace';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                TblAssignAssetToPlaceService[x] = function (r, s, o) {
                    return Q.serviceRequest(TblAssignAssetToPlaceService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TblAssignAssetToPlaceService = Office.TblAssignAssetToPlaceService || (Office.TblAssignAssetToPlaceService = {}));
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var TblAssignCampaingForm = /** @class */ (function (_super) {
            __extends(TblAssignCampaingForm, _super);
            function TblAssignCampaingForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            TblAssignCampaingForm.formKey = 'Office.TblAssignCampaing';
            return TblAssignCampaingForm;
        }(Serenity.PrefixedContext));
        Office.TblAssignCampaingForm = TblAssignCampaingForm;
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var TblAssignCampaingRow;
        (function (TblAssignCampaingRow) {
            TblAssignCampaingRow.idProperty = 'Id';
            TblAssignCampaingRow.localTextPrefix = 'Office.TblAssignCampaing';
            TblAssignCampaingRow.deletePermission = 'Administration:General';
            TblAssignCampaingRow.insertPermission = 'Administration:General';
            TblAssignCampaingRow.readPermission = 'Administration:General';
            TblAssignCampaingRow.updatePermission = 'Administration:General';
        })(TblAssignCampaingRow = Office.TblAssignCampaingRow || (Office.TblAssignCampaingRow = {}));
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var TblAssignCampaingService;
        (function (TblAssignCampaingService) {
            TblAssignCampaingService.baseUrl = 'Office/TblAssignCampaing';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                TblAssignCampaingService[x] = function (r, s, o) {
                    return Q.serviceRequest(TblAssignCampaingService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TblAssignCampaingService = Office.TblAssignCampaingService || (Office.TblAssignCampaingService = {}));
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var TblBranchForm = /** @class */ (function (_super) {
            __extends(TblBranchForm, _super);
            function TblBranchForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!TblBranchForm.init) {
                    TblBranchForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(TblBranchForm, [
                        'Code', w0,
                        'Name', w0
                    ]);
                }
                return _this;
            }
            TblBranchForm.formKey = 'Office.TblBranch';
            return TblBranchForm;
        }(Serenity.PrefixedContext));
        Office.TblBranchForm = TblBranchForm;
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var TblBranchRow;
        (function (TblBranchRow) {
            TblBranchRow.idProperty = 'Id';
            TblBranchRow.nameProperty = 'Name';
            TblBranchRow.localTextPrefix = 'Office.TblBranch';
            TblBranchRow.lookupKey = '[dbo].[tblBranch]';
            function getLookup() {
                return Q.getLookup('[dbo].[tblBranch]');
            }
            TblBranchRow.getLookup = getLookup;
            TblBranchRow.deletePermission = 'Ecnet:dbo.tblBranch:Delete';
            TblBranchRow.insertPermission = 'Ecnet:dbo.tblBranch:Modify';
            TblBranchRow.readPermission = 'Ecnet:dbo.tblBranch:View';
            TblBranchRow.updatePermission = 'Ecnet:dbo.tblBranch:Modify';
        })(TblBranchRow = Office.TblBranchRow || (Office.TblBranchRow = {}));
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var TblBranchService;
        (function (TblBranchService) {
            TblBranchService.baseUrl = 'Office/TblBranch';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                TblBranchService[x] = function (r, s, o) {
                    return Q.serviceRequest(TblBranchService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TblBranchService = Office.TblBranchService || (Office.TblBranchService = {}));
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var TblCampaignForm = /** @class */ (function (_super) {
            __extends(TblCampaignForm, _super);
            function TblCampaignForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            TblCampaignForm.formKey = 'Office.TblCampaign';
            return TblCampaignForm;
        }(Serenity.PrefixedContext));
        Office.TblCampaignForm = TblCampaignForm;
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var TblCampaignRow;
        (function (TblCampaignRow) {
            TblCampaignRow.idProperty = 'Id';
            TblCampaignRow.localTextPrefix = 'Office.TblCampaign';
            TblCampaignRow.deletePermission = 'Administration:General';
            TblCampaignRow.insertPermission = 'Administration:General';
            TblCampaignRow.readPermission = 'Administration:General';
            TblCampaignRow.updatePermission = 'Administration:General';
        })(TblCampaignRow = Office.TblCampaignRow || (Office.TblCampaignRow = {}));
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var TblCampaignService;
        (function (TblCampaignService) {
            TblCampaignService.baseUrl = 'Office/TblCampaign';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                TblCampaignService[x] = function (r, s, o) {
                    return Q.serviceRequest(TblCampaignService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TblCampaignService = Office.TblCampaignService || (Office.TblCampaignService = {}));
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var TblCampaignTypeForm = /** @class */ (function (_super) {
            __extends(TblCampaignTypeForm, _super);
            function TblCampaignTypeForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            TblCampaignTypeForm.formKey = 'Office.TblCampaignType';
            return TblCampaignTypeForm;
        }(Serenity.PrefixedContext));
        Office.TblCampaignTypeForm = TblCampaignTypeForm;
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var TblCampaignTypeRow;
        (function (TblCampaignTypeRow) {
            TblCampaignTypeRow.idProperty = 'Id';
            TblCampaignTypeRow.localTextPrefix = 'Office.TblCampaignType';
            TblCampaignTypeRow.deletePermission = 'Administration:General';
            TblCampaignTypeRow.insertPermission = 'Administration:General';
            TblCampaignTypeRow.readPermission = 'Administration:General';
            TblCampaignTypeRow.updatePermission = 'Administration:General';
        })(TblCampaignTypeRow = Office.TblCampaignTypeRow || (Office.TblCampaignTypeRow = {}));
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var TblCampaignTypeService;
        (function (TblCampaignTypeService) {
            TblCampaignTypeService.baseUrl = 'Office/TblCampaignType';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                TblCampaignTypeService[x] = function (r, s, o) {
                    return Q.serviceRequest(TblCampaignTypeService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TblCampaignTypeService = Office.TblCampaignTypeService || (Office.TblCampaignTypeService = {}));
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var TblCityForm = /** @class */ (function (_super) {
            __extends(TblCityForm, _super);
            function TblCityForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!TblCityForm.init) {
                    TblCityForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(TblCityForm, [
                        'Name', w0,
                        'Code', w0,
                        'EnName', w0,
                        'ECCode', w0
                    ]);
                }
                return _this;
            }
            TblCityForm.formKey = 'Office.TblCity';
            return TblCityForm;
        }(Serenity.PrefixedContext));
        Office.TblCityForm = TblCityForm;
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var TblCityRow;
        (function (TblCityRow) {
            TblCityRow.idProperty = 'Id';
            TblCityRow.nameProperty = 'Name';
            TblCityRow.localTextPrefix = 'Office.TblCity';
            TblCityRow.lookupKey = 'dbo.City';
            function getLookup() {
                return Q.getLookup('dbo.City');
            }
            TblCityRow.getLookup = getLookup;
            TblCityRow.deletePermission = 'Ecnet:dbo.tblCity:Delete';
            TblCityRow.insertPermission = 'Ecnet:dbo.tblCity:Modify';
            TblCityRow.readPermission = 'Ecnet:dbo.tblCity:View';
            TblCityRow.updatePermission = 'Ecnet:dbo.tblCity:Modify';
        })(TblCityRow = Office.TblCityRow || (Office.TblCityRow = {}));
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var TblCityService;
        (function (TblCityService) {
            TblCityService.baseUrl = 'Office/TblCity';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                TblCityService[x] = function (r, s, o) {
                    return Q.serviceRequest(TblCityService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TblCityService = Office.TblCityService || (Office.TblCityService = {}));
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var TblContractForm = /** @class */ (function (_super) {
            __extends(TblContractForm, _super);
            function TblContractForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!TblContractForm.init) {
                    TblContractForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.EnumEditor;
                    var w2 = Office.PlaceContractEditor;
                    var w3 = s.StringEditor;
                    var w4 = s.LookupEditor;
                    var w5 = s.DateEditor;
                    var w6 = s.DecimalEditor;
                    var w7 = s.TextAreaEditor;
                    var w8 = Office.ItemDetailEditor;
                    var w9 = Office.ScheduleDetailEditor;
                    var w10 = s.ImageUploadEditor;
                    var w11 = s.BooleanEditor;
                    Q.initFormType(TblContractForm, [
                        'Id', w0,
                        'BuyOrRent', w1,
                        'PlaceId', w2,
                        'Status', w1,
                        'No', w3,
                        'ContractName', w3,
                        'TypeId', w4,
                        'FromDate', w5,
                        'TotalContractAmt', w6,
                        'ToDate', w5,
                        'Paid', w6,
                        'DateSign', w5,
                        'RemainAmt', w6,
                        'EndDate', w5,
                        'NameOfOwner', w3,
                        'PhoneOfOwner', w3,
                        'EmailOfOwner', w3,
                        'IdentifyType', w1,
                        'IdentifyNo', w3,
                        'AddressOfOwner', w7,
                        'CurrentAddressOfOwner', w7,
                        'NameOfOwner2nd', w3,
                        'PhoneOfOwner2nd', w3,
                        'IdentifyType2nd', w1,
                        'IdentifyNo2nd', w3,
                        'AddressOfOwner2nd', w7,
                        'CurrentAddressOfOwner2nd', w7,
                        'ECPayCompanyName', w3,
                        'ECPayAddress', w3,
                        'ECPayPhone', w3,
                        'ECPayBankNo', w3,
                        'ECPayBankName', w3,
                        'ECPayBankNameBranch', w3,
                        'EcPayPerson', w3,
                        'EcPayPosition', w3,
                        'EcPayAuthorityNo', w3,
                        'EcPayAuthorityDate', w5,
                        'PlaceAddress', w7,
                        'PlaceCityId', w4,
                        'PlaceDistrictId', w4,
                        'PlaceWardsId', w4,
                        'CertificateNo', w3,
                        'CertificateDate', w5,
                        'CertificateCity', w4,
                        'PlaceDescription', w3,
                        'PlaceTotalAreaUse', w6,
                        'Month', w0,
                        'YearCancel', w0,
                        'ReleaseDate', w5,
                        'BeginDate', w5,
                        'PlacePriceRent', w6,
                        'PlacePriceBuy', w6,
                        'ContractAmt', w6,
                        'ContractAmtString', w3,
                        'YearFixPrice', w0,
                        'YearBeginRedeal', w0,
                        'RecurringPayment', w0,
                        'PaymentMethod', w1,
                        'AccountName', w3,
                        'AccountBankNo', w3,
                        'BankName', w3,
                        'WalletNo', w3,
                        'WalletName', w3,
                        'ListDetail', w8,
                        'ListSchedule', w9,
                        'FileContractUpload', w10,
                        'File1', w10,
                        'File2', w10,
                        'File3', w10,
                        'File4', w10,
                        'File5', w10,
                        'File6', w10,
                        'File7', w10,
                        'IsCompleted', w11,
                        'Remark1', w7,
                        'Remark2', w7,
                        'Remark3', w7,
                        'Remark4', w7,
                        'Remark5', w7
                    ]);
                }
                return _this;
            }
            TblContractForm.formKey = 'Office.TblContract';
            return TblContractForm;
        }(Serenity.PrefixedContext));
        Office.TblContractForm = TblContractForm;
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var TblContractItemsForm = /** @class */ (function (_super) {
            __extends(TblContractItemsForm, _super);
            function TblContractItemsForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!TblContractItemsForm.init) {
                    TblContractItemsForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.EnumEditor;
                    var w3 = s.IntegerEditor;
                    Q.initFormType(TblContractItemsForm, [
                        'ContractId', w0,
                        'ItemId', w0,
                        'ItemUnit', w1,
                        'ItemDataType', w2,
                        'Value', w1,
                        'ItemItemGroup', w1,
                        'ContractTypeId', w3
                    ]);
                }
                return _this;
            }
            TblContractItemsForm.formKey = 'Office.TblContractItems';
            return TblContractItemsForm;
        }(Serenity.PrefixedContext));
        Office.TblContractItemsForm = TblContractItemsForm;
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var TblContractItemsRow;
        (function (TblContractItemsRow) {
            TblContractItemsRow.idProperty = 'DetailID';
            TblContractItemsRow.nameProperty = 'Value';
            TblContractItemsRow.localTextPrefix = 'Office.TblContractItems';
            TblContractItemsRow.lookupKey = 'dbo.tblContractItems';
            function getLookup() {
                return Q.getLookup('dbo.tblContractItems');
            }
            TblContractItemsRow.getLookup = getLookup;
            TblContractItemsRow.deletePermission = 'Ecnet:dbo.tblContractItems:Modify';
            TblContractItemsRow.insertPermission = 'Ecnet:dbo.tblContractItems:Modify';
            TblContractItemsRow.readPermission = 'Ecnet:dbo.tblContractItems:View';
            TblContractItemsRow.updatePermission = 'Ecnet:dbo.tblContractItems:Modify';
        })(TblContractItemsRow = Office.TblContractItemsRow || (Office.TblContractItemsRow = {}));
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var TblContractItemsService;
        (function (TblContractItemsService) {
            TblContractItemsService.baseUrl = 'Office/TblContractItems';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                TblContractItemsService[x] = function (r, s, o) {
                    return Q.serviceRequest(TblContractItemsService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TblContractItemsService = Office.TblContractItemsService || (Office.TblContractItemsService = {}));
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var TblContractPaymentForm = /** @class */ (function (_super) {
            __extends(TblContractPaymentForm, _super);
            function TblContractPaymentForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!TblContractPaymentForm.init) {
                    TblContractPaymentForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.DateEditor;
                    var w3 = s.DecimalEditor;
                    Q.initFormType(TblContractPaymentForm, [
                        'ContractId', w0,
                        'InvoiceNo', w1,
                        'DatePaid', w2,
                        'Period', w1,
                        'PaidAmount', w3,
                        'PaidBy', w1,
                        'CreatedBy', w1,
                        'CreatedDate', w2,
                        'FileInvoice', w1,
                        'File1', w1,
                        'File2', w1,
                        'File3', w1,
                        'File4', w1,
                        'File5', w1
                    ]);
                }
                return _this;
            }
            TblContractPaymentForm.formKey = 'Office.TblContractPayment';
            return TblContractPaymentForm;
        }(Serenity.PrefixedContext));
        Office.TblContractPaymentForm = TblContractPaymentForm;
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var TblContractPaymentRow;
        (function (TblContractPaymentRow) {
            TblContractPaymentRow.idProperty = 'Id';
            TblContractPaymentRow.nameProperty = 'InvoiceNo';
            TblContractPaymentRow.localTextPrefix = 'Office.TblContractPayment';
            TblContractPaymentRow.deletePermission = 'Administration:General';
            TblContractPaymentRow.insertPermission = 'Administration:General';
            TblContractPaymentRow.readPermission = 'Administration:General';
            TblContractPaymentRow.updatePermission = 'Administration:General';
        })(TblContractPaymentRow = Office.TblContractPaymentRow || (Office.TblContractPaymentRow = {}));
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var TblContractPaymentService;
        (function (TblContractPaymentService) {
            TblContractPaymentService.baseUrl = 'Office/TblContractPayment';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                TblContractPaymentService[x] = function (r, s, o) {
                    return Q.serviceRequest(TblContractPaymentService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TblContractPaymentService = Office.TblContractPaymentService || (Office.TblContractPaymentService = {}));
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var TblContractRow;
        (function (TblContractRow) {
            TblContractRow.idProperty = 'Id';
            TblContractRow.nameProperty = 'No';
            TblContractRow.localTextPrefix = 'Office.TblContract';
            TblContractRow.lookupKey = 'dbo.tblContract';
            function getLookup() {
                return Q.getLookup('dbo.tblContract');
            }
            TblContractRow.getLookup = getLookup;
            TblContractRow.deletePermission = 'Ecnet:dbo.tblContract:Modify';
            TblContractRow.insertPermission = 'Ecnet:dbo.tblContract:Modify';
            TblContractRow.readPermission = 'Ecnet:dbo.tblContract:View';
            TblContractRow.updatePermission = 'Ecnet:dbo.tblContract:Modify';
        })(TblContractRow = Office.TblContractRow || (Office.TblContractRow = {}));
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var TblContractScheduleForm = /** @class */ (function (_super) {
            __extends(TblContractScheduleForm, _super);
            function TblContractScheduleForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!TblContractScheduleForm.init) {
                    TblContractScheduleForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.IntegerEditor;
                    var w2 = s.DecimalEditor;
                    var w3 = s.DateEditor;
                    Q.initFormType(TblContractScheduleForm, [
                        'ContractId', w0,
                        'Times', w1,
                        'Amount', w2,
                        'Date', w3
                    ]);
                }
                return _this;
            }
            TblContractScheduleForm.formKey = 'Office.TblContractSchedule';
            return TblContractScheduleForm;
        }(Serenity.PrefixedContext));
        Office.TblContractScheduleForm = TblContractScheduleForm;
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var TblContractScheduleRow;
        (function (TblContractScheduleRow) {
            TblContractScheduleRow.idProperty = 'Id';
            TblContractScheduleRow.nameProperty = 'ContarctNameOfOwner';
            TblContractScheduleRow.localTextPrefix = 'Office.TblContractSchedule';
            TblContractScheduleRow.lookupKey = 'dbo.tblContractSchedule';
            function getLookup() {
                return Q.getLookup('dbo.tblContractSchedule');
            }
            TblContractScheduleRow.getLookup = getLookup;
            TblContractScheduleRow.deletePermission = 'Ecnet:dbo.tblContractSchedule:Modify';
            TblContractScheduleRow.insertPermission = 'Ecnet:dbo.tblContractSchedule:Modify';
            TblContractScheduleRow.readPermission = 'Ecnet:dbo.tblContractSchedule:View';
            TblContractScheduleRow.updatePermission = 'Ecnet:dbo.tblContractSchedule:Modify';
        })(TblContractScheduleRow = Office.TblContractScheduleRow || (Office.TblContractScheduleRow = {}));
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var TblContractScheduleService;
        (function (TblContractScheduleService) {
            TblContractScheduleService.baseUrl = 'Office/TblContractSchedule';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                TblContractScheduleService[x] = function (r, s, o) {
                    return Q.serviceRequest(TblContractScheduleService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TblContractScheduleService = Office.TblContractScheduleService || (Office.TblContractScheduleService = {}));
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var TblContractService;
        (function (TblContractService) {
            TblContractService.baseUrl = 'Office/TblContract';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'GetNextNumber',
                'Cancel'
            ].forEach(function (x) {
                TblContractService[x] = function (r, s, o) {
                    return Q.serviceRequest(TblContractService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TblContractService = Office.TblContractService || (Office.TblContractService = {}));
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var TblContractTypeForm = /** @class */ (function (_super) {
            __extends(TblContractTypeForm, _super);
            function TblContractTypeForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!TblContractTypeForm.init) {
                    TblContractTypeForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.EnumEditor;
                    var w2 = s.TextAreaEditor;
                    Q.initFormType(TblContractTypeForm, [
                        'TypeName', w0,
                        'Type', w1,
                        'Code', w0,
                        'Description', w2,
                        'PersonSign', w0,
                        'PersonPosition', w0,
                        'PersonAuthorityNo', w0,
                        'Remark1', w2,
                        'Remark2', w2,
                        'Remark3', w2,
                        'Remark4', w2,
                        'Remark5', w2
                    ]);
                }
                return _this;
            }
            TblContractTypeForm.formKey = 'Office.TblContractType';
            return TblContractTypeForm;
        }(Serenity.PrefixedContext));
        Office.TblContractTypeForm = TblContractTypeForm;
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var TblContractTypeRow;
        (function (TblContractTypeRow) {
            TblContractTypeRow.idProperty = 'Id';
            TblContractTypeRow.nameProperty = 'TypeName';
            TblContractTypeRow.localTextPrefix = 'Office.TblContractType';
            TblContractTypeRow.lookupKey = 'dbo.tblContractType';
            function getLookup() {
                return Q.getLookup('dbo.tblContractType');
            }
            TblContractTypeRow.getLookup = getLookup;
            TblContractTypeRow.deletePermission = 'Administration:General';
            TblContractTypeRow.insertPermission = 'Administration:General';
            TblContractTypeRow.readPermission = 'Administration:General';
            TblContractTypeRow.updatePermission = 'Administration:General';
        })(TblContractTypeRow = Office.TblContractTypeRow || (Office.TblContractTypeRow = {}));
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var TblContractTypeService;
        (function (TblContractTypeService) {
            TblContractTypeService.baseUrl = 'Office/TblContractType';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                TblContractTypeService[x] = function (r, s, o) {
                    return Q.serviceRequest(TblContractTypeService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TblContractTypeService = Office.TblContractTypeService || (Office.TblContractTypeService = {}));
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var TblDistrictForm = /** @class */ (function (_super) {
            __extends(TblDistrictForm, _super);
            function TblDistrictForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!TblDistrictForm.init) {
                    TblDistrictForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.StringEditor;
                    Q.initFormType(TblDistrictForm, [
                        'CityId', w0,
                        'Name', w1,
                        'Code', w1,
                        'EnName', w1
                    ]);
                }
                return _this;
            }
            TblDistrictForm.formKey = 'Office.TblDistrict';
            return TblDistrictForm;
        }(Serenity.PrefixedContext));
        Office.TblDistrictForm = TblDistrictForm;
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var TblDistrictRow;
        (function (TblDistrictRow) {
            TblDistrictRow.idProperty = 'Id';
            TblDistrictRow.nameProperty = 'Name';
            TblDistrictRow.localTextPrefix = 'Office.TblDistrict';
            TblDistrictRow.lookupKey = 'dbo.tblDistrict';
            function getLookup() {
                return Q.getLookup('dbo.tblDistrict');
            }
            TblDistrictRow.getLookup = getLookup;
            TblDistrictRow.deletePermission = 'Ecnet:dbo.tblDistrict:Delete';
            TblDistrictRow.insertPermission = 'Ecnet:dbo.tblDistrict:Modify';
            TblDistrictRow.readPermission = 'Ecnet:dbo.tblDistrict:View';
            TblDistrictRow.updatePermission = 'Ecnet:dbo.tblDistrict:Modify';
        })(TblDistrictRow = Office.TblDistrictRow || (Office.TblDistrictRow = {}));
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var TblDistrictService;
        (function (TblDistrictService) {
            TblDistrictService.baseUrl = 'Office/TblDistrict';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                TblDistrictService[x] = function (r, s, o) {
                    return Q.serviceRequest(TblDistrictService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TblDistrictService = Office.TblDistrictService || (Office.TblDistrictService = {}));
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var TblItemsForm = /** @class */ (function (_super) {
            __extends(TblItemsForm, _super);
            function TblItemsForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!TblItemsForm.init) {
                    TblItemsForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.EnumEditor;
                    var w2 = s.TextAreaEditor;
                    Q.initFormType(TblItemsForm, [
                        'Code', w0,
                        'ItemName', w0,
                        'Unit', w0,
                        'DataType', w1,
                        'ItemType', w1,
                        'ItemGroup', w1,
                        'Decriptions', w2
                    ]);
                }
                return _this;
            }
            TblItemsForm.formKey = 'Office.TblItems';
            return TblItemsForm;
        }(Serenity.PrefixedContext));
        Office.TblItemsForm = TblItemsForm;
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var TblItemsRow;
        (function (TblItemsRow) {
            TblItemsRow.idProperty = 'Id';
            TblItemsRow.nameProperty = 'ItemName';
            TblItemsRow.localTextPrefix = 'Office.TblItems';
            TblItemsRow.lookupKey = 'dbo.tblItems';
            function getLookup() {
                return Q.getLookup('dbo.tblItems');
            }
            TblItemsRow.getLookup = getLookup;
            TblItemsRow.deletePermission = 'Administration:General';
            TblItemsRow.insertPermission = 'Administration:General';
            TblItemsRow.readPermission = 'Administration:General';
            TblItemsRow.updatePermission = 'Administration:General';
        })(TblItemsRow = Office.TblItemsRow || (Office.TblItemsRow = {}));
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var TblItemsService;
        (function (TblItemsService) {
            TblItemsService.baseUrl = 'Office/TblItems';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                TblItemsService[x] = function (r, s, o) {
                    return Q.serviceRequest(TblItemsService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TblItemsService = Office.TblItemsService || (Office.TblItemsService = {}));
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var TblPlaceDetailsForm = /** @class */ (function (_super) {
            __extends(TblPlaceDetailsForm, _super);
            function TblPlaceDetailsForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!TblPlaceDetailsForm.init) {
                    TblPlaceDetailsForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.IntegerEditor;
                    var w3 = s.EnumEditor;
                    var w4 = s.TextAreaEditor;
                    Q.initFormType(TblPlaceDetailsForm, [
                        'PlaceId', w0,
                        'ItemId', w0,
                        'Value', w1,
                        'Unit', w1,
                        'PlaceType', w2,
                        'ItemDataType', w3,
                        'Note', w4
                    ]);
                }
                return _this;
            }
            TblPlaceDetailsForm.formKey = 'Office.TblPlaceDetails';
            return TblPlaceDetailsForm;
        }(Serenity.PrefixedContext));
        Office.TblPlaceDetailsForm = TblPlaceDetailsForm;
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var TblPlaceDetailsRow;
        (function (TblPlaceDetailsRow) {
            TblPlaceDetailsRow.idProperty = 'Id';
            TblPlaceDetailsRow.nameProperty = 'Value';
            TblPlaceDetailsRow.localTextPrefix = 'Office.TblPlaceDetails';
            TblPlaceDetailsRow.lookupKey = 'dbo.tblPlaceDetails';
            function getLookup() {
                return Q.getLookup('dbo.tblPlaceDetails');
            }
            TblPlaceDetailsRow.getLookup = getLookup;
            TblPlaceDetailsRow.deletePermission = 'Administration:General';
            TblPlaceDetailsRow.insertPermission = 'Administration:General';
            TblPlaceDetailsRow.readPermission = 'Administration:General';
            TblPlaceDetailsRow.updatePermission = 'Administration:General';
        })(TblPlaceDetailsRow = Office.TblPlaceDetailsRow || (Office.TblPlaceDetailsRow = {}));
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var TblPlaceDetailsService;
        (function (TblPlaceDetailsService) {
            TblPlaceDetailsService.baseUrl = 'Office/TblPlaceDetails';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                TblPlaceDetailsService[x] = function (r, s, o) {
                    return Q.serviceRequest(TblPlaceDetailsService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TblPlaceDetailsService = Office.TblPlaceDetailsService || (Office.TblPlaceDetailsService = {}));
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var TblPlaceOfBussinessForm = /** @class */ (function (_super) {
            __extends(TblPlaceOfBussinessForm, _super);
            function TblPlaceOfBussinessForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!TblPlaceOfBussinessForm.init) {
                    TblPlaceOfBussinessForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.EnumEditor;
                    var w2 = s.LookupEditor;
                    var w3 = s.TextAreaEditor;
                    var w4 = s.DecimalEditor;
                    var w5 = s.IntegerEditor;
                    var w6 = s.DateEditor;
                    var w7 = s.ImageUploadEditor;
                    Q.initFormType(TblPlaceOfBussinessForm, [
                        'Code', w0,
                        'Status', w1,
                        'Address', w0,
                        'CityId', w2,
                        'DistrictId', w2,
                        'WardsId', w2,
                        'LinkGoogleMap', w3,
                        'NameOfOwner', w0,
                        'PhoneOfOwner', w0,
                        'Description', w3,
                        'Width', w4,
                        'TotalAreaUse', w4,
                        'TotalArea', w4,
                        'Door', w0,
                        'Ceiling', w0,
                        'Wall', w0,
                        'Floor', w0,
                        'Type', w1,
                        'MonthRent', w5,
                        'PriceRent', w4,
                        'PriceBuy', w4,
                        'RequireDeposit', w1,
                        'MonthDeposit', w5,
                        'RequireDepositAmt', w4,
                        'RequireDateDeposit', w6,
                        'HasDeposit', w1,
                        'DepositAmt', w4,
                        'DateDeposit', w6,
                        'BranchIdPic', w2,
                        'EmployeePicName', w0,
                        'EmployeePicCode', w0,
                        'EmployeePicEmail', w0,
                        'EmployeePicPhone', w0,
                        'EmployeePicWalletNo', w0,
                        'TotalCustomer', w1,
                        'Note', w3,
                        'ContractId', w5,
                        'File1', w7,
                        'File2', w7,
                        'File3', w7,
                        'File4', w7,
                        'File5', w7,
                        'File6', w7,
                        'File7', w7,
                        'File8', w7,
                        'File9', w7,
                        'File10', w7
                    ]);
                }
                return _this;
            }
            TblPlaceOfBussinessForm.formKey = 'Office.TblPlaceOfBussiness';
            return TblPlaceOfBussinessForm;
        }(Serenity.PrefixedContext));
        Office.TblPlaceOfBussinessForm = TblPlaceOfBussinessForm;
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var TblPlaceOfBussinessRow;
        (function (TblPlaceOfBussinessRow) {
            TblPlaceOfBussinessRow.idProperty = 'Id';
            TblPlaceOfBussinessRow.nameProperty = 'Code';
            TblPlaceOfBussinessRow.localTextPrefix = 'Office.TblPlaceOfBussiness';
            TblPlaceOfBussinessRow.lookupKey = 'dbo.tblPlaceOfBussiness';
            function getLookup() {
                return Q.getLookup('dbo.tblPlaceOfBussiness');
            }
            TblPlaceOfBussinessRow.getLookup = getLookup;
            TblPlaceOfBussinessRow.deletePermission = 'Ecnet:dbo.tblPlaceOfBussiness:Delete';
            TblPlaceOfBussinessRow.insertPermission = 'Ecnet:dbo.tblPlaceOfBussiness:Modify';
            TblPlaceOfBussinessRow.readPermission = 'Ecnet:dbo.tblPlaceOfBussiness:View';
            TblPlaceOfBussinessRow.updatePermission = 'Ecnet:dbo.tblPlaceOfBussiness:Modify';
        })(TblPlaceOfBussinessRow = Office.TblPlaceOfBussinessRow || (Office.TblPlaceOfBussinessRow = {}));
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var TblPlaceOfBussinessService;
        (function (TblPlaceOfBussinessService) {
            TblPlaceOfBussinessService.baseUrl = 'Office/TblPlaceOfBussiness';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'GetNextNumber',
                'ExcelImport',
                'GetDashbord'
            ].forEach(function (x) {
                TblPlaceOfBussinessService[x] = function (r, s, o) {
                    return Q.serviceRequest(TblPlaceOfBussinessService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TblPlaceOfBussinessService = Office.TblPlaceOfBussinessService || (Office.TblPlaceOfBussinessService = {}));
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var TblProjectForm = /** @class */ (function (_super) {
            __extends(TblProjectForm, _super);
            function TblProjectForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!TblProjectForm.init) {
                    TblProjectForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.LookupEditor;
                    var w2 = s.DateEditor;
                    var w3 = Office.LocalTransactionEditor;
                    var w4 = Office.PlaceProjectEditor;
                    var w5 = Office.ProjectItemsEditor;
                    var w6 = s.BooleanEditor;
                    var w7 = s.IntegerEditor;
                    var w8 = s.EnumEditor;
                    Q.initFormType(TblProjectForm, [
                        'Code', w0,
                        'StatusId', w1,
                        'Name', w0,
                        'InnitiatedDate', w2,
                        'FromDate', w2,
                        'ToDate', w2,
                        'TransactionLocationId', w3,
                        'PersonManagement', w0,
                        'PersonManagementPhone', w0,
                        'PlaceId', w4,
                        'PlaceAddress', w0,
                        'PlaceCityId', w1,
                        'PlaceDistrictId', w1,
                        'PlaceWardsId', w1,
                        'Note', w0,
                        'ProjectItems', w5,
                        'IsNeedApprovalForNew', w6,
                        'IsNeedApprovalForEdit', w6,
                        'LevelApprovalForNew', w7,
                        'LevelApprovalForEdit', w7,
                        'RecordStatus', w8
                    ]);
                }
                return _this;
            }
            TblProjectForm.formKey = 'Office.TblProject';
            return TblProjectForm;
        }(Serenity.PrefixedContext));
        Office.TblProjectForm = TblProjectForm;
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var TblProjectItemForm = /** @class */ (function (_super) {
            __extends(TblProjectItemForm, _super);
            function TblProjectItemForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!TblProjectItemForm.init) {
                    TblProjectItemForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.DecimalEditor;
                    var w3 = s.DateEditor;
                    var w4 = s.IntegerEditor;
                    Q.initFormType(TblProjectItemForm, [
                        'ProjectId', w0,
                        'Status', w0,
                        'Code', w1,
                        'Name', w1,
                        'Quantity', w2,
                        'UnitId', w0,
                        'FromDate', w3,
                        'ToDate', w3,
                        'Decription', w1,
                        'TotalDays', w4,
                        'Note', w1,
                        'ProcessBar', w4
                    ]);
                }
                return _this;
            }
            TblProjectItemForm.formKey = 'Office.TblProjectItem';
            return TblProjectItemForm;
        }(Serenity.PrefixedContext));
        Office.TblProjectItemForm = TblProjectItemForm;
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var TblProjectItemRow;
        (function (TblProjectItemRow) {
            TblProjectItemRow.idProperty = 'Id';
            TblProjectItemRow.nameProperty = 'Name';
            TblProjectItemRow.localTextPrefix = 'Office.TblProjectItem';
            TblProjectItemRow.lookupKey = 'dbo.tblProjectItem';
            function getLookup() {
                return Q.getLookup('dbo.tblProjectItem');
            }
            TblProjectItemRow.getLookup = getLookup;
            TblProjectItemRow.deletePermission = 'Ecnet:dbo.tblProjectItem:Modify';
            TblProjectItemRow.insertPermission = 'Ecnet:dbo.tblProjectItem:Modify';
            TblProjectItemRow.readPermission = 'Ecnet:dbo.tblProjectItem:View';
            TblProjectItemRow.updatePermission = 'Ecnet:dbo.tblProjectItem:Modify';
        })(TblProjectItemRow = Office.TblProjectItemRow || (Office.TblProjectItemRow = {}));
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var TblProjectItemService;
        (function (TblProjectItemService) {
            TblProjectItemService.baseUrl = 'Office/TblProjectItem';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                TblProjectItemService[x] = function (r, s, o) {
                    return Q.serviceRequest(TblProjectItemService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TblProjectItemService = Office.TblProjectItemService || (Office.TblProjectItemService = {}));
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var TblProjectRow;
        (function (TblProjectRow) {
            TblProjectRow.idProperty = 'Id';
            TblProjectRow.nameProperty = 'Code';
            TblProjectRow.localTextPrefix = 'Office.TblProject';
            TblProjectRow.lookupKey = 'dbo.TblProject';
            function getLookup() {
                return Q.getLookup('dbo.TblProject');
            }
            TblProjectRow.getLookup = getLookup;
            TblProjectRow.deletePermission = 'Ecnet:dbo.tblProject:Modify';
            TblProjectRow.insertPermission = 'Ecnet:dbo.tblProject:Modify';
            TblProjectRow.readPermission = 'Ecnet:dbo.tblProject:View';
            TblProjectRow.updatePermission = 'Ecnet:dbo.tblProject:Modify';
        })(TblProjectRow = Office.TblProjectRow || (Office.TblProjectRow = {}));
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var TblProjectService;
        (function (TblProjectService) {
            TblProjectService.baseUrl = 'Office/TblProject';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'GetProjectCode'
            ].forEach(function (x) {
                TblProjectService[x] = function (r, s, o) {
                    return Q.serviceRequest(TblProjectService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TblProjectService = Office.TblProjectService || (Office.TblProjectService = {}));
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var TblStatusDetailForm = /** @class */ (function (_super) {
            __extends(TblStatusDetailForm, _super);
            function TblStatusDetailForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!TblStatusDetailForm.init) {
                    TblStatusDetailForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    Q.initFormType(TblStatusDetailForm, [
                        'StatusId', w0,
                        'StatusDetailId', w0
                    ]);
                }
                return _this;
            }
            TblStatusDetailForm.formKey = 'Office.TblStatusDetail';
            return TblStatusDetailForm;
        }(Serenity.PrefixedContext));
        Office.TblStatusDetailForm = TblStatusDetailForm;
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var TblStatusDetailLevel2Form = /** @class */ (function (_super) {
            __extends(TblStatusDetailLevel2Form, _super);
            function TblStatusDetailLevel2Form(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!TblStatusDetailLevel2Form.init) {
                    TblStatusDetailLevel2Form.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    Q.initFormType(TblStatusDetailLevel2Form, [
                        'StatusId', w0,
                        'StatusDetailId', w0
                    ]);
                }
                return _this;
            }
            TblStatusDetailLevel2Form.formKey = 'Office.TblStatusDetailLevel2';
            return TblStatusDetailLevel2Form;
        }(Serenity.PrefixedContext));
        Office.TblStatusDetailLevel2Form = TblStatusDetailLevel2Form;
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var TblStatusDetailLevel2Row;
        (function (TblStatusDetailLevel2Row) {
            TblStatusDetailLevel2Row.idProperty = 'Id';
            TblStatusDetailLevel2Row.localTextPrefix = 'Office.TblStatusDetailLevel2';
            TblStatusDetailLevel2Row.lookupKey = 'dbo.tblStatusDetailLevel2';
            function getLookup() {
                return Q.getLookup('dbo.tblStatusDetailLevel2');
            }
            TblStatusDetailLevel2Row.getLookup = getLookup;
            TblStatusDetailLevel2Row.deletePermission = 'Ecnet:dbo.tblStatusDetail:Modify';
            TblStatusDetailLevel2Row.insertPermission = 'Ecnet:dbo.tblStatusDetail:Modify';
            TblStatusDetailLevel2Row.readPermission = 'Ecnet:dbo.tblStatusDetail:View';
            TblStatusDetailLevel2Row.updatePermission = 'Ecnet:dbo.tblStatusDetail:Modify';
        })(TblStatusDetailLevel2Row = Office.TblStatusDetailLevel2Row || (Office.TblStatusDetailLevel2Row = {}));
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var TblStatusDetailLevel2Service;
        (function (TblStatusDetailLevel2Service) {
            TblStatusDetailLevel2Service.baseUrl = 'Office/TblStatusDetailLevel2';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                TblStatusDetailLevel2Service[x] = function (r, s, o) {
                    return Q.serviceRequest(TblStatusDetailLevel2Service.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TblStatusDetailLevel2Service = Office.TblStatusDetailLevel2Service || (Office.TblStatusDetailLevel2Service = {}));
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var TblStatusDetailRow;
        (function (TblStatusDetailRow) {
            TblStatusDetailRow.idProperty = 'Id';
            TblStatusDetailRow.localTextPrefix = 'Office.TblStatusDetail';
            TblStatusDetailRow.lookupKey = 'dbo.tblStatusDetail';
            function getLookup() {
                return Q.getLookup('dbo.tblStatusDetail');
            }
            TblStatusDetailRow.getLookup = getLookup;
            TblStatusDetailRow.deletePermission = 'Ecnet:dbo.tblStatusDetail:Modify';
            TblStatusDetailRow.insertPermission = 'Ecnet:dbo.tblStatusDetail:Modify';
            TblStatusDetailRow.readPermission = 'Ecnet:dbo.tblStatusDetail:View';
            TblStatusDetailRow.updatePermission = 'Ecnet:dbo.tblStatusDetail:Modify';
        })(TblStatusDetailRow = Office.TblStatusDetailRow || (Office.TblStatusDetailRow = {}));
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var TblStatusDetailService;
        (function (TblStatusDetailService) {
            TblStatusDetailService.baseUrl = 'Office/TblStatusDetail';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                TblStatusDetailService[x] = function (r, s, o) {
                    return Q.serviceRequest(TblStatusDetailService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TblStatusDetailService = Office.TblStatusDetailService || (Office.TblStatusDetailService = {}));
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var TblStatusForm = /** @class */ (function (_super) {
            __extends(TblStatusForm, _super);
            function TblStatusForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!TblStatusForm.init) {
                    TblStatusForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.BooleanEditor;
                    var w2 = s.EnumEditor;
                    var w3 = s.LookupEditor;
                    Q.initFormType(TblStatusForm, [
                        'Name', w0,
                        'IsReadOnly', w1,
                        'IsNew', w1,
                        'TypeId', w2,
                        'NextStatus', w3,
                        'AllowList', w3,
                        'AllowListLevel2', w3
                    ]);
                }
                return _this;
            }
            TblStatusForm.formKey = 'Office.TblStatus';
            return TblStatusForm;
        }(Serenity.PrefixedContext));
        Office.TblStatusForm = TblStatusForm;
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var TblStatusRow;
        (function (TblStatusRow) {
            TblStatusRow.idProperty = 'Id';
            TblStatusRow.nameProperty = 'Name';
            TblStatusRow.localTextPrefix = 'Office.TblStatus';
            TblStatusRow.lookupKey = 'dbo.tblStatus';
            function getLookup() {
                return Q.getLookup('dbo.tblStatus');
            }
            TblStatusRow.getLookup = getLookup;
            TblStatusRow.deletePermission = 'Ecnet:dbo.tblStatus:Modify';
            TblStatusRow.insertPermission = 'Ecnet:dbo.tblStatus:Modify';
            TblStatusRow.readPermission = 'Ecnet:dbo.tblStatus:View';
            TblStatusRow.updatePermission = 'Ecnet:dbo.tblStatus:Modify';
        })(TblStatusRow = Office.TblStatusRow || (Office.TblStatusRow = {}));
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var TblStatusService;
        (function (TblStatusService) {
            TblStatusService.baseUrl = 'Office/TblStatus';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                TblStatusService[x] = function (r, s, o) {
                    return Q.serviceRequest(TblStatusService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TblStatusService = Office.TblStatusService || (Office.TblStatusService = {}));
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var TblTransactionLocationForm = /** @class */ (function (_super) {
            __extends(TblTransactionLocationForm, _super);
            function TblTransactionLocationForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!TblTransactionLocationForm.init) {
                    TblTransactionLocationForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.IntegerEditor;
                    var w2 = s.DateEditor;
                    Q.initFormType(TblTransactionLocationForm, [
                        'Code', w0,
                        'Name', w0,
                        'AreaId', w1,
                        'EmployeeManageId', w1,
                        'EmployeeCashId', w1,
                        'PlaceId', w1,
                        'OpenFrom', w0,
                        'OpenTo', w0,
                        'OpeningTime', w0,
                        'OpeningDate', w2,
                        'CreatedBy', w0,
                        'CreatedDate', w2,
                        'UpdatedBy', w0,
                        'UpdatedDate', w2,
                        'Status', w1
                    ]);
                }
                return _this;
            }
            TblTransactionLocationForm.formKey = 'Office.TblTransactionLocation';
            return TblTransactionLocationForm;
        }(Serenity.PrefixedContext));
        Office.TblTransactionLocationForm = TblTransactionLocationForm;
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var TblTransactionLocationRow;
        (function (TblTransactionLocationRow) {
            TblTransactionLocationRow.idProperty = 'Id';
            TblTransactionLocationRow.nameProperty = 'Code';
            TblTransactionLocationRow.localTextPrefix = 'Office.TblTransactionLocation';
            TblTransactionLocationRow.lookupKey = 'dbo.tblTransactionLocation';
            function getLookup() {
                return Q.getLookup('dbo.tblTransactionLocation');
            }
            TblTransactionLocationRow.getLookup = getLookup;
            TblTransactionLocationRow.deletePermission = 'Administration:General';
            TblTransactionLocationRow.insertPermission = 'Administration:General';
            TblTransactionLocationRow.readPermission = 'Administration:General';
            TblTransactionLocationRow.updatePermission = 'Administration:General';
        })(TblTransactionLocationRow = Office.TblTransactionLocationRow || (Office.TblTransactionLocationRow = {}));
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var TblTransactionLocationService;
        (function (TblTransactionLocationService) {
            TblTransactionLocationService.baseUrl = 'Office/TblTransactionLocation';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                TblTransactionLocationService[x] = function (r, s, o) {
                    return Q.serviceRequest(TblTransactionLocationService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TblTransactionLocationService = Office.TblTransactionLocationService || (Office.TblTransactionLocationService = {}));
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var TblUnitForm = /** @class */ (function (_super) {
            __extends(TblUnitForm, _super);
            function TblUnitForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!TblUnitForm.init) {
                    TblUnitForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.IntegerEditor;
                    var w2 = s.DateEditor;
                    Q.initFormType(TblUnitForm, [
                        'Code', w0,
                        'Name', w0,
                        'Decription', w0,
                        'Rate', w1,
                        'CreatedBy', w0,
                        'CreatedDate', w2,
                        'UpdatedBy', w0,
                        'UpdatedDate', w2
                    ]);
                }
                return _this;
            }
            TblUnitForm.formKey = 'Office.TblUnit';
            return TblUnitForm;
        }(Serenity.PrefixedContext));
        Office.TblUnitForm = TblUnitForm;
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var TblUnitRow;
        (function (TblUnitRow) {
            TblUnitRow.idProperty = 'Id';
            TblUnitRow.nameProperty = 'Name';
            TblUnitRow.localTextPrefix = 'Office.TblUnit';
            TblUnitRow.lookupKey = 'dbo.tblUnit';
            function getLookup() {
                return Q.getLookup('dbo.tblUnit');
            }
            TblUnitRow.getLookup = getLookup;
            TblUnitRow.deletePermission = 'Administration:General';
            TblUnitRow.insertPermission = 'Administration:General';
            TblUnitRow.readPermission = 'Administration:General';
            TblUnitRow.updatePermission = 'Administration:General';
        })(TblUnitRow = Office.TblUnitRow || (Office.TblUnitRow = {}));
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var TblUnitService;
        (function (TblUnitService) {
            TblUnitService.baseUrl = 'Office/TblUnit';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                TblUnitService[x] = function (r, s, o) {
                    return Q.serviceRequest(TblUnitService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TblUnitService = Office.TblUnitService || (Office.TblUnitService = {}));
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var TblWardsForm = /** @class */ (function (_super) {
            __extends(TblWardsForm, _super);
            function TblWardsForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!TblWardsForm.init) {
                    TblWardsForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.StringEditor;
                    Q.initFormType(TblWardsForm, [
                        'DistrictId', w0,
                        'Name', w1,
                        'EnName', w1
                    ]);
                }
                return _this;
            }
            TblWardsForm.formKey = 'Office.TblWards';
            return TblWardsForm;
        }(Serenity.PrefixedContext));
        Office.TblWardsForm = TblWardsForm;
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var TblWardsRow;
        (function (TblWardsRow) {
            TblWardsRow.idProperty = 'Id';
            TblWardsRow.nameProperty = 'Name';
            TblWardsRow.localTextPrefix = 'Office.TblWards';
            TblWardsRow.lookupKey = 'dbo.tblWards';
            function getLookup() {
                return Q.getLookup('dbo.tblWards');
            }
            TblWardsRow.getLookup = getLookup;
            TblWardsRow.deletePermission = 'Ecnet:dbo.tblWards:Delete';
            TblWardsRow.insertPermission = 'Ecnet:dbo.tblWards:Modify';
            TblWardsRow.readPermission = 'Ecnet:dbo.tblWards:View';
            TblWardsRow.updatePermission = 'Ecnet:dbo.tblWards:Modify';
        })(TblWardsRow = Office.TblWardsRow || (Office.TblWardsRow = {}));
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var TblWardsService;
        (function (TblWardsService) {
            TblWardsService.baseUrl = 'Office/TblWards';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                TblWardsService[x] = function (r, s, o) {
                    return Q.serviceRequest(TblWardsService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TblWardsService = Office.TblWardsService || (Office.TblWardsService = {}));
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var TemplateEmailForm = /** @class */ (function (_super) {
            __extends(TemplateEmailForm, _super);
            function TemplateEmailForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!TemplateEmailForm.init) {
                    TemplateEmailForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(TemplateEmailForm, [
                        'Name', w0,
                        'To', w0,
                        'Bcc', w0,
                        'Cc', w0
                    ]);
                }
                return _this;
            }
            TemplateEmailForm.formKey = 'Office.TemplateEmail';
            return TemplateEmailForm;
        }(Serenity.PrefixedContext));
        Office.TemplateEmailForm = TemplateEmailForm;
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var TemplateEmailRow;
        (function (TemplateEmailRow) {
            TemplateEmailRow.idProperty = 'Id';
            TemplateEmailRow.nameProperty = 'Name';
            TemplateEmailRow.localTextPrefix = 'Office.TemplateEmail';
            TemplateEmailRow.deletePermission = 'Administration:General';
            TemplateEmailRow.insertPermission = 'Administration:General';
            TemplateEmailRow.readPermission = 'Administration:General';
            TemplateEmailRow.updatePermission = 'Administration:General';
        })(TemplateEmailRow = Office.TemplateEmailRow || (Office.TemplateEmailRow = {}));
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var TemplateEmailService;
        (function (TemplateEmailService) {
            TemplateEmailService.baseUrl = 'Office/TemplateEmail';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                TemplateEmailService[x] = function (r, s, o) {
                    return Q.serviceRequest(TemplateEmailService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TemplateEmailService = Office.TemplateEmailService || (Office.TemplateEmailService = {}));
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Texts;
    (function (Texts) {
        ECNET['Texts'] = Q.proxyTexts(Texts, '', { Db: { Administration: { Language: { Id: 1, LanguageId: 1, LanguageName: 1 }, Role: { LevelApproval: 1, RoleId: 1, RoleName: 1 }, RolePermission: { PermissionKey: 1, RoleId: 1, RolePermissionId: 1, RoleRoleName: 1 }, Translation: { CustomText: 1, EntityPlural: 1, Key: 1, OverrideConfirmation: 1, SaveChangesButton: 1, SourceLanguage: 1, SourceText: 1, TargetLanguage: 1, TargetText: 1 }, User: { DisplayName: 1, Email: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, LastDirectoryUpdate: 1, Password: 1, PasswordConfirm: 1, PasswordHash: 1, PasswordSalt: 1, Source: 1, UpdateDate: 1, UpdateUserId: 1, UserId: 1, UserImage: 1, Username: 1 }, UserPermission: { Granted: 1, PermissionKey: 1, User: 1, UserId: 1, UserPermissionId: 1, Username: 1 }, UserRole: { RoleId: 1, User: 1, UserId: 1, UserRoleId: 1, Username: 1 } }, Common: { UserPreference: { Name: 1, PreferenceType: 1, UserId: 1, UserPreferenceId: 1, Value: 1 } }, Office: { AssetTemp: { Code: 1, CreatedBy: 1, CreatedDate: 1, HasContract: 1, HasProcessed: 1, Id: 1, Name: 1, PId: 1, Type: 1, UpdatedBy: 1, UpdatedDate: 1 }, EmailAccounts: { CreatedBy: 1, CreatedDate: 1, DisplayName: 1, Email: 1, EnableSsl: 1, Host: 1, Id: 1, IsActive: 1, Password: 1, Port: 1, UpdatedBy: 1, UpdatedDate: 1, UseDefaultCredentials: 1, Username: 1 }, QueuedEmail: { AttachedDownloadId: 1, AttachmentFileName: 1, AttachmentFilePath: 1, Bcc: 1, Body: 1, Cc: 1, CreatedBy: 1, CreatedDate: 1, CreatedOnUtc: 1, DontSendBeforeDateUtc: 1, EmailAccountCreatedBy: 1, EmailAccountCreatedDate: 1, EmailAccountDisplayName: 1, EmailAccountEmail: 1, EmailAccountEnableSsl: 1, EmailAccountHost: 1, EmailAccountId: 1, EmailAccountIsActive: 1, EmailAccountPassword: 1, EmailAccountPort: 1, EmailAccountUpdatedBy: 1, EmailAccountUpdatedDate: 1, EmailAccountUseDefaultCredentials: 1, EmailAccountUsername: 1, From: 1, FromName: 1, HasError: 1, Id: 1, PriorityId: 1, ReplyTo: 1, ReplyToName: 1, Result: 1, SentOnUtc: 1, SentTries: 1, Subject: 1, To: 1, ToName: 1, UpdatedBy: 1, UpdatedDate: 1 }, SysParameters: { Code: 1, CreatedBy: 1, CreatedDate: 1, Id: 1, Name: 1, Unit: 1, UpdatedBy: 1, UpdatedDate: 1, Value: 1 }, TblApprovalCenter: { AndOr: 1, ApproveBy: 1, ApprovedDate: 1, ClientId: 1, Code: 1, CreateBy: 1, Date: 1, Id: 1, IsSendMail: 1, IsSms: 1, LevelApproval: 1, ReasonReject: 1, Status: 1, Times: 1, Type: 1 }, TblArea: { BranchCode: 1, Code: 1, Id: 1, Name: 1 }, TblAsset: { Code: 1, GroupDescription: 1, GroupId: 1, GroupName: 1, Id: 1, Name: 1 }, TblAssetGroup: { Description: 1, Id: 1, Name: 1 }, TblAssignAssetToPlace: { AssetCode: 1, AssetGroupId: 1, AssetId: 1, AssetName: 1, CreatedBy: 1, CreatedDate: 1, FromDate: 1, Id: 1, PlaceAddress: 1, PlaceCityId: 1, PlaceCode: 1, PlaceContractId: 1, PlaceCreatedBy: 1, PlaceCreatedDate: 1, PlaceDistrictId: 1, PlaceId: 1, PlaceLength: 1, PlaceLinkGoogleMap: 1, PlaceStatus: 1, PlaceTimeOpenFrom: 1, PlaceTimeOpenTo: 1, PlaceTimeOpening: 1, PlaceTimeOpeningDate: 1, PlaceTotalArea: 1, PlaceTotalCustomer: 1, PlaceUpdateDate: 1, PlaceUpdatedBy: 1, PlaceWidth: 1, ToDate: 1, UpdateBy: 1, UpdatedDate: 1 }, TblAssignCampaing: { Id: 1 }, TblBranch: { Code: 1, Id: 1, Name: 1 }, TblCampaign: { Id: 1 }, TblCampaignType: { Id: 1 }, TblCity: { Code: 1, ECCode: 1, EnName: 1, Id: 1, Name: 1 }, TblContract: { AccountBankNo: 1, AccountName: 1, AddressOfOwner: 1, AddressOfOwner2nd: 1, BankName: 1, BeginDate: 1, BuyOrRent: 1, CertificateCity: 1, CertificateDate: 1, CertificateNo: 1, CityId: 1, ContractAmt: 1, ContractAmtString: 1, ContractName: 1, CreatedBy: 1, CreatedDate: 1, CurrentAddressOfOwner: 1, CurrentAddressOfOwner2nd: 1, DateSign: 1, DistrictId: 1, ECPayAddress: 1, ECPayBankName: 1, ECPayBankNameBranch: 1, ECPayBankNo: 1, ECPayCompanyName: 1, ECPayPhone: 1, EcPayAuthorityDate: 1, EcPayAuthorityNo: 1, EcPayPerson: 1, EcPayPosition: 1, EmailOfOwner: 1, EndDate: 1, File1: 1, File2: 1, File3: 1, File4: 1, File5: 1, File6: 1, File7: 1, FileContractUpload: 1, FromDate: 1, Id: 1, IdentifyNo: 1, IdentifyNo2nd: 1, IdentifyType: 1, IdentifyType2nd: 1, IsCompleted: 1, ListDetail: 1, ListSchedule: 1, Month: 1, NameOfOwner: 1, NameOfOwner2nd: 1, No: 1, Paid: 1, PaymentMethod: 1, PhoneOfOwner: 1, PhoneOfOwner2nd: 1, PlaceAddress: 1, PlaceAreaIdPic: 1, PlaceBatchNo: 1, PlaceBranchIdPic: 1, PlaceCityId: 1, PlaceCode: 1, PlaceContractId: 1, PlaceCreatedBy: 1, PlaceCreatedDate: 1, PlaceDateDeposit: 1, PlaceDeposit: 1, PlaceDepositAmt: 1, PlaceDescription: 1, PlaceDistrictId: 1, PlaceEmployeePicCode: 1, PlaceEmployeePicEmail: 1, PlaceEmployeePicName: 1, PlaceEmployeePicPhone: 1, PlaceEmployeePicWalletNo: 1, PlaceHasDeposit: 1, PlaceId: 1, PlaceImportBy: 1, PlaceImportDate: 1, PlaceLength: 1, PlaceLinkGoogleMap: 1, PlaceMonthRent: 1, PlaceNameOfOwner: 1, PlaceNote: 1, PlacePhoneOfOwner: 1, PlacePriceBuy: 1, PlacePriceRent: 1, PlaceRequireDateDeposit: 1, PlaceRequireDeposit: 1, PlaceRequireDepositAmt: 1, PlaceStatus: 1, PlaceTimeOpenFrom: 1, PlaceTimeOpenTo: 1, PlaceTimeOpening: 1, PlaceTimeOpeningDate: 1, PlaceTotalArea: 1, PlaceTotalAreaUse: 1, PlaceTotalCustomer: 1, PlaceType: 1, PlaceUpdateDate: 1, PlaceUpdatedBy: 1, PlaceWardsId: 1, PlaceWidth: 1, RecurringPayment: 1, ReleaseDate: 1, RemainAmt: 1, Remark1: 1, Remark2: 1, Remark3: 1, Remark4: 1, Remark5: 1, Status: 1, ToDate: 1, TotalArea: 1, TotalContractAmt: 1, TypeDescription: 1, TypeId: 1, TypePersonAuthorityNo: 1, TypePersonPosition: 1, TypePersonSign: 1, TypeRemark1: 1, TypeRemark2: 1, TypeRemark3: 1, TypeRemark4: 1, TypeRemark5: 1, TypeTypeName: 1, UpdatedBy: 1, UpdatedDate: 1, WalletName: 1, WalletNo: 1, WardsId: 1, YearBeginRedeal: 1, YearCancel: 1, YearFixPrice: 1 }, TblContractItems: { ContractCreatedBy: 1, ContractCreatedDate: 1, ContractDateSign: 1, ContractFile1: 1, ContractFile2: 1, ContractFile3: 1, ContractFile4: 1, ContractFile5: 1, ContractFile6: 1, ContractFile7: 1, ContractFileContractUpload: 1, ContractId: 1, ContractNameOfOwner: 1, ContractPhoneOfOwner: 1, ContractTypeId: 1, ContractUpdatedBy: 1, ContractUpdatedDate: 1, DetailID: 1, ItemCode: 1, ItemDataType: 1, ItemId: 1, ItemItemGroup: 1, ItemItemName: 1, ItemItemType: 1, ItemUnit: 1, Value: 1 }, TblContractPayment: { ContractCreatedBy: 1, ContractCreatedDate: 1, ContractDateSign: 1, ContractFile1: 1, ContractFile2: 1, ContractFile3: 1, ContractFile4: 1, ContractFile5: 1, ContractFile6: 1, ContractFile7: 1, ContractFileContractUpload: 1, ContractId: 1, ContractNameOfOwner: 1, ContractPhoneOfOwner: 1, ContractTypeId: 1, ContractUpdatedBy: 1, ContractUpdatedDate: 1, CreatedBy: 1, CreatedDate: 1, DatePaid: 1, File1: 1, File2: 1, File3: 1, File4: 1, File5: 1, FileInvoice: 1, Id: 1, InvoiceNo: 1, PaidAmount: 1, PaidBy: 1, Period: 1 }, TblContractSchedule: { Amount: 1, ContarctAccountBankNo: 1, ContarctAccountName: 1, ContarctAddress: 1, ContarctAddressOfOwner: 1, ContarctAddressOfOwner2nd: 1, ContarctBankName: 1, ContarctBeginDate: 1, ContarctBuyOrRent: 1, ContarctCertificateCity: 1, ContarctCertificateDate: 1, ContarctCertificateNo: 1, ContarctCityId: 1, ContarctContractAmt: 1, ContarctCreatedBy: 1, ContarctCreatedDate: 1, ContarctCurrentAddressOfOwner: 1, ContarctCurrentAddressOfOwner2nd: 1, ContarctDateSign: 1, ContarctDistrictId: 1, ContarctEcPayAuthorityDate: 1, ContarctEcPayAuthorityNo: 1, ContarctEcPayPerson: 1, ContarctEcPayPosition: 1, ContarctEmailOfOwner: 1, ContarctFile1: 1, ContarctFile2: 1, ContarctFile3: 1, ContarctFile4: 1, ContarctFile5: 1, ContarctFile6: 1, ContarctFile7: 1, ContarctFileContractUpload: 1, ContarctFromDate: 1, ContarctMonth: 1, ContarctNameOfOwner: 1, ContarctNameOfOwner2nd: 1, ContarctNo: 1, ContarctPaymentMethod: 1, ContarctPhoneOfOwner: 1, ContarctPhoneOfOwner2nd: 1, ContarctPlaceId: 1, ContarctReleaseDate: 1, ContarctRemark1: 1, ContarctRemark2: 1, ContarctRemark3: 1, ContarctRemark4: 1, ContarctRemark5: 1, ContarctToDate: 1, ContarctTotalArea: 1, ContarctTypeId: 1, ContarctUpdatedBy: 1, ContarctUpdatedDate: 1, ContarctWalletName: 1, ContarctWalletNo: 1, ContarctWardsId: 1, ContractId: 1, ContractIdentifyNo: 1, ContractIdentifyNo2nd: 1, ContractIdentifyType: 1, ContractIdentifyType2nd: 1, ContractNo: 1, Date: 1, Id: 1, Times: 1 }, TblContractType: { Code: 1, Description: 1, Id: 1, PersonAuthorityNo: 1, PersonPosition: 1, PersonSign: 1, Remark1: 1, Remark2: 1, Remark3: 1, Remark4: 1, Remark5: 1, Type: 1, TypeName: 1 }, TblDistrict: { CityId: 1, CityName: 1, Code: 1, EnName: 1, Id: 1, Name: 1 }, TblItems: { Code: 1, DataType: 1, Decriptions: 1, Id: 1, ItemGroup: 1, ItemName: 1, ItemType: 1, Unit: 1 }, TblPlaceDetails: { CreatedBy: 1, CreatedDate: 1, Id: 1, ItemCode: 1, ItemDataType: 1, ItemDecriptions: 1, ItemId: 1, ItemItemGroup: 1, ItemItemName: 1, ItemItemType: 1, ItemUnit: 1, Note: 1, PlaceAddress: 1, PlaceCityId: 1, PlaceCode: 1, PlaceContractId: 1, PlaceCreatedBy: 1, PlaceCreatedDate: 1, PlaceDistrictId: 1, PlaceId: 1, PlaceLength: 1, PlaceLinkGoogleMap: 1, PlaceNote: 1, PlaceStatus: 1, PlaceTimeOpenFrom: 1, PlaceTimeOpenTo: 1, PlaceTimeOpening: 1, PlaceTimeOpeningDate: 1, PlaceTotalArea: 1, PlaceTotalAreaUse: 1, PlaceTotalCustomer: 1, PlaceType: 1, PlaceUpdateDate: 1, PlaceUpdatedBy: 1, PlaceWardsId: 1, PlaceWidth: 1, Status: 1, Unit: 1, UpdatedBy: 1, UpdatedDate: 1, Value: 1 }, TblPlaceOfBussiness: { Address: 1, AreaIdPic: 1, BatchNo: 1, BranchIdPic: 1, BranchIdPicName: 1, Ceiling: 1, CityCode: 1, CityEcCode: 1, CityEnName: 1, CityId: 1, CityName: 1, Code: 1, ContractCreatedBy: 1, ContractCreatedDate: 1, ContractDateSign: 1, ContractFile1: 1, ContractFile2: 1, ContractFile3: 1, ContractFile4: 1, ContractFile5: 1, ContractFile6: 1, ContractFile7: 1, ContractFileContractUpload: 1, ContractId: 1, ContractNameOfOwner: 1, ContractNo: 1, ContractPhoneOfOwner: 1, ContractPlaceId: 1, ContractTypeId: 1, ContractUpdatedBy: 1, ContractUpdatedDate: 1, CreatedBy: 1, CreatedDate: 1, DateDeposit: 1, Deposit: 1, DepositAmt: 1, Description: 1, DistrictCityId: 1, DistrictCode: 1, DistrictEnName: 1, DistrictId: 1, DistrictName: 1, Door: 1, EmployeePicCode: 1, EmployeePicEmail: 1, EmployeePicName: 1, EmployeePicPhone: 1, EmployeePicWalletNo: 1, File1: 1, File10: 1, File2: 1, File3: 1, File4: 1, File5: 1, File6: 1, File7: 1, File8: 1, File9: 1, Floor: 1, HasDeposit: 1, Id: 1, ImportBy: 1, ImportDate: 1, Length: 1, LinkGoogleMap: 1, MonthDeposit: 1, MonthRent: 1, MonthRequireDeposit: 1, NameOfOwner: 1, Note: 1, PhoneOfOwner: 1, PriceBuy: 1, PriceRent: 1, RequireDateDeposit: 1, RequireDeposit: 1, RequireDepositAmt: 1, Status: 1, TimeOpenFrom: 1, TimeOpenTo: 1, TimeOpening: 1, TimeOpeningDate: 1, TotalArea: 1, TotalAreaUse: 1, TotalCustomer: 1, Type: 1, UpdateDate: 1, UpdatedBy: 1, Wall: 1, WardsCode: 1, WardsDistrictId: 1, WardsEnName: 1, WardsId: 1, WardsName: 1, Width: 1 }, TblProject: { Code: 1, CreatedBy: 1, CreatedDate: 1, FromDate: 1, Id: 1, InnitiatedDate: 1, IsNeedApprovalForEdit: 1, IsNeedApprovalForNew: 1, IsUse: 1, LevelApprovalForEdit: 1, LevelApprovalForNew: 1, Name: 1, Note: 1, PersonManagement: 1, PersonManagementPhone: 1, PlaceAddress: 1, PlaceAreaIdPic: 1, PlaceBatchNo: 1, PlaceBranchIdPic: 1, PlaceCeiling: 1, PlaceCityId: 1, PlaceCode: 1, PlaceContractId: 1, PlaceCreatedBy: 1, PlaceCreatedDate: 1, PlaceDateDeposit: 1, PlaceDeposit: 1, PlaceDepositAmt: 1, PlaceDescription: 1, PlaceDistrictId: 1, PlaceDoor: 1, PlaceEmployeePicCode: 1, PlaceEmployeePicEmail: 1, PlaceEmployeePicName: 1, PlaceEmployeePicPhone: 1, PlaceEmployeePicWalletNo: 1, PlaceFile1: 1, PlaceFile10: 1, PlaceFile2: 1, PlaceFile3: 1, PlaceFile4: 1, PlaceFile5: 1, PlaceFile6: 1, PlaceFile7: 1, PlaceFile8: 1, PlaceFile9: 1, PlaceFloor: 1, PlaceHasDeposit: 1, PlaceId: 1, PlaceImportBy: 1, PlaceImportDate: 1, PlaceLength: 1, PlaceLinkGoogleMap: 1, PlaceMonthDeposit: 1, PlaceMonthRent: 1, PlaceMonthRequireDeposit: 1, PlaceNameOfOwner: 1, PlaceNote: 1, PlacePhoneOfOwner: 1, PlacePriceBuy: 1, PlacePriceRent: 1, PlaceRequireDateDeposit: 1, PlaceRequireDeposit: 1, PlaceRequireDepositAmt: 1, PlaceStatus: 1, PlaceTimeOpenFrom: 1, PlaceTimeOpenTo: 1, PlaceTimeOpening: 1, PlaceTimeOpeningDate: 1, PlaceTotalArea: 1, PlaceTotalAreaUse: 1, PlaceTotalCustomer: 1, PlaceType: 1, PlaceUpdateDate: 1, PlaceUpdatedBy: 1, PlaceWall: 1, PlaceWardsId: 1, PlaceWidth: 1, ProjectItems: 1, RecordStatus: 1, StatusCreatedBy: 1, StatusCreatedDate: 1, StatusId: 1, StatusName: 1, StatusNextStatus: 1, StatusTypeId: 1, StatusUpdatedBy: 1, StatusUpdatedDate: 1, ToDate: 1, TransactionLocationAreaId: 1, TransactionLocationCode: 1, TransactionLocationCreatedBy: 1, TransactionLocationCreatedDate: 1, TransactionLocationEmployeeCashId: 1, TransactionLocationEmployeeManageId: 1, TransactionLocationId: 1, TransactionLocationName: 1, TransactionLocationOpenFrom: 1, TransactionLocationOpenTo: 1, TransactionLocationOpeningDate: 1, TransactionLocationOpeningTime: 1, TransactionLocationPlaceId: 1, TransactionLocationStatus: 1, TransactionLocationUpdatedBy: 1, TransactionLocationUpdatedDate: 1, UpdatedBy: 1, UpdatedDate: 1 }, TblProjectItem: { Code: 1, CreatedBy: 1, CreatedDate: 1, Decription: 1, FromDate: 1, Id: 1, IsUse: 1, Name: 1, Note: 1, ProcessBar: 1, ProjectCode: 1, ProjectCreatedBy: 1, ProjectCreatedDate: 1, ProjectFromDate: 1, ProjectId: 1, ProjectInnitiatedDate: 1, ProjectName: 1, ProjectNote: 1, ProjectPersonManagement: 1, ProjectPersonManagementPhone: 1, ProjectPlaceId: 1, ProjectStatusId: 1, ProjectToDate: 1, ProjectTransactionLocationId: 1, ProjectUpdatedBy: 1, ProjectUpdatedDate: 1, Quantity: 1, RecordStatus: 1, Status: 1, StatusCreatedBy: 1, StatusCreatedDate: 1, StatusName: 1, StatusNextStatus: 1, StatusTypeId: 1, StatusUpdatedBy: 1, StatusUpdatedDate: 1, ToDate: 1, TotalDays: 1, UnitCode: 1, UnitCreatedBy: 1, UnitCreatedDate: 1, UnitDecription: 1, UnitId: 1, UnitName: 1, UnitRate: 1, UnitUpdatedBy: 1, UnitUpdatedDate: 1, UpdatedBy: 1, UpdatedDate: 1 }, TblStatus: { AllowList: 1, AllowListLevel2: 1, CreatedBy: 1, CreatedDate: 1, Id: 1, IsNew: 1, IsReadOnly: 1, Name: 1, NextStatus: 1, TypeId: 1, UpdatedBy: 1, UpdatedDate: 1 }, TblStatusDetail: { Id: 1, StatusAllowStatusId: 1, StatusCreatedBy: 1, StatusCreatedDate: 1, StatusDetailId: 1, StatusId: 1, StatusIsReadOnly: 1, StatusName: 1, StatusNextStatus: 1, StatusTypeId: 1, StatusUpdatedBy: 1, StatusUpdatedDate: 1 }, TblStatusDetailLevel2: { Id: 1, StatusAllowStatusId: 1, StatusCreatedBy: 1, StatusCreatedDate: 1, StatusDetailId: 1, StatusId: 1, StatusIsNew: 1, StatusIsReadOnly: 1, StatusName: 1, StatusNextStatus: 1, StatusTypeId: 1, StatusUpdatedBy: 1, StatusUpdatedDate: 1 }, TblTransactionLocation: { AreaId: 1, Code: 1, CreatedBy: 1, CreatedDate: 1, EmployeeCashId: 1, EmployeeManageId: 1, Id: 1, Name: 1, OpenFrom: 1, OpenTo: 1, OpeningDate: 1, OpeningTime: 1, PlaceAddress: 1, PlaceCityId: 1, PlaceCode: 1, PlaceContractId: 1, PlaceCreatedBy: 1, PlaceCreatedDate: 1, PlaceDistrictId: 1, PlaceId: 1, PlaceLength: 1, PlaceLinkGoogleMap: 1, PlaceStatus: 1, PlaceTimeOpenFrom: 1, PlaceTimeOpenTo: 1, PlaceTimeOpening: 1, PlaceTimeOpeningDate: 1, PlaceTotalArea: 1, PlaceTotalCustomer: 1, PlaceUpdateDate: 1, PlaceUpdatedBy: 1, PlaceWardsId: 1, PlaceWidth: 1, Status: 1, UpdatedBy: 1, UpdatedDate: 1 }, TblUnit: { Code: 1, CreatedBy: 1, CreatedDate: 1, Decription: 1, Id: 1, Name: 1, Rate: 1, UpdatedBy: 1, UpdatedDate: 1 }, TblWards: { Code: 1, DistrictCityId: 1, DistrictEnName: 1, DistrictId: 1, DistrictName: 1, EnName: 1, Id: 1, Name: 1 }, TemplateEmail: { Bcc: 1, Cc: 1, Id: 1, Name: 1, To: 1 } } }, Forms: { Membership: { ChangePassword: { FormTitle: 1, SubmitButton: 1, Success: 1 }, ForgotPassword: { BackToLogin: 1, FormInfo: 1, FormTitle: 1, SubmitButton: 1, Success: 1 }, Login: { FacebookButton: 1, ForgotPassword: 1, FormTitle: 1, GoogleButton: 1, OR: 1, RememberMe: 1, SignInButton: 1, SignUpButton: 1 }, ResetPassword: { BackToLogin: 1, EmailSubject: 1, FormTitle: 1, SubmitButton: 1, Success: 1 }, SignUp: { AcceptTerms: 1, ActivateEmailSubject: 1, ActivationCompleteMessage: 1, BackToLogin: 1, ConfirmEmail: 1, ConfirmPassword: 1, DisplayName: 1, Email: 1, FormInfo: 1, FormTitle: 1, Password: 1, SubmitButton: 1, Success: 1 } } }, Site: { AccessDenied: { ClickToChangeUser: 1, ClickToLogin: 1, LackPermissions: 1, NotLoggedIn: 1, PageTitle: 1 }, BasicProgressDialog: { CancelTitle: 1, PleaseWait: 1 }, BulkServiceAction: { AllHadErrorsFormat: 1, AllSuccessFormat: 1, ConfirmationFormat: 1, ErrorCount: 1, NothingToProcess: 1, SomeHadErrorsFormat: 1, SuccessCount: 1 }, Dashboard: { ContentDescription: 1 }, Layout: { FooterCopyright: 1, FooterInfo: 1, FooterRights: 1, GeneralSettings: 1, Language: 1, Theme: 1, ThemeBlack: 1, ThemeBlackLight: 1, ThemeBlue: 1, ThemeBlueLight: 1, ThemeGreen: 1, ThemeGreenLight: 1, ThemePurple: 1, ThemePurpleLight: 1, ThemeRed: 1, ThemeRedLight: 1, ThemeYellow: 1, ThemeYellowLight: 1 }, RolePermissionDialog: { DialogTitle: 1, EditButton: 1, SaveSuccess: 1 }, UserDialog: { EditPermissionsButton: 1, EditRolesButton: 1 }, UserPermissionDialog: { DialogTitle: 1, Grant: 1, Permission: 1, Revoke: 1, SaveSuccess: 1 }, UserRoleDialog: { DialogTitle: 1, SaveSuccess: 1 }, ValidationError: { Title: 1 } }, Validation: { AuthenticationError: 1, CantFindUserWithEmail: 1, CurrentPasswordMismatch: 1, DeleteForeignKeyError: 1, EmailConfirm: 1, EmailInUse: 1, InvalidActivateToken: 1, InvalidResetToken: 1, MinRequiredPasswordLength: 1, SavePrimaryKeyError: 1 } });
    })(Texts = ECNET.Texts || (ECNET.Texts = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Web;
    (function (Web) {
        var Modules;
        (function (Modules) {
            var Administration;
            (function (Administration) {
                var Common;
                (function (Common) {
                    var LevelApproval;
                    (function (LevelApproval) {
                        LevelApproval[LevelApproval["LV1"] = 1] = "LV1";
                        LevelApproval[LevelApproval["LV2"] = 2] = "LV2";
                        LevelApproval[LevelApproval["LV3"] = 3] = "LV3";
                    })(LevelApproval = Common.LevelApproval || (Common.LevelApproval = {}));
                    Serenity.Decorators.registerEnumType(LevelApproval, 'ECNET.Web.Modules.Administration.Common.LevelApproval', 'Ecnet.LevelApproval');
                })(Common = Administration.Common || (Administration.Common = {}));
            })(Administration = Modules.Administration || (Modules.Administration = {}));
        })(Modules = Web.Modules || (Web.Modules = {}));
    })(Web = ECNET.Web || (ECNET.Web = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Web;
    (function (Web) {
        var Modules;
        (function (Modules) {
            var Office;
            (function (Office) {
                var Common;
                (function (Common) {
                    var DataType;
                    (function (DataType) {
                        DataType[DataType["Int"] = 1] = "Int";
                        DataType[DataType["String"] = 2] = "String";
                        DataType[DataType["Date"] = 3] = "Date";
                    })(DataType = Common.DataType || (Common.DataType = {}));
                    Serenity.Decorators.registerEnumType(DataType, 'ECNET.Web.Modules.Office.Common.DataType', 'Ecnet.DataType');
                })(Common = Office.Common || (Office.Common = {}));
            })(Office = Modules.Office || (Modules.Office = {}));
        })(Modules = Web.Modules || (Web.Modules = {}));
    })(Web = ECNET.Web || (ECNET.Web = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Web;
    (function (Web) {
        var Modules;
        (function (Modules) {
            var Office;
            (function (Office) {
                var Common;
                (function (Common) {
                    var IdentifyType;
                    (function (IdentifyType) {
                        IdentifyType[IdentifyType["CMND"] = 1] = "CMND";
                        IdentifyType[IdentifyType["PASSPORT"] = 2] = "PASSPORT";
                        IdentifyType[IdentifyType["CCCD"] = 3] = "CCCD";
                    })(IdentifyType = Common.IdentifyType || (Common.IdentifyType = {}));
                    Serenity.Decorators.registerEnumType(IdentifyType, 'ECNET.Web.Modules.Office.Common.IdentifyType', 'Ecnet.IdentifyType');
                })(Common = Office.Common || (Office.Common = {}));
            })(Office = Modules.Office || (Modules.Office = {}));
        })(Modules = Web.Modules || (Web.Modules = {}));
    })(Web = ECNET.Web || (ECNET.Web = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Web;
    (function (Web) {
        var Modules;
        (function (Modules) {
            var Office;
            (function (Office) {
                var Common;
                (function (Common) {
                    var ItemGroup;
                    (function (ItemGroup) {
                        ItemGroup[ItemGroup["Rent"] = 1] = "Rent";
                        ItemGroup[ItemGroup["Buy"] = 2] = "Buy";
                    })(ItemGroup = Common.ItemGroup || (Common.ItemGroup = {}));
                    Serenity.Decorators.registerEnumType(ItemGroup, 'ECNET.Web.Modules.Office.Common.ItemGroup', 'Ecnet.ItemGroup');
                })(Common = Office.Common || (Office.Common = {}));
            })(Office = Modules.Office || (Modules.Office = {}));
        })(Modules = Web.Modules || (Web.Modules = {}));
    })(Web = ECNET.Web || (ECNET.Web = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Web;
    (function (Web) {
        var Modules;
        (function (Modules) {
            var Office;
            (function (Office) {
                var Common;
                (function (Common) {
                    var PaymentMethod;
                    (function (PaymentMethod) {
                        PaymentMethod[PaymentMethod["CASH"] = 1] = "CASH";
                        PaymentMethod[PaymentMethod["TRANF"] = 2] = "TRANF";
                        PaymentMethod[PaymentMethod["WALL"] = 3] = "WALL";
                    })(PaymentMethod = Common.PaymentMethod || (Common.PaymentMethod = {}));
                    Serenity.Decorators.registerEnumType(PaymentMethod, 'ECNET.Web.Modules.Office.Common.PaymentMethod', 'Ecnet.PaymentMethod');
                })(Common = Office.Common || (Office.Common = {}));
            })(Office = Modules.Office || (Modules.Office = {}));
        })(Modules = Web.Modules || (Web.Modules = {}));
    })(Web = ECNET.Web || (ECNET.Web = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Web;
    (function (Web) {
        var Modules;
        (function (Modules) {
            var Office;
            (function (Office) {
                var Common;
                (function (Common) {
                    var Status;
                    (function (Status) {
                        Status[Status["New"] = 1] = "New";
                        Status[Status["Approve"] = 2] = "Approve";
                        Status[Status["Reject"] = 3] = "Reject";
                        Status[Status["Canncel"] = 4] = "Canncel";
                        Status[Status["Completed"] = 5] = "Completed";
                    })(Status = Common.Status || (Common.Status = {}));
                    Serenity.Decorators.registerEnumType(Status, 'ECNET.Web.Modules.Office.Common.Status', 'Ecnet.Status');
                })(Common = Office.Common || (Office.Common = {}));
            })(Office = Modules.Office || (Modules.Office = {}));
        })(Modules = Web.Modules || (Web.Modules = {}));
    })(Web = ECNET.Web || (ECNET.Web = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Web;
    (function (Web) {
        var Modules;
        (function (Modules) {
            var Office;
            (function (Office) {
                var Common;
                (function (Common) {
                    var StatusRecord;
                    (function (StatusRecord) {
                        StatusRecord[StatusRecord["NEW"] = 0] = "NEW";
                        StatusRecord[StatusRecord["APPROVE"] = 1] = "APPROVE";
                        StatusRecord[StatusRecord["REJECT"] = 2] = "REJECT";
                        StatusRecord[StatusRecord["RETRY"] = 3] = "RETRY";
                    })(StatusRecord = Common.StatusRecord || (Common.StatusRecord = {}));
                    Serenity.Decorators.registerEnumType(StatusRecord, 'ECNET.Web.Modules.Office.Common.StatusRecord', 'Ecnet.StatusRecord');
                })(Common = Office.Common || (Office.Common = {}));
            })(Office = Modules.Office || (Modules.Office = {}));
        })(Modules = Web.Modules || (Web.Modules = {}));
    })(Web = ECNET.Web || (ECNET.Web = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Web;
    (function (Web) {
        var Modules;
        (function (Modules) {
            var Office;
            (function (Office) {
                var Common;
                (function (Common) {
                    var StatusType;
                    (function (StatusType) {
                        StatusType[StatusType["Place"] = 1] = "Place";
                        StatusType[StatusType["Contract"] = 2] = "Contract";
                        StatusType[StatusType["Project"] = 3] = "Project";
                        StatusType[StatusType["ProjectItem"] = 4] = "ProjectItem";
                    })(StatusType = Common.StatusType || (Common.StatusType = {}));
                    Serenity.Decorators.registerEnumType(StatusType, 'ECNET.Web.Modules.Office.Common.StatusType', 'Ecnet.StatusType');
                })(Common = Office.Common || (Office.Common = {}));
            })(Office = Modules.Office || (Modules.Office = {}));
        })(Modules = Web.Modules || (Web.Modules = {}));
    })(Web = ECNET.Web || (ECNET.Web = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Web;
    (function (Web) {
        var Modules;
        (function (Modules) {
            var Office;
            (function (Office) {
                var Common;
                (function (Common) {
                    var TotalCustomer;
                    (function (TotalCustomer) {
                        TotalCustomer[TotalCustomer["Value1"] = 1] = "Value1";
                        TotalCustomer[TotalCustomer["Value2"] = 2] = "Value2";
                        TotalCustomer[TotalCustomer["Value3"] = 3] = "Value3";
                        TotalCustomer[TotalCustomer["Value4"] = 4] = "Value4";
                        TotalCustomer[TotalCustomer["Value5"] = 5] = "Value5";
                        TotalCustomer[TotalCustomer["Value6"] = 6] = "Value6";
                        TotalCustomer[TotalCustomer["Value7"] = 7] = "Value7";
                        TotalCustomer[TotalCustomer["Value8"] = 8] = "Value8";
                        TotalCustomer[TotalCustomer["Value9"] = 9] = "Value9";
                        TotalCustomer[TotalCustomer["Value10"] = 10] = "Value10";
                    })(TotalCustomer = Common.TotalCustomer || (Common.TotalCustomer = {}));
                    Serenity.Decorators.registerEnumType(TotalCustomer, 'ECNET.Web.Modules.Office.Common.TotalCustomer', 'Ecnet.TotalCustomer');
                })(Common = Office.Common || (Office.Common = {}));
            })(Office = Modules.Office || (Modules.Office = {}));
        })(Modules = Web.Modules || (Web.Modules = {}));
    })(Web = ECNET.Web || (ECNET.Web = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Web;
    (function (Web) {
        var Modules;
        (function (Modules) {
            var Office;
            (function (Office) {
                var Common;
                (function (Common) {
                    var TypeApprove;
                    (function (TypeApprove) {
                        TypeApprove[TypeApprove["Place"] = 1] = "Place";
                        TypeApprove[TypeApprove["Contract"] = 2] = "Contract";
                        TypeApprove[TypeApprove["Project"] = 3] = "Project";
                    })(TypeApprove = Common.TypeApprove || (Common.TypeApprove = {}));
                    Serenity.Decorators.registerEnumType(TypeApprove, 'ECNET.Web.Modules.Office.Common.TypeApprove', 'Ecnet.TypeApprove');
                })(Common = Office.Common || (Office.Common = {}));
            })(Office = Modules.Office || (Modules.Office = {}));
        })(Modules = Web.Modules || (Web.Modules = {}));
    })(Web = ECNET.Web || (ECNET.Web = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Web;
    (function (Web) {
        var Modules;
        (function (Modules) {
            var Office;
            (function (Office) {
                var Common;
                (function (Common) {
                    var TypeOfItem;
                    (function (TypeOfItem) {
                        TypeOfItem[TypeOfItem["Place"] = 1] = "Place";
                        TypeOfItem[TypeOfItem["Contract"] = 2] = "Contract";
                    })(TypeOfItem = Common.TypeOfItem || (Common.TypeOfItem = {}));
                    Serenity.Decorators.registerEnumType(TypeOfItem, 'ECNET.Web.Modules.Office.Common.TypeOfItem', 'Ecnet.TypeOfItem');
                })(Common = Office.Common || (Office.Common = {}));
            })(Office = Modules.Office || (Modules.Office = {}));
        })(Modules = Web.Modules || (Web.Modules = {}));
    })(Web = ECNET.Web || (ECNET.Web = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Web;
    (function (Web) {
        var Modules;
        (function (Modules) {
            var Office;
            (function (Office) {
                var Common;
                (function (Common) {
                    var TypeOfPlace;
                    (function (TypeOfPlace) {
                        TypeOfPlace[TypeOfPlace["Rent"] = 1] = "Rent";
                        TypeOfPlace[TypeOfPlace["Buy"] = 2] = "Buy";
                    })(TypeOfPlace = Common.TypeOfPlace || (Common.TypeOfPlace = {}));
                    Serenity.Decorators.registerEnumType(TypeOfPlace, 'ECNET.Web.Modules.Office.Common.TypeOfPlace', 'Ecnet.TypeOfPlace');
                })(Common = Office.Common || (Office.Common = {}));
            })(Office = Modules.Office || (Modules.Office = {}));
        })(Modules = Web.Modules || (Web.Modules = {}));
    })(Web = ECNET.Web || (ECNET.Web = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Web;
    (function (Web) {
        var Modules;
        (function (Modules) {
            var Office;
            (function (Office) {
                var Common;
                (function (Common) {
                    var YesNo;
                    (function (YesNo) {
                        YesNo[YesNo["Yes"] = 1] = "Yes";
                        YesNo[YesNo["No"] = 2] = "No";
                    })(YesNo = Common.YesNo || (Common.YesNo = {}));
                    Serenity.Decorators.registerEnumType(YesNo, 'ECNET.Web.Modules.Office.Common.YesNo', 'Ecnet.YesNo');
                })(Common = Office.Common || (Office.Common = {}));
            })(Office = Modules.Office || (Modules.Office = {}));
        })(Modules = Web.Modules || (Web.Modules = {}));
    })(Web = ECNET.Web || (ECNET.Web = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var LanguageList;
    (function (LanguageList) {
        function getValue() {
            var result = [];
            for (var _i = 0, _a = ECNET.Administration.LanguageRow.getLookup().items; _i < _a.length; _i++) {
                var k = _a[_i];
                if (k.LanguageId !== 'en') {
                    result.push([k.Id.toString(), k.LanguageName]);
                }
            }
            return result;
        }
        LanguageList.getValue = getValue;
    })(LanguageList = ECNET.LanguageList || (ECNET.LanguageList = {}));
})(ECNET || (ECNET = {}));
/// <reference path="../Common/Helpers/LanguageList.ts" />
var ECNET;
(function (ECNET) {
    var ScriptInitialization;
    (function (ScriptInitialization) {
        Q.Config.responsiveDialogs = true;
        Q.Config.rootNamespaces.push('ECNET');
        Serenity.EntityDialog.defaultLanguageList = ECNET.LanguageList.getValue;
        if ($.fn['colorbox']) {
            $.fn['colorbox'].settings.maxWidth = "95%";
            $.fn['colorbox'].settings.maxHeight = "95%";
        }
        window.onerror = Q.ErrorHandling.runtimeErrorHandler;
    })(ScriptInitialization = ECNET.ScriptInitialization || (ECNET.ScriptInitialization = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var CurrencyFormatter = /** @class */ (function () {
            function CurrencyFormatter() {
            }
            CurrencyFormatter.prototype.format = function (ctx) {
                //If the input is not a float - just bounce it back
                if (isNaN(parseFloat(ctx.value))) {
                    return ctx.value;
                }
                //Use standard currency formatting; This can be modified for other styles (% etc).
                //If no parameters passed then fallback to en-US , USD formatting.
                this.cultureName = this.cultureName ? this.cultureName : 'en-US';
                this.currencyName = this.currencyName ? this.currencyName : 'USD';
                var formatter = new Intl.NumberFormat(this.cultureName, {
                    style: 'currency',
                    currency: this.currencyName,
                    minimumFractionDigits: 0,
                });
                //use the above formatter to return the reformatted value
                var percentValue = formatter.format(Number(ctx.value));
                percentValue = this.currencyName == "VND" ? percentValue.replace("₫", "VNĐ") : percentValue;
                return "<span>" + percentValue + '</span>';
            };
            __decorate([
                Serenity.Decorators.option()
            ], CurrencyFormatter.prototype, "cultureName", void 0);
            __decorate([
                Serenity.Decorators.option()
            ], CurrencyFormatter.prototype, "currencyName", void 0);
            CurrencyFormatter = __decorate([
                Serenity.Decorators.registerFormatter()
            ], CurrencyFormatter);
            return CurrencyFormatter;
        }());
        Office.CurrencyFormatter = CurrencyFormatter;
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Administration;
    (function (Administration) {
        var LanguageDialog = /** @class */ (function (_super) {
            __extends(LanguageDialog, _super);
            function LanguageDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.LanguageForm(_this.idPrefix);
                return _this;
            }
            LanguageDialog.prototype.getFormKey = function () { return Administration.LanguageForm.formKey; };
            LanguageDialog.prototype.getIdProperty = function () { return Administration.LanguageRow.idProperty; };
            LanguageDialog.prototype.getLocalTextPrefix = function () { return Administration.LanguageRow.localTextPrefix; };
            LanguageDialog.prototype.getNameProperty = function () { return Administration.LanguageRow.nameProperty; };
            LanguageDialog.prototype.getService = function () { return Administration.LanguageService.baseUrl; };
            LanguageDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], LanguageDialog);
            return LanguageDialog;
        }(Serenity.EntityDialog));
        Administration.LanguageDialog = LanguageDialog;
    })(Administration = ECNET.Administration || (ECNET.Administration = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Administration;
    (function (Administration) {
        var LanguageGrid = /** @class */ (function (_super) {
            __extends(LanguageGrid, _super);
            function LanguageGrid(container) {
                return _super.call(this, container) || this;
            }
            LanguageGrid.prototype.getColumnsKey = function () { return "Administration.Language"; };
            LanguageGrid.prototype.getDialogType = function () { return Administration.LanguageDialog; };
            LanguageGrid.prototype.getIdProperty = function () { return Administration.LanguageRow.idProperty; };
            LanguageGrid.prototype.getLocalTextPrefix = function () { return Administration.LanguageRow.localTextPrefix; };
            LanguageGrid.prototype.getService = function () { return Administration.LanguageService.baseUrl; };
            LanguageGrid.prototype.getDefaultSortBy = function () {
                return ["LanguageName" /* LanguageName */];
            };
            LanguageGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], LanguageGrid);
            return LanguageGrid;
        }(Serenity.EntityGrid));
        Administration.LanguageGrid = LanguageGrid;
    })(Administration = ECNET.Administration || (ECNET.Administration = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Administration;
    (function (Administration) {
        var RoleDialog = /** @class */ (function (_super) {
            __extends(RoleDialog, _super);
            function RoleDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.RoleForm(_this.idPrefix);
                return _this;
            }
            RoleDialog.prototype.getFormKey = function () { return Administration.RoleForm.formKey; };
            RoleDialog.prototype.getIdProperty = function () { return Administration.RoleRow.idProperty; };
            RoleDialog.prototype.getLocalTextPrefix = function () { return Administration.RoleRow.localTextPrefix; };
            RoleDialog.prototype.getNameProperty = function () { return Administration.RoleRow.nameProperty; };
            RoleDialog.prototype.getService = function () { return Administration.RoleService.baseUrl; };
            RoleDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push({
                    title: Q.text('Site.RolePermissionDialog.EditButton'),
                    cssClass: 'edit-permissions-button',
                    icon: 'fa-lock text-green',
                    onClick: function () {
                        new Administration.RolePermissionDialog({
                            roleID: _this.entity.RoleId,
                            title: _this.entity.RoleName
                        }).dialogOpen();
                    }
                });
                return buttons;
            };
            RoleDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton("edit-permissions-button").toggleClass("disabled", this.isNewOrDeleted());
            };
            RoleDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], RoleDialog);
            return RoleDialog;
        }(Serenity.EntityDialog));
        Administration.RoleDialog = RoleDialog;
    })(Administration = ECNET.Administration || (ECNET.Administration = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Administration;
    (function (Administration) {
        var RoleGrid = /** @class */ (function (_super) {
            __extends(RoleGrid, _super);
            function RoleGrid(container) {
                return _super.call(this, container) || this;
            }
            RoleGrid.prototype.getColumnsKey = function () { return "Administration.Role"; };
            RoleGrid.prototype.getDialogType = function () { return Administration.RoleDialog; };
            RoleGrid.prototype.getIdProperty = function () { return Administration.RoleRow.idProperty; };
            RoleGrid.prototype.getLocalTextPrefix = function () { return Administration.RoleRow.localTextPrefix; };
            RoleGrid.prototype.getService = function () { return Administration.RoleService.baseUrl; };
            RoleGrid.prototype.getDefaultSortBy = function () {
                return ["RoleName" /* RoleName */];
            };
            RoleGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], RoleGrid);
            return RoleGrid;
        }(Serenity.EntityGrid));
        Administration.RoleGrid = RoleGrid;
    })(Administration = ECNET.Administration || (ECNET.Administration = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Administration;
    (function (Administration) {
        var RolePermissionDialog = /** @class */ (function (_super) {
            __extends(RolePermissionDialog, _super);
            function RolePermissionDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.PermissionCheckEditor(_this.byId('Permissions'), {
                    showRevoke: false
                });
                Administration.RolePermissionService.List({
                    RoleID: _this.options.roleID,
                    Module: null,
                    Submodule: null
                }, function (response) {
                    _this.permissions.value = response.Entities.map(function (x) { return ({ PermissionKey: x }); });
                });
                _this.permissions.implicitPermissions = Q.getRemoteData('Administration.ImplicitPermissions');
                return _this;
            }
            RolePermissionDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [
                    {
                        text: Q.text('Dialogs.OkButton'),
                        click: function (e) {
                            Administration.RolePermissionService.Update({
                                RoleID: _this.options.roleID,
                                Permissions: _this.permissions.value.map(function (x) { return x.PermissionKey; }),
                                Module: null,
                                Submodule: null
                            }, function (response) {
                                _this.dialogClose();
                                window.setTimeout(function () { return Q.notifySuccess(Q.text('Site.RolePermissionDialog.SaveSuccess')); }, 0);
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }
                ];
                opt.title = Q.format(Q.text('Site.RolePermissionDialog.DialogTitle'), this.options.title);
                return opt;
            };
            RolePermissionDialog.prototype.getTemplate = function () {
                return '<div id="~_Permissions"></div>';
            };
            RolePermissionDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], RolePermissionDialog);
            return RolePermissionDialog;
        }(Serenity.TemplatedDialog));
        Administration.RolePermissionDialog = RolePermissionDialog;
    })(Administration = ECNET.Administration || (ECNET.Administration = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Administration;
    (function (Administration) {
        var SergenPanel = /** @class */ (function (_super) {
            __extends(SergenPanel, _super);
            function SergenPanel(container) {
                var _this = _super.call(this, container) || this;
                var vm = new Vue({
                    el: $('<div/>').appendTo(_this.element)[0],
                    data: {
                        connection: "",
                        connections: [],
                        tables: [],
                        generate: {
                            Row: true,
                            Service: true,
                            UI: true
                        }
                    },
                    methods: {
                        generateCode: function (table) {
                            if (!table.Identifier) {
                                Q.notifyError("Identifier cannot be empty!");
                                return;
                            }
                            if (!table.Module) {
                                Q.notifyError("Module cannot be empty!");
                                return;
                            }
                            Administration.SergenService.Generate({
                                ConnectionKey: this.connection,
                                Table: table,
                                GenerateOptions: this.generate
                            }, function (r) {
                                Q.notifySuccess("Code for selected table is generated. You'll need to rebuild your project.");
                            });
                        }
                    },
                    watch: {
                        connection: function (val) {
                            if (!val || !val.length)
                                vm.tables = [];
                            else
                                Administration.SergenService.ListTables({
                                    ConnectionKey: val
                                }, function (response) { return vm.tables = response.Entities; });
                        }
                    },
                    template: Q.getTemplate('Administration.SergenPanel')
                });
                Administration.SergenService.ListConnections({}, function (response) { return vm.connections = response.Entities; });
                return _this;
            }
            return SergenPanel;
        }(Serenity.Widget));
        Administration.SergenPanel = SergenPanel;
    })(Administration = ECNET.Administration || (ECNET.Administration = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Administration;
    (function (Administration) {
        var TranslationGrid = /** @class */ (function (_super) {
            __extends(TranslationGrid, _super);
            function TranslationGrid(container) {
                var _this = _super.call(this, container) || this;
                _this.element.on('keyup.' + _this.uniqueName + ' change.' + _this.uniqueName, 'input.custom-text', function (e) {
                    var value = Q.trimToNull($(e.target).val());
                    if (value === '') {
                        value = null;
                    }
                    _this.view.getItemById($(e.target).data('key')).CustomText = value;
                    _this.hasChanges = true;
                });
                return _this;
            }
            TranslationGrid.prototype.getIdProperty = function () { return "Key"; };
            TranslationGrid.prototype.getLocalTextPrefix = function () { return "Administration.Translation"; };
            TranslationGrid.prototype.getService = function () { return Administration.TranslationService.baseUrl; };
            TranslationGrid.prototype.onClick = function (e, row, cell) {
                var _this = this;
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented()) {
                    return;
                }
                var item = this.itemAt(row);
                var done;
                if ($(e.target).hasClass('source-text')) {
                    e.preventDefault();
                    done = function () {
                        item.CustomText = item.SourceText;
                        _this.view.updateItem(item.Key, item);
                        _this.hasChanges = true;
                    };
                    if (Q.isTrimmedEmpty(item.CustomText) ||
                        (Q.trimToEmpty(item.CustomText) === Q.trimToEmpty(item.SourceText))) {
                        done();
                        return;
                    }
                    Q.confirm(Q.text('Db.Administration.Translation.OverrideConfirmation'), done);
                    return;
                }
                if ($(e.target).hasClass('target-text')) {
                    e.preventDefault();
                    done = function () {
                        item.CustomText = item.TargetText;
                        _this.view.updateItem(item.Key, item);
                        _this.hasChanges = true;
                    };
                    if (Q.isTrimmedEmpty(item.CustomText) ||
                        (Q.trimToEmpty(item.CustomText) === Q.trimToEmpty(item.TargetText))) {
                        done();
                        return;
                    }
                    Q.confirm(Q.text('Db.Administration.Translation.OverrideConfirmation'), done);
                    return;
                }
            };
            TranslationGrid.prototype.getColumns = function () {
                var columns = [];
                columns.push({ field: 'Key', width: 300, sortable: false });
                columns.push({
                    field: 'SourceText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) {
                        return Q.outerHtml($('<a/>')
                            .addClass('source-text')
                            .text(ctx.value || ''));
                    }
                });
                columns.push({
                    field: 'CustomText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) { return Q.outerHtml($('<input/>')
                        .addClass('custom-text')
                        .attr('value', ctx.value)
                        .attr('type', 'text')
                        .attr('data-key', ctx.item.Key)); }
                });
                columns.push({
                    field: 'TargetText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) { return Q.outerHtml($('<a/>')
                        .addClass('target-text')
                        .text(ctx.value || '')); }
                });
                return columns;
            };
            TranslationGrid.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                var opt = {
                    lookupKey: 'Administration.Language'
                };
                this.sourceLanguage = Serenity.Widget.create({
                    type: Serenity.LookupEditor,
                    element: function (el) { return el.appendTo(_this.toolbar.element).attr('placeholder', '--- ' +
                        Q.text('Db.Administration.Translation.SourceLanguage') + ' ---'); },
                    options: opt
                });
                this.sourceLanguage.changeSelect2(function (e) {
                    if (_this.hasChanges) {
                        _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); });
                    }
                    else {
                        _this.refresh();
                    }
                });
                this.targetLanguage = Serenity.Widget.create({
                    type: Serenity.LookupEditor,
                    element: function (el) { return el.appendTo(_this.toolbar.element).attr('placeholder', '--- ' +
                        Q.text('Db.Administration.Translation.TargetLanguage') + ' ---'); },
                    options: opt
                });
                this.targetLanguage.changeSelect2(function (e) {
                    if (_this.hasChanges) {
                        _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); });
                    }
                    else {
                        _this.refresh();
                    }
                });
            };
            TranslationGrid.prototype.saveChanges = function (language) {
                var _this = this;
                var translations = {};
                for (var _i = 0, _a = this.getItems(); _i < _a.length; _i++) {
                    var item = _a[_i];
                    translations[item.Key] = item.CustomText;
                }
                return Promise.resolve(Administration.TranslationService.Update({
                    TargetLanguageID: language,
                    Translations: translations
                })).then(function () {
                    _this.hasChanges = false;
                    language = Q.trimToNull(language) || 'invariant';
                    Q.notifySuccess('User translations in "' + language +
                        '" language are saved to "user.texts.' +
                        language + '.json" ' + 'file under "~/App_Data/texts/"', '');
                });
            };
            TranslationGrid.prototype.onViewSubmit = function () {
                var request = this.view.params;
                request.SourceLanguageID = this.sourceLanguage.value;
                this.targetLanguageKey = this.targetLanguage.value || '';
                request.TargetLanguageID = this.targetLanguageKey;
                this.hasChanges = false;
                return _super.prototype.onViewSubmit.call(this);
            };
            TranslationGrid.prototype.getButtons = function () {
                var _this = this;
                return [{
                        title: Q.text('Db.Administration.Translation.SaveChangesButton'),
                        onClick: function (e) { return _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); }); },
                        cssClass: 'apply-changes-button'
                    }];
            };
            TranslationGrid.prototype.createQuickSearchInput = function () {
                var _this = this;
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, searchText) {
                    _this.searchText = searchText;
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            TranslationGrid.prototype.onViewFilter = function (item) {
                if (!_super.prototype.onViewFilter.call(this, item)) {
                    return false;
                }
                if (!this.searchText) {
                    return true;
                }
                var sd = Select2.util.stripDiacritics;
                var searching = sd(this.searchText).toLowerCase();
                function match(str) {
                    if (!str)
                        return false;
                    return str.toLowerCase().indexOf(searching) >= 0;
                }
                return Q.isEmptyOrNull(searching) || match(item.Key) || match(item.SourceText) ||
                    match(item.TargetText) || match(item.CustomText);
            };
            TranslationGrid.prototype.usePager = function () {
                return false;
            };
            TranslationGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TranslationGrid);
            return TranslationGrid;
        }(Serenity.EntityGrid));
        Administration.TranslationGrid = TranslationGrid;
    })(Administration = ECNET.Administration || (ECNET.Administration = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Administration;
    (function (Administration) {
        var UserDialog = /** @class */ (function (_super) {
            __extends(UserDialog, _super);
            function UserDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Administration.UserForm(_this.idPrefix);
                _this.form.Password.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.Password.value.length < 7)
                        return "Password must be at least 7 characters!";
                });
                _this.form.PasswordConfirm.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.Password.value != _this.form.PasswordConfirm.value)
                        return "The passwords entered doesn't match!";
                });
                return _this;
            }
            UserDialog.prototype.getFormKey = function () { return Administration.UserForm.formKey; };
            UserDialog.prototype.getIdProperty = function () { return Administration.UserRow.idProperty; };
            UserDialog.prototype.getIsActiveProperty = function () { return Administration.UserRow.isActiveProperty; };
            UserDialog.prototype.getLocalTextPrefix = function () { return Administration.UserRow.localTextPrefix; };
            UserDialog.prototype.getNameProperty = function () { return Administration.UserRow.nameProperty; };
            UserDialog.prototype.getService = function () { return Administration.UserService.baseUrl; };
            UserDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push({
                    title: Q.text('Site.UserDialog.EditRolesButton'),
                    cssClass: 'edit-roles-button',
                    icon: 'fa-users text-blue',
                    onClick: function () {
                        new Administration.UserRoleDialog({
                            userID: _this.entity.UserId,
                            username: _this.entity.Username
                        }).dialogOpen();
                    }
                });
                buttons.push({
                    title: Q.text('Site.UserDialog.EditPermissionsButton'),
                    cssClass: 'edit-permissions-button',
                    icon: 'fa-lock text-green',
                    onClick: function () {
                        new Administration.UserPermissionDialog({
                            userID: _this.entity.UserId,
                            username: _this.entity.Username
                        }).dialogOpen();
                    }
                });
                return buttons;
            };
            UserDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton('edit-roles-button').toggleClass('disabled', this.isNewOrDeleted());
                this.toolbar.findButton("edit-permissions-button").toggleClass("disabled", this.isNewOrDeleted());
                var CurrentUser = Q.Authorization.username;
                var username = this.form.Username.value;
                if (CurrentUser != 'admin' && username == 'admin') {
                    this.readOnly = true;
                    this.toolbar.findButton('edit-roles-button').toggleClass('disabled', true);
                    this.toolbar.findButton("edit-permissions-button").toggleClass("disabled", true);
                }
            };
            UserDialog.prototype.afterLoadEntity = function () {
                _super.prototype.afterLoadEntity.call(this);
                // these fields are only required in new record mode
                this.form.Password.element.toggleClass('required', this.isNew())
                    .closest('.field').find('sup').toggle(this.isNew());
                this.form.PasswordConfirm.element.toggleClass('required', this.isNew())
                    .closest('.field').find('sup').toggle(this.isNew());
            };
            UserDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserDialog);
            return UserDialog;
        }(Serenity.EntityDialog));
        Administration.UserDialog = UserDialog;
    })(Administration = ECNET.Administration || (ECNET.Administration = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Administration;
    (function (Administration) {
        var UserGrid = /** @class */ (function (_super) {
            __extends(UserGrid, _super);
            function UserGrid(container) {
                return _super.call(this, container) || this;
            }
            UserGrid.prototype.getColumnsKey = function () { return "Administration.User"; };
            UserGrid.prototype.getDialogType = function () { return Administration.UserDialog; };
            UserGrid.prototype.getIdProperty = function () { return Administration.UserRow.idProperty; };
            UserGrid.prototype.getIsActiveProperty = function () { return Administration.UserRow.isActiveProperty; };
            UserGrid.prototype.getLocalTextPrefix = function () { return Administration.UserRow.localTextPrefix; };
            UserGrid.prototype.getService = function () { return Administration.UserService.baseUrl; };
            UserGrid.prototype.getDefaultSortBy = function () {
                return ["Username" /* Username */];
            };
            UserGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], UserGrid);
            return UserGrid;
        }(Serenity.EntityGrid));
        Administration.UserGrid = UserGrid;
    })(Administration = ECNET.Administration || (ECNET.Administration = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Administration;
    (function (Administration) {
        var PermissionCheckEditor = /** @class */ (function (_super) {
            __extends(PermissionCheckEditor, _super);
            function PermissionCheckEditor(container, opt) {
                var _this = _super.call(this, container, opt) || this;
                _this._rolePermissions = {};
                _this._implicitPermissions = {};
                var titleByKey = {};
                var permissionKeys = _this.getSortedGroupAndPermissionKeys(titleByKey);
                var items = permissionKeys.map(function (key) { return ({
                    Key: key,
                    ParentKey: _this.getParentKey(key),
                    Title: titleByKey[key],
                    GrantRevoke: null,
                    IsGroup: key.charAt(key.length - 1) === ':'
                }); });
                _this.byParentKey = Q.toGrouping(items, function (x) { return x.ParentKey; });
                _this.setItems(items);
                return _this;
            }
            PermissionCheckEditor.prototype.getIdProperty = function () { return "Key"; };
            PermissionCheckEditor.prototype.getItemGrantRevokeClass = function (item, grant) {
                if (!item.IsGroup) {
                    return ((item.GrantRevoke === grant) ? ' checked' : '');
                }
                var desc = this.getDescendants(item, true);
                var granted = desc.filter(function (x) { return x.GrantRevoke === grant; });
                if (!granted.length) {
                    return '';
                }
                if (desc.length === granted.length) {
                    return 'checked';
                }
                return 'checked partial';
            };
            PermissionCheckEditor.prototype.roleOrImplicit = function (key) {
                if (this._rolePermissions[key])
                    return true;
                for (var _i = 0, _a = Object.keys(this._rolePermissions); _i < _a.length; _i++) {
                    var k = _a[_i];
                    var d = this._implicitPermissions[k];
                    if (d && d[key])
                        return true;
                }
                for (var _b = 0, _c = Object.keys(this._implicitPermissions); _b < _c.length; _b++) {
                    var i = _c[_b];
                    var item = this.view.getItemById(i);
                    if (item && item.GrantRevoke == true) {
                        var d = this._implicitPermissions[i];
                        if (d && d[key])
                            return true;
                    }
                }
            };
            PermissionCheckEditor.prototype.getItemEffectiveClass = function (item) {
                var _this = this;
                if (item.IsGroup) {
                    var desc = this.getDescendants(item, true);
                    var grantCount = Q.count(desc, function (x) { return x.GrantRevoke === true ||
                        (x.GrantRevoke == null && _this.roleOrImplicit(x.Key)); });
                    if (grantCount === desc.length || desc.length === 0) {
                        return 'allow';
                    }
                    if (grantCount === 0) {
                        return 'deny';
                    }
                    return 'partial';
                }
                var granted = item.GrantRevoke === true ||
                    (item.GrantRevoke == null && this.roleOrImplicit(item.Key));
                return (granted ? ' allow' : ' deny');
            };
            PermissionCheckEditor.prototype.getColumns = function () {
                var _this = this;
                var columns = [{
                        name: Q.text('Site.UserPermissionDialog.Permission'),
                        field: 'Title',
                        format: Serenity.SlickFormatting.treeToggle(function () { return _this.view; }, function (x) { return x.Key; }, function (ctx) {
                            var item = ctx.item;
                            var klass = _this.getItemEffectiveClass(item);
                            return '<span class="effective-permission ' + klass + '">' + Q.htmlEncode(ctx.value) + '</span>';
                        }),
                        width: 495,
                        sortable: false
                    }, {
                        name: Q.text('Site.UserPermissionDialog.Grant'), field: 'Grant',
                        format: function (ctx) {
                            var item1 = ctx.item;
                            var klass1 = _this.getItemGrantRevokeClass(item1, true);
                            return "<span class='check-box grant no-float " + klass1 + "'></span>";
                        },
                        width: 65,
                        sortable: false,
                        headerCssClass: 'align-center',
                        cssClass: 'align-center'
                    }];
                if (this.options.showRevoke) {
                    columns.push({
                        name: Q.text('Site.UserPermissionDialog.Revoke'), field: 'Revoke',
                        format: function (ctx) {
                            var item2 = ctx.item;
                            var klass2 = _this.getItemGrantRevokeClass(item2, false);
                            return '<span class="check-box revoke no-float ' + klass2 + '"></span>';
                        },
                        width: 65,
                        sortable: false,
                        headerCssClass: 'align-center',
                        cssClass: 'align-center'
                    });
                }
                return columns;
            };
            PermissionCheckEditor.prototype.setItems = function (items) {
                Serenity.SlickTreeHelper.setIndents(items, function (x) { return x.Key; }, function (x) { return x.ParentKey; }, false);
                this.view.setItems(items, true);
            };
            PermissionCheckEditor.prototype.onViewSubmit = function () {
                return false;
            };
            PermissionCheckEditor.prototype.onViewFilter = function (item) {
                var _this = this;
                if (!_super.prototype.onViewFilter.call(this, item)) {
                    return false;
                }
                if (!Serenity.SlickTreeHelper.filterById(item, this.view, function (x) { return x.ParentKey; }))
                    return false;
                if (this.searchText) {
                    return this.matchContains(item) || item.IsGroup && Q.any(this.getDescendants(item, false), function (x) { return _this.matchContains(x); });
                }
                return true;
            };
            PermissionCheckEditor.prototype.matchContains = function (item) {
                return Select2.util.stripDiacritics(item.Title || '').toLowerCase().indexOf(this.searchText) >= 0;
            };
            PermissionCheckEditor.prototype.getDescendants = function (item, excludeGroups) {
                var result = [];
                var stack = [item];
                while (stack.length > 0) {
                    var i = stack.pop();
                    var children = this.byParentKey[i.Key];
                    if (!children)
                        continue;
                    for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
                        var child = children_1[_i];
                        if (!excludeGroups || !child.IsGroup) {
                            result.push(child);
                        }
                        stack.push(child);
                    }
                }
                return result;
            };
            PermissionCheckEditor.prototype.onClick = function (e, row, cell) {
                _super.prototype.onClick.call(this, e, row, cell);
                if (!e.isDefaultPrevented()) {
                    Serenity.SlickTreeHelper.toggleClick(e, row, cell, this.view, function (x) { return x.Key; });
                }
                if (e.isDefaultPrevented()) {
                    return;
                }
                var target = $(e.target);
                var grant = target.hasClass('grant');
                if (grant || target.hasClass('revoke')) {
                    e.preventDefault();
                    var item = this.itemAt(row);
                    var checkedOrPartial = target.hasClass('checked') || target.hasClass('partial');
                    if (checkedOrPartial) {
                        grant = null;
                    }
                    else {
                        grant = grant !== checkedOrPartial;
                    }
                    if (item.IsGroup) {
                        for (var _i = 0, _a = this.getDescendants(item, true); _i < _a.length; _i++) {
                            var d = _a[_i];
                            d.GrantRevoke = grant;
                        }
                    }
                    else
                        item.GrantRevoke = grant;
                    this.slickGrid.invalidate();
                }
            };
            PermissionCheckEditor.prototype.getParentKey = function (key) {
                if (key.charAt(key.length - 1) === ':') {
                    key = key.substr(0, key.length - 1);
                }
                var idx = key.lastIndexOf(':');
                if (idx >= 0) {
                    return key.substr(0, idx + 1);
                }
                return null;
            };
            PermissionCheckEditor.prototype.getButtons = function () {
                return [];
            };
            PermissionCheckEditor.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, text) {
                    _this.searchText = Select2.util.stripDiacritics(Q.trimToNull(text) || '').toLowerCase();
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            PermissionCheckEditor.prototype.getSortedGroupAndPermissionKeys = function (titleByKey) {
                var keys = Q.getRemoteData('Administration.PermissionKeys').Entities;
                var titleWithGroup = {};
                for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                    var k = keys_1[_i];
                    var s = k;
                    if (!s) {
                        continue;
                    }
                    if (s.charAt(s.length - 1) == ':') {
                        s = s.substr(0, s.length - 1);
                        if (s.length === 0) {
                            continue;
                        }
                    }
                    if (titleByKey[s]) {
                        continue;
                    }
                    titleByKey[s] = Q.coalesce(Q.tryGetText('Permission.' + s), s);
                    var parts = s.split(':');
                    var group = '';
                    var groupTitle = '';
                    for (var i = 0; i < parts.length - 1; i++) {
                        group = group + parts[i] + ':';
                        var txt = Q.tryGetText('Permission.' + group);
                        if (txt == null) {
                            txt = parts[i];
                        }
                        titleByKey[group] = txt;
                        groupTitle = groupTitle + titleByKey[group] + ':';
                        titleWithGroup[group] = groupTitle;
                    }
                    titleWithGroup[s] = groupTitle + titleByKey[s];
                }
                keys = Object.keys(titleByKey);
                keys = keys.sort(function (x, y) { return Q.turkishLocaleCompare(titleWithGroup[x], titleWithGroup[y]); });
                return keys;
            };
            Object.defineProperty(PermissionCheckEditor.prototype, "value", {
                get: function () {
                    var result = [];
                    for (var _i = 0, _a = this.view.getItems(); _i < _a.length; _i++) {
                        var item = _a[_i];
                        if (item.GrantRevoke != null && item.Key.charAt(item.Key.length - 1) != ':') {
                            result.push({ PermissionKey: item.Key, Granted: item.GrantRevoke });
                        }
                    }
                    return result;
                },
                set: function (value) {
                    for (var _i = 0, _a = this.view.getItems(); _i < _a.length; _i++) {
                        var item = _a[_i];
                        item.GrantRevoke = null;
                    }
                    if (value != null) {
                        for (var _b = 0, value_1 = value; _b < value_1.length; _b++) {
                            var row = value_1[_b];
                            var r = this.view.getItemById(row.PermissionKey);
                            if (r) {
                                r.GrantRevoke = Q.coalesce(row.Granted, true);
                            }
                        }
                    }
                    this.setItems(this.getItems());
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(PermissionCheckEditor.prototype, "rolePermissions", {
                get: function () {
                    return Object.keys(this._rolePermissions);
                },
                set: function (value) {
                    this._rolePermissions = {};
                    if (value) {
                        for (var _i = 0, value_2 = value; _i < value_2.length; _i++) {
                            var k = value_2[_i];
                            this._rolePermissions[k] = true;
                        }
                    }
                    this.setItems(this.getItems());
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(PermissionCheckEditor.prototype, "implicitPermissions", {
                set: function (value) {
                    this._implicitPermissions = {};
                    if (value) {
                        for (var _i = 0, _a = Object.keys(value); _i < _a.length; _i++) {
                            var k = _a[_i];
                            this._implicitPermissions[k] = this._implicitPermissions[k] || {};
                            var l = value[k];
                            if (l) {
                                for (var _b = 0, l_1 = l; _b < l_1.length; _b++) {
                                    var s = l_1[_b];
                                    this._implicitPermissions[k][s] = true;
                                }
                            }
                        }
                    }
                },
                enumerable: true,
                configurable: true
            });
            PermissionCheckEditor = __decorate([
                Serenity.Decorators.registerEditor([Serenity.IGetEditValue, Serenity.ISetEditValue])
            ], PermissionCheckEditor);
            return PermissionCheckEditor;
        }(Serenity.DataGrid));
        Administration.PermissionCheckEditor = PermissionCheckEditor;
    })(Administration = ECNET.Administration || (ECNET.Administration = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Administration;
    (function (Administration) {
        var UserPermissionDialog = /** @class */ (function (_super) {
            __extends(UserPermissionDialog, _super);
            function UserPermissionDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.PermissionCheckEditor(_this.byId('Permissions'), {
                    showRevoke: true
                });
                Administration.UserPermissionService.List({
                    UserID: _this.options.userID,
                    Module: null,
                    Submodule: null
                }, function (response) {
                    _this.permissions.value = response.Entities;
                });
                Administration.UserPermissionService.ListRolePermissions({
                    UserID: _this.options.userID,
                    Module: null,
                    Submodule: null,
                }, function (response) {
                    _this.permissions.rolePermissions = response.Entities;
                });
                _this.permissions.implicitPermissions = Q.getRemoteData('Administration.ImplicitPermissions');
                return _this;
            }
            UserPermissionDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [
                    {
                        text: Q.text('Dialogs.OkButton'),
                        click: function (e) {
                            Administration.UserPermissionService.Update({
                                UserID: _this.options.userID,
                                Permissions: _this.permissions.value,
                                Module: null,
                                Submodule: null
                            }, function (response) {
                                _this.dialogClose();
                                window.setTimeout(function () { return Q.notifySuccess(Q.text('Site.UserPermissionDialog.SaveSuccess')); }, 0);
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }
                ];
                opt.title = Q.format(Q.text('Site.UserPermissionDialog.DialogTitle'), this.options.username);
                return opt;
            };
            UserPermissionDialog.prototype.getTemplate = function () {
                return '<div id="~_Permissions"></div>';
            };
            UserPermissionDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserPermissionDialog);
            return UserPermissionDialog;
        }(Serenity.TemplatedDialog));
        Administration.UserPermissionDialog = UserPermissionDialog;
    })(Administration = ECNET.Administration || (ECNET.Administration = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Administration;
    (function (Administration) {
        var RoleCheckEditor = /** @class */ (function (_super) {
            __extends(RoleCheckEditor, _super);
            function RoleCheckEditor(div) {
                return _super.call(this, div) || this;
            }
            RoleCheckEditor.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, text) {
                    _this.searchText = Select2.util.stripDiacritics(text || '').toUpperCase();
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            RoleCheckEditor.prototype.getButtons = function () {
                return [];
            };
            RoleCheckEditor.prototype.getTreeItems = function () {
                return Administration.RoleRow.getLookup().items.map(function (role) { return ({
                    id: role.RoleId.toString(),
                    text: role.RoleName
                }); });
            };
            RoleCheckEditor.prototype.onViewFilter = function (item) {
                return _super.prototype.onViewFilter.call(this, item) &&
                    (Q.isEmptyOrNull(this.searchText) ||
                        Select2.util.stripDiacritics(item.text || '')
                            .toUpperCase().indexOf(this.searchText) >= 0);
            };
            RoleCheckEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], RoleCheckEditor);
            return RoleCheckEditor;
        }(Serenity.CheckTreeEditor));
        Administration.RoleCheckEditor = RoleCheckEditor;
    })(Administration = ECNET.Administration || (ECNET.Administration = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Administration;
    (function (Administration) {
        var UserRoleDialog = /** @class */ (function (_super) {
            __extends(UserRoleDialog, _super);
            function UserRoleDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.RoleCheckEditor(_this.byId('Roles'));
                Administration.UserRoleService.List({
                    UserID: _this.options.userID
                }, function (response) {
                    _this.permissions.value = response.Entities.map(function (x) { return x.toString(); });
                });
                return _this;
            }
            UserRoleDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [{
                        text: Q.text('Dialogs.OkButton'),
                        click: function () {
                            Q.serviceRequest('Administration/UserRole/Update', {
                                UserID: _this.options.userID,
                                Roles: _this.permissions.value.map(function (x) { return parseInt(x, 10); })
                            }, function (response) {
                                _this.dialogClose();
                                Q.notifySuccess(Q.text('Site.UserRoleDialog.SaveSuccess'));
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }];
                opt.title = Q.format(Q.text('Site.UserRoleDialog.DialogTitle'), this.options.username);
                return opt;
            };
            UserRoleDialog.prototype.getTemplate = function () {
                return "<div id='~_Roles'></div>";
            };
            UserRoleDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserRoleDialog);
            return UserRoleDialog;
        }(Serenity.TemplatedDialog));
        Administration.UserRoleDialog = UserRoleDialog;
    })(Administration = ECNET.Administration || (ECNET.Administration = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Common;
    (function (Common) {
        var DashboardChart = /** @class */ (function (_super) {
            __extends(DashboardChart, _super);
            function DashboardChart() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            DashboardChart.initializeChart = function () {
                $(function () {
                    $(function () {
                        $.ajax({
                            url: '/Dashboard/GetDataDashboardDonutChart',
                            type: 'get',
                            dataType: 'json',
                            success: function (response) {
                                this.dounutChartData = new Morris.Donut({
                                    element: 'sales-chart',
                                    resize: true, parseTime: false,
                                    data: response,
                                    //colors: ["#0080ff", "#00ff40", "#00a65a", "#03ffdd", "#ed3309", "#03ffdd"],
                                    colors: ['#afd8f8', '#4da74d', '#edc240', '#0b62a4', '#7A92A3'],
                                    font: "tohama",
                                    hideHover: 'auto'
                                    //xkey: 'Month',
                                    //ykeys: response.StatusKeys, labels: response.StatusLabels, hideHover: 'auto'
                                });
                            }
                        });
                    });
                    $.ajax({
                        url: '/Dashboard/CountByBranch',
                        type: 'get',
                        dataType: 'json',
                        success: function (response) {
                            this.areaChart = new Morris.Bar({
                                element: 'revenue-chart2',
                                resize: true, parseTime: false,
                                data: response.Values,
                                xkey: 'Month',
                                ykeys: response.StatusKeys, labels: response.StatusLabels, hideHover: 'auto',
                                linecolors: ['#7A92A3', '#0b62a4', '#4da74d', '#afd8f8', '#edc240', '#cb4b4b', '#9440ed']
                            });
                        }
                    });
                });
                //chart4
                $(function () {
                    $.ajax({
                        url: '/Dashboard/SumScheduleByBranch',
                        type: 'get',
                        dataType: 'json',
                        success: function (response) {
                            this.areaChart = new Morris.Line({
                                element: 'bar-chart',
                                resize: true, parseTime: false,
                                data: response.Values,
                                xkey: 'Month',
                                ykeys: response.StatusKeys,
                                labels: response.StatusLabels, hideHover: 'auto',
                                linecolors: ['#7A92A3', '#0b62a4', '#4da74d', '#afd8f8', '#edc240', '#cb4b4b', '#9440ed']
                            });
                        }
                    });
                });
            };
            DashboardChart = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.resizable(),
                Serenity.Decorators.maximizable()
            ], DashboardChart);
            return DashboardChart;
        }(Serenity.TemplatedWidget));
        Common.DashboardChart = DashboardChart;
    })(Common = ECNET.Common || (ECNET.Common = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var BasicProgressDialog = /** @class */ (function (_super) {
        __extends(BasicProgressDialog, _super);
        function BasicProgressDialog() {
            var _this = _super.call(this) || this;
            _this.byId('ProgressBar').progressbar({
                max: 100,
                value: 0,
                change: function (e, v) {
                    _this.byId('ProgressLabel').text(_this.value + ' / ' + _this.max);
                }
            });
            return _this;
        }
        Object.defineProperty(BasicProgressDialog.prototype, "max", {
            get: function () {
                return this.byId('ProgressBar').progressbar().progressbar('option', 'max');
            },
            set: function (value) {
                this.byId('ProgressBar').progressbar().progressbar('option', 'max', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BasicProgressDialog.prototype, "value", {
            get: function () {
                return this.byId('ProgressBar').progressbar('value');
            },
            set: function (value) {
                this.byId('ProgressBar').progressbar().progressbar('value', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BasicProgressDialog.prototype, "title", {
            get: function () {
                return this.element.dialog().dialog('option', 'title');
            },
            set: function (value) {
                this.element.dialog().dialog('option', 'title', value);
            },
            enumerable: true,
            configurable: true
        });
        BasicProgressDialog.prototype.getDialogOptions = function () {
            var _this = this;
            var opt = _super.prototype.getDialogOptions.call(this);
            opt.title = Q.text('Site.BasicProgressDialog.PleaseWait');
            opt.width = 600;
            opt.buttons = [{
                    text: Q.text('Dialogs.CancelButton'),
                    click: function () {
                        _this.cancelled = true;
                        _this.element.closest('.ui-dialog')
                            .find('.ui-dialog-buttonpane .ui-button')
                            .attr('disabled', 'disabled')
                            .css('opacity', '0.5');
                        _this.element.dialog('option', 'title', Q.trimToNull(_this.cancelTitle) ||
                            Q.text('Site.BasicProgressDialog.CancelTitle'));
                    }
                }];
            return opt;
        };
        BasicProgressDialog.prototype.initDialog = function () {
            _super.prototype.initDialog.call(this);
            this.element.closest('.ui-dialog').find('.ui-dialog-titlebar-close').hide();
        };
        BasicProgressDialog.prototype.getTemplate = function () {
            return ("<div class='s-DialogContent s-BasicProgressDialogContent'>" +
                "<div id='~_StatusText' class='status-text' ></div>" +
                "<div id='~_ProgressBar' class='progress-bar'>" +
                "<div id='~_ProgressLabel' class='progress-label' ></div>" +
                "</div>" +
                "</div>");
        };
        return BasicProgressDialog;
    }(Serenity.TemplatedDialog));
    ECNET.BasicProgressDialog = BasicProgressDialog;
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Common;
    (function (Common) {
        var BulkServiceAction = /** @class */ (function () {
            function BulkServiceAction() {
            }
            BulkServiceAction.prototype.createProgressDialog = function () {
                this.progressDialog = new ECNET.BasicProgressDialog();
                this.progressDialog.dialogOpen();
                this.progressDialog.max = this.keys.length;
                this.progressDialog.value = 0;
            };
            BulkServiceAction.prototype.getConfirmationFormat = function () {
                return Q.text('Site.BulkServiceAction.ConfirmationFormat');
            };
            BulkServiceAction.prototype.getConfirmationMessage = function (targetCount) {
                return Q.format(this.getConfirmationFormat(), targetCount);
            };
            BulkServiceAction.prototype.confirm = function (targetCount, action) {
                Q.confirm(this.getConfirmationMessage(targetCount), action);
            };
            BulkServiceAction.prototype.getNothingToProcessMessage = function () {
                return Q.text('Site.BulkServiceAction.NothingToProcess');
            };
            BulkServiceAction.prototype.nothingToProcess = function () {
                Q.notifyError(this.getNothingToProcessMessage());
            };
            BulkServiceAction.prototype.getParallelRequests = function () {
                return 1;
            };
            BulkServiceAction.prototype.getBatchSize = function () {
                return 1;
            };
            BulkServiceAction.prototype.startParallelExecution = function () {
                this.createProgressDialog();
                this.successCount = 0;
                this.errorCount = 0;
                this.pendingRequests = 0;
                this.completedRequests = 0;
                this.errorCount = 0;
                this.errorByKey = {};
                this.queue = this.keys.slice();
                this.queueIndex = 0;
                var parallelRequests = this.getParallelRequests();
                while (parallelRequests-- > 0) {
                    this.executeNextBatch();
                }
            };
            BulkServiceAction.prototype.serviceCallCleanup = function () {
                this.pendingRequests--;
                this.completedRequests++;
                var title = Q.text((this.progressDialog.cancelled ?
                    'Site.BasicProgressDialog.CancelTitle' : 'Site.BasicProgressDialog.PleaseWait'));
                title += ' (';
                if (this.successCount > 0) {
                    title += Q.format(Q.text('Site.BulkServiceAction.SuccessCount'), this.successCount);
                }
                if (this.errorCount > 0) {
                    if (this.successCount > 0) {
                        title += ', ';
                    }
                    title += Q.format(Q.text('Site.BulkServiceAction.ErrorCount'), this.errorCount);
                }
                this.progressDialog.title = title + ')';
                this.progressDialog.value = this.successCount + this.errorCount;
                if (!this.progressDialog.cancelled && this.progressDialog.value < this.keys.length) {
                    this.executeNextBatch();
                }
                else if (this.pendingRequests === 0) {
                    this.progressDialog.dialogClose();
                    this.showResults();
                    if (this.done) {
                        this.done();
                        this.done = null;
                    }
                }
            };
            BulkServiceAction.prototype.executeForBatch = function (batch) {
            };
            BulkServiceAction.prototype.executeNextBatch = function () {
                var batchSize = this.getBatchSize();
                var batch = [];
                while (true) {
                    if (batch.length >= batchSize) {
                        break;
                    }
                    if (this.queueIndex >= this.queue.length) {
                        break;
                    }
                    batch.push(this.queue[this.queueIndex++]);
                }
                if (batch.length > 0) {
                    this.pendingRequests++;
                    this.executeForBatch(batch);
                }
            };
            BulkServiceAction.prototype.getAllHadErrorsFormat = function () {
                return Q.text('Site.BulkServiceAction.AllHadErrorsFormat');
            };
            BulkServiceAction.prototype.showAllHadErrors = function () {
                Q.notifyError(Q.format(this.getAllHadErrorsFormat(), this.errorCount));
            };
            BulkServiceAction.prototype.getSomeHadErrorsFormat = function () {
                return Q.text('Site.BulkServiceAction.SomeHadErrorsFormat');
            };
            BulkServiceAction.prototype.showSomeHadErrors = function () {
                Q.notifyWarning(Q.format(this.getSomeHadErrorsFormat(), this.successCount, this.errorCount));
            };
            BulkServiceAction.prototype.getAllSuccessFormat = function () {
                return Q.text('Site.BulkServiceAction.AllSuccessFormat');
            };
            BulkServiceAction.prototype.showAllSuccess = function () {
                Q.notifySuccess(Q.format(this.getAllSuccessFormat(), this.successCount));
            };
            BulkServiceAction.prototype.showResults = function () {
                if (this.errorCount === 0 && this.successCount === 0) {
                    this.nothingToProcess();
                    return;
                }
                if (this.errorCount > 0 && this.successCount === 0) {
                    this.showAllHadErrors();
                    return;
                }
                if (this.errorCount > 0) {
                    this.showSomeHadErrors();
                    return;
                }
                this.showAllSuccess();
            };
            BulkServiceAction.prototype.execute = function (keys) {
                var _this = this;
                this.keys = keys;
                if (this.keys.length === 0) {
                    this.nothingToProcess();
                    return;
                }
                this.confirm(this.keys.length, function () { return _this.startParallelExecution(); });
            };
            BulkServiceAction.prototype.get_successCount = function () {
                return this.successCount;
            };
            BulkServiceAction.prototype.set_successCount = function (value) {
                this.successCount = value;
            };
            BulkServiceAction.prototype.get_errorCount = function () {
                return this.errorCount;
            };
            BulkServiceAction.prototype.set_errorCount = function (value) {
                this.errorCount = value;
            };
            return BulkServiceAction;
        }());
        Common.BulkServiceAction = BulkServiceAction;
    })(Common = ECNET.Common || (ECNET.Common = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var DialogUtils;
    (function (DialogUtils) {
        function pendingChangesConfirmation(element, hasPendingChanges) {
            element.on('dialogbeforeclose panelbeforeclose', function (e) {
                if (!Serenity.WX.hasOriginalEvent(e) || !hasPendingChanges()) {
                    return;
                }
                e.preventDefault();
                Q.confirm('You have pending changes. Save them?', function () { return element.find('div.save-and-close-button').click(); }, {
                    onNo: function () {
                        if (element.hasClass('ui-dialog-content'))
                            element.dialog('close');
                        else if (element.hasClass('s-Panel'))
                            Serenity.TemplatedDialog.closePanel(element);
                    }
                });
            });
        }
        DialogUtils.pendingChangesConfirmation = pendingChangesConfirmation;
    })(DialogUtils = ECNET.DialogUtils || (ECNET.DialogUtils = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Common;
    (function (Common) {
        var EnumSelectFormatter = /** @class */ (function () {
            function EnumSelectFormatter() {
                this.allowClear = true;
            }
            EnumSelectFormatter.prototype.format = function (ctx) {
                var enumType = Serenity.EnumTypeRegistry.get(this.enumKey);
                var sb = "<select>";
                if (this.allowClear) {
                    sb += '<option value="">';
                    sb += Q.htmlEncode(this.emptyItemText || Q.text("Controls.SelectEditor.EmptyItemText"));
                    sb += '</option>';
                }
                for (var _i = 0, _a = Object.keys(enumType).filter(function (v) { return !isNaN(parseInt(v, 10)); }); _i < _a.length; _i++) {
                    var x = _a[_i];
                    sb += '<option value="' + x + '"';
                    if (x == ctx.value)
                        sb += " selected";
                    var name = enumType[x];
                    sb += ">";
                    sb += Q.htmlEncode(Q.tryGetText("Enums." + this.enumKey + "." + name) || name);
                    sb += "</option>";
                }
                sb += "</select>";
                return sb;
            };
            __decorate([
                Serenity.Decorators.option()
            ], EnumSelectFormatter.prototype, "enumKey", void 0);
            __decorate([
                Serenity.Decorators.option()
            ], EnumSelectFormatter.prototype, "allowClear", void 0);
            __decorate([
                Serenity.Decorators.option()
            ], EnumSelectFormatter.prototype, "emptyItemText", void 0);
            EnumSelectFormatter = __decorate([
                Serenity.Decorators.registerFormatter()
            ], EnumSelectFormatter);
            return EnumSelectFormatter;
        }());
        Common.EnumSelectFormatter = EnumSelectFormatter;
    })(Common = ECNET.Common || (ECNET.Common = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Common;
    (function (Common) {
        var ExcelExportHelper;
        (function (ExcelExportHelper) {
            function createToolButton(options) {
                return {
                    hint: Q.coalesce(options.hint, 'Excel'),
                    title: Q.coalesce(options.title, ''),
                    cssClass: 'export-xlsx-button',
                    onClick: function () {
                        if (!options.onViewSubmit()) {
                            return;
                        }
                        var grid = options.grid;
                        var request = Q.deepClone(grid.getView().params);
                        request.Take = 0;
                        request.Skip = 0;
                        var sortBy = grid.getView().sortBy;
                        if (sortBy) {
                            request.Sort = sortBy;
                        }
                        request.IncludeColumns = [];
                        var columns = grid.getGrid().getColumns();
                        for (var _i = 0, columns_1 = columns; _i < columns_1.length; _i++) {
                            var column = columns_1[_i];
                            request.IncludeColumns.push(column.id || column.field);
                        }
                        Q.postToService({ service: options.service, request: request, target: '_blank' });
                    },
                    separator: options.separator
                };
            }
            ExcelExportHelper.createToolButton = createToolButton;
        })(ExcelExportHelper = Common.ExcelExportHelper || (Common.ExcelExportHelper = {}));
    })(Common = ECNET.Common || (ECNET.Common = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Common;
    (function (Common) {
        var GridEditorBase = /** @class */ (function (_super) {
            __extends(GridEditorBase, _super);
            function GridEditorBase(container) {
                var _this = _super.call(this, container) || this;
                _this.nextId = 1;
                return _this;
            }
            GridEditorBase.prototype.getIdProperty = function () { return "__id"; };
            GridEditorBase.prototype.id = function (entity) {
                return entity[this.getIdProperty()];
            };
            GridEditorBase.prototype.getNextId = function () {
                return "`" + this.nextId++;
            };
            GridEditorBase.prototype.setNewId = function (entity) {
                entity[this.getIdProperty()] = this.getNextId();
            };
            GridEditorBase.prototype.save = function (opt, callback) {
                var _this = this;
                var request = opt.request;
                var row = Q.deepClone(request.Entity);
                var id = this.id(row);
                if (id == null) {
                    row[this.getIdProperty()] = this.getNextId();
                }
                if (!this.validateEntity(row, id)) {
                    return;
                }
                var items = this.view.getItems().slice();
                if (id == null) {
                    items.push(row);
                }
                else {
                    var index = Q.indexOf(items, function (x) { return _this.id(x) === id; });
                    items[index] = Q.deepClone({}, items[index], row);
                }
                this.setEntities(items);
                callback({});
            };
            GridEditorBase.prototype.deleteEntity = function (id) {
                this.view.deleteItem(id);
                return true;
            };
            GridEditorBase.prototype.validateEntity = function (row, id) {
                return true;
            };
            GridEditorBase.prototype.setEntities = function (items) {
                this.view.setItems(items, true);
            };
            GridEditorBase.prototype.getNewEntity = function () {
                return {};
            };
            GridEditorBase.prototype.getButtons = function () {
                var _this = this;
                return [{
                        title: this.getAddButtonCaption(),
                        cssClass: 'add-button',
                        onClick: function () {
                            _this.createEntityDialog(_this.getItemType(), function (dlg) {
                                var dialog = dlg;
                                dialog.onSave = function (opt, callback) { return _this.save(opt, callback); };
                                dialog.loadEntityAndOpenDialog(_this.getNewEntity());
                            });
                        }
                    }];
            };
            GridEditorBase.prototype.editItem = function (entityOrId) {
                var _this = this;
                var id = entityOrId;
                var item = this.view.getItemById(id);
                this.createEntityDialog(this.getItemType(), function (dlg) {
                    var dialog = dlg;
                    dialog.onDelete = function (opt, callback) {
                        if (!_this.deleteEntity(id)) {
                            return;
                        }
                        callback({});
                    };
                    dialog.onSave = function (opt, callback) { return _this.save(opt, callback); };
                    dialog.loadEntityAndOpenDialog(item);
                });
                ;
            };
            GridEditorBase.prototype.getEditValue = function (property, target) {
                target[property.name] = this.value;
            };
            GridEditorBase.prototype.setEditValue = function (source, property) {
                this.value = source[property.name];
            };
            Object.defineProperty(GridEditorBase.prototype, "value", {
                get: function () {
                    var p = this.getIdProperty();
                    return this.view.getItems().map(function (x) {
                        var y = Q.deepClone(x);
                        var id = y[p];
                        if (id && id.toString().charAt(0) == '`')
                            delete y[p];
                        return y;
                    });
                },
                set: function (value) {
                    var _this = this;
                    var p = this.getIdProperty();
                    this.view.setItems((value || []).map(function (x) {
                        var y = Q.deepClone(x);
                        if (y[p] == null)
                            y[p] = "`" + _this.getNextId();
                        return y;
                    }), true);
                },
                enumerable: true,
                configurable: true
            });
            GridEditorBase.prototype.getGridCanLoad = function () {
                return false;
            };
            GridEditorBase.prototype.usePager = function () {
                return false;
            };
            GridEditorBase.prototype.getInitialTitle = function () {
                return null;
            };
            GridEditorBase.prototype.createQuickSearchInput = function () {
            };
            GridEditorBase = __decorate([
                Serenity.Decorators.registerClass([Serenity.IGetEditValue, Serenity.ISetEditValue]),
                Serenity.Decorators.editor(),
                Serenity.Decorators.element("<div/>")
            ], GridEditorBase);
            return GridEditorBase;
        }(Serenity.EntityGrid));
        Common.GridEditorBase = GridEditorBase;
    })(Common = ECNET.Common || (ECNET.Common = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Common;
    (function (Common) {
        var GridEditorDialog = /** @class */ (function (_super) {
            __extends(GridEditorDialog, _super);
            function GridEditorDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            GridEditorDialog.prototype.getIdProperty = function () { return "__id"; };
            GridEditorDialog.prototype.destroy = function () {
                this.onSave = null;
                this.onDelete = null;
                _super.prototype.destroy.call(this);
            };
            GridEditorDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                // apply changes button doesn't work properly with in-memory grids yet
                if (this.applyChangesButton) {
                    this.applyChangesButton.hide();
                }
            };
            GridEditorDialog.prototype.saveHandler = function (options, callback) {
                this.onSave && this.onSave(options, callback);
            };
            GridEditorDialog.prototype.deleteHandler = function (options, callback) {
                this.onDelete && this.onDelete(options, callback);
            };
            GridEditorDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], GridEditorDialog);
            return GridEditorDialog;
        }(Serenity.EntityDialog));
        Common.GridEditorDialog = GridEditorDialog;
    })(Common = ECNET.Common || (ECNET.Common = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    /**
     * This is an editor widget but it only displays a text, not edits it.
     *
     */
    var StaticTextBlock = /** @class */ (function (_super) {
        __extends(StaticTextBlock, _super);
        function StaticTextBlock(container, options) {
            var _this = _super.call(this, container, options) || this;
            // hide the caption label for this editor if in a form. ugly hack
            if (_this.options.hideLabel)
                _this.element.closest('.field').find('.caption').hide();
            _this.updateElementContent();
            return _this;
        }
        StaticTextBlock.prototype.updateElementContent = function () {
            var text = Q.coalesce(this.options.text, this.value);
            // if isLocalText is set, text is actually a local text key
            if (this.options.isLocalText)
                text = Q.text(text);
            // don't html encode if isHtml option is true
            if (this.options.isHtml)
                this.element.html(text);
            else
                this.element.text(text);
        };
        /**
         * By implementing ISetEditValue interface, we allow this editor to display its field value.
         * But only do this when our text content is not explicitly set in options
         */
        StaticTextBlock.prototype.setEditValue = function (source, property) {
            if (this.options.text == null) {
                this.value = Q.coalesce(this.options.text, source[property.name]);
                this.updateElementContent();
            }
        };
        StaticTextBlock = __decorate([
            Serenity.Decorators.element("<div/>"),
            Serenity.Decorators.registerEditor([Serenity.ISetEditValue])
        ], StaticTextBlock);
        return StaticTextBlock;
    }(Serenity.Widget));
    ECNET.StaticTextBlock = StaticTextBlock;
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Common;
    (function (Common) {
        var LanguageSelection = /** @class */ (function (_super) {
            __extends(LanguageSelection, _super);
            function LanguageSelection(select, currentLanguage) {
                var _this = _super.call(this, select) || this;
                currentLanguage = Q.coalesce(currentLanguage, 'en');
                _this.change(function (e) {
                    var path = Q.Config.applicationPath;
                    if (path && path != '/' && Q.endsWith(path, '/'))
                        path = path.substr(0, path.length - 1);
                    $.cookie('LanguagePreference', select.val(), {
                        path: path,
                        expires: 365
                    });
                    window.location.reload(true);
                });
                Q.getLookupAsync('Administration.Language').then(function (x) {
                    if (!Q.any(x.items, function (z) { return z.LanguageId === currentLanguage; })) {
                        var idx = currentLanguage.lastIndexOf('-');
                        if (idx >= 0) {
                            currentLanguage = currentLanguage.substr(0, idx);
                            if (!Q.any(x.items, function (y) { return y.LanguageId === currentLanguage; })) {
                                currentLanguage = 'en';
                            }
                        }
                        else {
                            currentLanguage = 'en';
                        }
                    }
                    for (var _i = 0, _a = x.items; _i < _a.length; _i++) {
                        var l = _a[_i];
                        Q.addOption(select, l.LanguageId, l.LanguageName);
                    }
                    select.val(currentLanguage);
                });
                return _this;
            }
            return LanguageSelection;
        }(Serenity.Widget));
        Common.LanguageSelection = LanguageSelection;
    })(Common = ECNET.Common || (ECNET.Common = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Common;
    (function (Common) {
        var SidebarSearch = /** @class */ (function (_super) {
            __extends(SidebarSearch, _super);
            function SidebarSearch(input, menuUL) {
                var _this = _super.call(this, input) || this;
                new Serenity.QuickSearchInput(input, {
                    onSearch: function (field, text, success) {
                        _this.updateMatchFlags(text);
                        success(true);
                    }
                });
                _this.menuUL = menuUL;
                return _this;
            }
            SidebarSearch.prototype.updateMatchFlags = function (text) {
                var liList = this.menuUL.find('li').removeClass('non-match');
                text = Q.trimToNull(text);
                if (text == null) {
                    liList.show();
                    liList.removeClass('expanded');
                    return;
                }
                var parts = text.replace(',', ' ').split(' ').filter(function (x) { return !Q.isTrimmedEmpty(x); });
                for (var i = 0; i < parts.length; i++) {
                    parts[i] = Q.trimToNull(Select2.util.stripDiacritics(parts[i]).toUpperCase());
                }
                var items = liList;
                items.each(function (idx, e) {
                    var x = $(e);
                    var title = Select2.util.stripDiacritics(Q.coalesce(x.text(), '').toUpperCase());
                    for (var _i = 0, parts_1 = parts; _i < parts_1.length; _i++) {
                        var p = parts_1[_i];
                        if (p != null && !(title.indexOf(p) !== -1)) {
                            x.addClass('non-match');
                            break;
                        }
                    }
                });
                var matchingItems = items.not('.non-match');
                var visibles = matchingItems.parents('li').add(matchingItems);
                var nonVisibles = liList.not(visibles);
                nonVisibles.hide().addClass('non-match');
                visibles.show();
                liList.addClass('expanded');
            };
            return SidebarSearch;
        }(Serenity.Widget));
        Common.SidebarSearch = SidebarSearch;
    })(Common = ECNET.Common || (ECNET.Common = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Common;
    (function (Common) {
        var ThemeSelection = /** @class */ (function (_super) {
            __extends(ThemeSelection, _super);
            function ThemeSelection(select) {
                var _this = _super.call(this, select) || this;
                _this.change(function (e) {
                    var path = Q.Config.applicationPath;
                    if (path && path != '/' && Q.endsWith(path, '/'))
                        path = path.substr(0, path.length - 1);
                    $.cookie('ThemePreference', select.val(), {
                        path: path,
                        expires: 365
                    });
                    var theme = select.val() || '';
                    var darkSidebar = theme.indexOf('light') < 0;
                    $('body').removeClass('skin-' + _this.getCurrentTheme());
                    $('body').addClass('skin-' + theme)
                        .toggleClass('dark-sidebar', darkSidebar)
                        .toggleClass('light-sidebar', !darkSidebar);
                });
                Q.addOption(select, 'blue', Q.text('Site.Layout.ThemeBlue'));
                Q.addOption(select, 'blue-light', Q.text('Site.Layout.ThemeBlueLight'));
                Q.addOption(select, 'purple', Q.text('Site.Layout.ThemePurple'));
                Q.addOption(select, 'purple-light', Q.text('Site.Layout.ThemePurpleLight'));
                Q.addOption(select, 'red', Q.text('Site.Layout.ThemeRed'));
                Q.addOption(select, 'red-light', Q.text('Site.Layout.ThemeRedLight'));
                Q.addOption(select, 'green', Q.text('Site.Layout.ThemeGreen'));
                Q.addOption(select, 'green-light', Q.text('Site.Layout.ThemeGreenLight'));
                Q.addOption(select, 'yellow', Q.text('Site.Layout.ThemeYellow'));
                Q.addOption(select, 'yellow-light', Q.text('Site.Layout.ThemeYellowLight'));
                Q.addOption(select, 'black', Q.text('Site.Layout.ThemeBlack'));
                Q.addOption(select, 'black-light', Q.text('Site.Layout.ThemeBlackLight'));
                select.val(_this.getCurrentTheme());
                return _this;
            }
            ThemeSelection.prototype.getCurrentTheme = function () {
                var skinClass = Q.first(($('body').attr('class') || '').split(' '), function (x) { return Q.startsWith(x, 'skin-'); });
                if (skinClass) {
                    return skinClass.substr(5);
                }
                return 'blue';
            };
            return ThemeSelection;
        }(Serenity.Widget));
        Common.ThemeSelection = ThemeSelection;
    })(Common = ECNET.Common || (ECNET.Common = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Common;
    (function (Common) {
        var PdfExportHelper;
        (function (PdfExportHelper) {
            function toAutoTableColumns(srcColumns, columnStyles, columnTitles) {
                return srcColumns.map(function (src) {
                    var col = {
                        dataKey: src.id || src.field,
                        title: src.name || ''
                    };
                    if (columnTitles && columnTitles[col.dataKey] != null)
                        col.title = columnTitles[col.dataKey];
                    var style = {};
                    if ((src.cssClass || '').indexOf("align-right") >= 0)
                        style.halign = 'right';
                    else if ((src.cssClass || '').indexOf("align-center") >= 0)
                        style.halign = 'center';
                    columnStyles[col.dataKey] = style;
                    return col;
                });
            }
            function toAutoTableData(entities, keys, srcColumns) {
                var el = document.createElement('span');
                var row = 0;
                return entities.map(function (item) {
                    var dst = {};
                    for (var cell = 0; cell < srcColumns.length; cell++) {
                        var src = srcColumns[cell];
                        var fld = src.field || '';
                        var key = keys[cell];
                        var txt = void 0;
                        var html = void 0;
                        if (src.formatter) {
                            html = src.formatter(row, cell, item[fld], src, item);
                        }
                        else if (src.format) {
                            html = src.format({ row: row, cell: cell, item: item, value: item[fld] });
                        }
                        else {
                            dst[key] = item[fld];
                            continue;
                        }
                        if (!html || (html.indexOf('<') < 0 && html.indexOf('&') < 0))
                            dst[key] = html;
                        else {
                            el.innerHTML = html;
                            if (el.children.length == 1 &&
                                $(el.children[0]).is(":input")) {
                                dst[key] = $(el.children[0]).val();
                            }
                            else if (el.children.length == 1 &&
                                $(el.children).is('.check-box')) {
                                dst[key] = $(el.children).hasClass("checked") ? "X" : "";
                            }
                            else
                                dst[key] = el.textContent || '';
                        }
                    }
                    row++;
                    return dst;
                });
            }
            function exportToPdf(options) {
                var g = options.grid;
                if (!options.onViewSubmit())
                    return;
                includeAutoTable();
                var request = Q.deepClone(g.view.params);
                request.Take = 0;
                request.Skip = 0;
                var sortBy = g.view.sortBy;
                if (sortBy != null)
                    request.Sort = sortBy;
                var gridColumns = g.slickGrid.getColumns();
                gridColumns = gridColumns.filter(function (x) { return x.id !== "__select__"; });
                request.IncludeColumns = [];
                for (var _i = 0, gridColumns_1 = gridColumns; _i < gridColumns_1.length; _i++) {
                    var column = gridColumns_1[_i];
                    request.IncludeColumns.push(column.id || column.field);
                }
                Q.serviceCall({
                    url: g.view.url,
                    request: request,
                    onSuccess: function (response) {
                        var doc = new jsPDF('l', 'pt');
                        var srcColumns = gridColumns;
                        var columnStyles = {};
                        var columns = toAutoTableColumns(srcColumns, columnStyles, options.columnTitles);
                        var keys = columns.map(function (x) { return x.dataKey; });
                        var entities = response.Entities || [];
                        var data = toAutoTableData(entities, keys, srcColumns);
                        doc.setFontSize(options.titleFontSize || 10);
                        doc.setFontStyle('bold');
                        var reportTitle = options.reportTitle || g.getTitle() || "Report";
                        doc.autoTableText(reportTitle, doc.internal.pageSize.width / 2, options.titleTop || 25, { halign: 'center' });
                        var totalPagesExp = "{{T}}";
                        var pageNumbers = options.pageNumbers == null || options.pageNumbers;
                        var autoOptions = $.extend({
                            margin: { top: 25, left: 25, right: 25, bottom: pageNumbers ? 25 : 30 },
                            startY: 60,
                            styles: {
                                fontSize: 8,
                                overflow: 'linebreak',
                                cellPadding: 2,
                                valign: 'middle'
                            },
                            columnStyles: columnStyles
                        }, options.tableOptions);
                        if (pageNumbers) {
                            var footer = function (data) {
                                var str = data.pageCount;
                                // Total page number plugin only available in jspdf v1.0+
                                if (typeof doc.putTotalPages === 'function') {
                                    str = str + " / " + totalPagesExp;
                                }
                                doc.autoTableText(str, doc.internal.pageSize.width / 2, doc.internal.pageSize.height - autoOptions.margin.bottom, {
                                    halign: 'center'
                                });
                            };
                            autoOptions.afterPageContent = footer;
                        }
                        // Print header of page
                        if (options.printDateTimeHeader == null || options.printDateTimeHeader) {
                            var beforePage = function (data) {
                                doc.setFontStyle('normal');
                                doc.setFontSize(8);
                                // Date and time of the report
                                doc.autoTableText(Q.formatDate(new Date(), "dd-MM-yyyy HH:mm"), doc.internal.pageSize.width - autoOptions.margin.right, 13, {
                                    halign: 'right'
                                });
                            };
                            autoOptions.beforePageContent = beforePage;
                        }
                        doc.autoTable(columns, data, autoOptions);
                        if (typeof doc.putTotalPages === 'function') {
                            doc.putTotalPages(totalPagesExp);
                        }
                        if (!options.output || options.output == "file") {
                            var fileName = options.fileName || options.reportTitle || "{0}_{1}.pdf";
                            fileName = Q.format(fileName, g.getTitle() || "report", Q.formatDate(new Date(), "yyyyMMdd_HHmm"));
                            doc.save(fileName);
                            return;
                        }
                        if (options.autoPrint)
                            doc.autoPrint();
                        var output = options.output;
                        if (output == 'newwindow' || '_blank')
                            output = 'dataurlnewwindow';
                        else if (output == 'window')
                            output = 'datauri';
                        doc.output(output);
                    }
                });
            }
            PdfExportHelper.exportToPdf = exportToPdf;
            function createToolButton(options) {
                return {
                    title: options.title || '',
                    hint: options.hint || 'PDF',
                    cssClass: 'export-pdf-button',
                    onClick: function () { return exportToPdf(options); },
                    separator: options.separator
                };
            }
            PdfExportHelper.createToolButton = createToolButton;
            function includeJsPDF() {
                if (typeof jsPDF !== "undefined")
                    return;
                var script = $("jsPDFScript");
                if (script.length > 0)
                    return;
                $("<script/>")
                    .attr("type", "text/javascript")
                    .attr("id", "jsPDFScript")
                    .attr("src", Q.resolveUrl("~/Scripts/jspdf.min.js"))
                    .appendTo(document.head);
            }
            function includeAutoTable() {
                includeJsPDF();
                if (typeof jsPDF === "undefined" ||
                    typeof jsPDF.API == "undefined" ||
                    typeof jsPDF.API.autoTable !== "undefined")
                    return;
                var script = $("jsPDFAutoTableScript");
                if (script.length > 0)
                    return;
                $("<script/>")
                    .attr("type", "text/javascript")
                    .attr("id", "jsPDFAutoTableScript")
                    .attr("src", Q.resolveUrl("~/Scripts/jspdf.plugin.autotable.min.js"))
                    .appendTo(document.head);
            }
        })(PdfExportHelper = Common.PdfExportHelper || (Common.PdfExportHelper = {}));
    })(Common = ECNET.Common || (ECNET.Common = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Common;
    (function (Common) {
        var ReportDialog = /** @class */ (function (_super) {
            __extends(ReportDialog, _super);
            function ReportDialog(options) {
                var _this = _super.call(this, options) || this;
                _this.updateInterface();
                _this.loadReport(_this.options.reportKey);
                return _this;
            }
            ReportDialog.prototype.getDialogButtons = function () {
                return null;
            };
            ReportDialog.prototype.createPropertyGrid = function () {
                this.propertyGrid && this.byId('PropertyGrid').html('').attr('class', '');
                this.propertyGrid = new Serenity.PropertyGrid(this.byId('PropertyGrid'), {
                    idPrefix: this.idPrefix,
                    useCategories: true,
                    items: this.report.Properties
                }).init(null);
            };
            ReportDialog.prototype.loadReport = function (reportKey) {
                var _this = this;
                Q.serviceCall({
                    url: Q.resolveUrl('~/Report/Retrieve'),
                    request: {
                        ReportKey: reportKey
                    },
                    onSuccess: function (response) {
                        _this.report = response;
                        _this.element.dialog().dialog('option', 'title', _this.report.Title);
                        _this.createPropertyGrid();
                        _this.propertyGrid.load(_this.report.InitialSettings || {});
                        _this.updateInterface();
                        _this.dialogOpen();
                    }
                });
            };
            ReportDialog.prototype.updateInterface = function () {
                this.toolbar.findButton('print-preview-button')
                    .toggle(this.report && !this.report.IsDataOnlyReport);
                this.toolbar.findButton('export-pdf-button')
                    .toggle(this.report && !this.report.IsDataOnlyReport);
                this.toolbar.findButton('export-xlsx-button')
                    .toggle(this.report && this.report.IsDataOnlyReport);
            };
            ReportDialog.prototype.executeReport = function (target, ext, download) {
                if (!this.validateForm()) {
                    return;
                }
                var opt = {};
                this.propertyGrid.save(opt);
                Common.ReportHelper.execute({
                    download: download,
                    reportKey: this.report.ReportKey,
                    extension: ext,
                    target: target,
                    params: opt
                });
            };
            ReportDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                return [
                    {
                        title: 'Preview',
                        cssClass: 'print-preview-button',
                        onClick: function () { return _this.executeReport('_blank', null, false); }
                    },
                    {
                        title: 'PDF',
                        cssClass: 'export-pdf-button',
                        onClick: function () { return _this.executeReport('_blank', 'pdf', true); }
                    },
                    {
                        title: 'Excel',
                        cssClass: 'export-xlsx-button',
                        onClick: function () { return _this.executeReport('_blank', 'xlsx', true); }
                    }
                ];
            };
            return ReportDialog;
        }(Serenity.TemplatedDialog));
        Common.ReportDialog = ReportDialog;
    })(Common = ECNET.Common || (ECNET.Common = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Common;
    (function (Common) {
        var ReportHelper;
        (function (ReportHelper) {
            function createToolButton(options) {
                return {
                    title: Q.coalesce(options.title, 'Report'),
                    cssClass: Q.coalesce(options.cssClass, 'print-button'),
                    icon: options.icon,
                    onClick: function () {
                        ReportHelper.execute(options);
                    }
                };
            }
            ReportHelper.createToolButton = createToolButton;
            function execute(options) {
                var opt = options.getParams ? options.getParams() : options.params;
                Q.postToUrl({
                    url: '~/Report/' + (options.download ? 'Download' : 'Render'),
                    params: {
                        key: options.reportKey,
                        ext: Q.coalesce(options.extension, 'pdf'),
                        opt: opt ? $.toJSON(opt) : ''
                    },
                    target: Q.coalesce(options.target, '_blank')
                });
            }
            ReportHelper.execute = execute;
        })(ReportHelper = Common.ReportHelper || (Common.ReportHelper = {}));
    })(Common = ECNET.Common || (ECNET.Common = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Common;
    (function (Common) {
        var ReportPage = /** @class */ (function (_super) {
            __extends(ReportPage, _super);
            function ReportPage(element) {
                var _this = _super.call(this, element) || this;
                $('.report-link', element).click(function (e) { return _this.reportLinkClick(e); });
                $('div.line', element).click(function (e) { return _this.categoryClick(e); });
                new Serenity.QuickSearchInput($('.s-QuickSearchBar input', element), {
                    onSearch: function (field, text, done) {
                        _this.updateMatchFlags(text);
                        done(true);
                    }
                });
                return _this;
            }
            ReportPage.prototype.updateMatchFlags = function (text) {
                var liList = $('.report-list', this.element).find('li').removeClass('non-match');
                text = Q.trimToNull(text);
                if (!text) {
                    liList.children('ul').hide();
                    liList.show().removeClass('expanded');
                    return;
                }
                text = Select2.util.stripDiacritics(text).toUpperCase();
                var reportItems = liList.filter('.report-item');
                reportItems.each(function (ix, e) {
                    var x = $(e);
                    var title = Select2.util.stripDiacritics(Q.coalesce(x.text(), '').toUpperCase());
                    if (title.indexOf(text) < 0) {
                        x.addClass('non-match');
                    }
                });
                var matchingItems = reportItems.not('.non-match');
                var visibles = matchingItems.parents('li').add(matchingItems);
                var nonVisibles = liList.not(visibles);
                nonVisibles.hide().addClass('non-match');
                visibles.show();
                if (visibles.length <= 100) {
                    liList.children('ul').show();
                    liList.addClass('expanded');
                }
            };
            ReportPage.prototype.categoryClick = function (e) {
                var li = $(e.target).closest('li');
                if (li.hasClass('expanded')) {
                    li.find('ul').hide('fast');
                    li.removeClass('expanded');
                    li.find('li').removeClass('expanded');
                }
                else {
                    li.addClass('expanded');
                    li.children('ul').show('fast');
                    if (li.children('ul').children('li').length === 1 && !li.children('ul').children('li').hasClass('expanded')) {
                        li.children('ul').children('li').children('.line').click();
                    }
                }
            };
            ReportPage.prototype.reportLinkClick = function (e) {
                e.preventDefault();
                new Common.ReportDialog({
                    reportKey: $(e.target).data('key')
                }).dialogOpen();
            };
            return ReportPage;
        }(Serenity.Widget));
        Common.ReportPage = ReportPage;
    })(Common = ECNET.Common || (ECNET.Common = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Common;
    (function (Common) {
        var UserPreferenceStorage = /** @class */ (function () {
            function UserPreferenceStorage() {
            }
            UserPreferenceStorage.prototype.getItem = function (key) {
                var value;
                Common.UserPreferenceService.Retrieve({
                    PreferenceType: "UserPreferenceStorage",
                    Name: key
                }, function (response) { return value = response.Value; }, {
                    async: false
                });
                return value;
            };
            UserPreferenceStorage.prototype.setItem = function (key, data) {
                Common.UserPreferenceService.Update({
                    PreferenceType: "UserPreferenceStorage",
                    Name: key,
                    Value: data
                });
            };
            return UserPreferenceStorage;
        }());
        Common.UserPreferenceStorage = UserPreferenceStorage;
    })(Common = ECNET.Common || (ECNET.Common = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var AssetTempDialog = /** @class */ (function (_super) {
            __extends(AssetTempDialog, _super);
            function AssetTempDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Office.AssetTempForm(_this.idPrefix);
                return _this;
            }
            AssetTempDialog.prototype.getFormKey = function () { return Office.AssetTempForm.formKey; };
            AssetTempDialog.prototype.getIdProperty = function () { return Office.AssetTempRow.idProperty; };
            AssetTempDialog.prototype.getLocalTextPrefix = function () { return Office.AssetTempRow.localTextPrefix; };
            AssetTempDialog.prototype.getNameProperty = function () { return Office.AssetTempRow.nameProperty; };
            AssetTempDialog.prototype.getService = function () { return Office.AssetTempService.baseUrl; };
            AssetTempDialog.prototype.getDeletePermission = function () { return Office.AssetTempRow.deletePermission; };
            AssetTempDialog.prototype.getInsertPermission = function () { return Office.AssetTempRow.insertPermission; };
            AssetTempDialog.prototype.getUpdatePermission = function () { return Office.AssetTempRow.updatePermission; };
            AssetTempDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], AssetTempDialog);
            return AssetTempDialog;
        }(Serenity.EntityDialog));
        Office.AssetTempDialog = AssetTempDialog;
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var AssetTempGrid = /** @class */ (function (_super) {
            __extends(AssetTempGrid, _super);
            function AssetTempGrid(container) {
                return _super.call(this, container) || this;
            }
            AssetTempGrid.prototype.getColumnsKey = function () { return 'Office.AssetTemp'; };
            AssetTempGrid.prototype.getDialogType = function () { return Office.AssetTempDialog; };
            AssetTempGrid.prototype.getIdProperty = function () { return Office.AssetTempRow.idProperty; };
            AssetTempGrid.prototype.getInsertPermission = function () { return Office.AssetTempRow.insertPermission; };
            AssetTempGrid.prototype.getLocalTextPrefix = function () { return Office.AssetTempRow.localTextPrefix; };
            AssetTempGrid.prototype.getService = function () { return Office.AssetTempService.baseUrl; };
            AssetTempGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], AssetTempGrid);
            return AssetTempGrid;
        }(Serenity.EntityGrid));
        Office.AssetTempGrid = AssetTempGrid;
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var EmailAccountsDialog = /** @class */ (function (_super) {
            __extends(EmailAccountsDialog, _super);
            function EmailAccountsDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Office.EmailAccountsForm(_this.idPrefix);
                return _this;
            }
            EmailAccountsDialog.prototype.getFormKey = function () { return Office.EmailAccountsForm.formKey; };
            EmailAccountsDialog.prototype.getIdProperty = function () { return Office.EmailAccountsRow.idProperty; };
            EmailAccountsDialog.prototype.getLocalTextPrefix = function () { return Office.EmailAccountsRow.localTextPrefix; };
            EmailAccountsDialog.prototype.getNameProperty = function () { return Office.EmailAccountsRow.nameProperty; };
            EmailAccountsDialog.prototype.getService = function () { return Office.EmailAccountsService.baseUrl; };
            EmailAccountsDialog.prototype.getDeletePermission = function () { return Office.EmailAccountsRow.deletePermission; };
            EmailAccountsDialog.prototype.getInsertPermission = function () { return Office.EmailAccountsRow.insertPermission; };
            EmailAccountsDialog.prototype.getUpdatePermission = function () { return Office.EmailAccountsRow.updatePermission; };
            EmailAccountsDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], EmailAccountsDialog);
            return EmailAccountsDialog;
        }(Serenity.EntityDialog));
        Office.EmailAccountsDialog = EmailAccountsDialog;
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var EmailAccountsGrid = /** @class */ (function (_super) {
            __extends(EmailAccountsGrid, _super);
            function EmailAccountsGrid(container) {
                return _super.call(this, container) || this;
            }
            EmailAccountsGrid.prototype.getColumnsKey = function () { return 'Office.EmailAccounts'; };
            EmailAccountsGrid.prototype.getDialogType = function () { return Office.EmailAccountsDialog; };
            EmailAccountsGrid.prototype.getIdProperty = function () { return Office.EmailAccountsRow.idProperty; };
            EmailAccountsGrid.prototype.getInsertPermission = function () { return Office.EmailAccountsRow.insertPermission; };
            EmailAccountsGrid.prototype.getLocalTextPrefix = function () { return Office.EmailAccountsRow.localTextPrefix; };
            EmailAccountsGrid.prototype.getService = function () { return Office.EmailAccountsService.baseUrl; };
            EmailAccountsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], EmailAccountsGrid);
            return EmailAccountsGrid;
        }(Serenity.EntityGrid));
        Office.EmailAccountsGrid = EmailAccountsGrid;
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var QueuedEmailDialog = /** @class */ (function (_super) {
            __extends(QueuedEmailDialog, _super);
            function QueuedEmailDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Office.QueuedEmailForm(_this.idPrefix);
                return _this;
            }
            QueuedEmailDialog.prototype.getFormKey = function () { return Office.QueuedEmailForm.formKey; };
            QueuedEmailDialog.prototype.getIdProperty = function () { return Office.QueuedEmailRow.idProperty; };
            QueuedEmailDialog.prototype.getLocalTextPrefix = function () { return Office.QueuedEmailRow.localTextPrefix; };
            QueuedEmailDialog.prototype.getNameProperty = function () { return Office.QueuedEmailRow.nameProperty; };
            QueuedEmailDialog.prototype.getService = function () { return Office.QueuedEmailService.baseUrl; };
            QueuedEmailDialog.prototype.getDeletePermission = function () { return Office.QueuedEmailRow.deletePermission; };
            QueuedEmailDialog.prototype.getInsertPermission = function () { return Office.QueuedEmailRow.insertPermission; };
            QueuedEmailDialog.prototype.getUpdatePermission = function () { return Office.QueuedEmailRow.updatePermission; };
            QueuedEmailDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], QueuedEmailDialog);
            return QueuedEmailDialog;
        }(Serenity.EntityDialog));
        Office.QueuedEmailDialog = QueuedEmailDialog;
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var QueuedEmailGrid = /** @class */ (function (_super) {
            __extends(QueuedEmailGrid, _super);
            function QueuedEmailGrid(container) {
                return _super.call(this, container) || this;
            }
            QueuedEmailGrid.prototype.getColumnsKey = function () { return 'Office.QueuedEmail'; };
            QueuedEmailGrid.prototype.getDialogType = function () { return Office.QueuedEmailDialog; };
            QueuedEmailGrid.prototype.getIdProperty = function () { return Office.QueuedEmailRow.idProperty; };
            QueuedEmailGrid.prototype.getInsertPermission = function () { return Office.QueuedEmailRow.insertPermission; };
            QueuedEmailGrid.prototype.getLocalTextPrefix = function () { return Office.QueuedEmailRow.localTextPrefix; };
            QueuedEmailGrid.prototype.getService = function () { return Office.QueuedEmailService.baseUrl; };
            QueuedEmailGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], QueuedEmailGrid);
            return QueuedEmailGrid;
        }(Serenity.EntityGrid));
        Office.QueuedEmailGrid = QueuedEmailGrid;
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var SysParametersDialog = /** @class */ (function (_super) {
            __extends(SysParametersDialog, _super);
            function SysParametersDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Office.SysParametersForm(_this.idPrefix);
                return _this;
            }
            SysParametersDialog.prototype.getFormKey = function () { return Office.SysParametersForm.formKey; };
            SysParametersDialog.prototype.getIdProperty = function () { return Office.SysParametersRow.idProperty; };
            SysParametersDialog.prototype.getLocalTextPrefix = function () { return Office.SysParametersRow.localTextPrefix; };
            SysParametersDialog.prototype.getNameProperty = function () { return Office.SysParametersRow.nameProperty; };
            SysParametersDialog.prototype.getService = function () { return Office.SysParametersService.baseUrl; };
            SysParametersDialog.prototype.getDeletePermission = function () { return Office.SysParametersRow.deletePermission; };
            SysParametersDialog.prototype.getInsertPermission = function () { return Office.SysParametersRow.insertPermission; };
            SysParametersDialog.prototype.getUpdatePermission = function () { return Office.SysParametersRow.updatePermission; };
            SysParametersDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], SysParametersDialog);
            return SysParametersDialog;
        }(Serenity.EntityDialog));
        Office.SysParametersDialog = SysParametersDialog;
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var SysParametersGrid = /** @class */ (function (_super) {
            __extends(SysParametersGrid, _super);
            function SysParametersGrid(container) {
                return _super.call(this, container) || this;
            }
            SysParametersGrid.prototype.getColumnsKey = function () { return 'Office.SysParameters'; };
            SysParametersGrid.prototype.getDialogType = function () { return Office.SysParametersDialog; };
            SysParametersGrid.prototype.getIdProperty = function () { return Office.SysParametersRow.idProperty; };
            SysParametersGrid.prototype.getInsertPermission = function () { return Office.SysParametersRow.insertPermission; };
            SysParametersGrid.prototype.getLocalTextPrefix = function () { return Office.SysParametersRow.localTextPrefix; };
            SysParametersGrid.prototype.getService = function () { return Office.SysParametersService.baseUrl; };
            SysParametersGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], SysParametersGrid);
            return SysParametersGrid;
        }(Serenity.EntityGrid));
        Office.SysParametersGrid = SysParametersGrid;
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var TblApprovalCenterDialog = /** @class */ (function (_super) {
            __extends(TblApprovalCenterDialog, _super);
            function TblApprovalCenterDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Office.TblApprovalCenterForm(_this.idPrefix);
                _this.form.Status.addValidationRule(_this.uniqueName, function (e) {
                    //chi duoc chon status : approve, reject
                    var status = _this.form.Status.value;
                    if (status === "1") {
                        return "Vui lòng chọn phê duyệt hoặc từ chối";
                    }
                });
                _this.form.Status.change(function (e) {
                    var status = _this.form.Status.value;
                    if (status === "3") //reject
                     {
                        _this.form.ReasonReject.element.toggleClass("required", true);
                        _this.form.ReasonReject.getGridField().find("sup").toggle(true);
                    }
                    else {
                        _this.form.ReasonReject.element.toggleClass("required", false);
                        _this.form.ReasonReject.getGridField().find("sup").toggle(false);
                    }
                });
                return _this;
            }
            TblApprovalCenterDialog.prototype.getFormKey = function () { return Office.TblApprovalCenterForm.formKey; };
            TblApprovalCenterDialog.prototype.getIdProperty = function () { return Office.TblApprovalCenterRow.idProperty; };
            TblApprovalCenterDialog.prototype.getLocalTextPrefix = function () { return Office.TblApprovalCenterRow.localTextPrefix; };
            TblApprovalCenterDialog.prototype.getNameProperty = function () { return Office.TblApprovalCenterRow.nameProperty; };
            TblApprovalCenterDialog.prototype.getService = function () { return Office.TblApprovalCenterService.baseUrl; };
            TblApprovalCenterDialog.prototype.getDeletePermission = function () { return Office.TblApprovalCenterRow.deletePermission; };
            TblApprovalCenterDialog.prototype.getInsertPermission = function () { return Office.TblApprovalCenterRow.insertPermission; };
            TblApprovalCenterDialog.prototype.getUpdatePermission = function () { return Office.TblApprovalCenterRow.updatePermission; };
            TblApprovalCenterDialog.prototype.loadEntity = function (entity) {
                _super.prototype.loadEntity.call(this, entity);
                this.deleteButton.remove();
            };
            TblApprovalCenterDialog.prototype.afterLoadEntity = function () {
                _super.prototype.afterLoadEntity.call(this);
                //this.form.Status.items[0].disabled = true;
                this.form.Status.items.splice(0, 1);
                this.form.Status.items.splice(2, 2);
                //this.form.Status.items.splice(0, 1);
                if (this.form.Status.value !== "1") {
                    this.readOnly = true;
                    //this.editButton.addClass('disabled');
                    //this.saveAndCloseButton.addClass('disabled');
                    //this.applyChangesButton.addClass('disabled');
                }
            };
            TblApprovalCenterDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], TblApprovalCenterDialog);
            return TblApprovalCenterDialog;
        }(Serenity.EntityDialog));
        Office.TblApprovalCenterDialog = TblApprovalCenterDialog;
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var TblApprovalCenterGrid = /** @class */ (function (_super) {
            __extends(TblApprovalCenterGrid, _super);
            function TblApprovalCenterGrid(container) {
                return _super.call(this, container) || this;
            }
            TblApprovalCenterGrid.prototype.getColumnsKey = function () { return 'Office.TblApprovalCenter'; };
            TblApprovalCenterGrid.prototype.getDialogType = function () { return Office.TblApprovalCenterDialog; };
            TblApprovalCenterGrid.prototype.getIdProperty = function () { return Office.TblApprovalCenterRow.idProperty; };
            TblApprovalCenterGrid.prototype.getInsertPermission = function () { return Office.TblApprovalCenterRow.insertPermission; };
            TblApprovalCenterGrid.prototype.getLocalTextPrefix = function () { return Office.TblApprovalCenterRow.localTextPrefix; };
            TblApprovalCenterGrid.prototype.getService = function () { return Office.TblApprovalCenterService.baseUrl; };
            TblApprovalCenterGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                //Q.first(columns, x => x.field == fld.Code).format =
                //    ctx => `<a href="javascript:;" class="customer-link">${Q.htmlEncode(ctx.value)}</a>`;
                columns.unshift({
                    field: 'View Details',
                    name: '',
                    format: function (ctx) { return '<a class="inline-action view-details" title="view details"></a>'; },
                    width: 24,
                    minWidth: 24,
                    maxWidth: 24
                });
                //columns.unshift( {
                //    field: 'View Details',
                //    name: '',
                //    format: ctx => `<a href="javascript:;" class="inline-action customer-link">${Q.htmlEncode(ctx.value)}</a>`,
                //    width: 24,
                //    minWidth: 24,
                //    maxWidth: 24
                //});
                return columns;
            };
            TblApprovalCenterGrid.prototype.onClick = function (e, row, cell) {
                // let base grid handle clicks for its edit links
                _super.prototype.onClick.call(this, e, row, cell);
                // if base grid already handled, we shouldn"t handle it again
                if (e.isDefaultPrevented()) {
                    return;
                }
                // get reference to current item
                var item = this.itemAt(row);
                // get reference to clicked element
                var target = $(e.target);
                if (target.hasClass("view-details")) {
                    e.preventDefault();
                    if (item.Type === 1) {
                        var customer = Q.first(ECNET.Office.TblPlaceOfBussinessRow.getLookup().items, function (x) { return x.Code == item.Code; });
                        var dialog_ = new ECNET.Office.TblPlaceOfBussinessDialog();
                        dialog_.readOnly = true;
                        dialog_.element.find('.addContract').addClass('disabled');
                        dialog_.loadByIdAndOpenDialog(customer.Id, true);
                    }
                    else if (item.Type === 2) {
                        //var contract = Q.first(ECNET.Office.TblContractRow.getLookup().items,
                        //    x => x.Id == item.ClientId);
                        var dialogContract_ = new ECNET.Office.TblContractDialog();
                        dialogContract_.readOnly = true;
                        dialogContract_.element.find('.printContract').addClass('disabled');
                        dialogContract_.element.find('.addSchedule').addClass('disabled');
                        dialogContract_.loadByIdAndOpenDialog(item.ClientId, true);
                    }
                    else if (item.Type === 3) {
                        var dialogProject_ = new ECNET.Office.TblProjectDialog();
                        dialogProject_.readOnly = true;
                        //dialogContract_.element.find('.printContract').addClass('disabled');
                        //dialogContract_.element.find('.addSchedule').addClass('disabled');
                        dialogProject_.loadByIdAndOpenDialog(item.ClientId, true);
                    }
                }
            };
            TblApprovalCenterGrid.prototype.getButtons = function () {
                var _this = this;
                // call base method to get list of buttons
                // by default, base entity grid adds a few buttons, 
                // add, refresh, column selection in order.
                var buttons = _super.prototype.getButtons.call(this);
                // here is several methods to remove add button
                // only one is enabled, others are commented
                // METHOD 1
                // we would be able to simply return an empty button list,
                // but this would also remove all other buttons
                // return [];
                // METHOD 2
                // remove by splicing (something like delete by index)
                // here we hard code add button index (not nice!)
                // buttons.splice(0, 1);
                // METHOD 3 - recommended
                // remove by splicing, but this time find button index
                // by its css class. it is the best and safer method
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "add-button"; }), 1);
                buttons.push({
                    title: 'Group theo trạng thái',
                    cssClass: 'expand-all-button',
                    onClick: function () { return _this.view.setGrouping([{
                            formatter: function (x) { return Serenity.EnumFormatter.format(Serenity.EnumTypeRegistry.get("Ecnet.Status"), Q.toId(x.value)); },
                            getter: 'Status'
                        }]); }
                }, {
                    title: 'Group theo loại',
                    cssClass: 'expand-all-button',
                    onClick: function () { return _this.view.setGrouping([{
                            formatter: function (x) { return Serenity.EnumFormatter.format(Serenity.EnumTypeRegistry.get("Ecnet.TypeApprove"), Q.toId(x.value)); },
                            getter: 'Type'
                        }]); }
                }, {
                    title: 'Bỏ group',
                    cssClass: 'collapse-all-button',
                    onClick: function () { return _this.view.setGrouping([]); }
                });
                return buttons;
            };
            //protected createQuickFilters(): void {
            //    // let base class to create quick filters first
            //    super.createQuickFilters();
            //    // find a quick filter widget by its field name
            //    this.findQuickFilter(Serenity.LookupEditor, fld.Status).values = ["1"];
            //}
            TblApprovalCenterGrid.prototype.getQuickFilters = function () {
                // get quick filter list from base class
                var filters = _super.prototype.getQuickFilters.call(this);
                var filter = Q.first(filters, function (x) { return x.field == "Status" /* Status */; }).init = function (w) {
                    // enum editor has a string value, so need to call toString()
                    w.value = "1"; //tạo mới
                    Serenity.EditorUtils.setReadOnly(w, true);
                };
                //filters.splice(0, 1);
                return filters;
            };
            TblApprovalCenterGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TblApprovalCenterGrid);
            return TblApprovalCenterGrid;
        }(Serenity.EntityGrid));
        Office.TblApprovalCenterGrid = TblApprovalCenterGrid;
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var TblAreaDialog = /** @class */ (function (_super) {
            __extends(TblAreaDialog, _super);
            function TblAreaDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Office.TblAreaForm(_this.idPrefix);
                return _this;
            }
            TblAreaDialog.prototype.getFormKey = function () { return Office.TblAreaForm.formKey; };
            TblAreaDialog.prototype.getIdProperty = function () { return Office.TblAreaRow.idProperty; };
            TblAreaDialog.prototype.getLocalTextPrefix = function () { return Office.TblAreaRow.localTextPrefix; };
            TblAreaDialog.prototype.getNameProperty = function () { return Office.TblAreaRow.nameProperty; };
            TblAreaDialog.prototype.getService = function () { return Office.TblAreaService.baseUrl; };
            TblAreaDialog.prototype.getDeletePermission = function () { return Office.TblAreaRow.deletePermission; };
            TblAreaDialog.prototype.getInsertPermission = function () { return Office.TblAreaRow.insertPermission; };
            TblAreaDialog.prototype.getUpdatePermission = function () { return Office.TblAreaRow.updatePermission; };
            TblAreaDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], TblAreaDialog);
            return TblAreaDialog;
        }(Serenity.EntityDialog));
        Office.TblAreaDialog = TblAreaDialog;
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var TblAreaGrid = /** @class */ (function (_super) {
            __extends(TblAreaGrid, _super);
            function TblAreaGrid(container) {
                return _super.call(this, container) || this;
            }
            TblAreaGrid.prototype.getColumnsKey = function () { return 'Office.TblArea'; };
            TblAreaGrid.prototype.getDialogType = function () { return Office.TblAreaDialog; };
            TblAreaGrid.prototype.getIdProperty = function () { return Office.TblAreaRow.idProperty; };
            TblAreaGrid.prototype.getInsertPermission = function () { return Office.TblAreaRow.insertPermission; };
            TblAreaGrid.prototype.getLocalTextPrefix = function () { return Office.TblAreaRow.localTextPrefix; };
            TblAreaGrid.prototype.getService = function () { return Office.TblAreaService.baseUrl; };
            TblAreaGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TblAreaGrid);
            return TblAreaGrid;
        }(Serenity.EntityGrid));
        Office.TblAreaGrid = TblAreaGrid;
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var TblAssetDialog = /** @class */ (function (_super) {
            __extends(TblAssetDialog, _super);
            function TblAssetDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Office.TblAssetForm(_this.idPrefix);
                return _this;
            }
            TblAssetDialog.prototype.getFormKey = function () { return Office.TblAssetForm.formKey; };
            TblAssetDialog.prototype.getIdProperty = function () { return Office.TblAssetRow.idProperty; };
            TblAssetDialog.prototype.getLocalTextPrefix = function () { return Office.TblAssetRow.localTextPrefix; };
            TblAssetDialog.prototype.getNameProperty = function () { return Office.TblAssetRow.nameProperty; };
            TblAssetDialog.prototype.getService = function () { return Office.TblAssetService.baseUrl; };
            TblAssetDialog.prototype.getDeletePermission = function () { return Office.TblAssetRow.deletePermission; };
            TblAssetDialog.prototype.getInsertPermission = function () { return Office.TblAssetRow.insertPermission; };
            TblAssetDialog.prototype.getUpdatePermission = function () { return Office.TblAssetRow.updatePermission; };
            TblAssetDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], TblAssetDialog);
            return TblAssetDialog;
        }(Serenity.EntityDialog));
        Office.TblAssetDialog = TblAssetDialog;
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var TblAssetGrid = /** @class */ (function (_super) {
            __extends(TblAssetGrid, _super);
            function TblAssetGrid(container) {
                return _super.call(this, container) || this;
            }
            TblAssetGrid.prototype.getColumnsKey = function () { return 'Office.TblAsset'; };
            TblAssetGrid.prototype.getDialogType = function () { return Office.TblAssetDialog; };
            TblAssetGrid.prototype.getIdProperty = function () { return Office.TblAssetRow.idProperty; };
            TblAssetGrid.prototype.getInsertPermission = function () { return Office.TblAssetRow.insertPermission; };
            TblAssetGrid.prototype.getLocalTextPrefix = function () { return Office.TblAssetRow.localTextPrefix; };
            TblAssetGrid.prototype.getService = function () { return Office.TblAssetService.baseUrl; };
            TblAssetGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TblAssetGrid);
            return TblAssetGrid;
        }(Serenity.EntityGrid));
        Office.TblAssetGrid = TblAssetGrid;
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var TblAssetGroupDialog = /** @class */ (function (_super) {
            __extends(TblAssetGroupDialog, _super);
            function TblAssetGroupDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Office.TblAssetGroupForm(_this.idPrefix);
                return _this;
            }
            TblAssetGroupDialog.prototype.getFormKey = function () { return Office.TblAssetGroupForm.formKey; };
            TblAssetGroupDialog.prototype.getIdProperty = function () { return Office.TblAssetGroupRow.idProperty; };
            TblAssetGroupDialog.prototype.getLocalTextPrefix = function () { return Office.TblAssetGroupRow.localTextPrefix; };
            TblAssetGroupDialog.prototype.getNameProperty = function () { return Office.TblAssetGroupRow.nameProperty; };
            TblAssetGroupDialog.prototype.getService = function () { return Office.TblAssetGroupService.baseUrl; };
            TblAssetGroupDialog.prototype.getDeletePermission = function () { return Office.TblAssetGroupRow.deletePermission; };
            TblAssetGroupDialog.prototype.getInsertPermission = function () { return Office.TblAssetGroupRow.insertPermission; };
            TblAssetGroupDialog.prototype.getUpdatePermission = function () { return Office.TblAssetGroupRow.updatePermission; };
            TblAssetGroupDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], TblAssetGroupDialog);
            return TblAssetGroupDialog;
        }(Serenity.EntityDialog));
        Office.TblAssetGroupDialog = TblAssetGroupDialog;
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var TblAssetGroupGrid = /** @class */ (function (_super) {
            __extends(TblAssetGroupGrid, _super);
            function TblAssetGroupGrid(container) {
                return _super.call(this, container) || this;
            }
            TblAssetGroupGrid.prototype.getColumnsKey = function () { return 'Office.TblAssetGroup'; };
            TblAssetGroupGrid.prototype.getDialogType = function () { return Office.TblAssetGroupDialog; };
            TblAssetGroupGrid.prototype.getIdProperty = function () { return Office.TblAssetGroupRow.idProperty; };
            TblAssetGroupGrid.prototype.getInsertPermission = function () { return Office.TblAssetGroupRow.insertPermission; };
            TblAssetGroupGrid.prototype.getLocalTextPrefix = function () { return Office.TblAssetGroupRow.localTextPrefix; };
            TblAssetGroupGrid.prototype.getService = function () { return Office.TblAssetGroupService.baseUrl; };
            TblAssetGroupGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TblAssetGroupGrid);
            return TblAssetGroupGrid;
        }(Serenity.EntityGrid));
        Office.TblAssetGroupGrid = TblAssetGroupGrid;
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var AssetToPlaceDialog = /** @class */ (function (_super) {
            __extends(AssetToPlaceDialog, _super);
            function AssetToPlaceDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Office.TblAssignAssetToPlaceForm(_this.idPrefix);
                return _this;
            }
            AssetToPlaceDialog.prototype.getFormKey = function () { return Office.TblAssignAssetToPlaceForm.formKey; };
            AssetToPlaceDialog.prototype.getIdProperty = function () { return Office.TblAssignAssetToPlaceRow.idProperty; };
            AssetToPlaceDialog.prototype.getLocalTextPrefix = function () { return Office.TblAssignAssetToPlaceRow.localTextPrefix; };
            AssetToPlaceDialog.prototype.getNameProperty = function () { return Office.TblAssignAssetToPlaceRow.nameProperty; };
            AssetToPlaceDialog.prototype.getService = function () { return Office.TblAssignAssetToPlaceService.baseUrl; };
            AssetToPlaceDialog.prototype.getDeletePermission = function () { return Office.TblAssignAssetToPlaceRow.deletePermission; };
            AssetToPlaceDialog.prototype.getInsertPermission = function () { return Office.TblAssignAssetToPlaceRow.insertPermission; };
            AssetToPlaceDialog.prototype.getUpdatePermission = function () { return Office.TblAssignAssetToPlaceRow.updatePermission; };
            AssetToPlaceDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                Serenity.EditorUtils.setReadOnly(this.form.PlaceId, true);
                //            this.form.PlaceId= this
            };
            AssetToPlaceDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], AssetToPlaceDialog);
            return AssetToPlaceDialog;
        }(Serenity.EntityDialog));
        Office.AssetToPlaceDialog = AssetToPlaceDialog;
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var AssetToPlaceGrid = /** @class */ (function (_super) {
            __extends(AssetToPlaceGrid, _super);
            function AssetToPlaceGrid(container) {
                return _super.call(this, container) || this;
            }
            AssetToPlaceGrid.prototype.getColumnsKey = function () { return 'Office.TblAssignAssetToPlace'; };
            //  protected getDialogType() { return TblAssignAssetToPlaceDialog; }
            AssetToPlaceGrid.prototype.getIdProperty = function () { return Office.TblAssignAssetToPlaceRow.idProperty; };
            //  protected getInsertPermission() { return TblAssignAssetToPlaceRow.insertPermission; }
            AssetToPlaceGrid.prototype.getLocalTextPrefix = function () { return Office.TblAssignAssetToPlaceRow.localTextPrefix; };
            AssetToPlaceGrid.prototype.getService = function () { return Office.TblAssignAssetToPlaceService.baseUrl; };
            //protected getButtons() {
            //    return null;
            //}
            //protected getInitialTitle() {
            //    return null;
            //}
            //protected usePager() {
            //    return false;
            //}
            AssetToPlaceGrid.prototype.getGridCanLoad = function () {
                return this.placeID != null;
            };
            Object.defineProperty(AssetToPlaceGrid.prototype, "placeID", {
                get: function () {
                    return this._placeID;
                },
                set: function (value) {
                    if (this._placeID != value) {
                        this._placeID = value;
                        //this.setEquality(TblAssignAssetToPlaceRow.Fields.PlaceId, value);
                        this.setEquality("PlaceId", value);
                        this.refresh();
                    }
                },
                enumerable: true,
                configurable: true
            });
            AssetToPlaceGrid.prototype.addButtonClick = function () {
                var eq = this.view.params.EqualityFilter;
                this.editItem({
                    PlaceId: eq ? eq.PlaceId : null
                });
            };
            AssetToPlaceGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], AssetToPlaceGrid);
            return AssetToPlaceGrid;
        }(Serenity.EntityGrid));
        Office.AssetToPlaceGrid = AssetToPlaceGrid;
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        /**
           * Our custom product editor type
           */
        var ChangingLookupTextEditor = /** @class */ (function (_super) {
            __extends(ChangingLookupTextEditor, _super);
            function ChangingLookupTextEditor(container, options) {
                return _super.call(this, container, options) || this;
            }
            ChangingLookupTextEditor.prototype.getLookupKey = function () {
                return Office.TblAssetRow.lookupKey;
            };
            ChangingLookupTextEditor.prototype.getItemText = function (item, lookup) {
                return item.Code + "-" + _super.prototype.getItemText.call(this, item, lookup);
            };
            ChangingLookupTextEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], ChangingLookupTextEditor);
            return ChangingLookupTextEditor;
        }(Serenity.LookupEditorBase));
        Office.ChangingLookupTextEditor = ChangingLookupTextEditor;
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var TblAssignAssetToPlaceDialog = /** @class */ (function (_super) {
            __extends(TblAssignAssetToPlaceDialog, _super);
            function TblAssignAssetToPlaceDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Office.TblAssignAssetToPlaceForm(_this.idPrefix);
                return _this;
            }
            TblAssignAssetToPlaceDialog.prototype.getFormKey = function () { return Office.TblAssignAssetToPlaceForm.formKey; };
            TblAssignAssetToPlaceDialog.prototype.getIdProperty = function () { return Office.TblAssignAssetToPlaceRow.idProperty; };
            TblAssignAssetToPlaceDialog.prototype.getLocalTextPrefix = function () { return Office.TblAssignAssetToPlaceRow.localTextPrefix; };
            TblAssignAssetToPlaceDialog.prototype.getNameProperty = function () { return Office.TblAssignAssetToPlaceRow.nameProperty; };
            TblAssignAssetToPlaceDialog.prototype.getService = function () { return Office.TblAssignAssetToPlaceService.baseUrl; };
            TblAssignAssetToPlaceDialog.prototype.getDeletePermission = function () { return Office.TblAssignAssetToPlaceRow.deletePermission; };
            TblAssignAssetToPlaceDialog.prototype.getInsertPermission = function () { return Office.TblAssignAssetToPlaceRow.insertPermission; };
            TblAssignAssetToPlaceDialog.prototype.getUpdatePermission = function () { return Office.TblAssignAssetToPlaceRow.updatePermission; };
            TblAssignAssetToPlaceDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], TblAssignAssetToPlaceDialog);
            return TblAssignAssetToPlaceDialog;
        }(Serenity.EntityDialog));
        Office.TblAssignAssetToPlaceDialog = TblAssignAssetToPlaceDialog;
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var TblAssignAssetToPlaceGrid = /** @class */ (function (_super) {
            __extends(TblAssignAssetToPlaceGrid, _super);
            function TblAssignAssetToPlaceGrid(container) {
                return _super.call(this, container) || this;
            }
            TblAssignAssetToPlaceGrid.prototype.getColumnsKey = function () { return 'Office.TblAssignAssetToPlace'; };
            TblAssignAssetToPlaceGrid.prototype.getDialogType = function () { return Office.TblAssignAssetToPlaceDialog; };
            TblAssignAssetToPlaceGrid.prototype.getIdProperty = function () { return Office.TblAssignAssetToPlaceRow.idProperty; };
            TblAssignAssetToPlaceGrid.prototype.getInsertPermission = function () { return Office.TblAssignAssetToPlaceRow.insertPermission; };
            TblAssignAssetToPlaceGrid.prototype.getLocalTextPrefix = function () { return Office.TblAssignAssetToPlaceRow.localTextPrefix; };
            TblAssignAssetToPlaceGrid.prototype.getService = function () { return Office.TblAssignAssetToPlaceService.baseUrl; };
            TblAssignAssetToPlaceGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TblAssignAssetToPlaceGrid);
            return TblAssignAssetToPlaceGrid;
        }(Serenity.EntityGrid));
        Office.TblAssignAssetToPlaceGrid = TblAssignAssetToPlaceGrid;
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var TblAssignCampaingDialog = /** @class */ (function (_super) {
            __extends(TblAssignCampaingDialog, _super);
            function TblAssignCampaingDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Office.TblAssignCampaingForm(_this.idPrefix);
                return _this;
            }
            TblAssignCampaingDialog.prototype.getFormKey = function () { return Office.TblAssignCampaingForm.formKey; };
            TblAssignCampaingDialog.prototype.getIdProperty = function () { return Office.TblAssignCampaingRow.idProperty; };
            TblAssignCampaingDialog.prototype.getLocalTextPrefix = function () { return Office.TblAssignCampaingRow.localTextPrefix; };
            TblAssignCampaingDialog.prototype.getService = function () { return Office.TblAssignCampaingService.baseUrl; };
            TblAssignCampaingDialog.prototype.getDeletePermission = function () { return Office.TblAssignCampaingRow.deletePermission; };
            TblAssignCampaingDialog.prototype.getInsertPermission = function () { return Office.TblAssignCampaingRow.insertPermission; };
            TblAssignCampaingDialog.prototype.getUpdatePermission = function () { return Office.TblAssignCampaingRow.updatePermission; };
            TblAssignCampaingDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], TblAssignCampaingDialog);
            return TblAssignCampaingDialog;
        }(Serenity.EntityDialog));
        Office.TblAssignCampaingDialog = TblAssignCampaingDialog;
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var TblAssignCampaingGrid = /** @class */ (function (_super) {
            __extends(TblAssignCampaingGrid, _super);
            function TblAssignCampaingGrid(container) {
                return _super.call(this, container) || this;
            }
            TblAssignCampaingGrid.prototype.getColumnsKey = function () { return 'Office.TblAssignCampaing'; };
            TblAssignCampaingGrid.prototype.getDialogType = function () { return Office.TblAssignCampaingDialog; };
            TblAssignCampaingGrid.prototype.getIdProperty = function () { return Office.TblAssignCampaingRow.idProperty; };
            TblAssignCampaingGrid.prototype.getInsertPermission = function () { return Office.TblAssignCampaingRow.insertPermission; };
            TblAssignCampaingGrid.prototype.getLocalTextPrefix = function () { return Office.TblAssignCampaingRow.localTextPrefix; };
            TblAssignCampaingGrid.prototype.getService = function () { return Office.TblAssignCampaingService.baseUrl; };
            TblAssignCampaingGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TblAssignCampaingGrid);
            return TblAssignCampaingGrid;
        }(Serenity.EntityGrid));
        Office.TblAssignCampaingGrid = TblAssignCampaingGrid;
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var TblBranchDialog = /** @class */ (function (_super) {
            __extends(TblBranchDialog, _super);
            function TblBranchDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Office.TblBranchForm(_this.idPrefix);
                return _this;
            }
            TblBranchDialog.prototype.getFormKey = function () { return Office.TblBranchForm.formKey; };
            TblBranchDialog.prototype.getIdProperty = function () { return Office.TblBranchRow.idProperty; };
            TblBranchDialog.prototype.getLocalTextPrefix = function () { return Office.TblBranchRow.localTextPrefix; };
            TblBranchDialog.prototype.getNameProperty = function () { return Office.TblBranchRow.nameProperty; };
            TblBranchDialog.prototype.getService = function () { return Office.TblBranchService.baseUrl; };
            TblBranchDialog.prototype.getDeletePermission = function () { return Office.TblBranchRow.deletePermission; };
            TblBranchDialog.prototype.getInsertPermission = function () { return Office.TblBranchRow.insertPermission; };
            TblBranchDialog.prototype.getUpdatePermission = function () { return Office.TblBranchRow.updatePermission; };
            TblBranchDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], TblBranchDialog);
            return TblBranchDialog;
        }(Serenity.EntityDialog));
        Office.TblBranchDialog = TblBranchDialog;
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var TblBranchGrid = /** @class */ (function (_super) {
            __extends(TblBranchGrid, _super);
            function TblBranchGrid(container) {
                return _super.call(this, container) || this;
            }
            TblBranchGrid.prototype.getColumnsKey = function () { return 'Office.TblBranch'; };
            TblBranchGrid.prototype.getDialogType = function () { return Office.TblBranchDialog; };
            TblBranchGrid.prototype.getIdProperty = function () { return Office.TblBranchRow.idProperty; };
            TblBranchGrid.prototype.getInsertPermission = function () { return Office.TblBranchRow.insertPermission; };
            TblBranchGrid.prototype.getLocalTextPrefix = function () { return Office.TblBranchRow.localTextPrefix; };
            TblBranchGrid.prototype.getService = function () { return Office.TblBranchService.baseUrl; };
            TblBranchGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TblBranchGrid);
            return TblBranchGrid;
        }(Serenity.EntityGrid));
        Office.TblBranchGrid = TblBranchGrid;
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var TblCampaignDialog = /** @class */ (function (_super) {
            __extends(TblCampaignDialog, _super);
            function TblCampaignDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Office.TblCampaignForm(_this.idPrefix);
                return _this;
            }
            TblCampaignDialog.prototype.getFormKey = function () { return Office.TblCampaignForm.formKey; };
            TblCampaignDialog.prototype.getIdProperty = function () { return Office.TblCampaignRow.idProperty; };
            TblCampaignDialog.prototype.getLocalTextPrefix = function () { return Office.TblCampaignRow.localTextPrefix; };
            TblCampaignDialog.prototype.getService = function () { return Office.TblCampaignService.baseUrl; };
            TblCampaignDialog.prototype.getDeletePermission = function () { return Office.TblCampaignRow.deletePermission; };
            TblCampaignDialog.prototype.getInsertPermission = function () { return Office.TblCampaignRow.insertPermission; };
            TblCampaignDialog.prototype.getUpdatePermission = function () { return Office.TblCampaignRow.updatePermission; };
            TblCampaignDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], TblCampaignDialog);
            return TblCampaignDialog;
        }(Serenity.EntityDialog));
        Office.TblCampaignDialog = TblCampaignDialog;
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var TblCampaignGrid = /** @class */ (function (_super) {
            __extends(TblCampaignGrid, _super);
            function TblCampaignGrid(container) {
                return _super.call(this, container) || this;
            }
            TblCampaignGrid.prototype.getColumnsKey = function () { return 'Office.TblCampaign'; };
            TblCampaignGrid.prototype.getDialogType = function () { return Office.TblCampaignDialog; };
            TblCampaignGrid.prototype.getIdProperty = function () { return Office.TblCampaignRow.idProperty; };
            TblCampaignGrid.prototype.getInsertPermission = function () { return Office.TblCampaignRow.insertPermission; };
            TblCampaignGrid.prototype.getLocalTextPrefix = function () { return Office.TblCampaignRow.localTextPrefix; };
            TblCampaignGrid.prototype.getService = function () { return Office.TblCampaignService.baseUrl; };
            TblCampaignGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TblCampaignGrid);
            return TblCampaignGrid;
        }(Serenity.EntityGrid));
        Office.TblCampaignGrid = TblCampaignGrid;
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var TblCampaignTypeDialog = /** @class */ (function (_super) {
            __extends(TblCampaignTypeDialog, _super);
            function TblCampaignTypeDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Office.TblCampaignTypeForm(_this.idPrefix);
                return _this;
            }
            TblCampaignTypeDialog.prototype.getFormKey = function () { return Office.TblCampaignTypeForm.formKey; };
            TblCampaignTypeDialog.prototype.getIdProperty = function () { return Office.TblCampaignTypeRow.idProperty; };
            TblCampaignTypeDialog.prototype.getLocalTextPrefix = function () { return Office.TblCampaignTypeRow.localTextPrefix; };
            TblCampaignTypeDialog.prototype.getService = function () { return Office.TblCampaignTypeService.baseUrl; };
            TblCampaignTypeDialog.prototype.getDeletePermission = function () { return Office.TblCampaignTypeRow.deletePermission; };
            TblCampaignTypeDialog.prototype.getInsertPermission = function () { return Office.TblCampaignTypeRow.insertPermission; };
            TblCampaignTypeDialog.prototype.getUpdatePermission = function () { return Office.TblCampaignTypeRow.updatePermission; };
            TblCampaignTypeDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], TblCampaignTypeDialog);
            return TblCampaignTypeDialog;
        }(Serenity.EntityDialog));
        Office.TblCampaignTypeDialog = TblCampaignTypeDialog;
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var TblCampaignTypeGrid = /** @class */ (function (_super) {
            __extends(TblCampaignTypeGrid, _super);
            function TblCampaignTypeGrid(container) {
                return _super.call(this, container) || this;
            }
            TblCampaignTypeGrid.prototype.getColumnsKey = function () { return 'Office.TblCampaignType'; };
            TblCampaignTypeGrid.prototype.getDialogType = function () { return Office.TblCampaignTypeDialog; };
            TblCampaignTypeGrid.prototype.getIdProperty = function () { return Office.TblCampaignTypeRow.idProperty; };
            TblCampaignTypeGrid.prototype.getInsertPermission = function () { return Office.TblCampaignTypeRow.insertPermission; };
            TblCampaignTypeGrid.prototype.getLocalTextPrefix = function () { return Office.TblCampaignTypeRow.localTextPrefix; };
            TblCampaignTypeGrid.prototype.getService = function () { return Office.TblCampaignTypeService.baseUrl; };
            TblCampaignTypeGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TblCampaignTypeGrid);
            return TblCampaignTypeGrid;
        }(Serenity.EntityGrid));
        Office.TblCampaignTypeGrid = TblCampaignTypeGrid;
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var TblCityDialog = /** @class */ (function (_super) {
            __extends(TblCityDialog, _super);
            function TblCityDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Office.TblCityForm(_this.idPrefix);
                return _this;
            }
            TblCityDialog.prototype.getFormKey = function () { return Office.TblCityForm.formKey; };
            TblCityDialog.prototype.getIdProperty = function () { return Office.TblCityRow.idProperty; };
            TblCityDialog.prototype.getLocalTextPrefix = function () { return Office.TblCityRow.localTextPrefix; };
            TblCityDialog.prototype.getNameProperty = function () { return Office.TblCityRow.nameProperty; };
            TblCityDialog.prototype.getService = function () { return Office.TblCityService.baseUrl; };
            TblCityDialog.prototype.getDeletePermission = function () { return Office.TblCityRow.deletePermission; };
            TblCityDialog.prototype.getInsertPermission = function () { return Office.TblCityRow.insertPermission; };
            TblCityDialog.prototype.getUpdatePermission = function () { return Office.TblCityRow.updatePermission; };
            TblCityDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], TblCityDialog);
            return TblCityDialog;
        }(Serenity.EntityDialog));
        Office.TblCityDialog = TblCityDialog;
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var TblCityGrid = /** @class */ (function (_super) {
            __extends(TblCityGrid, _super);
            function TblCityGrid(container) {
                return _super.call(this, container) || this;
            }
            TblCityGrid.prototype.getColumnsKey = function () { return 'Office.TblCity'; };
            TblCityGrid.prototype.getDialogType = function () { return Office.TblCityDialog; };
            TblCityGrid.prototype.getIdProperty = function () { return Office.TblCityRow.idProperty; };
            TblCityGrid.prototype.getInsertPermission = function () { return Office.TblCityRow.insertPermission; };
            TblCityGrid.prototype.getLocalTextPrefix = function () { return Office.TblCityRow.localTextPrefix; };
            TblCityGrid.prototype.getService = function () { return Office.TblCityService.baseUrl; };
            TblCityGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TblCityGrid);
            return TblCityGrid;
        }(Serenity.EntityGrid));
        Office.TblCityGrid = TblCityGrid;
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var ContractConformCanncelDialog = /** @class */ (function (_super) {
            __extends(ContractConformCanncelDialog, _super);
            function ContractConformCanncelDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Office.ContractConformCanncelForm(_this.idPrefix);
                _this.form.Id.value = _this.Id == null ? "" : _this.Id.toString();
                return _this;
            }
            ContractConformCanncelDialog.prototype.getDialogTitle = function () {
                return "Lý do hủy";
            };
            ContractConformCanncelDialog.prototype.getDialogButtons = function () {
                var _this = this;
                return [
                    {
                        text: 'Cập nhật',
                        click: function () {
                            if (!_this.validateBeforeSave())
                                return;
                            if (_this.form.Reason.value == null ||
                                Q.isEmptyOrNull(_this.form.Reason.value)) {
                                Q.notifyError("Vui lòng nhập lý do!");
                                return;
                            }
                            Office.ContractConformCanncelFormService.Cancel({
                                Id: _this.Id.toString(),
                                Reason: _this.form.Reason.value
                            }, function (response) {
                                Q.notifySuccess('Đã hủy thành công: ' + (response.Inserted || 0));
                                if (response.ErrorList != null && response.ErrorList.length > 0) {
                                    Q.alert(response.ErrorList.join(',\r\n '));
                                }
                                Serenity.SubDialogHelper.triggerDataChange(_this);
                                _this.dialogClose();
                            });
                        },
                    },
                    {
                        text: 'Hủy',
                        click: function () { return _this.dialogClose(); }
                    }
                ];
            };
            ContractConformCanncelDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ContractConformCanncelDialog);
            return ContractConformCanncelDialog;
        }(Serenity.PropertyDialog));
        Office.ContractConformCanncelDialog = ContractConformCanncelDialog;
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var ContractConformCanncelFormService;
        (function (ContractConformCanncelFormService) {
            ContractConformCanncelFormService.baseUrl = 'Office/tblContract';
            [
                'Cancel'
            ].forEach(function (x) {
                ContractConformCanncelFormService[x] = function (r, s, o) {
                    return Q.serviceRequest(ContractConformCanncelFormService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ContractConformCanncelFormService = Office.ContractConformCanncelFormService || (Office.ContractConformCanncelFormService = {}));
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var ContractAssignItemsGrid = /** @class */ (function (_super) {
            __extends(ContractAssignItemsGrid, _super);
            function ContractAssignItemsGrid(container) {
                return _super.call(this, container) || this;
            }
            ContractAssignItemsGrid.prototype.getColumnsKey = function () { return 'Office.TblContractItems'; };
            ContractAssignItemsGrid.prototype.getDialogType = function () { return Office.TblContractItemsDialog; };
            ContractAssignItemsGrid.prototype.getIdProperty = function () { return Office.TblContractItemsRow.idProperty; };
            ContractAssignItemsGrid.prototype.getInsertPermission = function () { return Office.TblContractItemsRow.insertPermission; };
            ContractAssignItemsGrid.prototype.getLocalTextPrefix = function () { return Office.TblContractItemsRow.localTextPrefix; };
            ContractAssignItemsGrid.prototype.getService = function () { return Office.TblContractItemsService.baseUrl; };
            //protected getButtons() {
            //    return null;
            //}
            //protected getInitialTitle() {
            //    return null;
            //}
            //protected usePager() {
            //    return false;
            //}
            ContractAssignItemsGrid.prototype.getGridCanLoad = function () {
                return this._contractID != null;
            };
            Object.defineProperty(ContractAssignItemsGrid.prototype, "contractID", {
                get: function () {
                    return this._contractID;
                },
                set: function (value) {
                    if (this._contractID != value) {
                        this._contractID = value;
                        //this.setEquality(TblAssignAssetToPlaceRow.Fields.PlaceId, value);
                        this.setEquality("ContractId", value);
                        this.refresh();
                    }
                },
                enumerable: true,
                configurable: true
            });
            ContractAssignItemsGrid.prototype.addButtonClick = function () {
                var eq = this.view.params.EqualityFilter;
                this.editItem({
                    ContractId: eq ? eq.ContractId : null
                });
            };
            ContractAssignItemsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ContractAssignItemsGrid);
            return ContractAssignItemsGrid;
        }(Serenity.EntityGrid));
        Office.ContractAssignItemsGrid = ContractAssignItemsGrid;
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        /**
         * This is our category editor that will show only categories of Produce and
         * Seafood. We are subclassing LookupEditorBase which also LookupEditor
         * derives from.
         *
         * After compiling and transforming templates, this editor type will be
         * available in server side to use in our LookupFilterByMultipleForm,
         * which is a version of ProductForm that uses our custom editor.
         */
        var PlaceContractEditor = /** @class */ (function (_super) {
            __extends(PlaceContractEditor, _super);
            function PlaceContractEditor(container, opt) {
                return _super.call(this, container, opt) || this;
            }
            /**
             * Normally LookupEditor requires a lookup key to determine which set of
             * lookup data to show in editor. As our editor will only show category
             * data, we lock it to category lookup key.
             */
            PlaceContractEditor.prototype.getLookupKey = function () {
                return Office.TblPlaceOfBussinessRow.lookupKey;
            };
            /**
             * Here we are filtering by category name but you could filter by any field.
             * Just make sure the fields you filter on has [LookupInclude] attribute on them,
             * otherwise their value will be null in client side as they are not sent back
             * from server in lookup script.
             */
            PlaceContractEditor.prototype.getItems = function (lookup) {
                // Lấy danh sách các hợp đồng với status: hủy
                var ContractList = Office.TblContractRow.getLookup().items.filter(function (k) { return k.Status === 4; });
                if (this.myId === 2)
                    return _super.prototype.getItems.call(this, lookup).filter(function (x) {
                        return (x.Status === 2 || x.Status === 5) && ((x.ContractId == null ? 0 : x.ContractId) === 0
                            //Đã có hợp đồng nhưng ở status hủy
                            || ContractList.filter(function (k) { return k.Id === x.ContractId; }).length > 0);
                    });
                else
                    return _super.prototype.getItems.call(this, lookup).filter(function (x) {
                        return x.Status === 2 || x.Status === 5;
                    });
            };
            PlaceContractEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], PlaceContractEditor);
            return PlaceContractEditor;
        }(Serenity.LookupEditorBase));
        Office.PlaceContractEditor = PlaceContractEditor;
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var TblContractDialog = /** @class */ (function (_super) {
            __extends(TblContractDialog, _super);
            // private contractItems: ItemDetailEditor;
            function TblContractDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Office.TblContractForm(_this.idPrefix);
                _this.form = new Office.TblContractForm(_this.idPrefix);
                _this.isManualEdit = _this.isEditMode();
                var regex = regex; // /^([a-zA-Z0\-\,\/\\\\(\)\)\.-9ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\s]+)$/;
                var regexSpecial = regexSpecial; // /[!@#$%^&*(),.?":{}|<>]/;
                var emailRegex = emailRegex; // /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                var mesSpecial = mesSpecial; //"Không nhập ký tự đặc biệt";
                _this.form.ContractName.addValidationRule(_this.uniqueName, function (e) {
                    if (!(regex.test(e.val())))
                        return mesSpecial;
                });
                _this.form.AddressOfOwner.addValidationRule(_this.uniqueName, function (e) {
                    if (!(regex.test(e.val())))
                        return mesSpecial;
                });
                _this.form.NameOfOwner.addValidationRule(_this.uniqueName, function (e) {
                    if (!(regex.test(e.val())))
                        return mesSpecial;
                });
                _this.form.NameOfOwner2nd.addValidationRule(_this.uniqueName, function (e) {
                    if (!(regex.test(e.val())))
                        return mesSpecial;
                });
                _this.form.ECPayPhone.addValidationRule(_this.uniqueName, function (e) {
                    //if (!(/^(0?)(-?\d{10})$/.test(this.form.PhoneOfOwner.value))) 
                    var phone = e.val();
                    if (phone.length > 0) {
                        if (phone.substring(0, 1) !== "0")
                            return "Số điện thoại bắt đầu bằng 0";
                        else if (phone.length < 10 || phone.length > 11)
                            return "Số điện 10 hoặc 11 số";
                    }
                });
                _this.form.PhoneOfOwner.addValidationRule(_this.uniqueName, function (e) {
                    //if (!(/^(0?)(-?\d{10})$/.test(this.form.PhoneOfOwner.value))) 
                    var phone = e.val();
                    if (phone.length < 10 || phone.length > 11)
                        return "Số điện 10 hoặc 11 số";
                });
                _this.form.EmailOfOwner.addValidationRule(_this.uniqueName, function (e) {
                    if (!(emailRegex.test(e.val())))
                        return "Email không đúng định dạng";
                });
                _this.form.ECPayAddress.addValidationRule(_this.uniqueName, function (e) {
                    if (!(regex.test(e.val())))
                        return mesSpecial;
                });
                _this.form.ECPayBankName.addValidationRule(_this.uniqueName, function (e) {
                    if (!(regex.test(e.val())))
                        return mesSpecial;
                });
                _this.form.ECPayCompanyName.addValidationRule(_this.uniqueName, function (e) {
                    if (!(regex.test(e.val())))
                        return mesSpecial;
                });
                _this.form.EcPayPerson.addValidationRule(_this.uniqueName, function (e) {
                    if (!(regex.test(e.val())))
                        return mesSpecial;
                });
                _this.form.IdentifyNo.addValidationRule(_this.uniqueName, function (e) {
                    if (!(regex.test(e.val())))
                        return mesSpecial;
                });
                _this.form.IdentifyNo2nd.addValidationRule(_this.uniqueName, function (e) {
                    if (!(regex.test(e.val())))
                        return mesSpecial;
                });
                _this.form.CertificateNo.addValidationRule(_this.uniqueName, function (e) {
                    if ((regexSpecial.test(e.val())))
                        return mesSpecial;
                });
                _this.form.WalletName.addValidationRule(_this.uniqueName, function (e) {
                    if ((regexSpecial.test(e.val())))
                        return mesSpecial;
                });
                _this.form.WalletNo.addValidationRule(_this.uniqueName, function (e) {
                    if ((regexSpecial.test(e.val())))
                        return mesSpecial;
                });
                _this.form.AccountName.addValidationRule(_this.uniqueName, function (e) {
                    if (!(regex.test(e.val())))
                        return mesSpecial;
                });
                _this.form.BankName.addValidationRule(_this.uniqueName, function (e) {
                    if (!(regex.test(e.val())))
                        return mesSpecial;
                });
                _this.form.AccountBankNo.addValidationRule(_this.uniqueName, function (e) {
                    if ((regexSpecial.test(e.val())))
                        return mesSpecial;
                });
                _this.form.IdentifyNo.addValidationRule(_this.uniqueName, function (e) {
                    var identifyType = _this.form.IdentifyType.value;
                    if (identifyType == '3' && isNaN(e.val())) {
                        return "Vui lòng nhập số";
                    }
                });
                _this.form.IdentifyNo2nd.addValidationRule(_this.uniqueName, function (e) {
                    var identifyType2 = _this.form.IdentifyType2nd.value;
                    if (identifyType2 == '3' && isNaN(e.val())) {
                        return "Vui lòng nhập số";
                    }
                });
                _this.form.PlaceId.changeSelect2(function (e) {
                    var ItemId = Office.TblPlaceOfBussinessRow.getLookup().itemById[_this.form.PlaceId.value];
                    if (ItemId != null) {
                        //PlaceId: this.entityId;
                        _this.form.BuyOrRent.value = ItemId.Type == null ? null : ItemId.Type.toString();
                        // this.form.PlaceDepositAmt.value= ItemId.DepositAmt;
                        _this.form.PlacePriceBuy.value = ItemId.PriceBuy;
                        _this.form.PlacePriceRent.value = ItemId.PriceRent;
                        _this.form.TotalContractAmt.value = ItemId.Type == 1 ? ItemId.PriceRent : ItemId.PriceBuy;
                        _this.form.ContractAmt.value = _this.form.TotalContractAmt.value;
                        _this.form.PlaceAddress.value = ItemId.Address;
                        _this.form.PlaceCityId.value = ItemId.CityId == null ? null : ItemId.CityId.toString();
                        _this.form.PlaceDistrictId.value = ItemId.DistrictId == null ? null : ItemId.DistrictId.toString();
                        _this.form.PlaceWardsId.value = ItemId.WardsId == null ? null : ItemId.WardsId.toString();
                        _this.form.PlaceDescription.value = ItemId.Description;
                        _this.form.Month.value = ItemId.Type == 1 ? ItemId.MonthRent : null;
                        _this.form.ListSchedule.monthRent = ItemId.Type == 1 ? ItemId.MonthRent : null;
                        _this.form.NameOfOwner.value = ItemId.NameOfOwner;
                        _this.form.PhoneOfOwner.value = ItemId.PhoneOfOwner;
                        _this.form.PlaceTotalAreaUse.value = ItemId.TotalArea == null ? null : ItemId.TotalArea;
                        _this.form.ListSchedule.isRent = ItemId.Type == 1 ? true : false;
                        _this.ValidateData(ItemId.Type == 1 ? true : false);
                        _this.form.TypeId.filterField = "Type";
                        _this.form.TypeId.filterValue = _this.form.BuyOrRent.value;
                    }
                });
                var amtString = "";
                _this.form.ContractAmt.change(function (e) {
                    var amount = _this.form.ContractAmt.value;
                    var stringAmt = _this.form.ContractAmtString;
                    $.ajax({
                        url: '/Services/Office/tblContract/ReadMoney',
                        type: 'post',
                        dataType: 'json',
                        data: { 'amount': amount },
                        success: function (data) {
                            var rs = data;
                            if (rs.status == 'OK') {
                                amtString = data.message;
                                stringAmt.value = amtString;
                            }
                        }
                    });
                });
                return _this;
            }
            TblContractDialog.prototype.getFormKey = function () { return Office.TblContractForm.formKey; };
            TblContractDialog.prototype.getIdProperty = function () { return Office.TblContractRow.idProperty; };
            TblContractDialog.prototype.getLocalTextPrefix = function () { return Office.TblContractRow.localTextPrefix; };
            TblContractDialog.prototype.getNameProperty = function () { return Office.TblContractRow.nameProperty; };
            TblContractDialog.prototype.getService = function () { return Office.TblContractService.baseUrl; };
            TblContractDialog.prototype.getDeletePermission = function () { return Office.TblContractRow.deletePermission; };
            TblContractDialog.prototype.getInsertPermission = function () { return Office.TblContractRow.insertPermission; };
            TblContractDialog.prototype.getUpdatePermission = function () { return Office.TblContractRow.updatePermission; };
            TblContractDialog.prototype.loadEntity = function (entity) {
                _super.prototype.loadEntity.call(this, entity);
            };
            TblContractDialog.prototype.afterLoadEntity = function () {
                var _this = this;
                _super.prototype.afterLoadEntity.call(this);
                if (this.isNewOrDeleted()) {
                    if (this.form.PlaceId.value === null || this.form.PlaceId.value == "") {
                        this.form.PlaceId.myId = 2;
                    }
                    else {
                        this.form.PlaceId.myId = 1;
                        this.form.PlaceId.readOnly = true;
                    }
                    this.form.PlaceId.updateItems();
                    this.form.Status.readOnly = true;
                    this.element.find(".printContract").addClass('disabled');
                    this.element.find(".addSchedule").addClass('disabled');
                    this.element.find(".addApprove").addClass('disabled');
                    if (this.form.BuyOrRent.value !== null) {
                        this.form.TypeId.filterField = "Type";
                        this.form.TypeId.filterValue = this.form.BuyOrRent.value;
                    }
                    else {
                        this.form.TypeId.cascadeField = "Type";
                        this.form.TypeId.cascadeFrom = "BuyOrRent";
                    }
                    this.form.ListSchedule.toDate = this.form.ToDate.value;
                    this.form.ListSchedule.formDate = this.form.BeginDate.value == null ? this.form.FromDate.value : this.form.BeginDate.value;
                    this.form.ListSchedule.amount = this.form.ContractAmt.value;
                    this.form.ListSchedule.scheduleMonth = this.form.RecurringPayment.value;
                    this.form.ListSchedule.monthRent = this.form.Month.value;
                    this.form.ListSchedule.contractNo = this.form.No.value;
                    this.form.ListSchedule.isRent = this.form.BuyOrRent.value == "1" ? true : false;
                    this.form.Status.value = "1";
                }
                else {
                    var _typeId = this.form.TypeId.value;
                    this.form.TypeId.filterField = "Type";
                    this.form.TypeId.filterValue = parseInt(this.form.BuyOrRent.value);
                    this.form.TypeId.value = _typeId;
                    this.form.ListSchedule.toDate = this.form.ToDate.value;
                    this.form.ListSchedule.formDate = this.form.BeginDate.value == null ? this.form.FromDate.value : this.form.BeginDate.value;
                    this.form.ListSchedule.amount = this.form.ContractAmt.value;
                    this.form.ListSchedule.scheduleMonth = this.form.RecurringPayment.value;
                    this.form.ListSchedule.monthRent = this.form.Month.value;
                    this.form.ListSchedule.contractNo = this.form.No.value;
                    this.form.ListSchedule.isRent = this.form.BuyOrRent.value == "1" ? true : false;
                    //check status
                    this.form.ListSchedule.contractId = this.entityId;
                    this.form.ListDetail.contractId = this.entityId;
                    this.form.ListDetail.typeContract = parseInt(this.form.TypeId.value);
                    if (this.form.Status.value == "2") {
                        // da phe duyet khong cho chỉnh
                        this.form.ListSchedule.isReadOnly = true;
                        try {
                            this.set_readOnly(true);
                            this.form.FileContractUpload.set_readOnly(false);
                            this.form.File1.set_readOnly(false);
                            this.form.File2.set_readOnly(false);
                            this.form.File3.set_readOnly(false);
                            this.form.File4.set_readOnly(false);
                            this.form.File5.set_readOnly(false);
                            this.form.File6.set_readOnly(false);
                            this.form.File7.set_readOnly(false);
                            Serenity.EditorUtils.setReadonly(this.form.IsCompleted.element, false);
                            //this.applyChangesButton.removeClass("disabled");
                            this.saveAndCloseButton.removeClass("disabled");
                        }
                        catch (e) {
                            console.log(e);
                            //this.applyChangesButton.removeClass("disabled");
                            this.saveAndCloseButton.removeClass("disabled");
                        }
                    }
                    else if (this.form.Status.value == "4" || this.form.Status.value == "5") {
                        this.set_readOnly(true);
                        this.form.ListSchedule.isReadOnly = true;
                    }
                }
                this.ValidateData(this.form.BuyOrRent.value == "1" ? true : false);
                this.form.ToDate.addValidationRule(this.uniqueName, function (e) {
                    var fromDate = _this.form.FromDate.value;
                    if (_this.form.ToDate.value <= fromDate) {
                        return "Vui lòng nhập ngày kết thúc hợp đồng lớn hơn ngày bắt đầu.";
                    }
                });
                this.form.ToDate.change(function (e) {
                    _this.form.ListSchedule.toDate = _this.form.ToDate.value;
                });
                this.form.FromDate.change(function (e) {
                    _this.form.BeginDate.value = _this.form.FromDate.value;
                    _this.form.ListSchedule.formDate = _this.form.FromDate.value;
                });
                this.form.BeginDate.change(function (e) {
                    // this.form.ReleaseDate.value = this.form.FromDate.value;
                    _this.form.ListSchedule.formDate = _this.form.BeginDate.value;
                });
                this.form.BeginDate.addValidationRule(this.uniqueName, function (e) {
                    var fromDate = Date.parse(_this.form.FromDate.value);
                    if (Date.parse(_this.form.BeginDate.value) < fromDate) {
                        return "Ngày bắt đầu tính tiền thuê không được nhỏ hơn ngày bắt đầu.";
                    }
                });
                this.form.ContractAmt.change(function (e) {
                    _this.form.ListSchedule.amount = _this.form.ContractAmt.value;
                });
                this.form.RecurringPayment.change(function (e) {
                    _this.form.ListSchedule.scheduleMonth = _this.form.RecurringPayment.value;
                });
                this.form.Month.change(function (e) {
                    _this.form.ListSchedule.monthRent = _this.form.Month.value;
                });
                if (this.isEditMode()) {
                    var status = this.form.Status.value;
                    if (status === "1" || status === "2") {
                        this.toolbar.findButton('btnCanncel').toggle(true);
                    }
                    else {
                        this.toolbar.findButton('btnCanncel').toggle(false);
                    }
                }
                else {
                    this.toolbar.findButton('btnCanncel').toggle(false);
                }
            };
            TblContractDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                var entityId_ = this.entityId;
                buttons.push({
                    title: 'Hủy',
                    cssClass: 'btnCanncel',
                    icon: 'fa-file-text',
                    onClick: function (e) {
                        //this.initDialog();
                        e.preventDefault();
                        var dialog = new Office.ContractConformCanncelDialog();
                        dialog.Id = _this.entityId;
                        dialog.element.on('dialogclose', function () {
                            //     Serenity.SubDialogHelper.triggerDataChange(this);
                            dialog = null;
                        });
                        Serenity.SubDialogHelper.bindToDataChange(dialog, _this, function (e, dci) {
                            _this.reloadById();
                        }, true);
                        e.preventDefault();
                        dialog.dialogOpen();
                    }
                }, {
                    title: 'In hợp đồng',
                    cssClass: 'printContract',
                    icon: 'fa-print',
                    onClick: function (e) {
                        Q.postToService({ service: "Office/tblContract/DownloadContract", request: { 'ContractId': _this.entityId }, target: '_blank' });
                    }
                }, {
                    title: 'Phê duyệt',
                    cssClass: 'addApprove',
                    icon: 'fa-gavel',
                    onClick: function (e) {
                        // *** do something on click if you want **
                        var dialogApp = new Office.TblApprovalCenterDialog();
                        var approved_ = Q.tryFirst(ECNET.Office.TblApprovalCenterRow.getLookup().items, function (x) { return (x.ClientId == _this.entityId && x.Type == 2); });
                        dialogApp.loadByIdAndOpenDialog(approved_.Id);
                        Serenity.SubDialogHelper.bindToDataChange(dialogApp, _this, function (e, dci) {
                            _this.reloadById();
                        }, true);
                        // this.initDialog();
                        e.preventDefault();
                        dialogApp.dialogOpen();
                    }
                });
                Q.first(buttons, function (x) { return x.cssClass == "save-and-close-button"; }).onClick = function () {
                    return Q.confirm('Bạn có muốn lưu?', function () {
                        _this.save(function () {
                            _this.dialogClose();
                        });
                    });
                };
                if (!ECNET.Authorization.hasPermission("Ecnet:dbo.tblContract:Modify")) {
                    buttons.forEach(function (e) {
                        if (e.cssClass === "addApprove" && ECNET.Authorization.hasPermission("Ecnet:dbo.tblApprovalCenter:Modify"))
                            e.disabled = false;
                        else
                            e.disabled = true;
                    });
                }
                if (!ECNET.Authorization.hasPermission("Ecnet:dbo.tblApprovalCenter:Modify")) {
                    buttons.forEach(function (e) {
                        if (e.cssClass === 'addApprove')
                            e.disabled = true;
                    });
                }
                //var buttons = this.getToolbarButtons();
                return buttons;
            };
            TblContractDialog.prototype.ValidateData = function (isRequire) {
                this.form.FromDate.element.toggleClass("required", isRequire);
                this.form.FromDate.getGridField().find("sup").toggle(isRequire);
                this.form.ToDate.element.toggleClass("required", isRequire);
                this.form.ToDate.getGridField().find("sup").toggle(isRequire);
            };
            TblContractDialog = __decorate([
                Serenity.Decorators.panel()
            ], TblContractDialog);
            return TblContractDialog;
        }(Serenity.EntityDialog));
        Office.TblContractDialog = TblContractDialog;
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var TblContractGrid = /** @class */ (function (_super) {
            __extends(TblContractGrid, _super);
            function TblContractGrid(container) {
                return _super.call(this, container) || this;
            }
            TblContractGrid.prototype.getColumnsKey = function () { return 'Office.TblContract'; };
            TblContractGrid.prototype.getDialogType = function () { return Office.TblContractDialog; };
            TblContractGrid.prototype.getIdProperty = function () { return Office.TblContractRow.idProperty; };
            TblContractGrid.prototype.getInsertPermission = function () { return Office.TblContractRow.insertPermission; };
            TblContractGrid.prototype.getLocalTextPrefix = function () { return Office.TblContractRow.localTextPrefix; };
            TblContractGrid.prototype.getService = function () { return Office.TblContractService.baseUrl; };
            TblContractGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                columns.unshift({
                    field: 'View Details',
                    name: 'Mặt bằng',
                    format: function (ctx) { return '<a class="inline-action view-details" title="Mặt bằng"></a>'; },
                    width: 80,
                    minWidth: 80,
                    maxWidth: 80
                });
                //columns.unshift( {
                //    field: 'View Details',
                //    name: '',
                //    format: ctx => `<a href="javascript:;" class="inline-action customer-link">${Q.htmlEncode(ctx.value)}</a>`,
                //    width: 24,
                //    minWidth: 24,
                //    maxWidth: 24
                //});
                return columns;
            };
            TblContractGrid.prototype.onClick = function (e, row, cell) {
                // let base grid handle clicks for its edit links
                _super.prototype.onClick.call(this, e, row, cell);
                // if base grid already handled, we shouldn"t handle it again
                if (e.isDefaultPrevented()) {
                    return;
                }
                // get reference to current item
                var item = this.itemAt(row);
                // get reference to clicked element
                var target = $(e.target);
                if (target.hasClass("view-details")) {
                    e.preventDefault();
                    var dialog_ = new ECNET.Office.TblPlaceOfBussinessDialog();
                    dialog_.readOnly = true;
                    dialog_.element.find('.addContract').addClass('disabled');
                    dialog_.loadByIdAndOpenDialog(item.PlaceId, true);
                }
            };
            TblContractGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(ECNET.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    title: 'Xuất excel',
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    service: 'Office/TblContract/ListExcel',
                    separator: true
                }));
                if (!ECNET.Authorization.hasPermission("Ecnet:dbo.tblContract:Modify")) {
                    buttons.forEach(function (e) {
                        e.disabled = true;
                    });
                }
                return buttons;
            };
            TblContractGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TblContractGrid);
            return TblContractGrid;
        }(Serenity.EntityGrid));
        Office.TblContractGrid = TblContractGrid;
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var ItemDetailEditor = /** @class */ (function (_super) {
            __extends(ItemDetailEditor, _super);
            function ItemDetailEditor(container) {
                return _super.call(this, container) || this;
            }
            ItemDetailEditor.prototype.getColumnsKey = function () { return 'Office.TblContractItems'; };
            //protected getDialogType() { return TblContractItemsDialog; }
            ItemDetailEditor.prototype.getDialogType = function () { return Office.ItemDetailEditorDialog; };
            ItemDetailEditor.prototype.getLocalTextPrefix = function () { return Office.TblContractItemsRow.localTextPrefix; };
            ItemDetailEditor.prototype.initEntityDialog = function (itemType, dialog) {
                _super.prototype.initEntityDialog.call(this, itemType, dialog);
                // passing codeComite from grid editor to detail dialog
                dialog.contractId = this.contractId;
                dialog.typeContract = this.typeContract;
            };
            ItemDetailEditor.prototype.validateEntity = function (row, id) {
                if (!_super.prototype.validateEntity.call(this, row, id))
                    return false;
                row.ItemItemName = Office.TblItemsRow.getLookup()
                    .itemById[row.ItemId].ItemName;
                return true;
            };
            ItemDetailEditor.prototype.getAddButtonCaption = function () {
                return "Thêm mới";
            };
            ItemDetailEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], ItemDetailEditor);
            return ItemDetailEditor;
        }(ECNET.Common.GridEditorBase));
        Office.ItemDetailEditor = ItemDetailEditor;
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var ItemDetailEditorDialog = /** @class */ (function (_super) {
            __extends(ItemDetailEditorDialog, _super);
            function ItemDetailEditorDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Office.TblContractItemsForm(_this.idPrefix);
                _this.form.ItemId.change(function (e) {
                    var lookup = Q.getLookup(Office.TblItemsRow.lookupKey);
                    _this.form.ItemId.filterField = "ItemGroup";
                    _this.form.ItemId.filterValue = _this.form.ItemItemGroup.value;
                });
                _this.form.ItemId.changeSelect2(function (e) {
                    var ItemId = Q.toId(_this.form.ItemId.value);
                    if (ItemId != null) {
                        _this.form.ItemUnit.value = Office.TblItemsRow.getLookup().itemById[ItemId].Unit;
                        _this.form.ItemDataType.value = Office.TblItemsRow.getLookup().itemById[ItemId].DataType.toString();
                    }
                });
                _this.form.ItemId.addValidationRule(_this.uniqueName, function (e) {
                    //check exist
                    if (_this.isNewOrDeleted) {
                        var itemExist = Office.TblContractItemsRow.getLookup().items.filter(function (e) { return e.ItemId === parseInt(_this.form.ItemId.value) && e.ContractId === parseInt(_this.form.ContractId.value); });
                        if (itemExist.length > 0) {
                            // return false;
                            _this.form.ItemId.element.focus();
                            return "Item này đã được gán";
                        }
                    }
                });
                _this.form.Value.addValidationRule(_this.uniqueName, function (e) {
                    //check exist
                    if (_this.form.ItemDataType.value == "1") {
                        try {
                            if (isNaN(e.val())) {
                                _this.form.Value.element.focus();
                                return "Vui lòng nhập số";
                            }
                        }
                        catch (e) {
                            _this.form.Value.element.focus();
                            return "Vui lòng nhập số";
                        }
                    }
                    else if (_this.form.ItemDataType.value == "3") {
                        try {
                            var rs = Date.parse(e.val());
                        }
                        catch (e) {
                            _this.form.Value.element.focus();
                            return "Vui lòng nhập ngày tháng";
                        }
                    }
                });
                return _this;
            }
            ItemDetailEditorDialog.prototype.getFormKey = function () { return Office.TblContractItemsForm.formKey; };
            ItemDetailEditorDialog.prototype.getNameProperty = function () { return Office.TblContractItemsRow.nameProperty; };
            ItemDetailEditorDialog.prototype.getLocalTextPrefix = function () { return Office.TblContractItemsRow.localTextPrefix; };
            ItemDetailEditorDialog.prototype.loadEntity = function (entity) {
                _super.prototype.loadEntity.call(this, entity);
                this.form.ContractId.value = this.contractId ? this.contractId.toString() : null;
                this.form.ContractTypeId.value = this.typeContract;
                Serenity.EditorUtils.setReadOnly(this.form.ItemUnit, true);
                Serenity.EditorUtils.setReadOnly(this.form.ItemDataType, true);
                this.form.ItemId.cascadeValue = this.form.ContractTypeId.value;
                if (entity.ItemId)
                    this.form.ItemId.value = entity.ItemId.toString();
            };
            ItemDetailEditorDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ItemDetailEditorDialog);
            return ItemDetailEditorDialog;
        }(ECNET.Common.GridEditorDialog));
        Office.ItemDetailEditorDialog = ItemDetailEditorDialog;
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var TblContractItemsDialog = /** @class */ (function (_super) {
            __extends(TblContractItemsDialog, _super);
            function TblContractItemsDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Office.TblContractItemsForm(_this.idPrefix);
                //Serenity.SubDialogHelper.triggerDataChange(this);
                _this.form.ItemId.change(function (e) {
                    var lookup = Q.getLookup(Office.TblItemsRow.lookupKey);
                    _this.form.ItemId.filterField = "ItemGroup";
                    _this.form.ItemId.filterValue = _this.form.ItemItemGroup.value;
                });
                _this.form.ItemId.changeSelect2(function (e) {
                    var ItemId = Q.toId(_this.form.ItemId.value);
                    if (ItemId != null) {
                        _this.form.ItemUnit.value = Office.TblItemsRow.getLookup().itemById[ItemId].Unit;
                        _this.form.ItemDataType.value = Office.TblItemsRow.getLookup().itemById[ItemId].DataType.toString();
                    }
                });
                _this.form.ItemId.addValidationRule(_this.uniqueName, function (e) {
                    //check exist
                    if (_this.isNewOrDeleted) {
                        var itemExist = Office.TblContractItemsRow.getLookup().items.filter(function (e) { return e.ItemId === parseInt(_this.form.ItemId.value) && e.ContractId === parseInt(_this.form.ContractId.value); });
                        if (itemExist.length > 0) {
                            // return false;
                            _this.form.ItemId.element.focus();
                            return "Item này đã được gán";
                        }
                    }
                });
                _this.form.Value.addValidationRule(_this.uniqueName, function (e) {
                    //check exist
                    if (_this.form.ItemDataType.value == "1") {
                        try {
                            if (isNaN(e.val())) {
                                _this.form.Value.element.focus();
                                return "Vui lòng nhập số";
                            }
                        }
                        catch (e) {
                            _this.form.Value.element.focus();
                            return "Vui lòng nhập số";
                        }
                    }
                    else if (_this.form.ItemDataType.value == "3") {
                        try {
                            var rs = Date.parse(e.val());
                        }
                        catch (e) {
                            _this.form.Value.element.focus();
                            return "Vui lòng nhập ngày tháng";
                        }
                    }
                });
                return _this;
            }
            TblContractItemsDialog.prototype.getFormKey = function () { return Office.TblContractItemsForm.formKey; };
            TblContractItemsDialog.prototype.getIdProperty = function () { return Office.TblContractItemsRow.idProperty; };
            TblContractItemsDialog.prototype.getLocalTextPrefix = function () { return Office.TblContractItemsRow.localTextPrefix; };
            TblContractItemsDialog.prototype.getNameProperty = function () { return Office.TblContractItemsRow.nameProperty; };
            TblContractItemsDialog.prototype.getService = function () { return Office.TblContractItemsService.baseUrl; };
            TblContractItemsDialog.prototype.getDeletePermission = function () { return Office.TblContractItemsRow.deletePermission; };
            TblContractItemsDialog.prototype.getInsertPermission = function () { return Office.TblContractItemsRow.insertPermission; };
            TblContractItemsDialog.prototype.getUpdatePermission = function () { return Office.TblContractItemsRow.updatePermission; };
            TblContractItemsDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                //Serenity.EditorUtils.setReadOnly(this.form.PlaceId, true);
            };
            TblContractItemsDialog.prototype.loadEntity = function (entity) {
                _super.prototype.loadEntity.call(this, entity);
                this.form.ContractId.value = this.contractId ? this.contractId.toString() : null;
                this.form.ContractTypeId.value = this.typeContract;
                Serenity.EditorUtils.setReadOnly(this.form.ItemUnit, true);
                Serenity.EditorUtils.setReadOnly(this.form.ItemDataType, true);
                this.form.ItemId.cascadeValue = this.form.ContractTypeId.value;
                if (entity.ItemId)
                    this.form.ItemId.value = entity.ItemId.toString();
            };
            TblContractItemsDialog = __decorate([
                Serenity.Decorators.registerClass()
                //@Serenity.Decorators.panel()
            ], TblContractItemsDialog);
            return TblContractItemsDialog;
        }(Serenity.EntityDialog));
        Office.TblContractItemsDialog = TblContractItemsDialog;
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var TblContractItemsGrid = /** @class */ (function (_super) {
            __extends(TblContractItemsGrid, _super);
            function TblContractItemsGrid(container) {
                return _super.call(this, container) || this;
            }
            TblContractItemsGrid.prototype.getColumnsKey = function () { return 'Office.TblContractItems'; };
            TblContractItemsGrid.prototype.getDialogType = function () { return Office.TblContractItemsDialog; };
            TblContractItemsGrid.prototype.getIdProperty = function () { return Office.TblContractItemsRow.idProperty; };
            TblContractItemsGrid.prototype.getInsertPermission = function () { return Office.TblContractItemsRow.insertPermission; };
            TblContractItemsGrid.prototype.getLocalTextPrefix = function () { return Office.TblContractItemsRow.localTextPrefix; };
            TblContractItemsGrid.prototype.getService = function () { return Office.TblContractItemsService.baseUrl; };
            TblContractItemsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TblContractItemsGrid);
            return TblContractItemsGrid;
        }(Serenity.EntityGrid));
        Office.TblContractItemsGrid = TblContractItemsGrid;
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var TblContractPaymentDialog = /** @class */ (function (_super) {
            __extends(TblContractPaymentDialog, _super);
            function TblContractPaymentDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Office.TblContractPaymentForm(_this.idPrefix);
                return _this;
            }
            TblContractPaymentDialog.prototype.getFormKey = function () { return Office.TblContractPaymentForm.formKey; };
            TblContractPaymentDialog.prototype.getIdProperty = function () { return Office.TblContractPaymentRow.idProperty; };
            TblContractPaymentDialog.prototype.getLocalTextPrefix = function () { return Office.TblContractPaymentRow.localTextPrefix; };
            TblContractPaymentDialog.prototype.getNameProperty = function () { return Office.TblContractPaymentRow.nameProperty; };
            TblContractPaymentDialog.prototype.getService = function () { return Office.TblContractPaymentService.baseUrl; };
            TblContractPaymentDialog.prototype.getDeletePermission = function () { return Office.TblContractPaymentRow.deletePermission; };
            TblContractPaymentDialog.prototype.getInsertPermission = function () { return Office.TblContractPaymentRow.insertPermission; };
            TblContractPaymentDialog.prototype.getUpdatePermission = function () { return Office.TblContractPaymentRow.updatePermission; };
            TblContractPaymentDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], TblContractPaymentDialog);
            return TblContractPaymentDialog;
        }(Serenity.EntityDialog));
        Office.TblContractPaymentDialog = TblContractPaymentDialog;
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var TblContractPaymentGrid = /** @class */ (function (_super) {
            __extends(TblContractPaymentGrid, _super);
            function TblContractPaymentGrid(container) {
                return _super.call(this, container) || this;
            }
            TblContractPaymentGrid.prototype.getColumnsKey = function () { return 'Office.TblContractPayment'; };
            TblContractPaymentGrid.prototype.getDialogType = function () { return Office.TblContractPaymentDialog; };
            TblContractPaymentGrid.prototype.getIdProperty = function () { return Office.TblContractPaymentRow.idProperty; };
            TblContractPaymentGrid.prototype.getInsertPermission = function () { return Office.TblContractPaymentRow.insertPermission; };
            TblContractPaymentGrid.prototype.getLocalTextPrefix = function () { return Office.TblContractPaymentRow.localTextPrefix; };
            TblContractPaymentGrid.prototype.getService = function () { return Office.TblContractPaymentService.baseUrl; };
            TblContractPaymentGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TblContractPaymentGrid);
            return TblContractPaymentGrid;
        }(Serenity.EntityGrid));
        Office.TblContractPaymentGrid = TblContractPaymentGrid;
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var ScheduleDetailEditor = /** @class */ (function (_super) {
            __extends(ScheduleDetailEditor, _super);
            function ScheduleDetailEditor(container) {
                return _super.call(this, container) || this;
            }
            ScheduleDetailEditor.prototype.getColumnsKey = function () { return 'Office.TblContractSchedule'; };
            //protected getDialogType() { return TblContractItemsDialog; }
            ScheduleDetailEditor.prototype.getDialogType = function () { return Office.ScheduleDetailEditorDialog; };
            ScheduleDetailEditor.prototype.getLocalTextPrefix = function () { return Office.TblContractScheduleRow.localTextPrefix; };
            ScheduleDetailEditor.prototype.initEntityDialog = function (itemType, dialog) {
                _super.prototype.initEntityDialog.call(this, itemType, dialog);
                // passing codeComite from grid editor to detail dialog
                dialog.contractId = this.contractId;
            };
            //protected validateEntity(row: TblContractItemsRow, id: number) {
            //    if (!super.validateEntity(row, id))
            //        return false;
            //    row.ItemItemName = TblItemsRow.getLookup()
            //        .itemById[row.ItemId].ItemName;
            //    return true;
            //}   
            ScheduleDetailEditor.prototype.getAddButtonCaption = function () {
                return "Thêm mới";
            };
            ScheduleDetailEditor.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push({
                    title: 'Tạo lịch tự động',
                    cssClass: 'addScheduleAuto',
                    icon: 'fa-calendar-check-o',
                    onClick: function () {
                        if (_this.isReadOnly) {
                            Q.alert('Trạng thái không tạo được lịch');
                            return;
                        }
                        Q.confirm("Bạn có muốn tạo lịch tự động, dữ liệu hiện tại sẽ được xóa và tạo mới?", function () {
                            if (_this.isRent == false) {
                                Q.alert('Chức năng này chỉ áp dụng cho loại mặt bằng thuê');
                                return;
                            }
                            if (_this.monthRent == null || _this.monthRent <= 0) {
                                Q.alert('Vui lòng nhập tháng thuê');
                                return;
                            }
                            if (_this.scheduleMonth == null || _this.scheduleMonth <= 0) {
                                Q.alert('Vui lòng nhập tháng định kỳ thanh toán');
                                return;
                            }
                            if (_this.formDate == null) {
                                Q.alert('Vui lòng nhập ngày bắt đầu');
                                return;
                            }
                            if (_this.toDate == null) {
                                Q.alert('Vui lòng nhập ngày kết thúc');
                                return;
                            }
                            if (_this.amount == null) {
                                Q.alert('Vui lòng nhập giá trị hợp đồng');
                                return;
                            }
                            _this.view.setItems([], true);
                            var firstDate = Q.parseDate(_this.formDate);
                            var secondDate = Q.parseDate(_this.toDate);
                            //                        var months = //Math.round(this.monthRent/this.scheduleMonth);//Math.abs(Math.round((secondDate - firstDate) / 86400000 / 30));
                            var months = Math.abs(Math.ceil((secondDate - firstDate) / 86400000 / 30 / _this.scheduleMonth));
                            var amount = _this.amount;
                            var totalAmount = 0;
                            for (var i = 1; i <= months; i++) {
                                var newDate = _this.addDays(firstDate, i == 1 ? 0 : _this.scheduleMonth);
                                var sDate = _this.formatDate(newDate);
                                var amountSchedule = amount * _this.scheduleMonth;
                                if (i == months) {
                                    amountSchedule = (_this.amount * _this.monthRent) - totalAmount;
                                }
                                totalAmount = totalAmount + amountSchedule;
                                var ent = { '__id': _this.getNextId(), Amount: amountSchedule, Times: i, Date: sDate, ContractId: _this.contractId, ContractNo: _this.contractNo };
                                _this.view.addItem(ent);
                                //this.ListSource. (ent);
                            }
                            //this.setItems(this.ListSource);
                            Q.notifySuccess('Tạo lịch thành công');
                        });
                    }
                });
                buttons.push({
                    title: 'Xóa',
                    cssClass: 'delScheduleAuto',
                    icon: 'fa-calendar-check-o',
                    onClick: function () {
                        if (_this.isReadOnly) {
                            Q.alert('Trạng thái dữ liệu không xóa được lịch');
                            return;
                        }
                        Q.confirm("Bạn có muốn xóa lịch?", function () {
                            _this.view.setItems([], true);
                        });
                    }
                });
                return buttons;
            };
            ScheduleDetailEditor.prototype.addDays = function (date, months) {
                //date.setMonth(date.getMonth() == 0 ? 1 : date.getMonth() + months);
                //if (date.getDate() != d) {
                //    date.setDate(0);
                //}
                //return date;
                var date2 = date;
                var d = date2.getDate();
                date2.setMonth(date2.getMonth() + months);
                if (date2.getDate() != d) {
                    date2.setDate(0);
                }
                return date2;
            };
            ScheduleDetailEditor.prototype.formatDate = function (date) {
                var month = '' + (date.getMonth() + 1);
                var day = '' + date.getDate();
                var year = date.getFullYear();
                if (month.length < 2)
                    month = '0' + month;
                if (day.length < 2)
                    day = '0' + day;
                return [year, month, day].join('-');
            };
            ScheduleDetailEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], ScheduleDetailEditor);
            return ScheduleDetailEditor;
        }(ECNET.Common.GridEditorBase));
        Office.ScheduleDetailEditor = ScheduleDetailEditor;
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var ScheduleDetailEditorDialog = /** @class */ (function (_super) {
            __extends(ScheduleDetailEditorDialog, _super);
            function ScheduleDetailEditorDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Office.TblContractScheduleForm(_this.idPrefix);
                return _this;
            }
            ScheduleDetailEditorDialog.prototype.getFormKey = function () { return Office.TblContractScheduleForm.formKey; };
            //  protected getNameProperty() { return TblContractScheduleRow.nameProperty; }
            ScheduleDetailEditorDialog.prototype.getLocalTextPrefix = function () { return Office.TblContractScheduleRow.localTextPrefix; };
            ScheduleDetailEditorDialog.prototype.loadEntity = function (entity) {
                _super.prototype.loadEntity.call(this, entity);
                this.form.ContractId.value = this.contractId ? this.contractId.toString() : null;
                this.form.ContractId.readOnly = true;
            };
            ScheduleDetailEditorDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ScheduleDetailEditorDialog);
            return ScheduleDetailEditorDialog;
        }(ECNET.Common.GridEditorDialog));
        Office.ScheduleDetailEditorDialog = ScheduleDetailEditorDialog;
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var TblContractScheduleDialog = /** @class */ (function (_super) {
            __extends(TblContractScheduleDialog, _super);
            function TblContractScheduleDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Office.TblContractScheduleForm(_this.idPrefix);
                return _this;
            }
            TblContractScheduleDialog.prototype.getFormKey = function () { return Office.TblContractScheduleForm.formKey; };
            TblContractScheduleDialog.prototype.getIdProperty = function () { return Office.TblContractScheduleRow.idProperty; };
            TblContractScheduleDialog.prototype.getLocalTextPrefix = function () { return Office.TblContractScheduleRow.localTextPrefix; };
            TblContractScheduleDialog.prototype.getService = function () { return Office.TblContractScheduleService.baseUrl; };
            TblContractScheduleDialog.prototype.getDeletePermission = function () { return Office.TblContractScheduleRow.deletePermission; };
            TblContractScheduleDialog.prototype.getInsertPermission = function () { return Office.TblContractScheduleRow.insertPermission; };
            TblContractScheduleDialog.prototype.getUpdatePermission = function () { return Office.TblContractScheduleRow.updatePermission; };
            TblContractScheduleDialog.prototype.loadEntity = function (entity) {
                _super.prototype.loadEntity.call(this, entity);
                this.form.ContractId.value = this.contractId ? this.contractId.toString() : entity.ContractId.toString();
                if (entity.ContractId)
                    this.form.ContractId.readOnly = true;
                //this.form.ContractTypeId.value = this.typeContract;
                //Serenity.EditorUtils.setReadOnly(this.form.ItemUnit, true);
                //Serenity.EditorUtils.setReadOnly(this.form.ItemDataType, true);
                //this.form.ItemId.cascadeValue = this.form.ContractTypeId.value;
                //if (entity.ItemId)
                //    this.form.ItemId.value = entity.ItemId.toString();
            };
            TblContractScheduleDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], TblContractScheduleDialog);
            return TblContractScheduleDialog;
        }(Serenity.EntityDialog));
        Office.TblContractScheduleDialog = TblContractScheduleDialog;
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var TblContractScheduleGrid = /** @class */ (function (_super) {
            __extends(TblContractScheduleGrid, _super);
            function TblContractScheduleGrid(container) {
                return _super.call(this, container) || this;
            }
            TblContractScheduleGrid.prototype.getColumnsKey = function () { return 'Office.TblContractSchedule'; };
            TblContractScheduleGrid.prototype.getDialogType = function () { return Office.TblContractScheduleDialog; };
            TblContractScheduleGrid.prototype.getIdProperty = function () { return Office.TblContractScheduleRow.idProperty; };
            TblContractScheduleGrid.prototype.getInsertPermission = function () { return Office.TblContractScheduleRow.insertPermission; };
            TblContractScheduleGrid.prototype.getLocalTextPrefix = function () { return Office.TblContractScheduleRow.localTextPrefix; };
            TblContractScheduleGrid.prototype.getService = function () { return Office.TblContractScheduleService.baseUrl; };
            TblContractScheduleGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TblContractScheduleGrid);
            return TblContractScheduleGrid;
        }(Serenity.EntityGrid));
        Office.TblContractScheduleGrid = TblContractScheduleGrid;
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var TblContractTypeDialog = /** @class */ (function (_super) {
            __extends(TblContractTypeDialog, _super);
            function TblContractTypeDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Office.TblContractTypeForm(_this.idPrefix);
                return _this;
            }
            TblContractTypeDialog.prototype.getFormKey = function () { return Office.TblContractTypeForm.formKey; };
            TblContractTypeDialog.prototype.getIdProperty = function () { return Office.TblContractTypeRow.idProperty; };
            TblContractTypeDialog.prototype.getLocalTextPrefix = function () { return Office.TblContractTypeRow.localTextPrefix; };
            TblContractTypeDialog.prototype.getNameProperty = function () { return Office.TblContractTypeRow.nameProperty; };
            TblContractTypeDialog.prototype.getService = function () { return Office.TblContractTypeService.baseUrl; };
            TblContractTypeDialog.prototype.getDeletePermission = function () { return Office.TblContractTypeRow.deletePermission; };
            TblContractTypeDialog.prototype.getInsertPermission = function () { return Office.TblContractTypeRow.insertPermission; };
            TblContractTypeDialog.prototype.getUpdatePermission = function () { return Office.TblContractTypeRow.updatePermission; };
            TblContractTypeDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], TblContractTypeDialog);
            return TblContractTypeDialog;
        }(Serenity.EntityDialog));
        Office.TblContractTypeDialog = TblContractTypeDialog;
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var TblContractTypeGrid = /** @class */ (function (_super) {
            __extends(TblContractTypeGrid, _super);
            function TblContractTypeGrid(container) {
                return _super.call(this, container) || this;
            }
            TblContractTypeGrid.prototype.getColumnsKey = function () { return 'Office.TblContractType'; };
            TblContractTypeGrid.prototype.getDialogType = function () { return Office.TblContractTypeDialog; };
            TblContractTypeGrid.prototype.getIdProperty = function () { return Office.TblContractTypeRow.idProperty; };
            TblContractTypeGrid.prototype.getInsertPermission = function () { return Office.TblContractTypeRow.insertPermission; };
            TblContractTypeGrid.prototype.getLocalTextPrefix = function () { return Office.TblContractTypeRow.localTextPrefix; };
            TblContractTypeGrid.prototype.getService = function () { return Office.TblContractTypeService.baseUrl; };
            TblContractTypeGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TblContractTypeGrid);
            return TblContractTypeGrid;
        }(Serenity.EntityGrid));
        Office.TblContractTypeGrid = TblContractTypeGrid;
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var TblDistrictDialog = /** @class */ (function (_super) {
            __extends(TblDistrictDialog, _super);
            function TblDistrictDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Office.TblDistrictForm(_this.idPrefix);
                return _this;
            }
            TblDistrictDialog.prototype.getFormKey = function () { return Office.TblDistrictForm.formKey; };
            TblDistrictDialog.prototype.getIdProperty = function () { return Office.TblDistrictRow.idProperty; };
            TblDistrictDialog.prototype.getLocalTextPrefix = function () { return Office.TblDistrictRow.localTextPrefix; };
            TblDistrictDialog.prototype.getNameProperty = function () { return Office.TblDistrictRow.nameProperty; };
            TblDistrictDialog.prototype.getService = function () { return Office.TblDistrictService.baseUrl; };
            TblDistrictDialog.prototype.getDeletePermission = function () { return Office.TblDistrictRow.deletePermission; };
            TblDistrictDialog.prototype.getInsertPermission = function () { return Office.TblDistrictRow.insertPermission; };
            TblDistrictDialog.prototype.getUpdatePermission = function () { return Office.TblDistrictRow.updatePermission; };
            TblDistrictDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], TblDistrictDialog);
            return TblDistrictDialog;
        }(Serenity.EntityDialog));
        Office.TblDistrictDialog = TblDistrictDialog;
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var TblDistrictGrid = /** @class */ (function (_super) {
            __extends(TblDistrictGrid, _super);
            function TblDistrictGrid(container) {
                return _super.call(this, container) || this;
            }
            TblDistrictGrid.prototype.getColumnsKey = function () { return 'Office.TblDistrict'; };
            TblDistrictGrid.prototype.getDialogType = function () { return Office.TblDistrictDialog; };
            TblDistrictGrid.prototype.getIdProperty = function () { return Office.TblDistrictRow.idProperty; };
            TblDistrictGrid.prototype.getInsertPermission = function () { return Office.TblDistrictRow.insertPermission; };
            TblDistrictGrid.prototype.getLocalTextPrefix = function () { return Office.TblDistrictRow.localTextPrefix; };
            TblDistrictGrid.prototype.getService = function () { return Office.TblDistrictService.baseUrl; };
            TblDistrictGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TblDistrictGrid);
            return TblDistrictGrid;
        }(Serenity.EntityGrid));
        Office.TblDistrictGrid = TblDistrictGrid;
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var TblItemsDialog = /** @class */ (function (_super) {
            __extends(TblItemsDialog, _super);
            function TblItemsDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Office.TblItemsForm(_this.idPrefix);
                return _this;
            }
            TblItemsDialog.prototype.getFormKey = function () { return Office.TblItemsForm.formKey; };
            TblItemsDialog.prototype.getIdProperty = function () { return Office.TblItemsRow.idProperty; };
            TblItemsDialog.prototype.getLocalTextPrefix = function () { return Office.TblItemsRow.localTextPrefix; };
            TblItemsDialog.prototype.getNameProperty = function () { return Office.TblItemsRow.nameProperty; };
            TblItemsDialog.prototype.getService = function () { return Office.TblItemsService.baseUrl; };
            TblItemsDialog.prototype.getDeletePermission = function () { return Office.TblItemsRow.deletePermission; };
            TblItemsDialog.prototype.getInsertPermission = function () { return Office.TblItemsRow.insertPermission; };
            TblItemsDialog.prototype.getUpdatePermission = function () { return Office.TblItemsRow.updatePermission; };
            TblItemsDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], TblItemsDialog);
            return TblItemsDialog;
        }(Serenity.EntityDialog));
        Office.TblItemsDialog = TblItemsDialog;
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var TblItemsGrid = /** @class */ (function (_super) {
            __extends(TblItemsGrid, _super);
            function TblItemsGrid(container) {
                return _super.call(this, container) || this;
            }
            TblItemsGrid.prototype.getColumnsKey = function () { return 'Office.TblItems'; };
            TblItemsGrid.prototype.getDialogType = function () { return Office.TblItemsDialog; };
            TblItemsGrid.prototype.getIdProperty = function () { return Office.TblItemsRow.idProperty; };
            TblItemsGrid.prototype.getInsertPermission = function () { return Office.TblItemsRow.insertPermission; };
            TblItemsGrid.prototype.getLocalTextPrefix = function () { return Office.TblItemsRow.localTextPrefix; };
            TblItemsGrid.prototype.getService = function () { return Office.TblItemsService.baseUrl; };
            TblItemsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TblItemsGrid);
            return TblItemsGrid;
        }(Serenity.EntityGrid));
        Office.TblItemsGrid = TblItemsGrid;
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var AssetToDetailGrid = /** @class */ (function (_super) {
            __extends(AssetToDetailGrid, _super);
            function AssetToDetailGrid(container) {
                return _super.call(this, container) || this;
            }
            AssetToDetailGrid.prototype.getColumnsKey = function () { return 'Office.TblPlaceDetails'; };
            AssetToDetailGrid.prototype.getDialogType = function () { return Office.TblPlaceDetailsDialog; };
            AssetToDetailGrid.prototype.getIdProperty = function () { return Office.TblPlaceDetailsRow.idProperty; };
            AssetToDetailGrid.prototype.getInsertPermission = function () { return Office.TblPlaceDetailsRow.insertPermission; };
            AssetToDetailGrid.prototype.getLocalTextPrefix = function () { return Office.TblPlaceDetailsRow.localTextPrefix; };
            AssetToDetailGrid.prototype.getService = function () { return Office.TblPlaceDetailsService.baseUrl; };
            AssetToDetailGrid.prototype.getGridCanLoad = function () {
                return this.placeID != null;
            };
            Object.defineProperty(AssetToDetailGrid.prototype, "placeID", {
                get: function () {
                    return this._placeID;
                },
                set: function (value) {
                    if (this._placeID != value) {
                        this._placeID = value;
                        //this.setEquality(TblAssignAssetToPlaceRow.Fields.PlaceId, value);
                        this.setEquality("PlaceId", value);
                        this.refresh();
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(AssetToDetailGrid.prototype, "placeType", {
                get: function () {
                    return this._placeType;
                },
                set: function (value) {
                    if (this._placeType != value) {
                        this._placeType = value;
                        //this.setEquality(TblAssignAssetToPlaceRow.Fields.PlaceId, value);
                        this.setEquality("PlaceType", value);
                        this.refresh();
                    }
                },
                enumerable: true,
                configurable: true
            });
            AssetToDetailGrid.prototype.addButtonClick = function () {
                var eq = this.view.params.EqualityFilter;
                this.editItem({
                    PlaceId: eq ? eq.PlaceId : null,
                    PlaceType: eq ? eq.PlaceType : null
                });
            };
            AssetToDetailGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], AssetToDetailGrid);
            return AssetToDetailGrid;
        }(Serenity.EntityGrid));
        Office.AssetToDetailGrid = AssetToDetailGrid;
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        /**
           * Our custom product editor type
           */
        var FilterLookupItemEditor = /** @class */ (function (_super) {
            __extends(FilterLookupItemEditor, _super);
            function FilterLookupItemEditor(container, options) {
                return _super.call(this, container, options) || this;
            }
            FilterLookupItemEditor.prototype.getLookupKey = function () {
                return Office.TblItemsRow.lookupKey;
            };
            FilterLookupItemEditor.prototype.getItems = function (lookup) {
                return _super.prototype.getItems.call(this, lookup).filter(function (x) {
                    return x.ItemType === 1;
                });
            };
            FilterLookupItemEditor.prototype.getItemText = function (item, lookup) {
                return item.Code + "-" + _super.prototype.getItemText.call(this, item, lookup);
            };
            FilterLookupItemEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], FilterLookupItemEditor);
            return FilterLookupItemEditor;
        }(Serenity.LookupEditorBase));
        Office.FilterLookupItemEditor = FilterLookupItemEditor;
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var PlaceDetailsEditor = /** @class */ (function (_super) {
            __extends(PlaceDetailsEditor, _super);
            function PlaceDetailsEditor(container) {
                return _super.call(this, container) || this;
            }
            PlaceDetailsEditor.prototype.getColumnsKey = function () { return "Office.TblPlaceDetails"; };
            PlaceDetailsEditor.prototype.getDialogType = function () { return Office.TblPlaceDetailsDialog; };
            PlaceDetailsEditor.prototype.getLocalTextPrefix = function () { return Office.TblPlaceDetailsRow.localTextPrefix; };
            PlaceDetailsEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], PlaceDetailsEditor);
            return PlaceDetailsEditor;
        }(ECNET.Common.GridEditorBase));
        Office.PlaceDetailsEditor = PlaceDetailsEditor;
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var TblPlaceDetailsDialog = /** @class */ (function (_super) {
            __extends(TblPlaceDetailsDialog, _super);
            function TblPlaceDetailsDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Office.TblPlaceDetailsForm(_this.idPrefix);
                // protected form: TblPlaceDetailsForm;
                _this.isExist = false;
                _this.form = new Office.TblPlaceDetailsForm(_this.idPrefix);
                _this.form.ItemId.change(function (e) {
                    var lookup = Q.getLookup(Office.TblItemsRow.lookupKey);
                    _this.form.ItemId.filterField = "ItemGroup";
                    _this.form.ItemId.filterValue = _this.form.PlaceType.value;
                });
                _this.form.ItemId.changeSelect2(function (e) {
                    var ItemId = Q.toId(_this.form.ItemId.value);
                    if (ItemId != null) {
                        _this.form.Unit.value = Office.TblItemsRow.getLookup().itemById[ItemId].Unit;
                        _this.form.ItemDataType.value = Office.TblItemsRow.getLookup().itemById[ItemId].DataType.toString();
                    }
                });
                //this.form.ItemId.addValidationRule(this.uniqueName, e => {
                //    //check exist
                //    if (this.form.Id.value) {
                //        var itemExist = Office.TblPlaceDetailsRow.getLookup().items.filter(e => e.ItemId === parseInt(this.form.ItemId.value) && e.PlaceId === parseInt(this.form.PlaceId.value) &&
                //            e.Status === 1
                //        )
                //        if (itemExist.length > 0)
                //            return "Item này đã được gán";
                //    }
                //});
                _this.form.Value.addValidationRule(_this.uniqueName, function (e) {
                    //check exist
                    if (_this.form.ItemDataType.value == "1") {
                        try {
                            var rs = parseInt(_this.form.Value.value);
                        }
                        catch (e) {
                            _this.form.Value.element.focus();
                            return "Vui lòng nhập số";
                        }
                    }
                    else if (_this.form.ItemDataType.value == "3") {
                        try {
                            var rs = Date.parse(_this.form.Value.value);
                        }
                        catch (e) {
                            _this.form.Value.element.focus();
                            return "Vui lòng nhập ngày tháng";
                        }
                    }
                });
                return _this;
            }
            TblPlaceDetailsDialog.prototype.getFormKey = function () { return Office.TblPlaceDetailsForm.formKey; };
            TblPlaceDetailsDialog.prototype.getIdProperty = function () { return Office.TblPlaceDetailsRow.idProperty; };
            TblPlaceDetailsDialog.prototype.getLocalTextPrefix = function () { return Office.TblPlaceDetailsRow.localTextPrefix; };
            TblPlaceDetailsDialog.prototype.getNameProperty = function () { return Office.TblPlaceDetailsRow.nameProperty; };
            TblPlaceDetailsDialog.prototype.getService = function () { return Office.TblPlaceDetailsService.baseUrl; };
            TblPlaceDetailsDialog.prototype.getDeletePermission = function () { return Office.TblPlaceDetailsRow.deletePermission; };
            TblPlaceDetailsDialog.prototype.getInsertPermission = function () { return Office.TblPlaceDetailsRow.insertPermission; };
            TblPlaceDetailsDialog.prototype.getUpdatePermission = function () { return Office.TblPlaceDetailsRow.updatePermission; };
            TblPlaceDetailsDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                Serenity.EditorUtils.setReadOnly(this.form.PlaceId, true);
            };
            TblPlaceDetailsDialog.prototype.loadEntity = function (entity) {
                _super.prototype.loadEntity.call(this, entity);
                Serenity.EditorUtils.setReadOnly(this.form.Unit, true);
                Serenity.EditorUtils.setReadOnly(this.form.ItemDataType, true);
                this.form.ItemId.cascadeValue = this.form.PlaceType.value;
                if (entity.ItemId)
                    this.form.ItemId.value = entity.ItemId.toString();
            };
            TblPlaceDetailsDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], TblPlaceDetailsDialog);
            return TblPlaceDetailsDialog;
        }(Serenity.EntityDialog));
        Office.TblPlaceDetailsDialog = TblPlaceDetailsDialog;
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var TblPlaceDetailsGrid = /** @class */ (function (_super) {
            __extends(TblPlaceDetailsGrid, _super);
            function TblPlaceDetailsGrid(container) {
                return _super.call(this, container) || this;
            }
            TblPlaceDetailsGrid.prototype.getColumnsKey = function () { return 'Office.TblPlaceDetails'; };
            TblPlaceDetailsGrid.prototype.getDialogType = function () { return Office.TblPlaceDetailsDialog; };
            TblPlaceDetailsGrid.prototype.getIdProperty = function () { return Office.TblPlaceDetailsRow.idProperty; };
            TblPlaceDetailsGrid.prototype.getInsertPermission = function () { return Office.TblPlaceDetailsRow.insertPermission; };
            TblPlaceDetailsGrid.prototype.getLocalTextPrefix = function () { return Office.TblPlaceDetailsRow.localTextPrefix; };
            TblPlaceDetailsGrid.prototype.getService = function () { return Office.TblPlaceDetailsService.baseUrl; };
            TblPlaceDetailsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TblPlaceDetailsGrid);
            return TblPlaceDetailsGrid;
        }(Serenity.EntityGrid));
        Office.TblPlaceDetailsGrid = TblPlaceDetailsGrid;
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var PlaceExcelImportDialog = /** @class */ (function (_super) {
            __extends(PlaceExcelImportDialog, _super);
            function PlaceExcelImportDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Office.PlaceExcelImportForm(_this.idPrefix);
                return _this;
            }
            PlaceExcelImportDialog.prototype.getDialogTitle = function () {
                return "Excel Import";
            };
            PlaceExcelImportDialog.prototype.getDialogButtons = function () {
                var _this = this;
                return [
                    {
                        text: 'Import',
                        click: function () {
                            if (!_this.validateBeforeSave())
                                return;
                            if (_this.form.FileName.value == null ||
                                Q.isEmptyOrNull(_this.form.FileName.value.Filename)) {
                                Q.notifyError("Vui lòng chọn file!");
                                return;
                            }
                            Office.PlaceExcelImportService.ExcelImport({
                                FileName: _this.form.FileName.value.Filename
                            }, function (response) {
                                Q.notifySuccess('Đã thêm thành công: ' + (response.Inserted || 0));
                                _this.BatchNo = response.BatchNo;
                                if (response.ErrorList != null && response.ErrorList.length > 0) {
                                    Q.alert(response.ErrorList.join(',\r\n '));
                                }
                                //Serenity.SubDialogHelper.triggerDataChange(this);
                                _this.dialogClose();
                            });
                        },
                    },
                    {
                        text: 'Hủy',
                        click: function () { return _this.dialogClose(); }
                    }
                ];
            };
            PlaceExcelImportDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], PlaceExcelImportDialog);
            return PlaceExcelImportDialog;
        }(Serenity.PropertyDialog));
        Office.PlaceExcelImportDialog = PlaceExcelImportDialog;
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var PlaceExcelImportService;
        (function (PlaceExcelImportService) {
            PlaceExcelImportService.baseUrl = 'Office/tblPlaceOfBussiness';
            [
                'ExcelImport'
            ].forEach(function (x) {
                PlaceExcelImportService[x] = function (r, s, o) {
                    return Q.serviceRequest(PlaceExcelImportService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(PlaceExcelImportService = Office.PlaceExcelImportService || (Office.PlaceExcelImportService = {}));
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var TblPlaceOfBussinessDialog = /** @class */ (function (_super) {
            __extends(TblPlaceOfBussinessDialog, _super);
            //private assetGrid: AssetToDetailGrid;
            // private contractDialog = TblContractDialog; 
            function TblPlaceOfBussinessDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Office.TblPlaceOfBussinessForm(_this.idPrefix);
                var regex = /^([a-zA-Z0\-\,\/\\\\(\)\)\.-9ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\s]+)$/;
                ;
                var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                _this.form.RequireDeposit.change(function (e) {
                    var requireDeposit = _this.form.RequireDeposit.value;
                    if (_this.form.HasDeposit.value == "1" && requireDeposit === "1") {
                        _this.ValidateData(true);
                    }
                    else {
                        _this.ValidateData(false);
                    }
                });
                _this.form.HasDeposit.change(function (e) {
                    var requireDeposit = _this.form.RequireDeposit.value;
                    if (_this.form.HasDeposit.value == "1" && requireDeposit === "1") {
                        _this.ValidateData(true);
                    }
                    else {
                        _this.ValidateData(false);
                    }
                });
                _this.form.Type.change(function (e) {
                    if (_this.form.Type.value === "1") {
                        _this.ValidateType(true);
                    }
                    else
                        _this.ValidateType(false);
                });
                _this.form.EmployeePicName.addValidationRule(_this.uniqueName, function (e) {
                    if (!(regex.test(_this.form.EmployeePicName.value)))
                        return "Không nhập ký tự đặc biệt";
                });
                _this.form.EmployeePicCode.addValidationRule(_this.uniqueName, function (e) {
                    if (!(regex.test(_this.form.EmployeePicName.value)))
                        return "Không nhập ký tự đặc biệt";
                });
                _this.form.EmployeePicEmail.addValidationRule(_this.uniqueName, function (e) {
                    if (!(emailRegex.test(e.val())))
                        return "Email không đúng định dạng";
                });
                _this.form.Address.addValidationRule(_this.uniqueName, function (e) {
                    if (!(regex.test(e.val())))
                        return "Không nhập ký tự đặc biệt";
                });
                _this.form.NameOfOwner.addValidationRule(_this.uniqueName, function (e) {
                    if (!(regex.test(e.val())))
                        return "Không nhập ký tự đặc biệt";
                });
                _this.form.PhoneOfOwner.addValidationRule(_this.uniqueName, function (e) {
                    //if (!(/^(0?)(-?\d{10})$/.test(this.form.PhoneOfOwner.value))) 
                    var phone = _this.form.PhoneOfOwner.value;
                    if (phone.length > 0) {
                        if (phone.substring(0, 1) !== "0")
                            return "Số điện thoại bắt đầu bằng 0";
                        else if (phone.length < 10 || phone.length > 11)
                            return "Số điện 10 hoặc 11 số";
                    }
                });
                _this.form.MonthRent.addValidationRule(_this.uniqueName, function (e1) {
                    if (parseInt(e1.val()) > 600)
                        return "Tháng thuê không lớn hơn 600";
                });
                _this.form.EmployeePicPhone.addValidationRule(_this.uniqueName, function (e1) {
                    //if (!(/^(0?)(-?\d{10})$/.test(this.form.PhoneOfOwner.value))) 
                    var phone = e1.val();
                    if (phone.length > 0) {
                        if (phone.substring(0, 1) !== "0")
                            return "Số điện thoại bắt đầu bằng 0";
                        else if (phone.length < 10 || phone.length > 11)
                            return "Số điện 10 hoặc 11 số";
                    }
                });
                _this.form.EmployeePicWalletNo.addValidationRule(_this.uniqueName, function (e2) {
                    //if (!(/^(0?)(-?\d{10})$/.test(this.form.PhoneOfOwner.value))) 
                    var phone = e2.val();
                    if (phone.length > 0) {
                        if (phone.substring(0, 1) !== "0")
                            return "Số ví bắt đầu bằng 0";
                        else if (phone.length < 10 || phone.length > 11)
                            return "Số ví 10 hoặc 11 số";
                    }
                });
                return _this;
            }
            TblPlaceOfBussinessDialog.prototype.getFormKey = function () { return Office.TblPlaceOfBussinessForm.formKey; };
            TblPlaceOfBussinessDialog.prototype.getIdProperty = function () { return Office.TblPlaceOfBussinessRow.idProperty; };
            TblPlaceOfBussinessDialog.prototype.getLocalTextPrefix = function () { return Office.TblPlaceOfBussinessRow.localTextPrefix; };
            TblPlaceOfBussinessDialog.prototype.getNameProperty = function () { return Office.TblPlaceOfBussinessRow.nameProperty; };
            TblPlaceOfBussinessDialog.prototype.getService = function () { return Office.TblPlaceOfBussinessService.baseUrl; };
            TblPlaceOfBussinessDialog.prototype.getDeletePermission = function () { return Office.TblPlaceOfBussinessRow.deletePermission; };
            TblPlaceOfBussinessDialog.prototype.getInsertPermission = function () { return Office.TblPlaceOfBussinessRow.insertPermission; };
            TblPlaceOfBussinessDialog.prototype.getUpdatePermission = function () { return Office.TblPlaceOfBussinessRow.updatePermission; };
            TblPlaceOfBussinessDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                //Serenity.EditorUtils.setReadOnly(this.form.PlaceId, true);
            };
            //public contract: ECNET.Office.TblContractRow;
            TblPlaceOfBussinessDialog.prototype.loadEntity = function (entity) {
                _super.prototype.loadEntity.call(this, entity);
                var entity_ = this.entityId;
                if (this.form.Status.value == "2") {
                    this.deleteButton.remove();
                    this.editButton.remove();
                }
                if (this.form.Status.value == "1" || this.form.Status.value == "3") {
                    this.element.find('.addContract').addClass('disabled');
                    this.element.find('.printContract').addClass('disabled');
                }
                if (this.isNewOrDeleted() == true) {
                    this.element.find('.addContract').addClass('disabled');
                    this.element.find('.printContract').addClass('disabled');
                }
                //Serenity.TabsExtensions.setDisabled(this.butt, 'Orders', this.isNewOrDeleted());
                try {
                    this.contract = Q.tryFirst(ECNET.Office.TblContractRow.getLookup().items, function (x) { return x.PlaceId == entity_; });
                }
                catch (ee) {
                    this.contract = null;
                }
                if (this.form.Status.value === "2" || this.form.Status.value === "5") {
                    // da phe duyet khong cho chỉnh
                    this.set_readOnly(true);
                    //this.form.File1.set_readOnly(false);
                    //this.form.File2.set_readOnly(false);
                    //this.form.File3.set_readOnly(false);
                    //this.form.File4.set_readOnly(false);
                    //this.form.File5.set_readOnly(false);
                    //this.form.File6.set_readOnly(false);
                    //this.form.File7.set_readOnly(false);
                    //this.form.FileContractUpload.set_readOnly(false);
                    //this.applyChangesButton.removeClass("disabled");
                    //this.saveAndCloseButton.removeClass("disabled");
                    //this.form.ListSchedule.isReadOnly = true;
                }
            };
            TblPlaceOfBussinessDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var self = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                var title_ = "Tạo hợp đồng";
                var entityId_ = this.entityId;
                buttons.push({
                    title: title_,
                    cssClass: 'addContract',
                    icon: 'fa-sticky-note-o',
                    onClick: function (e) {
                        // *** do something on click if you want **
                        var dialog = new Office.TblContractDialog();
                        dialog.element.on('dialogclose', function () {
                            dialog = null;
                        });
                        if (_this.contract === null) {
                            dialog.loadEntityAndOpenDialog({
                                PlaceId: _this.entityId,
                                BuyOrRent: parseInt(_this.form.Type.value),
                                PlaceDepositAmt: _this.form.DepositAmt.value,
                                PlacePriceBuy: _this.form.PriceBuy.value,
                                PlacePriceRent: _this.form.PriceRent.value,
                                PlaceAddress: _this.form.Address.value,
                                PlaceCityId: parseInt(_this.form.CityId.value),
                                PlaceDistrictId: parseInt(_this.form.DistrictId.value),
                                PlaceWardsId: parseInt(_this.form.WardsId.value),
                                PlaceDescription: _this.form.Description.value,
                                Month: _this.form.Type.value == "1" ? _this.form.MonthRent.value : "",
                                ContractAmt: _this.form.Type.value == "1" ? _this.form.PriceRent.value : _this.form.PriceBuy.value,
                                TotalContractAmt: _this.form.Type.value == "1" ? _this.form.PriceRent.value : _this.form.PriceBuy.value,
                                NameOfOwner: _this.form.NameOfOwner.value,
                                PhoneOfOwner: _this.form.PhoneOfOwner.value,
                                TotalArea: _this.form.TotalArea.value
                            });
                        }
                        else {
                            dialog.loadByIdAndOpenDialog(_this.contract.Id);
                        }
                        // Serenity.SubDialogHelper.triggerDataChanged(self);
                        Serenity.SubDialogHelper.bindToDataChange(dialog, _this, function (e, dci) {
                            _this.loadEntity(_this.entityId);
                        }, true);
                        // this.initDialog();
                        e.preventDefault();
                        dialog.dialogOpen();
                    }
                }, {
                    title: 'Phê duyệt',
                    cssClass: 'addApprove',
                    icon: 'fa-gavel',
                    onClick: function (e) {
                        // *** do something on click if you want **
                        var dialogApp = new Office.TblApprovalCenterDialog();
                        var approved_ = Q.tryFirst(ECNET.Office.TblApprovalCenterRow.getLookup().items, function (x) { return (x.ClientId == _this.entityId && x.Type == 1); });
                        dialogApp.loadByIdAndOpenDialog(approved_.Id);
                        Serenity.SubDialogHelper.bindToDataChange(dialogApp, _this, function (e, dci) {
                            _this.reloadById();
                        }, true);
                        // this.initDialog();
                        e.preventDefault();
                        dialogApp.dialogOpen();
                    }
                });
                Q.first(buttons, function (x) { return x.cssClass == "save-and-close-button"; }).onClick = function () {
                    return Q.confirm('Bạn có muốn lưu?', function () {
                        _this.save(function () {
                            _this.dialogClose();
                        });
                    });
                };
                if (!ECNET.Authorization.hasPermission("Ecnet:dbo.tblPlaceOfBussiness:Modify")) {
                    buttons.forEach(function (e) {
                        if (e.cssClass == "addApprove" && ECNET.Authorization.hasPermission("Ecnet:dbo.tblApprovalCenter:Modify"))
                            e.disabled = false;
                        else
                            e.disabled = true;
                    });
                }
                return buttons;
            };
            TblPlaceOfBussinessDialog.prototype.confirmBeforeSave = function (oldEvt, e) {
                Q.confirm("Bạn có muốn lưu?", function () {
                    oldEvt(e);
                });
            };
            TblPlaceOfBussinessDialog.prototype.ValidateData = function (isRequire) {
                this.form.RequireDepositAmt.element.toggleClass("required", isRequire);
                this.form.RequireDepositAmt.getGridField().find("sup").toggle(isRequire);
                this.form.RequireDateDeposit.element.toggleClass("required", isRequire);
                this.form.RequireDateDeposit.getGridField().find("sup").toggle(isRequire);
                this.form.DepositAmt.element.toggleClass("required", isRequire);
                this.form.DepositAmt.getGridField().find("sup").toggle(isRequire);
                this.form.DateDeposit.element.toggleClass("required", isRequire);
                this.form.DateDeposit.getGridField().find("sup").toggle(isRequire);
            };
            TblPlaceOfBussinessDialog.prototype.ValidateType = function (isRequire) {
                this.form.PriceRent.element.toggleClass("required", isRequire);
                this.form.PriceRent.getGridField().find("sup").toggle(isRequire);
                this.form.MonthRent.element.toggleClass("required", isRequire);
                this.form.MonthRent.getGridField().find("sup").toggle(isRequire);
                this.form.PriceBuy.element.toggleClass("required", !isRequire);
                this.form.PriceBuy.getGridField().find("sup").toggle(!isRequire);
            };
            TblPlaceOfBussinessDialog.prototype.ValidateSpecial = function (value) {
                if (!(/^([a-zA-Z0-9ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s]+)$/.test(value)))
                    return "Không nhập ký tự đặc biệt";
            };
            TblPlaceOfBussinessDialog = __decorate([
                Serenity.Decorators.panel()
            ], TblPlaceOfBussinessDialog);
            return TblPlaceOfBussinessDialog;
        }(Serenity.EntityDialog));
        Office.TblPlaceOfBussinessDialog = TblPlaceOfBussinessDialog;
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var TblPlaceOfBussinessGrid = /** @class */ (function (_super) {
            __extends(TblPlaceOfBussinessGrid, _super);
            function TblPlaceOfBussinessGrid(container) {
                return _super.call(this, container) || this;
            }
            TblPlaceOfBussinessGrid.prototype.getColumnsKey = function () { return 'Office.TblPlaceOfBussiness'; };
            TblPlaceOfBussinessGrid.prototype.getDialogType = function () { return Office.TblPlaceOfBussinessDialog; };
            TblPlaceOfBussinessGrid.prototype.getIdProperty = function () { return Office.TblPlaceOfBussinessRow.idProperty; };
            TblPlaceOfBussinessGrid.prototype.getInsertPermission = function () { return Office.TblPlaceOfBussinessRow.insertPermission; };
            TblPlaceOfBussinessGrid.prototype.getLocalTextPrefix = function () { return Office.TblPlaceOfBussinessRow.localTextPrefix; };
            TblPlaceOfBussinessGrid.prototype.getService = function () { return Office.TblPlaceOfBussinessService.baseUrl; };
            TblPlaceOfBussinessGrid.prototype.addButtonClick = function () {
                var eq = this.view.params.EqualityFilter;
                this.editItem({
                    Id: eq ? eq.Id : null
                });
            };
            TblPlaceOfBussinessGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(ECNET.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    title: 'Xuất excel',
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    service: 'Office/TblPlaceOfBussiness/ListExcel',
                    separator: true
                }));
                // add our import button
                buttons.push({
                    title: 'Nhập Excel',
                    cssClass: 'export-xlsx-button',
                    onClick: function () {
                        // open import dialog, let it handle rest
                        var dialog = new Office.PlaceExcelImportDialog();
                        dialog.element.on('dialogclose', function () {
                            Serenity.SubDialogHelper.triggerDataChange(_this);
                            _this.batchNo_ = dialog.BatchNo;
                            _this.refresh();
                            _this.onViewSubmit();
                            dialog = null;
                        });
                        dialog.dialogOpen();
                    }
                });
                buttons.push({
                    title: 'File mẫu import excel',
                    cssClass: 'export-xlsx-button',
                    onClick: function () {
                        Q.postToService({ service: "Office/tblPlaceOfBussiness/FileTemplateDownload", request: null, target: '_blank' });
                        //  window.open("Template_upload_ecnet-V2.xls", '_blank');
                    }
                });
                buttons.push({
                    title: 'Group theo trạng thái',
                    cssClass: 'expand-all-button',
                    onClick: function () { return _this.view.setGrouping([{
                            formatter: function (x) { return Serenity.EnumFormatter.format(Serenity.EnumTypeRegistry.get("Ecnet.Status"), Q.toId(x.value)); },
                            getter: 'Status'
                        }]); }
                }, {
                    title: 'Group theo Tỉnh và trạng thái',
                    cssClass: 'expand-all-button',
                    onClick: function () { return _this.view.setGrouping([{
                            formatter: function (x) { return 'Thành phố: ' + x.value + ' (' + x.count + ' items)'; },
                            getter: 'CityName'
                        }, {
                            //formatter: x => 'Trạng thái: ' + x.value + ' (' + x.count + ' items)',
                            formatter: function (x) { return Serenity.EnumFormatter.format(Serenity.EnumTypeRegistry.get("Ecnet.Status"), Q.toId(x.value)); },
                            getter: 'Status'
                        }]); }
                }, {
                    title: 'Bỏ group',
                    cssClass: 'collapse-all-button',
                    onClick: function () { return _this.view.setGrouping([]); }
                });
                if (!ECNET.Authorization.hasPermission("Ecnet:dbo.tblPlaceOfBussiness:Modify")) {
                    buttons.forEach(function (e) {
                        e.disabled = true;
                    });
                }
                return buttons;
            };
            TblPlaceOfBussinessGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                columns.unshift({
                    field: 'View Details',
                    name: 'Hợp đồng',
                    format: function (ctx) { return '<a class="inline-action view-details" title="Xem hợp đồng"></a>'; },
                    width: 80,
                    minWidth: 80,
                    maxWidth: 80
                });
                Q.first(columns, function (x) { return x.field == "ContractNo" /* ContractNo */; }).format =
                    function (ctx) { return "<a href=\"javascript:;\" class=\"contract-link\">" + Q.htmlEncode(ctx.value) + "</a>"; };
                return columns;
            };
            TblPlaceOfBussinessGrid.prototype.onClick = function (e, row, cell) {
                // let base grid handle clicks for its edit links
                _super.prototype.onClick.call(this, e, row, cell);
                // if base grid already handled, we shouldn"t handle it again
                if (e.isDefaultPrevented()) {
                    return;
                }
                // get reference to current item
                var item = this.itemAt(row);
                // get reference to clicked element
                if (item.ContractId) {
                    var target = $(e.target);
                    if (target.hasClass("view-details")) {
                        e.preventDefault();
                        var dialogContract_ = new ECNET.Office.TblContractDialog();
                        dialogContract_.readOnly = true;
                        dialogContract_.element.find('.printContract').addClass('disabled');
                        dialogContract_.element.find('.addSchedule').addClass('disabled');
                        dialogContract_.loadByIdAndOpenDialog(item.ContractId, true);
                    }
                    else if (target.hasClass("contract-link")) {
                        e.preventDefault();
                        var dialogContract_ = new ECNET.Office.TblContractDialog();
                        dialogContract_.readOnly = true;
                        dialogContract_.element.find('.printContract').addClass('disabled');
                        dialogContract_.element.find('.addSchedule').addClass('disabled');
                        dialogContract_.loadByIdAndOpenDialog(item.ContractId, true);
                        this.refresh();
                    }
                }
                //else {
                //    Q.alert("Không tìm thấy hợp đồng");
                //}
            };
            TblPlaceOfBussinessGrid.prototype.getQuickFilters = function () {
                var _this = this;
                // get quick filter list from base class
                var filters = _super.prototype.getQuickFilters.call(this);
                if (this.batchNo_) {
                    Q.first(filters, function (x) { return x.field == "BatchNo" /* BatchNo */; }).init = function (w) {
                        // enum editor has a string value, so need to call toString()
                        w.value = _this.batchNo_;
                    };
                }
                return filters;
            };
            TblPlaceOfBussinessGrid.prototype.onViewSubmit = function () {
                if (!_super.prototype.onViewSubmit.call(this)) {
                    return false;
                }
                var request = this.view.params;
                if (this.batchNo_) {
                    request.Criteria = Serenity.Criteria.and(request.Criteria, [['BatchNo'], '=', this.batchNo_]);
                }
                return true;
            };
            TblPlaceOfBussinessGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TblPlaceOfBussinessGrid);
            return TblPlaceOfBussinessGrid;
        }(Serenity.EntityGrid));
        Office.TblPlaceOfBussinessGrid = TblPlaceOfBussinessGrid;
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        /**
         * This is our category editor that will show only categories of Produce and
         * Seafood. We are subclassing LookupEditorBase which also LookupEditor
         * derives from.
         *
         * After compiling and transforming templates, this editor type will be
         * available in server side to use in our LookupFilterByMultipleForm,
         * which is a version of ProductForm that uses our custom editor.
         */
        var LocalTransactionEditor = /** @class */ (function (_super) {
            __extends(LocalTransactionEditor, _super);
            function LocalTransactionEditor(container, opt) {
                return _super.call(this, container, opt) || this;
            }
            /**
             * Normally LookupEditor requires a lookup key to determine which set of
             * lookup data to show in editor. As our editor will only show category
             * data, we lock it to category lookup key.
             */
            LocalTransactionEditor.prototype.getLookupKey = function () {
                return Office.TblTransactionLocationRow.lookupKey;
            };
            /**
             * Here we are filtering by category name but you could filter by any field.
             * Just make sure the fields you filter on has [LookupInclude] attribute on them,
             * otherwise their value will be null in client side as they are not sent back
             * from server in lookup script.
             */
            LocalTransactionEditor.prototype.getItemText = function (item, lookup) {
                return _super.prototype.getItemText.call(this, item, lookup) +
                    item.Code + '-' + item.Name;
            };
            LocalTransactionEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], LocalTransactionEditor);
            return LocalTransactionEditor;
        }(Serenity.LookupEditorBase));
        Office.LocalTransactionEditor = LocalTransactionEditor;
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        /**
         * This is our category editor that will show only categories of Produce and
         * Seafood. We are subclassing LookupEditorBase which also LookupEditor
         * derives from.
         *
         * After compiling and transforming templates, this editor type will be
         * available in server side to use in our LookupFilterByMultipleForm,
         * which is a version of ProductForm that uses our custom editor.
         */
        var PlaceProjectEditor = /** @class */ (function (_super) {
            __extends(PlaceProjectEditor, _super);
            function PlaceProjectEditor(container, opt) {
                return _super.call(this, container, opt) || this;
            }
            /**
             * Normally LookupEditor requires a lookup key to determine which set of
             * lookup data to show in editor. As our editor will only show category
             * data, we lock it to category lookup key.
             */
            PlaceProjectEditor.prototype.getLookupKey = function () {
                return Office.TblPlaceOfBussinessRow.lookupKey;
            };
            /**
             * Here we are filtering by category name but you could filter by any field.
             * Just make sure the fields you filter on has [LookupInclude] attribute on them,
             * otherwise their value will be null in client side as they are not sent back
             * from server in lookup script.
             */
            PlaceProjectEditor.prototype.getItems = function (lookup) {
                var project = Office.TblProjectRow.getLookup().items;
                if (this.myId === 1)
                    if (project.length > 0) {
                        return _super.prototype.getItems.call(this, lookup).filter(function (x) {
                            return x.Status === 5 && (x.ContractId == null ? 0 : x.ContractId) > 0 && project.filter(function (k) { return k.PlaceId === x.Id; }).length <= 0;
                        });
                    }
                    else
                        return _super.prototype.getItems.call(this, lookup).filter(function (x) {
                            return x.Status === 5 && (x.ContractId == null ? 0 : x.ContractId) > 0;
                        });
                else {
                    return _super.prototype.getItems.call(this, lookup).filter(function (x) {
                        return x.Status === 5 && (x.ContractId == null ? 0 : x.ContractId) > 0;
                    });
                }
            };
            PlaceProjectEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], PlaceProjectEditor);
            return PlaceProjectEditor;
        }(Serenity.LookupEditorBase));
        Office.PlaceProjectEditor = PlaceProjectEditor;
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var ProjectTimelinesDialog = /** @class */ (function (_super) {
            __extends(ProjectTimelinesDialog, _super);
            function ProjectTimelinesDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ProjectTimelinesDialog.initializePage = function () {
            };
            ProjectTimelinesDialog.prototype.onDialogOpen = function () {
                var projectId = this.projectId;
                _super.prototype.onDialogOpen.call(this);
                $(function () {
                    $.ajax({
                        url: '/Services/Office/TblProject/GetProjectTimelines',
                        type: 'post',
                        dataType: 'json',
                        data: { 'projectId': projectId },
                        success: function (response) {
                            $("#myTimeline").albeTimeline(response);
                        }
                    });
                });
            };
            ProjectTimelinesDialog.prototype.arrange = function () {
                _super.prototype.arrange.call(this);
                this.dialogTitle = "Time line";
            };
            ProjectTimelinesDialog.prototype.getTemplate = function () {
                // you could also put this in a ChartInDialog.Template.html file. it's here for simplicity.
                return "<div id='myTimeline'></div>";
            };
            ProjectTimelinesDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.resizable(),
                Serenity.Decorators.maximizable(),
                Serenity.Decorators.panel()
            ], ProjectTimelinesDialog);
            return ProjectTimelinesDialog;
        }(Serenity.TemplatedDialog));
        Office.ProjectTimelinesDialog = ProjectTimelinesDialog;
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var TblProjectDialog = /** @class */ (function (_super) {
            __extends(TblProjectDialog, _super);
            function TblProjectDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Office.TblProjectForm(_this.idPrefix);
                var regex = /^([a-zA-Z0\-\,\/\\\\(\)\)\.-9ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\s]+)$/;
                var regexSpecial = /[!@#$%^&*(),.?":{}|<>]/;
                var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                var mesSpecial = "Không nhập ký tự đặc biệt";
                _this.form.PlaceId.changeSelect2(function (e) {
                    var ItemId = Office.TblPlaceOfBussinessRow.getLookup().itemById[_this.form.PlaceId.value];
                    if (ItemId != null) {
                        _this.form.PlaceCityId.value = ItemId.CityId == null ? null : ItemId.CityId.toString();
                        _this.form.PlaceDistrictId.value = ItemId.DistrictId == null ? null : ItemId.DistrictId.toString();
                        _this.form.PlaceWardsId.value = ItemId.WardsId == null ? null : ItemId.WardsId.toString();
                        _this.form.PlaceAddress.value = ItemId.Address;
                    }
                });
                _this.form.Name.addValidationRule(_this.uniqueName, function (e) {
                    if (!(regex.test(e.val())))
                        return mesSpecial;
                });
                _this.form.Note.addValidationRule(_this.uniqueName, function (e) {
                    if (!(regex.test(e.val())))
                        return mesSpecial;
                });
                _this.form.PersonManagement.addValidationRule(_this.uniqueName, function (e) {
                    if (!(regex.test(e.val())))
                        return mesSpecial;
                });
                _this.form.PersonManagementPhone.addValidationRule(_this.uniqueName, function (e) {
                    //if (!(/^(0?)(-?\d{10})$/.test(this.form.PhoneOfOwner.value))) 
                    var phone = e.val();
                    if (phone.length > 0) {
                        if (phone.substring(0, 1) !== "0")
                            return "Số điện thoại bắt đầu bằng 0";
                        else if (phone.length < 10 || phone.length > 11)
                            return "Số điện 10 hoặc 11 số";
                    }
                });
                _this.form.ToDate.addValidationRule(_this.uniqueName, function (e) {
                    var fromDate = _this.form.FromDate.value;
                    if (_this.form.ToDate.value <= fromDate) {
                        return "Vui lòng nhập ngày kết thúc hợp đồng lớn hơn ngày bắt đầu.";
                    }
                });
                _this.form.FromDate.addValidationRule(_this.uniqueName, function (e) {
                    var toDate = _this.form.ToDate.value;
                    if (_this.form.FromDate.value >= toDate) {
                        return "Vui lòng nhập ngày kết thúc hợp đồng lớn hơn ngày bắt đầu.";
                    }
                });
                return _this;
            }
            TblProjectDialog.prototype.getFormKey = function () { return Office.TblProjectForm.formKey; };
            TblProjectDialog.prototype.getIdProperty = function () { return Office.TblProjectRow.idProperty; };
            TblProjectDialog.prototype.getLocalTextPrefix = function () { return Office.TblProjectRow.localTextPrefix; };
            TblProjectDialog.prototype.getNameProperty = function () { return Office.TblProjectRow.nameProperty; };
            TblProjectDialog.prototype.getService = function () { return Office.TblProjectService.baseUrl; };
            TblProjectDialog.prototype.getDeletePermission = function () { return Office.TblProjectRow.deletePermission; };
            TblProjectDialog.prototype.getInsertPermission = function () { return Office.TblProjectRow.insertPermission; };
            TblProjectDialog.prototype.getUpdatePermission = function () { return Office.TblProjectRow.updatePermission; };
            TblProjectDialog.prototype.afterLoadEntity = function () {
                var _this = this;
                _super.prototype.afterLoadEntity.call(this);
                this.statusOld = parseInt(this.form.StatusId.value);
                this.form.ProjectItems.viewMode = true;
                if (!this.entityId) {
                    //this.form.StatusId.value = "1";
                    this.form.StatusId.readOnly = true;
                    this.form.PlaceCityId.readOnly = true;
                    this.form.PlaceDistrictId.readOnly = true;
                    this.form.PlaceWardsId.readOnly = true;
                    this.statusOld = parseInt(this.form.StatusId.value);
                    this.form.PlaceId.myId = 1;
                }
                if (this.isNewOrDeleted()) {
                    if (this.form.PlaceId.value === null || this.form.PlaceId.value == "") {
                        this.form.PlaceId.filterField = "Status" /* Status */;
                        this.form.PlaceId.filterValue = 5; //approved
                    }
                    else {
                        this.form.PlaceId.readOnly = true;
                    }
                }
                var isCheck;
                this.form.StatusId.change(function (e) {
                    e.preventDefault();
                    e.stopImmediatePropagation();
                    isCheck = false;
                    var status;
                    var old;
                    old = _this.statusOld;
                    var times = 0;
                    if (isNaN(old) == false) {
                        var newValue = parseInt(_this.form.StatusId.value);
                        if (old == newValue)
                            return;
                        try {
                            status = Q.tryFirst(ECNET.Office.TblStatusDetailRow.getLookup().items, function (x) { return (x.StatusId === old && x.StatusDetailId == newValue); });
                        }
                        catch (e1) {
                            status = null;
                        }
                        if ((status == "undefined" || status == null) && isCheck === false) {
                            Q.alert('Trạng thái hiện tại không cho chuyển về trạng thái ' + Q.tryFirst(ECNET.Office.TblStatusRow.getLookup().items, function (x) { return x.Id == newValue; }).Name);
                            //return false;
                            isCheck = true;
                            _this.form.StatusId.value = _this.statusOld.toString();
                            times = times + 1;
                            return;
                        }
                        else if (isCheck === false) {
                            var statusLv2 = ECNET.Office.TblStatusDetailLevel2Row.getLookup().items.filter(function (x) { return (x.StatusId === newValue); });
                            var projectItems = ECNET.Office.TblProjectItemRow.getLookup().items.filter(function (e1) { return e1.ProjectId === _this.entityId; });
                            var isCheckChild = false;
                            var isCount = 0;
                            if (projectItems.length > 0) {
                                projectItems.forEach(function (value) {
                                    isCheckChild = statusLv2.some(function (i) { return i.StatusDetailId == value.Status; });
                                    if (isCheckChild == false)
                                        isCount++;
                                    return false;
                                });
                            }
                            if (isCount > 0 && projectItems.length > 0) {
                                Q.alert('Chọn trạng thái không đúng! Kiểm tra lại danh mục dự án');
                                //return false;
                                isCheck = true;
                                //e.result = this.statusOld.toString();
                                _this.form.StatusId.value = _this.statusOld.toString();
                                e.stopPropagation();
                                times = times + 1;
                                return;
                            }
                        }
                    }
                });
                if (this.statusOld > 0) {
                    var statusCurrent = Q.first(ECNET.Office.TblStatusRow.getLookup().items, function (x) { return (x.Id === _this.statusOld); });
                    if (statusCurrent.IsReadOnly == true) {
                        this.set_readOnly(true);
                    }
                }
                if (this.editFrom == 1) {
                    this.set_readOnly(true);
                    this.form.StatusId.readOnly = false;
                    this.applyChangesButton.removeClass("disabled");
                    this.saveAndCloseButton.removeClass("disabled");
                }
                else
                    this.form.StatusId.readOnly = true;
            };
            TblProjectDialog.prototype.loadEntity = function (entity) {
                _super.prototype.loadEntity.call(this, entity);
                this.statusOld = parseInt(this.form.StatusId.value);
                //Khởi tạo giá trị cho việc phê duyệt
                if (this.isNew()) {
                    var IsApprovalForNew = Q.tryFirst(Office.SysParametersRow.getLookup().items, function (e) { return e.Code == 'PROJECT_NEW'; });
                    var IsApprovalForEdit = Q.tryFirst(Office.SysParametersRow.getLookup().items, function (e) { return e.Code == 'PROJECT_EDIT'; });
                    if (IsApprovalForNew.Value == null || IsApprovalForNew.Value == "0") {
                        this.form.IsNeedApprovalForNew.value = false;
                        this.form.RecordStatus.value = "1"; //Ecnet.StatusRecord
                    }
                    else
                        this.form.IsNeedApprovalForNew.value = true;
                    if (IsApprovalForEdit.Value == null || IsApprovalForEdit.Value == "0")
                        this.form.IsNeedApprovalForEdit.value = false;
                    else
                        this.form.IsNeedApprovalForEdit.value = true;
                    this.form.LevelApprovalForNew.value = IsApprovalForNew.Value == null ? 0 : parseInt(IsApprovalForNew.Value);
                    this.form.LevelApprovalForEdit.value = IsApprovalForEdit.Value == null ? 0 : parseInt(IsApprovalForEdit.Value);
                }
                else {
                    if (this.form.IsNeedApprovalForEdit.value == false)
                        this.form.RecordStatus.value = "1"; //Ecnet.StatusRecord
                    if (this.form.IsNeedApprovalForNew.value == false && this.form.IsNeedApprovalForNew.value == false)
                        this.element.find('.addApprove').addClass('hidden');
                }
            };
            TblProjectDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                Q.first(buttons, function (x) { return x.cssClass == "save-and-close-button"; }).onClick = function () {
                    return Q.confirm('Bạn có muốn lưu?', function () {
                        _this.save(function () {
                            _this.dialogClose();
                        });
                    });
                };
                buttons.push({
                    title: 'Phê duyệt',
                    cssClass: 'addApprove',
                    icon: 'fa-gavel',
                    onClick: function (e) {
                        // *** do something on click if you want **
                        var dialogApp = new Office.TblApprovalCenterDialog();
                        var approved_ = Q.first(ECNET.Office.TblApprovalCenterRow.getLookup().items, function (x) { return (x.ClientId == _this.entityId && x.Type == 3); });
                        dialogApp.loadByIdAndOpenDialog(approved_.Id);
                        Serenity.SubDialogHelper.bindToDataChange(dialogApp, _this, function (e, dci) {
                            _this.reloadById();
                        }, true);
                        // this.initDialog();
                        e.preventDefault();
                        dialogApp.dialogOpen();
                    }
                });
                if (!ECNET.Authorization.hasPermission("Ecnet:dbo.tblProject:Modify")) {
                    buttons.forEach(function (e) {
                        if (e.cssClass == "addApprove" && ECNET.Authorization.hasPermission("Ecnet:dbo.tblApprovalCenter:Modify"))
                            e.disabled = false;
                        else
                            e.disabled = true;
                    });
                }
                return buttons;
            };
            TblProjectDialog = __decorate([
                Serenity.Decorators.panel()
            ], TblProjectDialog);
            return TblProjectDialog;
        }(Serenity.EntityDialog));
        Office.TblProjectDialog = TblProjectDialog;
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var TblProjectGrid = /** @class */ (function (_super) {
            __extends(TblProjectGrid, _super);
            function TblProjectGrid(container) {
                var _this = _super.call(this, container) || this;
                _this.refresh();
                return _this;
            }
            TblProjectGrid.prototype.getColumnsKey = function () { return 'Office.TblProject'; };
            TblProjectGrid.prototype.getDialogType = function () { return Office.TblProjectDialog; };
            TblProjectGrid.prototype.getIdProperty = function () { return Office.TblProjectRow.idProperty; };
            TblProjectGrid.prototype.getInsertPermission = function () { return Office.TblProjectRow.insertPermission; };
            TblProjectGrid.prototype.getLocalTextPrefix = function () { return Office.TblProjectRow.localTextPrefix; };
            TblProjectGrid.prototype.getService = function () { return Office.TblProjectService.baseUrl; };
            TblProjectGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push({
                    title: 'Group theo trạng thái',
                    cssClass: 'expand-all-button',
                    onClick: function () { return _this.view.setGrouping([{
                            formatter: function (x) { return 'Trạng thái: ' + x.value + ' (' + x.count + ' items)'; },
                            getter: 'StatusName'
                        }]); }
                }, {
                    title: 'Group theo PGD',
                    cssClass: 'expand-all-button',
                    onClick: function () { return _this.view.setGrouping([{
                            formatter: function (x) { return 'Phòng giao dịch: ' + x.value + ' (' + x.count + ' items)'; },
                            getter: 'TransactionLocationName'
                        }]); }
                }, {
                    title: 'Bỏ group',
                    cssClass: 'collapse-all-button',
                    onClick: function () { return _this.view.setGrouping([]); }
                });
                buttons.push(ECNET.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    title: 'Xuất excel',
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    service: 'Office/tblProject/ListExcel',
                    separator: true
                }));
                //if (!Authorization.hasPermission("Ecnet:dbo.TblProject:Modify")) {
                //    buttons.forEach(e => {
                //        e.disabled = true;
                //    });
                //}
                return buttons;
            };
            TblProjectGrid.prototype.onClick = function (e, row, cell) {
                // let base grid handle clicks for its edit links
                var _this = this;
                // if base grid already handled, we shouldn"t handle it again
                if (e.isDefaultPrevented()) {
                    return;
                }
                // get reference to current item
                if (row >= 0) {
                    var item = this.itemAt(row);
                    var target = $(e.target);
                    if (target.hasClass("inline")) {
                        e.preventDefault();
                        var dialog_ = new ECNET.Office.TblProjectDialog();
                        dialog_.editFrom = 1;
                        dialog_.loadByIdAndOpenDialog(item.Id, true);
                        Serenity.SubDialogHelper.bindToDataChange(dialog_, this, function (e, dci) {
                            _this.refresh();
                        }, true);
                    }
                    else if (target.hasClass("view-timeline")) {
                        e.preventDefault();
                        var dialogTimeline = new ECNET.Office.ProjectTimelinesDialog();
                        dialogTimeline.projectId = item.Id;
                        dialogTimeline.dialogOpen(true);
                    }
                    {
                        _super.prototype.onClick.call(this, e, row, cell);
                    }
                }
            };
            //    // get reference to clicked element
            TblProjectGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                //Q.first(columns, x => x.field == fld.Code).format =
                //    ctx => `<a href="javascript:;" class="customer-link">${Q.htmlEncode(ctx.value)}</a>`;
                columns.unshift({
                    field: 'Cập nhật tiến độ',
                    name: '',
                    format: function (ctx) { return '<div class="inline update-status btn btn-warning btn-xs">Cập nhật tiến độ</div>'; },
                    width: 140,
                    minWidth: 140,
                    maxWidth: 140
                });
                columns.unshift({
                    field: 'Time line',
                    name: '',
                    format: function (ctx) { return '<div class="view-timeline btn btn-primary btn-xs">Time line</div>'; },
                    width: 80,
                    minWidth: 80,
                    maxWidth: 100
                });
                return columns;
            };
            TblProjectGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TblProjectGrid);
            return TblProjectGrid;
        }(Serenity.EntityGrid));
        Office.TblProjectGrid = TblProjectGrid;
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var ProjectItemsEditor = /** @class */ (function (_super) {
            __extends(ProjectItemsEditor, _super);
            function ProjectItemsEditor(container) {
                return _super.call(this, container) || this;
            }
            ProjectItemsEditor.prototype.getColumnsKey = function () { return 'Office.TblProjectItem'; };
            //protected getDialogType() { return TblContractItemsDialog; }
            ProjectItemsEditor.prototype.getDialogType = function () { return Office.ProjectItemsEditorDialog; };
            ProjectItemsEditor.prototype.getLocalTextPrefix = function () { return Office.TblProjectItemRow.localTextPrefix; };
            ProjectItemsEditor.prototype.initEntityDialog = function (itemType, dialog) {
                _super.prototype.initEntityDialog.call(this, itemType, dialog);
                // passing codeComite from grid editor to detail dialog
                dialog.projetcId = this.projectId;
                dialog.viewMode = this.viewMode;
                dialog.editFrom = this.editFrom;
            };
            //protected validateEntity(row: TblContractItemsRow, id: number) {
            //    if (!super.validateEntity(row, id))
            //        return false;
            //    row.ItemItemName = TblItemsRow.getLookup()
            //        .itemById[row.ItemId].ItemName;
            //    return true;
            //}   
            ProjectItemsEditor.prototype.getAddButtonCaption = function () {
                return "Thêm mới";
            };
            ProjectItemsEditor.prototype.getQuickFilters = function () {
                // get quick filter list from base class
                var filters = _super.prototype.getQuickFilters.call(this);
                filters.splice(0, 1);
                var filterStatus = Q.first(filters, function (x) { return x.field == "Status"; });
                return filters;
            };
            ProjectItemsEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], ProjectItemsEditor);
            return ProjectItemsEditor;
        }(ECNET.Common.GridEditorBase));
        Office.ProjectItemsEditor = ProjectItemsEditor;
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var ProjectItemsEditorDialog = /** @class */ (function (_super) {
            __extends(ProjectItemsEditorDialog, _super);
            function ProjectItemsEditorDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Office.TblProjectItemForm(_this.idPrefix);
                var regex = /^([a-zA-Z0\-\,\/\\\\(\)\)\.-9ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\s]+)$/;
                var regexSpecial = /[!@#$%^&*(),.?":{}|<>]/;
                var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                var mesSpecial = "Không nhập ký tự đặc biệt";
                _this.form.ToDate.addValidationRule(_this.uniqueName, function (e) {
                    var fromDate = _this.form.FromDate.value;
                    if (_this.form.ToDate.value <= fromDate) {
                        return "Vui lòng nhập ngày kết thúc hợp đồng lớn hơn ngày bắt đầu.";
                    }
                });
                _this.form.ToDate.change(function (e) {
                    try {
                        var fromDate = Date.parse(_this.form.FromDate.value);
                        var toDate = Date.parse(_this.form.ToDate.value);
                        var days = Math.abs(Math.ceil((toDate - fromDate) / 86400000));
                        _this.form.TotalDays.value = days;
                    }
                    catch (e) {
                    }
                });
                _this.form.Decription.addValidationRule(_this.uniqueName, function (e) {
                    if (!(regex.test(e.val())))
                        return mesSpecial;
                });
                _this.form.Note.addValidationRule(_this.uniqueName, function (e) {
                    if (!(regex.test(e.val())))
                        return mesSpecial;
                });
                _this.form.Name.addValidationRule(_this.uniqueName, function (e) {
                    if (!(regex.test(e.val())))
                        return mesSpecial;
                });
                return _this;
            }
            ProjectItemsEditorDialog.prototype.getFormKey = function () { return Office.TblProjectItemForm.formKey; };
            ProjectItemsEditorDialog.prototype.getLocalTextPrefix = function () { return Office.TblProjectItemRow.localTextPrefix; };
            ProjectItemsEditorDialog.prototype.loadEntity = function (entity) {
                _super.prototype.loadEntity.call(this, entity);
                this.form.ProjectId.value = this.projetcId ? this.projetcId.toString() : null;
            };
            ProjectItemsEditorDialog.prototype.afterLoadEntity = function () {
                var _this = this;
                _super.prototype.afterLoadEntity.call(this);
                this.statusOld = parseInt(this.form.Status.value);
                var isCheck;
                this.form.Status.change(function (e) {
                    var status;
                    var old;
                    old = _this.statusOld;
                    isCheck = false;
                    var newValue = parseInt(_this.form.Status.value);
                    try {
                        status = Q.tryFirst(ECNET.Office.TblStatusDetailRow.getLookup().items, function (x) { return (x.StatusId === old && x.StatusDetailId == newValue); });
                    }
                    catch (e1) {
                        status = null;
                    }
                    if ((status == "undefined" || status == null) && isCheck === false) {
                        //Q.alert('Chọn trạng thái không đúng');
                        Q.alert('Trạng thái hiện tại không cho chuyển về trạng thái ' + Q.tryFirst(ECNET.Office.TblStatusRow.getLookup().items, function (x) { return x.Id == newValue; }).Name);
                        //return false;
                        isCheck = true;
                        _this.form.Status.value = _this.statusOld.toString();
                        return;
                    }
                    else if (isCheck === false) {
                        var statusLv2 = ECNET.Office.TblStatusDetailLevel2Row.getLookup().items.filter(function (x) { return (x.StatusId === newValue); });
                        var project = ECNET.Office.TblProjectRow.getLookup().items.filter(function (e1) { return e1.Id === parseInt(_this.form.ProjectId.value); });
                        var isCheckChild = false;
                        var isCount = 0;
                        if (project.length > 0) {
                            project.forEach(function (value) {
                                isCheckChild = statusLv2.some(function (i) { return i.StatusDetailId == value.StatusId; });
                                if (isCheckChild == false)
                                    isCount++;
                                return;
                            });
                        }
                        if (isCount > 0 && project.length > 0) {
                            Q.alert('Chọn trạng thái không! Kiểm tra lại trạng thái dự án');
                            //return false;
                            isCheck = true;
                            //e.result = this.statusOld.toString();
                            _this.form.Status.value = _this.statusOld.toString();
                            e.stopPropagation();
                            return;
                        }
                    }
                });
                //if (this.editFrom == 1) {
                //    if (this.statusOld > 0) {
                //        var statusCurrent = Q.first(ECNET.Office.TblStatusRow.getLookup().items,
                //            x => (x.Id === this.statusOld));
                //        if (statusCurrent.IsReadOnly == true) {
                //            this.set_readOnly(true);
                //        }
                //    }
                //}
                if (this.statusOld > 0) {
                    var statusCurrent = Q.first(ECNET.Office.TblStatusRow.getLookup().items, function (x) { return (x.Id === _this.statusOld); });
                    if (statusCurrent.IsReadOnly == true) {
                        this.set_readOnly(true);
                    }
                }
                //if (this.isEditMode()) {
                //    this.set_readOnly(true);
                //    this.deleteButton.removeClass("disabled");
                //}
                if (this.editFrom == 1) {
                    this.form.Status.readOnly = false;
                }
                else {
                    this.form.Status.readOnly = true;
                }
            };
            ProjectItemsEditorDialog = __decorate([
                Serenity.Decorators.panel()
            ], ProjectItemsEditorDialog);
            return ProjectItemsEditorDialog;
        }(ECNET.Common.GridEditorDialog));
        Office.ProjectItemsEditorDialog = ProjectItemsEditorDialog;
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var TblProjectItemDialog = /** @class */ (function (_super) {
            __extends(TblProjectItemDialog, _super);
            function TblProjectItemDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Office.TblProjectItemForm(_this.idPrefix);
                var regex = /^([a-zA-Z0\-\,\/\\\\(\)\)\.-9ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\s]+)$/;
                var regexSpecial = /[!@#$%^&*(),.?":{}|<>]/;
                var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                var mesSpecial = "Không nhập ký tự đặc biệt";
                _this.form.ToDate.addValidationRule(_this.uniqueName, function (e) {
                    var fromDate = _this.form.FromDate.value;
                    if (_this.form.ToDate.value <= fromDate) {
                        return "Vui lòng nhập ngày kết thúc hợp đồng lớn hơn ngày bắt đầu.";
                    }
                });
                _this.form.ToDate.change(function (e) {
                    try {
                        var fromDate = Date.parse(_this.form.FromDate.value);
                        var toDate = Date.parse(_this.form.ToDate.value);
                        var days = Math.abs(Math.ceil((toDate - fromDate) / 86400000));
                        _this.form.TotalDays.value = days;
                    }
                    catch (e) {
                    }
                });
                _this.form.Decription.addValidationRule(_this.uniqueName, function (e) {
                    if (!(regex.test(e.val())))
                        return mesSpecial;
                });
                _this.form.Note.addValidationRule(_this.uniqueName, function (e) {
                    if (!(regex.test(e.val())))
                        return mesSpecial;
                });
                _this.form.Name.addValidationRule(_this.uniqueName, function (e) {
                    if (!(regex.test(e.val())))
                        return mesSpecial;
                });
                _this.statusOld = parseInt(_this.form.Status.value);
                var isCheck;
                _this.form.Status.change(function (e) {
                    var status;
                    var old;
                    old = _this.statusOld;
                    isCheck = false;
                    if (isNaN(old) == false) {
                        var newValue = parseInt(_this.form.Status.value);
                        if (newValue == old)
                            return;
                        try {
                            status = Q.tryFirst(ECNET.Office.TblStatusDetailRow.getLookup().items, function (x) { return (x.StatusId === old && x.StatusDetailId == newValue); });
                        }
                        catch (e1) {
                            status = null;
                        }
                        if ((status == "undefined" || status == null) && isCheck === false) {
                            //Q.alert('Chọn trạng thái không đúng');
                            Q.alert('Trạng thái hiện tại không cho chuyển về trạng thái ' + Q.tryFirst(ECNET.Office.TblStatusRow.getLookup().items, function (x) { return x.Id == newValue; }).Name);
                            //return false;
                            isCheck = true;
                            _this.form.Status.value = _this.statusOld.toString();
                            return;
                        }
                        else if (isCheck === false) {
                            var statusLv2 = ECNET.Office.TblStatusDetailLevel2Row.getLookup().items.filter(function (x) { return (x.StatusId === newValue); });
                            var project = ECNET.Office.TblProjectRow.getLookup().items.filter(function (e1) { return e1.Id === parseInt(_this.form.ProjectId.value); });
                            var isCheckChild = false;
                            var isCount = 0;
                            if (project.length > 0) {
                                project.forEach(function (value) {
                                    isCheckChild = statusLv2.some(function (i) { return i.StatusDetailId == value.StatusId; });
                                    if (isCheckChild == false)
                                        isCount++;
                                    return;
                                });
                            }
                            if (isCount > 0 && project.length > 0) {
                                Q.alert('Chọn trạng thái không đúng! Kiểm tra lại trạng thái dự án');
                                //return false;
                                isCheck = true;
                                //e.result = this.statusOld.toString();
                                _this.form.Status.value = _this.statusOld.toString();
                                e.stopPropagation();
                                return;
                            }
                        }
                    }
                });
                return _this;
            }
            TblProjectItemDialog.prototype.getFormKey = function () { return Office.TblProjectItemForm.formKey; };
            TblProjectItemDialog.prototype.getIdProperty = function () { return Office.TblProjectItemRow.idProperty; };
            TblProjectItemDialog.prototype.getLocalTextPrefix = function () { return Office.TblProjectItemRow.localTextPrefix; };
            TblProjectItemDialog.prototype.getNameProperty = function () { return Office.TblProjectItemRow.nameProperty; };
            TblProjectItemDialog.prototype.getService = function () { return Office.TblProjectItemService.baseUrl; };
            TblProjectItemDialog.prototype.getDeletePermission = function () { return Office.TblProjectItemRow.deletePermission; };
            TblProjectItemDialog.prototype.getInsertPermission = function () { return Office.TblProjectItemRow.insertPermission; };
            TblProjectItemDialog.prototype.getUpdatePermission = function () { return Office.TblProjectItemRow.updatePermission; };
            TblProjectItemDialog.prototype.loadEntity = function (entity) {
                _super.prototype.loadEntity.call(this, entity);
                this.statusOld = parseInt(this.form.Status.value);
            };
            TblProjectItemDialog.prototype.afterLoadEntity = function () {
                var _this = this;
                _super.prototype.afterLoadEntity.call(this);
                if (this.editFrom == 1) {
                    this.set_readOnly(true);
                    this.form.Status.set_readOnly(false);
                    this.applyChangesButton.removeClass("disabled");
                    this.saveAndCloseButton.removeClass("disabled");
                }
                else {
                    this.form.Status.set_readOnly(true);
                }
                if (this.statusOld > 0) {
                    var statusCurrent = Q.first(ECNET.Office.TblStatusRow.getLookup().items, function (x) { return (x.Id === _this.statusOld); });
                    if (statusCurrent.IsReadOnly == true) {
                        this.set_readOnly(true);
                    }
                }
            };
            TblProjectItemDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], TblProjectItemDialog);
            return TblProjectItemDialog;
        }(Serenity.EntityDialog));
        Office.TblProjectItemDialog = TblProjectItemDialog;
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var TblProjectItemGrid = /** @class */ (function (_super) {
            __extends(TblProjectItemGrid, _super);
            function TblProjectItemGrid(container) {
                return _super.call(this, container) || this;
            }
            TblProjectItemGrid.prototype.getColumnsKey = function () { return 'Office.TblProjectItem'; };
            TblProjectItemGrid.prototype.getDialogType = function () { return Office.TblProjectItemDialog; };
            TblProjectItemGrid.prototype.getIdProperty = function () { return Office.TblProjectItemRow.idProperty; };
            TblProjectItemGrid.prototype.getInsertPermission = function () { return Office.TblProjectItemRow.insertPermission; };
            TblProjectItemGrid.prototype.getLocalTextPrefix = function () { return Office.TblProjectItemRow.localTextPrefix; };
            TblProjectItemGrid.prototype.getService = function () { return Office.TblProjectItemService.baseUrl; };
            TblProjectItemGrid.prototype.getButtons = function () {
                // call base method to get list of buttons
                // by default, base entity grid adds a few buttons, 
                // add, refresh, column selection in order.
                var buttons = _super.prototype.getButtons.call(this);
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "add-button"; }), 1);
                return buttons;
            };
            TblProjectItemGrid.prototype.getQuickFilters = function () {
                // get quick filter list from base class
                var filters = _super.prototype.getQuickFilters.call(this);
                if (this.viewMode) {
                    var filterprojectCode = Q.tryFirst(filters, function (x) { return x.field == "ProjectCode" /* ProjectCode */; });
                }
                return filters;
            };
            TblProjectItemGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                //Q.first(columns, x => x.field == fld.Code).format =
                //    ctx => `<a href="javascript:;" class="customer-link">${Q.htmlEncode(ctx.value)}</a>`;
                columns.unshift({
                    field: 'Cập nhật tiến độ',
                    name: '',
                    format: function (ctx) { return '<div class="inline update-status btn btn-success btn-sm active" type="button">Cập nhật tiến độ</div>'; },
                    width: 140,
                    minWidth: 140,
                    maxWidth: 140
                });
                Q.first(columns, function (x) { return x.field == "ProjectCode" /* ProjectCode */; }).format =
                    function (ctx) { return "<a href=\"javascript:;\" class=\"project-link\">" + Q.htmlEncode(ctx.value) + "</a>"; };
                return columns;
            };
            TblProjectItemGrid.prototype.onClick = function (e, row, cell) {
                // let base grid handle clicks for its edit links
                var _this = this;
                // if base grid already handled, we shouldn"t handle it again
                if (e.isDefaultPrevented()) {
                    return;
                }
                // get reference to current item
                if (row >= 0) {
                    var item = this.itemAt(row);
                    var target = $(e.target);
                    if (target.hasClass("inline")) {
                        e.preventDefault();
                        var dialog_ = new ECNET.Office.TblProjectItemDialog();
                        dialog_.editFrom = 1;
                        dialog_.loadByIdAndOpenDialog(item.Id, false);
                        Serenity.SubDialogHelper.bindToDataChange(dialog_, this, function (e, dci) {
                            _this.refresh();
                        }, true);
                    }
                    else if (target.hasClass("project-link")) {
                        e.preventDefault();
                        var dialogContract_ = new ECNET.Office.TblProjectDialog();
                        //dialogContract_.readOnly = true;
                        //dialogContract_.element.find('.printContract').addClass('disabled');
                        //dialogContract_.element.find('.addSchedule').addClass('disabled');
                        dialogContract_.loadByIdAndOpenDialog(item.ProjectId, true);
                        this.refresh();
                    }
                    {
                        _super.prototype.onClick.call(this, e, row, cell);
                    }
                }
            };
            TblProjectItemGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TblProjectItemGrid);
            return TblProjectItemGrid;
        }(Serenity.EntityGrid));
        Office.TblProjectItemGrid = TblProjectItemGrid;
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var TblStatusDialog = /** @class */ (function (_super) {
            __extends(TblStatusDialog, _super);
            function TblStatusDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Office.TblStatusForm(_this.idPrefix);
                if (_this.isNewOrDeleted()) {
                    _this.form.TypeId.change(function (e) {
                        if (_this.form.TypeId.value == "3")
                            _this.form.AllowListLevel2.cascadeValue = 4;
                        else if (_this.form.TypeId.value == "4")
                            _this.form.AllowListLevel2.cascadeValue = 3;
                    });
                }
                return _this;
            }
            TblStatusDialog.prototype.getFormKey = function () { return Office.TblStatusForm.formKey; };
            TblStatusDialog.prototype.getIdProperty = function () { return Office.TblStatusRow.idProperty; };
            TblStatusDialog.prototype.getLocalTextPrefix = function () { return Office.TblStatusRow.localTextPrefix; };
            TblStatusDialog.prototype.getNameProperty = function () { return Office.TblStatusRow.nameProperty; };
            TblStatusDialog.prototype.getService = function () { return Office.TblStatusService.baseUrl; };
            TblStatusDialog.prototype.getDeletePermission = function () { return Office.TblStatusRow.deletePermission; };
            TblStatusDialog.prototype.getInsertPermission = function () { return Office.TblStatusRow.insertPermission; };
            TblStatusDialog.prototype.getUpdatePermission = function () { return Office.TblStatusRow.updatePermission; };
            TblStatusDialog.prototype.afterLoadEntity = function () {
                _super.prototype.afterLoadEntity.call(this);
                if (this.entityId) {
                    this.form.AllowList.cascadeField = "TypeId" /* TypeId */;
                    this.form.AllowList.cascadeFrom = "TypeId" /* TypeId */;
                    this.form.NextStatus.cascadeField = "TypeId" /* TypeId */;
                    this.form.NextStatus.cascadeFrom = "TypeId" /* TypeId */;
                    //Level 2
                    var AllowList_ = this.form.AllowListLevel2.value;
                    this.form.AllowListLevel2.cascadeField = "TypeId" /* TypeId */;
                    if (this.form.TypeId.value == "3")
                        this.form.AllowListLevel2.cascadeValue = 4;
                    else if (this.form.TypeId.value == "4")
                        this.form.AllowListLevel2.cascadeValue = 3;
                    if (AllowList_)
                        this.form.AllowListLevel2.value = AllowList_;
                }
                else {
                    var beforeValue = this.form.NextStatus.value;
                    this.form.NextStatus.filterField = "TypeId" /* TypeId */;
                    this.form.NextStatus.filterValue = this.form.TypeId.value;
                    if (beforeValue)
                        this.form.NextStatus.value = beforeValue;
                    beforeValue = this.form.AllowList.value;
                    this.form.AllowList.filterField = "TypeId" /* TypeId */;
                    this.form.AllowList.filterValue = this.form.TypeId.value;
                    if (beforeValue)
                        this.form.AllowList.value = beforeValue;
                    //this.form.AllowList.cascadeField = TblStatusRow.Fields.TypeId;
                    //this.form.AllowList.cascadeFrom = TblStatusRow.Fields.TypeId;
                    //this.form.NextStatus.cascadeField = TblStatusRow.Fields.TypeId;
                    //this.form.NextStatus.cascadeFrom = TblStatusRow.Fields.TypeId;
                }
            };
            TblStatusDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], TblStatusDialog);
            return TblStatusDialog;
        }(Serenity.EntityDialog));
        Office.TblStatusDialog = TblStatusDialog;
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var TblStatusGrid = /** @class */ (function (_super) {
            __extends(TblStatusGrid, _super);
            function TblStatusGrid(container) {
                return _super.call(this, container) || this;
            }
            TblStatusGrid.prototype.getColumnsKey = function () { return 'Office.TblStatus'; };
            TblStatusGrid.prototype.getDialogType = function () { return Office.TblStatusDialog; };
            TblStatusGrid.prototype.getIdProperty = function () { return Office.TblStatusRow.idProperty; };
            TblStatusGrid.prototype.getInsertPermission = function () { return Office.TblStatusRow.insertPermission; };
            TblStatusGrid.prototype.getLocalTextPrefix = function () { return Office.TblStatusRow.localTextPrefix; };
            TblStatusGrid.prototype.getService = function () { return Office.TblStatusService.baseUrl; };
            TblStatusGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TblStatusGrid);
            return TblStatusGrid;
        }(Serenity.EntityGrid));
        Office.TblStatusGrid = TblStatusGrid;
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var TblStatusDetailDialog = /** @class */ (function (_super) {
            __extends(TblStatusDetailDialog, _super);
            function TblStatusDetailDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Office.TblStatusDetailForm(_this.idPrefix);
                return _this;
            }
            TblStatusDetailDialog.prototype.getFormKey = function () { return Office.TblStatusDetailForm.formKey; };
            TblStatusDetailDialog.prototype.getIdProperty = function () { return Office.TblStatusDetailRow.idProperty; };
            TblStatusDetailDialog.prototype.getLocalTextPrefix = function () { return Office.TblStatusDetailRow.localTextPrefix; };
            TblStatusDetailDialog.prototype.getService = function () { return Office.TblStatusDetailService.baseUrl; };
            TblStatusDetailDialog.prototype.getDeletePermission = function () { return Office.TblStatusDetailRow.deletePermission; };
            TblStatusDetailDialog.prototype.getInsertPermission = function () { return Office.TblStatusDetailRow.insertPermission; };
            TblStatusDetailDialog.prototype.getUpdatePermission = function () { return Office.TblStatusDetailRow.updatePermission; };
            TblStatusDetailDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], TblStatusDetailDialog);
            return TblStatusDetailDialog;
        }(Serenity.EntityDialog));
        Office.TblStatusDetailDialog = TblStatusDetailDialog;
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var TblStatusDetailGrid = /** @class */ (function (_super) {
            __extends(TblStatusDetailGrid, _super);
            function TblStatusDetailGrid(container) {
                return _super.call(this, container) || this;
            }
            TblStatusDetailGrid.prototype.getColumnsKey = function () { return 'Office.TblStatusDetail'; };
            TblStatusDetailGrid.prototype.getDialogType = function () { return Office.TblStatusDetailDialog; };
            TblStatusDetailGrid.prototype.getIdProperty = function () { return Office.TblStatusDetailRow.idProperty; };
            TblStatusDetailGrid.prototype.getInsertPermission = function () { return Office.TblStatusDetailRow.insertPermission; };
            TblStatusDetailGrid.prototype.getLocalTextPrefix = function () { return Office.TblStatusDetailRow.localTextPrefix; };
            TblStatusDetailGrid.prototype.getService = function () { return Office.TblStatusDetailService.baseUrl; };
            TblStatusDetailGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TblStatusDetailGrid);
            return TblStatusDetailGrid;
        }(Serenity.EntityGrid));
        Office.TblStatusDetailGrid = TblStatusDetailGrid;
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var TblStatusDetailLevel2Dialog = /** @class */ (function (_super) {
            __extends(TblStatusDetailLevel2Dialog, _super);
            function TblStatusDetailLevel2Dialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Office.TblStatusDetailLevel2Form(_this.idPrefix);
                return _this;
            }
            TblStatusDetailLevel2Dialog.prototype.getFormKey = function () { return Office.TblStatusDetailLevel2Form.formKey; };
            TblStatusDetailLevel2Dialog.prototype.getIdProperty = function () { return Office.TblStatusDetailLevel2Row.idProperty; };
            TblStatusDetailLevel2Dialog.prototype.getLocalTextPrefix = function () { return Office.TblStatusDetailLevel2Row.localTextPrefix; };
            TblStatusDetailLevel2Dialog.prototype.getService = function () { return Office.TblStatusDetailLevel2Service.baseUrl; };
            TblStatusDetailLevel2Dialog.prototype.getDeletePermission = function () { return Office.TblStatusDetailLevel2Row.deletePermission; };
            TblStatusDetailLevel2Dialog.prototype.getInsertPermission = function () { return Office.TblStatusDetailLevel2Row.insertPermission; };
            TblStatusDetailLevel2Dialog.prototype.getUpdatePermission = function () { return Office.TblStatusDetailLevel2Row.updatePermission; };
            TblStatusDetailLevel2Dialog = __decorate([
                Serenity.Decorators.registerClass()
            ], TblStatusDetailLevel2Dialog);
            return TblStatusDetailLevel2Dialog;
        }(Serenity.EntityDialog));
        Office.TblStatusDetailLevel2Dialog = TblStatusDetailLevel2Dialog;
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var TblStatusDetailLevel2Grid = /** @class */ (function (_super) {
            __extends(TblStatusDetailLevel2Grid, _super);
            function TblStatusDetailLevel2Grid(container) {
                return _super.call(this, container) || this;
            }
            TblStatusDetailLevel2Grid.prototype.getColumnsKey = function () { return 'Office.TblStatusDetailLevel2'; };
            TblStatusDetailLevel2Grid.prototype.getDialogType = function () { return Office.TblStatusDetailLevel2Dialog; };
            TblStatusDetailLevel2Grid.prototype.getIdProperty = function () { return Office.TblStatusDetailLevel2Row.idProperty; };
            TblStatusDetailLevel2Grid.prototype.getInsertPermission = function () { return Office.TblStatusDetailLevel2Row.insertPermission; };
            TblStatusDetailLevel2Grid.prototype.getLocalTextPrefix = function () { return Office.TblStatusDetailLevel2Row.localTextPrefix; };
            TblStatusDetailLevel2Grid.prototype.getService = function () { return Office.TblStatusDetailLevel2Service.baseUrl; };
            TblStatusDetailLevel2Grid = __decorate([
                Serenity.Decorators.registerClass()
            ], TblStatusDetailLevel2Grid);
            return TblStatusDetailLevel2Grid;
        }(Serenity.EntityGrid));
        Office.TblStatusDetailLevel2Grid = TblStatusDetailLevel2Grid;
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var TblTransactionLocationDialog = /** @class */ (function (_super) {
            __extends(TblTransactionLocationDialog, _super);
            function TblTransactionLocationDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Office.TblTransactionLocationForm(_this.idPrefix);
                return _this;
            }
            TblTransactionLocationDialog.prototype.getFormKey = function () { return Office.TblTransactionLocationForm.formKey; };
            TblTransactionLocationDialog.prototype.getIdProperty = function () { return Office.TblTransactionLocationRow.idProperty; };
            TblTransactionLocationDialog.prototype.getLocalTextPrefix = function () { return Office.TblTransactionLocationRow.localTextPrefix; };
            TblTransactionLocationDialog.prototype.getNameProperty = function () { return Office.TblTransactionLocationRow.nameProperty; };
            TblTransactionLocationDialog.prototype.getService = function () { return Office.TblTransactionLocationService.baseUrl; };
            TblTransactionLocationDialog.prototype.getDeletePermission = function () { return Office.TblTransactionLocationRow.deletePermission; };
            TblTransactionLocationDialog.prototype.getInsertPermission = function () { return Office.TblTransactionLocationRow.insertPermission; };
            TblTransactionLocationDialog.prototype.getUpdatePermission = function () { return Office.TblTransactionLocationRow.updatePermission; };
            TblTransactionLocationDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], TblTransactionLocationDialog);
            return TblTransactionLocationDialog;
        }(Serenity.EntityDialog));
        Office.TblTransactionLocationDialog = TblTransactionLocationDialog;
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var TblTransactionLocationGrid = /** @class */ (function (_super) {
            __extends(TblTransactionLocationGrid, _super);
            function TblTransactionLocationGrid(container) {
                return _super.call(this, container) || this;
            }
            TblTransactionLocationGrid.prototype.getColumnsKey = function () { return 'Office.TblTransactionLocation'; };
            TblTransactionLocationGrid.prototype.getDialogType = function () { return Office.TblTransactionLocationDialog; };
            TblTransactionLocationGrid.prototype.getIdProperty = function () { return Office.TblTransactionLocationRow.idProperty; };
            TblTransactionLocationGrid.prototype.getInsertPermission = function () { return Office.TblTransactionLocationRow.insertPermission; };
            TblTransactionLocationGrid.prototype.getLocalTextPrefix = function () { return Office.TblTransactionLocationRow.localTextPrefix; };
            TblTransactionLocationGrid.prototype.getService = function () { return Office.TblTransactionLocationService.baseUrl; };
            TblTransactionLocationGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TblTransactionLocationGrid);
            return TblTransactionLocationGrid;
        }(Serenity.EntityGrid));
        Office.TblTransactionLocationGrid = TblTransactionLocationGrid;
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var TblUnitDialog = /** @class */ (function (_super) {
            __extends(TblUnitDialog, _super);
            function TblUnitDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Office.TblUnitForm(_this.idPrefix);
                return _this;
            }
            TblUnitDialog.prototype.getFormKey = function () { return Office.TblUnitForm.formKey; };
            TblUnitDialog.prototype.getIdProperty = function () { return Office.TblUnitRow.idProperty; };
            TblUnitDialog.prototype.getLocalTextPrefix = function () { return Office.TblUnitRow.localTextPrefix; };
            TblUnitDialog.prototype.getNameProperty = function () { return Office.TblUnitRow.nameProperty; };
            TblUnitDialog.prototype.getService = function () { return Office.TblUnitService.baseUrl; };
            TblUnitDialog.prototype.getDeletePermission = function () { return Office.TblUnitRow.deletePermission; };
            TblUnitDialog.prototype.getInsertPermission = function () { return Office.TblUnitRow.insertPermission; };
            TblUnitDialog.prototype.getUpdatePermission = function () { return Office.TblUnitRow.updatePermission; };
            TblUnitDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], TblUnitDialog);
            return TblUnitDialog;
        }(Serenity.EntityDialog));
        Office.TblUnitDialog = TblUnitDialog;
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var TblUnitGrid = /** @class */ (function (_super) {
            __extends(TblUnitGrid, _super);
            function TblUnitGrid(container) {
                return _super.call(this, container) || this;
            }
            TblUnitGrid.prototype.getColumnsKey = function () { return 'Office.TblUnit'; };
            TblUnitGrid.prototype.getDialogType = function () { return Office.TblUnitDialog; };
            TblUnitGrid.prototype.getIdProperty = function () { return Office.TblUnitRow.idProperty; };
            TblUnitGrid.prototype.getInsertPermission = function () { return Office.TblUnitRow.insertPermission; };
            TblUnitGrid.prototype.getLocalTextPrefix = function () { return Office.TblUnitRow.localTextPrefix; };
            TblUnitGrid.prototype.getService = function () { return Office.TblUnitService.baseUrl; };
            TblUnitGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TblUnitGrid);
            return TblUnitGrid;
        }(Serenity.EntityGrid));
        Office.TblUnitGrid = TblUnitGrid;
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var TblWardsDialog = /** @class */ (function (_super) {
            __extends(TblWardsDialog, _super);
            function TblWardsDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Office.TblWardsForm(_this.idPrefix);
                return _this;
            }
            TblWardsDialog.prototype.getFormKey = function () { return Office.TblWardsForm.formKey; };
            TblWardsDialog.prototype.getIdProperty = function () { return Office.TblWardsRow.idProperty; };
            TblWardsDialog.prototype.getLocalTextPrefix = function () { return Office.TblWardsRow.localTextPrefix; };
            TblWardsDialog.prototype.getNameProperty = function () { return Office.TblWardsRow.nameProperty; };
            TblWardsDialog.prototype.getService = function () { return Office.TblWardsService.baseUrl; };
            TblWardsDialog.prototype.getDeletePermission = function () { return Office.TblWardsRow.deletePermission; };
            TblWardsDialog.prototype.getInsertPermission = function () { return Office.TblWardsRow.insertPermission; };
            TblWardsDialog.prototype.getUpdatePermission = function () { return Office.TblWardsRow.updatePermission; };
            TblWardsDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], TblWardsDialog);
            return TblWardsDialog;
        }(Serenity.EntityDialog));
        Office.TblWardsDialog = TblWardsDialog;
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var TblWardsGrid = /** @class */ (function (_super) {
            __extends(TblWardsGrid, _super);
            function TblWardsGrid(container) {
                return _super.call(this, container) || this;
            }
            TblWardsGrid.prototype.getColumnsKey = function () { return 'Office.TblWards'; };
            TblWardsGrid.prototype.getDialogType = function () { return Office.TblWardsDialog; };
            TblWardsGrid.prototype.getIdProperty = function () { return Office.TblWardsRow.idProperty; };
            TblWardsGrid.prototype.getInsertPermission = function () { return Office.TblWardsRow.insertPermission; };
            TblWardsGrid.prototype.getLocalTextPrefix = function () { return Office.TblWardsRow.localTextPrefix; };
            TblWardsGrid.prototype.getService = function () { return Office.TblWardsService.baseUrl; };
            TblWardsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TblWardsGrid);
            return TblWardsGrid;
        }(Serenity.EntityGrid));
        Office.TblWardsGrid = TblWardsGrid;
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var TemplateEmailDialog = /** @class */ (function (_super) {
            __extends(TemplateEmailDialog, _super);
            function TemplateEmailDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Office.TemplateEmailForm(_this.idPrefix);
                return _this;
            }
            TemplateEmailDialog.prototype.getFormKey = function () { return Office.TemplateEmailForm.formKey; };
            TemplateEmailDialog.prototype.getIdProperty = function () { return Office.TemplateEmailRow.idProperty; };
            TemplateEmailDialog.prototype.getLocalTextPrefix = function () { return Office.TemplateEmailRow.localTextPrefix; };
            TemplateEmailDialog.prototype.getNameProperty = function () { return Office.TemplateEmailRow.nameProperty; };
            TemplateEmailDialog.prototype.getService = function () { return Office.TemplateEmailService.baseUrl; };
            TemplateEmailDialog.prototype.getDeletePermission = function () { return Office.TemplateEmailRow.deletePermission; };
            TemplateEmailDialog.prototype.getInsertPermission = function () { return Office.TemplateEmailRow.insertPermission; };
            TemplateEmailDialog.prototype.getUpdatePermission = function () { return Office.TemplateEmailRow.updatePermission; };
            TemplateEmailDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], TemplateEmailDialog);
            return TemplateEmailDialog;
        }(Serenity.EntityDialog));
        Office.TemplateEmailDialog = TemplateEmailDialog;
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Office;
    (function (Office) {
        var TemplateEmailGrid = /** @class */ (function (_super) {
            __extends(TemplateEmailGrid, _super);
            function TemplateEmailGrid(container) {
                return _super.call(this, container) || this;
            }
            TemplateEmailGrid.prototype.getColumnsKey = function () { return 'Office.TemplateEmail'; };
            TemplateEmailGrid.prototype.getDialogType = function () { return Office.TemplateEmailDialog; };
            TemplateEmailGrid.prototype.getIdProperty = function () { return Office.TemplateEmailRow.idProperty; };
            TemplateEmailGrid.prototype.getInsertPermission = function () { return Office.TemplateEmailRow.insertPermission; };
            TemplateEmailGrid.prototype.getLocalTextPrefix = function () { return Office.TemplateEmailRow.localTextPrefix; };
            TemplateEmailGrid.prototype.getService = function () { return Office.TemplateEmailService.baseUrl; };
            TemplateEmailGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TemplateEmailGrid);
            return TemplateEmailGrid;
        }(Serenity.EntityGrid));
        Office.TemplateEmailGrid = TemplateEmailGrid;
    })(Office = ECNET.Office || (ECNET.Office = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Authorization;
    (function (Authorization) {
        Object.defineProperty(Authorization, 'userDefinition', {
            get: function () {
                return Q.getRemoteData('UserData');
            }
        });
        function hasPermission(permissionKey) {
            var ud = Authorization.userDefinition;
            return ud.Username === 'admin' || !!ud.Permissions[permissionKey];
        }
        Authorization.hasPermission = hasPermission;
    })(Authorization = ECNET.Authorization || (ECNET.Authorization = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Membership;
    (function (Membership) {
        var ChangePasswordPanel = /** @class */ (function (_super) {
            __extends(ChangePasswordPanel, _super);
            function ChangePasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ChangePasswordForm(_this.idPrefix);
                _this.form.NewPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.w('ConfirmPassword', Serenity.PasswordEditor).value.length < 7) {
                        return Q.format(Q.text('Validation.MinRequiredPasswordLength'), 7);
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.NewPassword.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ChangePassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ChangePassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            ChangePasswordPanel.prototype.getFormKey = function () { return Membership.ChangePasswordForm.formKey; };
            ChangePasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ChangePasswordPanel);
            return ChangePasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ChangePasswordPanel = ChangePasswordPanel;
    })(Membership = ECNET.Membership || (ECNET.Membership = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Membership;
    (function (Membership) {
        var ForgotPasswordPanel = /** @class */ (function (_super) {
            __extends(ForgotPasswordPanel, _super);
            function ForgotPasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ForgotPasswordForm(_this.idPrefix);
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ForgotPassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ForgotPassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            ForgotPasswordPanel.prototype.getFormKey = function () { return Membership.ForgotPasswordForm.formKey; };
            ForgotPasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ForgotPasswordPanel);
            return ForgotPasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ForgotPasswordPanel = ForgotPasswordPanel;
    })(Membership = ECNET.Membership || (ECNET.Membership = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Membership;
    (function (Membership) {
        var ResetPasswordPanel = /** @class */ (function (_super) {
            __extends(ResetPasswordPanel, _super);
            function ResetPasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ResetPasswordForm(_this.idPrefix);
                _this.form.NewPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value.length < 7) {
                        return Q.format(Q.text('Validation.MinRequiredPasswordLength'), 7);
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.NewPassword.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    request.Token = _this.byId('Token').val();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ResetPassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ResetPassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/Account/Login');
                            });
                        }
                    });
                });
                return _this;
            }
            ResetPasswordPanel.prototype.getFormKey = function () { return Membership.ResetPasswordForm.formKey; };
            ResetPasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ResetPasswordPanel);
            return ResetPasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ResetPasswordPanel = ResetPasswordPanel;
    })(Membership = ECNET.Membership || (ECNET.Membership = {}));
})(ECNET || (ECNET = {}));
var ECNET;
(function (ECNET) {
    var Membership;
    (function (Membership) {
        var SignUpPanel = /** @class */ (function (_super) {
            __extends(SignUpPanel, _super);
            function SignUpPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.SignUpForm(_this.idPrefix);
                _this.form.ConfirmEmail.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmEmail.value !== _this.form.Email.value) {
                        return Q.text('Validation.EmailConfirm');
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.Password.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/SignUp'),
                        request: {
                            DisplayName: _this.form.DisplayName.value,
                            Email: _this.form.Email.value,
                            Password: _this.form.Password.value
                        },
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.SignUp.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            SignUpPanel.prototype.getFormKey = function () { return Membership.SignUpForm.formKey; };
            SignUpPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], SignUpPanel);
            return SignUpPanel;
        }(Serenity.PropertyPanel));
        Membership.SignUpPanel = SignUpPanel;
    })(Membership = ECNET.Membership || (ECNET.Membership = {}));
})(ECNET || (ECNET = {}));
//# sourceMappingURL=ECNET.Web.js.map