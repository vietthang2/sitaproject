using System;
using System.Collections.Generic;
using System.Data;
using System.Data.OleDb;
using System.Linq;
using System.Runtime.InteropServices;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace SearchBagTag
{
    static class Program
    {
        /// <summary>
        /// The main entry point for the application.
        /// </summary>
        [STAThread]
        static void Main()
        {
            Application.EnableVisualStyles();
            Application.SetCompatibleTextRenderingDefault(false);
            

            DbConnect.PathServerFile = @"~\AppData\Roaming\SearchBagTag\ConfigServer.ini";

            DbConnect.Server = DbConnect.ReadValue(DbConnect.PathServerFile, "F", "F1");
            DbConnect.Database = DbConnect.ReadValue(DbConnect.PathServerFile, "F", "F2");
            DbConnect.UserName = DbConnect.ReadValue(DbConnect.PathServerFile, "F", "F3");
            DbConnect.PassWord = DbConnect.ReadValue(DbConnect.PathServerFile, "F", "F4");

            DbConnect.gblConnectString = DbConnect.CreateConnectString(DbConnect.UserName, DbConnect.PassWord, DbConnect.Database, DbConnect.Server, 120);

            DbConnect.CheckUserDatabase(DbConnect.gblConnectString);
            Application.Run(new SearchBagTag());
        }
    }


    static class DbConnect
    {
        public static string PathServerFile = "";
        public static string UserName = "";
        public static string PassWord = "";
        public static string Database = "";
        public static string Server = "";

        public static string gblConnectString;
        public static OleDbConnection glbConnection = new OleDbConnection();
        public static OleDbCommand glbCommand = new OleDbCommand();
        public static OleDbTransaction glbTransaction;
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

        public static string ReadValue(string pPath, string Section, string Key)
        {
            StringBuilder stringBuilder = new StringBuilder(255);
            int privateProfileString = GetPrivateProfileString(Section, Key, "", stringBuilder, 255, pPath);
            return stringBuilder.ToString();
        }

        public static bool CheckUserDatabase(string pPathFile)
        {

            
            bool result;
            try
            {
                glbConnection = new OleDbConnection(gblConnectString);
                if (glbConnection.State != ConnectionState.Open)
                {
                    glbConnection.Open();
                }
                glbConnection.Close();
                MessageBox.Show("connect Server");
                result = true;
            }
            catch
            {
                MessageBox.Show("Not connect Server");
                result = false;
            }
            return result;
        }

        public static void OpenConnect()
        {
            try
            {
                if (glbConnection.State != ConnectionState.Open)
                {
                    glbConnection.Open();
                }
            }
            catch
            {
            }
        }

        public static void CloseConnect()
        {
            try
            {
                if (glbConnection.State != ConnectionState.Closed)
                {
                    glbConnection.Close();
                }
            }
            catch
            {
            }
        }

        [DllImport("kernel32")]
        private static extern int GetPrivateProfileString(string section, string key, string def, StringBuilder retVal, int size, string filePath);
    }


}
