/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace ECNET.Office {

    @Serenity.Decorators.panel()
    export class ProjectItemsEditorDialog extends Common.GridEditorDialog<TblProjectItemRow> {
        protected getFormKey() { return TblProjectItemForm.formKey; }
        
        protected getLocalTextPrefix() { return TblProjectItemRow.localTextPrefix; }
        public projetcId: number;
        public statusOld: number;
        public viewMode: boolean;// phân biệt trong dự án hoặc form riêng
        public editFrom: number;// 1: Từ form tạo mới; 2: Từ form điều chỉnh 
        protected form: TblProjectItemForm;

        constructor() {
            super();
            this.form = new TblProjectItemForm(this.idPrefix);
            var regex = /^([a-zA-Z0\-\,\/\\\\(\)\)\.-9ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\s]+)$/;
            var regexSpecial = /[!@#$%^&*(),.?":{}|<>]/;
            var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            var mesSpecial = "Không nhập ký tự đặc biệt";
            this.form.ToDate.addValidationRule(this.uniqueName, e => {
                var fromDate = this.form.FromDate.value;
                if (this.form.ToDate.value <= fromDate) {
                    return "Vui lòng nhập ngày kết thúc hợp đồng lớn hơn ngày bắt đầu.";
                }
            });
            this.form.ToDate.change(e => {
                try {
                    var fromDate = Date.parse(this.form.FromDate.value);
                    var toDate = Date.parse(this.form.ToDate.value);
                    var days = Math.abs(Math.ceil((toDate - fromDate) / 86400000));
                    this.form.TotalDays.value = days;
                } catch (e) {

                }
            });
            this.form.Decription.addValidationRule(this.uniqueName, e => {
                if (!(regex.test(e.val())))
                    return mesSpecial;
            });
            this.form.Note.addValidationRule(this.uniqueName, e => {
                if (!(regex.test(e.val())))
                    return mesSpecial;
            });
            this.form.Name.addValidationRule(this.uniqueName, e => {
                if (!(regex.test(e.val())))
                    return mesSpecial;
            });
        }
        loadEntity(entity: TblContractScheduleRow) {
            super.loadEntity(entity);
            this.form.ProjectId.value = this.projetcId ? this.projetcId.toString() : null;
            


        }
        afterLoadEntity() {
            super.afterLoadEntity();
            this.statusOld = parseInt(this.form.Status.value);
            let isCheck: boolean;
            this.form.Status.change(e => {

                let status: ECNET.Office.TblStatusDetailRow;
                let old: number;
                old = this.statusOld;
                isCheck = false;
                var newValue = parseInt(this.form.Status.value);
                try {
                    status = Q.tryFirst(ECNET.Office.TblStatusDetailRow.getLookup().items,
                        x => (x.StatusId === old && x.StatusDetailId == newValue));

                }
                catch (e1) {
                    status = null;
                }
                if ((status == "undefined" || status == null) && isCheck === false) {
                    //Q.alert('Chọn trạng thái không đúng');
                    Q.alert('Trạng thái hiện tại không cho chuyển về trạng thái ' + Q.tryFirst(ECNET.Office.TblStatusRow.getLookup().items, x => x.Id == newValue).Name);
                    //return false;
                    isCheck = true;
                    this.form.Status.value = this.statusOld.toString();
                    return;
                }
                else if (isCheck === false) {
                    var statusLv2 = ECNET.Office.TblStatusDetailLevel2Row.getLookup().items.filter(x => (x.StatusId === newValue));
                    var project = ECNET.Office.TblProjectRow.getLookup().items.filter(e1 => e1.Id === parseInt( this.form.ProjectId.value));

                    var isCheckChild = false;
                    var isCount = 0;
                    if (project.length > 0) {
                        project.forEach(function (value) {
                            isCheckChild = statusLv2.some(i => i.StatusDetailId == value.StatusId);
                            if (isCheckChild == false)
                                isCount++;
                                return;

                        });
                    }

                    if (isCount>0 && project.length > 0) {
                        Q.alert('Chọn trạng thái không! Kiểm tra lại trạng thái dự án');
                        //return false;
                        isCheck = true;
                        //e.result = this.statusOld.toString();
                        this.form.Status.value = this.statusOld.toString();
                        e.stopPropagation();
                        
                        return;


                    }
                }



            });
            //if (this.editFrom == 1) {
            //    if (this.statusOld > 0) {
            //        var statusCurrent = Q.first(ECNET.Office.TblStatusRow.getLookup().items,
            //            x => (x.Id === this.statusOld));
            //        if (statusCurrent.IsReadOnly == true) {
            //            this.set_readOnly(true);
            //        }
            //    }
            //}
           
            if (this.statusOld > 0) {
                var statusCurrent = Q.first(ECNET.Office.TblStatusRow.getLookup().items,
                    x => (x.Id === this.statusOld));
                if (statusCurrent.IsReadOnly == true) {
                    this.set_readOnly(true);
                }
            }
            //if (this.isEditMode()) {

            //    this.set_readOnly(true);
            //    this.deleteButton.removeClass("disabled");

            //}
            if (this.editFrom == 1) {
                this.form.Status.readOnly = false;
            }
            else {
                this.form.Status.readOnly = true;
            }
           
            
        }
        
        
    }
}