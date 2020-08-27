using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using compasso.Models;
using Microsoft.EntityFrameworkCore;

namespace compasso.Data.Map
{
    public class VantagemMap : IEntityTypeConfiguration<Vantagem>
    {
        public void Configure(EntityTypeBuilder<Vantagem> builder)
        {
            builder.ToTable("Vantagem").HasKey(m => m.VantagemId);
            builder.Property(m => m.Descricao).HasColumnType("varchar(250)").IsRequired();

            
        }
    }
}
