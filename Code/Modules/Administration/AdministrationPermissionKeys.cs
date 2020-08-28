
using Serenity.Extensibility;
using System.ComponentModel;

namespace ECNET.Administration
{
    [NestedPermissionKeys]
    [DisplayName("Administration")]
    public class PermissionKeys
    {
        [Description("User, Role Management and Permissions")]
        public const string Security = "Administration:Security";

        [Description("Languages and Translations")]
        public const string Translation = "Administration:Translation";
        [DisplayName("Place")]
        public class Place
        {
            [ImplicitPermission(General), ImplicitPermission(View)]
            public const string Delete = "Ecnet:dbo.tblPlaceOfBussiness:Delete";
            [Description("Create/Update"), ImplicitPermission(General), ImplicitPermission(View)]
            public const string Modify = "Ecnet:dbo.tblPlaceOfBussiness:Modify"; 
            public const string View =   "Ecnet:dbo.tblPlaceOfBussiness:View";
        }
        [DisplayName("Contract")]
        public class Contract
        {
            [ImplicitPermission(General), ImplicitPermission(View)]
            public const string Delete = "Ecnet:dbo.tblContract:Delete";
            [Description("Create/Update"), ImplicitPermission(General), ImplicitPermission(View)]
            public const string Modify = "Ecnet:dbo.tblContract:Modify";
            public const string View =   "Ecnet:dbo.tblContract:View";
          
        }
        [DisplayName("ContractItems")]
        public class ContractItems
        {
            [ImplicitPermission(General), ImplicitPermission(View)]
            public const string Delete = "Ecnet:dbo.tblContractItems:Delete";
            [Description("Create/Update"), ImplicitPermission(General), ImplicitPermission(View)]
            public const string Modify = "Ecnet:dbo.tblContractItems:Modify";
            public const string View = "Ecnet:dbo.tblContractItems:View";
            
        }
        [DisplayName("ContractSchedule")]
        public class ContractSchedule
        {
            [ImplicitPermission(General), ImplicitPermission(View)]
            public const string Delete = "Ecnet:dbo.tblContractSchedule:Delete";
            [Description("Create/Update"), ImplicitPermission(General), ImplicitPermission(View)]
            public const string Modify = "Ecnet:dbo.tblContractSchedule:Modify";
            public const string View = "Ecnet:dbo.tblContractSchedule:View";

        }
        [DisplayName("ContractType")]
        public class ContractType
        {
            [ImplicitPermission(General), ImplicitPermission(View)]
            public const string Delete = "Ecnet:dbo.tblContractType:Delete";
            [Description("Create/Update"), ImplicitPermission(General), ImplicitPermission(View)]
            public const string Modify = "Ecnet:dbo.tblContractType:Modify";
            public const string View = "Ecnet:dbo.tblContractType:View";
            
        }
        [DisplayName("City")]
        public class City
        {
            [ImplicitPermission(General), ImplicitPermission(View)]
            public const string Delete = "Ecnet:dbo.tblCity:Delete";
            [Description("Create/Update"), ImplicitPermission(General), ImplicitPermission(View)]
            public const string Modify = "Ecnet:dbo.tblCity:Modify";
            public const string View = "Ecnet:dbo.tblCity:View";
        }
        [DisplayName("District")]
        public class District
        {
            [ImplicitPermission(General), ImplicitPermission(View)]
            public const string Delete = "Ecnet:dbo.tblDistrict:Delete";
            [Description("Create/Update"), ImplicitPermission(General), ImplicitPermission(View)]
            public const string Modify = "Ecnet:dbo.tblDistrict:Modify";
            public const string View = "Ecnet:dbo.tblDistrict:View";
        }
        [DisplayName("Wards")]
        public class Wards
        {
            [ImplicitPermission(General), ImplicitPermission(View)]
            public const string Delete = "Ecnet:dbo.tblWards:Delete";
            [Description("Create/Update"), ImplicitPermission(General), ImplicitPermission(View)]
            public const string Modify = "Ecnet:dbo.tblWards:Modify";
            public const string View = "Ecnet:dbo.tblWards:View";
        }
        [DisplayName("Area")]
        public class Area
        {
            [ImplicitPermission(General), ImplicitPermission(View)]
            public const string Delete = "Ecnet:dbo.tblArea:Delete";
            [Description("Create/Update"), ImplicitPermission(General), ImplicitPermission(View)]
            public const string Modify = "Ecnet:dbo.tblArea:Modify";
            public const string View = "Ecnet:dbo.tblArea:View";
        }
        [DisplayName("Branch")]
        public class Branch
        {
            [ImplicitPermission(General), ImplicitPermission(View)]
            public const string Delete = "Ecnet:dbo.tblBranch:Delete";
            [Description("Create/Update"), ImplicitPermission(General), ImplicitPermission(View)]
            public const string Modify = "Ecnet:dbo.tblBranch:Modify";
            public const string View = "Ecnet:dbo.tblBranch:View";
        }
        [DisplayName("Asset")]
        public class Asset
        {
            [ImplicitPermission(General), ImplicitPermission(View)]
            public const string Delete = "Ecnet:dbo.tblAsset:tblAssetGroup:Delete";
            [Description("Create/Update"), ImplicitPermission(General), ImplicitPermission(View)]
            public const string Modify = "Ecnet:dbo.tblAsset:tblAssetGroup:Modify";
            public const string View = "Ecnet:dbo.tblAsset:tblAssetGroup:View";

        }
        [DisplayName("AssetGroup")]
        public class AssetGroup
        {
            [ImplicitPermission(General), ImplicitPermission(View)]
            public const string Delete = "Ecnet:dbo.tblAssetGroup:Delete";
            [Description("Create/Update"), ImplicitPermission(General), ImplicitPermission(View)]
            public const string Modify = "Ecnet:dbo.tblAssetGroup:Modify";
            public const string View = "Ecnet:dbo.tblAssetGroup:View";

        }
        [DisplayName("AssignAsset")]
        public class AssignAsset
        {
            [ImplicitPermission(General), ImplicitPermission(View)]
            public const string Delete = "Ecnet:dbo.tblAssignAssetToPlace:Delete";
            [Description("Create/Update"), ImplicitPermission(General), ImplicitPermission(View)]
            public const string Modify = "Ecnet:dbo.tblAssignAssetToPlace:tblAssetGroup:Modify";
            public const string View = "Ecnet:dbo.tblAssignAssetToPlace:tblAssetGroup:View";

        }
        [DisplayName("Approve")]
        public class Approve
        {
            [ImplicitPermission(General), ImplicitPermission(View)]
            public const string Delete = "Ecnet:dbo.tblApprovalCenter:Delete";
            [Description("Create/Update"), ImplicitPermission(General), ImplicitPermission(View)]
            public const string Modify = "Ecnet:dbo.tblApprovalCenter:Modify";
            public const string View = "Ecnet:dbo.tblApprovalCenter:View";

        }

