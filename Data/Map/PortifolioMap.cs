using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using compasso.Models.Portifolios;

namespace compasso.Data.Map
{
    public class PortifolioMap : IEntityTypeConfiguration<Portifolio>
    {
        void IEntityTypeConfiguration<Portifolio>.Configure(EntityTypeBuilder<Portifolio> builder)
        {
            builder.ToTable("Portifolio").HasKey(m => m.PortifolioId);
            builder.Property(m => m.NomeCliente).HasColumnType("varchar(150)").HasMaxLength(150).IsRequired();
            builder.Property(m => m.Descricao).HasColumnType("varchar(1024)").HasMaxLength(1024).IsRequired();
            builder.Property(m => m.Imagem).HasColumnType("varchar(1024)").HasMaxLength(1024);
            builder.Property(m => m.Link).HasColumnType("varchar(1024)").HasMaxLength(1024);
            builder.Property(m => m.Ativo).HasColumnType("bool").HasDefaultValue(true);
                        
        }
    }
}
