const prompt = require("prompt-sync")();

const number = Number(prompt("Digite um número: "));

let resultado = number;
let i = 1;
do {
  resultado = resultado * i;
  console.log(resultado, i);
  i++;
} while (i < number);
console.log(resultado);

// CRESCENTE
