using compasso.Models.Servicos;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace compasso.Models
{
    public class Imagem
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public Byte[] Data { get; set; }
        public string Data64 { get; set; }
        public int Length { get; set; }
        public string ContentType { get; set; }

        public virtual Servico Servico { get; set; }
    }
}
