namespace ECNET.Office {
    export interface TblPlaceOfBussinessForm {
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

    export class TblPlaceOfBussinessForm extends Serenity.PrefixedContext {
        static formKey = 'Office.TblPlaceOfBussiness';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TblPlaceOfBussinessForm.init)  {
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
        }
    }
}
