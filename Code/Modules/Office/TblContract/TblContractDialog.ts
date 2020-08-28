
namespace ECNET.Office {
    
    @Serenity.Decorators.panel()
    export class TblContractDialog extends Serenity.EntityDialog<TblContractRow, any> {
        protected getFormKey() { return TblContractForm.formKey; }
        protected getIdProperty() { return TblContractRow.idProperty; }
        protected getLocalTextPrefix() { return TblContractRow.localTextPrefix; }
        protected getNameProperty() { return TblContractRow.nameProperty; }
        protected getService() { return TblContractService.baseUrl; }
        protected getDeletePermission() { return TblContractRow.deletePermission; }
        protected getInsertPermission() { return TblContractRow.insertPermission; }
        protected getUpdatePermission() { return TblContractRow.updatePermission; }

        protected form = new TblContractForm(this.idPrefix);
        public isManualEdit: boolean;
        // private contractItems: ItemDetailEditor;
        constructor() {
            super();
            
            this.form = new TblContractForm(this.idPrefix);
            this.isManualEdit = this.isEditMode();
            var regex = regex;// /^([a-zA-Z0\-\,\/\\\\(\)\)\.-9ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\s]+)$/;
            var regexSpecial = regexSpecial// /[!@#$%^&*(),.?":{}|<>]/;
            var emailRegex = emailRegex;// /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            var mesSpecial = mesSpecial;//"Không nhập ký tự đặc biệt";
            this.form.ContractName.addValidationRule(this.uniqueName, e => {
                if (!(regex.test(e.val())))
                    return mesSpecial;
            })
            this.form.AddressOfOwner.addValidationRule(this.uniqueName, e => {
                if (!(regex.test(e.val())))
                    return mesSpecial;
            })
            this.form.NameOfOwner.addValidationRule(this.uniqueName, e => {
                if (!(regex.test(e.val())))
                    return mesSpecial;
            })
            this.form.NameOfOwner2nd.addValidationRule(this.uniqueName, e => {
                if (!(regex.test(e.val())))
                    return mesSpecial;
            })
            this.form.ECPayPhone.addValidationRule(this.uniqueName, e => {
                //if (!(/^(0?)(-?\d{10})$/.test(this.form.PhoneOfOwner.value))) 
                var phone = e.val();
                if (phone.length > 0) {
                    if (phone.substring(0, 1) !== "0")
                        return "Số điện thoại bắt đầu bằng 0";
                    else
                        if (phone.length < 10 || phone.length > 11)
                            return "Số điện 10 hoặc 11 số";
                }

            });
            this.form.PhoneOfOwner.addValidationRule(this.uniqueName, e => {
                //if (!(/^(0?)(-?\d{10})$/.test(this.form.PhoneOfOwner.value))) 
                var phone = e.val();
                if (phone.length < 10 || phone.length > 11)
                    return "Số điện 10 hoặc 11 số";

            });
            this.form.EmailOfOwner.addValidationRule(this.uniqueName, e => {
                if (!(emailRegex.test(e.val())))
                    return "Email không đúng định dạng";
            });
            this.form.ECPayAddress.addValidationRule(this.uniqueName, e => {
                if (!(regex.test(e.val())))
                    return mesSpecial;
            });
            this.form.ECPayBankName.addValidationRule(this.uniqueName, e => {
                if (!(regex.test(e.val())))
                    return mesSpecial;
            });
            this.form.ECPayCompanyName.addValidationRule(this.uniqueName, e => {
                if (!(regex.test(e.val())))
                    return mesSpecial;
            });
            this.form.EcPayPerson.addValidationRule(this.uniqueName, e => {
                if (!(regex.test(e.val())))
                    return mesSpecial;
            })
            this.form.IdentifyNo.addValidationRule(this.uniqueName, e => {
                if (!(regex.test(e.val())))
                    return mesSpecial;
            });
            this.form.IdentifyNo2nd.addValidationRule(this.uniqueName, e => {
                if (!(regex.test(e.val())))
                    return mesSpecial;
            });
            this.form.CertificateNo.addValidationRule(this.uniqueName, e => {
                if ((regexSpecial.test(e.val())))
                    return mesSpecial;
            });
            this.form.WalletName.addValidationRule(this.uniqueName, e => {
                if ((regexSpecial.test(e.val())))
                    return mesSpecial;
            });
            this.form.WalletNo.addValidationRule(this.uniqueName, e => {
                if ((regexSpecial.test(e.val())))
                    return mesSpecial;
            });
            this.form.AccountName.addValidationRule(this.uniqueName, e => {
                if (!(regex.test(e.val())))
                    return mesSpecial;
            });
            this.form.BankName.addValidationRule(this.uniqueName, e => {
                if (!(regex.test(e.val())))
                    return mesSpecial;
            });
            this.form.AccountBankNo.addValidationRule(this.uniqueName, e => {
                if ((regexSpecial.test(e.val())))
                    return mesSpecial;
            });
            this.form.IdentifyNo.addValidationRule(this.uniqueName, e => {
                var identifyType = this.form.IdentifyType.value;
                if (identifyType == '3' && isNaN(e.val())) {
                    return "Vui lòng nhập số";
                }
            });
            this.form.IdentifyNo2nd.addValidationRule(this.uniqueName, e => {
                var identifyType2 = this.form.IdentifyType2nd.value;
                if (identifyType2 == '3' && isNaN(e.val())) {
                    return "Vui lòng nhập số";
                }
            });

            
            this.form.PlaceId.changeSelect2(e => {
                
                var ItemId = Office.TblPlaceOfBussinessRow.getLookup().itemById[this.form.PlaceId.value];
                if (ItemId != null) {

                    //PlaceId: this.entityId;
                    this.form.BuyOrRent.value = ItemId.Type == null ? null : ItemId.Type.toString();
                   // this.form.PlaceDepositAmt.value= ItemId.DepositAmt;
                    this.form.PlacePriceBuy.value= ItemId.PriceBuy;
                    this.form.PlacePriceRent.value = ItemId.PriceRent;
                    this.form.TotalContractAmt.value = ItemId.Type == 1 ? ItemId.PriceRent : ItemId.PriceBuy;
                    this.form.ContractAmt.value = this.form.TotalContractAmt.value;
                    this.form.PlaceAddress.value = ItemId.Address;
                    this.form.PlaceCityId.value = ItemId.CityId == null ? null : ItemId.CityId.toString();
                    this.form.PlaceDistrictId.value = ItemId.DistrictId == null ? null:ItemId.DistrictId.toString();
                    this.form.PlaceWardsId.value = ItemId.WardsId == null ? null : ItemId.WardsId.toString();
                    this.form.PlaceDescription.value= ItemId.Description;
                    this.form.Month.value = ItemId.Type == 1 ? ItemId.MonthRent : null;
                    this.form.ListSchedule.monthRent = ItemId.Type == 1 ? ItemId.MonthRent : null;
                    this.form.NameOfOwner.value= ItemId.NameOfOwner;
                    this.form.PhoneOfOwner.value = ItemId.PhoneOfOwner;
                    this.form.PlaceTotalAreaUse.value = ItemId.TotalArea==null?null:ItemId.TotalArea;
                    this.form.ListSchedule.isRent = ItemId.Type == 1 ? true : false;
                    this.ValidateData(ItemId.Type == 1 ? true : false);
                    this.form.TypeId.filterField = "Type";
                    this.form.TypeId.filterValue = this.form.BuyOrRent.value;
                }
            });
           
           
            let amtString = "";
            this.form.ContractAmt.change(e => {

                var amount = this.form.ContractAmt.value;
                var stringAmt = this.form.ContractAmtString;
                $.ajax({
                    url: '/Services/Office/tblContract/ReadMoney',
                    type: 'post',
                    dataType: 'json',
                    data: { 'amount': amount },
                    success: function (data) {
                        var rs = data;
                        if (rs.status == 'OK') {
                            amtString = data.message;
                            stringAmt.value = amtString;
                           
                        }


                    }
                });
                
            });
            
        }
        loadEntity(entity: TblContractRow) {
            super.loadEntity(entity);
            
        }
        protected afterLoadEntity() {
            super.afterLoadEntity();
            
            if (this.isNewOrDeleted())
            {
                if (this.form.PlaceId.value === null || this.form.PlaceId.value == "") {

                    this.form.PlaceId.myId = 2;      
                    
                }
                else {
                    this.form.PlaceId.myId = 1;
                    this.form.PlaceId.readOnly = true;
                   
                }
                this.form.PlaceId.updateItems();
                
                

                this.form.Status.readOnly = true;
                this.element.find(".printContract").addClass('disabled');
                this.element.find(".addSchedule").addClass('disabled');
                this.element.find(".addApprove").addClass('disabled');
                if (this.form.BuyOrRent.value !== null) {
                    this.form.TypeId.filterField = "Type";
                    this.form.TypeId.filterValue = this.form.BuyOrRent.value;
                }
                else {
                    this.form.TypeId.cascadeField = "Type";
                    this.form.TypeId.cascadeFrom = "BuyOrRent";
                }
                this.form.ListSchedule.toDate = this.form.ToDate.value;
                this.form.ListSchedule.formDate = this.form.BeginDate.value == null ? this.form.FromDate.value : this.form.BeginDate.value;
                this.form.ListSchedule.amount = this.form.ContractAmt.value;
                this.form.ListSchedule.scheduleMonth = this.form.RecurringPayment.value;
                this.form.ListSchedule.monthRent = this.form.Month.value;
                this.form.ListSchedule.contractNo = this.form.No.value;
                this.form.ListSchedule.isRent = this.form.BuyOrRent.value == "1" ? true : false;
                this.form.Status.value = "1";
            }

           
            else {
                var _typeId = this.form.TypeId.value;
                this.form.TypeId.filterField = "Type";
                this.form.TypeId.filterValue = parseInt(this.form.BuyOrRent.value);
                this.form.TypeId.value = _typeId;
                this.form.ListSchedule.toDate = this.form.ToDate.value;
                this.form.ListSchedule.formDate = this.form.BeginDate.value == null ? this.form.FromDate.value : this.form.BeginDate.value;
                this.form.ListSchedule.amount = this.form.ContractAmt.value;
                this.form.ListSchedule.scheduleMonth = this.form.RecurringPayment.value;
                this.form.ListSchedule.monthRent = this.form.Month.value;
                this.form.ListSchedule.contractNo = this.form.No.value;
                this.form.ListSchedule.isRent = this.form.BuyOrRent.value == "1" ? true : false;
               //check status
                this.form.ListSchedule.contractId = this.entityId;
                
                this.form.ListDetail.contractId = this.entityId;
                this.form.ListDetail.typeContract = parseInt(this.form.TypeId.value);
                if (this.form.Status.value == "2") {
                    // da phe duyet khong cho chỉnh
                    this.form.ListSchedule.isReadOnly = true;
                    
                    
                    try {
                        this.set_readOnly(true);
                        this.form.FileContractUpload.set_readOnly(false);
                        this.form.File1.set_readOnly(false);
                        this.form.File2.set_readOnly(false);
                        this.form.File3.set_readOnly(false);
                        this.form.File4.set_readOnly(false);
                        this.form.File5.set_readOnly(false);
                        this.form.File6.set_readOnly(false);
                        this.form.File7.set_readOnly(false);
                        Serenity.EditorUtils.setReadonly(this.form.IsCompleted.element, false);
                        
                        //this.applyChangesButton.removeClass("disabled");
                        this.saveAndCloseButton.removeClass("disabled");
                    } catch (e)
                    {
                        console.log(e);
                        //this.applyChangesButton.removeClass("disabled");
                        this.saveAndCloseButton.removeClass("disabled");
                    }
                   
                    
                }
                else if (this.form.Status.value == "4" || this.form.Status.value == "5") {
                    this.set_readOnly(true);
                    this.form.ListSchedule.isReadOnly = true;

                }
              
                   
            }
            this.ValidateData(this.form.BuyOrRent.value == "1"  ? true : false);
                
            this.form.ToDate.addValidationRule(this.uniqueName, e => {
                var fromDate = this.form.FromDate.value;
                if (this.form.ToDate.value <= fromDate) {
                    return "Vui lòng nhập ngày kết thúc hợp đồng lớn hơn ngày bắt đầu.";
                }
            });
            this.form.ToDate.change(e => {
                this.form.ListSchedule.toDate = this.form.ToDate.value;
               
            });
            this.form.FromDate.change(e => {
                this.form.BeginDate.value = this.form.FromDate.value;
                this.form.ListSchedule.formDate = this.form.FromDate.value;

            });
            this.form.BeginDate.change(e => {
               // this.form.ReleaseDate.value = this.form.FromDate.value;
                this.form.ListSchedule.formDate = this.form.BeginDate.value;

            });
            this.form.BeginDate.addValidationRule(this.uniqueName, e => {
                var fromDate = Date.parse(this.form.FromDate.value);
                if (Date.parse(this.form.BeginDate.value) < fromDate) {
                        return "Ngày bắt đầu tính tiền thuê không được nhỏ hơn ngày bắt đầu.";
                    }
            });
            this.form.ContractAmt.change(e => {
                this.form.ListSchedule.amount = this.form.ContractAmt.value;

            });
            this.form.RecurringPayment.change(e => {
                this.form.ListSchedule.scheduleMonth = this.form.RecurringPayment.value;

            });
            this.form.Month.change(e => {
                this.form.ListSchedule.monthRent = this.form.Month.value;

            });

            if (this.isEditMode()) {

                var status = this.form.Status.value;
                if (status === "1" || status === "2") {
                    this.toolbar.findButton('btnCanncel').toggle(true);
                }
                else {
                    this.toolbar.findButton('btnCanncel').toggle(false);
                }
            }
            else {
                this.toolbar.findButton('btnCanncel').toggle(false);
            }

        }
      
