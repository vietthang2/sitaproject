
namespace ECNET.Office.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Office.QueuedEmail")]
    [BasedOnRow(typeof(Entities.QueuedEmailRow), CheckNames = true)]
    public class QueuedEmailColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        public Int32 PriorityId { get; set; }
        [EditLink]
        public String From { get; set; }
        public String FromName { get; set; }
        public String To { get; set; }
        public String ToName { get; set; }
        public String ReplyTo { get; set; }
        public String ReplyToName { get; set; }
        public String Cc { get; set; }
        public String Bcc { get; set; }
        public String Subject { get; set; }
        public String Body { get; set; }
        public String AttachmentFilePath { get; set; }
        public String AttachmentFileName { get; set; }
        public Int32 AttachedDownloadId { get; set; }
        public DateTime CreatedOnUtc { get; set; }
        public Int32 SentTries { get; set; }
        public DateTime SentOnUtc { get; set; }
        public String EmailAccountEmail { get; set; }
        public DateTime DontSendBeforeDateUtc { get; set; }
        public Boolean HasError { get; set; }
        public String Result { get; set; }
        public DateTime CreatedDate { get; set; }
        public String CreatedBy { get; set; }
        public DateTime UpdatedDate { get; set; }
        public String UpdatedBy { get; set; }
    }
}