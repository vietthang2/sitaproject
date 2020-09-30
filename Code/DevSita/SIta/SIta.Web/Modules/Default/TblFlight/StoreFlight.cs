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
using Sita.Modules.Default.Common;

namespace Sita.Modules.Default.TblFlight
{
    using MyRepository = Sita.Default.Endpoints.TblFlightController;
    using MyRow = Sita.Default.Entities.TblFlightRow;

    using MyFieldRepository = Sita.Default.Endpoints.TblFieldController;
    using MyFieldRow = Sita.Default.Entities.TblFieldRow;
    public class StoreFlight
    {
        public static void Save(DailyModel dailyModel)
        {
            // //Vi luu data manual dạng http request không có chứng thực nên cần đoạn này
             (Dependency.Resolve<IAuthorizationService>() as ImpersonatingAuthorizationService).Impersonate("admin");

            if (dailyModel != null)
            {
                var connection = SqlConnections.NewFor<MyRow>();
                UnitOfWork unitOfWork = new UnitOfWork(connection);

                
                var newFlight = new TblFlightRow()  ;

                newFlight.Identify = Encrypte(dailyModel.Connect.Daily.Adi.ToString() + dailyModel.Connect.Daily.Linecode.ToString() + dailyModel.Connect.Daily.Number.ToString() + dailyModel.Connect.Daily.ScheduleDate.ToString());
                newFlight.Adi = dailyModel.Connect.Daily.Adi;
                newFlight.LineCode = dailyModel.Connect.Daily.Linecode;
                newFlight.Number = dailyModel.Connect.Daily.Number;
                newFlight.ScheduleDate = dailyModel.Connect.Daily.ScheduleDate;
                newFlight.SoftReplace = dailyModel.Connect.Daily.Softreplace;
                newFlight.SiteIata = dailyModel.Connect.Daily.SiteIata;
                newFlight.DateBoundảy = dailyModel.Connect.Daily.DateBoundary;
                newFlight.DateCreated = DateTime.Now;
                newFlight.UserCreated = "Admin";
                //newFlight.Chute = dailyModel.Connect.Daily;
                //newFlight.LastChanged = dailyModel.Connect.Daily.Linecode;


                newFlight.DDMM = Convert.ToDateTime(dailyModel.Connect.Daily.Field[0].Value).ToString("ddMM");
                newFlight.YYYY = Convert.ToDateTime(dailyModel.Connect.Daily.Field[0].Value).ToString("yyyy");

                



                try
                {
                    SaveRequest<MyRow> saveRequest = new SaveRequest<MyRow>();
                    SaveRequest<MyFieldRow> saveRequestField = new SaveRequest<MyFieldRow>();

                    if (dailyModel.Connect.Daily.Action == "Insert")
                    {
                        
                        saveRequest.Entity = newFlight;
                        new TblFlightController().Create(unitOfWork, saveRequest);

                        
                        foreach (var Field in dailyModel.Connect.Daily.Field)
                        {
                            var newField = new TblFieldRow();
                            newField.Id = Guid.NewGuid();
                            newField.Name = Field.Name;
                            newField.Instance = Field.Instance;
                            newField.Value = Field.Value.ToString();
                            newField.FlightRef = newFlight.LineCode.ToString() + newFlight.Number.ToString();
                            newField.FlightIndentify = newFlight.Identify;
                            newFlight.UserCreated = "Admin";
                            newFlight.DateCreated = DateTime.Now;
                            saveRequestField.Entity = newField;
                            new TblFieldController().Create(unitOfWork, saveRequestField);
                        }
                    }
                    else if (dailyModel.Connect.Daily.Action == "Update")
                    {
                        //newFlight.UserUpdate = dailyModel.Connect.Daily.Linecode;
                        newFlight.DateUpdated = DateTime.Now;
                        saveRequest.Entity = newFlight;
                        new TblFlightController().Update(unitOfWork, saveRequest);

                        foreach (var Field in dailyModel.Connect.Daily.Field)
                        {
                            var newField = new TblFieldRow();
                            newField.Name = Field.Name;
                            newField.Instance = Field.Instance;
                            newField.Value = Field.Value.ToString();
                            newField.FlightRef = newFlight.LineCode.ToString() + newFlight.Number.ToString();
                            newField.FlightIndentify = newFlight.Identify;

                            DeleteRequest deleteRequestField = new DeleteRequest();
                            deleteRequestField.EntityId = newField.FlightIndentify;
                            var requestField = new ListRequest();
                            requestField.Criteria = new Criteria("FlightIndentify") == newField.FlightIndentify;
                            ListResponse<MyFieldRow> rowsField = new MyFieldRepository().List(connection, requestField);
                            if (rowsField.TotalCount > 0)
                                new TblFieldController().Delete(unitOfWork, deleteRequestField);
                            break;
                        }

                        foreach (var Field in dailyModel.Connect.Daily.Field)
                        {
                            var newField = new TblFieldRow();
                            newField.Id = Guid.NewGuid();
                            newField.Name = Field.Name;
                            newField.Instance = Field.Instance;
                            newField.Value = Field.Value.ToString();
                            newField.FlightRef = newFlight.LineCode.ToString() + newFlight.Number.ToString();
                            newField.FlightIndentify = newFlight.Identify;

                            saveRequestField.Entity = newField;
                            new TblFieldController().Update(unitOfWork, saveRequestField);
                        }

                    }
                    else
                    {
                        newFlight.DateCreated = DateTime.Now;

                        

                        DeleteRequest deleteRequest = new DeleteRequest();
                        deleteRequest.EntityId = newFlight.Identify;
                        var request = new ListRequest();
                        request.Criteria = new Criteria("Identify") == newFlight.Identify;
                        ListResponse<MyRow> rows =  new MyRepository().List(connection, request);
                        if (rows.TotalCount > 0)
                            new TblFlightController().Delete(unitOfWork, deleteRequest);
                        
                        foreach (var Field in dailyModel.Connect.Daily.Field)
                        {
                            var newField = new TblFieldRow();
                            newField.Name = Field.Name;
                            newField.Instance = Field.Instance;
                            newField.Value = Field.Value.ToString();
                            newField.FlightRef = newFlight.LineCode.ToString() + newFlight.Number.ToString();
                            newField.FlightIndentify = newFlight.Identify;

                            DeleteRequest deleteRequestField = new DeleteRequest();
                            deleteRequestField.EntityId = newField.FlightIndentify;
                            var requestField = new ListRequest();
                            requestField.Criteria = new Criteria("FlightIndentify") == newField.FlightIndentify;
                            ListResponse<MyFieldRow> rowsField = new MyFieldRepository().List(connection, requestField);
                            if (rowsField.TotalCount > 0)
                            {
                                //rowsField.Entities.
                                foreach (var item in rowsField.Entities)
                                {
                                    deleteRequestField.EntityId = item.Id;
                                    new TblFieldController().Delete(unitOfWork, deleteRequestField);
                                }
                               
                            }

                            break;
                        }
                       

                        saveRequest.Entity = newFlight;
                        new TblFlightController().Create(unitOfWork, saveRequest);

                        foreach (var Field in dailyModel.Connect.Daily.Field)
                        {
                            var newField = new TblFieldRow();
                            newField.Id = Guid.NewGuid();
                            newField.Name = Field.Name;
                            newField.Instance = Field.Instance;
                            newField.Value = Field.Value.ToString();
                            newField.FlightRef = newFlight.LineCode.ToString() + newFlight.Number.ToString();
                            newField.FlightIndentify = newFlight.Identify;

                            saveRequestField.Entity = newField;
                            new TblFieldController().Create(unitOfWork, saveRequestField);
                        }
                    }
                }
                catch (Exception ex)
                {
                    Logging.Logger.Error("Save Flight :" + ex.Message);
                }
                unitOfWork.Commit();
            }

        }

        public static string Encrypte(string pString)
        {
            UTF32Encoding uTF32Encoding = new UTF32Encoding();
            byte[] bytes = uTF32Encoding.GetBytes(pString);
            MD5 mD = new MD5CryptoServiceProvider();
            byte[] inArray = mD.ComputeHash(bytes);
            return Convert.ToBase64String(inArray);
        }
    }

   
}