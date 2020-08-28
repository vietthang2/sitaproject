using System;

namespace MVC
{
    public static class Views
    {
        public static class Administration
        {
            public static class Language
            {
                public const string LanguageIndex = "~/Modules/Administration/Language/LanguageIndex.cshtml";
            }

            public static class Role
            {
                public const string RoleIndex = "~/Modules/Administration/Role/RoleIndex.cshtml";
            }

            public static class Sergen
            {
                public const string SergenError = "~/Modules/Administration/Sergen/SergenError.cshtml";
                public const string SergenIndex = "~/Modules/Administration/Sergen/SergenIndex.cshtml";
            }

            public static class Translation
            {
                public const string TranslationIndex = "~/Modules/Administration/Translation/TranslationIndex.cshtml";
            }

            public static class User
            {
                public const string UserIndex = "~/Modules/Administration/User/UserIndex.cshtml";
            }
        }

        public static class AdminLTE
        {
            public const string Calendar = "~/Modules/AdminLTE/Calendar.cshtml";
            public static class Charts
            {
                public const string ChartJS = "~/Modules/AdminLTE/Charts/ChartJS.cshtml";
                public const string Flot = "~/Modules/AdminLTE/Charts/Flot.cshtml";
                public const string InlineCharts = "~/Modules/AdminLTE/Charts/InlineCharts.cshtml";
                public const string Morris = "~/Modules/AdminLTE/Charts/Morris.cshtml";
            }
            public const string DashboardV2 = "~/Modules/AdminLTE/DashboardV2.cshtml";
            public static class Examples
            {
                public const string BlankPage = "~/Modules/AdminLTE/Examples/BlankPage.cshtml";
                public const string Error404 = "~/Modules/AdminLTE/Examples/Error404.cshtml";
                public const string Error500 = "~/Modules/AdminLTE/Examples/Error500.cshtml";
                public const string Invoice = "~/Modules/AdminLTE/Examples/Invoice.cshtml";
                public const string InvoicePrint = "~/Modules/AdminLTE/Examples/InvoicePrint.cshtml";
                public const string Lockscreen = "~/Modules/AdminLTE/Examples/Lockscreen.cshtml";
                public const string Login = "~/Modules/AdminLTE/Examples/Login.cshtml";
                public const string PacePage = "~/Modules/AdminLTE/Examples/PacePage.cshtml";
                public const string Profile = "~/Modules/AdminLTE/Examples/Profile.cshtml";
                public const string Register = "~/Modules/AdminLTE/Examples/Register.cshtml";
            }

            public static class Forms
            {
                public const string AdvancedElements = "~/Modules/AdminLTE/Forms/AdvancedElements.cshtml";
                public const string GeneralElements = "~/Modules/AdminLTE/Forms/GeneralElements.cshtml";
                public const string TextEditors = "~/Modules/AdminLTE/Forms/TextEditors.cshtml";
            }

            public static class Mailbox
            {
                public const string Compose = "~/Modules/AdminLTE/Mailbox/Compose.cshtml";
                public const string Inbox = "~/Modules/AdminLTE/Mailbox/Inbox.cshtml";
                public const string Read = "~/Modules/AdminLTE/Mailbox/Read.cshtml";
            }

            public static class Tables
            {
                public const string SimpleTables = "~/Modules/AdminLTE/Tables/SimpleTables.cshtml";
            }

            public static class UIElements
            {
                public const string Buttons = "~/Modules/AdminLTE/UIElements/Buttons.cshtml";
                public const string General = "~/Modules/AdminLTE/UIElements/General.cshtml";
                public const string Icons = "~/Modules/AdminLTE/UIElements/Icons.cshtml";
                public const string Modals = "~/Modules/AdminLTE/UIElements/Modals.cshtml";
                public const string Sliders = "~/Modules/AdminLTE/UIElements/Sliders.cshtml";
                public const string Timeline = "~/Modules/AdminLTE/UIElements/Timeline.cshtml";
            }
            public const string Widgets = "~/Modules/AdminLTE/Widgets.cshtml";
        }

        public static class Common
        {
            public static class Dashboard
            {
                public const string DashboardIndex = "~/Modules/Common/Dashboard/DashboardIndex.cshtml";
            }

