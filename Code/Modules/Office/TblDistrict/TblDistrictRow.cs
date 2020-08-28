
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

    [ConnectionKey("Default"), Module("Office"), TableName("[dbo].[tblDistrict]")]
    [DisplayName("District"), InstanceName("Tbl District")]
    [ReadPermission(PermissionKeys.District.View)]
    [ModifyPermission(PermissionKeys.District.Modify)]
    [DeletePermission(PermissionKeys.District.Delete)]
    [LookupScript("dbo.tblDistrict", Permission = "*")]//add thêm
    public sealed class TblDistrictRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("City"), NotNull, ForeignKey("[dbo].[tblCity]", "Id"), LeftJoin("jCity"), TextualField("CityName"), LookupInclude]
        [LookupEditor(typeof(TblCityRow))]//Thêm
        public Int32? CityId
        {
            get { return Fields.CityId[this]; }
            set { Fields.CityId[this] = value; }
        }
        [DisplayName("Code"), Size(30), NotNull, QuickSearch]
        public String Code
        {
            get { return Fields.Code[this]; }
            set { Fields.Code[this] = value; }
        }
        [DisplayName("Name"), Size(100), NotNull, QuickSearch]
        public String Name
        {
            get { return Fields.Name[this]; }
            set { Fields.Name[this] = value; }
        }
        [DisplayName("EnName"), Size(100), QuickSearch]
        public String EnName
        {
            get { return Fields.EnName[this]; }
            set { Fields.EnName[this] = value; }
        }

        [DisplayName("City Name"), Expression("jCity.[Name]")]
        public String CityName
        {
            get { return Fields.CityName[this]; }
            set { Fields.CityName[this] = value; }
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

        public TblDistrictRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field CityId;
            public StringField Name;
            public StringField Code;
            public StringField EnName;
            public StringField CityName;
        }
    }
}
