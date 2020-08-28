
namespace ECNET.Office {

    @Serenity.Decorators.panel()
    export class TblPlaceOfBussinessDialog extends Serenity.EntityDialog<TblPlaceOfBussinessRow, any> {
        protected getFormKey() { return TblPlaceOfBussinessForm.formKey; }
        protected getIdProperty() { return TblPlaceOfBussinessRow.idProperty; }
        protected getLocalTextPrefix() { return TblPlaceOfBussinessRow.localTextPrefix; }
        protected getNameProperty() { return TblPlaceOfBussinessRow.nameProperty; }
        protected getService() { return TblPlaceOfBussinessService.baseUrl; }
        protected getDeletePermission() { return TblPlaceOfBussinessRow.deletePermission; }
        protected getInsertPermission() { return TblPlaceOfBussinessRow.insertPermission; }
        protected getUpdatePermission() { return TblPlaceOfBussinessRow.updatePermission; }

        protected form = new TblPlaceOfBussinessForm(this.idPrefix);
        public contract: ECNET.Office.TblContractRow;
        
        //private assetGrid: AssetToDetailGrid;
        // private contractDialog = TblContractDialog; 
        constructor() {
            super();
            var regex = /^([a-zA-Z0\-\,\/\\\\(\)\)\.-9ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\s]+)$/;;
            var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            this.form.RequireDeposit.change(e => {
                var requireDeposit = this.form.RequireDeposit.value;
                if (this.form.HasDeposit.value == "1" && requireDeposit === "1") {
                    this.ValidateData(true);
                }
                else {
                    this.ValidateData(false);
                }
            });
            this.form.HasDeposit.change(e => {
                var requireDeposit = this.form.RequireDeposit.value;
                if (this.form.HasDeposit.value == "1" && requireDeposit === "1") {
                    this.ValidateData(true);
                   
                }
                else {
                    this.ValidateData(false);
                  
                }
            });
            this.form.Type.change(e => {
                if (this.form.Type.value === "1") {
                    this.ValidateType(true)

                }
                else
                    this.ValidateType(false);
            });
            this.form.EmployeePicName.addValidationRule(this.uniqueName, e => {
                if (!(regex.test(this.form.EmployeePicName.value))) 
                    return "Không nhập ký tự đặc biệt";
            });
            this.form.EmployeePicCode.addValidationRule(this.uniqueName, e => {
                if (!(regex.test(this.form.EmployeePicName.value)))
                    return "Không nhập ký tự đặc biệt";
            });
            this.form.EmployeePicEmail.addValidationRule(this.uniqueName, e => {
                if (!(emailRegex.test(e.val())))
                    return "Email không đúng định dạng";
            });
            this.form.Address.addValidationRule(this.uniqueName, e => {
                if (!(regex.test(e.val())))
                    return "Không nhập ký tự đặc biệt";
            });
            this.form.NameOfOwner.addValidationRule(this.uniqueName, e => {
                if (!(regex.test(e.val())))
                    return "Không nhập ký tự đặc biệt";
            })
            this.form.PhoneOfOwner.addValidationRule(this.uniqueName, e => {
                //if (!(/^(0?)(-?\d{10})$/.test(this.form.PhoneOfOwner.value))) 
                var phone = this.form.PhoneOfOwner.value;
                if (phone.length > 0) {
                    if (phone.substring(0, 1) !== "0")
                        return "Số điện thoại bắt đầu bằng 0";
                    else
                        if (phone.length < 10 || phone.length > 11)
                            return "Số điện 10 hoặc 11 số";
                }
                    
            });
            this.form.MonthRent.addValidationRule(this.uniqueName, e1 => {
                if (parseInt(e1.val()) > 600)
                    return "Tháng thuê không lớn hơn 600";
            });
            this.form.EmployeePicPhone.addValidationRule(this.uniqueName, e1 => {
                //if (!(/^(0?)(-?\d{10})$/.test(this.form.PhoneOfOwner.value))) 
                var phone = e1.val();
                if (phone.length > 0) {
                    if (phone.substring(0, 1) !== "0")
                        return "Số điện thoại bắt đầu bằng 0";
                    else
                        if (phone.length < 10 || phone.length > 11)
                            return "Số điện 10 hoặc 11 số";
                }

            });
            this.form.EmployeePicWalletNo.addValidationRule(this.uniqueName, e2 => {
                //if (!(/^(0?)(-?\d{10})$/.test(this.form.PhoneOfOwner.value))) 
                var phone = e2.val();
                if (phone.length > 0) {
                    if (phone.substring(0, 1) !== "0")
                        return "Số ví bắt đầu bằng 0";
                    else
                        if (phone.length < 10 || phone.length > 11)
                            return "Số ví 10 hoặc 11 số";
                }

            });
        }
        updateInterface() {
            super.updateInterface();

            //Serenity.EditorUtils.setReadOnly(this.form.PlaceId, true);

        }


