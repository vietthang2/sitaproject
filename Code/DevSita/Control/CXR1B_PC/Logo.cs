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
                BOBags bag = BOBags.BagsCollectionFromSearchFields(new BOBags() { BaggageTag = request }).FirstOrDefault();
                if (bag != null)
                {
                    BOFlight flight = BOFlight.FlightCollectionFromSearchFields(new BOFlight() { Identify = bag.Flight }).FirstOrDefault();
                    if(flight != null)
                    {
                        Response = request + (flight.Chute==null?"0": flight.Chute.ToString());
                        Invalidate();
                        if (ProcessCompleted != null)
                        {
                            ProcessCompleted();
                        }
                    }
                    else
                    {
                        Response = request + (flight.Chute == null ? "0" : flight.Chute.ToString());
                        Invalidate();
                        if (ProcessCompleted != null)
                        {
                            ProcessCompleted();
                        }
                    }
                }
                else
                {
                    Response = request + "0";
                    Invalidate();
                    if (ProcessCompleted != null)
                    {
                        ProcessCompleted();
                    }
                }
                Invalidate();
            }
        }

        public string Response { get => response; set => response = value; }
    }
}
