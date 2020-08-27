using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices;
using System.Text;
using System.Threading.Tasks;

namespace CXR1B_SAC.BSM
{
    public static class MsgHelper
    {
        static string application = "BHS_CXR";
        static ushort version = 2;//version 2
        static string username;
        static string password;
        static ushort msg_id = 1;

        public static SitaMsg GetBaseMsg()
        {
            SitaMsg msg = new SitaMsg();
            msg.App_id = application;
            msg.Version = version;
            return msg;
        }

        /// <summary>
        /// build login reguest
        /// </summary>
        /// <returns></returns>
        public static SitaMsg LoginRequest()
        {
            msg_id++;
            SitaMsg msg = GetBaseMsg();
            msg.Type = MsgType.LOGIN_RQST;
            msg.Message_id_number = (ushort)(msg_id > 65534 ? 1 : msg_id);
            msg.Data = password;
            return msg;
        }

        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        public static SitaMsg LogoffRequest()
        {
            msg_id++;
            SitaMsg msg = GetBaseMsg();
            msg.Type = MsgType.LOG_OFF;
            msg.Message_id_number = (ushort)(msg_id > 65534 ? 1 : msg_id);
            return msg;
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="data"></param>
        /// <returns></returns>
        public static SitaMsg DataMsg(string data)
        {
            msg_id++;
            SitaMsg msg = GetBaseMsg();
            msg.Type = MsgType.DATA;
            msg.Message_id_number = (ushort)(msg_id > 65534 ? 1 : msg_id);
            msg.Data = data;
            return msg;
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="data"></param>
        /// <param name="msg_id"></param>
        /// <returns></returns>
        public static SitaMsg AckDataMsg(string data)
        {
            msg_id++;
            SitaMsg msg = GetBaseMsg();
            msg.Type = MsgType.ACK_DATA;
            msg.Message_id_number = (ushort)(msg_id > 65534 ? 1 : msg_id);
            msg.Data = data;
            return msg;
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="data"></param>
        /// <param name="msg_id"></param>
        /// <returns></returns>
        public static SitaMsg LastAckDataMsg(string data)
        {
            SitaMsg msg = GetBaseMsg();
            msg.Type = MsgType.ACK_DATA;
            msg.Message_id_number = (ushort)(msg_id);
            msg.Data = data;
            return msg;
        }

        /// <summary>
        /// login acept
        /// </summary>
        /// <returns></returns>
        public static SitaMsg LoginAcept()
        {
            msg_id++;
            SitaMsg msg = GetBaseMsg();
            msg.Type = MsgType.LOGIN_ACCEPT;
            msg.Message_id_number = (ushort)(msg_id > 65534 ? 1 : msg_id);
            return msg;
        }

        /// <summary>
        /// login acept
        /// </summary>
        /// <returns></returns>
        public static SitaMsg LoginReject()
        {
            msg_id++;
            SitaMsg msg = GetBaseMsg();
            msg.Type = MsgType.LOGIN_REJECT;
            msg.Message_id_number = (ushort)(msg_id > 65534 ? 1 : msg_id);
            return msg;
        }

        /// <summary>
        /// ack msg
        /// </summary>
        /// <returns></returns>
        public static SitaMsg Ack_Msg()
        {
            msg_id++;
            SitaMsg msg = GetBaseMsg();
            msg.Type = MsgType.ACK_MSG;
            msg.Message_id_number = (ushort)(msg_id > 65534 ? 1 : msg_id);
            return msg;
        }

        /// <summary>
        /// Nack msg
        /// </summary>
        /// <returns></returns>
        public static SitaMsg NAck_Msg()
        {
            msg_id++;
            SitaMsg msg = GetBaseMsg();
            msg.Type = MsgType.NAK_MSG;
            msg.Message_id_number = (ushort)(msg_id > 65534 ? 1 : msg_id);
            return msg;
        }

        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        public static SitaMsg DataOnMsg()
        {
            msg_id++;
            SitaMsg msg = GetBaseMsg();
            msg.Type = MsgType.DATA_ON;
            msg.Message_id_number = (ushort)(msg_id > 65534 ? 1 : msg_id);
            return msg;
        }

        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        public static SitaMsg DataOffMsg()
        {
            msg_id++;
            SitaMsg msg = GetBaseMsg();
            msg.Type = MsgType.DATA_OFF;
            msg.Message_id_number = (ushort)(msg_id > 65534 ? 1 : msg_id);
            return msg;
        }
    }

    public enum MsgType
    {
        LOGIN_RQST = 1,
        LOGIN_ACCEPT = 2,
        LOGIN_REJECT = 3,
        DATA = 4,
        ACK_DATA = 5,
        ACK_MSG = 6,
        NAK_MSG = 7,
        STATUS = 8,
        DATA_ON = 9,
        DATA_OFF = 10,
        LOG_OFF = 11
    }

    //msg
    public class SitaMsg
    {
        string app_id;//8 byte
        ushort version;
        MsgType type;
        ushort message_id_number;
        ushort data_length;
        string reserved = "";//4 byte
        string data = "";
        string hexString = string.Empty;

        public string App_id { get => app_id; set => app_id = value; }
        public ushort Version { get => version; set => version = value; }
        public MsgType Type { get => type; set => type = value; }
        public ushort Message_id_number { get => message_id_number; set => message_id_number = value; }
        public ushort Data_length { get => data_length; set => data_length = value; }
        public string Reserved { get => reserved; set => reserved = value; }
        public string Data { get => data; set => data = value; }
        public string HexString { get => hexString; set => hexString = value; }

        public byte[] ToByteArray()
        {
            List<byte> bytes = new List<byte>();
            byte[] app_id_arr = ASCIIEncoding.ASCII.GetBytes(app_id);
            Array.Resize(ref app_id_arr, 8);
            byte[] version_arr = BitConverter.GetBytes(version);
            byte[] type_arr = BitConverter.GetBytes((ushort)(type));
            byte[] message_id_number_arr = BitConverter.GetBytes(message_id_number);
            data_length = (ushort)(string.IsNullOrEmpty(data) ? 0 : data.Length);
            byte[] data_length_arr = BitConverter.GetBytes(data_length);
            byte[] reserved_arr = ASCIIEncoding.ASCII.GetBytes(reserved);
            Array.Resize(ref reserved_arr, 4);
            byte[] data_arr = ASCIIEncoding.ASCII.GetBytes(data);
            bytes.AddRange(app_id_arr.ToList());
            bytes.AddRange(version_arr.ToList());
            bytes.AddRange(type_arr.ToList());
            bytes.AddRange(message_id_number_arr.ToList());
            bytes.AddRange(data_length_arr.ToList());
            bytes.AddRange(reserved_arr.ToList());
            bytes.AddRange(data_arr.ToList());

            return bytes.ToArray();
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="bytes"></param>
        /// <returns>false: data error</returns>
        public bool PraseData(byte[] bytes)
        {
            hexString = BitConverter.ToString(bytes).Replace("-", string.Empty);
            if (bytes.Length >= 20)
            {
                App_id = Encoding.UTF8.GetString(bytes, 0, 7);//8 byte
                Version = BitConverter.ToUInt16(bytes, 8);//2 byte
                Type = (MsgType)(BitConverter.ToUInt16(bytes, 10));//2 byte
                Message_id_number = BitConverter.ToUInt16(bytes, 12);//2 byte
                Data_length = BitConverter.ToUInt16(bytes, 14);//2 byte
                Reserved = Encoding.UTF8.GetString(bytes, 16, 4);//4 byte
                if ((Data_length > 0 && (Data_length + 20) == bytes.Length))
                {
                    Data = Encoding.UTF8.GetString(bytes, 20, Data_length);//Data_length byte
                    return true;
                }
                else
                {
                    return false;
                }
            }
            else
            {
                return false;
            }
        }
    }

}
