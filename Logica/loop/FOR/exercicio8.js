const prompt = require("prompt-sync")();

const numero = Number(prompt("Digite um número: "));
let contador = 0;
for (let i = 1; i <= numero; i++) {
  if (numero % i == 0) {
    contador++;
  }
}
if (contador == 2) {
  console.log("É PRIMO");
} else {
  console.log("NÃO É PRIMO");
}
