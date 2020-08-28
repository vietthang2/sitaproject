
namespace ECNET.Office.Entities
{
    using ECNET.Administration;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Office"), TableName("[dbo].[tblArea]")]
    [DisplayName("Area"), InstanceName("Area")]
   
    [LookupScript("dbo.TblAreaRow", Permission = "*")]//add thêm
    [ReadPermission(PermissionKeys.Area.View)]
    [ModifyPermission(PermissionKeys.Area.Modify)]
    [DeletePermission(PermissionKeys.Area.Delete)]
    public sealed class TblAreaRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Code"), Size(10), NotNull, QuickSearch,LookupInclude]
        public String Code
        {
            get { return Fields.Code[this]; }
            set { Fields.Code[this] = value; }
        }
        [DisplayName("Branch Code"), Size(30), NotNull, QuickSearch, ForeignKey("[dbo].[tblBranch]", "Code"), LeftJoin("jbranch"), TextualField("Name")]
        [LookupEditor(typeof(TblBranchRow))]//Thêm
        public String BranchCode
        {
            get { return Fields.BranchCode[this]; }
            set { Fields.BranchCode[this] = value; }
        }
        //[DisplayName("Branch Name"), Expression("jbranch.[Name]")]
        //public String BranchName
        //{
        //    get { return Fields.BranchName[this]; }
        //    set { Fields.BranchName[this] = value; }
        //}

        [DisplayName("Name"), Size(100), LookupInclude]
        public String Name
        {
            get { return Fields.Name[this]; }
            set { Fields.Name[this] = value; }
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

        public TblAreaRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField Code;
            public StringField BranchCode;
           // public StringField BranchName; 
            public StringField Name;
        }
    }
}
