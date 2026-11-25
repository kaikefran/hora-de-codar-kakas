// dados.js - dados guardados em memória
// Estas variáveis são globais de propósito: não existe banco de dados,
// então todos os módulos precisam enxergar as mesmas listas.

const NOME_HOTEL = "Hotel Terabithia";
const SENHA = "2678";

let nomeUsuario = "";

// quartos: false = livre, true = ocupado (20 quartos)
let quartos = [];
for (let i = 0; i < 20; i++) {
  quartos.push(false);
}

let reservas = [];       // cada reserva: { hospede, quarto, dias, total }
let nomesHospedes = [];  // nomes cadastrados
let datasHospedes = [];  // data e hora de cada cadastro (mesma posição do nome)
let eventos = [];        // cada evento: { empresa, auditorio, dia, inicio, fim, total }