            public static class Reporting
            {
                public const string ReportPage = "~/Modules/Common/Reporting/ReportPage.cshtml";
            }
        }

        public static class Errors
        {
            public const string AccessDenied = "~/Views/Errors/AccessDenied.cshtml";
            public const string ValidationError = "~/Views/Errors/ValidationError.cshtml";
        }

        public static class Membership
        {
            public static class Account
            {
                public const string AccountLogin = "~/Modules/Membership/Account/AccountLogin.cshtml";
                public const string AccountLogin_AdminLTE = "~/Modules/Membership/Account/AccountLogin.AdminLTE.cshtml";
                public static class ChangePassword
                {
                    public const string AccountChangePassword = "~/Modules/Membership/Account/ChangePassword/AccountChangePassword.cshtml";
                }

                public static class ForgotPassword
                {
                    public const string AccountForgotPassword = "~/Modules/Membership/Account/ForgotPassword/AccountForgotPassword.cshtml";
                    public const string AccountForgotPassword_AdminLTE = "~/Modules/Membership/Account/ForgotPassword/AccountForgotPassword.AdminLTE.cshtml";
                }

                public static class ResetPassword
                {
                    public const string AccountResetPassword = "~/Modules/Membership/Account/ResetPassword/AccountResetPassword.cshtml";
                    public const string AccountResetPassword_AdminLTE = "~/Modules/Membership/Account/ResetPassword/AccountResetPassword.AdminLTE.cshtml";
                    public const string AccountResetPasswordEmail = "~/Modules/Membership/Account/ResetPassword/AccountResetPasswordEmail.cshtml";
                }

                public static class SignUp
                {
                    public const string AccountActivateEmail = "~/Modules/Membership/Account/SignUp/AccountActivateEmail.cshtml";
                    public const string AccountSignUp = "~/Modules/Membership/Account/SignUp/AccountSignUp.cshtml";
                    public const string AccountSignUp_AdminLTE = "~/Modules/Membership/Account/SignUp/AccountSignUp.AdminLTE.cshtml";
                }
            }

        }

        public static class Office
        {
            public static class AssetTemp
            {
                public const string AssetTempIndex = "~/Modules/Office/AssetTemp/AssetTempIndex.cshtml";
            }

            public static class EmailAccounts
            {
                public const string EmailAccountsIndex = "~/Modules/Office/EmailAccounts/EmailAccountsIndex.cshtml";
            }

            public static class QueuedEmail
            {
                public const string QueuedEmailIndex = "~/Modules/Office/QueuedEmail/QueuedEmailIndex.cshtml";
            }

            public static class SysParameters
            {
                public const string SysParametersIndex = "~/Modules/Office/SysParameters/SysParametersIndex.cshtml";
            }

            public static class TblApprovalCenter
            {
                public const string TblApprovalCenterIndex = "~/Modules/Office/TblApprovalCenter/TblApprovalCenterIndex.cshtml";
            }

            public static class TblArea
            {
                public const string TblAreaIndex = "~/Modules/Office/TblArea/TblAreaIndex.cshtml";
            }

            public static class TblAsset
            {
                public const string TblAssetIndex = "~/Modules/Office/TblAsset/TblAssetIndex.cshtml";
            }

            public static class TblAssetGroup
            {
                public const string TblAssetGroupIndex = "~/Modules/Office/TblAssetGroup/TblAssetGroupIndex.cshtml";
            }

            public static class TblAssignAssetToPlace
            {
                public const string TblAssignAssetToPlaceIndex = "~/Modules/Office/TblAssignAssetToPlace/TblAssignAssetToPlaceIndex.cshtml";
            }

            public static class TblAssignCampaing
            {
                public const string TblAssignCampaingIndex = "~/Modules/Office/TblAssignCampaing/TblAssignCampaingIndex.cshtml";
            }

            public static class TblBranch
            {
                public const string TblBranchIndex = "~/Modules/Office/TblBranch/TblBranchIndex.cshtml";
            }

            public static class TblCampaign
            {
                public const string TblCampaignIndex = "~/Modules/Office/TblCampaign/TblCampaignIndex.cshtml";
            }

