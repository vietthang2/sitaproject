
namespace Sita.Membership
{
    using Serenity.ComponentModel;
    using Serenity.Services;

    [FormScript("Membership.Login")]
    [BasedOnRow(typeof(Administration.Entities.UserRow))]
    public class LoginRequest : ServiceRequest
    {
        
        public string Username { get; set; }
        [PasswordEditor, Required(true)]
        public string Password { get; set; }
    }
}