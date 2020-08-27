using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CXR1B_SAC.BSM
{
#if NET_FULL
    [Serializable]
#endif
    public class BSMException : Exception
    {
        public ErrorCode ErrorCode { get; }

        public BSMException(ErrorCode errorCode) : this(errorCode, $"Communication failed with error '{errorCode}'.")
        {
        }

        public BSMException(ErrorCode errorCode, Exception innerException) : this(errorCode, innerException.Message,
            innerException)
        {
        }

        public BSMException(ErrorCode errorCode, string message) : base(message)
        {
            ErrorCode = errorCode;
        }

        public BSMException(ErrorCode errorCode, string message, Exception inner) : base(message, inner)
        {
            ErrorCode = errorCode;
        }

#if NET_FULL
        protected PlcException(System.Runtime.Serialization.SerializationInfo info,
            System.Runtime.Serialization.StreamingContext context) : base(info, context)
        {
            ErrorCode = (ErrorCode) info.GetInt32(nameof(ErrorCode));
        }
#endif
    }
}
