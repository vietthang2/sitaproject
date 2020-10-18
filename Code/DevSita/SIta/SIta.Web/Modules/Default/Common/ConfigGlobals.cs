using Newtonsoft.Json;
using Serenity;
using Sita.Modules.BPMServices.DTO;
using Sita.Modules.BSMServices.DTO;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;

namespace Sita.Modules.Default.Common
{
    public static class ConfigGlobals
    {
        public static string application = BSMServerConfig().BSMServer.Application;// "BHS_CXR";
        public static ushort version = BSMServerConfig().BSMServer.Version;// 2;//version 2
        public static string username= BSMServerConfig().BSMServer.Username;
        public static string password = BSMServerConfig().BSMServer.Password        ;//"password";
        public static ushort msg_id = BSMServerConfig().BSMServer.Msg_id;//1;

        public static string passwordBpm = BPMServerConfig().BPMServer.Password;//"password";
        public static ushort msg_idBpm = BPMServerConfig().BPMServer.Msg_id;//1;
        public static BSMServerModel BSMServerConfig()
        {
            //Doc cau hình MSMQ Server từ file config
            try
            {
                using (var reader = new StreamReader(AppDomain.CurrentDomain.BaseDirectory + "ServerConfig.json"))
                {
                    var appSettings = JsonConvert.DeserializeObject<BSMServerModel>(reader.ReadToEnd());
                    return appSettings;


                }
            }
            catch (Exception ex)
            {
                Log.Error(ex.Message);
                return null;
                
            }
        }
        public static BPMServerModel BPMServerConfig()
        {
            //Doc cau hình MSMQ Server từ file config
            try
            {
                using (var reader = new StreamReader(AppDomain.CurrentDomain.BaseDirectory + "ServerConfig.json"))
                {
                    var appSettings = JsonConvert.DeserializeObject<BPMServerModel>(reader.ReadToEnd());
                    return appSettings;


                }
            }
            catch (Exception ex)
            {
                Log.Error(ex.Message);
                return null;

            }
        }
    }
    
}