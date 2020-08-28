namespace ECNET.Office {
    export interface TblProjectForm {
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

    export class TblProjectForm extends Serenity.PrefixedContext {
        static formKey = 'Office.TblProject';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TblProjectForm.init)  {
                TblProjectForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.LookupEditor;
                var w2 = s.DateEditor;
                var w3 = LocalTransactionEditor;
                var w4 = PlaceProjectEditor;
                var w5 = ProjectItemsEditor;
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
        }
    }
}
