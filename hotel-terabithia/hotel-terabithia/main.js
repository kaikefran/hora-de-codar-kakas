// main.js - programa principal: login e menu (precisa ser o último script)

function erroMenu() {
  erro("Opção inválida! Digite um número de 1 a 7.");
}

function inicio() {
  if (fazerLogin() == false) {
    return; // senha errada 3 vezes
  }

  let opcao = "";
  while (opcao != "7") {
    opcao = lerTexto("MENU PRINCIPAL\n" +
      "1 - Reservas de Quartos\n" +
      "2 - Cadastro de Hóspedes\n" +
      "3 - Eventos\n" +
      "4 - Ar-Condicionado\n" +
      "5 - Abastecimento\n" +
      "6 - Relatórios Operacionais\n" +
      "7 - Sair");

    // depois de cada subprograma, o while volta ao menu sozinho
    switch (opcao) {
      case "1": reservarQuarto(); break;
      case "2": menuHospedes(); break;
      case "3": reservarEvento(); break;
      case "4": compararArCondicionado(); break;
      case "5": compararCombustivel(); break;
      case "6": mostrarRelatorios(); break;
      case "7": break;
      default: erroMenu();
    }
  }

  alert("Muito obrigado e até logo, " + nomeUsuario + ".");
}

inicio();
