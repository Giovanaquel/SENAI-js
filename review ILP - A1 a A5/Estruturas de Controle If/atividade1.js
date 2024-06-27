const prompt = require("prompt-sync")();

const numero = prompt("Digite um número: ");

if (numero > 5) {
  console.log("O número é maior que 5");
} else {
  console.log("O número é menor que 5");
}
