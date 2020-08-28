
namespace ECNET.Office {

    @Serenity.Decorators.registerClass()
    export class TblAssignAssetToPlaceDialog extends Serenity.EntityDialog<TblAssignAssetToPlaceRow, any> {
        protected getFormKey() { return TblAssignAssetToPlaceForm.formKey; }
        protected getIdProperty() { return TblAssignAssetToPlaceRow.idProperty; }
        protected getLocalTextPrefix() { return TblAssignAssetToPlaceRow.localTextPrefix; }
        protected getNameProperty() { return TblAssignAssetToPlaceRow.nameProperty; }
        protected getService() { return TblAssignAssetToPlaceService.baseUrl; }
        protected getDeletePermission() { return TblAssignAssetToPlaceRow.deletePermission; }
        protected getInsertPermission() { return TblAssignAssetToPlaceRow.insertPermission; }
        protected getUpdatePermission() { return TblAssignAssetToPlaceRow.updatePermission; }

        protected form = new TblAssignAssetToPlaceForm(this.idPrefix);

    }
}