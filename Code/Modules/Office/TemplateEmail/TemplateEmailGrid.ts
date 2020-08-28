
namespace ECNET.Office {

    @Serenity.Decorators.registerClass()
    export class TemplateEmailGrid extends Serenity.EntityGrid<TemplateEmailRow, any> {
        protected getColumnsKey() { return 'Office.TemplateEmail'; }
        protected getDialogType() { return TemplateEmailDialog; }
        protected getIdProperty() { return TemplateEmailRow.idProperty; }
        protected getInsertPermission() { return TemplateEmailRow.insertPermission; }
        protected getLocalTextPrefix() { return TemplateEmailRow.localTextPrefix; }
        protected getService() { return TemplateEmailService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}