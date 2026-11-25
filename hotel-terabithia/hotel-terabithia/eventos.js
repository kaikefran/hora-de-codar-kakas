// eventos.js - Subprograma 3: Eventos (partes A, B, C, D e E)

function reservarEvento() {
  // ---------- Parte A: capacidade e auditório ----------
  let convidados = lerNumero("[Eventos]\nNúmero de convidados:");
  if (!ehInteiro(convidados) || convidados < 1 || convidados > 350) {
    erro("Número de convidados inválido");
    return;
  }

  let auditorio = "Colorado";
  let cadeirasExtras = 0;
  if (convidados <= 150) {
    auditorio = "Laranja";
  } else if (convidados <= 220) {
    auditorio = "Laranja";
    cadeirasExtras = convidados - 150;
  }

  let textoAuditorio = "Auditório selecionado: " + auditorio;
  if (cadeirasExtras > 0) {
    textoAuditorio = textoAuditorio + " (" + cadeirasExtras + " cadeiras adicionais)";
  }
  alert(textoAuditorio);

  // ---------- Parte B: agenda e disponibilidade ----------
  let dia = lerTexto("Dia da semana (minúsculo e sem acento, ex.: terca):");
  let diasValidos = ["segunda", "terca", "quarta", "quinta", "sexta", "sabado", "domingo"];
  if (diasValidos.indexOf(dia) == -1) {
    erro("Dia da semana inválido");
    return;
  }

  let horaInicial = lerNumero("Hora inicial (número inteiro):");
  if (!ehInteiro(horaInicial)) {
    erro("A hora inicial precisa ser um número inteiro");
    return;
  }

  let duracao = lerNumero("Duração do evento em horas (1 a 12):");
  if (!ehInteiro(duracao) || duracao < 1 || duracao > 12) {
    erro("A duração precisa ser um número inteiro de 1 a 12");
    return;
  }

  // segunda a sexta: 7h às 23h / sábado e domingo: 7h às 15h
  let fechamento = 23;
  if (dia == "sabado" || dia == "domingo") {
    fechamento = 15;
  }
  let horaFinal = horaInicial + duracao;
  if (horaInicial < 7 || horaFinal > fechamento) {
    erro("Auditório indisponível. O evento precisa ficar entre 7h e " + fechamento + "h.");
    return;
  }

  let empresa = lerTexto("Nome da empresa:");
  if (empresa == "") {
    erro("Você precisa digitar o nome da empresa");
    return;
  }
  alert("Auditório reservado para " + empresa + ": " + dia + " às " + horaInicial + "hs");

  // ---------- Parte C: garçons ----------
  // 1 garçom para cada 12 convidados (arredonda pra cima) + 1 a cada 2 horas
  let garcons = Math.ceil(convidados / 12) + Math.floor(duracao / 2);
  let custoGarcons = garcons * duracao * 10.5;

  // ---------- Parte D: buffet ----------
  let cafe = convidados * 0.2;
  let agua = convidados * 0.5;
  let salgados = convidados * 7;
  let custoBuffet = (cafe * 0.80) + (agua * 0.40) + (salgados / 100 * 34);

  let totalEvento = custoGarcons + custoBuffet;

  // ---------- Parte E: relatório e decisão ----------
  alert("RELATÓRIO DO EVENTO\n" +
    "Auditório: " + auditorio + "\n" +
    "Empresa: " + empresa + "\n" +
    "Dia: " + dia + " | Início: " + horaInicial + "h | Fim: " + horaFinal + "h\n" +
    "Convidados: " + convidados + " | Garçons: " + garcons + " | Duração: " + duracao + "h\n\n" +
    "Custo com garçons: " + formatarDinheiro(custoGarcons) + "\n" +
    "Buffet: café " + cafe.toFixed(1).replace(".", ",") + " L, água " + agua.toFixed(1).replace(".", ",") + " L, salgados " + salgados + " un\n" +
    "Custo do buffet: " + formatarDinheiro(custoBuffet) + "\n\n" +
    "Total do evento: " + formatarDinheiro(totalEvento));

  if (confirmar("Confirmar reserva?")) {
    eventos.push({ empresa: empresa, auditorio: auditorio, dia: dia, inicio: horaInicial, fim: horaFinal, total: totalEvento });
    alert("Reserva efetuada com sucesso.");
  } else {
    alert("Reserva não efetuada.");
  }
}
