using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace pratica1
{
    internal static class Program
    {
        /// <summary>
        /// Ponto de entrada principal para o aplicativo.
        /// </summary>
        [STAThread]
        static void Main()
        {
            Application.EnableVisualStyles();
            Application.SetCompatibleTextRenderingDefault(false);
            //mude aonde está a palavra "Form1" para trocar a tela que será aberta, as disponiveis são FrmLogin(Form2) e FrmPedidos
            Application.Run(new FrmPedidos());
        }
    }           
}