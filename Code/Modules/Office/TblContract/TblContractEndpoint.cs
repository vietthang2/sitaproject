
namespace ECNET.Office.Endpoints
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System.Data;
    using Microsoft.AspNetCore.Mvc;
    using MyRepository = Repositories.TblContractRepository;
    using MyRow = Entities.TblContractRow;
    using System;
    using ECNET.Web.Modules.Office.Response;
    using System.Text;
    using System.IO;
    using WordToPDF;
    using Serenity.Reporting;
    using Serenity.Web;
    using DocumentFormat.OpenXml.Packaging;
    using System.Text.RegularExpressions;
    using System.Collections.Generic;
    using DocumentFormat.OpenXml.Math;
    using ECNET.Office.Entities;
    using ECNET.Web.Modules.Office.Common;
    using OpenXmlPowerTools;
    using System.Xml.Linq;
    using Util;
    using Util = Util.Util;
    using System.Linq;

    [Route("Services/Office/TblContract/[action]")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class TblContractController : ServiceEndpoint
    {
        [HttpPost, AuthorizeCreate(typeof(MyRow))]
        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            request.Entity.CreatedBy = ((UserDefinition)Serenity.Authorization.UserDefinition).Username;
            request.Entity.CreatedDate = DateTime.Now;
            request.Entity.No = GetNextNumber(uow.Connection, new GetNextNumberContractRequest
            {
                ContractTypeId = (int)request.Entity.TypeId,
                PlaceId = (int)request.Entity.PlaceId,
                PlaceCode=request.Entity.PlaceCode,
                Length=5


            });
            return new MyRepository().Create(uow, request);
        }

        [HttpPost, AuthorizeUpdate(typeof(MyRow))]
        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            request.Entity.UpdatedBy = ((UserDefinition)Serenity.Authorization.UserDefinition).Username;
            request.Entity.UpdatedDate = DateTime.Now;
            request.Entity.Status = request.Entity.IsCompleted == true ? Status.Completed : request.Entity.Status;
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
            var rs= new MyRepository().Retrieve(connection, request);
            return rs;
        }

        [HttpPost]
        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            return new MyRepository().List(connection, request);
        }
        public string GetNextNumber(IDbConnection connection, GetNextNumberContractRequest request)
        {
            return new MyRepository().GenNextCode(connection, request);
        }
        public ActionResult DownloadContract(IDbConnection connection,PrintContractRequest request)
        {
            var row = Retrieve(connection, new RetrieveRequest { EntityId=request.ContractId});
            string fileNameSave = Directory.GetCurrentDirectory() + @"\Template\" + row.Entity.No.Replace("/", "") + ".doc";
            string filenamePdf = Directory.GetCurrentDirectory() + @"\Template\" + row.Entity.No.Replace("/", "") + ".pdf";
            string filenameHtml = Directory.GetCurrentDirectory() + @"\Template\" + row.Entity.No.Replace("/", "") + ".html";
            bool isPdf = false;
            bool isHtml = false;
            try
            {
                

                string fileName = @"C:\Test\MyNewDocument.doc";
           
                fileName = Directory.GetCurrentDirectory();
                string oTemplatePath = fileName + "\\Modules\\Office\\TblContract\\Template\\HDTN_Template.dotx";
                
                try
                {
                    System.IO.File.Delete(fileNameSave);
                    System.IO.File.Delete(Directory.GetCurrentDirectory() + @"\Template\" + row.Entity.No.Replace("/", "") + ".pdf");
                    System.IO.File.Delete(filenameHtml);
                }
                catch (Exception)
                {

                    throw;
                }
                using (WordprocessingDocument wdDoc = WordprocessingDocument.CreateFromTemplate(oTemplatePath))
                {
                    // Insert other code here.
                    string docText = null;
                    using (StreamReader sr = new StreamReader(wdDoc.MainDocumentPart.GetStream()))
                    {
                        docText = sr.ReadToEnd();
                    }

                    Regex regexText = new Regex("_fSoHopDong");
                    docText = docText.Replace("_fSoHopDong", row.Entity.No);
                    regexText = new Regex("fOwnerName");
                    docText = regexText.Replace(docText, row.Entity.NameOfOwner, 1);
                    regexText = new Regex("fIdentifyNo");
                    docText = regexText.Replace(docText, row.Entity.IdentifyNo,1);
                    regexText = new Regex("fAddress", RegexOptions.IgnoreCase);
                    docText = regexText.Replace(docText, row.Entity.AddressOfOwner, 1);
                    regexText = new Regex("fAdress2");
                    docText = regexText.Replace(docText, row.Entity.AddressOfOwner2nd??"",1);
                    regexText = new Regex("fPhone");
                    docText = regexText.Replace(docText, row.Entity.PhoneOfOwner??"", 1);
                    regexText = new Regex("fEmail");
                    docText = regexText.Replace(docText, row.Entity.EmailOfOwner??"", 1);
                    regexText = new Regex("fNameOfOwner2nd");
                    docText = regexText.Replace(docText, row.Entity.NameOfOwner2nd??"", 1);
                    regexText = new Regex("fIdentifyNo2nd");
                    docText = regexText.Replace(docText, row.Entity.IdentifyNo2nd??"", 1);
                    regexText = new Regex("fAddressOfOwner2nd");
                    docText = regexText.Replace(docText, row.Entity.AddressOfOwner2nd ?? "",1);
                    regexText = new Regex("fCurrentAddressOfOwner2nd");
                    docText = regexText.Replace(docText, row.Entity.CurrentAddressOfOwner2nd ?? "",1);
                    regexText = new Regex("fPhoneOfOwner2nd");

                    docText = regexText.Replace(docText, row.Entity.PhoneOfOwner2nd ?? "",1);
                    //regexText = new Regex("fPlaceTotalAreaUse");
                    docText = docText.Replace("fPlaceTotalAreaUse", row.Entity.PlaceTotalAreaUse.ToString());
                    regexText = new Regex("fCertificateNo", RegexOptions.IgnoreCase);
                    docText = regexText.Replace(docText, row.Entity.CertificateNo??"",1);
                    if (row.Entity.CertificateCity!=null)
                    {
                        var s = TblCityRow.Fields;
                        var City = connection.TryFirst<TblCityRow>(q => q
                            .Select(s.Name)
                            .Where(s.Id == (Int32)row.Entity.CertificateCity));
                        regexText = new Regex("fCertificateCity", RegexOptions.IgnoreCase);
                        docText = regexText.Replace(docText, City.Name, 1);
                    }
                    
                    
                    regexText = new Regex("fCertification", RegexOptions.IgnoreCase);
                    docText = regexText.Replace(docText, row.Entity.CertificateNo.ToString(), 1);
                    regexText = new Regex("fDescription_", RegexOptions.IgnoreCase);
                    docText = regexText.Replace(docText, row.Entity.PlaceDescription, 1);
                    regexText = new Regex("fFixYear_");
                    docText = regexText.Replace(docText, row.Entity.YearFixPrice==null?"...": row.Entity.YearFixPrice.ToString());
                    regexText = new Regex("fFixYearAdd_", RegexOptions.IgnoreCase);
                    docText = regexText.Replace(docText, row.Entity.YearBeginRedeal==null?"...": row.Entity.YearBeginRedeal.ToString(), 1);
                    regexText = new Regex("fRecurringPayment_", RegexOptions.IgnoreCase);
                    docText = regexText.Replace(docText, row.Entity.RecurringPayment==null?"...": row.Entity.RecurringPayment.ToString(), 1);


                    regexText = new Regex("fEcpayAddress", RegexOptions.IgnoreCase);
                    docText = regexText.Replace(docText, row.Entity.ECPayAddress.ToString(),1);
                    regexText = new Regex("fEcpayPhone");
                    docText = regexText.Replace(docText, row.Entity.ECPayPhone.ToString(),1);
                    regexText = new Regex("fEcpayBankNo", RegexOptions.IgnoreCase);
                    docText = regexText.Replace(docText, row.Entity.ECPayBankNo.ToString(),1);
                    regexText = new Regex("fEcpayBankName");
                    docText = regexText.Replace(docText, row.Entity.ECPayBankName??"",1);
                    regexText = new Regex("fEcpayBankBranch");
                    docText = regexText.Replace(docText, row.Entity.ECPayBankNameBranch??"",1);
                    regexText = new Regex("fEcpayPerson",RegexOptions.IgnoreCase);
                    docText = regexText.Replace(docText, row.Entity.EcPayPerson??"",1);
                    regexText = new Regex("fPersonPosition", RegexOptions.IgnoreCase);
                    docText = regexText.Replace(docText, row.Entity.EcPayPosition??"",1);
                    regexText = new Regex("fEcPayAuthorityNo", RegexOptions.IgnoreCase);
                    docText = regexText.Replace(docText, row.Entity.EcPayAuthorityNo??"",1);
                    regexText = new Regex("fAuthorityDate", RegexOptions.IgnoreCase);
                    docText = regexText.Replace(docText, row.Entity.EcPayAuthorityDate==null?"": Convert.ToDateTime(row.Entity.EcPayAuthorityDate).ToString("dd/MM/yyyy"), 1);

                    regexText = new Regex("fPlaceAddress", RegexOptions.IgnoreCase);
                    docText = regexText.Replace(docText, row.Entity.PlaceAddress??"", 1);
                    regexText = new Regex("fDateRelease", RegexOptions.IgnoreCase);
                    docText = regexText.Replace(docText, row.Entity.ReleaseDate==null?"" : Convert.ToDateTime(row.Entity.ReleaseDate).ToString("dd/MM/yyyy"), 1);

                    regexText = new Regex("fDateBegin", RegexOptions.IgnoreCase);
                    docText = regexText.Replace(docText, row.Entity.BeginDate == null ? "" : Convert.ToDateTime( row.Entity.BeginDate).ToString("dd/MM/yyyy"), 1);
                    //regexText = new Regex("fMonth");
                    regexText = new Regex("fPlacePriceBuy");
                    docText = regexText.Replace(docText, row.Entity.TypeId == 1 ? Convert.ToDecimal( row.Entity.PlacePriceRent).ToString(BasicConst.NumberFormat) : Convert.ToDecimal(row.Entity.PlacePriceBuy).ToString(BasicConst.NumberFormat), 1);
                    regexText = new Regex("fPlacePriceBuy_str");
                    docText = regexText.Replace(docText, Util.DocTien(Convert.ToDecimal(row.Entity.TypeId == 1 ? row.Entity.PlacePriceRent : row.Entity.PlacePriceBuy)), 1);

                    regexText = new Regex("fPersonName", RegexOptions.IgnoreCase);
                    docText = regexText.Replace(docText, row.Entity.AccountName ?? "", 1);
                    regexText = new Regex("fPersonBankNo", RegexOptions.IgnoreCase);
                    docText = regexText.Replace(docText, row.Entity.AccountBankNo ?? "", 1);
                    regexText = new Regex("fPersonBankName", RegexOptions.IgnoreCase);
                    docText = regexText.Replace(docText, row.Entity.BankName ?? "", 1);
                    regexText = new Regex("fWalletNo", RegexOptions.IgnoreCase);
                    docText = regexText.Replace(docText, row.Entity.WalletNo ?? "", 1);
                    regexText = new Regex("fWalletName", RegexOptions.IgnoreCase);
                    docText = regexText.Replace(docText, row.Entity.WalletName ?? "", 1);



                    docText = docText.Replace("fMonth", row.Entity.Month==null?"0": (row.Entity.Month/12).ToString());


                    using (StreamWriter sw = new StreamWriter(wdDoc.MainDocumentPart.GetStream(FileMode.Create)))
                    {
                        sw.Write(docText);
                    }
                    
                    wdDoc.SaveAs(fileNameSave).Close();
                    // var savedDoc = wdDoc.SaveAs(fileNameSave) as PresentationDocument;

                    // savedDoc.Close();
                    //wdDoc.Close();
                    isHtml=ConvertDocToHtml(fileNameSave, filenameHtml);
                    if (isHtml)
                    {
                        var arr = System.IO.File.ReadAllBytes(filenameHtml);
                        //return Redirect(filenameHtml);
                        return File(arr, "application/html", String.Format("{0}.html", row.Entity.No));
                    }
                        


                }
            }
            catch (Exception ex)
            {
                
                    
            }
          
            Word2Pdf objWorPdf = new Word2Pdf();
            string test = "";
            try
            {
                string backfolder1 = Directory.GetCurrentDirectory() + "\\Template\\";
                string strFileName = row.Entity.No.Replace("/", "") + ".doc";
                object FromLocation = backfolder1 + strFileName;
                string FileExtension = Path.GetExtension(strFileName);
                string ChangeExtension = strFileName.Replace(FileExtension, ".pdf");
                if (FileExtension == ".doc" || FileExtension == ".docx")
                {
                    object ToLocation = backfolder1 + ChangeExtension;
                    objWorPdf.InputLocation = FromLocation;
                    objWorPdf.OutputLocation = ToLocation;
                    objWorPdf.Word2PdfCOnversion();
                    isPdf = true;
                }


            }
            catch (Exception e)
            {
                Log.Error(e.Message);
                isPdf = false;
                //return Json(new { status = "error", message = e.Message + e.StackTrace }); ;
            }
            if (isPdf)
            {
                var arr = System.IO.File.ReadAllBytes(Directory.GetCurrentDirectory() + "\\Template\\" + row.Entity.No.Replace("/", "") + ".pdf");
                return File(arr, "application/pdf", String.Format("{0}.pdf", row.Entity.No));
            }
            else
            {
                var arr = System.IO.File.ReadAllBytes(Directory.GetCurrentDirectory() + "\\Template\\" + row.Entity.No.Replace("/", "") + ".doc");
                return File(arr, "application/msword", String.Format("{0}.doc", row.Entity.No));
            }

            
        }
       
        public CreateScheduleResp AutoCreateScheduleContract(IDbConnection connection,int contractId)
        {
            var response = new CreateScheduleResp();
            var rs= new MyRepository().AutoCreateScheduleContract(connection, contractId);
            response.result = rs;
            return response;
        }
        public FileContentResult ListExcel(IDbConnection connection, ListRequest request)
        {
            var data = List(connection, request).Entities;
            var report = new DynamicDataReport(data, request.IncludeColumns, typeof(Columns.TblContractColumns));
            var bytes = new ReportRepository().Render(report);
            return ExcelContentResult.Create(bytes, "Danh_Sach_Hop_Dong_" +
                DateTime.Now.ToString("yyyyMMdd_HHmmss") + ".xlsx");
        }
        public static void RemovePart(string document)
        {
            using (WordprocessingDocument wordDoc = WordprocessingDocument.Open(document, true))
            {
                MainDocumentPart mainPart = wordDoc.MainDocumentPart;
                if (mainPart.DocumentSettingsPart != null)
                {
                    mainPart.DeletePart(mainPart.DocumentSettingsPart);
                }
            }
        }
        [HttpPost]
        public ActionResult ReadMoney(string amount)
        {
            var rs = "";
            if (amount==null || amount =="")
            {
                return Json(new { status = "Fail", message = "Vui lòng nhập số tiền" });
            }
            else
                rs = Util.DocTien(Convert.ToDecimal(amount));
            return Json(new { status = "OK", message = rs });
        }
        public bool ConvertDocToHtml(String fromFile, string toFile)
        {
            try
            {
                byte[] byteArray = System.IO.File.ReadAllBytes(fromFile);
                using (MemoryStream memoryStream = new MemoryStream())
                {
                    memoryStream.Write(byteArray, 0, byteArray.Length);
                    using (WordprocessingDocument doc =
                        WordprocessingDocument.Open(memoryStream, true))
                    {
                        HtmlConverterSettings settings = new HtmlConverterSettings();

                        XElement html = HtmlConverter.ConvertToHtml(doc, settings);

                        var stringHtml = html.ToStringNewLineOnAttributes();
                        Regex regexText = new Regex("<body>", RegexOptions.IgnoreCase);
                        stringHtml = regexText.Replace(stringHtml, "<body onload='window.print()'>", 1);

                        System.IO.File.WriteAllText(toFile, stringHtml);
                        return true;
                    }
                }
            }
            catch (Exception)
            {
                return false;
            }
        }
        public ContractCancelResponse Cancel(IUnitOfWork uow, ContractCancelRequest request)
        {
            var response = new ContractCancelResponse();
            try
            {
                var queryUpdate = "Update tblContract set status=4, UpdatedDate=getdate(), UpdatedBy='" + ((UserDefinition)Serenity.Authorization.UserDefinition).Username
              + "', Remark1='" + request.Reason + "' where Id=" + request.Id;
                uow.Connection.Execute(queryUpdate);
                var queryUpdateApproval = "Update tblApprovalCenter set status=4, ApprovedDate=getdate(), ApproveBy='" + ((UserDefinition)Serenity.Authorization.UserDefinition).Username
                    + "', ReasonReject='" + request.Reason + "' where ClientId=" + request.Id + " and type =2";
                uow.Connection.Execute(queryUpdateApproval);
                response.Inserted = 1;
                
            }
            catch (Exception e) 
            {
                response.Inserted = 0;
                response.ErrorList = new List<string>();
                response.ErrorList.Add( "Không thể hủy. Liên hệ administrator");
                Log.Error(e.Message);
            }
            
            return response;
        }
    }
}
