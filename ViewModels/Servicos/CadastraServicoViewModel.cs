using compasso.Models;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace compasso.ViewModels.Servicos
{
    public class CadastraServicoViewModel
    {
        public int Id { get; set; }
        public string Titulo { get; set; }
        public string UrlVideo { get; set; }
        public ImagemViewModel Imagem { get; set; }
        public string DescricaoCurta { get; set; }
        public string DescricaoLonga { get; set; }
        public bool Ativo { get; set; }
        public ICollection<VantagemViewModel> ListaVantagens { get; set; }


        public CadastraServicoViewModel()
        {
            this.ListaVantagens = new List<VantagemViewModel>();
            this.Imagem = new ImagemViewModel();
        }
    }
}
