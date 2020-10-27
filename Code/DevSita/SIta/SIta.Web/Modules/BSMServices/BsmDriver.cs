using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Sockets;
using System.Text;
using System.Threading;
using System.Web;
using Modules.Common;
using Serenity;
using Sita.Modules.RabbitMQ;

namespace Sita.Modules.BSMServices
{
  
    public class BsmDriver
    {
        private int readTimeout = System.Threading.Timeout.Infinite;
        private int writeTimeout = System.Threading.Timeout.Infinite;
        private Socket listener;
        private byte[] buffer = new byte[8192]; // Buffer to store data from clients.
        string bpmdemo = @"BPM
.V/1TORD
.J/R/4567/381761/13JAN/183551L/R
.F/BA296/13JAN/ORD/J
.B/OFF/00/16986470001
.S/N//N 
.P/1MASON/R
.L/YX{num}6A6
ENDBPM";
        List<string> bsm_demo = new List<string>()
        {
            @"BSM
.V/1TZRH
.F/{flight}/18APR/JFK/F
.N/{bag_number}003
ENDBSM",
             @"BSM
.V/1TZRH//6543210014/A/123ABC456Z
.F/{flight}/18APR/JFK/F
.I/AZ318/18 APR/FCO/J
.N/{bag_number}003
.S/Y/3A/C
.P/SMITH/TOM
.L/XY1C3P
.T/321A4C
.E/RUSH
.R/VIP
.X/XRAY
ENDBSM",
              @"BSM
.V/1LPIT////123ABC456Z
.F/{flight}/05DEC/LGW/C
.N/{bag_number}002
.S/N//S
.P/WEIL/W
.L/H8J47X
.T/4F0C32
.X/XRAY
ENDBSM",
               @"BSM
.V/1TZRH
.F/{flight}/18APR/JFK/F
.I/AZ318/18APR/FCO/J
.N/{bag_number}002
.N/{bag_number_1}001
.S/Y/3A/C
.P/SMITH/TOM
.L/XY1C3P
.T/321A4C
.F/{flight}/18APR/JFK/F
.O/DL671/18APR/ATL/C
.O/DL281/18APR/MYS/C
.N/{bag_number_2}002
.N/{bag_number_3}002
.S/Y/3A/C
.P/BROWN/JIM
.L/SAB4KP
.T/321A44
ENDBSM",
                @"BSM
.V/1RLHR
.F/{flight}/0/8MAY/FRA/J
.N/{bag_number}005
.D/HOME/TW149NT/07MAY084502L/CO/FEDEXVAN45
.H/T1/CENTRAL/E20
.P/2PAGE/L/B
.L/XSEA7B
ENDBSM",
                 @"BSM
.V/1RLHR
.F/{flight}/08MAY/FRA/J
.N/{bag_number}005
.D/TRST/QQP0/7MAY0/84512L
.H/HEX/P1/E20/
.P/2PAGE/L/B
.L/XSEA7B
ENDBSM",
                  @"BSM
.V/1RLAX
.F/{flight}/0/7MAY/LHR/F
.N/{bag_number}035
.D/PORT/LXS/07MAY/084512L/CS/POV23684
.S/Y/3A/C
.H/INT/GROUP/46
.P/SMITH/TOM
.C/ROYAL PRINCESS
.L/XY1C3P
.T/321A4C
.R/CRUISE
.X/XRAY
ENDBSM",
        };

        /// <summary>
        /// IP address of the PLC
        /// </summary>
        public string IP { get; set; }

