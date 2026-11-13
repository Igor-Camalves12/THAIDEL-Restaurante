
using MySql.Data.MySqlClient;
using System;
using System.Windows.Forms;
﻿using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using MySql.Data.MySqlClient;
using static System.Windows.Forms.VisualStyles.VisualStyleElement;

namespace pratica1
{
    // 12500976
    // Pedro Vasconcelos
    // 2E1
    public partial class Form1 : Form
    {
        Conexao cadastro = new Conexao();
        public Form1()
        {
            InitializeComponent();
        }
        private void Btn_cadastrar_Click(object sender, EventArgs e)
        {
            cadastro.ConectarBD();

            try
            {
                Produto objProduto = new Produto();

                objProduto.Nome = name.Text;
                objProduto.preco = double.Parse(preco.Text);
                objProduto.categoria = cmb_Categoria.Text;

                Conexao banco = new Conexao();
                banco.ConectarBD();
                MySqlConnection conexaoAberta = banco.ConectarBD();

                string sql = "INSERT INTO pratos (nome, preco, categoria) VALUES (@nome, @preco, @categoria)";
                MySqlCommand comando = new MySqlCommand(sql, conexaoAberta);
                comando.Parameters.AddWithValue("@nome", objProduto.Nome);
                comando.Parameters.AddWithValue("@preco", objProduto.preco);
                comando.Parameters.AddWithValue("@categoria", objProduto.categoria);

                comando.ExecuteNonQuery();

                MessageBox.Show("Produto cadastrado com sucesso");
                name.Clear();
                preco.Clear();
                cmb_Categoria.Text = string.Empty;

                conexaoAberta.Close();
            }

            catch (Exception ex)
            {
                throw new Exception("Conexão não estabelecida. " + ex.Message, ex);
            }

        }

        private void ListarProdutos()
        {
            try
            {
                Conexao banco = new Conexao();
                MySqlConnection conn = banco.ConectarBD();

                string sql = "SELECT * FROM pratos";
                MySqlCommand cmd = new MySqlCommand(sql, conn);

                MySqlDataAdapter da = new MySqlDataAdapter(cmd);
                DataTable dt = new DataTable();
                da.Fill(dt);

                dgvProdutos.DataSource = dt;
                conn.Close();
            }

            catch (Exception ex)
            {
                MessageBox.Show("Erro ao buscar produtos: " + ex.Message);
            }
        }
        private void Form1_Load(object sender, EventArgs e)
        {
            ListarProdutos();
        }

        private void dgvProdutos_CellDoubleClick(object sender, DataGridViewCellEventArgs e)
        {
            if (e.RowIndex >= 0)
            {
                DataGridViewRow linha = dgvProdutos.Rows[e.RowIndex];
                TextId.Text = linha.Cells["id_prato"].Value.ToString();
                name.Text = linha.Cells["nome"].Value.ToString();
                preco.Text = linha.Cells["preco"].Value.ToString();
                cmb_Categoria.Text = linha.Cells["categoria"].Value.ToString();
            }
        }

        private void Btn_Atualizar_Click(object sender, EventArgs e)
        {
            if (TextId.Text == "")
            {
                MessageBox.Show("Selecione um produto na lista primeiro!");
                return;
            }
            try
            {
                Conexao banco = new Conexao();
                MySqlConnection conn = banco.ConectarBD();

                string sql = "UPDATE pratos SET nome = @nome, " +
                "preco = @preco, " +
                "categoria = @categoria WHERE id_prato = @id";
                MySqlCommand cmd = new MySqlCommand(sql, conn);

                cmd.Parameters.AddWithValue("@nome", name.Text);
                cmd.Parameters.AddWithValue("@preco", Convert.ToDouble(preco.Text));
                cmd.Parameters.AddWithValue("@categoria", cmb_Categoria.Text);
                cmd.Parameters.AddWithValue("@id", Convert.ToInt32(TextId.Text));

                cmd.ExecuteNonQuery();
                conn.Close();

                MessageBox.Show("Produto atualizado com sucesso!");
                ListarProdutos();
            }

            catch (Exception ex)
            {
                MessageBox.Show("Erro ao buscar produtos: " + ex.Message);
            }

        }

        private void btn_Deletar_Click(object sender, EventArgs e)
        {
            if (TextId.Text == "")
            {
                MessageBox.Show("Selecione um produto na lista primeiro para excluir!");
                return;
            }

            DialogResult resposta = MessageBox.Show("Tem certeza que deseja excluir este produto?", "Atenção", MessageBoxButtons.YesNo, MessageBoxIcon.Warning);

            if (resposta == DialogResult.Yes)
            {
                try
                {
                    Conexao banco = new Conexao();
                    MySqlConnection conn = banco.ConectarBD();

                    string sql = "DELETE FROM pratos WHERE id_prato = @id";
                    MySqlCommand cmd = new MySqlCommand(sql, conn);

                    cmd.Parameters.AddWithValue("@id", Convert.ToInt32(TextId.Text));
                    cmd.ExecuteNonQuery();
                    conn.Close();

                    MessageBox.Show("Produto excluído!");
                    TextId.Clear();
                    name.Clear();
                    preco.Clear();
                    cmb_Categoria.SelectedIndex = -1;

                    ListarProdutos();
                }

                catch (Exception ex)
                {
                    MessageBox.Show("Erro ao buscar produtos: " + ex.Message);
                }
            }
        }
    }
}
