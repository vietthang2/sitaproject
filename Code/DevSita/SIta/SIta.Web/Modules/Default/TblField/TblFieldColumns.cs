
namespace Sita.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.TblField")]
    [BasedOnRow(typeof(Entities.TblFieldRow), CheckNames = true)]
    public class TblFieldColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Guid Id { get; set; }
        [EditLink]
        public String Name { get; set; }
        public String Instance { get; set; }
        public String Value { get; set; }
        public String FlightRef { get; set; }
    }
}