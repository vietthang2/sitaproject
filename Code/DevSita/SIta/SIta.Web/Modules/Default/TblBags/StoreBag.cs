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
                for (int i = 0; i < ObjectData.Length; i++)
                {
                    if (ObjectData[i].Substring(0, 1) == "N")
                    {
                        var newBagtag = new TblBagsRow();
                        var connection = SqlConnections.NewFor<MyRow>();

                        newBagtag.BaggageTag = "";//Lấy chuổi 
                        //.....
                        // Gán thêm các giá trị khác
                        //
                        connection.Insert<MyRow>(newBagtag);
                        
                    }
                }
            }
           

             //Mở lại bình thường
             (Dependency.Resolve<IAuthorizationService>() as ImpersonatingAuthorizationService).UndoImpersonate();

        }
    }
}