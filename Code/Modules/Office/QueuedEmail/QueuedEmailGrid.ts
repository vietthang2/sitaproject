
namespace ECNET.Office {

    @Serenity.Decorators.registerClass()
    export class QueuedEmailGrid extends Serenity.EntityGrid<QueuedEmailRow, any> {
        protected getColumnsKey() { return 'Office.QueuedEmail'; }
        protected getDialogType() { return QueuedEmailDialog; }
        protected getIdProperty() { return QueuedEmailRow.idProperty; }
        protected getInsertPermission() { return QueuedEmailRow.insertPermission; }
        protected getLocalTextPrefix() { return QueuedEmailRow.localTextPrefix; }
        protected getService() { return QueuedEmailService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}