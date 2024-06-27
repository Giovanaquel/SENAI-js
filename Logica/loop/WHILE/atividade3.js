const prompt = require("prompt-sync")();

let i = 0;
let menor;
let maior;

while (i < 10) {
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
}
console.log("Maior número: ", maior);
console.log("Menor número: ", menor);
