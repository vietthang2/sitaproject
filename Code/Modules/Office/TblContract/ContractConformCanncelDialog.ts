namespace ECNET.Office {

    @Serenity.Decorators.registerClass()
    export class ContractConformCanncelDialog extends Serenity.PropertyDialog<any, any> {

        private form: ContractConformCanncelForm;
        public Id: number;
        constructor() {
            super();

            this.form = new ContractConformCanncelForm(this.idPrefix);
            this.form.Id.value = this.Id == null ? "":this.Id.toString();
        }

        protected getDialogTitle(): string {
            return "Lý do hủy";
        }

        protected getDialogButtons(): Serenity.DialogButton[] {
            return [
                {
                    text: 'Cập nhật',
                    click: () => {
                        if (!this.validateBeforeSave())
                            return;

                        if (this.form.Reason.value == null ||
                            Q.isEmptyOrNull(this.form.Reason.value)) {
                            Q.notifyError("Vui lòng nhập lý do!");
                            return;
                        }

                        ContractConformCanncelFormService.Cancel({
                            Id: this.Id.toString(),
                            Reason: this.form.Reason.value
                        }, response => {
                            Q.notifySuccess('Đã hủy thành công: ' + (response.Inserted || 0));
                            
                            if (response.ErrorList != null && response.ErrorList.length > 0) {
                                Q.alert(response.ErrorList.join(',\r\n '));
                            }
                            Serenity.SubDialogHelper.triggerDataChange(this);

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