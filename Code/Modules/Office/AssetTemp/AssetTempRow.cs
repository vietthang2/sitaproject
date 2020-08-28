
namespace ECNET.Office.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Office"), TableName("[dbo].[tblAssetTemp]")]
    [DisplayName("Asset Temp"), InstanceName("Asset Temp")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class AssetTempRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("P Id"), NotNull]
        public Int32? PId
        {
            get { return Fields.PId[this]; }
            set { Fields.PId[this] = value; }
        }

        [DisplayName("Name"), Size(100), QuickSearch]
        public String Name
        {
            get { return Fields.Name[this]; }
            set { Fields.Name[this] = value; }
        }

        [DisplayName("Code"), Size(30)]
        public String Code
        {
            get { return Fields.Code[this]; }
            set { Fields.Code[this] = value; }
        }

        [DisplayName("Type")]
        public Int32? Type
        {
            get { return Fields.Type[this]; }
            set { Fields.Type[this] = value; }
        }

        [DisplayName("Has Contract")]
        public Boolean? HasContract
        {
            get { return Fields.HasContract[this]; }
            set { Fields.HasContract[this] = value; }
        }

        [DisplayName("Has Processed")]
        public Boolean? HasProcessed
        {
            get { return Fields.HasProcessed[this]; }
            set { Fields.HasProcessed[this] = value; }
        }

        [DisplayName("Created By"), Size(30)]
        public String CreatedBy
        {
            get { return Fields.CreatedBy[this]; }
            set { Fields.CreatedBy[this] = value; }
        }

        [DisplayName("Created Date")]
        public DateTime? CreatedDate
        {
            get { return Fields.CreatedDate[this]; }
            set { Fields.CreatedDate[this] = value; }
        }

        [DisplayName("Updated By"), Size(30)]
        public String UpdatedBy
        {
            get { return Fields.UpdatedBy[this]; }
            set { Fields.UpdatedBy[this] = value; }
        }

        [DisplayName("Updated Date")]
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

        public AssetTempRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field PId;
            public StringField Name;
            public StringField Code;
            public Int32Field Type;
            public BooleanField HasContract;
            public BooleanField HasProcessed;
            public StringField CreatedBy;
            public DateTimeField CreatedDate;
            public StringField UpdatedBy;
            public DateTimeField UpdatedDate;
        }
    }
}
