namespace ECNET.Office {

    @Serenity.Decorators.registerClass()
    export class PlaceExcelImportDialog extends Serenity.PropertyDialog<any, any> {

        private form: PlaceExcelImportForm;
        public BatchNo: string;
        constructor() {
            super();

            this.form = new PlaceExcelImportForm(this.idPrefix);
        }

        protected getDialogTitle(): string {
            return "Excel Import";
        }

        protected getDialogButtons(): Serenity.DialogButton[] {
            return [
                {
                    text: 'Import',
                    click: () => {
                        if (!this.validateBeforeSave())
                            return;

                        if (this.form.FileName.value == null ||
                            Q.isEmptyOrNull(this.form.FileName.value.Filename)) {
                            Q.notifyError("Vui lòng chọn file!");
                            return;
                        }

                        PlaceExcelImportService.ExcelImport({
                            FileName: this.form.FileName.value.Filename
                        }, response => {
                                Q.notifySuccess('Đã thêm thành công: ' + (response.Inserted || 0));
                                this.BatchNo = response.BatchNo;
                                if (response.ErrorList != null && response.ErrorList.length > 0) {
                                    Q.alert(response.ErrorList.join(',\r\n '));
                                }
                                //Serenity.SubDialogHelper.triggerDataChange(this);
                                
                            this.dialogClose();
                        });
                    },
                },
                {
                    text: 'Hủy',
                    click: () => this.dialogClose()
                }
            ];
        }
    }
}