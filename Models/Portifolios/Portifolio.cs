using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using compasso.Models.TabelaDeJuncao;

namespace compasso.Models.Portifolios
{
    public class Portifolio
    {
        public int PortifolioId { get; set; }
        public string NomeCliente { get; set; }
        public string Descricao { get; set; }
        public string Imagem { get; set; }
        public string Link { get; set; }
        public bool? Ativo { get; set; }

        public virtual ICollection<ServicoPortifolio> ServicoPortifolios { get; set; }

    }
}
