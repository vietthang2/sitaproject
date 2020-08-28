
namespace ECNET.Office.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Office.TblContractItems")]
    [BasedOnRow(typeof(Entities.TblContractItemsRow), CheckNames = true)]
    public class TblContractItemsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 DetailID { get; set; }
       // public String ContractNameOfOwner { get; set; }
      
        
        [EditLink]
        public String ItemItemName { get; set; }
        public String ItemCode { get; set; }
        public String Value { get; set; }
        public String ItemUnit { get; set; }
        
    }
}