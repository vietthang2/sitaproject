namespace ECNET.Texts {

    declare namespace Db {

        namespace Administration {

            namespace Language {
                export const Id: string;
                export const LanguageId: string;
                export const LanguageName: string;
            }

            namespace Role {
                export const LevelApproval: string;
                export const RoleId: string;
                export const RoleName: string;
            }

            namespace RolePermission {
                export const PermissionKey: string;
                export const RoleId: string;
                export const RolePermissionId: string;
                export const RoleRoleName: string;
            }

            namespace Translation {
                export const CustomText: string;
                export const EntityPlural: string;
                export const Key: string;
                export const OverrideConfirmation: string;
                export const SaveChangesButton: string;
                export const SourceLanguage: string;
                export const SourceText: string;
                export const TargetLanguage: string;
                export const TargetText: string;
            }

            namespace User {
                export const DisplayName: string;
                export const Email: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const IsActive: string;
                export const LastDirectoryUpdate: string;
                export const Password: string;
                export const PasswordConfirm: string;
                export const PasswordHash: string;
                export const PasswordSalt: string;
                export const Source: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
                export const UserId: string;
                export const UserImage: string;
                export const Username: string;
            }

            namespace UserPermission {
                export const Granted: string;
                export const PermissionKey: string;
                export const User: string;
                export const UserId: string;
                export const UserPermissionId: string;
                export const Username: string;
            }

            namespace UserRole {
                export const RoleId: string;
                export const User: string;
                export const UserId: string;
                export const UserRoleId: string;
                export const Username: string;
            }
        }

        namespace Common {

            namespace UserPreference {
                export const Name: string;
                export const PreferenceType: string;
                export const UserId: string;
                export const UserPreferenceId: string;
                export const Value: string;
            }
        }

        namespace Office {

            namespace AssetTemp {
                export const Code: string;
                export const CreatedBy: string;
                export const CreatedDate: string;
                export const HasContract: string;
                export const HasProcessed: string;
                export const Id: string;
                export const Name: string;
                export const PId: string;
                export const Type: string;
                export const UpdatedBy: string;
                export const UpdatedDate: string;
            }

            namespace EmailAccounts {
                export const CreatedBy: string;
                export const CreatedDate: string;
                export const DisplayName: string;
                export const Email: string;
                export const EnableSsl: string;
                export const Host: string;
                export const Id: string;
                export const IsActive: string;
                export const Password: string;
                export const Port: string;
                export const UpdatedBy: string;
                export const UpdatedDate: string;
                export const UseDefaultCredentials: string;
                export const Username: string;
            }

            namespace QueuedEmail {
                export const AttachedDownloadId: string;
                export const AttachmentFileName: string;
                export const AttachmentFilePath: string;
                export const Bcc: string;
                export const Body: string;
                export const Cc: string;
                export const CreatedBy: string;
                export const CreatedDate: string;
                export const CreatedOnUtc: string;
                export const DontSendBeforeDateUtc: string;
                export const EmailAccountCreatedBy: string;
                export const EmailAccountCreatedDate: string;
                export const EmailAccountDisplayName: string;
                export const EmailAccountEmail: string;
                export const EmailAccountEnableSsl: string;
                export const EmailAccountHost: string;
                export const EmailAccountId: string;
                export const EmailAccountIsActive: string;
                export const EmailAccountPassword: string;
                export const EmailAccountPort: string;
                export const EmailAccountUpdatedBy: string;
                export const EmailAccountUpdatedDate: string;
                export const EmailAccountUseDefaultCredentials: string;
                export const EmailAccountUsername: string;
                export const From: string;
                export const FromName: string;
                export const HasError: string;
                export const Id: string;
                export const PriorityId: string;
                export const ReplyTo: string;
                export const ReplyToName: string;
                export const Result: string;
                export const SentOnUtc: string;
                export const SentTries: string;
                export const Subject: string;
                export const To: string;
                export const ToName: string;
                export const UpdatedBy: string;
                export const UpdatedDate: string;
            }

            namespace SysParameters {
                export const Code: string;
                export const CreatedBy: string;
                export const CreatedDate: string;
                export const Id: string;
                export const Name: string;
                export const Unit: string;
                export const UpdatedBy: string;
                export const UpdatedDate: string;
                export const Value: string;
            }

            namespace TblApprovalCenter {
                export const AndOr: string;
                export const ApproveBy: string;
                export const ApprovedDate: string;
                export const ClientId: string;
                export const Code: string;
                export const CreateBy: string;
                export const Date: string;
                export const Id: string;
                export const IsSendMail: string;
                export const IsSms: string;
                export const LevelApproval: string;
                export const ReasonReject: string;
                export const Status: string;
                export const Times: string;
                export const Type: string;
            }

            namespace TblArea {
                export const BranchCode: string;
                export const Code: string;
                export const Id: string;
                export const Name: string;
            }

            namespace TblAsset {
                export const Code: string;
                export const GroupDescription: string;
                export const GroupId: string;
                export const GroupName: string;
                export const Id: string;
                export const Name: string;
            }

            namespace TblAssetGroup {
                export const Description: string;
                export const Id: string;
                export const Name: string;
            }

            namespace TblAssignAssetToPlace {
                export const AssetCode: string;
                export const AssetGroupId: string;
                export const AssetId: string;
                export const AssetName: string;
                export const CreatedBy: string;
                export const CreatedDate: string;
                export const FromDate: string;
                export const Id: string;
                export const PlaceAddress: string;
                export const PlaceCityId: string;
                export const PlaceCode: string;
                export const PlaceContractId: string;
                export const PlaceCreatedBy: string;
                export const PlaceCreatedDate: string;
                export const PlaceDistrictId: string;
                export const PlaceId: string;
                export const PlaceLength: string;
                export const PlaceLinkGoogleMap: string;
                export const PlaceStatus: string;
                export const PlaceTimeOpenFrom: string;
                export const PlaceTimeOpenTo: string;
                export const PlaceTimeOpening: string;
                export const PlaceTimeOpeningDate: string;
                export const PlaceTotalArea: string;
                export const PlaceTotalCustomer: string;
                export const PlaceUpdateDate: string;
                export const PlaceUpdatedBy: string;
                export const PlaceWidth: string;
                export const ToDate: string;
                export const UpdateBy: string;
                export const UpdatedDate: string;
            }

            namespace TblAssignCampaing {
                export const Id: string;
            }

            namespace TblBranch {
                export const Code: string;
                export const Id: string;
                export const Name: string;
            }

            namespace TblCampaign {
                export const Id: string;
            }

            namespace TblCampaignType {
                export const Id: string;
            }

            namespace TblCity {
                export const Code: string;
                export const ECCode: string;
                export const EnName: string;
                export const Id: string;
                export const Name: string;
            }

            namespace TblContract {
                export const AccountBankNo: string;
                export const AccountName: string;
                export const AddressOfOwner: string;
                export const AddressOfOwner2nd: string;
                export const BankName: string;
                export const BeginDate: string;
                export const BuyOrRent: string;
                export const CertificateCity: string;
                export const CertificateDate: string;
                export const CertificateNo: string;
                export const CityId: string;
                export const ContractAmt: string;
                export const ContractAmtString: string;
                export const ContractName: string;
                export const CreatedBy: string;
                export const CreatedDate: string;
                export const CurrentAddressOfOwner: string;
                export const CurrentAddressOfOwner2nd: string;
                export const DateSign: string;
                export const DistrictId: string;
                export const ECPayAddress: string;
                export const ECPayBankName: string;
                export const ECPayBankNameBranch: string;
                export const ECPayBankNo: string;
                export const ECPayCompanyName: string;
                export const ECPayPhone: string;
                export const EcPayAuthorityDate: string;
                export const EcPayAuthorityNo: string;
                export const EcPayPerson: string;
                export const EcPayPosition: string;
                export const EmailOfOwner: string;
                export const EndDate: string;
                export const File1: string;
                export const File2: string;
                export const File3: string;
                export const File4: string;
                export const File5: string;
                export const File6: string;
                export const File7: string;
                export const FileContractUpload: string;
                export const FromDate: string;
                export const Id: string;
                export const IdentifyNo: string;
                export const IdentifyNo2nd: string;
                export const IdentifyType: string;
                export const IdentifyType2nd: string;
                export const IsCompleted: string;
                export const ListDetail: string;
                export const ListSchedule: string;
                export const Month: string;
                export const NameOfOwner: string;
                export const NameOfOwner2nd: string;
                export const No: string;
                export const Paid: string;
                export const PaymentMethod: string;
                export const PhoneOfOwner: string;
                export const PhoneOfOwner2nd: string;
                export const PlaceAddress: string;
                export const PlaceAreaIdPic: string;
                export const PlaceBatchNo: string;
                export const PlaceBranchIdPic: string;
                export const PlaceCityId: string;
                export const PlaceCode: string;
                export const PlaceContractId: string;
                export const PlaceCreatedBy: string;
                export const PlaceCreatedDate: string;
                export const PlaceDateDeposit: string;
                export const PlaceDeposit: string;
                export const PlaceDepositAmt: string;
                export const PlaceDescription: string;
                export const PlaceDistrictId: string;
                export const PlaceEmployeePicCode: string;
                export const PlaceEmployeePicEmail: string;
                export const PlaceEmployeePicName: string;
                export const PlaceEmployeePicPhone: string;
                export const PlaceEmployeePicWalletNo: string;
                export const PlaceHasDeposit: string;
                export const PlaceId: string;
                export const PlaceImportBy: string;
                export const PlaceImportDate: string;
                export const PlaceLength: string;
                export const PlaceLinkGoogleMap: string;
                export const PlaceMonthRent: string;
                export const PlaceNameOfOwner: string;
                export const PlaceNote: string;
                export const PlacePhoneOfOwner: string;
                export const PlacePriceBuy: string;
                export const PlacePriceRent: string;
                export const PlaceRequireDateDeposit: string;
                export const PlaceRequireDeposit: string;
                export const PlaceRequireDepositAmt: string;
                export const PlaceStatus: string;
                export const PlaceTimeOpenFrom: string;
                export const PlaceTimeOpenTo: string;
                export const PlaceTimeOpening: string;
                export const PlaceTimeOpeningDate: string;
                export const PlaceTotalArea: string;
                export const PlaceTotalAreaUse: string;
                export const PlaceTotalCustomer: string;
                export const PlaceType: string;
                export const PlaceUpdateDate: string;
                export const PlaceUpdatedBy: string;
                export const PlaceWardsId: string;
                export const PlaceWidth: string;
                export const RecurringPayment: string;
                export const ReleaseDate: string;
                export const RemainAmt: string;
                export const Remark1: string;
                export const Remark2: string;
                export const Remark3: string;
                export const Remark4: string;
                export const Remark5: string;
                export const Status: string;
                export const ToDate: string;
                export const TotalArea: string;
                export const TotalContractAmt: string;
                export const TypeDescription: string;
                export const TypeId: string;
                export const TypePersonAuthorityNo: string;
                export const TypePersonPosition: string;
                export const TypePersonSign: string;
                export const TypeRemark1: string;
                export const TypeRemark2: string;
                export const TypeRemark3: string;
                export const TypeRemark4: string;
                export const TypeRemark5: string;
                export const TypeTypeName: string;
                export const UpdatedBy: string;
                export const UpdatedDate: string;
                export const WalletName: string;
                export const WalletNo: string;
                export const WardsId: string;
                export const YearBeginRedeal: string;
                export const YearCancel: string;
                export const YearFixPrice: string;
            }

            namespace TblContractItems {
                export const ContractCreatedBy: string;
                export const ContractCreatedDate: string;
                export const ContractDateSign: string;
                export const ContractFile1: string;
                export const ContractFile2: string;
                export const ContractFile3: string;
                export const ContractFile4: string;
                export const ContractFile5: string;
                export const ContractFile6: string;
                export const ContractFile7: string;
                export const ContractFileContractUpload: string;
                export const ContractId: string;
                export const ContractNameOfOwner: string;
                export const ContractPhoneOfOwner: string;
                export const ContractTypeId: string;
                export const ContractUpdatedBy: string;
                export const ContractUpdatedDate: string;
                export const DetailID: string;
                export const ItemCode: string;
                export const ItemDataType: string;
                export const ItemId: string;
                export const ItemItemGroup: string;
                export const ItemItemName: string;
                export const ItemItemType: string;
                export const ItemUnit: string;
                export const Value: string;
            }

            namespace TblContractPayment {
                export const ContractCreatedBy: string;
                export const ContractCreatedDate: string;
                export const ContractDateSign: string;
                export const ContractFile1: string;
                export const ContractFile2: string;
                export const ContractFile3: string;
                export const ContractFile4: string;
                export const ContractFile5: string;
                export const ContractFile6: string;
                export const ContractFile7: string;
                export const ContractFileContractUpload: string;
                export const ContractId: string;
                export const ContractNameOfOwner: string;
                export const ContractPhoneOfOwner: string;
                export const ContractTypeId: string;
                export const ContractUpdatedBy: string;
                export const ContractUpdatedDate: string;
                export const CreatedBy: string;
                export const CreatedDate: string;
                export const DatePaid: string;
                export const File1: string;
                export const File2: string;
                export const File3: string;
                export const File4: string;
                export const File5: string;
                export const FileInvoice: string;
                export const Id: string;
                export const InvoiceNo: string;
                export const PaidAmount: string;
                export const PaidBy: string;
                export const Period: string;
            }

            namespace TblContractSchedule {
                export const Amount: string;
                export const ContarctAccountBankNo: string;
                export const ContarctAccountName: string;
                export const ContarctAddress: string;
                export const ContarctAddressOfOwner: string;
                export const ContarctAddressOfOwner2nd: string;
                export const ContarctBankName: string;
                export const ContarctBeginDate: string;
                export const ContarctBuyOrRent: string;
                export const ContarctCertificateCity: string;
                export const ContarctCertificateDate: string;
                export const ContarctCertificateNo: string;
                export const ContarctCityId: string;
                export const ContarctContractAmt: string;
                export const ContarctCreatedBy: string;
                export const ContarctCreatedDate: string;
                export const ContarctCurrentAddressOfOwner: string;
                export const ContarctCurrentAddressOfOwner2nd: string;
                export const ContarctDateSign: string;
                export const ContarctDistrictId: string;
                export const ContarctEcPayAuthorityDate: string;
                export const ContarctEcPayAuthorityNo: string;
                export const ContarctEcPayPerson: string;
                export const ContarctEcPayPosition: string;
                export const ContarctEmailOfOwner: string;
                export const ContarctFile1: string;
                export const ContarctFile2: string;
                export const ContarctFile3: string;
                export const ContarctFile4: string;
                export const ContarctFile5: string;
                export const ContarctFile6: string;
                export const ContarctFile7: string;
                export const ContarctFileContractUpload: string;
                export const ContarctFromDate: string;
                export const ContarctMonth: string;
                export const ContarctNameOfOwner: string;
                export const ContarctNameOfOwner2nd: string;
                export const ContarctNo: string;
                export const ContarctPaymentMethod: string;
                export const ContarctPhoneOfOwner: string;
                export const ContarctPhoneOfOwner2nd: string;
                export const ContarctPlaceId: string;
                export const ContarctReleaseDate: string;
                export const ContarctRemark1: string;
                export const ContarctRemark2: string;
                export const ContarctRemark3: string;
                export const ContarctRemark4: string;
                export const ContarctRemark5: string;
                export const ContarctToDate: string;
                export const ContarctTotalArea: string;
                export const ContarctTypeId: string;
                export const ContarctUpdatedBy: string;
                export const ContarctUpdatedDate: string;
                export const ContarctWalletName: string;
                export const ContarctWalletNo: string;
                export const ContarctWardsId: string;
                export const ContractId: string;
                export const ContractIdentifyNo: string;
                export const ContractIdentifyNo2nd: string;
                export const ContractIdentifyType: string;
                export const ContractIdentifyType2nd: string;
                export const ContractNo: string;
                export const Date: string;
                export const Id: string;
                export const Times: string;
            }

            namespace TblContractType {
                export const Code: string;
                export const Description: string;
                export const Id: string;
                export const PersonAuthorityNo: string;
                export const PersonPosition: string;
                export const PersonSign: string;
                export const Remark1: string;
                export const Remark2: string;
                export const Remark3: string;
                export const Remark4: string;
                export const Remark5: string;
                export const Type: string;
                export const TypeName: string;
            }

            namespace TblDistrict {
                export const CityId: string;
                export const CityName: string;
                export const Code: string;
                export const EnName: string;
                export const Id: string;
                export const Name: string;
            }

            namespace TblItems {
                export const Code: string;
                export const DataType: string;
                export const Decriptions: string;
                export const Id: string;
                export const ItemGroup: string;
                export const ItemName: string;
                export const ItemType: string;
                export const Unit: string;
            }

            namespace TblPlaceDetails {
                export const CreatedBy: string;
                export const CreatedDate: string;
                export const Id: string;
                export const ItemCode: string;
                export const ItemDataType: string;
                export const ItemDecriptions: string;
                export const ItemId: string;
                export const ItemItemGroup: string;
                export const ItemItemName: string;
                export const ItemItemType: string;
                export const ItemUnit: string;
                export const Note: string;
                export const PlaceAddress: string;
                export const PlaceCityId: string;
                export const PlaceCode: string;
                export const PlaceContractId: string;
                export const PlaceCreatedBy: string;
                export const PlaceCreatedDate: string;
                export const PlaceDistrictId: string;
                export const PlaceId: string;
                export const PlaceLength: string;
                export const PlaceLinkGoogleMap: string;
                export const PlaceNote: string;
                export const PlaceStatus: string;
                export const PlaceTimeOpenFrom: string;
                export const PlaceTimeOpenTo: string;
                export const PlaceTimeOpening: string;
                export const PlaceTimeOpeningDate: string;
                export const PlaceTotalArea: string;
                export const PlaceTotalAreaUse: string;
                export const PlaceTotalCustomer: string;
                export const PlaceType: string;
                export const PlaceUpdateDate: string;
                export const PlaceUpdatedBy: string;
                export const PlaceWardsId: string;
                export const PlaceWidth: string;
                export const Status: string;
                export const Unit: string;
                export const UpdatedBy: string;
                export const UpdatedDate: string;
                export const Value: string;
            }

            namespace TblPlaceOfBussiness {
                export const Address: string;
                export const AreaIdPic: string;
                export const BatchNo: string;
                export const BranchIdPic: string;
                export const BranchIdPicName: string;
                export const Ceiling: string;
                export const CityCode: string;
                export const CityEcCode: string;
                export const CityEnName: string;
                export const CityId: string;
                export const CityName: string;
                export const Code: string;
                export const ContractCreatedBy: string;
                export const ContractCreatedDate: string;
                export const ContractDateSign: string;
                export const ContractFile1: string;
                export const ContractFile2: string;
                export const ContractFile3: string;
                export const ContractFile4: string;
                export const ContractFile5: string;
                export const ContractFile6: string;
                export const ContractFile7: string;
                export const ContractFileContractUpload: string;
                export const ContractId: string;
                export const ContractNameOfOwner: string;
                export const ContractNo: string;
                export const ContractPhoneOfOwner: string;
                export const ContractPlaceId: string;
                export const ContractTypeId: string;
                export const ContractUpdatedBy: string;
                export const ContractUpdatedDate: string;
                export const CreatedBy: string;
                export const CreatedDate: string;
                export const DateDeposit: string;
                export const Deposit: string;
                export const DepositAmt: string;
                export const Description: string;
                export const DistrictCityId: string;
                export const DistrictCode: string;
                export const DistrictEnName: string;
                export const DistrictId: string;
                export const DistrictName: string;
                export const Door: string;
                export const EmployeePicCode: string;
                export const EmployeePicEmail: string;
                export const EmployeePicName: string;
                export const EmployeePicPhone: string;
                export const EmployeePicWalletNo: string;
                export const File1: string;
                export const File10: string;
                export const File2: string;
                export const File3: string;
                export const File4: string;
                export const File5: string;
                export const File6: string;
                export const File7: string;
                export const File8: string;
                export const File9: string;
                export const Floor: string;
                export const HasDeposit: string;
                export const Id: string;
                export const ImportBy: string;
                export const ImportDate: string;
                export const Length: string;
                export const LinkGoogleMap: string;
                export const MonthDeposit: string;
                export const MonthRent: string;
                export const MonthRequireDeposit: string;
                export const NameOfOwner: string;
                export const Note: string;
                export const PhoneOfOwner: string;
                export const PriceBuy: string;
                export const PriceRent: string;
                export const RequireDateDeposit: string;
                export const RequireDeposit: string;
                export const RequireDepositAmt: string;
                export const Status: string;
                export const TimeOpenFrom: string;
                export const TimeOpenTo: string;
                export const TimeOpening: string;
                export const TimeOpeningDate: string;
                export const TotalArea: string;
                export const TotalAreaUse: string;
                export const TotalCustomer: string;
                export const Type: string;
                export const UpdateDate: string;
                export const UpdatedBy: string;
                export const Wall: string;
                export const WardsCode: string;
                export const WardsDistrictId: string;
                export const WardsEnName: string;
                export const WardsId: string;
                export const WardsName: string;
                export const Width: string;
            }

            namespace TblProject {
                export const Code: string;
                export const CreatedBy: string;
                export const CreatedDate: string;
                export const FromDate: string;
                export const Id: string;
                export const InnitiatedDate: string;
                export const IsNeedApprovalForEdit: string;
                export const IsNeedApprovalForNew: string;
                export const IsUse: string;
                export const LevelApprovalForEdit: string;
                export const LevelApprovalForNew: string;
                export const Name: string;
                export const Note: string;
                export const PersonManagement: string;
                export const PersonManagementPhone: string;
                export const PlaceAddress: string;
                export const PlaceAreaIdPic: string;
                export const PlaceBatchNo: string;
                export const PlaceBranchIdPic: string;
                export const PlaceCeiling: string;
                export const PlaceCityId: string;
                export const PlaceCode: string;
                export const PlaceContractId: string;
                export const PlaceCreatedBy: string;
                export const PlaceCreatedDate: string;
                export const PlaceDateDeposit: string;
                export const PlaceDeposit: string;
                export const PlaceDepositAmt: string;
                export const PlaceDescription: string;
                export const PlaceDistrictId: string;
                export const PlaceDoor: string;
                export const PlaceEmployeePicCode: string;
                export const PlaceEmployeePicEmail: string;
                export const PlaceEmployeePicName: string;
                export const PlaceEmployeePicPhone: string;
                export const PlaceEmployeePicWalletNo: string;
                export const PlaceFile1: string;
                export const PlaceFile10: string;
                export const PlaceFile2: string;
                export const PlaceFile3: string;
                export const PlaceFile4: string;
                export const PlaceFile5: string;
                export const PlaceFile6: string;
                export const PlaceFile7: string;
                export const PlaceFile8: string;
                export const PlaceFile9: string;
                export const PlaceFloor: string;
                export const PlaceHasDeposit: string;
                export const PlaceId: string;
                export const PlaceImportBy: string;
                export const PlaceImportDate: string;
                export const PlaceLength: string;
                export const PlaceLinkGoogleMap: string;
                export const PlaceMonthDeposit: string;
                export const PlaceMonthRent: string;
                export const PlaceMonthRequireDeposit: string;
                export const PlaceNameOfOwner: string;
                export const PlaceNote: string;
                export const PlacePhoneOfOwner: string;
                export const PlacePriceBuy: string;
                export const PlacePriceRent: string;
                export const PlaceRequireDateDeposit: string;
                export const PlaceRequireDeposit: string;
                export const PlaceRequireDepositAmt: string;
                export const PlaceStatus: string;
                export const PlaceTimeOpenFrom: string;
                export const PlaceTimeOpenTo: string;
                export const PlaceTimeOpening: string;
                export const PlaceTimeOpeningDate: string;
                export const PlaceTotalArea: string;
                export const PlaceTotalAreaUse: string;
                export const PlaceTotalCustomer: string;
                export const PlaceType: string;
                export const PlaceUpdateDate: string;
                export const PlaceUpdatedBy: string;
                export const PlaceWall: string;
                export const PlaceWardsId: string;
                export const PlaceWidth: string;
                export const ProjectItems: string;
                export const RecordStatus: string;
                export const StatusCreatedBy: string;
                export const StatusCreatedDate: string;
                export const StatusId: string;
                export const StatusName: string;
                export const StatusNextStatus: string;
                export const StatusTypeId: string;
                export const StatusUpdatedBy: string;
                export const StatusUpdatedDate: string;
                export const ToDate: string;
                export const TransactionLocationAreaId: string;
                export const TransactionLocationCode: string;
                export const TransactionLocationCreatedBy: string;
                export const TransactionLocationCreatedDate: string;
                export const TransactionLocationEmployeeCashId: string;
                export const TransactionLocationEmployeeManageId: string;
                export const TransactionLocationId: string;
                export const TransactionLocationName: string;
                export const TransactionLocationOpenFrom: string;
                export const TransactionLocationOpenTo: string;
                export const TransactionLocationOpeningDate: string;
                export const TransactionLocationOpeningTime: string;
                export const TransactionLocationPlaceId: string;
                export const TransactionLocationStatus: string;
                export const TransactionLocationUpdatedBy: string;
                export const TransactionLocationUpdatedDate: string;
                export const UpdatedBy: string;
                export const UpdatedDate: string;
            }

            namespace TblProjectItem {
                export const Code: string;
                export const CreatedBy: string;
                export const CreatedDate: string;
                export const Decription: string;
                export const FromDate: string;
                export const Id: string;
                export const IsUse: string;
                export const Name: string;
                export const Note: string;
                export const ProcessBar: string;
                export const ProjectCode: string;
                export const ProjectCreatedBy: string;
                export const ProjectCreatedDate: string;
                export const ProjectFromDate: string;
                export const ProjectId: string;
                export const ProjectInnitiatedDate: string;
                export const ProjectName: string;
                export const ProjectNote: string;
                export const ProjectPersonManagement: string;
                export const ProjectPersonManagementPhone: string;
                export const ProjectPlaceId: string;
                export const ProjectStatusId: string;
                export const ProjectToDate: string;
                export const ProjectTransactionLocationId: string;
                export const ProjectUpdatedBy: string;
                export const ProjectUpdatedDate: string;
                export const Quantity: string;
                export const RecordStatus: string;
                export const Status: string;
                export const StatusCreatedBy: string;
                export const StatusCreatedDate: string;
                export const StatusName: string;
                export const StatusNextStatus: string;
                export const StatusTypeId: string;
                export const StatusUpdatedBy: string;
                export const StatusUpdatedDate: string;
                export const ToDate: string;
                export const TotalDays: string;
                export const UnitCode: string;
                export const UnitCreatedBy: string;
                export const UnitCreatedDate: string;
                export const UnitDecription: string;
                export const UnitId: string;
                export const UnitName: string;
                export const UnitRate: string;
                export const UnitUpdatedBy: string;
                export const UnitUpdatedDate: string;
                export const UpdatedBy: string;
                export const UpdatedDate: string;
            }

            namespace TblStatus {
                export const AllowList: string;
                export const AllowListLevel2: string;
                export const CreatedBy: string;
                export const CreatedDate: string;
                export const Id: string;
                export const IsNew: string;
                export const IsReadOnly: string;
                export const Name: string;
                export const NextStatus: string;
                export const TypeId: string;
                export const UpdatedBy: string;
                export const UpdatedDate: string;
            }

            namespace TblStatusDetail {
                export const Id: string;
                export const StatusAllowStatusId: string;
                export const StatusCreatedBy: string;
                export const StatusCreatedDate: string;
                export const StatusDetailId: string;
                export const StatusId: string;
                export const StatusIsReadOnly: string;
                export const StatusName: string;
                export const StatusNextStatus: string;
                export const StatusTypeId: string;
                export const StatusUpdatedBy: string;
                export const StatusUpdatedDate: string;
            }

            namespace TblStatusDetailLevel2 {
                export const Id: string;
                export const StatusAllowStatusId: string;
                export const StatusCreatedBy: string;
                export const StatusCreatedDate: string;
                export const StatusDetailId: string;
                export const StatusId: string;
                export const StatusIsNew: string;
                export const StatusIsReadOnly: string;
                export const StatusName: string;
                export const StatusNextStatus: string;
                export const StatusTypeId: string;
                export const StatusUpdatedBy: string;
                export const StatusUpdatedDate: string;
            }

            namespace TblTransactionLocation {
                export const AreaId: string;
                export const Code: string;
                export const CreatedBy: string;
                export const CreatedDate: string;
                export const EmployeeCashId: string;
                export const EmployeeManageId: string;
                export const Id: string;
                export const Name: string;
                export const OpenFrom: string;
                export const OpenTo: string;
                export const OpeningDate: string;
                export const OpeningTime: string;
                export const PlaceAddress: string;
                export const PlaceCityId: string;
                export const PlaceCode: string;
                export const PlaceContractId: string;
                export const PlaceCreatedBy: string;
                export const PlaceCreatedDate: string;
                export const PlaceDistrictId: string;
                export const PlaceId: string;
                export const PlaceLength: string;
                export const PlaceLinkGoogleMap: string;
                export const PlaceStatus: string;
                export const PlaceTimeOpenFrom: string;
                export const PlaceTimeOpenTo: string;
                export const PlaceTimeOpening: string;
                export const PlaceTimeOpeningDate: string;
                export const PlaceTotalArea: string;
                export const PlaceTotalCustomer: string;
                export const PlaceUpdateDate: string;
                export const PlaceUpdatedBy: string;
                export const PlaceWardsId: string;
                export const PlaceWidth: string;
                export const Status: string;
                export const UpdatedBy: string;
                export const UpdatedDate: string;
            }

            namespace TblUnit {
                export const Code: string;
                export const CreatedBy: string;
                export const CreatedDate: string;
                export const Decription: string;
                export const Id: string;
                export const Name: string;
                export const Rate: string;
                export const UpdatedBy: string;
                export const UpdatedDate: string;
            }

            namespace TblWards {
                export const Code: string;
                export const DistrictCityId: string;
                export const DistrictEnName: string;
                export const DistrictId: string;
                export const DistrictName: string;
                export const EnName: string;
                export const Id: string;
                export const Name: string;
            }

            namespace TemplateEmail {
                export const Bcc: string;
                export const Cc: string;
                export const Id: string;
                export const Name: string;
                export const To: string;
            }
        }
    }

    declare namespace Forms {

        namespace Membership {

            namespace ChangePassword {
                export const FormTitle: string;
                export const SubmitButton: string;
                export const Success: string;
            }

            namespace ForgotPassword {
                export const BackToLogin: string;
                export const FormInfo: string;
                export const FormTitle: string;
                export const SubmitButton: string;
                export const Success: string;
            }

            namespace Login {
                export const FacebookButton: string;
                export const ForgotPassword: string;
                export const FormTitle: string;
                export const GoogleButton: string;
                export const OR: string;
                export const RememberMe: string;
                export const SignInButton: string;
                export const SignUpButton: string;
            }

            namespace ResetPassword {
                export const BackToLogin: string;
                export const EmailSubject: string;
                export const FormTitle: string;
                export const SubmitButton: string;
                export const Success: string;
            }

            namespace SignUp {
                export const AcceptTerms: string;
                export const ActivateEmailSubject: string;
                export const ActivationCompleteMessage: string;
                export const BackToLogin: string;
                export const ConfirmEmail: string;
                export const ConfirmPassword: string;
                export const DisplayName: string;
                export const Email: string;
                export const FormInfo: string;
                export const FormTitle: string;
                export const Password: string;
                export const SubmitButton: string;
                export const Success: string;
            }
        }
    }

    declare namespace Site {

        namespace AccessDenied {
            export const ClickToChangeUser: string;
            export const ClickToLogin: string;
            export const LackPermissions: string;
            export const NotLoggedIn: string;
            export const PageTitle: string;
        }

        namespace BasicProgressDialog {
            export const CancelTitle: string;
            export const PleaseWait: string;
        }

        namespace BulkServiceAction {
            export const AllHadErrorsFormat: string;
            export const AllSuccessFormat: string;
            export const ConfirmationFormat: string;
            export const ErrorCount: string;
            export const NothingToProcess: string;
            export const SomeHadErrorsFormat: string;
            export const SuccessCount: string;
        }

        namespace Dashboard {
            export const ContentDescription: string;
        }

        namespace Layout {
            export const FooterCopyright: string;
            export const FooterInfo: string;
            export const FooterRights: string;
            export const GeneralSettings: string;
            export const Language: string;
            export const Theme: string;
            export const ThemeBlack: string;
            export const ThemeBlackLight: string;
            export const ThemeBlue: string;
            export const ThemeBlueLight: string;
            export const ThemeGreen: string;
            export const ThemeGreenLight: string;
            export const ThemePurple: string;
            export const ThemePurpleLight: string;
            export const ThemeRed: string;
            export const ThemeRedLight: string;
            export const ThemeYellow: string;
            export const ThemeYellowLight: string;
        }

        namespace RolePermissionDialog {
            export const DialogTitle: string;
            export const EditButton: string;
            export const SaveSuccess: string;
        }

        namespace UserDialog {
            export const EditPermissionsButton: string;
            export const EditRolesButton: string;
        }

        namespace UserPermissionDialog {
            export const DialogTitle: string;
            export const Grant: string;
            export const Permission: string;
            export const Revoke: string;
            export const SaveSuccess: string;
        }

        namespace UserRoleDialog {
            export const DialogTitle: string;
            export const SaveSuccess: string;
        }

        namespace ValidationError {
            export const Title: string;
        }
    }

    declare namespace Validation {
        export const AuthenticationError: string;
        export const CantFindUserWithEmail: string;
        export const CurrentPasswordMismatch: string;
        export const DeleteForeignKeyError: string;
        export const EmailConfirm: string;
        export const EmailInUse: string;
        export const InvalidActivateToken: string;
        export const InvalidResetToken: string;
        export const MinRequiredPasswordLength: string;
        export const SavePrimaryKeyError: string;
    }

    ECNET['Texts'] = Q.proxyTexts(Texts, '', {Db:{Administration:{Language:{Id:1,LanguageId:1,LanguageName:1},Role:{LevelApproval:1,RoleId:1,RoleName:1},RolePermission:{PermissionKey:1,RoleId:1,RolePermissionId:1,RoleRoleName:1},Translation:{CustomText:1,EntityPlural:1,Key:1,OverrideConfirmation:1,SaveChangesButton:1,SourceLanguage:1,SourceText:1,TargetLanguage:1,TargetText:1},User:{DisplayName:1,Email:1,InsertDate:1,InsertUserId:1,IsActive:1,LastDirectoryUpdate:1,Password:1,PasswordConfirm:1,PasswordHash:1,PasswordSalt:1,Source:1,UpdateDate:1,UpdateUserId:1,UserId:1,UserImage:1,Username:1},UserPermission:{Granted:1,PermissionKey:1,User:1,UserId:1,UserPermissionId:1,Username:1},UserRole:{RoleId:1,User:1,UserId:1,UserRoleId:1,Username:1}},Common:{UserPreference:{Name:1,PreferenceType:1,UserId:1,UserPreferenceId:1,Value:1}},Office:{AssetTemp:{Code:1,CreatedBy:1,CreatedDate:1,HasContract:1,HasProcessed:1,Id:1,Name:1,PId:1,Type:1,UpdatedBy:1,UpdatedDate:1},EmailAccounts:{CreatedBy:1,CreatedDate:1,DisplayName:1,Email:1,EnableSsl:1,Host:1,Id:1,IsActive:1,Password:1,Port:1,UpdatedBy:1,UpdatedDate:1,UseDefaultCredentials:1,Username:1},QueuedEmail:{AttachedDownloadId:1,AttachmentFileName:1,AttachmentFilePath:1,Bcc:1,Body:1,Cc:1,CreatedBy:1,CreatedDate:1,CreatedOnUtc:1,DontSendBeforeDateUtc:1,EmailAccountCreatedBy:1,EmailAccountCreatedDate:1,EmailAccountDisplayName:1,EmailAccountEmail:1,EmailAccountEnableSsl:1,EmailAccountHost:1,EmailAccountId:1,EmailAccountIsActive:1,EmailAccountPassword:1,EmailAccountPort:1,EmailAccountUpdatedBy:1,EmailAccountUpdatedDate:1,EmailAccountUseDefaultCredentials:1,EmailAccountUsername:1,From:1,FromName:1,HasError:1,Id:1,PriorityId:1,ReplyTo:1,ReplyToName:1,Result:1,SentOnUtc:1,SentTries:1,Subject:1,To:1,ToName:1,UpdatedBy:1,UpdatedDate:1},SysParameters:{Code:1,CreatedBy:1,CreatedDate:1,Id:1,Name:1,Unit:1,UpdatedBy:1,UpdatedDate:1,Value:1},TblApprovalCenter:{AndOr:1,ApproveBy:1,ApprovedDate:1,ClientId:1,Code:1,CreateBy:1,Date:1,Id:1,IsSendMail:1,IsSms:1,LevelApproval:1,ReasonReject:1,Status:1,Times:1,Type:1},TblArea:{BranchCode:1,Code:1,Id:1,Name:1},TblAsset:{Code:1,GroupDescription:1,GroupId:1,GroupName:1,Id:1,Name:1},TblAssetGroup:{Description:1,Id:1,Name:1},TblAssignAssetToPlace:{AssetCode:1,AssetGroupId:1,AssetId:1,AssetName:1,CreatedBy:1,CreatedDate:1,FromDate:1,Id:1,PlaceAddress:1,PlaceCityId:1,PlaceCode:1,PlaceContractId:1,PlaceCreatedBy:1,PlaceCreatedDate:1,PlaceDistrictId:1,PlaceId:1,PlaceLength:1,PlaceLinkGoogleMap:1,PlaceStatus:1,PlaceTimeOpenFrom:1,PlaceTimeOpenTo:1,PlaceTimeOpening:1,PlaceTimeOpeningDate:1,PlaceTotalArea:1,PlaceTotalCustomer:1,PlaceUpdateDate:1,PlaceUpdatedBy:1,PlaceWidth:1,ToDate:1,UpdateBy:1,UpdatedDate:1},TblAssignCampaing:{Id:1},TblBranch:{Code:1,Id:1,Name:1},TblCampaign:{Id:1},TblCampaignType:{Id:1},TblCity:{Code:1,ECCode:1,EnName:1,Id:1,Name:1},TblContract:{AccountBankNo:1,AccountName:1,AddressOfOwner:1,AddressOfOwner2nd:1,BankName:1,BeginDate:1,BuyOrRent:1,CertificateCity:1,CertificateDate:1,CertificateNo:1,CityId:1,ContractAmt:1,ContractAmtString:1,ContractName:1,CreatedBy:1,CreatedDate:1,CurrentAddressOfOwner:1,CurrentAddressOfOwner2nd:1,DateSign:1,DistrictId:1,ECPayAddress:1,ECPayBankName:1,ECPayBankNameBranch:1,ECPayBankNo:1,ECPayCompanyName:1,ECPayPhone:1,EcPayAuthorityDate:1,EcPayAuthorityNo:1,EcPayPerson:1,EcPayPosition:1,EmailOfOwner:1,EndDate:1,File1:1,File2:1,File3:1,File4:1,File5:1,File6:1,File7:1,FileContractUpload:1,FromDate:1,Id:1,IdentifyNo:1,IdentifyNo2nd:1,IdentifyType:1,IdentifyType2nd:1,IsCompleted:1,ListDetail:1,ListSchedule:1,Month:1,NameOfOwner:1,NameOfOwner2nd:1,No:1,Paid:1,PaymentMethod:1,PhoneOfOwner:1,PhoneOfOwner2nd:1,PlaceAddress:1,PlaceAreaIdPic:1,PlaceBatchNo:1,PlaceBranchIdPic:1,PlaceCityId:1,PlaceCode:1,PlaceContractId:1,PlaceCreatedBy:1,PlaceCreatedDate:1,PlaceDateDeposit:1,PlaceDeposit:1,PlaceDepositAmt:1,PlaceDescription:1,PlaceDistrictId:1,PlaceEmployeePicCode:1,PlaceEmployeePicEmail:1,PlaceEmployeePicName:1,PlaceEmployeePicPhone:1,PlaceEmployeePicWalletNo:1,PlaceHasDeposit:1,PlaceId:1,PlaceImportBy:1,PlaceImportDate:1,PlaceLength:1,PlaceLinkGoogleMap:1,PlaceMonthRent:1,PlaceNameOfOwner:1,PlaceNote:1,PlacePhoneOfOwner:1,PlacePriceBuy:1,PlacePriceRent:1,PlaceRequireDateDeposit:1,PlaceRequireDeposit:1,PlaceRequireDepositAmt:1,PlaceStatus:1,PlaceTimeOpenFrom:1,PlaceTimeOpenTo:1,PlaceTimeOpening:1,PlaceTimeOpeningDate:1,PlaceTotalArea:1,PlaceTotalAreaUse:1,PlaceTotalCustomer:1,PlaceType:1,PlaceUpdateDate:1,PlaceUpdatedBy:1,PlaceWardsId:1,PlaceWidth:1,RecurringPayment:1,ReleaseDate:1,RemainAmt:1,Remark1:1,Remark2:1,Remark3:1,Remark4:1,Remark5:1,Status:1,ToDate:1,TotalArea:1,TotalContractAmt:1,TypeDescription:1,TypeId:1,TypePersonAuthorityNo:1,TypePersonPosition:1,TypePersonSign:1,TypeRemark1:1,TypeRemark2:1,TypeRemark3:1,TypeRemark4:1,TypeRemark5:1,TypeTypeName:1,UpdatedBy:1,UpdatedDate:1,WalletName:1,WalletNo:1,WardsId:1,YearBeginRedeal:1,YearCancel:1,YearFixPrice:1},TblContractItems:{ContractCreatedBy:1,ContractCreatedDate:1,ContractDateSign:1,ContractFile1:1,ContractFile2:1,ContractFile3:1,ContractFile4:1,ContractFile5:1,ContractFile6:1,ContractFile7:1,ContractFileContractUpload:1,ContractId:1,ContractNameOfOwner:1,ContractPhoneOfOwner:1,ContractTypeId:1,ContractUpdatedBy:1,ContractUpdatedDate:1,DetailID:1,ItemCode:1,ItemDataType:1,ItemId:1,ItemItemGroup:1,ItemItemName:1,ItemItemType:1,ItemUnit:1,Value:1},TblContractPayment:{ContractCreatedBy:1,ContractCreatedDate:1,ContractDateSign:1,ContractFile1:1,ContractFile2:1,ContractFile3:1,ContractFile4:1,ContractFile5:1,ContractFile6:1,ContractFile7:1,ContractFileContractUpload:1,ContractId:1,ContractNameOfOwner:1,ContractPhoneOfOwner:1,ContractTypeId:1,ContractUpdatedBy:1,ContractUpdatedDate:1,CreatedBy:1,CreatedDate:1,DatePaid:1,File1:1,File2:1,File3:1,File4:1,File5:1,FileInvoice:1,Id:1,InvoiceNo:1,PaidAmount:1,PaidBy:1,Period:1},TblContractSchedule:{Amount:1,ContarctAccountBankNo:1,ContarctAccountName:1,ContarctAddress:1,ContarctAddressOfOwner:1,ContarctAddressOfOwner2nd:1,ContarctBankName:1,ContarctBeginDate:1,ContarctBuyOrRent:1,ContarctCertificateCity:1,ContarctCertificateDate:1,ContarctCertificateNo:1,ContarctCityId:1,ContarctContractAmt:1,ContarctCreatedBy:1,ContarctCreatedDate:1,ContarctCurrentAddressOfOwner:1,ContarctCurrentAddressOfOwner2nd:1,ContarctDateSign:1,ContarctDistrictId:1,ContarctEcPayAuthorityDate:1,ContarctEcPayAuthorityNo:1,ContarctEcPayPerson:1,ContarctEcPayPosition:1,ContarctEmailOfOwner:1,ContarctFile1:1,ContarctFile2:1,ContarctFile3:1,ContarctFile4:1,ContarctFile5:1,ContarctFile6:1,ContarctFile7:1,ContarctFileContractUpload:1,ContarctFromDate:1,ContarctMonth:1,ContarctNameOfOwner:1,ContarctNameOfOwner2nd:1,ContarctNo:1,ContarctPaymentMethod:1,ContarctPhoneOfOwner:1,ContarctPhoneOfOwner2nd:1,ContarctPlaceId:1,ContarctReleaseDate:1,ContarctRemark1:1,ContarctRemark2:1,ContarctRemark3:1,ContarctRemark4:1,ContarctRemark5:1,ContarctToDate:1,ContarctTotalArea:1,ContarctTypeId:1,ContarctUpdatedBy:1,ContarctUpdatedDate:1,ContarctWalletName:1,ContarctWalletNo:1,ContarctWardsId:1,ContractId:1,ContractIdentifyNo:1,ContractIdentifyNo2nd:1,ContractIdentifyType:1,ContractIdentifyType2nd:1,ContractNo:1,Date:1,Id:1,Times:1},TblContractType:{Code:1,Description:1,Id:1,PersonAuthorityNo:1,PersonPosition:1,PersonSign:1,Remark1:1,Remark2:1,Remark3:1,Remark4:1,Remark5:1,Type:1,TypeName:1},TblDistrict:{CityId:1,CityName:1,Code:1,EnName:1,Id:1,Name:1},TblItems:{Code:1,DataType:1,Decriptions:1,Id:1,ItemGroup:1,ItemName:1,ItemType:1,Unit:1},TblPlaceDetails:{CreatedBy:1,CreatedDate:1,Id:1,ItemCode:1,ItemDataType:1,ItemDecriptions:1,ItemId:1,ItemItemGroup:1,ItemItemName:1,ItemItemType:1,ItemUnit:1,Note:1,PlaceAddress:1,PlaceCityId:1,PlaceCode:1,PlaceContractId:1,PlaceCreatedBy:1,PlaceCreatedDate:1,PlaceDistrictId:1,PlaceId:1,PlaceLength:1,PlaceLinkGoogleMap:1,PlaceNote:1,PlaceStatus:1,PlaceTimeOpenFrom:1,PlaceTimeOpenTo:1,PlaceTimeOpening:1,PlaceTimeOpeningDate:1,PlaceTotalArea:1,PlaceTotalAreaUse:1,PlaceTotalCustomer:1,PlaceType:1,PlaceUpdateDate:1,PlaceUpdatedBy:1,PlaceWardsId:1,PlaceWidth:1,Status:1,Unit:1,UpdatedBy:1,UpdatedDate:1,Value:1},TblPlaceOfBussiness:{Address:1,AreaIdPic:1,BatchNo:1,BranchIdPic:1,BranchIdPicName:1,Ceiling:1,CityCode:1,CityEcCode:1,CityEnName:1,CityId:1,CityName:1,Code:1,ContractCreatedBy:1,ContractCreatedDate:1,ContractDateSign:1,ContractFile1:1,ContractFile2:1,ContractFile3:1,ContractFile4:1,ContractFile5:1,ContractFile6:1,ContractFile7:1,ContractFileContractUpload:1,ContractId:1,ContractNameOfOwner:1,ContractNo:1,ContractPhoneOfOwner:1,ContractPlaceId:1,ContractTypeId:1,ContractUpdatedBy:1,ContractUpdatedDate:1,CreatedBy:1,CreatedDate:1,DateDeposit:1,Deposit:1,DepositAmt:1,Description:1,DistrictCityId:1,DistrictCode:1,DistrictEnName:1,DistrictId:1,DistrictName:1,Door:1,EmployeePicCode:1,EmployeePicEmail:1,EmployeePicName:1,EmployeePicPhone:1,EmployeePicWalletNo:1,File1:1,File10:1,File2:1,File3:1,File4:1,File5:1,File6:1,File7:1,File8:1,File9:1,Floor:1,HasDeposit:1,Id:1,ImportBy:1,ImportDate:1,Length:1,LinkGoogleMap:1,MonthDeposit:1,MonthRent:1,MonthRequireDeposit:1,NameOfOwner:1,Note:1,PhoneOfOwner:1,PriceBuy:1,PriceRent:1,RequireDateDeposit:1,RequireDeposit:1,RequireDepositAmt:1,Status:1,TimeOpenFrom:1,TimeOpenTo:1,TimeOpening:1,TimeOpeningDate:1,TotalArea:1,TotalAreaUse:1,TotalCustomer:1,Type:1,UpdateDate:1,UpdatedBy:1,Wall:1,WardsCode:1,WardsDistrictId:1,WardsEnName:1,WardsId:1,WardsName:1,Width:1},TblProject:{Code:1,CreatedBy:1,CreatedDate:1,FromDate:1,Id:1,InnitiatedDate:1,IsNeedApprovalForEdit:1,IsNeedApprovalForNew:1,IsUse:1,LevelApprovalForEdit:1,LevelApprovalForNew:1,Name:1,Note:1,PersonManagement:1,PersonManagementPhone:1,PlaceAddress:1,PlaceAreaIdPic:1,PlaceBatchNo:1,PlaceBranchIdPic:1,PlaceCeiling:1,PlaceCityId:1,PlaceCode:1,PlaceContractId:1,PlaceCreatedBy:1,PlaceCreatedDate:1,PlaceDateDeposit:1,PlaceDeposit:1,PlaceDepositAmt:1,PlaceDescription:1,PlaceDistrictId:1,PlaceDoor:1,PlaceEmployeePicCode:1,PlaceEmployeePicEmail:1,PlaceEmployeePicName:1,PlaceEmployeePicPhone:1,PlaceEmployeePicWalletNo:1,PlaceFile1:1,PlaceFile10:1,PlaceFile2:1,PlaceFile3:1,PlaceFile4:1,PlaceFile5:1,PlaceFile6:1,PlaceFile7:1,PlaceFile8:1,PlaceFile9:1,PlaceFloor:1,PlaceHasDeposit:1,PlaceId:1,PlaceImportBy:1,PlaceImportDate:1,PlaceLength:1,PlaceLinkGoogleMap:1,PlaceMonthDeposit:1,PlaceMonthRent:1,PlaceMonthRequireDeposit:1,PlaceNameOfOwner:1,PlaceNote:1,PlacePhoneOfOwner:1,PlacePriceBuy:1,PlacePriceRent:1,PlaceRequireDateDeposit:1,PlaceRequireDeposit:1,PlaceRequireDepositAmt:1,PlaceStatus:1,PlaceTimeOpenFrom:1,PlaceTimeOpenTo:1,PlaceTimeOpening:1,PlaceTimeOpeningDate:1,PlaceTotalArea:1,PlaceTotalAreaUse:1,PlaceTotalCustomer:1,PlaceType:1,PlaceUpdateDate:1,PlaceUpdatedBy:1,PlaceWall:1,PlaceWardsId:1,PlaceWidth:1,ProjectItems:1,RecordStatus:1,StatusCreatedBy:1,StatusCreatedDate:1,StatusId:1,StatusName:1,StatusNextStatus:1,StatusTypeId:1,StatusUpdatedBy:1,StatusUpdatedDate:1,ToDate:1,TransactionLocationAreaId:1,TransactionLocationCode:1,TransactionLocationCreatedBy:1,TransactionLocationCreatedDate:1,TransactionLocationEmployeeCashId:1,TransactionLocationEmployeeManageId:1,TransactionLocationId:1,TransactionLocationName:1,TransactionLocationOpenFrom:1,TransactionLocationOpenTo:1,TransactionLocationOpeningDate:1,TransactionLocationOpeningTime:1,TransactionLocationPlaceId:1,TransactionLocationStatus:1,TransactionLocationUpdatedBy:1,TransactionLocationUpdatedDate:1,UpdatedBy:1,UpdatedDate:1},TblProjectItem:{Code:1,CreatedBy:1,CreatedDate:1,Decription:1,FromDate:1,Id:1,IsUse:1,Name:1,Note:1,ProcessBar:1,ProjectCode:1,ProjectCreatedBy:1,ProjectCreatedDate:1,ProjectFromDate:1,ProjectId:1,ProjectInnitiatedDate:1,ProjectName:1,ProjectNote:1,ProjectPersonManagement:1,ProjectPersonManagementPhone:1,ProjectPlaceId:1,ProjectStatusId:1,ProjectToDate:1,ProjectTransactionLocationId:1,ProjectUpdatedBy:1,ProjectUpdatedDate:1,Quantity:1,RecordStatus:1,Status:1,StatusCreatedBy:1,StatusCreatedDate:1,StatusName:1,StatusNextStatus:1,StatusTypeId:1,StatusUpdatedBy:1,StatusUpdatedDate:1,ToDate:1,TotalDays:1,UnitCode:1,UnitCreatedBy:1,UnitCreatedDate:1,UnitDecription:1,UnitId:1,UnitName:1,UnitRate:1,UnitUpdatedBy:1,UnitUpdatedDate:1,UpdatedBy:1,UpdatedDate:1},TblStatus:{AllowList:1,AllowListLevel2:1,CreatedBy:1,CreatedDate:1,Id:1,IsNew:1,IsReadOnly:1,Name:1,NextStatus:1,TypeId:1,UpdatedBy:1,UpdatedDate:1},TblStatusDetail:{Id:1,StatusAllowStatusId:1,StatusCreatedBy:1,StatusCreatedDate:1,StatusDetailId:1,StatusId:1,StatusIsReadOnly:1,StatusName:1,StatusNextStatus:1,StatusTypeId:1,StatusUpdatedBy:1,StatusUpdatedDate:1},TblStatusDetailLevel2:{Id:1,StatusAllowStatusId:1,StatusCreatedBy:1,StatusCreatedDate:1,StatusDetailId:1,StatusId:1,StatusIsNew:1,StatusIsReadOnly:1,StatusName:1,StatusNextStatus:1,StatusTypeId:1,StatusUpdatedBy:1,StatusUpdatedDate:1},TblTransactionLocation:{AreaId:1,Code:1,CreatedBy:1,CreatedDate:1,EmployeeCashId:1,EmployeeManageId:1,Id:1,Name:1,OpenFrom:1,OpenTo:1,OpeningDate:1,OpeningTime:1,PlaceAddress:1,PlaceCityId:1,PlaceCode:1,PlaceContractId:1,PlaceCreatedBy:1,PlaceCreatedDate:1,PlaceDistrictId:1,PlaceId:1,PlaceLength:1,PlaceLinkGoogleMap:1,PlaceStatus:1,PlaceTimeOpenFrom:1,PlaceTimeOpenTo:1,PlaceTimeOpening:1,PlaceTimeOpeningDate:1,PlaceTotalArea:1,PlaceTotalCustomer:1,PlaceUpdateDate:1,PlaceUpdatedBy:1,PlaceWardsId:1,PlaceWidth:1,Status:1,UpdatedBy:1,UpdatedDate:1},TblUnit:{Code:1,CreatedBy:1,CreatedDate:1,Decription:1,Id:1,Name:1,Rate:1,UpdatedBy:1,UpdatedDate:1},TblWards:{Code:1,DistrictCityId:1,DistrictEnName:1,DistrictId:1,DistrictName:1,EnName:1,Id:1,Name:1},TemplateEmail:{Bcc:1,Cc:1,Id:1,Name:1,To:1}}},Forms:{Membership:{ChangePassword:{FormTitle:1,SubmitButton:1,Success:1},ForgotPassword:{BackToLogin:1,FormInfo:1,FormTitle:1,SubmitButton:1,Success:1},Login:{FacebookButton:1,ForgotPassword:1,FormTitle:1,GoogleButton:1,OR:1,RememberMe:1,SignInButton:1,SignUpButton:1},ResetPassword:{BackToLogin:1,EmailSubject:1,FormTitle:1,SubmitButton:1,Success:1},SignUp:{AcceptTerms:1,ActivateEmailSubject:1,ActivationCompleteMessage:1,BackToLogin:1,ConfirmEmail:1,ConfirmPassword:1,DisplayName:1,Email:1,FormInfo:1,FormTitle:1,Password:1,SubmitButton:1,Success:1}}},Site:{AccessDenied:{ClickToChangeUser:1,ClickToLogin:1,LackPermissions:1,NotLoggedIn:1,PageTitle:1},BasicProgressDialog:{CancelTitle:1,PleaseWait:1},BulkServiceAction:{AllHadErrorsFormat:1,AllSuccessFormat:1,ConfirmationFormat:1,ErrorCount:1,NothingToProcess:1,SomeHadErrorsFormat:1,SuccessCount:1},Dashboard:{ContentDescription:1},Layout:{FooterCopyright:1,FooterInfo:1,FooterRights:1,GeneralSettings:1,Language:1,Theme:1,ThemeBlack:1,ThemeBlackLight:1,ThemeBlue:1,ThemeBlueLight:1,ThemeGreen:1,ThemeGreenLight:1,ThemePurple:1,ThemePurpleLight:1,ThemeRed:1,ThemeRedLight:1,ThemeYellow:1,ThemeYellowLight:1},RolePermissionDialog:{DialogTitle:1,EditButton:1,SaveSuccess:1},UserDialog:{EditPermissionsButton:1,EditRolesButton:1},UserPermissionDialog:{DialogTitle:1,Grant:1,Permission:1,Revoke:1,SaveSuccess:1},UserRoleDialog:{DialogTitle:1,SaveSuccess:1},ValidationError:{Title:1}},Validation:{AuthenticationError:1,CantFindUserWithEmail:1,CurrentPasswordMismatch:1,DeleteForeignKeyError:1,EmailConfirm:1,EmailInUse:1,InvalidActivateToken:1,InvalidResetToken:1,MinRequiredPasswordLength:1,SavePrimaryKeyError:1}});
}
