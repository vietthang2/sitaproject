
namespace ECNET.Office.Entities
{
    using ECNET.Administration;
    using ECNET.Modules.Common.BaseClass;
    using ECNET.Web.Modules.Office.Common;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Office"), TableName("[dbo].[tblStatus]")]
    [DisplayName("Tbl Status"), InstanceName("Tbl Status")]
    [ReadPermission(PermissionKeys.Status.View)]
    [ModifyPermission(PermissionKeys.Status.Modify)]
    [LookupScript("dbo.tblStatus", Permission = "*")]//add thêm
    public sealed class TblStatusRow : Row, IIdRow, INameRow, IAuditLog
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Next Status")]
        [LookupEditor(typeof(TblStatusRow), CascadeField = "TypeId", CascadeFrom = "TypeId"), LookupInclude]//Thêm
        public Int32? NextStatus
        {
            get { return Fields.NextStatus[this]; }
            set { Fields.NextStatus[this] = value; }
        }
        [DisplayName("Allow status")]
        [LookupEditor(typeof(TblStatusRow), Multiple = true, CascadeField = "TypeId", CascadeFrom = "TypeId"), NotMapped]
        [LinkingSetRelation(typeof(TblStatusDetailRow), "StatusId", "StatusDetailId")]
        public List<Int32> AllowList
        {
            get { return Fields.AllowList[this]; }
            set { Fields.AllowList[this] = value; }
        }
        [DisplayName("Allow status level2")]
        [LookupEditor(typeof(TblStatusRow), Multiple = true, CascadeField = "TypeId", CascadeFrom = "TypeId") , NotMapped]
        [LinkingSetRelation(typeof(TblStatusDetailLevel2Row), "StatusId", "StatusDetailId")]
        [Hint("Trạng thái dự án hoặc danh mục dự án được cho phép")]
        public List<Int32> AllowListLevel2
        {
            get { return Fields.AllowListLevel2[this]; }
            set { Fields.AllowListLevel2[this] = value; }
        }
        [DisplayName("Is Read only"), LookupInclude]
        public Boolean? IsReadOnly
        {
            get { return Fields.IsReadOnly[this]; }
            set { Fields.IsReadOnly[this] = value; }
        }
        [DisplayName("Is New"), LookupInclude]
        public Boolean? IsNew
        {
            get { return Fields.IsNew[this]; }
            set { Fields.IsNew[this] = value; }
        }
        [DisplayName("Name"), Size(256), NotNull, QuickSearch]
        public String Name
        {
            get { return Fields.Name[this]; }
            set { Fields.Name[this] = value; }
        }

        [DisplayName("Type Id"), LookupInclude]
        public StatusType? TypeId
        {
            get { return (StatusType?)Fields.TypeId[this]; }
            set { Fields.TypeId[this] = (Int32)value; }
        }

        [DisplayName("Created By"), Size(30), Hidden]
        public String CreatedBy
        {
            get { return Fields.CreatedBy[this]; }
            set { Fields.CreatedBy[this] = value; }
        }

        [DisplayName("Created Date"), Hidden]
        public DateTime? CreatedDate
        {
            get { return Fields.CreatedDate[this]; }
            set { Fields.CreatedDate[this] = value; }
        }

        [DisplayName("Updated By"), Size(30), Hidden]
        public String UpdatedBy
        {
            get { return Fields.UpdatedBy[this]; }
            set { Fields.UpdatedBy[this] = value; }
        }

        [DisplayName("Updated Date"), Hidden]
        public DateTime? UpdatedDate
        {
            get { return Fields.UpdatedDate[this]; }
            set { Fields.UpdatedDate[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Name; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public TblStatusRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field NextStatus;
            public StringField Name;
            public Int32Field TypeId;
            public StringField CreatedBy;
            public DateTimeField CreatedDate;
            public StringField UpdatedBy;
            public DateTimeField UpdatedDate;
            public BooleanField IsReadOnly;
            public BooleanField IsNew;
            public ListField<Int32> AllowList;
            public ListField<Int32> AllowListLevel2;
        }
    }
}
