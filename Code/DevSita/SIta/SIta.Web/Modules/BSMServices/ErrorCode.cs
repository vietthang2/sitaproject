﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SIta.Modules.BSMServices
{
    public enum ErrorCode
    {
        /// <summary>
        /// The function has been executed correctly
        /// </summary>
        NoError = 0,

        /// <summary>
        /// Connection error
        /// </summary>
        ConnectionError = 1,

        /// <summary>
        /// Ip address not available
        /// </summary>
        IPAddressNotAvailable,

        /// <summary>
        /// Wrong format of the variable
        /// </summary>
        WrongVarFormat = 10,

        /// <summary>
        /// Wrong number of received bytes
        /// </summary>
        WrongNumberReceivedBytes = 11,

        /// <summary>
        /// Error on send data
        /// </summary>
        SendData = 20,

        /// <summary>
        /// Error on read data
        /// </summary>
        ReadData = 30,

        /// <summary>
        /// Error on write data
        /// </summary>
        WriteData = 50
            //test
    }
}