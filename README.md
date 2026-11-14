iNSTRUÇÕES DE USO E TESTE

**FrontEnd --**

Basta acessar o link do pages ou servidor apache, a aplicação tem as funcionalidades de: 
cadastro
cardapio
carrinho
contato
página inicial
login
pedidos
seu perfil

Toda a parte de front foi utilizada com: HTML, CSS E JavaScript, utlizando das melhores práticas e lógicas para o uso.

**BackEnd -- **

O código conversa via Json desserializado, então o html/Css/Js gera um json(dados.json) que é lido pelo c# e salva as informações no banco de dados

Para acessar o codigo C#, basta baixar ou fazer uma cópia do arquivo "pratica1.sln" e a pasta "pratica1", o arquivo pratica1 é o engate de inicialização e pratica contém todo o código e lógica
As tecnologias utlizadas são C# e Windows Forms com C#.

É preciso fazer algumas alterações no codigo para uso pessoal, dentre elas estão:

- Na página program.cs, na linha 20, contém o trecho: "Application.Run(new FrmPedidos());", mude aonde está a palavra "Form1" para trocar a tela que será aberta, as disponiveis são FrmLogin(Form2) e FrmPedidos
- Na página Conexão.cs, entre as linhas 19 e 23 contém a parte de conexão com o banco de dados, essas partes são pessoais, então mude de acordo com seu banco de dados(se houver) para testar, os que devem ser trocados são:
- UID - seu nome de usuário quando instalou o workbench
- PWD - sua senha quando instalou o workbench

**Banco de dados**

O Banco de dados conversa diretamente com o C# e é preciso baixar o arquivo thaidelBD para teste, para ficar disponível para manipulação de dados, basta pegar o texto contido dentro de thaidelbd e colar no mysql OU 
1. Conecte-se ao seu banco de dados e, no menu lateral esquerdo (Management), clique em Data Import/Restore.
2. Selecione Import from Self-Contained File e clique em ... para escolher o seu arquivo .sql.
3. Em Default Target Schema, selecione (ou crie) o banco de dados de destino.
4. Clique em Start Import no canto inferior direito e aguarde a conclusão.

Feito por Igor Camargos(FrontEnd - HTML/CSS/JavaScript) e Pedro Vasconcelos(BackEnd - SQL, C#)

 
  