            public static class TblCampaignType
            {
                public const string TblCampaignTypeIndex = "~/Modules/Office/TblCampaignType/TblCampaignTypeIndex.cshtml";
            }

            public static class TblCity
            {
                public const string TblCityIndex = "~/Modules/Office/TblCity/TblCityIndex.cshtml";
            }

            public static class TblContract
            {
                public const string TblContractDialog_Template = "~/Modules/Office/TblContract/TblContractDialog.Template.cshtml";
                public const string TblContractIndex = "~/Modules/Office/TblContract/TblContractIndex.cshtml";
            }

            public static class TblContractItems
            {
                public const string TblContractItemsIndex = "~/Modules/Office/TblContractItems/TblContractItemsIndex.cshtml";
            }

            public static class TblContractPayment
            {
                public const string TblContractPaymentIndex = "~/Modules/Office/TblContractPayment/TblContractPaymentIndex.cshtml";
            }

            public static class TblContractSchedule
            {
                public const string TblContractScheduleIndex = "~/Modules/Office/TblContractSchedule/TblContractScheduleIndex.cshtml";
            }

            public static class TblContractType
            {
                public const string TblContractTypeIndex = "~/Modules/Office/TblContractType/TblContractTypeIndex.cshtml";
            }

            public static class TblDistrict
            {
                public const string TblDistrictIndex = "~/Modules/Office/TblDistrict/TblDistrictIndex.cshtml";
            }

            public static class TblItems
            {
                public const string TblItemsIndex = "~/Modules/Office/TblItems/TblItemsIndex.cshtml";
            }

            public static class TblPlaceDetails
            {
                public const string TblPlaceDetailsIndex = "~/Modules/Office/TblPlaceDetails/TblPlaceDetailsIndex.cshtml";
            }

            public static class TblPlaceOfBussiness
            {
                public const string TblPlaceOfBussinessIndex = "~/Modules/Office/TblPlaceOfBussiness/TblPlaceOfBussinessIndex.cshtml";
            }

            public static class TblProject
            {
                public const string TblProjectIndex = "~/Modules/Office/TblProject/TblProjectIndex.cshtml";
            }

            public static class TblProjectItem
            {
                public const string TblProjectItemIndex = "~/Modules/Office/TblProjectItem/TblProjectItemIndex.cshtml";
            }

            public static class TblStatus
            {
                public const string TblStatusIndex = "~/Modules/Office/TblStatus/TblStatusIndex.cshtml";
            }

            public static class TblStatusDetail
            {
                public const string TblStatusDetailIndex = "~/Modules/Office/TblStatusDetail/TblStatusDetailIndex.cshtml";
            }

            public static class TblStatusDetailLevel2
            {
                public const string TblStatusDetailLevel2Index = "~/Modules/Office/TblStatusDetailLevel2/TblStatusDetailLevel2Index.cshtml";
            }

            public static class TblTransactionLocation
            {
                public const string TblTransactionLocationIndex = "~/Modules/Office/TblTransactionLocation/TblTransactionLocationIndex.cshtml";
            }

            public static class TblUnit
            {
                public const string TblUnitIndex = "~/Modules/Office/TblUnit/TblUnitIndex.cshtml";
            }

            public static class TblWards
            {
                public const string TblWardsIndex = "~/Modules/Office/TblWards/TblWardsIndex.cshtml";
            }

            public static class TemplateEmail
            {
                public const string TemplateEmailIndex = "~/Modules/Office/TemplateEmail/TemplateEmailIndex.cshtml";
            }
        }

        public static class Shared
        {
            public const string _Layout = "~/Views/Shared/_Layout.cshtml";
            public const string _LayoutHead = "~/Views/Shared/_LayoutHead.cshtml";
            public const string _LayoutNoNavigation = "~/Views/Shared/_LayoutNoNavigation.cshtml";
            public const string _LayoutSlim = "~/Views/Shared/_LayoutSlim.cshtml";
            public const string _LayoutSlimHead = "~/Views/Shared/_LayoutSlimHead.cshtml";
            public const string Error = "~/Views/Shared/Error.cshtml";
            public const string LeftNavigation = "~/Views/Shared/LeftNavigation.cshtml";
        }

    }
}
