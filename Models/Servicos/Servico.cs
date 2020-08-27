using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using compasso.Models.TabelaDeJuncao;

namespace compasso.Models.Servicos
{
    public class Servico
    {
        public int ServicoId { get; set; }
        public string Titulo { get; set; }
        public string UrlVideo { get; set; }
        public string DescricaoCurta { get; set; }
        public string DescricaoLonga { get; set; }
        public bool? Ativo { get; set; }

        public virtual ICollection<Vantagem> ListaVantagens { get; set; }
        public virtual ICollection<ServicoPortifolio> ServicoPortifolios { get; set; }
        public virtual Imagem Imagem { get; set; }

        public Servico()
        {
            this.ListaVantagens = new List<Vantagem>();
            this.ServicoPortifolios = new List<ServicoPortifolio>();
            this.Imagem = new Imagem();
        }
    }
}
