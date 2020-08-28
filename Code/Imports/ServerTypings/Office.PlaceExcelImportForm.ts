namespace ECNET.Office {
    export interface PlaceExcelImportForm {
        FileName: Serenity.ImageUploadEditor;
    }

    export class PlaceExcelImportForm extends Serenity.PrefixedContext {
        static formKey = 'Office.PlaceExcelImport';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!PlaceExcelImportForm.init)  {
                PlaceExcelImportForm.init = true;

                var s = Serenity;
                var w0 = s.ImageUploadEditor;

                Q.initFormType(PlaceExcelImportForm, [
                    'FileName', w0
                ]);
            }
        }
    }
}
