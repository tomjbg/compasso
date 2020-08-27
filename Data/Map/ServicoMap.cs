using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using Microsoft.EntityFrameworkCore.Metadata.Builders;
using compasso.Models.Servicos;
using Microsoft.EntityFrameworkCore;

namespace compasso.Data.Map
{
    public class ServicoMap : IEntityTypeConfiguration<Servico>
    {
        public void Configure(EntityTypeBuilder<Servico> builder)
        {
            builder.ToTable("Servico");
            builder.HasKey(m => m.ServicoId);
            builder.Property(m => m.Titulo).HasColumnType("varchar(150)").HasMaxLength(250).IsRequired();
            builder.Property(m => m.UrlVideo).HasColumnType("varchar(1024)");
            builder.Property(m => m.DescricaoCurta).HasColumnType("varchar(500)").HasMaxLength(500).IsRequired();
            builder.Property(m => m.DescricaoLonga).HasColumnType("text");
            builder.Property(m => m.Ativo).HasColumnType("bool").HasDefaultValue(true);

            builder.HasMany(m => m.ListaVantagens)
                    .WithOne(m => m.Servico)
                    .HasForeignKey(m => m.ServicoId);

            builder.HasOne(m => m.Imagem)
                    .WithOne(m => m.Servico).HasPrincipalKey("Servico", "ServicoId");

        }
    }
}
