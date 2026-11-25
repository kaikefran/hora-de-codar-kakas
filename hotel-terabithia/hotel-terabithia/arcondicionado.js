// arcondicionado.js - Subprograma 4: Ar-Condicionado

// calcula o total de uma empresa (o desconto só vale se a quantidade >= mínimo)
function calcularOrcamento(valor, quantidade, desconto, minimo, deslocamento) {
  let bruto = valor * quantidade;
  let valorDesconto = 0;
  if (quantidade >= minimo) {
    valorDesconto = bruto * desconto / 100;
  }
  return bruto - valorDesconto + deslocamento;
}

function compararArCondicionado() {
  let empresas = [];
  let totais = [];
  let continuar = true;

  while (continuar == true) {
    let empresa = lerTexto("[Ar-Condicionado]\nEmpresa:");
    let valor = lerNumero("Valor por aparelho:");
    let quantidade = lerNumero("Quantidade de aparelhos:");
    let desconto = lerNumero("Desconto (%) - pode ser 0:");
    let minimo = lerNumero("Quantidade mínima para ter desconto:");
    let deslocamento = lerNumero("Valor fixo de deslocamento:");

    if (empresa == "" || !(valor > 0) || !ehInteiro(quantidade) || quantidade < 1 ||
        !(desconto >= 0 && desconto <= 100) || !(minimo >= 0) || !(deslocamento >= 0)) {
      erro("Valor inválido, " + nomeUsuario);
      continue; // volta pro começo do while
    }

    let total = calcularOrcamento(valor, quantidade, desconto, minimo, deslocamento);
    empresas.push(empresa);
    totais.push(total);
    alert("O serviço de " + empresa + " custará " + formatarDinheiro(total));

    if (empresas.length >= 2) {
      continuar = confirmar("Deseja informar novos dados, " + nomeUsuario + "?");
    } else {
      alert("Informe pelo menos duas empresas para poder comparar.");
    }
  }

  // procura o menor e o maior orçamento
  let posMenor = 0;
  let posMaior = 0;
  for (let i = 1; i < totais.length; i++) {
    if (totais[i] < totais[posMenor]) {
      posMenor = i;
    }
    if (totais[i] > totais[posMaior]) {
      posMaior = i;
    }
  }
  let diferenca = (totais[posMaior] - totais[posMenor]) / totais[posMenor] * 100;

  alert("Melhor orçamento: " + empresas[posMenor] + " - " + formatarDinheiro(totais[posMenor]) + "\n" +
    "Maior orçamento: " + empresas[posMaior] + " - " + formatarDinheiro(totais[posMaior]) + "\n" +
    "Diferença entre a melhor e a pior proposta: " + diferenca.toFixed(2).replace(".", ",") + "%");
}
