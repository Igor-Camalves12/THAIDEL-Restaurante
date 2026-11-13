using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace pratica1
{
    public class Produto
    {

        private string nome;

        public string Nome
        {
            get
            {
                return nome;
            }

            set
            {
                nome = value;
            }
        }
        public double preco { get; set;}
        public string categoria { get; set; }
    }
}
