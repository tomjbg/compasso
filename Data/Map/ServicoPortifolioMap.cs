using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;
using compasso.Models.TabelaDeJuncao;

namespace compasso.Data.Map
{
    public class ServicoPortifolioMap : IEntityTypeConfiguration<ServicoPortifolio>
    {
        public void Configure(EntityTypeBuilder<ServicoPortifolio> builder)
        {
            builder.HasKey(sp => new
            {
                sp.ServicoId,
                sp.PortifolioId
            });

            builder.HasOne(m => m.Servico)
                    .WithMany(m => m.ServicoPortifolios)
                    .HasForeignKey(m => m.ServicoId);

            builder.HasOne(m => m.Portifolio)
                    .WithMany(m => m.ServicoPortifolios)
                    .HasForeignKey(m => m.PortifolioId);
                                        
        }
    }
}
