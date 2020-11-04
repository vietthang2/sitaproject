using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Drawing;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using CXR1BSAC.Business;
using CXR1B_PC.Business;

namespace CXR1B_PC
{
    public delegate void Notify();
    public partial class Logo: UserControl
    {
        public event Notify ProcessCompleted;
        string request = string.Empty;
        string response = string.Empty;

        public Logo()
        {
            InitializeComponent();
           
        }

        public string Request
        {
            get => request;
            set 
            { 
                request = value;
                var rs = SearchBagtags.Search(request);
                Response = request + (rs);
                Invalidate();
                if (ProcessCompleted != null)
                {
                    ProcessCompleted();
                }
                
                Invalidate();
            }
        }

        public string Response { get => response; set => response = value; }
    }
}
