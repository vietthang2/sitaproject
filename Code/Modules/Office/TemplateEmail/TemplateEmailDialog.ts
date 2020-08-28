
namespace ECNET.Office {

    @Serenity.Decorators.registerClass()
    export class TemplateEmailDialog extends Serenity.EntityDialog<TemplateEmailRow, any> {
        protected getFormKey() { return TemplateEmailForm.formKey; }
        protected getIdProperty() { return TemplateEmailRow.idProperty; }
        protected getLocalTextPrefix() { return TemplateEmailRow.localTextPrefix; }
        protected getNameProperty() { return TemplateEmailRow.nameProperty; }
        protected getService() { return TemplateEmailService.baseUrl; }
        protected getDeletePermission() { return TemplateEmailRow.deletePermission; }
        protected getInsertPermission() { return TemplateEmailRow.insertPermission; }
        protected getUpdatePermission() { return TemplateEmailRow.updatePermission; }

        protected form = new TemplateEmailForm(this.idPrefix);

    }
}