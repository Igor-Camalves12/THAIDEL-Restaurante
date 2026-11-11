function carregarTema() {
    var temaSalvo = localStorage.getItem("modoEscuro");
    var botao = document.getElementById("btn-tema");
    if (temaSalvo === "sim") {
        document.body.classList.add("escuro");
        if (botao) {
            botao.innerText = "Modo Claro";
        }
    } else {
        document.body.classList.remove("escuro");
        if (botao) {
            botao.innerText = "Modo Escuro";
        }
    }
}

function alternarTema() {
    var botao = document.getElementById("btn-tema");
    if (document.body.classList.contains("escuro")) {
        document.body.classList.remove("escuro");
        localStorage.setItem("modoEscuro", "nao");
        if (botao) {
            botao.innerText = "Modo Escuro";
        }
    } else {
        document.body.classList.add("escuro");
        localStorage.setItem("modoEscuro", "sim");
        if (botao) {
            botao.innerText = "Modo Claro";
        }
    }
}

function apenasNumeros(campo) {
    campo.value = campo.value.replace(/\D/g, "");
}

function mascaraTelefone(campo) {
    var v = campo.value.replace(/\D/g, "");
    if (v.length > 11) {
        v = v.slice(0, 11);
    }
    if (v.length > 6) {
        campo.value = "(" + v.slice(0, 2) + ") " + v.slice(2, 7) + "-" + v.slice(7);
    } else if (v.length > 2) {
        campo.value = "(" + v.slice(0, 2) + ") " + v.slice(2);
    } else if (v.length > 0) {
        campo.value = "(" + v;
    } else {
        campo.value = "";
    }
}

function mascaraCPF(campo) {
    var v = campo.value.replace(/\D/g, "");
    if (v.length > 11) {
        v = v.slice(0, 11);
    }
    if (v.length > 9) {
        campo.value = v.slice(0, 3) + "." + v.slice(3, 6) + "." + v.slice(6, 9) + "-" + v.slice(9);
    } else if (v.length > 6) {
        campo.value = v.slice(0, 3) + "." + v.slice(3, 6) + "." + v.slice(6);
    } else if (v.length > 3) {
        campo.value = v.slice(0, 3) + "." + v.slice(3);
    } else {
        campo.value = v;
    }
}

function mascaraData(campo) {
    var v = campo.value.replace(/\D/g, "");
    if (v.length > 8) {
        v = v.slice(0, 8);
    }
    if (v.length > 4) {
        campo.value = v.slice(0, 2) + "/" + v.slice(2, 4) + "/" + v.slice(4);
    } else if (v.length > 2) {
        campo.value = v.slice(0, 2) + "/" + v.slice(2);
    } else {
        campo.value = v;
    }
}

function mascaraCEP(campo) {
    var v = campo.value.replace(/\D/g, "");
    if (v.length > 8) {
        v = v.slice(0, 8);
    }
    if (v.length > 5) {
        campo.value = v.slice(0, 5) + "-" + v.slice(5);
    } else {
        campo.value = v;
    }
}

function mostrarSenha(idCampo) {
    var campo = document.getElementById(idCampo);
    if (campo.type === "password") {
        campo.type = "text";
    } else {
        campo.type = "password";
    }
}

function obterCarrinho() {
    var texto = localStorage.getItem("itensCarrinho");
    if (!texto) {
        return [];
    }
    return JSON.parse(texto);
}

function salvarCarrinho(itens) {
    localStorage.setItem("itensCarrinho", JSON.stringify(itens));
}

function obterPedidos() {
    var texto = localStorage.getItem("historicoPedidos");
    if (!texto) {
        return [];
    }
    return JSON.parse(texto);
}

