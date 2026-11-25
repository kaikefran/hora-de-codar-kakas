// auth.js - login do funcionário (máximo de 3 tentativas)

function fazerLogin() {
  alert("Bem-vindo ao " + NOME_HOTEL);

  let nome = lerTexto("Digite o seu nome:");
  while (nome == "") {
    erro("Você precisa digitar um nome.");
    nome = lerTexto("Digite o seu nome:");
  }

  let tentativas = 0;
  while (tentativas < 3) {
    let senha = lerTexto("Digite a senha:");
    if (senha == SENHA) {
      nomeUsuario = nome;
      alert("Bem-vindo ao " + NOME_HOTEL + ", " + nomeUsuario + ". É um imenso prazer ter você por aqui!");
      return true;
    }
    tentativas++;
    if (tentativas < 3) {
      erro("Senha incorreta. Tentativa " + tentativas + " de 3.");
    }
  }

  erro("Acesso bloqueado: limite de 3 tentativas excedido. Sistema encerrado.");
  return false;
}
