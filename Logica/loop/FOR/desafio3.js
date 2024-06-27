const prompt = require("prompt-sync")();

let media;
let x = 0;

for (let i = 0; i < 10; i++) {
  const numero = Number(prompt("Digite um número maior que 0: "));
  {
    x = x + numero;
    media = x / 10;
  }
}

console.log("A média dos números é: ", media);
