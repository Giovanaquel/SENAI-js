const prompt = require("prompt-sync")();

const nota1 = Number(prompt("Digite a primeira nota: "));
const nota2 = Number(prompt("Digite a segunda nota: "));
const nota3 = Number(prompt("Digite a terceira nota: "));

const media = (nota1 + nota2 + nota3) / 3;
console.log(media);

if (media < 4) {
  console.log("Reprovado");
} else if (media >= 4 && media < 7) {
  console.log("Recuperação");
} else {
  console.log("Aprovado");
}
