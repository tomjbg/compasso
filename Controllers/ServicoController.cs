using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using compasso.Models;
using compasso.Models.Servicos;
using Microsoft.AspNetCore.Mvc;
using System.IO;
using Microsoft.AspNetCore.Http;
using compasso.ViewModels.Servicos;
using compasso.ViewModels;
using Microsoft.AspNetCore.Authorization;
using Newtonsoft.Json;
using Microsoft.AspNetCore.Hosting;
using compasso.Data;
using Microsoft.EntityFrameworkCore;
using System.Text;
using compasso.Models.TabelaDeJuncao;

namespace compasso.Controllers
{
    [Produces("application/json")]
    [DisableRequestSizeLimit]
    [Route("api/[controller]")]
    [Authorize("Bearer")]
    // SERVICO | FAZEMOS
    public class ServicoController : Controller
    {
        private IHostingEnvironment _hostingEnvironment;
        private CompassoDbContext _compassoDbContext;

        public ServicoController(
            IHostingEnvironment hostingEnvironment,
            CompassoDbContext compassoDbContext)
        {
            _hostingEnvironment = hostingEnvironment;
            _compassoDbContext = compassoDbContext;
        }

        public IActionResult Index()
        {
            return View();
        }

        [HttpPost]
        [Route("v1/cadastrar")]
        //public JsonResult Cadastrar([FromForm]CadastraServicoViewModel servico, List<IFormFile> files)
        public JsonResult Cadastrar([FromForm]CadastraServicoViewModel servico, List<IFormFile> files)
        {
            #region Código produção

            try
            {
                Servico srv = new Servico();
                if (files.Count > 0)
                {
                    Imagem img = new Imagem();
                    IFormFile fl = files[0];
                    img.ContentType = fl.ContentType;
                    img.Name = fl.Name;
                    img.Length = Convert.ToInt32(fl.Length);
                    Stream stream = fl.OpenReadStream();
                    using (BinaryReader reader = new BinaryReader(stream))
                    {
                        img.Data = reader.ReadBytes((int)stream.Length);
                    }
                    
                    srv.Imagem = img;
                }

                var json = HttpContext.Request.Form["servico"];
                CadastraServicoViewModel cadservVM = JsonConvert.DeserializeObject<CadastraServicoViewModel>(json);

                srv.Titulo = cadservVM.Titulo;
                srv.UrlVideo = cadservVM.UrlVideo;
                srv.DescricaoCurta = cadservVM.DescricaoCurta;
                srv.DescricaoLonga = cadservVM.DescricaoLonga;
                srv.Ativo = true;
                srv.Imagem.Data64 = cadservVM.Imagem.Data;
                foreach (VantagemViewModel vantagem in cadservVM.ListaVantagens)
                {
                    srv.ListaVantagens.Add(new Vantagem() { Descricao = vantagem.Descricao });
                }

                _compassoDbContext.Servicos.Add(srv);
                int result = _compassoDbContext.SaveChanges();

                cadservVM.Id = srv.ServicoId;
                cadservVM.Imagem.Id = srv.Imagem.Id;
                cadservVM.Imagem.ContentType = srv.Imagem.ContentType;
                cadservVM.Imagem.Data = srv.Imagem.Data64;

                cadservVM.ListaVantagens.Clear();
                srv.ListaVantagens.ToList()
                    .ForEach(m => cadservVM.ListaVantagens
                    .Add(new VantagemViewModel() { VantagemId = m.VantagemId, Descricao = m.Descricao }));
                

                return Json(new
                {
                    Success = true,
                    Message = "Registro alterado com sucesso.",
                    Data = cadservVM
                });

            }
            catch (Exception ex)
            {
                return Json(new
                {
                    Success = false,
                    Message = "Infelizmente aconteceu um erro. Detalhe: " + ex.Message
                });
            }

            #endregion

        }

        [HttpDelete]
        [Route("v1/deletaservico")]
        public JsonResult Deletar(string id)
        {
            if (!string.IsNullOrEmpty(id))
            {
                try
                {
                    int idDel = Convert.ToInt32(id);
                    Servico srv = this._compassoDbContext.Servicos.Where(m => m.ServicoId == idDel)
                                        .Include(m => m.Imagem)
                                        .Include(m => m.ListaVantagens)
                                        .Include(m => m.ServicoPortifolios).FirstOrDefault();
                    this._compassoDbContext.Servicos.Remove(srv);
                    this._compassoDbContext.SaveChanges();

                    return Json(new
                    {
                        Success = true,
                        Message = "Serviço deletado com sucesso",
                        Data = new { id = id }
                    });
                }
                catch (Exception ex)
                {
                    return Json(new
                    {
                        Success = false,
                        Message = "Aconteceu um erro, detalhes: " + ex.Message,
                        Data = new { id = id }
                    });

                    //throw;
                }

            }

            return Json(new
            {
                Success = false,
                Message = "Infelizmente aconteceu um erro",
                Data = new { }
            });

        }

