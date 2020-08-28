
namespace ECNET.Office.Endpoints
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System.Data;
    using Microsoft.AspNetCore.Mvc;
    using MyRepository = Repositories.TblPlaceOfBussinessRepository;
    using MyRow = Entities.TblPlaceOfBussinessRow;
    using MasterRepository = Repositories.TblApprovalCenterRepository;
    using MasterRow = Entities.TblApprovalCenterRow;
    using System;
    using ECNET.Web.Modules.Office.Common;
    using Serenity.Reporting;
    using Serenity.Web;
    using OfficeOpenXml;
    using System.IO;
    using ECNET.Office.Entities;
    using System.Collections.Generic;
    using ECNET.Office.Repositories;
    using System.Globalization;
    using System.Net.Mime;

    [Route("Services/Office/TblPlaceOfBussiness/[action]")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class TblPlaceOfBussinessController : ServiceEndpoint
    {
        
        [HttpPost, AuthorizeCreate(typeof(MyRow))]
        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            GetNextNumberRequest reqGenCode = new GetNextNumberRequest { Length = 5, Prefix = request.Entity.CityId.ToString() };
           
            request.Entity.Code = GetNextNumber(uow.Connection, reqGenCode);
            request.Entity.CreatedBy = ((UserDefinition)Serenity.Authorization.UserDefinition).Username;
            request.Entity.CreatedDate = DateTime.Now;
            request.Entity.Status = Status.New;
            var resp = new MyRepository().Create(uow, request);
            
            return resp;
        }

        [HttpPost, AuthorizeUpdate(typeof(MyRow))]
        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            request.Entity.UpdatedBy = ((UserDefinition)Serenity.Authorization.UserDefinition).Username;
            request.Entity.UpdateDate = DateTime.Now;

            var resp= new MyRepository().Update(uow, request);
            return resp;
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
            return new MyRepository().List(connection, request);
        }
        public string GetNextNumber(IDbConnection connection, GetNextNumberRequest request)
        {
            return new MyRepository().GenNextCode(connection, request);
        }
        public FileContentResult ListExcel(IDbConnection connection, ListRequest request)
        {
            var data = List(connection, request).Entities;
            var report = new DynamicDataReport(data, request.IncludeColumns, typeof(Columns.TblPlaceOfBussinessColumns));
            var bytes = new ReportRepository().Render(report);
            return ExcelContentResult.Create(bytes, "Danh_Sach_Mat_Bang_" +
                DateTime.Now.ToString("yyyyMMdd_HHmmss") + ".xlsx");
        }
        [HttpPost]
        public ExcelImportResponse ExcelImport(IUnitOfWork uow, ExcelImportRequest request)
        {
            int cxWith = 2;
            int cxTotalArea = cxWith + 1;
            int cxTotalUse= cxTotalArea + 1;//add
            int cxDescription = cxTotalUse + 1;//add
            int cxBranch = cxDescription + 1; //add
            int cxAddress = cxBranch + 1;
            int cxCity = cxAddress + 1;
            int cxDistrict = cxCity + 1;
            int cxWards = cxDistrict + 1;
            int cxType = cxWards + 1;
            int cxContactPerson = cxType + 1;//add
            int cxContactPhone = cxContactPerson + 1;//add
            int cxRentPrice = cxContactPhone + 1;
            int cxMonthRent = cxRentPrice + 1;
            int cxRequireDeposit = cxMonthRent + 1;
            int cxRequireDepositAmt = cxRequireDeposit + 1;//add
            int cxHasDeposit = cxRequireDepositAmt + 1;

            int cxDepositAmt = cxHasDeposit + 1;
            int cxDateDeposit = cxDepositAmt + 1;//add
            int cxBuyPrice = cxDateDeposit + 1;
            int cxTotalCustomer = cxBuyPrice + 1;
            string batchNo = DateTime.Now.ToString("yyyyMMddMMhhss");

            request.CheckNotNull();
            Check.NotNullOrWhiteSpace(request.FileName, "filename");

            UploadHelper.CheckFileNameSecurity(request.FileName);

            if (!request.FileName.StartsWith("temporary/"))
                throw new ArgumentOutOfRangeException("filename");

            ExcelPackage ep = new ExcelPackage();
            using (var fs = new FileStream(UploadHelper.DbFilePath(request.FileName), FileMode.Open, FileAccess.Read ))
                ep.Load(fs);

            var p = TblPlaceOfBussinessRow.Fields;
            var s = TblCityRow.Fields;
            var c = TblDistrictRow.Fields;
            var d = TblWardsRow.Fields;

            var response = new ExcelImportResponse();
            response.ErrorList = new List<string>();
            int iIndexOf = 0;
            
            var worksheet = ep.Workbook.Worksheets[0];
            for (var row = 4; row <= worksheet.Dimension.End.Row; row++)
            {
                try
                {
                    string rowsIndx = "Lỗi dòng thứ: " + row;
                    if (worksheet.Cells[row, 1].Value == null) break;
                    var dWith = Convert.ToString(worksheet.Cells[row, cxWith].Value ?? "");
                    if (dWith.IsTrimmedEmpty())
                    {
                        response.ErrorList.Add(rowsIndx+"-Mặt tiền không để trống");
                            continue;
                    }
                    var dTotalArea = Convert.ToString(worksheet.Cells[row, cxTotalArea].Value ?? "");
                    var dTotalUse = Convert.ToString(worksheet.Cells[row, cxTotalUse].Value ?? "");
                    var dDecription = Convert.ToString(worksheet.Cells[row, cxDescription].Value ?? "");
                    var dAddress = Convert.ToString(worksheet.Cells[row, cxAddress].Value ?? "");
                    var dBranch= Convert.ToString(worksheet.Cells[row, cxBranch].Value ?? "");

                    if (dAddress.IsTrimmedEmpty())
                    {
                        response.ErrorList.Add(rowsIndx + "-Vị trí không để trống");
                        continue;
                    }
                    if (dTotalUse.IsTrimmedEmpty())
                    {
                        response.ErrorList.Add(rowsIndx + "-Diện tích cho thuê");
                        continue;
                    }
                    if (dBranch.IsTrimmedEmpty())
                    {
                        response.ErrorList.Add(rowsIndx + "-Chi nhánh không để trống");
                        continue;
                    }
                    
                    var Branch = uow.Connection.TryFirst<TblBranchRow>(q => q
                      .Select(p.Id)
                      .Where(p.Code == dBranch));
                    if (Branch == null)
                    {
                        response.ErrorList.Add(rowsIndx + "-Không tìm thấy mã chi nhánh :" + dBranch);
                        continue;
                    }
                    else
                        dBranch = Branch.Id.ToString();

                    var dCity= Convert.ToString(worksheet.Cells[row, cxCity].Value ?? "");
                    if (dCity.IsTrimmedEmpty())
                    {
                        response.ErrorList.Add(rowsIndx + "-Thành phố không để trống");
                        continue;
                    }
                    else
                    {
                        iIndexOf = dCity.IndexOf("-");
                        if (iIndexOf == -1)
                        {
                            response.ErrorList.Add(rowsIndx + "-Thành phố không đúng định dạng XXX-YYYY");
                            continue;
                        }
                        else
                        {
                            dCity = dCity.Substring(0, iIndexOf);
                        }
                    }

                    var City = uow.Connection.TryFirst<TblCityRow>(q => q
                        .Select(p.Id)
                        .Where(p.Code == dCity));

                    if (City == null)
                    {
                        response.ErrorList.Add(rowsIndx + "-Không tìm thấy mã thành phố :" + dCity);
                        continue;
                    }
                    else
                    {
                        dCity = City.Id.ToString();
                    }
                    //District
                    var dDistrict = Convert.ToString(worksheet.Cells[row, cxDistrict].Value ?? "");
                    if (dCity.IsTrimmedEmpty())
                    {
                        response.ErrorList.Add(rowsIndx + "-Quận không để trống");
                        continue;
                    }
                    else
                    {
                        iIndexOf = dDistrict.IndexOf("-");
                        if (iIndexOf == -1)
                        {
                            response.ErrorList.Add(rowsIndx + "-Quận không đúng định dạng XXX-YYYY");
                            continue;
                        }
                        else
                        {
                            dDistrict = dDistrict.Substring(0, iIndexOf);
                        }
                    }

                    var District = uow.Connection.TryFirst<TblDistrictRow>(q => q
                        .Select(c.Id)
                        .Where(c.Code == dDistrict & c.CityId == int.Parse(dCity))) ;

                    if (District == null)
                    {
                        response.ErrorList.Add(rowsIndx + "-Không tìm thấy mã quận :" + dDistrict);
                        continue;
                    }
                    else
                    {
                        dDistrict = District.Id.ToString();
                    }
                    //End district

                    //Ward
                    var dWard = Convert.ToString(worksheet.Cells[row, cxWards].Value ?? "");
                    if (dWard.IsTrimmedEmpty())
                    {
                        response.ErrorList.Add(rowsIndx + "-Huyện không để trống");
                        continue;
                    }
                    else  
                    {
                        iIndexOf = dWard.IndexOf("-");
                        if (iIndexOf == -1)
                        {
                            response.ErrorList.Add(rowsIndx + "-Phường xã không đúng định dạng XXX-YYYY");
                            continue;
                        }
                        else
                        {
                            dWard = dWard.Substring(0, iIndexOf);
                        }
                    }

                    var Ward = uow.Connection.TryFirst<TblWardsRow>(q => q
                        .Select(d.Id)
                        .Where(d.Code == dWard & d.DistrictId==int.Parse(dDistrict)));

                    if (Ward == null)
                    {
                        response.ErrorList.Add(rowsIndx + "-Không tìm thấy mã phường/xã :" + Ward);
                        continue;
                    }
                    else
                    {
                        dWard = Ward.Id.ToString();
                    }
                    //end ward
                    var dContactPerson = Convert.ToString(worksheet.Cells[row, cxContactPerson].Value ?? "");
                    if (dContactPerson.IsTrimmedEmpty())
                    {
                        response.ErrorList.Add(rowsIndx + "-Người liên hệ không để trống");
                        continue;
                    }
                    var dContactPhone = Convert.ToString(worksheet.Cells[row, cxContactPhone].Value ?? "");
                    //Type: Loại mặt bằng 
                    var dType = Convert.ToString(worksheet.Cells[row, cxType].Value ?? "");
                    if (dType.IsTrimmedEmpty())
                    {
                        response.ErrorList.Add(rowsIndx + "-Loại mặt bằng dự kiến không để trống");
                        continue;
                    }
                    else
                    {
                        iIndexOf = dType.IndexOf("-");
                        if (iIndexOf == -1)
                        {
                            response.ErrorList.Add(rowsIndx + "-Loại mặt bằng không đúng định dạng X-YYYY");
                            continue;
                        }
                        else
                        {
                            dType = dType.Substring(0, iIndexOf);
                        }
                    }
                    if (dType !="1" && dType != "2")
                    {
                        response.ErrorList.Add(rowsIndx + "-Loại mặt bằng vui lòng nhập 1: Thuê, 2: Mua");
                        continue;
                    }
                    //End type
                    var dRentPrice = Convert.ToString(worksheet.Cells[row, cxRentPrice].Value ?? "");
                    int idRentPrice = 0;
                    if((TypeOfPlace)int.Parse(dType) == TypeOfPlace.Rent)
                    {
                        if (dRentPrice.IsTrimmedEmpty())
                        {
                            response.ErrorList.Add(rowsIndx + "-Vui lòng nhập giá thuê");
                            continue;
                        }
                        else
                        if (!Int32.TryParse(dRentPrice, out idRentPrice))
                        {
                            response.ErrorList.Add(rowsIndx + "-Vui lòng nhập số giá thuê");
                            continue;
                        }
                    }
                   
                    var dMonthRent = Convert.ToString(worksheet.Cells[row, cxMonthRent].Value ?? "");
                    long iMonthRent = 0;
                    if ((TypeOfPlace)int.Parse(dType) == TypeOfPlace.Rent)
                    {
                        if (dMonthRent.IsTrimmedEmpty())
                        {
                            response.ErrorList.Add(rowsIndx + "-Tháng thuê là bắt buộc");
                            continue;
                        }
                    }
                    if (!dMonthRent.IsTrimmedEmpty() && !long.TryParse(dMonthRent, out iMonthRent))
                    {
                        response.ErrorList.Add(rowsIndx + "-Tháng thuê phải là số");
                        continue;
                    }
                    
                        var dRequireDeposit = Convert.ToString(worksheet.Cells[row, cxRequireDeposit].Value ?? "");
                    if (!dRequireDeposit.IsTrimmedEmpty())
                    {
                        iIndexOf = dRequireDeposit.IndexOf("-");
                        if (iIndexOf == -1)
                        {
                            response.ErrorList.Add(rowsIndx + "-Yêu cầu đặt cọc không đúng định dạng X-YYYY");
                            continue;
                        }
                        else
                        {
                            dRequireDeposit = dRequireDeposit.Substring(0, iIndexOf);
                        }
                        if (!(dRequireDeposit == "1" || dRequireDeposit == "2"))
                        {
                            response.ErrorList.Add(rowsIndx + "-Yêu cầu đặt cọc vui lòng nhập 1: Có, 2: Không");
                            continue;
                        }
                    }
                    
                    var dRequireDepositAmt = Convert.ToString(worksheet.Cells[row, cxRequireDepositAmt].Value ?? "");
                    long iRequireDepositAmt = 0;
                    if (!dRequireDepositAmt.IsTrimmedEmpty() && !long.TryParse(dRequireDepositAmt, out iRequireDepositAmt))
                    {
                        response.ErrorList.Add(rowsIndx + "-Số tiền cọc phải là số");
                        continue;
                    }
                    var dHasDeposit= Convert.ToString(worksheet.Cells[row, cxHasDeposit].Value ?? "");
                    if (!dHasDeposit.IsTrimmedEmpty())
                    {
                        iIndexOf = dHasDeposit.IndexOf("-");
                        if (iIndexOf == -1)
                        {
                            response.ErrorList.Add(rowsIndx + "-Đã đặt cọc không đúng định dạng X-YYYY");
                            continue;
                        }
                        else
                        {
                            dHasDeposit = dHasDeposit.Substring(0, iIndexOf);
                        }
                        if (!(dHasDeposit == "1" || dHasDeposit == "2"))
                        {
                            response.ErrorList.Add(rowsIndx + "-Đã đặt cọc vui lòng nhập 1: Đã đặc cọc, 2: Chưa đặt cọc");
                            continue;
                        }
                    }
                    var dDateDeposit = Convert.ToString(worksheet.Cells[row, cxDateDeposit].Value ?? "");
                    DateTime dDateDeposit2 = new DateTime();
                    if (!dDateDeposit.IsTrimmedEmpty())
                    {
                        try
                        {
                            CultureInfo provider = CultureInfo.InvariantCulture;
                            DateTime dt = DateTime.ParseExact(dDateDeposit, "yyyyMMdd", provider);
                            dDateDeposit2 = dt;
                        }
                        catch (Exception e)
                        {
                            response.ErrorList.Add(rowsIndx + "-Ngày đặt cọc phải theo định dạng yyyyMMdd");
                            continue;
                        }
                    }

                    var dDepositAmt = Convert.ToString(worksheet.Cells[row, cxDepositAmt].Value ?? "");
                    long iDepositAmt = 0;
                    if (!dDepositAmt.IsTrimmedEmpty() && !long.TryParse(dDepositAmt, out iDepositAmt))
                    {
                        response.ErrorList.Add(rowsIndx + "-Số tiền đã thanh toàn phải là số");
                        continue;
                    }
                    var dBuyPrice = Convert.ToString(worksheet.Cells[row, cxBuyPrice].Value ?? "");
                    long iBuyPrice = 0;
                    if((TypeOfPlace)int.Parse(dType) == TypeOfPlace.Buy&& dBuyPrice.IsTrimmedEmpty())
                    {
                        response.ErrorList.Add(rowsIndx + "-Vui lòng nhập số tiền mua");
                        continue;
                    }
                    if (!dBuyPrice.IsTrimmedEmpty() && !long.TryParse(dBuyPrice, out iBuyPrice))
                    {
                        response.ErrorList.Add(rowsIndx + "-Số tiền đã thanh toàn phải là số");
                        continue;
                    }
                    var dTotalCustomer = Convert.ToString(worksheet.Cells[row, cxTotalCustomer].Value ?? "");
                    int iTotalCustomer = 0;
                    if (dTotalCustomer.IsTrimmedEmpty())
                    {
                        response.ErrorList.Add(rowsIndx +"-Tổng số khách hàng là bắt buộc");
                        continue;
                    }
                    else
                    {
                        iIndexOf = dTotalCustomer.IndexOf("-");
                        if (iIndexOf == -1)
                        {
                            response.ErrorList.Add(rowsIndx + "-Tổng số khách hàng không đúng định dạng X-YYYY");
                            continue;
                        }
                        else
                        {
                            dTotalCustomer = dTotalCustomer.Substring(0, iIndexOf);
                        }
                        iTotalCustomer = int.Parse(dTotalCustomer);
                        if (!Enum.IsDefined(typeof(TotalCustomer), iTotalCustomer)) {
                            response.ErrorList.Add(rowsIndx + "-Tổng số khách hàng phải là 1-10");
                            continue;
                        }
                        
                    }
                    //else
                    //{
                    //    //iIndexOf = dTotalCustomer.IndexOf("-");
                    //    //if (iIndexOf == -1)
                    //    //{
                    //    //    response.ErrorList.Add("Tổng số KH không đúng định dạng X-YYYY");
                    //    //    continue;
                    //    //}
                    //    //else
                    //    //{
                    //    //    dTotalCustomer = dType.Substring(0, iIndexOf);
                    //    //}
                    //}
                    
                    var place = new TblPlaceOfBussinessRow();

                    place.Width = Convert.ToDecimal(dWith);
                    place.TotalArea = Convert.ToDecimal(dTotalArea);
                    place.Address = dAddress;
                    place.CityId = Convert.ToInt16(dCity);
                    place.DistrictId = Convert.ToInt16(dDistrict);
                    place.WardsId = Convert.ToInt16(dWard);
                    place.Type = (TypeOfPlace)int.Parse(dType);
                    place.PriceRent = idRentPrice;
                    place.RequireDeposit = (YesNo)int.Parse(dRequireDeposit);
                    place.RequireDepositAmt = iRequireDepositAmt;
                    place.MonthRent = (int)iMonthRent;
                    place.DepositAmt = iDepositAmt;
                    place.TotalCustomer = (TotalCustomer)iTotalCustomer;
                    place.BatchNo = batchNo;
                    place.ImportDate = DateTime.Now;
                    place.ImportBy= ((UserDefinition)Serenity.Authorization.UserDefinition).Username;
                    //GetNextNumberRequest reqGenCode = new GetNextNumberRequest { Length = 5, Prefix = place.CityId.ToString() };
                    //place.Code = GetNextNumber(uow.Connection, reqGenCode);
                    place.LinkGoogleMap = "";
                    place.Description = dDecription;
                    place.TotalAreaUse = Convert.ToDecimal(dTotalUse);
                    place.NameOfOwner = dContactPerson;
                    place.PhoneOfOwner = dContactPhone;
                    place.HasDeposit = (YesNo)int.Parse(dHasDeposit);
                    place.DateDeposit = dDateDeposit2;
                    place.BranchIdPic = int.Parse(dBranch);
                    place.PriceBuy = Convert.ToDecimal(dBuyPrice==""?"0": dBuyPrice);
                    Create(uow, new SaveRequest<MyRow>
                    {
                        Entity = place
                    });

                    response.Inserted = response.Inserted + 1;
                    
                }
                catch (Exception ex)
                {
                    response.ErrorList.Add("Lỗi dòng thứ " + row + ": " + ex.Message);
                }
            }
            response.BatchNo = batchNo;
            return response;
        }
        public ActionResult FileTemplateDownload()
        {
            byte[] fileBytes = System.IO.File.ReadAllBytes(Directory.GetCurrentDirectory() + "\\Template\\Template_upload_ecnet-V2.xlsx");
            string fileName = "Template_upload_ecnet-V2.xlsx";
            return File(fileBytes, System.Net.Mime.MediaTypeNames.Application.Octet, fileName);
        }
        public string GetDashbord(IDbConnection connection, GetNextNumberRequest request)
        {
            return new MyRepository().GenNextCode(connection, request);
        }
    }
}
