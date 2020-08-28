
namespace ECNET.Office {

    @Serenity.Decorators.registerClass()
    export class QueuedEmailDialog extends Serenity.EntityDialog<QueuedEmailRow, any> {
        protected getFormKey() { return QueuedEmailForm.formKey; }
        protected getIdProperty() { return QueuedEmailRow.idProperty; }
        protected getLocalTextPrefix() { return QueuedEmailRow.localTextPrefix; }
        protected getNameProperty() { return QueuedEmailRow.nameProperty; }
        protected getService() { return QueuedEmailService.baseUrl; }
        protected getDeletePermission() { return QueuedEmailRow.deletePermission; }
        protected getInsertPermission() { return QueuedEmailRow.insertPermission; }
        protected getUpdatePermission() { return QueuedEmailRow.updatePermission; }

        protected form = new QueuedEmailForm(this.idPrefix);

    }
}