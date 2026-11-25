// reservas.js - Subprograma 1: Reservas de Quartos

function mostrarMapa() {
  let mapa = "MAPA DE QUARTOS (L = livre, O = ocupado)\n\n";
  for (let linha = 0; linha < 4; linha++) {
    for (let coluna = 0; coluna < 5; coluna++) {
      let posicao = linha * 5 + coluna;
      let status = "L";
      if (quartos[posicao] == true) {
        status = "O";
      }
      mapa = mapa + (posicao + 1) + "-" + status + "      ";
    }
    mapa = mapa + "\n";
  }
  alert(mapa);
}

function listarQuartosLivres() {
  let livres = "";
  for (let i = 0; i < 20; i++) {
    if (quartos[i] == false) {
      livres = livres + (i + 1) + " ";
    }
  }
  return livres;
}

function reservarQuarto() {
  let diaria = lerNumero("[Reservas]\nInforme o valor da diária:");
  let dias = lerNumero("Informe a quantidade de diárias (1-30):");

  if (!(diaria > 0) || !ehInteiro(dias) || dias < 1 || dias > 30) {
    erro("Valor inválido, " + nomeUsuario);
    return;
  }

  let hospede = lerTexto("Informe o nome completo do hóspede:");
  if (hospede == "") {
    erro("Valor inválido, " + nomeUsuario);
    return;
  }

  // tipo do quarto define o fator do preço
  let tipo = lerTexto("Tipo de quarto (S = Standard, E = Executivo, L = Luxo):").toUpperCase();
  let fator = 0;
  let nomeTipo = "";
  if (tipo == "S") {
    fator = 1.0;
    nomeTipo = "Standard";
  } else if (tipo == "E") {
    fator = 1.35;
    nomeTipo = "Executivo";
  } else if (tipo == "L") {
    fator = 1.65;
    nomeTipo = "Luxo";
  } else {
    erro("Valor inválido, " + nomeUsuario);
    return;
  }

  if (listarQuartosLivres() == "") {
    erro("Não há quartos livres no momento.");
    return;
  }

  // repete até escolher um quarto válido e livre
  let quarto = lerNumero("Escolha um quarto (1-20):");
  while (!ehInteiro(quarto) || quarto < 1 || quarto > 20 || quartos[quarto - 1] == true) {
    if (ehInteiro(quarto) && quarto >= 1 && quarto <= 20) {
      alert("Quarto já está ocupado\nQuartos livres: " + listarQuartosLivres());
    } else {
      erro("Digite um número de quarto entre 1 e 20.");
    }
    quarto = lerNumero("Escolha outro quarto (1-20):");
  }

  let subtotal = diaria * dias * fator;
  let taxa = subtotal * 0.10;
  let total = subtotal + taxa;

  alert("Resumo:\n" +
    "Hóspede: " + hospede + "\n" +
    "Quarto: " + quarto + " (" + nomeTipo + ")\n" +
    "Subtotal: " + formatarDinheiro(subtotal) + "\n" +
    "Taxa de serviço (10%): " + formatarDinheiro(taxa) + "\n" +
    "Total: " + formatarDinheiro(total));

  if (confirmar(nomeUsuario + ", confirma a reserva?")) {
    quartos[quarto - 1] = true;
    reservas.push({ hospede: hospede, quarto: quarto, dias: dias, total: total });
    alert("Reserva efetuada com sucesso.");
  } else {
    alert("Reserva não efetuada.");
  }

  mostrarMapa();
}
