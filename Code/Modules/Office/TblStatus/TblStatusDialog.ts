
namespace ECNET.Office {

    @Serenity.Decorators.registerClass()
    export class TblStatusDialog extends Serenity.EntityDialog<TblStatusRow, any> {
        protected getFormKey() { return TblStatusForm.formKey; }
        protected getIdProperty() { return TblStatusRow.idProperty; }
        protected getLocalTextPrefix() { return TblStatusRow.localTextPrefix; }
        protected getNameProperty() { return TblStatusRow.nameProperty; }
        protected getService() { return TblStatusService.baseUrl; }
        protected getDeletePermission() { return TblStatusRow.deletePermission; }
        protected getInsertPermission() { return TblStatusRow.insertPermission; }
        protected getUpdatePermission() { return TblStatusRow.updatePermission; }

        protected form = new TblStatusForm(this.idPrefix);
        public constructor() {
            super();
            if (this.isNewOrDeleted()) {
                this.form.TypeId.change(e => {
                    if (this.form.TypeId.value == "3")
                        this.form.AllowListLevel2.cascadeValue = 4;
                    else if (this.form.TypeId.value == "4")
                        this.form.AllowListLevel2.cascadeValue = 3;
                });
            }
        }
        protected afterLoadEntity() {
            super.afterLoadEntity();
           
            if (this.entityId) {
                this.form.AllowList.cascadeField = TblStatusRow.Fields.TypeId;
                this.form.AllowList.cascadeFrom = TblStatusRow.Fields.TypeId;
                this.form.NextStatus.cascadeField = TblStatusRow.Fields.TypeId;
                this.form.NextStatus.cascadeFrom = TblStatusRow.Fields.TypeId;
                //Level 2
                var AllowList_ = this.form.AllowListLevel2.value;
                this.form.AllowListLevel2.cascadeField = TblStatusRow.Fields.TypeId;
                if (this.form.TypeId.value == "3")
                    this.form.AllowListLevel2.cascadeValue = 4;
                else if (this.form.TypeId.value == "4")
                    this.form.AllowListLevel2.cascadeValue = 3;
                if (AllowList_)
                    this.form.AllowListLevel2.value = AllowList_;

            }
            else {
                var beforeValue = this.form.NextStatus.value;
                this.form.NextStatus.filterField = TblStatusRow.Fields.TypeId;
                this.form.NextStatus.filterValue = this.form.TypeId.value;
                if (beforeValue)
                    this.form.NextStatus.value = beforeValue;
                beforeValue = this.form.AllowList.value;
                this.form.AllowList.filterField = TblStatusRow.Fields.TypeId;
                this.form.AllowList.filterValue = this.form.TypeId.value;
                if (beforeValue)
                    this.form.AllowList.value = beforeValue;


                //this.form.AllowList.cascadeField = TblStatusRow.Fields.TypeId;
                //this.form.AllowList.cascadeFrom = TblStatusRow.Fields.TypeId;
                //this.form.NextStatus.cascadeField = TblStatusRow.Fields.TypeId;
                //this.form.NextStatus.cascadeFrom = TblStatusRow.Fields.TypeId;

            }
            
            
           
        }
    }
}