// utils.js - funções que todos os módulos usam (entrada, validação e formatação)

// lê um número; se digitar texto ou deixar vazio, devolve NaN
function lerNumero(mensagem) {
  let texto = prompt(mensagem);
  if (texto == null || texto.trim() == "") {
    return NaN;
  }
  return Number(texto.replace(",", "."));
}

// lê um texto sem espaços nas pontas
function lerTexto(mensagem) {
  let texto = prompt(mensagem);
  if (texto == null) {
    return "";
  }
  return texto.trim();
}

function ehInteiro(numero) {
  return !isNaN(numero) && numero % 1 == 0;
}

// pergunta S/N até a pessoa responder certo
function confirmar(mensagem) {
  let resposta = lerTexto(mensagem + " (S/N)").toUpperCase();
  while (resposta != "S" && resposta != "N") {
    erro("Digite apenas S ou N");
    resposta = lerTexto(mensagem + " (S/N)").toUpperCase();
  }
  return resposta == "S";
}

// padroniza o dinheiro: R$ 1.254,00
function formatarDinheiro(valor) {
  return "R$ " + valor.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

// função dedicada para mostrar erros
function erro(mensagem) {
  alert(mensagem);
}
