using compasso.Models.Servicos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace compasso.Models
{
    public class Vantagem
    {
        public int VantagemId { get; set; }
        public string Descricao { get; set; }

        public int ServicoId { get; set; }
        public virtual Servico Servico { get; set; }
    }
}
