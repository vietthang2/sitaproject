using ECNET.Office.Entities;
using DocumentFormat.OpenXml.Packaging;
using DocumentFormat.OpenXml.Wordprocessing;
using System.IO;
using System;
using DocumentFormat.OpenXml.Spreadsheet;
using System.Text.RegularExpressions;

namespace ECNET.Web.Modules.Common.Helpers
{
    public class ExportWord
    {
        public string WordTemplate(string filePath, TblContractRow contractRow)
        {
            //OBJECT OF MISSING "NULL VALUE"


            string fileName = @"C:\Test\MyNewDocument.doc";
            fileName = Directory.GetCurrentDirectory();
            string oTemplatePath = fileName + "\\Modules\\Office\\TblContract\\HDTN_Template.docx";
            using (WordprocessingDocument wdDoc = WordprocessingDocument.Open(oTemplatePath, true))
            {
                // Insert other code here.
                string docText = null;
                using (StreamReader sr = new StreamReader(wdDoc.MainDocumentPart.GetStream()))
                {
                    docText = sr.ReadToEnd();
                }

                Regex regexText = new Regex("fCode");
                docText = regexText.Replace(docText, contractRow.No);

                using (StreamWriter sw = new StreamWriter(wdDoc.MainDocumentPart.GetStream(FileMode.Create)))
                {
                    sw.Write(docText);
                }
                wdDoc.Save();
                wdDoc.Close();
            } 

                //// Save to PDF format
                ////Object fileFormat = Type.Missing;
                //Object fileFormat = WdSaveFormat.wdFormatPDF;

                //Object lockComments = Type.Missing;
                //Object password = Type.Missing;

                ////password = "123456";

                //Object addToRecentFiles = Type.Missing;
                //Object writePassword = Type.Missing;
                //Object readOnlyRecommended = Type.Missing;
                //Object embedTrueTypeFonts = Type.Missing;
                //Object saveNativePictureFormat = Type.Missing;
                //Object saveFormsData = Type.Missing;
                //Object saveAsAOCELetter = Type.Missing;
                //Object encoding = Type.Missing;
                //Object insertLineBreaks = Type.Missing;
                //Object allowSubstitutions = Type.Missing;
                //Object lineEnding = Type.Missing;
                //Object addBiDiMarks = Type.Missing;

                //Object saveChanges = Microsoft.Office.Interop.Word.WdSaveOptions.wdDoNotSaveChanges;
                ////Object saveChanges = Type.Missing;
                //Object originalFormat = Type.Missing;
                //Object routeDocument = Type.Missing;

                //Object oTemplatePath = fileName + "\\Modules\\Office\\\TblContract\\HĐTN_Template.dotx";

                ////password = "123456";
                ////writePassword = "123456";


                //Microsoft.Office.Interop.Word.Application wordApp = new Microsoft.Office.Interop.Word.Application();
                //Document wordDoc = new Document();

                //wordDoc = wordApp.Documents.Add(ref oTemplatePath, ref oMissing, ref oMissing, ref oMissing);

                //foreach (Field myMergeField in wordDoc.Fields)
                //{


                //    Range rngFieldCode = myMergeField.Code;

                //    String fieldText = rngFieldCode.Text;



                //    // ONLY GETTING THE MAILMERGE FIELDS

                //    if (fieldText.StartsWith(" MERGEFIELD"))
                //    {

                //        double value = 0;
                //        string svalue = "";
                //        // THE TEXT COMES IN THE FORMAT OF
                //        // MERGEFIELD  MyFieldName  \\* MERGEFORMAT
                //        // THIS HAS TO BE EDITED TO GET ONLY THE FIELDNAME "MyFieldName"
                //        Int32 endMerge = fieldText.IndexOf("\\");
                //        Int32 fieldNameLength = fieldText.Length - endMerge;
                //        String fieldName = fieldText.Substring(11, endMerge - 11);

                //        // GIVES THE FIELDNAMES AS THE USER HAD ENTERED IN .dot FILE
                //        fieldName = fieldName.Trim();
                //        // **** FIELD REPLACEMENT IMPLEMENTATION GOES HERE ****//
                //        // THE PROGRAMMER CAN HAVE HIS OWN IMPLEMENTATIONS HERE

                //        if (fieldName == "fCode")
                //        {
                //            myMergeField.Select();
                //            wordApp.Selection.TypeText(contractRow.No);
                //            continue;
                //        }



                //    }

                //}

                ////fileName = SystemParameters.TEMP_PATH + empPayslip.PSM_Employee_Code + ".doc";
                //fileName = contractRow.No + ".pdf";
                ////try
                ////{
                ////    //File.Delete(fileName.ToString());
                ////}
                ////catch (Exception)
                ////{


                ////}


                ////Object PasswordEncryptionFileProperties = Type.Missing;
                ////PasswordEncryptionFileProperties = true;
                ////wordDoc.SetPasswordEncryptionOptions("Microsoft RSA SChannel Cryptographic Provider", "RC4", 56, ref PasswordEncryptionFileProperties);
                //try
                //{
                //    wordDoc.SaveAs(ref fileName, ref fileFormat, ref lockComments,
                //  ref password, ref addToRecentFiles, ref writePassword,
                //  ref readOnlyRecommended, ref embedTrueTypeFonts,
                //  ref saveNativePictureFormat, ref saveFormsData,
                //  ref saveAsAOCELetter, ref encoding, ref insertLineBreaks,
                //  ref allowSubstitutions, ref lineEnding, ref addBiDiMarks);

                //    //wordDoc.SaveAs("myfile.doc");
                //    //wordApp.Documents.Open("myFile.doc");
                //    //wordDoc.Close(ref oMissing, ref oMissing, ref oMissing);
                //    ((_Document)wordDoc).Close(ref saveChanges, ref oMissing, ref oMissing);
                //    wordApp.Application.Quit(ref saveChanges, ref originalFormat, ref routeDocument);

                //    //wordDoc.Close(ref saveChanges, ref oMissing, ref oMissing);
                //    //((_Application)wordApp).Quit(ref oMissing, ref oMissing, ref oMissing);

                //    if (wordDoc != null)
                //        System.Runtime.InteropServices.Marshal.ReleaseComObject(wordDoc);
                //    if (wordApp != null)
                //        System.Runtime.InteropServices.Marshal.ReleaseComObject(wordApp);

                //    wordDoc = null;
                //    wordApp = null;

                //    string fileNameOutput = "";
                //    //fileNameOutput = SystemParameters.TEMP_PATH + empPayslip.PSM_Employee_Code + "_" + empPayslip.PSM_SalaryMonth + "/" + empPayslip.PSM_SalaryYear +  ".pdf";
                //    fileNameOutput = fileName.ToString();

                //    //// set password pdf 
                //    //// Open an existing document. Providing an unrequired password is ignored.
                //    //PdfDocument document = PdfReader.Open(fileName.ToString(), "some text");

                //    //PdfSecuritySettings securitySettings = document.SecuritySettings;


                //    //// Restrict some rights.
                //    //securitySettings.PermitAccessibilityExtractContent = false;
                //    //securitySettings.PermitAnnotations = false;
                //    //securitySettings.PermitAssembleDocument = false;
                //    //securitySettings.PermitExtractContent = false;
                //    //securitySettings.PermitFormsFill = true;
                //    //securitySettings.PermitFullQualityPrint = false;
                //    //securitySettings.PermitModifyDocument = true;
                //    //securitySettings.PermitPrint = false;

                //    //// Save the document...
                //    //document.Save(fileNameOutput);

                //    //GC.Collect(); // force final cleanup!
                //    //if (wordDoc != null)
                //    //    System.Runtime.InteropServices.Marshal.ReleaseComObject(wordDoc);
                //    //if (wordApp != null)
                //    //    System.Runtime.InteropServices.Marshal.ReleaseComObject(wordApp);
                //    ////return fileName.ToString();
                //    return fileNameOutput;
                //}
                //catch (Exception e)
                //{

                //    return "";
                //}
                ////return fileNameOutput;

                return "";
            
        }
    }

}
