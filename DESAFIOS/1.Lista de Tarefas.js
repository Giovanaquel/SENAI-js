const prompt = require("prompt-sync")();

/*
  Exemplo do Objeto da Tarefa
  {
    id: number,
    tarefa: string,
    marcada: boolean
  }
*/

const lista = [];

console.clear();

function mostrarLista() {
  // escreva seu código aqui
  console.log(lista);
}

function adicionarTarefa() {
  // escreva seu código aqui
  const tarefa = prompt("Digite a tarefa para adiciona-la: ");

  lista.push({
    id: lista.length + 1,
    tarefa: tarefa,
    marcada: false,
  });
}

function marcarTarefa() {
  // escreva seu código aqui
  const id = Number(prompt("Digite o id de uma tarefa: "));

  for (let i = 0; i < lista.length; i++) {
    if (lista[i].id == id) {
      lista[i].marcada = true;
    }
  }
}

function removerTarefa() {
  // escreva seu código aqui
  const id = Number(prompt("Digite o id de uma tarefa que deseja remover: "));

  for (let i = 0; i < lista.length; i++) {
    if (lista[i].id == id) {
      lista.slice(i, 1);
    }
  }
}

function continuar() {
  prompt.hide("pressione Enter para continuar ...");
}

while (true) {
  console.log(
    `MENU
    1 - ver lista
    2 - adicionar tarefa
    3 - marcar tarefa
    4 - remover tarefa
    5 - encerrar`
  );

  const option = Number(prompt("Digite a opção: "));

  if (option === 5) {
    console.clear();
    console.log("Programa encerrado!");
    break;
  }

  console.clear();

  switch (option) {
    case 1:
      mostrarLista();
      continuar();
      break;
    case 2:
      adicionarTarefa();
      continuar();
      break;
    case 3:
      marcarTarefa();
      continuar();
      break;
    case 4:
      removerTarefa();
      continuar();
      break;
    default:
      console.log("Opção inválida");
      continuar();
  }

  console.clear();
}
