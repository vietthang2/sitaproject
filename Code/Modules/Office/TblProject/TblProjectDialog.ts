
namespace ECNET.Office {

    @Serenity.Decorators.panel()
    export class TblProjectDialog extends Serenity.EntityDialog<TblProjectRow, any> {
        protected getFormKey() { return TblProjectForm.formKey; }
        protected getIdProperty() { return TblProjectRow.idProperty; }
        protected getLocalTextPrefix() { return TblProjectRow.localTextPrefix; }
        protected getNameProperty() { return TblProjectRow.nameProperty; }
        protected getService() { return TblProjectService.baseUrl; }
        protected getDeletePermission() { return TblProjectRow.deletePermission; }
        protected getInsertPermission() { return TblProjectRow.insertPermission; }
        protected getUpdatePermission() { return TblProjectRow.updatePermission; }
        public statusOld: number;
        public editFrom: number;
        protected form = new TblProjectForm(this.idPrefix);
        constructor() {
            super();
            
            var regex = /^([a-zA-Z0\-\,\/\\\\(\)\)\.-9ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\s]+)$/;
            var regexSpecial = /[!@#$%^&*(),.?":{}|<>]/;
            var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            var mesSpecial = "Không nhập ký tự đặc biệt";
            this.form.PlaceId.changeSelect2(e => {
                var ItemId = Office.TblPlaceOfBussinessRow.getLookup().itemById[this.form.PlaceId.value];
                if (ItemId != null) {


                    this.form.PlaceCityId.value = ItemId.CityId == null ? null : ItemId.CityId.toString();
                    this.form.PlaceDistrictId.value = ItemId.DistrictId == null ? null : ItemId.DistrictId.toString();
                    this.form.PlaceWardsId.value = ItemId.WardsId == null ? null : ItemId.WardsId.toString();
                    this.form.PlaceAddress.value = ItemId.Address
                   
                }
            });
            this.form.Name.addValidationRule(this.uniqueName, e => {
                if (!(regex.test(e.val())))
                    return mesSpecial;
            });
            this.form.Note.addValidationRule(this.uniqueName, e => {
                if (!(regex.test(e.val())))
                    return mesSpecial;
            });
            this.form.PersonManagement.addValidationRule(this.uniqueName, e => {
                if (!(regex.test(e.val())))
                    return mesSpecial;
            });
            this.form.PersonManagementPhone.addValidationRule(this.uniqueName, e => {
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
            this.form.ToDate.addValidationRule(this.uniqueName, e => {
                var fromDate = this.form.FromDate.value;
                if (this.form.ToDate.value <= fromDate) {
                    return "Vui lòng nhập ngày kết thúc hợp đồng lớn hơn ngày bắt đầu.";
                }
            });
            this.form.FromDate.addValidationRule(this.uniqueName, e => {
                var toDate = this.form.ToDate.value;
                if (this.form.FromDate.value >= toDate) {
                    return "Vui lòng nhập ngày kết thúc hợp đồng lớn hơn ngày bắt đầu.";
                }
            });
        }
        protected afterLoadEntity() {
            super.afterLoadEntity();
            this.statusOld = parseInt(this.form.StatusId.value);
            this.form.ProjectItems.viewMode = true;
            if (!this.entityId) {
                //this.form.StatusId.value = "1";
                this.form.StatusId.readOnly = true;
                this.form.PlaceCityId.readOnly = true;
                this.form.PlaceDistrictId.readOnly = true;
                this.form.PlaceWardsId.readOnly = true;
                this.statusOld = parseInt(this.form.StatusId.value);
                this.form.PlaceId.myId = 1;
            }
        
                
            if (this.isNewOrDeleted()) {
                if (this.form.PlaceId.value === null || this.form.PlaceId.value == "") {
                    this.form.PlaceId.filterField = TblPlaceOfBussinessRow.Fields.Status;
                    this.form.PlaceId.filterValue = 5;//approved

                }
                else {
                    this.form.PlaceId.readOnly = true;
                }
            }
            let isCheck: boolean;
            
            this.form.StatusId.change(e => {
                e.preventDefault();
                e.stopImmediatePropagation();
                isCheck = false;
                let status: ECNET.Office.TblStatusDetailRow;
                let old: number;
                old = this.statusOld;
                var times = 0;
                if (isNaN(old) == false)
                {
                    
                    var newValue = parseInt(this.form.StatusId.value);
                    if (old == newValue)
                        return;
                    try {
                        status = Q.tryFirst(ECNET.Office.TblStatusDetailRow.getLookup().items,
                            x => (x.StatusId === old && x.StatusDetailId == newValue));

                    }
                    catch (e1) {
                        status = null;
                    }
                    if ((status == "undefined" || status == null) && isCheck === false) {
                        Q.alert('Trạng thái hiện tại không cho chuyển về trạng thái ' + Q.tryFirst(ECNET.Office.TblStatusRow.getLookup().items, x => x.Id == newValue).Name);
                        //return false;
                        isCheck = true;
                        this.form.StatusId.value = this.statusOld.toString();
                        times = times + 1;
                        return;

                    }
                    else if (isCheck === false) {
                        var statusLv2 = ECNET.Office.TblStatusDetailLevel2Row.getLookup().items.filter(x => (x.StatusId === newValue ));
                        var projectItems = ECNET.Office.TblProjectItemRow.getLookup().items.filter(e1 => e1.ProjectId === this.entityId);

                        var isCheckChild = false;
                        var isCount = 0;
                        if (projectItems.length > 0) {
                            projectItems.forEach(function (value) {
                                isCheckChild = statusLv2.some(i => i.StatusDetailId == value.Status);
                                if (isCheckChild == false)
                                    isCount++;
                                    return false;

                            });
                        }
                        
                        if (isCount>0 && projectItems.length > 0) {
                            Q.alert('Chọn trạng thái không đúng! Kiểm tra lại danh mục dự án');
                            //return false;
                            isCheck = true;
                            //e.result = this.statusOld.toString();
                            this.form.StatusId.value = this.statusOld.toString();
                            e.stopPropagation();
                            times = times + 1;
                            return;
                            
                            
                        }
                    }
                   
                }
                
            });
            
            if (this.statusOld > 0) {
                var statusCurrent = Q.first(ECNET.Office.TblStatusRow.getLookup().items,
                    x => (x.Id === this.statusOld));
                if (statusCurrent.IsReadOnly == true) {
                    this.set_readOnly(true);
                }

                
            }
            if (this.editFrom == 1) {
                this.set_readOnly(true);
                this.form.StatusId.readOnly = false;

                this.applyChangesButton.removeClass("disabled");
                this.saveAndCloseButton.removeClass("disabled");
            }
            else
                this.form.StatusId.readOnly = true;
            
        }
        public loadEntity(entity: TblProjectRow) {
            super.loadEntity(entity);
            this.statusOld = parseInt(this.form.StatusId.value);
            //Khởi tạo giá trị cho việc phê duyệt
            if (this.isNew()) {
                var IsApprovalForNew = Q.tryFirst(Office.SysParametersRow.getLookup().items, e => e.Code == 'PROJECT_NEW');
                var IsApprovalForEdit = Q.tryFirst(Office.SysParametersRow.getLookup().items, e => e.Code == 'PROJECT_EDIT');
                if (IsApprovalForNew.Value == null || IsApprovalForNew.Value == "0") {
                    this.form.IsNeedApprovalForNew.value = false;
                    this.form.RecordStatus.value = "1";//Ecnet.StatusRecord

                }

                else
                    this.form.IsNeedApprovalForNew.value = true;
                if (IsApprovalForEdit.Value == null || IsApprovalForEdit.Value == "0")
                    this.form.IsNeedApprovalForEdit.value = false;
                else
                    this.form.IsNeedApprovalForEdit.value = true;

                this.form.LevelApprovalForNew.value = IsApprovalForNew.Value == null ? 0 : parseInt(IsApprovalForNew.Value);
                this.form.LevelApprovalForEdit.value = IsApprovalForEdit.Value == null ? 0 : parseInt(IsApprovalForEdit.Value);
            }
            else {
                if (this.form.IsNeedApprovalForEdit.value == false)
                    this.form.RecordStatus.value = "1";//Ecnet.StatusRecord
                if (this.form.IsNeedApprovalForNew.value == false && this.form.IsNeedApprovalForNew.value == false )
                    this.element.find('.addApprove').addClass('hidden');

            }
            
        }
        protected getToolbarButtons() {
            
            var buttons = super.getToolbarButtons();
            Q.first(buttons, x => x.cssClass == "save-and-close-button").onClick = () =>
                Q.confirm('Bạn có muốn lưu?', () => {
                    this.save(() => {
                        this.dialogClose();
                    });
                });
            
            buttons.push({
                title: 'Phê duyệt',
                cssClass: 'addApprove',
                icon: 'fa-gavel',
                onClick: (e) => {

                    // *** do something on click if you want **
                    var dialogApp = new TblApprovalCenterDialog();
                    var approved_ = Q.first(ECNET.Office.TblApprovalCenterRow.getLookup().items,
                        x => (x.ClientId == this.entityId && x.Type == 3));
                    dialogApp.loadByIdAndOpenDialog(approved_.Id);
                    Serenity.SubDialogHelper.bindToDataChange(dialogApp, this, (e, dci) => {
                        this.reloadById();
                    }, true);
                    // this.initDialog();
                    e.preventDefault();


                    dialogApp.dialogOpen();
                }
            });
            if (!Authorization.hasPermission("Ecnet:dbo.tblProject:Modify")) {

                buttons.forEach(e => {
                    if (e.cssClass == "addApprove" && Authorization.hasPermission("Ecnet:dbo.tblApprovalCenter:Modify"))
                        e.disabled = false;
                    else
                        e.disabled = true;
                });
            }
            return buttons;
        }
    }
}