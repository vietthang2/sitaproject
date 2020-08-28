
namespace ECNET.Office.Repositories
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Data;
    using System.Linq;
    using ECNET.Web.Modules.Office.Response;
    using MyRow = Entities.TblContractRow;

    public class TblContractRepository
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

        private class MySaveHandler : SaveRequestHandler<MyRow> {
            protected override void AfterSave()
            {
                base.AfterSave();
                new SqlUpdate("tblPlaceOfBussiness") // prefer fld.TableName
               .Set("ContractId", Request.Entity.Id) // prefer fld.Prescribed
               .Where(new Criteria("Id=" + Request.Entity.PlaceId)) 
               .Execute(Connection, ExpectedRows.ZeroOrOne);

                if (Row.ListDetail != null)
                {
                    var mc = Entities.TblContractItemsRow.Fields;
                    var oldList = IsCreate ? null :
                        Connection.List<Entities.TblContractItemsRow>(
                            mc.ContractId == this.Row.Id.Value);

                    new Common.DetailListSaveHandler<Entities.TblContractItemsRow>(
                        oldList, Row.ListDetail,
                        x => x.ContractId = Row.Id.Value).Process(this.UnitOfWork);
                }
            }
           

        }
        private class MyDeleteHandler : DeleteRequestHandler<MyRow> {

            protected override void OnBeforeDelete()
            {
                base.OnBeforeDelete();

                var mc = Entities.TblContractItemsRow.Fields;
                foreach (var detailID in Connection.Query<Int32>(
                    new SqlQuery()
                        .From(mc)
                        .Select(mc.ContractId)
                        .Where(mc.ContractId == Row.Id.Value)))
                {
                    new DeleteRequestHandler<Entities.TblContractItemsRow>().Process(this.UnitOfWork,
                        new DeleteRequest
                        {
                            EntityId = detailID
                        });
                }
            }
        }
        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow> {
            //protected override void OnReturn()
            //{
            //    base.OnReturn();
            //    if (Row.TotalContractAmt != null)
            //    {
            //        Row.ContractAmtString = Util.Util.DocTien(Convert.ToDecimal(Row.TotalContractAmt));
            //    }
                
            //    //var mc = Entities.TblContractItemsRow.Fields;
            //    //Row.ListDetail = Connection.List<Entities.TblContractItemsRow>(q => q
            //    //    .SelectTableFields()
            //    //    .Select(mc.ContractId)
            //    //    .Where(mc.ContractId == Row.Id.Value));
            //}
        }
        private class MyListHandler : ListRequestHandler<MyRow> { }
        public string GenNextCode(IDbConnection connection, GetNextNumberContractRequest request)
        {
            Field field = fld.CityId;
            //var prefix = request.Prefix ?? "";
            
            var proName = "PR_GET_MAX_CONTRACT_CODE";
            var data = connection.Query<GenContractCodeResp>(proName,
                param: new
                {
                    PlaceId = request.PlaceId,
                    ContractTypeId = request.ContractTypeId
                },
                commandType: System.Data.CommandType.StoredProcedure).FirstOrDefault();

            //var max = connection.Query<object>(sqlstring)
            //    .FirstOrDefault();
            
            //var rsNum = data == null || data.MaxNum == null ||
            //    !long.TryParse(data.MaxNum, out l) ? 1 : l + 1; ;
            //var rs = data.Code + rsNum.ToString()
            //    .PadLeft(request.Length - 1, '0').Trim();

            var prefix = data.ContractCode;
            var code = data.Code + "/" + DateTime.Now.Year + "/" + prefix;
            return code;
        }
        public bool AutoCreateScheduleContract(IDbConnection connection, int contractId)
        {
            var proName = "PR_GEN_CONTRACT_SCHEDULE";
            var data = connection.Query<GenScheduleResp>(proName,
                param: new
                {
                    ContractId = contractId
                    
                },
                commandType: System.Data.CommandType.StoredProcedure).FirstOrDefault();
            if (data.result == 1)
            {
                return true;
            }
            else return false;
        }
    }
}