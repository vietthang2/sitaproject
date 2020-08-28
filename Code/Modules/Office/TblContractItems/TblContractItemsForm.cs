
namespace ECNET.Office.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Office.TblContractItems")]
    [BasedOnRow(typeof(Entities.TblContractItemsRow), CheckNames = true)]
    
    public class TblContractItemsForm
    {
        [Hidden]
        public Int32 ContractId { get; set; }
        public Int32 ItemId { get; set; }
        
        public String ItemUnit { get; set; }
        
        public Int32 ItemDataType { get; set; }
        public String Value { get; set; }
        [Hidden]
        public String ItemItemGroup { get; set; }
        [Hidden]
        public Int32 ContractTypeId { get; set; }
        

    }
}