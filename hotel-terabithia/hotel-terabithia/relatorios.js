// relatorios.js - Subprograma 6: Relatórios Operacionais

function mostrarRelatorios() {
  // quartos ocupados
  let ocupados = 0;
  for (let i = 0; i < 20; i++) {
    if (quartos[i] == true) {
      ocupados++;
    }
  }

  // receita de hospedagem
  let receitaHospedagem = 0;
  for (let i = 0; i < reservas.length; i++) {
    receitaHospedagem = receitaHospedagem + reservas[i].total;
  }

  // receita de eventos
  let receitaEventos = 0;
  for (let i = 0; i < eventos.length; i++) {
    receitaEventos = receitaEventos + eventos[i].total;
  }

  let taxaOcupacao = ocupados / 20 * 100;

  alert("RELATÓRIO OPERACIONAL - " + NOME_HOTEL + "\n" +
    "------------------------------------------\n" +
    "Reservas confirmadas:    " + reservas.length + "\n" +
    "Taxa de ocupação:        " + taxaOcupacao.toFixed(1).replace(".", ",") + "% (" + ocupados + "/20)\n" +
    "Hóspedes cadastrados:    " + nomesHospedes.length + "\n" +
    "Eventos confirmados:     " + eventos.length + "\n" +
    "Receita de hospedagem:   " + formatarDinheiro(receitaHospedagem) + "\n" +
    "Receita de eventos:      " + formatarDinheiro(receitaEventos) + "\n" +
    "Receita total:           " + formatarDinheiro(receitaHospedagem + receitaEventos));
}
