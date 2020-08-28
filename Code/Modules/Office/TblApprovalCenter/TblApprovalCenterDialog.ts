
namespace ECNET.Office {

    @Serenity.Decorators.registerClass()
    export class TblApprovalCenterDialog extends Serenity.EntityDialog<TblApprovalCenterRow, any> {
        protected getFormKey() { return TblApprovalCenterForm.formKey; }
        protected getIdProperty() { return TblApprovalCenterRow.idProperty; }
        protected getLocalTextPrefix() { return TblApprovalCenterRow.localTextPrefix; }
        protected getNameProperty() { return TblApprovalCenterRow.nameProperty; }
        protected getService() { return TblApprovalCenterService.baseUrl; }
        protected getDeletePermission() { return TblApprovalCenterRow.deletePermission; }
        protected getInsertPermission() { return TblApprovalCenterRow.insertPermission; }
        protected getUpdatePermission() { return TblApprovalCenterRow.updatePermission; }

        protected form = new TblApprovalCenterForm(this.idPrefix);
        constructor() {
            super();
            this.form.Status.addValidationRule(this.uniqueName, e => {
                //chi duoc chon status : approve, reject
                var status = this.form.Status.value;
                if (status==="1") {
                    return "Vui lòng chọn phê duyệt hoặc từ chối";
                }

            });
            this.form.Status.change(e => {
                var status = this.form.Status.value;
                if (status === "3") //reject
                {
                    this.form.ReasonReject.element.toggleClass("required", true);
                    this.form.ReasonReject.getGridField().find("sup").toggle(true);
                }
                else {
                    this.form.ReasonReject.element.toggleClass("required", false);
                    this.form.ReasonReject.getGridField().find("sup").toggle(false);
                }
            });

        }
        loadEntity(entity: TblApprovalCenterRow) {
            super.loadEntity(entity);
            this.deleteButton.remove();
         
        }
        afterLoadEntity() {
            super.afterLoadEntity();
            

            //this.form.Status.items[0].disabled = true;
            this.form.Status.items.splice(0, 1);
            this.form.Status.items.splice(2, 2);
            //this.form.Status.items.splice(0, 1);
            
            
            if (this.form.Status.value !== "1") {
                this.readOnly = true;
                //this.editButton.addClass('disabled');
                //this.saveAndCloseButton.addClass('disabled');
                //this.applyChangesButton.addClass('disabled');
            }

        }
    }
}