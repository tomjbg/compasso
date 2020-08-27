using Microsoft.EntityFrameworkCore;
using compasso.Models.Servicos;
using compasso.Models.Portifolios;
using compasso.Models.TabelaDeJuncao;
using compasso.Data.Map;
using Microsoft.EntityFrameworkCore.Infrastructure;
using compasso.Models;
// using compasso.Data.Map;

namespace compasso.Data
{
    public class CompassoDbContext : DbContext
    {
        public CompassoDbContext(DbContextOptions<CompassoDbContext> options) : base(options)
        {
            //Database.EnsureCreated();
            
        }

        
        public DbSet<Servico> Servicos { get; set; }
        public DbSet<Portifolio> Portifolios { get; set; }
        public DbSet<Imagem> Imagens { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder) 
        {
            // modelBuilder.ApplyConfiguration(new ModelMap());
            modelBuilder.ApplyConfiguration(new ServicoMap());
            modelBuilder.ApplyConfiguration(new PortifolioMap());
            modelBuilder.ApplyConfiguration(new ServicoPortifolioMap());
            modelBuilder.ApplyConfiguration(new VantagemMap());
            modelBuilder.ApplyConfiguration(new ImagemMap());

            
        }
        
    }
}