function baixarJsonParaCSharp(dados) {
    var textoJson = JSON.stringify(dados, null, 2);
    localStorage.setItem("jsonCSharp", textoJson);
    var blob = new Blob([textoJson], { type: "application/json" });
    var link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "dados.json";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function montarObjetoGeral() {
    var pedidos = obterPedidos();
    var ultimoPedido = pedidos.length > 0 ? pedidos[0] : null;

    var codigo = "PROP-001";
    if (ultimoPedido && ultimoPedido.id) {
        var numStr = String(ultimoPedido.id);
        while (numStr.length < 3) {
            numStr = "0" + numStr;
        }
        codigo = "PROP-" + numStr;
    }

    var itensPadrao = [
        {
            prato: "Pad Thai",
            quantidade: 1,
            preco: 64.00
        },
        {
            prato: "Gai Satai",
            quantidade: 1,
            preco: 52.00
        }
    ];

    var dados = {
        codigo_pedido: codigo,
        status: "Pendente",
        total: ultimoPedido ? ultimoPedido.total : 132.00,
        cliente: {
            nome: localStorage.getItem("nome") || "Carlos Emanuel",
            email: localStorage.getItem("email") || "CarlosEmanuel@gmail.com",
            telefone: localStorage.getItem("telefone") || "(31) 99999-9999",
            cpf: localStorage.getItem("cpf") || "123.456.789-00",
            nascimento: localStorage.getItem("nascimento") || "06/12/2009",
            cep: localStorage.getItem("cep") || "30140-080",
            bairro: localStorage.getItem("bairro") || "Bairro dos limoeiros",
            rua: localStorage.getItem("rua") || "Rua dos timbiras",
            numero: localStorage.getItem("numero") || "142",
            complemento: localStorage.getItem("complemento") || "Bloco 13, apt 204",
            referencia: localStorage.getItem("referencia") || "Do lado de um pe de jambo",
            cidade: localStorage.getItem("cidade") || "Belo Horizonte",
            estado: localStorage.getItem("estado") || "MG - Minas Gerais"
        },
        itens: ultimoPedido ? ultimoPedido.itens : itensPadrao,
        observacao: ultimoPedido ? ultimoPedido.observacao : "Molho Extra Picante",
        pagamento: ultimoPedido ? ultimoPedido.pagamento.toLowerCase() : "pix",
        subtotal: ultimoPedido ? ultimoPedido.subtotal : 116.00,
        entrega: ultimoPedido ? ultimoPedido.entrega : 16.00
    };
    return dados;
}

function salvarCadastro(event) {
    event.preventDefault();
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var telefone = document.getElementById("telefone").value;
    var cpf = document.getElementById("cpf").value;
    var nascimento = document.getElementById("nascimento").value;
    var cep = document.getElementById("cep").value;
    var bairro = document.getElementById("bairro").value;
    var rua = document.getElementById("rua").value;
    var numero = document.getElementById("numero").value;
    var complemento = document.getElementById("complemento").value;
    var referencia = document.getElementById("referencia").value;
    var cidade = document.getElementById("cidade").value;
    var estado = document.getElementById("estado").value;

    if (nome !== "") localStorage.setItem("nome", nome);
    if (email !== "") localStorage.setItem("email", email);
    if (telefone !== "") localStorage.setItem("telefone", telefone);
    if (cpf !== "") localStorage.setItem("cpf", cpf);
    if (nascimento !== "") localStorage.setItem("nascimento", nascimento);
    if (cep !== "") localStorage.setItem("cep", cep);
    if (bairro !== "") localStorage.setItem("bairro", bairro);
    if (rua !== "") localStorage.setItem("rua", rua);
    if (numero !== "") localStorage.setItem("numero", numero);
    if (complemento !== "") localStorage.setItem("complemento", complemento);
    if (referencia !== "") localStorage.setItem("referencia", referencia);
    if (cidade !== "") localStorage.setItem("cidade", cidade);
    if (estado !== "") localStorage.setItem("estado", estado);

    var dados = montarObjetoGeral();
    baixarJsonParaCSharp(dados);

    setTimeout(function () {
        window.location.href = "perfil.html";
    }, 300);
}

function salvarPerfil(event) {
    event.preventDefault();
    localStorage.setItem("nome", document.getElementById("nome").value);
    localStorage.setItem("email", document.getElementById("email").value);
    localStorage.setItem("telefone", document.getElementById("telefone").value);
    localStorage.setItem("cpf", document.getElementById("cpf").value);
    localStorage.setItem("nascimento", document.getElementById("nascimento").value);
    localStorage.setItem("cep", document.getElementById("cep").value);
    localStorage.setItem("bairro", document.getElementById("bairro").value);
    localStorage.setItem("rua", document.getElementById("rua").value);
    localStorage.setItem("numero", document.getElementById("numero").value);
    localStorage.setItem("complemento", document.getElementById("complemento").value);
    localStorage.setItem("referencia", document.getElementById("referencia").value);
    localStorage.setItem("cidade", document.getElementById("cidade").value);
    localStorage.setItem("estado", document.getElementById("estado").value);

    var nomeLateral = document.getElementById("nome-lateral");
    if (nomeLateral && document.getElementById("nome").value !== "") {
        nomeLateral.innerText = document.getElementById("nome").value;
    }

    var dados = montarObjetoGeral();
    baixarJsonParaCSharp(dados);
    alert("Alteracoes salvas e arquivo dados.json atualizado!");
}

function carregarDadosPerfil() {
    var campoNome = document.getElementById("nome");
    if (!campoNome) {
        return;
    }
    if (localStorage.getItem("nome")) {
        document.getElementById("nome").value = localStorage.getItem("nome");
        var nomeLateral = document.getElementById("nome-lateral");
        if (nomeLateral) {
            nomeLateral.innerText = localStorage.getItem("nome");
        }
    }
    if (localStorage.getItem("email")) document.getElementById("email").value = localStorage.getItem("email");
    if (localStorage.getItem("telefone")) document.getElementById("telefone").value = localStorage.getItem("telefone");
    if (localStorage.getItem("cpf")) document.getElementById("cpf").value = localStorage.getItem("cpf");
    if (localStorage.getItem("nascimento")) document.getElementById("nascimento").value = localStorage.getItem("nascimento");
    if (localStorage.getItem("cep")) document.getElementById("cep").value = localStorage.getItem("cep");
    if (localStorage.getItem("bairro")) document.getElementById("bairro").value = localStorage.getItem("bairro");
    if (localStorage.getItem("rua")) document.getElementById("rua").value = localStorage.getItem("rua");
    if (localStorage.getItem("numero")) document.getElementById("numero").value = localStorage.getItem("numero");
    if (localStorage.getItem("complemento")) document.getElementById("complemento").value = localStorage.getItem("complemento");
    if (localStorage.getItem("referencia")) document.getElementById("referencia").value = localStorage.getItem("referencia");
    if (localStorage.getItem("cidade")) document.getElementById("cidade").value = localStorage.getItem("cidade");
    if (localStorage.getItem("estado")) document.getElementById("estado").value = localStorage.getItem("estado");
}

function fazerLogin(event) {
    event.preventDefault();
    var email = document.getElementById("login-email").value;
    if (email !== "") {
        localStorage.setItem("email", email);
    }
    window.location.href = "perfil.html";
}

function adicionarAoCarrinho(nomePrato, precoPrato) {
    var preco = precoPrato || 64;
    var carrinho = obterCarrinho();
    var achou = false;

    for (var i = 0; i < carrinho.length; i++) {
        if (carrinho[i].prato === nomePrato) {
            carrinho[i].quantidade = carrinho[i].quantidade + 1;
            achou = true;
            break;
        }
    }

    if (!achou) {
        carrinho.push({
            prato: nomePrato,
            quantidade: 1,
            preco: preco
        });
    }

    salvarCarrinho(carrinho);
    alert(nomePrato + " foi adicionado ao carrinho!");
}

function filtrarCardapio(categoria) {
    var cards = document.getElementsByClassName("card-prato");
    for (var i = 0; i < cards.length; i++) {
        var catCard = cards[i].getAttribute("data-categoria");
        if (categoria === "Todos" || catCard === categoria) {
            cards[i].style.display = "flex";
        } else {
            cards[i].style.display = "none";
        }
    }
}

function buscarCardapio() {
    var termo = document.getElementById("input-busca-prato").value.toLowerCase();
    var cards = document.getElementsByClassName("card-prato");
    for (var i = 0; i < cards.length; i++) {
        var texto = cards[i].innerText.toLowerCase();
        if (texto.indexOf(termo) !== -1) {
            cards[i].style.display = "flex";
        } else {
            cards[i].style.display = "none";
        }
    }
}

function removerDoCarrinho(indice) {
    var carrinho = obterCarrinho();
    carrinho.splice(indice, 1);
    salvarCarrinho(carrinho);
    carregarTelaCarrinho();
}

function carregarTelaCarrinho() {
    var listaDiv = document.getElementById("lista-itens-carrinho");
    if (!listaDiv) {
        return;
    }

    var endDiv = document.getElementById("endereco-carrinho");
    if (endDiv && localStorage.getItem("rua")) {
        var rua = localStorage.getItem("rua") || "";
        var num = localStorage.getItem("numero") || "";
        var comp = localStorage.getItem("complemento") || "";
        var bairro = localStorage.getItem("bairro") || "";
        var cid = localStorage.getItem("cidade") || "Belo Horizonte";
        var cep = localStorage.getItem("cep") || "";
        endDiv.innerHTML = rua + ", " + num + (comp ? ", " + comp : "") + "<br>" + bairro + ", " + cid + "<br>CEP " + cep;
    }

    var carrinho = obterCarrinho();
    listaDiv.innerHTML = "";

    if (carrinho.length === 0) {
        document.getElementById("valor-subtotal").innerText = "R$ 0,00";
        document.getElementById("valor-entrega").innerText = "R$ 0,00";
        document.getElementById("valor-total").innerText = "R$ 0,00";
        return;
    }

    var subtotal = 0;
    for (var i = 0; i < carrinho.length; i++) {
        var item = carrinho[i];
        var nomeExibir = item.prato || item.nome;
        subtotal = subtotal + (item.preco * item.quantidade);

        var card = document.createElement("div");
        card.className = "card-item-carrinho";
        card.innerHTML =
            "<h3>" + nomeExibir + "</h3>" +
            "<p class='sub-item-carrinho'>Porção Individual - Acompanha arroz e molho especial</p>" +
            "<p class='preco-porcao'>R$" + item.preco + ",00 / porção</p>" +
            "<div class='controle-qtd'>" +
                "<button type='button' onclick='mudarQuantidadeItem(" + i + ", -1)'>-</button>" +
                "<span>" + item.quantidade + "</span>" +
                "<button type='button' onclick='mudarQuantidadeItem(" + i + ", 1)'>+</button>" +
            "</div>";
        listaDiv.appendChild(card);
    }

    var entrega = 16;
    var total = subtotal + entrega;

    document.getElementById("valor-subtotal").innerText = "R$ " + subtotal + ",00";
    document.getElementById("valor-entrega").innerText = "R$ " + entrega + ",00";
    document.getElementById("valor-total").innerText = "R$ " + total + ",00";
}

function mudarQuantidadeItem(indice, mudanca) {
    var carrinho = obterCarrinho();
    if (!carrinho[indice]) {
        return;
    }
    carrinho[indice].quantidade = carrinho[indice].quantidade + mudanca;
    if (carrinho[indice].quantidade <= 0) {
        carrinho.splice(indice, 1);
    }
    salvarCarrinho(carrinho);
    carregarTelaCarrinho();
}

function confirmarPedido() {
    var carrinho = obterCarrinho();
    if (carrinho.length === 0) {
        alert("Seu carrinho está vazio! Adicione pratos no Cardápio antes de finalizar.");
        return;
    }

    var obs = document.getElementById("obs-cozinha").value;
    var pag = document.getElementById("forma-pagamento").value;

    var subtotal = 0;
    for (var i = 0; i < carrinho.length; i++) {
        subtotal = subtotal + (carrinho[i].preco * carrinho[i].quantidade);
    }
    var entrega = 16;
    var total = subtotal + entrega;

    var rua = localStorage.getItem("rua") || "Rua dos timbiras";
    var num = localStorage.getItem("numero") || "142";
    var bairro = localStorage.getItem("bairro") || "Bairro dos limoeiros";
    var cidade = localStorage.getItem("cidade") || "Belo Horizonte";
    var enderecoTexto = rua + " - " + num + ", " + bairro + ", " + cidade;

    var agora = new Date();
    var dataTexto = agora.getDate() + "/" + (agora.getMonth() + 1) + "/" + agora.getFullYear();
    var hora = agora.getHours();
    var min = agora.getMinutes();
    if (min < 10) min = "0" + min;
    var horarioTexto = hora + ":" + min;

    var pedidos = obterPedidos();
    var novoId = pedidos.length + 1;

    var novoPedido = {
        id: novoId,
        data: dataTexto,
        hora: horarioTexto,
        previsao: "35 - 55 min",
        endereco: enderecoTexto,
        itens: carrinho,
        observacao: obs !== "" ? obs : "Sem observacoes",
        pagamento: pag.toLowerCase(),
        subtotal: subtotal,
        entrega: entrega,
        total: total,
        status: "Em andamento"
    };

    pedidos.unshift(novoPedido);
    localStorage.setItem("historicoPedidos", JSON.stringify(pedidos));

    var dados = montarObjetoGeral();
    baixarJsonParaCSharp(dados);

    localStorage.removeItem("itensCarrinho");
    alert("Pagamento via " + pag + " aprovado! Pedido #" + novoId + " confirmado com sucesso!");

    setTimeout(function () {
        window.location.href = "pedidos.html";
    }, 300);
}

var filtroStatusAtual = "Todos";
var termoBuscaPedido = "";

function montarHtmlCardPedido(p) {
    var htmlItens = "";
    for (var j = 0; j < p.itens.length; j++) {
        var it = p.itens[j];
        var nomePrato = it.prato || it.nome;
        var textoObs = "";
        if (j === 0 && p.observacao && p.observacao !== "" && p.observacao !== "Sem observacoes") {
            textoObs = " - <span class='obs-vermelha'>Obs: " + p.observacao + "</span>";
        }
        htmlItens = htmlItens + "<p>" + it.quantidade + "x " + nomePrato + textoObs + " - R$" + (it.preco * it.quantidade) + ",00</p>";
    }

    var html =
        "<div class='card-pedido-status'>" +
            "<div class='topo-card-pedido'>" +
                "<span>Pedido #" + p.id + " • " + p.data + " • " + p.hora + " (" + p.pagamento + ")</span>" +
                "<span>Previsão de entrega: " + p.previsao + "</span>" +
            "</div>" +
            "<div class='corpo-card-pedido'>" +
                "<div class='info-itens-pedido'>" +
                    "<p>Endereço: " + p.endereco + "</p><br>" +
                    htmlItens +
                "</div>" +
                "<div class='mini-resumo-pedido'>" +
                    "<div class='linha-mini-resumo'>" +
                        "<span>Subtotal</span>" +
                        "<span>R$ " + p.subtotal + ",00</span>" +
                    "</div>" +
                    "<div class='linha-mini-resumo'>" +
                        "<span>Entrega</span>" +
                        "<span>R$ " + p.entrega + ",00</span>" +
                    "</div>" +
                    "<div class='linha-mini-resumo total-mini'>" +
                        "<span>Total</span>" +
                        "<span>R$ " + p.total + ",00</span>" +
                    "</div>" +
                "</div>" +
            "</div>" +
        "</div>";
    return html;
}

function carregarTelaPedidos() {
    var areaAtual = document.getElementById("pedido-atual-area");
    var areaAnteriores = document.getElementById("pedidos-anteriores-area");
    if (!areaAtual || !areaAnteriores) {
        return;
    }

    var pedidos = obterPedidos();
    var filtrados = [];

    for (var i = 0; i < pedidos.length; i++) {
        var p = pedidos[i];
        var bateStatus = (filtroStatusAtual === "Todos" || p.status === filtroStatusAtual);
        var bateBusca = true;

        if (termoBuscaPedido !== "") {
            bateBusca = false;
            for (var k = 0; k < p.itens.length; k++) {
                var nomeItem = (p.itens[k].prato || p.itens[k].nome).toLowerCase();
                if (nomeItem.indexOf(termoBuscaPedido) !== -1) {
                    bateBusca = true;
                    break;
                }
            }
        }

        if (bateStatus && bateBusca) {
            filtrados.push(p);
        }
    }

    if (filtrados.length === 0) {
        areaAtual.innerHTML = "";
        areaAnteriores.innerHTML = "";
        return;
    }

    areaAtual.innerHTML = montarHtmlCardPedido(filtrados[0]);

    if (filtrados.length > 1) {
        var htmlAnt = "";
        for (var m = 1; m < filtrados.length; m++) {
            htmlAnt = htmlAnt + montarHtmlCardPedido(filtrados[m]);
        }
        areaAnteriores.innerHTML = htmlAnt;
    } else {
        areaAnteriores.innerHTML = "";
    }
}

function filtrarPedidos(status) {
    filtroStatusAtual = status;
    carregarTelaPedidos();
}

function buscarPedidos() {
    var campo = document.getElementById("busca-pedidos");
    if (campo) {
        termoBuscaPedido = campo.value.toLowerCase();
    }
    carregarTelaPedidos();
}

function enviarContato(event) {
    event.preventDefault();
    alert("Mensagem enviada com sucesso! Em breve entraremos em contato.");
    document.getElementById("contato-nome").value = "";
    document.getElementById("contato-email").value = "";
    document.getElementById("contato-telefone").value = "";
    document.getElementById("contato-pedido").value = "";
    document.getElementById("contato-mensagem").value = "";
}

window.onload = function () {
    localStorage.removeItem("carrinho");
    localStorage.removeItem("carrinhoThaidel");
    localStorage.removeItem("listaPedidos");
    localStorage.removeItem("pedidosThaidel");
    localStorage.removeItem("qtd1");
    localStorage.removeItem("qtd2");
    carregarTema();
    carregarDadosPerfil();
    carregarTelaCarrinho();
    carregarTelaPedidos();
};
