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
    // FIZEMOS | PORTIFÓLIO
    public class FizemosController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet]
        [Route("v1/listafizemos")]
        public JsonResult ListaFizemos()
        {
            var lst = new List<object>()
            {
                new { id=1, titulo="Fizemos1", descricao="Descrição fizemos1"},
                new { id=2, titulo="Fizemos2", descricao="Descrição fizemos2"},
                new { id=3, titulo="Fizemos3", descricao="Descrição fizemos3"}
            };

            return Json(new ResultViewModel()
            {
                Success = true,
                Message = "Dados listados com sucesso !!!",
                Data = lst
            });
        }

    }
}