        //public contract: ECNET.Office.TblContractRow;


        loadEntity(entity: TblPlaceOfBussinessRow) {
            super.loadEntity(entity);
            let entity_ = this.entityId;
            if (this.form.Status.value == "2") {
                this.deleteButton.remove();
                this.editButton.remove();
                
            }
            if (this.form.Status.value == "1" || this.form.Status.value == "3") {
                this.element.find('.addContract').addClass('disabled');
                this.element.find('.printContract').addClass('disabled');
            }
            if (this.isNewOrDeleted() == true) {
                this.element.find('.addContract').addClass('disabled');
                this.element.find('.printContract').addClass('disabled');
            }

            //Serenity.TabsExtensions.setDisabled(this.butt, 'Orders', this.isNewOrDeleted());
            try {
                this.contract = Q.tryFirst(ECNET.Office.TblContractRow.getLookup().items,
                    x => x.PlaceId == entity_);
            } catch (ee) {
                this.contract = null;
            }
            if (this.form.Status.value === "2" || this.form.Status.value==="5") {
                // da phe duyet khong cho chỉnh
                this.set_readOnly(true);    
                //this.form.File1.set_readOnly(false);
                //this.form.File2.set_readOnly(false);
                //this.form.File3.set_readOnly(false);
                //this.form.File4.set_readOnly(false);
                //this.form.File5.set_readOnly(false);
                //this.form.File6.set_readOnly(false);
                //this.form.File7.set_readOnly(false);
                //this.form.FileContractUpload.set_readOnly(false);
                //this.applyChangesButton.removeClass("disabled");
                //this.saveAndCloseButton.removeClass("disabled");
                //this.form.ListSchedule.isReadOnly = true;
            }
        }
        protected getToolbarButtons() {
            let self = this;
            var buttons = super.getToolbarButtons();

            var title_ = "Tạo hợp đồng";
            let entityId_ = this.entityId;
            
            buttons.push(
                {
                    title: title_,
                    cssClass: 'addContract',
                    icon: 'fa-sticky-note-o',
                    onClick: (e) => {

                        // *** do something on click if you want **
                        var dialog = new TblContractDialog();
                        dialog.element.on('dialogclose', () => {

                            dialog = null;
                        });
                        


                        if (this.contract === null) {
                            dialog.loadEntityAndOpenDialog(<ECNET.Office.TblContractRow>{

                                PlaceId: this.entityId,//this.entityId,
                                BuyOrRent: parseInt(this.form.Type.value),
                                PlaceDepositAmt: this.form.DepositAmt.value,
                                PlacePriceBuy: this.form.PriceBuy.value,
                                PlacePriceRent: this.form.PriceRent.value,
                                PlaceAddress: this.form.Address.value,
                                PlaceCityId: parseInt(this.form.CityId.value),
                                PlaceDistrictId: parseInt(this.form.DistrictId.value),
                                PlaceWardsId: parseInt(this.form.WardsId.value),
                                PlaceDescription: this.form.Description.value,
                                Month: this.form.Type.value == "1" ? this.form.MonthRent.value : "",
                                ContractAmt: this.form.Type.value == "1" ? this.form.PriceRent.value : this.form.PriceBuy.value,
                                TotalContractAmt: this.form.Type.value == "1" ? this.form.PriceRent.value : this.form.PriceBuy.value,
                                NameOfOwner: this.form.NameOfOwner.value,
                                PhoneOfOwner: this.form.PhoneOfOwner.value,
                                TotalArea: this.form.TotalArea.value
                                

                            });

                        }
                        else {

                            dialog.loadByIdAndOpenDialog(this.contract.Id);
                        }
                       // Serenity.SubDialogHelper.triggerDataChanged(self);
                        Serenity.SubDialogHelper.bindToDataChange(dialog, this, (e, dci) => {
                            this.loadEntity(this.entityId);
                        }, true);
                       // this.initDialog();
                        e.preventDefault();
                        
                        dialog.dialogOpen();
                    }

                },
                {
                    title: 'Phê duyệt',
                    cssClass: 'addApprove',
                    icon: 'fa-gavel',
                    onClick: (e) => {

                        // *** do something on click if you want **
                        var dialogApp = new TblApprovalCenterDialog();
                        var approved_ = Q.tryFirst(ECNET.Office.TblApprovalCenterRow.getLookup().items,
                            x => (x.ClientId == this.entityId && x.Type == 1));
                        dialogApp.loadByIdAndOpenDialog(approved_.Id);
                        Serenity.SubDialogHelper.bindToDataChange(dialogApp, this, (e, dci) => {
                            this.reloadById();
                        }, true);
                        // this.initDialog();
                        e.preventDefault();


                        dialogApp.dialogOpen();
                    }
                }
               
            );
           

            Q.first(buttons, x => x.cssClass == "save-and-close-button").onClick = () =>
                Q.confirm('Bạn có muốn lưu?', () => {
                    this.save(() => {
                        this.dialogClose();
                    });
                });

            if (!Authorization.hasPermission("Ecnet:dbo.tblPlaceOfBussiness:Modify")) {

                buttons.forEach(e => {
                    if (e.cssClass == "addApprove" && Authorization.hasPermission("Ecnet:dbo.tblApprovalCenter:Modify"))
                        e.disabled = false;
                    else
                    e.disabled = true;
                });
            }
         
            return buttons;
        }
        private confirmBeforeSave(oldEvt, e) {
            Q.confirm("Bạn có muốn lưu?", () => {
                oldEvt(e);
            });
        }
        private ValidateData(isRequire) {
            this.form.RequireDepositAmt.element.toggleClass("required", isRequire);
            this.form.RequireDepositAmt.getGridField().find("sup").toggle(isRequire);
            this.form.RequireDateDeposit.element.toggleClass("required", isRequire);
            this.form.RequireDateDeposit.getGridField().find("sup").toggle(isRequire);
            this.form.DepositAmt.element.toggleClass("required", isRequire);
            this.form.DepositAmt.getGridField().find("sup").toggle(isRequire);
            this.form.DateDeposit.element.toggleClass("required", isRequire);
            this.form.DateDeposit.getGridField().find("sup").toggle(isRequire);
        }
        private ValidateType(isRequire) {
            
            this.form.PriceRent.element.toggleClass("required", isRequire);
            this.form.PriceRent.getGridField().find("sup").toggle(isRequire);
            this.form.MonthRent.element.toggleClass("required", isRequire);
            this.form.MonthRent.getGridField().find("sup").toggle(isRequire);

            this.form.PriceBuy.element.toggleClass("required", !isRequire);
            this.form.PriceBuy.getGridField().find("sup").toggle(!isRequire);
        }
        private ValidateSpecial(value) {
            if (!(/^([a-zA-Z0-9ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s]+)$/.test(value)))
                return "Không nhập ký tự đặc biệt";
          
        }
    }
}