using CXR1B_SAC;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SITA_SIMU
{
    class Program
    {
        static void Main(string[] args)
        {
            Logging.InitLogging();
            BSM_Driver driver = new BSM_Driver();
            driver.IP = "27.71.237.68";
            driver.Port = 1000;
            driver.StartListening();
            
            Console.Read();
        }
    }
}
