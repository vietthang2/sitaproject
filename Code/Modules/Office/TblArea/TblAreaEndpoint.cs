
namespace ECNET.Office.Endpoints
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System.Data;
    using Microsoft.AspNetCore.Mvc;
    using MyRepository = Repositories.TblAreaRepository;
    using MyRow = Entities.TblAreaRow;
    using ECNET.Office.Entities;

    [Route("Services/Office/TblArea/[action]")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class TblAreaController : ServiceEndpoint
    {
        [HttpPost, AuthorizeCreate(typeof(MyRow))]
        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            var s = TblBranchRow.Fields;
            var branchRow = uow.Connection.TryFirst<TblBranchRow>(q => q
                        .Select(s.Code)
                        .Where(s.Id == request.Entity.BranchCode));
            request.Entity.BranchCode = branchRow.Code;
            return new MyRepository().Create(uow, request);
        }

        [HttpPost, AuthorizeUpdate(typeof(MyRow))]
        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            var s = TblBranchRow.Fields;
            var branchRow = uow.Connection.TryFirst<TblBranchRow>(q => q
                        .Select(s.Code)
                        .Where(s.Id == request.Entity.BranchCode));
            request.Entity.BranchCode = branchRow.Code;
            return new MyRepository().Update(uow, request);
        }
 
        [HttpPost, AuthorizeDelete(typeof(MyRow))]
        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request)
        {
            return new MyRepository().Delete(uow, request);
        }

        [HttpPost]
        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            
            var resp= new MyRepository().Retrieve(connection, request);
            var s = TblBranchRow.Fields;
            var branchRow = connection.TryFirst<TblBranchRow>(q => q
                        .Select(s.Id)
                        .Where(s.Code == resp.Entity.BranchCode));
            if(branchRow!=null)
            resp.Entity.BranchCode = branchRow.Id.ToString();
            return resp;
        }

        [HttpPost]
        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            return new MyRepository().List(connection, request);
        }
    }
}
