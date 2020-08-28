
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

    [ConnectionKey("Default"), Module("Office"), TableName("[dbo].[tblWards]")]
    [DisplayName("Wards"), InstanceName("Wards")]
    [ReadPermission(PermissionKeys.Wards.View)]
    [ModifyPermission(PermissionKeys.Wards.Modify)]
    [DeletePermission(PermissionKeys.Wards.Delete)]
    [LookupScript("dbo.tblWards",Permission ="*")]//add thêm
    public sealed class TblWardsRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), PrimaryKey, Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }


        [DisplayName("District"), NotNull, ForeignKey("[dbo].[tblDistrict]", "Id"), LeftJoin("jDistrict"), TextualField("DistrictName"), LookupInclude]
        [LookupEditor(typeof(TblDistrictRow))]//Thêm
        public Int32? DistrictId
        {
            get { return Fields.DistrictId[this]; }
            set { Fields.DistrictId[this] = value; }
        }

        [DisplayName("Name"), Size(100), NotNull, QuickSearch]
        public String Name
        {
            get { return Fields.Name[this]; }
            set { Fields.Name[this] = value; }
        }
        [DisplayName("Code"), Size(30), NotNull, QuickSearch]
        public String Code
        {
            get { return Fields.Code[this]; }
            set { Fields.Code[this] = value; }
        }


        [DisplayName("En Name"), Size(100)]
        public String EnName
        {
            get { return Fields.EnName[this]; }
            set { Fields.EnName[this] = value; }
        }

        [DisplayName("District City Id"), Expression("jDistrict.[CityId]")]
        public Int32? DistrictCityId
        {
            get { return Fields.DistrictCityId[this]; }
            set { Fields.DistrictCityId[this] = value; }
        }

        [DisplayName("District Name"), Expression("jDistrict.[Name]")]
        public String DistrictName
        {
            get { return Fields.DistrictName[this]; }
            set { Fields.DistrictName[this] = value; }
        }

        [DisplayName("District En Name"), Expression("jDistrict.[EnName]")]
        public String DistrictEnName
        {
            get { return Fields.DistrictEnName[this]; }
            set { Fields.DistrictEnName[this] = value; }
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

        public TblWardsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field DistrictId;
            public StringField Name;
            public StringField Code;
            public StringField EnName;

            public Int32Field DistrictCityId;
            public StringField DistrictName;
            public StringField DistrictEnName;
        }
    }
}
