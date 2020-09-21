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

namespace Sita.Modules.Default.TblFlight
{
    using MyRepository = Sita.Default.Endpoints.TblFlightController;
    using MyRow = Sita.Default.Entities.TblFlightRow;
    public class StoreFlight
    {
        public static void Save(DailyModel dailyModel)
        {
            // //Vi luu data manual dạng http request không có chứng thực nên cần đoạn này
            // (Dependency.Resolve<IAuthorizationService>() as ImpersonatingAuthorizationService).Impersonate("admin");

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
                //newFlight.Chute = dailyModel.Connect.Daily;
                //newFlight.LastChanged = dailyModel.Connect.Daily.Linecode;
                //newFlight.DateCreated = dailyModel.Connect.Daily.Linecode;
                //newFlight.UserCreated = dailyModel.Connect.Daily.Linecode;
                //newFlight.UserUpdate = dailyModel.Connect.Daily.Linecode;
                //newFlight.DateUpdated = dailyModel.Connect.Daily.Linecode;
                //newFlight.DDMM = da
                newFlight.YYYY = DateTime.Now.Year.ToString();
                try
                {
                    SaveRequest<MyRow> saveRequest = new SaveRequest<MyRow>();
                    
                    if (dailyModel.Connect.Daily.Action == "Insert")
                    {
                        saveRequest.Entity = newFlight;
                        new TblFlightController().Create(unitOfWork, saveRequest);
                    }
                    else if (dailyModel.Connect.Daily.Action == "Update")
                    {
                        saveRequest.Entity = newFlight;
                        new TblFlightController().Update(unitOfWork, saveRequest);
                    }
                    else
                    {
                        DeleteRequest deleteRequest = new DeleteRequest();
                        deleteRequest.EntityId = newFlight.Identify;
                        new TblFlightController().Delete(unitOfWork, deleteRequest);
                        saveRequest.Entity = newFlight;
                        new TblFlightController().Create(unitOfWork, saveRequest);
                    }


                }
                catch (Exception ex)
                {
                    Logging.Logger.Error("Save Flight :" + ex.Message);
                }
                unitOfWork.Commit();
            }

        }

        public string  MD5Identify(string indentify)
        {
            string StrIndentify = "";



            return StrIndentify;
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