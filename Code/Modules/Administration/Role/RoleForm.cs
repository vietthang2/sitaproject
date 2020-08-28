
namespace ECNET.Administration.Forms
{
    using Serenity.ComponentModel;
    using System;

    [FormScript("Administration.Role")]
    [BasedOnRow(typeof(Entities.RoleRow), CheckNames = true)]
    public class RoleForm
    {
        public String RoleName { get; set; }
        public Int32 LevelApproval { get; set; }
        
    }
}