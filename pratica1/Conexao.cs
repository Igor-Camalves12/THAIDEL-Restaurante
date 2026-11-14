using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace pratica1
{
    public class Conexao
    {
        public MySqlConnection ConectarBD()
        {
            MySqlConnection conn;
            string dadosConexao =
                //mude para conectar com seu próprio banco de dados, instale o dump e rode antes
                "Persist Security Info = false; " +
                "server = localhost; " +
                "database = restaurante_tailandes; " +
                "uid = root; " +
                "pwd = ;";

            try
            {
                conn = new MySqlConnection(dadosConexao);
                conn.Open();
                return conn;
            }

            catch (MySqlException ex)
            {
                throw new Exception("Conexão não estabelecida. " + ex.Message, ex);
            }

        }
    }
}
