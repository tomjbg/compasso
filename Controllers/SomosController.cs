using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using compasso.ViewModels;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace compasso.Controllers
{
    [Produces("application/json")]
    [DisableRequestSizeLimit]
    [Route("api/[controller]")]
    [Authorize("Bearer")]
    // SOMOS | HOME
    public class SomosController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }


        [HttpGet]
        [Route("v1/listasomos")]
        public JsonResult ListaSomos()
        {
            var lst = new List<object>()
            {
                new { id=1, titulo="Somos1", descricao="Descrição somos1"},
                new { id=2, titulo="Somos2", descricao="Descrição somos2"},
                new { id=3, titulo="Somos3", descricao="Descrição somos3"}
            };

            return Json(new ResultViewModel()
            {
                Success = true,
                Message = "Dados listados com sucesso !!!",
                Data = lst
            });
        }

        [HttpPost]
        [Route("v1/identidade")]
        public JsonResult CadIdentidade()
        {



            return Json(new ResultViewModel()
            {

            });
        }


    }
}