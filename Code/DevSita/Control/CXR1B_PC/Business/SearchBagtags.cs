using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CXR1BSAC.Data;

namespace CXR1B_PC.Business
{
    class SearchBagtags
    {
		
		public static string Search(string bagtag)
		{
			SqlCommand command = new SqlCommand();
			command.CommandText = "GET_CHUTES_BYBAGTAGS";
			command.CommandType = System.Data.CommandType.StoredProcedure;
			//System.Windows.Forms.MessageBox.Show(StaticSqlConnection.ConnectionString.Trim());
			//SqlConnection conn = new SqlConnection("Server=171.244.18.171\\SQL2K14;Database=Sita_Default_v1;Integrated Security=false;User=sa;Password=P@ssw0rd");
			SqlConnection staticConnection = Conn_BaseData.StaticSqlConnection;
			command.Connection = staticConnection;//staticConnection;

			DataTable dt = new DataTable("tblBags");
			SqlDataAdapter sqlAdapter = new SqlDataAdapter(command);
			try
			{
				command.Parameters.Add(new SqlParameter("@Bagtag", SqlDbType.NVarChar, 50, ParameterDirection.Input, false, 0, 0, "", DataRowVersion.Proposed, bagtag));
				

				staticConnection.Open();
				sqlAdapter.Fill(dt);

				if (dt.Rows.Count > 0)
				{
					return dt.Rows[0][0]==null?"0" : dt.Rows[0][0].ToString();
				}
				return "0";
			}
			catch
			{
				throw;
			}
			finally
			{
				staticConnection.Close();
				command.Dispose();
			}
		}
	}
}
