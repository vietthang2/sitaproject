
namespace ECNET
{
    using Serenity.Services;
    using System;
    using System.Collections.Generic;

    public class ContractCancelRequest : ServiceRequest
    {
        public String Reason { get; set; }
        public String Id { get; set; }
    }

    public class ContractCancelResponse : ServiceResponse
    {
        public int Inserted { get; set; }
        public int Updated { get; set; }
        public string BatchNo { get; set; }
        public List<string> ErrorList { get; set; }
    }
}