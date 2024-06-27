const prompt = require("prompt-sync")();

let i = 1;
let fatorial = 0;

const n = Number(prompt("Digite um número: "));

do {
  fatorial = n * (n - 1) * (n - 2);
  console.log("O fatorial desse número é: ", fatorial);
  i++;
  break;
} while (true);
