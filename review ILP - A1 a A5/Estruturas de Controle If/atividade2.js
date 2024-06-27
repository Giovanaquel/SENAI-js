const prompt = require("prompt-sync")();

const idade = Number(prompt("Digite sua idade: "));

if (idade > 18) {
  console.log("O usuário é maior de idade");
} else {
  console.log("O usuário é menor de idade");
}
