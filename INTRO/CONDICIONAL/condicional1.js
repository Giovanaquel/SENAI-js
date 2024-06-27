const prompt = require("prompt-sync")();
const idade = Number(prompt("Digite a sua idade: "));
if (idade >= 18) {
  console.log("Apto á dirigir");
} else {
  console.log("Não possui idade o suficiente para dirigir");
}
