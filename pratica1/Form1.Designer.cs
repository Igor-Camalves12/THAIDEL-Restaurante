namespace pratica1
{
    partial class Form1
    {
        /// <summary>
        /// Variável de designer necessária.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Limpar os recursos que estão sendo usados.
        /// </summary>
        /// <param name="disposing">true se for necessário descartar os recursos gerenciados; caso contrário, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Código gerado pelo Windows Form Designer

        /// <summary>
        /// Método necessário para suporte ao Designer - não modifique 
        /// o conteúdo deste método com o editor de código.
        /// </summary>
        private void InitializeComponent()
        {
            this.name = new System.Windows.Forms.TextBox();
            this.label1 = new System.Windows.Forms.Label();
            this.label2 = new System.Windows.Forms.Label();
            this.preco = new System.Windows.Forms.TextBox();
            this.cmb_Categoria = new System.Windows.Forms.ComboBox();
            this.btn_cadastrar = new System.Windows.Forms.Button();
            this.label3 = new System.Windows.Forms.Label();
            this.TextId = new System.Windows.Forms.TextBox();
            this.dgvProdutos = new System.Windows.Forms.DataGridView();
            this.Btn_Atualizar = new System.Windows.Forms.Button();
            this.btn_Deletar = new System.Windows.Forms.Button();
            ((System.ComponentModel.ISupportInitialize)(this.dgvProdutos)).BeginInit();
            this.SuspendLayout();
            // 
            // name
            // 
            this.name.Location = new System.Drawing.Point(26, 83);
            this.name.Name = "name";
            this.name.Size = new System.Drawing.Size(100, 20);
            this.name.TabIndex = 0;
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Location = new System.Drawing.Point(26, 64);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(35, 13);
            this.label1.TabIndex = 1;
            this.label1.Text = "Nome";
            // 
            // label2
            // 
            this.label2.AutoSize = true;
            this.label2.Location = new System.Drawing.Point(26, 106);
            this.label2.Name = "label2";
            this.label2.Size = new System.Drawing.Size(35, 13);
            this.label2.TabIndex = 2;
            this.label2.Text = "Preço";
            // 
            // preco
            // 
            this.preco.Location = new System.Drawing.Point(26, 122);
            this.preco.Name = "preco";
            this.preco.Size = new System.Drawing.Size(100, 20);
            this.preco.TabIndex = 3;
            // 
            // cmb_Categoria
            // 
            this.cmb_Categoria.FormattingEnabled = true;
            this.cmb_Categoria.Items.AddRange(new object[] {
            "Lanche",
            "Bebida",
            "Sobremesa"});
            this.cmb_Categoria.Location = new System.Drawing.Point(26, 154);
            this.cmb_Categoria.Name = "cmb_Categoria";
            this.cmb_Categoria.Size = new System.Drawing.Size(84, 21);
            this.cmb_Categoria.TabIndex = 4;
            this.cmb_Categoria.Text = "Comidas";
            // 
            // btn_cadastrar
            // 
            this.btn_cadastrar.BackColor = System.Drawing.Color.Coral;
            this.btn_cadastrar.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, ((System.Drawing.FontStyle)((System.Drawing.FontStyle.Bold | System.Drawing.FontStyle.Italic))), System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btn_cadastrar.ForeColor = System.Drawing.SystemColors.ControlText;
            this.btn_cadastrar.Location = new System.Drawing.Point(26, 188);
            this.btn_cadastrar.Name = "btn_cadastrar";
            this.btn_cadastrar.Size = new System.Drawing.Size(99, 26);
            this.btn_cadastrar.TabIndex = 5;
            this.btn_cadastrar.Text = "Cadastrar";
            this.btn_cadastrar.UseVisualStyleBackColor = false;
            this.btn_cadastrar.Click += new System.EventHandler(this.Btn_cadastrar_Click);
            // 
            // label3
            // 
            this.label3.AutoSize = true;
            this.label3.Location = new System.Drawing.Point(26, 24);
            this.label3.Name = "label3";
            this.label3.Size = new System.Drawing.Size(16, 13);
            this.label3.TabIndex = 7;
            this.label3.Text = "Id";
            // 
            // TextId
            // 
            this.TextId.BackColor = System.Drawing.SystemColors.ControlLightLight;
            this.TextId.Location = new System.Drawing.Point(26, 43);
            this.TextId.Name = "TextId";
            this.TextId.ReadOnly = true;
            this.TextId.Size = new System.Drawing.Size(100, 20);
            this.TextId.TabIndex = 6;
            // 
            // dgvProdutos
            // 
            this.dgvProdutos.ColumnHeadersHeightSizeMode = System.Windows.Forms.DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            this.dgvProdutos.Location = new System.Drawing.Point(230, 24);
            this.dgvProdutos.Margin = new System.Windows.Forms.Padding(2, 2, 2, 2);
            this.dgvProdutos.Name = "dgvProdutos";
            this.dgvProdutos.RowHeadersWidth = 51;
            this.dgvProdutos.RowTemplate.Height = 24;
            this.dgvProdutos.Size = new System.Drawing.Size(276, 218);
            this.dgvProdutos.TabIndex = 8;
            this.dgvProdutos.CellDoubleClick += new System.Windows.Forms.DataGridViewCellEventHandler(this.dgvProdutos_CellDoubleClick);
            // 
            // Btn_Atualizar
            // 
            this.Btn_Atualizar.BackColor = System.Drawing.SystemColors.ActiveCaption;
            this.Btn_Atualizar.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, ((System.Drawing.FontStyle)((System.Drawing.FontStyle.Bold | System.Drawing.FontStyle.Italic))), System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Btn_Atualizar.Location = new System.Drawing.Point(251, 267);
            this.Btn_Atualizar.Margin = new System.Windows.Forms.Padding(2, 2, 2, 2);
            this.Btn_Atualizar.Name = "Btn_Atualizar";
            this.Btn_Atualizar.Size = new System.Drawing.Size(93, 31);
            this.Btn_Atualizar.TabIndex = 9;
            this.Btn_Atualizar.Text = "Atualizar";
            this.Btn_Atualizar.UseVisualStyleBackColor = false;
            this.Btn_Atualizar.Click += new System.EventHandler(this.Btn_Atualizar_Click);
            // 
            // btn_Deletar
            // 
            this.btn_Deletar.BackColor = System.Drawing.Color.IndianRed;
            this.btn_Deletar.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, ((System.Drawing.FontStyle)((System.Drawing.FontStyle.Bold | System.Drawing.FontStyle.Italic))), System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btn_Deletar.Location = new System.Drawing.Point(398, 267);
            this.btn_Deletar.Margin = new System.Windows.Forms.Padding(2, 2, 2, 2);
            this.btn_Deletar.Name = "btn_Deletar";
            this.btn_Deletar.Size = new System.Drawing.Size(82, 31);
            this.btn_Deletar.TabIndex = 11;
            this.btn_Deletar.Text = "Deletar";
            this.btn_Deletar.UseVisualStyleBackColor = false;
            this.btn_Deletar.Click += new System.EventHandler(this.btn_Deletar_Click);
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(562, 450);
            this.Controls.Add(this.btn_Deletar);
            this.Controls.Add(this.Btn_Atualizar);
            this.Controls.Add(this.dgvProdutos);
            this.Controls.Add(this.label3);
            this.Controls.Add(this.TextId);
            this.Controls.Add(this.btn_cadastrar);
            this.Controls.Add(this.cmb_Categoria);
            this.Controls.Add(this.preco);
            this.Controls.Add(this.label2);
            this.Controls.Add(this.label1);
            this.Controls.Add(this.name);
            this.Name = "Form1";
            this.Text = "Crud";
            this.Load += new System.EventHandler(this.Form1_Load);
            ((System.ComponentModel.ISupportInitialize)(this.dgvProdutos)).EndInit();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.TextBox name;
        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.Label label2;
        private System.Windows.Forms.TextBox preco;
        private System.Windows.Forms.ComboBox cmb_Categoria;
        private System.Windows.Forms.Button btn_cadastrar;
        private System.Windows.Forms.Label label3;
        private System.Windows.Forms.TextBox TextId;
        private System.Windows.Forms.DataGridView dgvProdutos;
        private System.Windows.Forms.Button Btn_Atualizar;
        private System.Windows.Forms.Button btn_Deletar;
    }
}