        [HttpPut]
        [Route("v1/alteraservico")]
        public JsonResult AlteraServico([FromForm]CadastraServicoViewModel servico, List<IFormFile> files)
        {

            try
            {
                #region Código oficial

                var servicoJson = HttpContext.Request.Form["servico"];
                CadastraServicoViewModel cadServVM = JsonConvert.DeserializeObject<CadastraServicoViewModel>(servicoJson);

                Servico srv = new Servico();
                srv = _compassoDbContext.Servicos
                                        .Include(m => m.ListaVantagens)
                                        .Include(m => m.Imagem)
                                        .Include(m => m.ServicoPortifolios)
                                        .Where(m => m.ServicoId == cadServVM.Id).FirstOrDefault();


                srv.Titulo = cadServVM.Titulo;
                srv.DescricaoCurta = cadServVM.DescricaoCurta;
                srv.DescricaoLonga = cadServVM.DescricaoLonga;
                srv.UrlVideo = cadServVM.UrlVideo;

                List<Vantagem> vantagensRemover = new List<Vantagem>();

                foreach (Vantagem v in srv.ListaVantagens)
                {
                    VantagemViewModel vvm = cadServVM.ListaVantagens.FirstOrDefault(m => m.VantagemId == v.VantagemId);
                    if (vvm != null)
                    {
                        v.Descricao = vvm.Descricao;
                    }

                    if (!cadServVM.ListaVantagens.Any(m => m.VantagemId == v.VantagemId))
                    {
                        vantagensRemover.Add(v);
                    }
                }

                foreach (Vantagem v in vantagensRemover)
                {
                    srv.ListaVantagens.Remove(v);
                }


                foreach (VantagemViewModel vvm in cadServVM.ListaVantagens)
                {
                    if (vvm.VantagemId == 0)
                    {
                        srv.ListaVantagens.Add(new Vantagem()
                        {
                            Descricao = vvm.Descricao
                        });
                    }
                }


                if (files.Count > 0)
                {
                    IFormFile fl = files[0];
                    srv.Imagem.ContentType = fl.ContentType;
                    srv.Imagem.Name = fl.Name;
                    srv.Imagem.Length = Convert.ToInt32(fl.Length);
                    Stream stream = fl.OpenReadStream();
                    using (BinaryReader reader = new BinaryReader(stream))
                    {
                        srv.Imagem.Data = reader.ReadBytes((int)stream.Length);
                    }
                    srv.Imagem.Data64 = cadServVM.Imagem.Data;
                }

                _compassoDbContext.Entry(srv).State = EntityState.Modified;
                int result = _compassoDbContext.SaveChanges();

                // Passando os dados atualizados para o ViewModel
                
                cadServVM.Id = srv.ServicoId;
                cadServVM.Ativo = srv.Ativo.HasValue;
                cadServVM.DescricaoCurta = srv.DescricaoCurta;
                cadServVM.DescricaoLonga = srv.DescricaoLonga;
                if (cadServVM.Imagem != null)
                {
                    cadServVM.Imagem.Id = srv.Imagem.Id;
                    cadServVM.Imagem.ContentType = srv.Imagem.ContentType;
                    cadServVM.Imagem.Data = srv.Imagem.Data64;
                }
                cadServVM.ListaVantagens.Clear();
                foreach (Vantagem vantagem in srv.ListaVantagens)
                {
                    cadServVM.ListaVantagens.Add(new VantagemViewModel() { VantagemId = vantagem.VantagemId, Descricao = vantagem.Descricao });
                }
                               
                return Json(new
                {
                    Success = true,
                    Message = "Dados atualizados com sucesso.",
                    Data = cadServVM
                });

                #endregion

                
            }
            catch (Exception ex)
            {
                return Json(new
                {
                    Success = false,
                    Message = "Infelizmente aconteceu um erro. Detalhes; " + ex.Message,
                    Data = new { }
                });
            }


        }


        //[DisableRequestSizeLimit]
        [HttpGet]
        [Route("v1/listaservicos")]
        public JsonResult ListaServicos()
        {
            ResultViewModel result = new ResultViewModel();

            try
            {
                List<CadastraServicoViewModel> Servicos = new List<CadastraServicoViewModel>();

                foreach (Servico srv in _compassoDbContext.Servicos.Include(m => m.ListaVantagens).Include(m => m.Imagem).Include(m=> m.ServicoPortifolios).ToList())
                {
                    CadastraServicoViewModel vm = new CadastraServicoViewModel();
                    vm.Id = srv.ServicoId;
                    vm.Ativo = srv.Ativo.HasValue;
                    vm.Titulo = srv.Titulo;
                    vm.UrlVideo = srv.UrlVideo;
                    vm.Imagem.Id = srv.Imagem.Id;
                    vm.Imagem.ContentType = srv.Imagem.ContentType;
                    if (String.IsNullOrEmpty(srv.Imagem.Data64))
                    {
                        vm.Imagem.Data = Convert.ToBase64String(srv.Imagem.Data);
                    }
                    else
                    {
                        vm.Imagem.Data = srv.Imagem.Data64;
                    }
                    vm.DescricaoCurta = srv.DescricaoCurta;
                    vm.DescricaoLonga = srv.DescricaoLonga;
                    
                    foreach (Vantagem vantagem in srv.ListaVantagens)
                    {
                        vm.ListaVantagens.Add(new VantagemViewModel()
                        {
                            VantagemId = vantagem.VantagemId,
                            Descricao = vantagem.Descricao
                        });
                    }

                    Servicos.Add(vm);
                }
                
                return Json(new ResultViewModel()
                {
                    Success = true,
                    Message = "Operação realizada com sucesso",
                    Data = Servicos
                });

            }
            catch (Exception ex)
            {
                return Json(new ResultViewModel()
                {
                    Success = false,
                    Message = "Infelizmente aconteceu um erro. Detalhes: " + ex.Message
                });
            }

            //return Json(new ResultViewModel()
            //{
            //    Success = false,
            //    Message = "Infelizmente aconteceu um erro.
            //});
        }

        [HttpPost]
        [Route("v1/listaservicos")]
        public JsonResult ListaDeServicos()
        {
            return Json("Lista de serviços aqui");
        }

    }
}