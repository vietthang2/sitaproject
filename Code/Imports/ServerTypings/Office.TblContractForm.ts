namespace ECNET.Office {
    export interface TblContractForm {
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

    export class TblContractForm extends Serenity.PrefixedContext {
        static formKey = 'Office.TblContract';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TblContractForm.init)  {
                TblContractForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.EnumEditor;
                var w2 = PlaceContractEditor;
                var w3 = s.StringEditor;
                var w4 = s.LookupEditor;
                var w5 = s.DateEditor;
                var w6 = s.DecimalEditor;
                var w7 = s.TextAreaEditor;
                var w8 = ItemDetailEditor;
                var w9 = ScheduleDetailEditor;
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
        }
    }
}