        /// <summary>
        /// PORT Number of the PLC, default is 102
        /// </summary>
        public int Port { get; set; }
        public int ClientPort { get; set; }
        private static ManualResetEvent connectDone =
       new ManualResetEvent(false);
        public static ManualResetEvent allDone = new ManualResetEvent(false);
        IPEndPoint remoteEP;
        bool statusConnect = false;
        Socket client;
        public void StartListening(ref bool _statusConnect)
        {
            
            try
            {
                

                if (client== null  )
                {
                    if (CommonSocket.IsConnected(client))
                    {
                        //Thread.Sleep(30000);
                        return;
                    }
                    remoteEP = new IPEndPoint(IPAddress.Parse(IP), Port);
                    
                    listener = new Socket(AddressFamily.InterNetwork, SocketType.Stream, ProtocolType.Tcp);
                    listener.Bind(new IPEndPoint(IPAddress.Any, ClientPort));
                    listener.BeginConnect(remoteEP,
                        new AsyncCallback(OnSocketAccepted), listener);
                    _statusConnect = statusConnect;
                    Logging.Logger.Information($"BSM: Begin connect to server Ip: {IP} and port:{Port}");
                    Logging.Logger.Information($"BSM: Time:{DateTime.Now} :StartListening");

                    Thread T = new Thread(checkTimeOut);
                    T.IsBackground = true;
                    T.Start();
                }
                else
                {
                    
                    Logging.Logger.Information("BSM: Start Listening again....");
                    
                    listener.BeginConnect(remoteEP,
                        new AsyncCallback(OnSocketAccepted), client);

                    return;
                    
                }
                
            }
            catch (Exception e)
            {
                _statusConnect = false;
                if (e.Message== "Only one usage of each socket address (protocol/network address/port) is normally permitted") 
                    return;
                if(e.Message== "BeginConnect cannot be called while another asynchronous operation is in progress on the same Socket")
                    Log.Error("Start Listening Error:"+e.Message + e.StackTrace + e.Source);
                Logging.Logger.Warning("BSM: Start Listening again fail!");
                Thread T = new Thread(checkTimeOut);
                T.IsBackground = true;
                T.Start();
                return;
                
            }
        }

        private void OnSocketAccepted(IAsyncResult result)
        {
            // This is the client socket, where you send/receive data from after accepting. Keep it in a List<Socket> collection if you need to.
            try
            {
                client = (Socket)result.AsyncState;

            
                if (client.Connected)
                {
                    statusConnect = true;
                    Logging.Logger.Information("BSM: OnSocketAccepted: Successfully connected to the server {0}",
                    client.RemoteEndPoint.ToString());
                    client.BeginReceive(buffer, 0, buffer.Length, SocketFlags.None, OnDataReceived, client);
                    SendData(MsgHelper.LoginRequest());
                    //var test = bpmdemo.Replace("{num}", new Random().Next(99).ToString());
                    //SendData(MsgHelper.DataMsg(test));
                    //var testHex = string.Join("", test.Select(c => ((int)c).ToString("X2")));
                    //Logging.Logger.Information("BSM: hex: {0}", testHex);
                }
                else
                {
                    Logging.Logger.Information($"BSM: Time:{DateTime.Now} :StartListening: Can not connect to server! ");
                    
                }
                    
            }
            catch (Exception ex)
            { 

                Logging.Logger.Error("BSM: OnSocketAccepted :" + ex.Message);
                
            }
        }
        

        
        private void OnDataReceived(IAsyncResult result)
        {
            try
            {
                msg_ack = true;
                // This is the client that sent you data. AsyncState is exactly what you passed into the state parameter in BeginReceive
                client = result.AsyncState as Socket;
                if (!client.Connected)
                {
                    return;
                }
                int received = client.EndReceive(result);
                if (received <= 0)
                    return;
                //Copy the recieved data into new buffer , to avoid null bytes
                byte[] recData = new byte[received];
                Buffer.BlockCopy(buffer, 0, recData, 0, received);
                Thread T = new Thread(DataProc);
                T.IsBackground = true;
                T.Start(recData);
                // Start a new async receive on the client to receive more data.
                client.BeginReceive(buffer, 0, buffer.Length, SocketFlags.None, OnDataReceived, client);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }

        }

        Random rnd = new Random();
        int flight_nbr = 1;
        int msgidx = 0;
        string s_msg = String.Empty;
        bool msg_ack = true;

