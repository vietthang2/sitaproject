
namespace ECNET.Office {

    @Serenity.Decorators.registerClass()
    export class SysParametersDialog extends Serenity.EntityDialog<SysParametersRow, any> {
        protected getFormKey() { return SysParametersForm.formKey; }
        protected getIdProperty() { return SysParametersRow.idProperty; }
        protected getLocalTextPrefix() { return SysParametersRow.localTextPrefix; }
        protected getNameProperty() { return SysParametersRow.nameProperty; }
        protected getService() { return SysParametersService.baseUrl; }
        protected getDeletePermission() { return SysParametersRow.deletePermission; }
        protected getInsertPermission() { return SysParametersRow.insertPermission; }
        protected getUpdatePermission() { return SysParametersRow.updatePermission; }

        protected form = new SysParametersForm(this.idPrefix);

    }
}