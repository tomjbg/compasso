using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using compasso.Models;
using Microsoft.EntityFrameworkCore;

namespace compasso.Data.Map
{
    public class ImagemMap : IEntityTypeConfiguration<Imagem>
    {
        public void Configure(EntityTypeBuilder<Imagem> builder)
        {
            builder.ToTable("Imagem");
            builder.HasKey(m => m.Id);
            builder.Property(m => m.Name).HasColumnType("varchar(255)").IsRequired();
            builder.Property(m => m.Data).HasColumnType("longblob").IsRequired();
            builder.Property(m => m.Length).HasColumnType("int");
            builder.Property(m => m.ContentType).HasColumnType("varchar(10)").IsRequired();
        }
    }
}
