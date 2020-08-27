using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using Microsoft.EntityFrameworkCore.Metadata.Builders;
using compasso.Models.Servicos;
using Microsoft.EntityFrameworkCore;
using compasso.Models.HomeSomos;

namespace compasso.Data.Map
{
    public class HomeSomoMap : IEntityTypeConfiguration<HomeSomo>
    {
        public void Configure(EntityTypeBuilder<HomeSomo> builder)
        {
            builder.ToTable("HomeSomos");
            builder.HasKey(m => m.HomeSomoId);
            builder.Property(m => m.Titulo).HasColumnType("varchar(150)").HasMaxLength(150).IsRequired();
            builder.Property(m => m.Texto).HasColumnType("text");


        }
    }
}
