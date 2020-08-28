
namespace ECNET.Office {

    @Serenity.Decorators.registerClass()
    export class SysParametersGrid extends Serenity.EntityGrid<SysParametersRow, any> {
        protected getColumnsKey() { return 'Office.SysParameters'; }
        protected getDialogType() { return SysParametersDialog; }
        protected getIdProperty() { return SysParametersRow.idProperty; }
        protected getInsertPermission() { return SysParametersRow.insertPermission; }
        protected getLocalTextPrefix() { return SysParametersRow.localTextPrefix; }
        protected getService() { return SysParametersService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}