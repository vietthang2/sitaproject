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

namespace Sita.Modules.Default.TblBags
{
    using MyRepository = Sita.Default.Endpoints.TblBagsController;
    using MyRow = Sita.Default.Entities.TblBagsRow;
    
    public class  StoreBag
    {
        public static void Save(string mess)
        {
            //Vi luu data manual dạng http request không có chứng thực nên cần đoạn này
            (Dependency.Resolve<IAuthorizationService>() as ImpersonatingAuthorizationService).Impersonate("admin");
            var ObjectData=mess.Length>0 ? mess.Split(Convert.ToChar(".")): null;
            if (ObjectData.Length > 0)
            {
                var connection = SqlConnections.NewFor<MyRow>();
                UnitOfWork unitOfWork = new UnitOfWork(connection);
                for (int i = 0; i < ObjectData.Length; i++)
                {


                    if (ObjectData[i].Substring(0, 2) == "N/")
                    {
                        var newBagtag = new TblBagsRow();
                        newBagtag.BaggageTag = ObjectData[i].Substring(2, 10);
                        newBagtag.FlightRef = Array.Find(ObjectData, element => element.StartsWith("F/", StringComparison.Ordinal)).Substring(2, 6);
                        newBagtag.Bsm = mess;
                        newBagtag.Processed = false;
                        newBagtag.TimeRcvBsm = DateTime.Now;
                        newBagtag.DDMM = DateTime.Now.ToString("ddMM");
                        newBagtag.YYYY = DateTime.Now.Year.ToString();

                        try
                        {
                            SaveRequest<MyRow> saveRequest = new SaveRequest<MyRow>();
                            saveRequest.Entity = newBagtag;
                            new TblBagsController().Create(unitOfWork, saveRequest);
                           
                            //connection.Insert<MyRow>(newBagtag);
                        }
                        catch (Exception ex)
                        {
                            //new throw();
                            //Update lai
                            Logging.Logger.Error("Luu Bag tag:" + ex.Message);

                        }
                    }
                }
                unitOfWork.Commit();
            }

            
             //Mở lại bình thường
             (Dependency.Resolve<IAuthorizationService>() as ImpersonatingAuthorizationService).UndoImpersonate();

        }
    }
}