        protected getToolbarButtons() {

            var buttons = super.getToolbarButtons();
            let entityId_ = this.entityId;
            buttons.push(
                {
                    title: 'Hủy',
                    cssClass: 'btnCanncel',
                    icon: 'fa-file-text',
                    onClick: (e) => {


                        //this.initDialog();
                        e.preventDefault();
                        var dialog = new ContractConformCanncelDialog();
                        dialog.Id = this.entityId;
                        dialog.element.on('dialogclose', () => {
                       //     Serenity.SubDialogHelper.triggerDataChange(this);
                           
                            dialog = null;

                        });
                        Serenity.SubDialogHelper.bindToDataChange(dialog, this, (e, dci) => {
                            this.reloadById();
                        }, true);
                        e.preventDefault();
                        dialog.dialogOpen();
                        
                    }


                }
                ,
                {


                    title: 'In hợp đồng',
                    cssClass: 'printContract',
                    icon: 'fa-print',
                    onClick: (e) => {
                        Q.postToService({ service: "Office/tblContract/DownloadContract", request: { 'ContractId': this.entityId  }, target: '_blank' });
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
                            x => (x.ClientId == this.entityId && x.Type == 2));
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

            if (!Authorization.hasPermission("Ecnet:dbo.tblContract:Modify")) {

                buttons.forEach(e => {
                    if (e.cssClass === "addApprove" && Authorization.hasPermission("Ecnet:dbo.tblApprovalCenter:Modify"))
                        e.disabled = false;
                    else
                        e.disabled = true;
                });
            }
            if (!Authorization.hasPermission("Ecnet:dbo.tblApprovalCenter:Modify")) {

                buttons.forEach(e => {
                    if (e.cssClass ==='addApprove')
                        e.disabled = true;
                });
            }

            //var buttons = this.getToolbarButtons();
            
            return buttons;


        }
        private ValidateData(isRequire) {
            this.form.FromDate.element.toggleClass("required", isRequire);
            this.form.FromDate.getGridField().find("sup").toggle(isRequire);
            this.form.ToDate.element.toggleClass("required", isRequire);
            this.form.ToDate.getGridField().find("sup").toggle(isRequire);
           
        }
    }
}
