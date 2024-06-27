const prompt = require("prompt-sync")();

const codigo = Number(prompt("Digite o código do produto: "));

switch (true) {
  case codigo === 101:
    console.log("Maçã: R$3/kg");
    break;
  case codigo === 102:
    console.log("Melancia: R$5/kg");
    break;
  case codigo === 103:
    console.log("Morango: R$20/kg");
    break;
  default:
    console.log("Produto não registrado");
}
