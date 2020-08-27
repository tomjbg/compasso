using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace compasso.Models.HomeSomos
{
    public class HomeSomo
    {
        public int HomeSomoId { get; set; }
        public Imagem Imagem { get; set; }
        public string Titulo { get; set; }
        public string Texto { get; set; }

        public HomeSomo()
        {
            this.Imagem = new Imagem();

        }
    }
}
