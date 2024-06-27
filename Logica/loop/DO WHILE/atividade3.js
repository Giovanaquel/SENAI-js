const prompt = require("prompt-sync")();

let i = 0;
let menor;
let maior;

do {
  const numero = Number(prompt("Digite um número: "));
  if (i == 0) {
    menor = numero;
    maior = numero;
  } else {
    if (numero > maior) {
      maior = numero;
    }

    if (numero < menor) {
      menor = numero;
    }
  }
  i++;
} while (i < 10);

console.log("Maior número: ", maior);
console.log("Menor número: ", menor);
