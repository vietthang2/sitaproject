using Serilog;
using System;
using System.IO;

namespace Modules.Common
{
    public static class Logging
    {
        public static Serilog.Core.Logger Logger;
        private static readonly string _logFileName = AppDomain.CurrentDomain.BaseDirectory + "Log\\Sita_LOG.log";
        private static readonly string _logLevel = "info";

        public static void InitLogging()
        {
            CreateDirectoryIfMissing("Log\\");
            LoggerConfiguration loggerConfiguration = new LoggerConfiguration();
            // set the log level
            switch (_logLevel)
            {
                case "fatal":
                    loggerConfiguration.MinimumLevel.Fatal();
                    break;
                case "error":
                    loggerConfiguration.MinimumLevel.Error();
                    break;
                case "warn":
                    loggerConfiguration.MinimumLevel.Warning();
                    break;
                case "info":
                    loggerConfiguration.MinimumLevel.Information();
                    break;
                case "debug":
                    loggerConfiguration.MinimumLevel.Debug();
                    break;
                case "verbose":
                    loggerConfiguration.MinimumLevel.Verbose();
                    break;
            }
            if (!string.IsNullOrEmpty(_logFileName))
            {
                // configure rolling file sink
                const int MAX_LOGFILE_SIZE = 1024 * 1024;
                const int MAX_RETAINED_LOGFILES = 500;
                loggerConfiguration.WriteTo.File(_logFileName, fileSizeLimitBytes: MAX_LOGFILE_SIZE, rollOnFileSizeLimit: true, retainedFileCountLimit: MAX_RETAINED_LOGFILES);
            }
            Logger = loggerConfiguration.CreateLogger();
            Logger.Information($"Current directory is: {System.IO.Directory.GetCurrentDirectory()}");
            Logger.Information($"Log file is: {System.IO.Path.GetFullPath(_logFileName)}");
            Logger.Information($"Log level is: {_logLevel}");
        }

        public static void CreateDirectoryIfMissing(string FolderPath)
        {
            bool folderExists = Directory.Exists(AppDomain.CurrentDomain.BaseDirectory + FolderPath);
            if (!folderExists)
            {
                Directory.CreateDirectory(AppDomain.CurrentDomain.BaseDirectory + FolderPath);
            }
        }
    }
}
