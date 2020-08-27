using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using compasso.Models.Servicos;
using compasso.Models.Portifolios;

namespace compasso.Models.TabelaDeJuncao
{
    public class ServicoPortifolio
    {
        public int ServicoId { get; set; }
        public Servico Servico { get; set; }

        public int PortifolioId { get; set; }
        public Portifolio Portifolio { get; set; }
    }
}