        [DisplayName("Project")]
        public class Project
        {
            [ImplicitPermission(General), ImplicitPermission(View)]
            public const string Delete = "Ecnet:dbo.tblProject:Delete";
            [Description("Create/Update"), ImplicitPermission(General), ImplicitPermission(View)]
            public const string Modify = "Ecnet:dbo.tblProject:Modify";
            public const string View = "Ecnet:dbo.tblProject:View";

        }
        [DisplayName("ProjectItem")]
        public class ProjectItem
        {
            [ImplicitPermission(General), ImplicitPermission(View)]
            public const string Delete = "Ecnet:dbo.tblProjectItem:Delete";
            [Description("Create/Update"), ImplicitPermission(General), ImplicitPermission(View)]
            public const string Modify = "Ecnet:dbo.tblProjectItem:Modify";
            public const string View = "Ecnet:dbo.tblProjectItem:View";

        }
        [DisplayName("Status")]
        public class Status
        {
            [ImplicitPermission(General), ImplicitPermission(View)]
            public const string Delete = "Ecnet:dbo.tblStatus:Delete";
            [Description("Create/Update"), ImplicitPermission(General), ImplicitPermission(View)]
            public const string Modify = "Ecnet:dbo.tblStatus:Modify";
            public const string View = "Ecnet:dbo.tblStatus:View";

        }
        [DisplayName("StatusDetail")]
        public class StatusDetail
        {
            [ImplicitPermission(General), ImplicitPermission(View)]
            public const string Delete = "Ecnet:dbo.tblStatusDetail:Delete";
            [Description("Create/Update"), ImplicitPermission(General), ImplicitPermission(View)]
            public const string Modify = "Ecnet:dbo.tblStatusDetail:Modify";
            public const string View = "Ecnet:dbo.tblStatusDetail:View";

        }

        [Description("[General]")]
        public const string General = "Ecnet:General";
    }
    
}
