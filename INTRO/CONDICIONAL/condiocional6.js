const prompt = require("prompt-sync")();
const ano = Number(prompt("Digite um ano qualquer: "));
const resto = ano % 4 && ano % 400;
if (resto == 0) {
  console.log("É um ano bissexto");
} else {
  console.log("É um ano normal");
}
