
namespace ECNET.Office {

    @Serenity.Decorators.registerClass()
    export class EmailAccountsGrid extends Serenity.EntityGrid<EmailAccountsRow, any> {
        protected getColumnsKey() { return 'Office.EmailAccounts'; }
        protected getDialogType() { return EmailAccountsDialog; }
        protected getIdProperty() { return EmailAccountsRow.idProperty; }
        protected getInsertPermission() { return EmailAccountsRow.insertPermission; }
        protected getLocalTextPrefix() { return EmailAccountsRow.localTextPrefix; }
        protected getService() { return EmailAccountsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}