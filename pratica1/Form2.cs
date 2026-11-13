using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace pratica1
{
    public partial class FrmLogin : Form
    {

        Conexao cadastro = new Conexao();
        public FrmLogin()
        {
            InitializeComponent();
        }

        private void btn_entrar_Click(object sender, EventArgs e)
        {
            try
            {
                Conexao banco = new Conexao();
                MySqlConnection conn = banco.ConectarBD();

                string sql = ("SELECT * FROM usuarios WHERE email = @email AND senha = @senha");
                MySqlCommand cmd = new MySqlCommand(sql, conn);

                cmd.Parameters.AddWithValue("@email", txtEmail.Text);
                cmd.Parameters.AddWithValue("@senha", txtSenha.Text);

                MySqlDataReader leitor = cmd.ExecuteReader();

                if (leitor.Read())
                {
                    Form1 telaPrincipal = new Form1();
                    telaPrincipal.Show();
                    this.Hide();
                }

                else
                {
                    MessageBox.Show("E-mail ou senha incorretos!");
                }

                conn.Close();

            }

            catch (Exception ex)
            {
                MessageBox.Show("Erro entrar, tente novamente: " + ex.Message);
            }
        }
    }
}
