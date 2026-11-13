using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using System.IO;
using System.Text.Json;
using MySql.Data.MySqlClient;
using System.Xml.Linq;

namespace pratica1
{
    public partial class FrmPedidos : Form
    {
        public FrmPedidos()
        {
            InitializeComponent();
        }

        private void btnImport_Click_1(object sender, EventArgs e)
        {
            try
            {
                // mude aonde a raiz está para testar
                string textoJson = File.ReadAllText(@"C:\H:\dados.json");

                PedidoJson pedidoDoSite = JsonSerializer.Deserialize<PedidoJson>(textoJson);

                Conexao banco = new Conexao();
                MySqlConnection conn = banco.ConectarBD();

                string sql = ("INSERT INTO pedidos (codigo_pedido, nome_cliente, total, status) VALUES (@codigo_pedido, @nome_cliente, @total, @status)");
                MySqlCommand cmd = new MySqlCommand(sql, conn);

                cmd.Parameters.AddWithValue("@codigo_pedido", pedidoDoSite.CodigoPedido ?? (object)DBNull.Value);
                cmd.Parameters.AddWithValue("@nome_cliente", pedidoDoSite.NomeCliente ?? (object)DBNull.Value);
                cmd.Parameters.AddWithValue("@total", pedidoDoSite.Total);
                cmd.Parameters.AddWithValue("@status", pedidoDoSite.Status ?? "Pendente");

                cmd.ExecuteNonQuery();
                conn.Close();

                
            }

            catch (Exception ex)
            {
                MessageBox.Show("Erro ao inserir pedido no banco de dados: " + ex.Message);
            }
        }
    }
}