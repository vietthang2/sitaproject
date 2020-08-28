namespace ECNET.Office {
    export interface TblAssignAssetToPlaceForm {
        PlaceId: Serenity.LookupEditor;
        AssetId: ChangingLookupTextEditor;
        FromDate: Serenity.DateEditor;
        ToDate: Serenity.DateEditor;
    }

    export class TblAssignAssetToPlaceForm extends Serenity.PrefixedContext {
        static formKey = 'ECNET.Office.ChangingLookupTextEditort';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TblAssignAssetToPlaceForm.init)  {
                TblAssignAssetToPlaceForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = ChangingLookupTextEditor;
                var w2 = s.DateEditor;

                Q.initFormType(TblAssignAssetToPlaceForm, [
                    'PlaceId', w0,
                    'AssetId', w1,
                    'FromDate', w2,
                    'ToDate', w2
                ]);
            }
        }
    }
}
