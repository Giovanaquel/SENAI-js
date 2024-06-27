const prompt = require("prompt-sync")();

const user = "balls";
const senha = 123;

while (true) {
  const usuario = prompt("Digite o usuário: ");
  const pin = Number(prompt("Digite a senha: "));

  if (usuario == user && senha == pin) {
    console.log("Login realizado com sucesso!");
    break;
  } else {
    if (usuario !== user) {
      console.log("Usuário incorreto!");
    }
    if (senha !== pin) {
      console.log("Senha incorreta!");
    }
  }
}
