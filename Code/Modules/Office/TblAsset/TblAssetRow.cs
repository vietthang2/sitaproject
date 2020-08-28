
namespace ECNET.Office.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Office"), TableName("[dbo].[tblAsset]")]
    [DisplayName("Tbl Asset"), InstanceName("Tbl Asset")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("dbo.tblAsset", Permission = "*")]//add thêm
    public sealed class TblAssetRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity, LookupInclude]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Name"), Size(100), NotNull, QuickSearch, LookupInclude]
        public String Name
        {
            get { return Fields.Name[this]; }
            set { Fields.Name[this] = value; }
        }

        [DisplayName("Code"), Size(50), NotNull, Unique, LookupInclude]
        public String Code
        {
            get { return Fields.Code[this]; }
            set { Fields.Code[this] = value; }
        }

        [DisplayName("Group"), ForeignKey("[dbo].[tblAssetGroup]", "Id"), LeftJoin("jGroup"), TextualField("GroupName"), LookupInclude]
        [LookupEditor(typeof(TblAssetGroupRow))]//Thêm
        public Int32? GroupId
        {
            get { return Fields.GroupId[this]; }
            set { Fields.GroupId[this] = value; }
        }

        [DisplayName("Group Name"), Expression("jGroup.[Name]")]
        public String GroupName
        {
            get { return Fields.GroupName[this]; }
            set { Fields.GroupName[this] = value; }
        }

        [DisplayName("Group Description"), Expression("jGroup.[Description]")]
        public String GroupDescription
        {
            get { return Fields.GroupDescription[this]; }
            set { Fields.GroupDescription[this] = value; }
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

        public TblAssetRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField Name;
            public StringField Code;
            public Int32Field GroupId;

            public StringField GroupName;
            public StringField GroupDescription;
        }
    }
}
