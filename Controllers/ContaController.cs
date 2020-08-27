using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using compasso.Security;
using compasso.ViewModels;

namespace compasso.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    public class ContaController : Controller
    {
        [AllowAnonymous]
        [HttpPost]
        [Route("v1/login")]
        public JsonResult Login([FromBody]User usuario, [FromServices]AccessManager accessManager)
        {
            if (accessManager.ValidateCredentials(usuario))
            {
                JsonResult js = Json(accessManager.GenerateToken(usuario));
                return js;
                //return Json(accessManager.GenerateToken(usuario));
            }
            else
            {
                return Json(new {
                    Authenticated = false,
                    Message = "Falha ao autenticar"
                });
            }
        }




        
    }
}