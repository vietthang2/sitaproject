
namespace ECNET.Office.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Office"), TableName("[dbo].[tblContractPayment]")]
    [DisplayName("Tbl Contract Payment"), InstanceName("Tbl Contract Payment")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class TblContractPaymentRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Contract"), NotNull, ForeignKey("[dbo].[tblContract]", "Id"), LeftJoin("jContract"), TextualField("ContractNameOfOwner")]
        public Int32? ContractId
        {
            get { return Fields.ContractId[this]; }
            set { Fields.ContractId[this] = value; }
        }

        [DisplayName("Invoice No"), Size(50), QuickSearch]
        public String InvoiceNo
        {
            get { return Fields.InvoiceNo[this]; }
            set { Fields.InvoiceNo[this] = value; }
        }

        [DisplayName("Date Paid")]
        public DateTime? DatePaid
        {
            get { return Fields.DatePaid[this]; }
            set { Fields.DatePaid[this] = value; }
        }

        [DisplayName("Period"), Size(10)]
        public String Period
        {
            get { return Fields.Period[this]; }
            set { Fields.Period[this] = value; }
        }

        [DisplayName("Paid Amount"), Size(18), Scale(2)]
        public Decimal? PaidAmount
        {
            get { return Fields.PaidAmount[this]; }
            set { Fields.PaidAmount[this] = value; }
        }

        [DisplayName("Paid By"), Size(30)]
        public String PaidBy
        {
            get { return Fields.PaidBy[this]; }
            set { Fields.PaidBy[this] = value; }
        }

        [DisplayName("Created By"), Size(30), NotNull]
        public String CreatedBy
        {
            get { return Fields.CreatedBy[this]; }
            set { Fields.CreatedBy[this] = value; }
        }

        [DisplayName("Created Date"), NotNull]
        public DateTime? CreatedDate
        {
            get { return Fields.CreatedDate[this]; }
            set { Fields.CreatedDate[this] = value; }
        }

        [DisplayName("File Invoice"), Size(100)]
        public String FileInvoice
        {
            get { return Fields.FileInvoice[this]; }
            set { Fields.FileInvoice[this] = value; }
        }

        [DisplayName("File1"), Size(100)]
        public String File1
        {
            get { return Fields.File1[this]; }
            set { Fields.File1[this] = value; }
        }

        [DisplayName("File2"), Size(100)]
        public String File2
        {
            get { return Fields.File2[this]; }
            set { Fields.File2[this] = value; }
        }

        [DisplayName("File3"), Size(100)]
        public String File3
        {
            get { return Fields.File3[this]; }
            set { Fields.File3[this] = value; }
        }

        [DisplayName("File4"), Size(100)]
        public String File4
        {
            get { return Fields.File4[this]; }
            set { Fields.File4[this] = value; }
        }

        [DisplayName("File5"), Size(100)]
        public String File5
        {
            get { return Fields.File5[this]; }
            set { Fields.File5[this] = value; }
        }

        [DisplayName("Contract Name Of Owner"), Expression("jContract.[NameOfOwner]")]
        public String ContractNameOfOwner
        {
            get { return Fields.ContractNameOfOwner[this]; }
            set { Fields.ContractNameOfOwner[this] = value; }
        }

        [DisplayName("Contract Phone Of Owner"), Expression("jContract.[PhoneOfOwner]")]
        public String ContractPhoneOfOwner
        {
            get { return Fields.ContractPhoneOfOwner[this]; }
            set { Fields.ContractPhoneOfOwner[this] = value; }
        }

        [DisplayName("Contract Date Sign"), Expression("jContract.[DateSign]")]
        public DateTime? ContractDateSign
        {
            get { return Fields.ContractDateSign[this]; }
            set { Fields.ContractDateSign[this] = value; }
        }

        [DisplayName("Contract Type Id"), Expression("jContract.[TypeId]")]
        public Int32? ContractTypeId
        {
            get { return Fields.ContractTypeId[this]; }
            set { Fields.ContractTypeId[this] = value; }
        }

        [DisplayName("Contract File Contract Upload"), Expression("jContract.[FileContractUpload]")]
        public String ContractFileContractUpload
        {
            get { return Fields.ContractFileContractUpload[this]; }
            set { Fields.ContractFileContractUpload[this] = value; }
        }

        [DisplayName("Contract File1"), Expression("jContract.[File1]")]
        public String ContractFile1
        {
            get { return Fields.ContractFile1[this]; }
            set { Fields.ContractFile1[this] = value; }
        }

        [DisplayName("Contract File2"), Expression("jContract.[File2]")]
        public String ContractFile2
        {
            get { return Fields.ContractFile2[this]; }
            set { Fields.ContractFile2[this] = value; }
        }

        [DisplayName("Contract File3"), Expression("jContract.[File3]")]
        public String ContractFile3
        {
            get { return Fields.ContractFile3[this]; }
            set { Fields.ContractFile3[this] = value; }
        }

        [DisplayName("Contract File4"), Expression("jContract.[File4]")]
        public String ContractFile4
        {
            get { return Fields.ContractFile4[this]; }
            set { Fields.ContractFile4[this] = value; }
        }

        [DisplayName("Contract File5"), Expression("jContract.[File5]")]
        public String ContractFile5
        {
            get { return Fields.ContractFile5[this]; }
            set { Fields.ContractFile5[this] = value; }
        }

        [DisplayName("Contract File6"), Expression("jContract.[File6]")]
        public String ContractFile6
        {
            get { return Fields.ContractFile6[this]; }
            set { Fields.ContractFile6[this] = value; }
        }

        [DisplayName("Contract File7"), Expression("jContract.[File7]")]
        public String ContractFile7
        {
            get { return Fields.ContractFile7[this]; }
            set { Fields.ContractFile7[this] = value; }
        }

        [DisplayName("Contract Created By"), Expression("jContract.[CreatedBy]")]
        public String ContractCreatedBy
        {
            get { return Fields.ContractCreatedBy[this]; }
            set { Fields.ContractCreatedBy[this] = value; }
        }

        [DisplayName("Contract Created Date"), Expression("jContract.[CreatedDate]")]
        public DateTime? ContractCreatedDate
        {
            get { return Fields.ContractCreatedDate[this]; }
            set { Fields.ContractCreatedDate[this] = value; }
        }

        [DisplayName("Contract Updated By"), Expression("jContract.[UpdatedBy]")]
        public String ContractUpdatedBy
        {
            get { return Fields.ContractUpdatedBy[this]; }
            set { Fields.ContractUpdatedBy[this] = value; }
        }

        [DisplayName("Contract Updated Date"), Expression("jContract.[UpdatedDate]")]
        public DateTime? ContractUpdatedDate
        {
            get { return Fields.ContractUpdatedDate[this]; }
            set { Fields.ContractUpdatedDate[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.InvoiceNo; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public TblContractPaymentRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field ContractId;
            public StringField InvoiceNo;
            public DateTimeField DatePaid;
            public StringField Period;
            public DecimalField PaidAmount;
            public StringField PaidBy;
            public StringField CreatedBy;
            public DateTimeField CreatedDate;
            public StringField FileInvoice;
            public StringField File1;
            public StringField File2;
            public StringField File3;
            public StringField File4;
            public StringField File5;

            public StringField ContractNameOfOwner;
            public StringField ContractPhoneOfOwner;
            public DateTimeField ContractDateSign;
            public Int32Field ContractTypeId;
            public StringField ContractFileContractUpload;
            public StringField ContractFile1;
            public StringField ContractFile2;
            public StringField ContractFile3;
            public StringField ContractFile4;
            public StringField ContractFile5;
            public StringField ContractFile6;
            public StringField ContractFile7;
            public StringField ContractCreatedBy;
            public DateTimeField ContractCreatedDate;
            public StringField ContractUpdatedBy;
            public DateTimeField ContractUpdatedDate;
        }
    }
}
