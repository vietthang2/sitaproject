
namespace ECNET.Office.Repositories
{
    using ECNET.Web.Modules.Office.Response;
    using Newtonsoft.Json.Linq;
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Data;
    using System.Linq;
    using MyRow = Entities.TblPlaceOfBussinessRow;
    
    public class TblPlaceOfBussinessRepository
    {
        private static MyRow.RowFields fld { get { return MyRow.Fields; } }

        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MySaveHandler().Process(uow, request, SaveRequestType.Create);
        }
        
        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MySaveHandler().Process(uow, request, SaveRequestType.Update);
        }

        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request)
        {
            return new MyDeleteHandler().Process(uow, request);
        }

        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            return new MyRetrieveHandler().Process(connection, request);
        }

        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            return new MyListHandler().Process(connection, request);
        }
        public string GenNextCode(IDbConnection connection, GetNextNumberRequest request)
        {
            Field field = fld.CityId;
            var prefix = request.Prefix ?? "";
            long l;
            //var sqlstring = "select(select Count(*) from tblPlaceOfBussiness b where b.CityId = a.Id) as MaxNum, a.ECCode Code from tblCity a where a.Id = "+prefix;
            //var max = connection.Query<object>(sqlstring)
            //    .FirstOrDefault();
            //var MaxJson = JSON.Parse<GenCodeResp>(max.ToJson().ToString());
            var proName = "PR_GET_NEXT_PLACE_CODE";
            var MaxJson = connection.Query<GenCodeResp>(proName,
                param: new
                {
                    CityId = prefix
                },
                commandType: System.Data.CommandType.StoredProcedure).FirstOrDefault();
            var rsNum = MaxJson == null || MaxJson.MaxNum == null ||  
                !long.TryParse(MaxJson.MaxNum, out l) ? 1 : l + 1; ;
            var rs = MaxJson.Code + rsNum.ToString()
                .PadLeft(request.Length - 1, '0');
            return rs;
        }
        private class MySaveHandler : SaveRequestHandler<MyRow> { }
        private class MyDeleteHandler : DeleteRequestHandler<MyRow> { }
        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow> {
            protected override void OnReturn()
            {
                base.OnReturn();

                var mc = Entities.TblContractRow.Fields;
                try
                {
                    Row.ContractId = Connection.List<Entities.TblContractRow>(q => q
                    .SelectTableFields()
                    .Select(mc.Id)
                    .Where(mc.PlaceId == Row.Id.Value)).FirstOrDefault().Id;
                }
                catch (Exception e)
                {

                    
                } 
                
            }
        }
        private class MyListHandler : ListRequestHandler<MyRow> { }
       
    }
}