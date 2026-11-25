// abastecimento.js - Subprograma 5: Abastecimento (tanque de 42 litros)

function compararCombustivel() {
  let wAlcool = lerNumero("[Abastecimento]\nWayne Oil - preço do álcool:");
  let wGasolina = lerNumero("Wayne Oil - preço da gasolina:");
  let sAlcool = lerNumero("Stark Petrol - preço do álcool:");
  let sGasolina = lerNumero("Stark Petrol - preço da gasolina:");

  if (!(wAlcool > 0) || !(wGasolina > 0) || !(sAlcool > 0) || !(sGasolina > 0)) {
    erro("Valor inválido, " + nomeUsuario);
    return;
  }

  // o álcool só compensa se custar até 70% do preço da gasolina
  let wCombustivel = "gasolina";
  let wPreco = wGasolina;
  if (wAlcool <= wGasolina * 0.70) {
    wCombustivel = "álcool";
    wPreco = wAlcool;
  }

  let sCombustivel = "gasolina";
  let sPreco = sGasolina;
  if (sAlcool <= sGasolina * 0.70) {
    sCombustivel = "álcool";
    sPreco = sAlcool;
  }

  let wTotal = wPreco * 42;
  let sTotal = sPreco * 42;

  let textoWayne = "Wayne Oil: melhor opção = " + wCombustivel + " | Total (42L) = " + formatarDinheiro(wTotal);
  let textoStark = "Stark Petrol: melhor opção = " + sCombustivel + " | Total (42L) = " + formatarDinheiro(sTotal);

  // ranking do menor para o maior custo
  if (wTotal <= sTotal) {
    alert("Ranking:\n1º " + textoWayne + "\n2º " + textoStark + "\n\n" +
      nomeUsuario + ", é mais barato abastecer com " + wCombustivel + " no posto Wayne Oil.");
  } else {
    alert("Ranking:\n1º " + textoStark + "\n2º " + textoWayne + "\n\n" +
      nomeUsuario + ", é mais barato abastecer com " + sCombustivel + " no posto Stark Petrol.");
  }
}
