
namespace ECNET.Office {

    @Serenity.Decorators.registerClass()
    export class EmailAccountsDialog extends Serenity.EntityDialog<EmailAccountsRow, any> {
        protected getFormKey() { return EmailAccountsForm.formKey; }
        protected getIdProperty() { return EmailAccountsRow.idProperty; }
        protected getLocalTextPrefix() { return EmailAccountsRow.localTextPrefix; }
        protected getNameProperty() { return EmailAccountsRow.nameProperty; }
        protected getService() { return EmailAccountsService.baseUrl; }
        protected getDeletePermission() { return EmailAccountsRow.deletePermission; }
        protected getInsertPermission() { return EmailAccountsRow.insertPermission; }
        protected getUpdatePermission() { return EmailAccountsRow.updatePermission; }

        protected form = new EmailAccountsForm(this.idPrefix);

    }
}