
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

    [ConnectionKey("Default"), Module("Office"), TableName("[dbo].[tblBranch]")]
    [DisplayName("Branch"), InstanceName("Branch")]
    [ReadPermission(PermissionKeys.Branch.View)]
    [ModifyPermission(PermissionKeys.Branch.Modify)]
    [DeletePermission(PermissionKeys.Branch.Delete)]
    [LookupScript("[dbo].[tblBranch]",Permission ="*")]
    public sealed class TblBranchRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

       
        [DisplayName("Code"), Size(10), NotNull]
        public String Code
        {
            get { return Fields.Code[this]; }
            set { Fields.Code[this] = value; }
        }

        [DisplayName("Name"), Size(100), NotNull]
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

        public TblBranchRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            
            public StringField Code;
            public StringField Name;
        }
    }
}
