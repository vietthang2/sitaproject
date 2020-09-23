using Serenity;
using Serenity.Abstractions;
using Serenity.Web;
using Sita.Default.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Sita.Default.Endpoints;
using Serenity.Services;
using Serenity.Data;
using Modules.Common;
using Sita.Modules.MSMQServices.DTO;
using System.Security.Cryptography;
using System.IO;
using System.Text;


namespace Sita.Modules.Default.TblBags
{
    using MyRepository = Sita.Default.Endpoints.TblBagsController;
    using MyRow = Sita.Default.Entities.TblFieldRow;
    
    public class StoreField
    {
        public static void Save(DailyModel dailyModel)
        {
            // //Vi luu data manual dạng http request không có chứng thực nên cần đoạn này
            (Dependency.Resolve<IAuthorizationService>() as ImpersonatingAuthorizationService).Impersonate("admin");

            if (dailyModel != null)
            {
                var connection = SqlConnections.NewFor<MyRow>();
                UnitOfWork unitOfWork = new UnitOfWork(connection);


                var newFlield = new TblFieldRow();
                newFlield.Name = "";
                newFlield.Instance = "";






                try
                {
                    //SaveRequest<MyRow> saveRequest = new SaveRequest<MyRow>();

                    //if (dailyModel.Connect.Daily.Action == "Insert")
                    //{

                    //    saveRequest.Entity = newFlight;
                    //    new TblFlightController().Create(unitOfWork, saveRequest);
                    //}
                    //else if (dailyModel.Connect.Daily.Action == "Update")
                    //{
                    //    //newFlight.UserUpdate = dailyModel.Connect.Daily.Linecode;
                    //    newFlight.DateUpdated = DateTime.Now;
                    //    saveRequest.Entity = newFlight;
                    //    new TblFlightController().Update(unitOfWork, saveRequest);
                    //}
                    //else
                    //{
                    //    newFlight.DateCreated = DateTime.Now;



                    //    DeleteRequest deleteRequest = new DeleteRequest();
                    //    deleteRequest.EntityId = newFlight.Identify;

                    //    var request = new ListRequest();
                    //    request.Criteria = new Criteria("Identify") == newFlight.Identify;
                    //    ListResponse<MyRow> rows = new MyRepository().List(connection, request);
                    //    if (rows.TotalCount > 0)
                    //        new TblFlightController().Delete(unitOfWork, deleteRequest);

                    //    saveRequest.Entity = newFlight;
                    //    new TblFlightController().Create(unitOfWork, saveRequest);
                    //}
                }
                catch (Exception ex)
                {
                    Logging.Logger.Error("Save Flight :" + ex.Message);
                }
                unitOfWork.Commit();
            }

        }
    }
}