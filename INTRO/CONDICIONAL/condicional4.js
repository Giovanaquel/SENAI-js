const prompt = require("prompt-sync")();
const direçao = prompt("Digite qual direçâo você deseja ir: ");

if (direçao == "frente") {
  console.log("Você está indo para a frente");
} else if (direçao == "tras") {
  console.log("Você está indo para trás");
} else if (direçao == "direita") {
  console.log("Você está indo para a direita");
} else if (direçao == "esquerda") {
  console.log("Você está indo para a esquerda");
}
