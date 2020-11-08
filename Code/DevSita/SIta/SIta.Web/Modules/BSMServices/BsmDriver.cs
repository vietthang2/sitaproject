using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Sockets;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
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

        /// <summary>
        /// IP address of the PLC
        /// </summary>
        public string IP { get; set; }
        public string LocalIP { get; set; }

        /// <summary>
        /// PORT Number of the PLC, default is 102
        /// </summary>
        public int Port { get; set; }
        public int ClientPort { get; set; }
        private static ManualResetEvent connectDone =
       new ManualResetEvent(false);
        public static ManualResetEvent allDone = new ManualResetEvent(false);
        IPEndPoint remoteEP;
        static bool statusConnect;
        Socket client;
        //public bool CheckStatus()
        //{
        //    remoteEP = new IPEndPoint(IPAddress.Parse(IP), Port);
        //    listener = new Socket(AddressFamily.InterNetwork, SocketType.Stream, ProtocolType.Tcp);
        //    //CommonSocket.IsConnected();
        //}
        public void StartListening(ref bool _statusConnect)
        {

            try
            {


                if (client == null)
                
                {

                    remoteEP = new IPEndPoint(IPAddress.Parse(IP), Port);

                    listener = new Socket(AddressFamily.InterNetwork, SocketType.Stream, ProtocolType.Tcp);
                    //CommonSocket.SocketConnected(client);
                    Logging.Logger.Information($"BSM: Status connetion: " + (statusConnect==true?"Connected":"Disconnected"));
                    if (statusConnect) return;
                    listener.Bind(new IPEndPoint(IPAddress.Parse(LocalIP), Port));
                    Logging.Logger.Information($"BSM: Begin Bind to server LocalIp: {LocalIP} and port:{ClientPort}");
                    listener.BeginConnect(remoteEP,
                        new AsyncCallback(OnSocketAccepted), listener);

                    Logging.Logger.Information($"BSM: Begin connect to server Ip: {IP} and port:{Port}");
                    Logging.Logger.Information($"BSM: Time:{DateTime.Now} :StartListening");
                    
                    Thread T = new Thread(checkTimeOut);
                    T.IsBackground = true;
                    T.Start();
                }
                else
                {
                    
                    
                    if (client.Connected)
                    {
                        statusConnect = true;
                        Logging.Logger.Information("BSM: Connected! ....");
                        SendData(MsgHelper.DataOnMsg());
                        return;
                    }
                    client.Disconnect(true);
                    client.Dispose();
                    statusConnect = false;
                    Thread.Sleep(10000);
                    StartListening(ref statusConnect);



                }

            }
            catch (Exception e)
            {
                statusConnect = false;
                if (e.Message == "Only one usage of each socket address (protocol/network address/port) is normally permitted")
                    return;
                if (e.Message == "BeginConnect cannot be called while another asynchronous operation is in progress on the same Socket")
                    Log.Error("Start Listening Error:" + e.Message + e.StackTrace + e.Source);
                Logging.Logger.Warning("BSM: Start Listening fail!"+e.ToString());
                FlushReceiveBuffer();
                
                return;

            }
        }
        public void SocketDisconnect(SocketAsyncEventArgs e)
        {
            
            Logging.Logger.Warning("BSM: Socket disconnect");
            StartListening(ref statusConnect);
        }
        private void OnSocketAccepted(IAsyncResult result)
        {
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
                    SendData(MsgHelper.LoginRequest());
                    Logging.Logger.Information($"BSM: Time:{DateTime.Now} :StartListening: OnSocketAccepted, But can not connect to server! ");
                    statusConnect = true;
                    //statusConnect = false;
                    //Thread.Sleep(10000);
                    //StartListening(ref statusConnect);
                }

            }
            catch (Exception ex)
            {
                statusConnect = false;
                Logging.Logger.Error("BSM: OnSocketAccepted :" + ex.Message);

            }
        }



        private void OnDataReceived(IAsyncResult result)
        {
            try
            {
                statusConnect = true;
                msg_ack = true;
                // This is the client that sent you data. AsyncState is exactly what you passed into the state parameter in BeginReceive
                client = result.AsyncState as Socket;
                if (!client.Connected)
                {
                    statusConnect = false;
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
                statusConnect = true;
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


            statusConnect = true;
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
                statusConnect = true;
                timeOut = 0;
            }
            if (msg.Type == MsgType.LOGIN_REJECT)
            {
                Thread.Sleep(5000);
                SendData(MsgHelper.LoginRequest());
                statusConnect = true;
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
            try
            {
                int firstTime = 0;
                while (true)
                {
                    firstTime++;
                    
                    if (client != null)
                    {
                        if (client.Connected)
                        {
                            Thread.Sleep(5000);
                            statusConnect =true;
                            timeOut++;
                            if (timeOut >= 20)
                            {
                                statusConnect = false;
                                Logging.Logger.Warning("BSM: disconnected!");
                                timeOut = 0;
                                FlushReceiveBuffer();
                                client.Shutdown(SocketShutdown.Both);
                                client.Dispose();
                                listener.Dispose();
                                //SendData(MsgHelper.DataOnMsg());
                                break;
                            }
                            
                            continue;
                        }
                        else
                        {
                            Logging.Logger.Warning("BSM: disconnected!"+ client.Connected);
                            listener.BeginConnect(remoteEP,
                                    new AsyncCallback(OnSocketAccepted), listener);
                            //FlushReceiveBuffer();
                                                     
                            
                            //SendData(MsgHelper.DataOnMsg());
                            statusConnect = false;
                            //StartListening(ref statusConnect);
                            
                            //break;

                        }
                       
                    }
                    else
                    {
                        Logging.Logger.Warning("BSM: client == null, Can not connect!");
                        statusConnect = false;
                        Thread.Sleep(20000);
                        StartListening(ref statusConnect);
                        //break;
                    }



                }
            }
            catch (Exception e1)
            {
                statusConnect = false;
                Logging.Logger.Error("BSM: error"+ e1.Message);
            }
        }


        //send data
        private void SendData(SitaMsg msg)
        {
            if (!client.Connected)
            {
                statusConnect = false;
                return;
            }
            statusConnect = true;
            byte[] data = msg.ToByteArray();
            SocketAsyncEventArgs socketAsyncData = new SocketAsyncEventArgs();
            socketAsyncData.SetBuffer(data, 0, data.Length);
            client.SendAsync(socketAsyncData);
            Console.WriteLine($"Time:{DateTime.Now} - SND- MsgType: {msg.Type.ToString()} - MsgId  : {msg.Message_id_number.ToString()}- MsgData: {msg.Data.ToString()}");
            Logging.Logger.Information($"BSM: Time:{DateTime.Now} - SND- MsgType: {msg.Type.ToString()} - MsgId  : {msg.Message_id_number.ToString()}- MsgData: {msg.Data.ToString()}");
        }
        public void FlushReceiveBuffer()
        {
            byte[] info = new byte[2];
            byte[] outval = new byte[2000];
            try
            {
                client.IOControl(IOControlCode.DataToRead, info, outval);
                uint bytesAvailable = BitConverter.ToUInt32(outval, 0);
                if (bytesAvailable != 0 && bytesAvailable < 2000)
                {
                    int len = client.Receive(outval); //Flush buffer
                }
            }
            catch
            {
                //Ignore errors
                return;
            }
        }
        public Socket TryConnect(Socket s)
        {
            Socket socket = s; ;

            try
            {
                
                var connect = Task.Factory.FromAsync(
                    socket.BeginConnect, socket.EndConnect, IP, Port, null);

                var isConnected = connect.Wait(TimeSpan.FromSeconds(0.5));

                if (!isConnected)
                {
                    socket.Close();
                    return null;
                }

                return socket;
            }
            catch
            {
                if (socket != null)
                {
                    socket.Dispose();
                }
                return null;
            }
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
        public static bool SocketConnected(Socket s)
        {
            // Exit if socket is null
            Logging.Logger.Warning("BSM: Check connecting...!");
            bool rs;
            try
            {
                if (s == null)
                {
                    Logging.Logger.Warning("BSM: Check connecting... false!");
                    rs = false;
                    return rs;
                }

                bool part1 = s.Poll(1000, SelectMode.SelectRead);
                bool part2 = (s.Available == 0);
                if (part1 && part2)
                    rs = false;
                else
                {
                    try
                    {
                        int sentBytesCount = s.Send(new byte[1], 1, 0);
                        rs = sentBytesCount == 1;
                    }
                    catch
                    {
                        rs = false;
                    }
                }
                
            }
            catch (Exception ex)
            {
                Logging.Logger.Warning("BSM: Check connecting... !" + ex.Message);
                rs = false;
            }
            Logging.Logger.Warning("BSM: Check connecting... !" + rs);
            return rs;
        }
    }
}