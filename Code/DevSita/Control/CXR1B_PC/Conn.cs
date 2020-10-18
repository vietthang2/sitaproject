using CXR1BSAC.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices;
using System.Text;
using System.Threading.Tasks;

namespace CXR1B_PC
{
    public static class Config
    {
        public static string mPathServerFile = System.Environment.GetFolderPath(Environment.SpecialFolder.ApplicationData).ToString() + @"\SearchBagTag\ConfigServer.ini";

        public static string Server = ReadValue(mPathServerFile, "F", "F1");
        public static string Database = ReadValue(mPathServerFile ,"F", "F2");
        public static string UserName = ReadValue(mPathServerFile, "F", "F3");
        public static string PassWord = ReadValue(mPathServerFile, "F", "F4");
        public static string Conn = CreateConnectString(UserName, PassWord, Database, Server, 120);


        public static string ReadValue(string pPath, string Section, string Key)
        {
            StringBuilder stringBuilder = new StringBuilder(255);
            int privateProfileString = GetPrivateProfileString(Section, Key, "", stringBuilder, 255, pPath);
            return stringBuilder.ToString();
        }
        [DllImport("kernel32")]
        private static extern int GetPrivateProfileString(string section, string key, string def, StringBuilder retVal, int size, string filePath);

        public static string CreateConnectString(string pUserName, string pPassword, string pDatabase, string pServer, int pTimeOut)
        {
            return string.Concat(new string[]
            {
                "Provider=sqloledb; Data Source=",
                pServer,
                "; Initial Catalog=",
                pDatabase,
                "; User Id=",
                pUserName,
                "; Password=",
                pPassword,
                "; Connect Timeout=",
                pTimeOut.ToString()
            });
        }
    }
}
