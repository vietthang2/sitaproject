namespace ECNET.Office {
    export interface TblStatusForm {
        Name: Serenity.StringEditor;
        IsReadOnly: Serenity.BooleanEditor;
        IsNew: Serenity.BooleanEditor;
        TypeId: Serenity.EnumEditor;
        NextStatus: Serenity.LookupEditor;
        AllowList: Serenity.LookupEditor;
        AllowListLevel2: Serenity.LookupEditor;
    }

    export class TblStatusForm extends Serenity.PrefixedContext {
        static formKey = 'Office.TblStatus';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TblStatusForm.init)  {
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
        }
    }
}
