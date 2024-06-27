const prompt = require("prompt-sync")();

let contador = 0;
let i = 1;

const x = Number(prompt("Digite um número: "));

do {
  if (x % i == 0) {
    contador++;
  }
  i++;
} while (i <= x);

if (contador == 2) {
  console.log("É PRIMO");
} else {
  console.log("NÃO É PRIMO");
}
