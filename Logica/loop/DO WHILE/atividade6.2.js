const prompt = require("prompt-sync")();

const number = Number(prompt("Digite um número: "));

let result = number;
let i = number - 1;

do {
  result = result * i;
  console.log(result, i);
  i--;
} while (i >= 1);
console.log(result);

// DECRESCENTE
