namespace Sita.Default {
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class FlightBagDialog extends Serenity.EntityDialog<TblBagsRow, any> {
        protected getFormKey() { return TblBagsForm.formKey; }
        protected getIdProperty() { return TblBagsRow.idProperty; }
        protected getLocalTextPrefix() { return TblBagsRow.localTextPrefix; }
        protected getNameProperty() { return TblBagsRow.nameProperty; }
        protected getService() { return TblBagsService.baseUrl; }



        protected form = new TblBagsForm(this.idPrefix);

        private bagGrid: FlightBagtagGrid;

        constructor() {
            super();

            this.bagGrid = new FlightBagtagGrid(this.byId("BagTagGrid"));
            this.tabs.on('tabsactivate', (e, i) => {
                this.arrange();
            });
        }
        updateInterface() {
            super.updateInterface();

            //Serenity.EditorUtils.setReadOnly(this.form.PlaceId, true);
           
        }
    }
}