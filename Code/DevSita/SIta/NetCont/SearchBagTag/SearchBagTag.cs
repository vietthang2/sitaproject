using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace SearchBagTag
{
    public partial class SearchBagTag : Form
    {
       

        public SearchBagTag()
        {
            InitializeComponent();
        }

        private void SearchBagTag_Load(object sender, EventArgs e)
        {
           
        }


        private string Searchbag(string pBagTag, bool pActive)
        {
            string Sql = "Select Chute From View_Flight_Bags Where Baggage_Tag = '" + pBagTag + "'";
            DbConnect.OpenConnect();
            DbConnect.glbCommand = new System.Data.OleDb.OleDbCommand(Sql,DbConnect.glbConnection);
            Object mchute = DbConnect.glbCommand.ExecuteScalar();
            DbConnect.CloseConnect();
            if (mchute != null)
            {
                pBagTag = pBagTag + mchute.ToString();
            }
            else
            {
                pBagTag = "";
            }
            return pBagTag;
        }

        private void btnSearch_Click(object sender, EventArgs e)
        {
            Searchbag(txtBagTag.Text.ToString().Trim(), chkActive.Checked);

            

        }
    }
}
