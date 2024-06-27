const prompt = require("prompt-sync")();
let user = "giovana";
let senha = Number("123");
const user2 = prompt("Digite o usuario: ");
const senha2 = Number(prompt("Digite a senha: "));

console.log(user2);
console.log(senha2);

if (user2 != user) {
  console.log("usuário incorreto");
} else {
  if (senha2 == senha) {
    console.log("acesso liberado");
  } else {
    console.log("acesso negado");
  }
}
