namespace ECNET.Office {
    export interface TblPlaceDetailsForm {
        PlaceId: Serenity.LookupEditor;
        ItemId: Serenity.LookupEditor;
        Value: Serenity.StringEditor;
        Unit: Serenity.StringEditor;
        PlaceType: Serenity.IntegerEditor;
        ItemDataType: Serenity.EnumEditor;
        Note: Serenity.TextAreaEditor;
    }

    export class TblPlaceDetailsForm extends Serenity.PrefixedContext {
        static formKey = 'Office.TblPlaceDetails';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TblPlaceDetailsForm.init)  {
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
        }
    }
}
