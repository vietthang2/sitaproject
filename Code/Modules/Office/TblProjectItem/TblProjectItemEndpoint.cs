
namespace ECNET.Office.Endpoints
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System.Data;
    using Microsoft.AspNetCore.Mvc;
    using MyRepository = Repositories.TblProjectItemRepository;
    using MyRow = Entities.TblProjectItemRow;
    using System;

    [Route("Services/Office/TblProjectItem/[action]")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class TblProjectItemController : ServiceEndpoint
    {
        [HttpPost, AuthorizeCreate(typeof(MyRow))]
        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            request.Entity.CreatedBy = ((UserDefinition)Serenity.Authorization.UserDefinition).Username;
            request.Entity.CreatedDate = DateTime.Now;
            request.Entity.IsUse = 1;
            return new MyRepository().Create(uow, request);
        }

        [HttpPost, AuthorizeUpdate(typeof(MyRow))]
        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            request.Entity.UpdatedBy = ((UserDefinition)Serenity.Authorization.UserDefinition).Username;
            request.Entity.UpdatedDate = DateTime.Now;
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
         
            return new MyRepository().Retrieve(connection, request);
        }

        [HttpPost]
        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            BaseCriteria c = new Criteria("IsUse") == 1;
            request.Criteria = c;
            return new MyRepository().List(connection, request);
        }
    }
}
