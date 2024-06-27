const prompt = require("prompt-sync")();

const letra = prompt("Digite uma letra: ");

switch (letra) {
  case "a":
    console.log("Letra a digitada");
    break;
  case "b":
    console.log("Letra b digitada");
    break;
  default:
    console.log(
      "o prazo para as atividades está entre a letra G e K do teclado"
    );
}