        private void DataProc(object obj)
        {
            if (obj == null) return;
            string bag = DateTime.Now.ToString("0hhmmssfff");

            byte[] recData = (byte[])obj;
            SitaMsg msg = new SitaMsg();
            msg.PraseData(recData);
            Console.WriteLine($"Time:{DateTime.Now} - RCV- MsgType: {msg.Type.ToString()} - MsgId  : {msg.Message_id_number.ToString()}- MsgData: {msg.Data.ToString()} - Raw Data: {msg.HexString}");
            Logging.Logger.Information($"BSM: Time:{DateTime.Now} - RCV- MsgType: {msg.Type.ToString()} - MsgId  : {msg.Message_id_number.ToString()}- MsgData: {msg.Data.ToString()}- Raw Data: {msg.HexString}");
            


            if (msg.Type == MsgType.LOGIN_RQST)
            {
               
            }

            if (msg.Type == MsgType.ACK_MSG)
            {
               
            }

            if (msg.Type == MsgType.NAK_MSG)
            {
                Thread.Sleep(500);
                SendData(MsgHelper.AckDataMsg(s_msg));
                timeOut = 0;
            }
            if (msg.Type == MsgType.ACK_DATA)
            {
                //Lưu data
                try
                {
                    var DataObject = msg.Data.Split(Convert.ToChar("."));

                    var keyRabbit1 = DataObject.Where(i => i.Substring(0, 1) == "V").FirstOrDefault();
                    var keyRabbit2 = DataObject.Where(i => i.Substring(0, 1) == "N").FirstOrDefault();
                    string _keyQueue = (keyRabbit1 + "_" + keyRabbit2).Replace(@"\", "").Replace(System.Environment.NewLine, "");
                    RabbitPublish.Publish(_keyQueue, msg.Data.ToString());
                    SendData(MsgHelper.Ack_Msg());
                }
                catch (Exception ex)
                {
                    Logging.Logger.Error("BSM: Not parse and send to Rabbit server");


                }
               
            }
            if (msg.Type == MsgType.STATUS)
            {
                Thread.Sleep(500);
                SendData(MsgHelper.DataOnMsg());
                
                timeOut = 0;
            }
            msgidx++;
            if (msgidx > 6)
            {
                msgidx = 0;
            }
        }

        int timeOut = 0;
        private void checkTimeOut()
        {
            int firstTime = 0;
            while (true)
            {
                firstTime++;
                if (client != null)
                {
                    if (client.Connected)
                    {
                        timeOut++;

                        if (timeOut >= 50)
                        {
                            if (!msg_ack)
                            {
                                SendData(MsgHelper.LastAckDataMsg(s_msg));
                            }
                            timeOut = 0;
                        }
                    }
                    else
                    {
                        if (firstTime > 1)
                        {
                            if (CommonSocket.IsConnected(client))
                            {
                                Thread.Sleep(30000);
                                break;
                            }
                            Logging.Logger.Warning("BSM: Close connection!");
                            client.Dispose();
                            listener.Dispose();
                            listener = null;
                            Thread.Sleep(30000);
                            StartListening(ref statusConnect);
                            break;
                        }
                        
                        
                            
                    }
                        
                }
                else
                {
                    Logging.Logger.Warning("BSM: Can not connect!");
                    Thread.Sleep(10000);
                    
                    StartListening(ref statusConnect);
                    break;
                }
                Thread.Sleep(100);
            }
        }


        //send data
        private void SendData(SitaMsg msg)
        {
            if (!client.Connected)
            {
                return;
            }
            byte[] data = msg.ToByteArray();
            SocketAsyncEventArgs socketAsyncData = new SocketAsyncEventArgs();
            socketAsyncData.SetBuffer(data, 0, data.Length);
            client.SendAsync(socketAsyncData);
            Console.WriteLine($"Time:{DateTime.Now} - SND- MsgType: {msg.Type.ToString()} - MsgId  : {msg.Message_id_number.ToString()}- MsgData: {msg.Data.ToString()}");
            Logging.Logger.Information($"BSM: Time:{DateTime.Now} - SND- MsgType: {msg.Type.ToString()} - MsgId  : {msg.Message_id_number.ToString()}- MsgData: {msg.Data.ToString()}");
        }
        
    }
    public static class CommonSocket
    {
        public static bool IsConnected(this Socket client)
        {
            bool blockingState = client.Blocking;

            try
            {
                byte[] tmp = new byte[1];

                client.Blocking = false;
                client.Send(tmp, 0, 0);
                return true;
            }
            catch (SocketException e)
            {
                // 10035 == WSAEWOULDBLOCK
                if (e.NativeErrorCode.Equals(10035))
                {
                    return true;
                }
                else
                {
                    return false;
                }
            }
            finally
            {
                client.Blocking = blockingState;
            }
        }
    }
}