
namespace ECNET.Office.Endpoints
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System.Data;
    using Microsoft.AspNetCore.Mvc;
    using MyRepository = Repositories.TblProjectRepository;
    using MyRow = Entities.TblProjectRow;
    using System;
    using ECNET.Office.Entities;
    using Serenity.Reporting;
    using Serenity.Web;
    using ECNET.Web.Modules.Office.Common;
    using System.Collections.Generic;
    using ECNET.Web.Modules.Common.DTO.Response;
    using System.Linq;
    using Newtonsoft.Json;
    using ECNET.Web.Modules.Common.DTO;

    [Route("Services/Office/TblProject/[action]")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class TblProjectController : ServiceEndpoint
    {
        [HttpPost, AuthorizeCreate(typeof(MyRow))]
        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            request.Entity.CreatedBy = ((UserDefinition)Serenity.Authorization.UserDefinition).Username;
            request.Entity.CreatedDate = DateTime.Now;
            request.Entity.Code = GetProjectCode(uow.Connection);
            request.Entity.IsUse = 1;
            var c = TblStatusRow.Fields;
            var statusnew = uow.Connection.TryFirst<TblStatusRow>(q => q
                        .Select(c.Id)
                        .Where(c.IsNew == 1 && c.TypeId== (Int32)StatusType.Project));
            request.Entity.StatusId = statusnew.Id;
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
            BaseCriteria c = new Criteria("IsUse")==1;
            request.Criteria = c;



            var resp=new MyRepository().List(connection, request);
            return resp;
        }
        public string GetProjectCode(IDbConnection connection)
        {
            return new MyRepository().GetProjectCode(connection);
        }
        public FileContentResult ListExcel(IDbConnection connection, ListRequest request)
        {
            var data = List(connection, request).Entities;
            var report = new DynamicDataReport(data, request.IncludeColumns, typeof(Columns.TblProjectColumns));
            var bytes = new ReportRepository().Render(report);
            return ExcelContentResult.Create(bytes, "Danh_Sach_Du_An_" +
                DateTime.Now.ToString("yyyyMMdd_HHmmss") + ".xlsx");
        }
        [HttpPost]
        public ActionResult GetProjectTimelines(int projectId)
        {
            var data = new List<PorjectTimelinesResp>();
            try
            {

                var proName4 = "PR_GET_PROJECTTIMELINE";
                var connect = SqlConnections.NewByKey("Default");

                data = connect.Query<PorjectTimelinesResp>(proName4,
                     param: new
                     {
                         ProjectId = projectId
                     },
                     commandType: System.Data.CommandType.StoredProcedure).ToList();
                foreach (var item in data)
                {
                    item.body = JsonConvert.DeserializeObject<List<Body>>(item.jbody);
                }

                return Json(data);

            }
            catch (Exception a)
            {
                Log.Error(a.Message);
                return Json(data);
            }
        }

    }
}
