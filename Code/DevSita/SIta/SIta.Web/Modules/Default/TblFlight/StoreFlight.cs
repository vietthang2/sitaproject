﻿using Serenity;
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
        public static void Save(Daily dailyModel)
        {
            // //Vi luu data manual dạng http request không có chứng thực nên cần đoạn này
             (Dependency.Resolve<IAuthorizationService>() as ImpersonatingAuthorizationService).Impersonate("admin");

            if (dailyModel != null)
            {
                var connection = SqlConnections.NewFor<MyRow>();
                UnitOfWork unitOfWork = new UnitOfWork(connection);

                
                var newFlight = new TblFlightRow()  ;

                newFlight.Identify = Encrypte(dailyModel.Adi.ToString() + dailyModel.Linecode.ToString() + dailyModel.Number.ToString() + dailyModel.ScheduleDate.ToString());
                newFlight.Adi = dailyModel.Adi;
                newFlight.LineCode = dailyModel.Linecode;
                newFlight.Number = dailyModel.Number;
                newFlight.ScheduleDate = dailyModel.ScheduleDate;
                newFlight.SoftReplace = dailyModel.Softreplace;
                newFlight.SiteIata = dailyModel.SiteIata;
                newFlight.DateBoundary = dailyModel.DateBoundary;
                newFlight.DateCreated = DateTime.Now;
                newFlight.UserCreated = "Admin";
                var objectChute = dailyModel.Field.Where(s => s.Name == "chutes").ToList();
                foreach (var item in objectChute)
                {
                    try
                    {
                        if (item.Value.ToString().Length > 0)
                        {
                            newFlight.Chute = int.Parse(item.Value.ToString());
                        }
                    }
                    catch (Exception)
                    {
                        newFlight.Chute = null;
                    }
                }
                //try
                //{
                //    newFlight.Chute = int.Parse(dailyModel.Field.Where(s => s.Name == "chutes" && s.Value.ToString().Length>0).FirstOrDefault().Value.ToString());
                //}
                //catch (Exception ex)
                //{
                //    Logging.Logger.Information("MSMQ: chutes erros :" + ex);
                //    newFlight.Chute = 0;
                //}
                
                //newFlight.LastChanged = dailyModel.Connect.Daily.Linecode;


                newFlight.DDMM = Convert.ToDateTime(dailyModel.ScheduleDate).ToString("ddMM");
                newFlight.YYYY = Convert.ToDateTime(dailyModel.ScheduleDate).ToString("yyyy");

                



                try
                {
                    SaveRequest<MyRow> saveRequest = new SaveRequest<MyRow>();
                    SaveRequest<MyFieldRow> saveRequestField = new SaveRequest<MyFieldRow>();

                    if (dailyModel.Action == "Insert")
                    {
                        
                        saveRequest.Entity = newFlight;
                        new TblFlightController().Create(unitOfWork, saveRequest);

                        
                        foreach (var Field in dailyModel.Field)
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
                    else if (dailyModel.Action == "Update")
                    {
                        //newFlight.UserUpdate = dailyModel.Connect.Daily.Linecode;
                        newFlight.DateUpdated = DateTime.Now;
                        newFlight.LastChanged= DateTime.Now;
                        saveRequest.Entity = newFlight;
                        new TblFlightController().Update(unitOfWork, saveRequest);

                        foreach (var Field in dailyModel.Field)
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

                        foreach (var Field in dailyModel.Field)
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
                    else if (dailyModel.Action == "Delete")
                    {
                     
                        var request = new ListRequest();
                        request.Criteria = new Criteria("Identify") == newFlight.Identify;
                        ListResponse<MyRow> rows = new MyRepository().List(connection, request);
                        if (rows.TotalCount > 0)
                        {
                            for (int i = 0; i < rows.TotalCount; i++)
                            {
                                DeleteRequest deleteRequest = new DeleteRequest();
                                deleteRequest.EntityId = rows.Entities[i];
                                new TblFlightController().Delete(unitOfWork, deleteRequest);
                                Logging.Logger.Information("MSMQ: delete Flight :" + deleteRequest.EntityId);
                            }
                            
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
                        
                        foreach (var Field in dailyModel.Field)
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

                        foreach (var Field in dailyModel.Field)
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