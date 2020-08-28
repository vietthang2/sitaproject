
namespace ECNET
{
    using Serenity.Services;

    public class GetNextNumberRequest : ServiceRequest
    {
        public string Prefix { get; set; }
        public int Length { get; set; }
    }
    public class GetNextNumberContractRequest : ServiceRequest
    {
        public int Length { get; set; }
        public int PlaceId { get; set; }
        public string PlaceCode { get; set; }
        public int ContractTypeId { get; set; }
    }
    public class GetNextNumberResponse : ServiceResponse
    {
        public long Number { get; set; }
        public string Serial { get; set; }
    }
    public class PrintContractRequest: ServiceRequest
    {
        public int ContractId { get; set; }
    }
}