// hospedes.js - Subprograma 2: Cadastro de Hóspedes

function nomeJaExiste(nome) {
  for (let i = 0; i < nomesHospedes.length; i++) {
    if (nomesHospedes[i] == nome) {
      return true;
    }
  }
  return false;
}

// devolve uma cópia dos nomes em ordem alfabética (A-Z)
function nomesOrdenados() {
  let copia = nomesHospedes.slice();
  copia.sort();
  return copia;
}

function cadastrarHospede() {
  if (nomesHospedes.length >= 15) {
    erro("Máximo de cadastros atingido");
    return;
  }
  let nome = lerTexto("Nome do hóspede:");
  if (nome == "") {
    erro("Você precisa digitar um nome.");
  } else if (nomeJaExiste(nome)) {
    erro("Hóspede já cadastrado");
  } else {
    nomesHospedes.push(nome);
    datasHospedes.push(new Date().toLocaleString("pt-BR"));
    alert("Operação realizada com sucesso");
  }
}

function pesquisarExato() {
  let nome = lerTexto("Nome do hóspede:");
  if (nomeJaExiste(nome)) {
    alert("Hóspede " + nome + " foi encontrado");
  } else {
    erro("Hóspede não encontrado");
  }
}

function pesquisarPrefixo() {
  let prefixo = lerTexto("Prefixo:").toLowerCase();
  let resultado = "";
  let contador = 0;
  let lista = nomesOrdenados();
  for (let i = 0; i < lista.length; i++) {
    // indexOf igual a 0 quer dizer que o nome começa com o prefixo
    if (prefixo != "" && lista[i].toLowerCase().indexOf(prefixo) == 0) {
      contador++;
      resultado = resultado + "[" + contador + "] " + lista[i] + "\n";
    }
  }
  if (contador == 0) {
    erro("Hóspede não encontrado");
  } else {
    alert("Resultados:\n" + resultado);
  }
}

// mostra a lista A-Z e devolve false se estiver vazia
function listarHospedes() {
  if (nomesHospedes.length == 0) {
    erro("Hóspede não encontrado (nenhum cadastro).");
    return false;
  }
  let lista = nomesOrdenados();
  let texto = "";
  for (let i = 0; i < lista.length; i++) {
    let posicao = nomesHospedes.indexOf(lista[i]);
    texto = texto + "[" + (i + 1) + "] " + lista[i] + " - cadastrado em " + datasHospedes[posicao] + "\n";
  }
  alert(texto);
  return true;
}

function atualizarHospede() {
  if (listarHospedes() == false) {
    return;
  }
  let indice = lerNumero("Digite o índice do hóspede que será atualizado:");
  if (!ehInteiro(indice) || indice < 1 || indice > nomesHospedes.length) {
    erro("Hóspede não encontrado");
    return;
  }
  let novoNome = lerTexto("Novo nome:");
  if (novoNome == "") {
    erro("Você precisa digitar um nome.");
  } else if (nomeJaExiste(novoNome)) {
    erro("Hóspede já cadastrado");
  } else {
    let antigo = nomesOrdenados()[indice - 1];
    nomesHospedes[nomesHospedes.indexOf(antigo)] = novoNome;
    alert("Operação realizada com sucesso");
  }
}

function removerHospede() {
  if (listarHospedes() == false) {
    return;
  }
  let indice = lerNumero("Digite o índice do hóspede que será removido:");
  if (!ehInteiro(indice) || indice < 1 || indice > nomesHospedes.length) {
    erro("Hóspede não encontrado");
    return;
  }
  let nome = nomesOrdenados()[indice - 1];
  let posicao = nomesHospedes.indexOf(nome);
  nomesHospedes.splice(posicao, 1);
  datasHospedes.splice(posicao, 1);
  alert("Operação realizada com sucesso");
}

function menuHospedes() {
  let opcao = "";
  while (opcao != "7") {
    opcao = lerTexto("[Cadastro de Hóspedes]\n" +
      "1 - Cadastrar\n2 - Pesquisar nome exato\n3 - Pesquisar por prefixo\n" +
      "4 - Listar (A-Z)\n5 - Atualizar\n6 - Remover\n7 - Voltar");

    switch (opcao) {
      case "1": cadastrarHospede(); break;
      case "2": pesquisarExato(); break;
      case "3": pesquisarPrefixo(); break;
      case "4": listarHospedes(); break;
      case "5": atualizarHospede(); break;
      case "6": removerHospede(); break;
      case "7": break;
      default: erro("Opção inválida! Digite um número de 1 a 7.");
    }
  }
}
